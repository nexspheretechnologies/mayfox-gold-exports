import { supabaseAdmin } from "../integrations/supabase/client.server";
import type { Database } from "../integrations/supabase/types";
import type { LeadInput, LeadRecord, LeadStatus } from "../lib/lead-schema";

type LeadRow = Database["public"]["Tables"]["leads"]["Row"];
type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];
type LeadUpdate = Database["public"]["Tables"]["leads"]["Update"];

function toRow(input: LeadInput, meta: { ipHash: string; userAgent: string }, reference: string): LeadInsert {
  const common = {
    reference,
    kind: input.kind,
    name: input.name,
    email: input.email,
    phone: input.phone ?? null,
    company: input.company ?? null,
    country: input.country ?? null,
    source_page: input.sourcePage ?? null,
    ip_hash: meta.ipHash,
    user_agent: meta.userAgent.slice(0, 300),
  };
  if (input.kind === "contact") {
    return { ...common, topic: input.topic ?? null, message: input.message, notes: input.message };
  }
  if (input.kind === "calculator") {
    return {
      ...common,
      product: input.product ?? null,
      purity: input.purity ?? null,
      quantity_kg: input.quantityKg,
      indicative_usd: input.indicativeUsd,
    };
  }
  return {
    ...common,
    destination: input.destination ?? null,
    product: input.product ?? null,
    purity: input.purity ?? null,
    quantity_kg: input.quantityKg ?? null,
    delivery: input.delivery ?? null,
    notes: input.notes ?? null,
  };
}

const REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function makeReference(): string {
  let suffix = "";
  for (let i = 0; i < 5; i++) {
    suffix += REFERENCE_ALPHABET[Math.floor(Math.random() * REFERENCE_ALPHABET.length)];
  }
  return `MF-${new Date().getFullYear()}-${suffix}`;
}

function fromRow(row: LeadRow): LeadRecord {
  return {
    id: String(row.id),
    reference: String(row.reference),
    kind: row.kind as LeadInput["kind"],
    status: row.status as LeadStatus,
    name: String(row.name ?? ""),
    email: String(row.email ?? ""),
    phone: (row.phone as string) ?? null,
    company: (row.company as string) ?? null,
    country: (row.country as string) ?? null,
    destination: (row.destination as string) ?? null,
    product: (row.product as string) ?? null,
    purity: (row.purity as string) ?? null,
    quantityKg: row.quantity_kg == null ? null : Number(row.quantity_kg),
    indicativeUsd: row.indicative_usd == null ? null : Number(row.indicative_usd),
    delivery: (row.delivery as string) ?? null,
    topic: (row.topic as string) ?? null,
    notes: (row.notes as string) ?? null,
    message: (row.message as string) ?? null,
    sourcePage: (row.source_page as string) ?? null,
    shipmentRef: (row.shipment_ref as string) ?? null,
    carrier: (row.carrier as string) ?? null,
    stageNote: (row.stage_note as string) ?? null,
    createdAt: String(row.created_at),
  };
}

export async function insertLead(input: LeadInput, meta: { ipHash: string; userAgent: string }) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const reference = makeReference();
    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert(toRow(input, meta, reference))
      .select()
      .single();
    if (!error) return fromRow(data);
    // Only a reference collision is worth retrying with a new code.
    if (error.code !== "23505") throw new Error(`Lead storage failed: ${error.message}`);
  }
  throw new Error("Could not allocate an inquiry reference. Please try again.");
}

export async function findInquiry(reference: string, email: string) {
  const { data, error } = await supabaseAdmin
    .from("leads")
    .select("*")
    .eq("reference", reference)
    .eq("email", email)
    .maybeSingle();
  if (error) throw new Error(`Lookup failed: ${error.message}`);
  return data ? fromRow(data) : null;
}

export async function listLeads(opts: { status?: LeadStatus; search?: string; limit: number }) {
  let query = supabaseAdmin
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(opts.limit);
  if (opts.status) query = query.eq("status", opts.status);
  if (opts.search) {
    const term = `%${opts.search.replace(/[,%]/g, "")}%`;
    query = query.or(`reference.ilike.${term},email.ilike.${term},name.ilike.${term},company.ilike.${term}`);
  }
  const { data, error } = await query;
  if (error) throw new Error(`Lead list failed: ${error.message}`);
  return (data ?? []).map(fromRow);
}

export async function updateLead(
  reference: string,
  patch: { status?: LeadStatus; stageNote?: string; shipmentRef?: string; carrier?: string },
) {
  const row: LeadUpdate = { updated_at: new Date().toISOString() };
  if (patch.status) row.status = patch.status;
  if (patch.stageNote !== undefined) row.stage_note = patch.stageNote;
  if (patch.shipmentRef !== undefined) row.shipment_ref = patch.shipmentRef;
  if (patch.carrier !== undefined) row.carrier = patch.carrier;
  const { data, error } = await supabaseAdmin.from("leads").update(row).eq("reference", reference).select().single();
  if (error) throw new Error(`Lead update failed: ${error.message}`);
  return fromRow(data);
}

export async function countRecentByIp(ipHash: string, windowMs: number) {
  const since = new Date(Date.now() - windowMs).toISOString();
  const { data, error } = await supabaseAdmin
    .from("leads")
    .select("id")
    .eq("ip_hash", ipHash)
    .gte("created_at", since);
  if (error) return 0;
  return (data ?? []).length;
}

export async function addSubscriber(email: string, sourcePage: string | null) {
  const { error } = await supabaseAdmin.from("newsletter_subscribers").upsert({ email, source_page: sourcePage });
  if (error) throw new Error(`Subscription failed: ${error.message}`);
}

export function staffEmails(): string[] {
  return (process.env.LEAD_STAFF_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

// Shared by the lead and KYC server functions: the caller's real IP comes from the
// proxy header, never from the payload, so a visitor cannot spoof their way past the
// rate limit. The hash keeps the stored value non-identifying.
export async function requestMeta() {
  const { getRequest } = await import("@tanstack/react-start/server");
  const request = getRequest();
  const forwarded = request.headers.get("x-forwarded-for") ?? request.headers.get("cf-connecting-ip") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || "unknown";
  const userAgent = request.headers.get("user-agent") ?? "";
  return { ip, userAgent };
}

export async function hashedIp(ip: string) {
  const salt = process.env.IP_HASH_SALT ?? "mayfox";
  const { createHash } = await import("node:crypto");
  return createHash("sha256").update(`${ip}:${salt}`).digest("hex").slice(0, 32);
}

