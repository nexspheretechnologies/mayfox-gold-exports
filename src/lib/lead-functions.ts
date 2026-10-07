import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "../integrations/supabase/auth-middleware";
import { leadInputSchema, type LeadStatus, type InquiryLookup } from "./lead-schema";

const MIN_FILL_MS = 2_500;
const IP_WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export type SubmitResult = { reference: string; status: LeadStatus; emailed: boolean };

async function handleSubmit(data: unknown): Promise<SubmitResult> {
  const input = leadInputSchema.parse(data);
  const { insertLead, countRecentByIp, requestMeta, hashedIp } = await import("../server/lead-store");
  const { ip, userAgent } = await requestMeta();

  if ((input.filledMs ?? 0) < MIN_FILL_MS) {
    throw new Error("Submission rejected: the form was completed too quickly.");
  }

  const ipHash = await hashedIp(ip);
  const recent = await countRecentByIp(ipHash, IP_WINDOW_MS);
  if (recent >= MAX_PER_WINDOW) {
    throw new Error("Too many requests from this connection. Please call the trade desk on +254 754 979 755.");
  }

  const lead = await insertLead(input, { ipHash, userAgent });

  // The inquiry is stored before any email is attempted; a mail-provider outage
  // must never cost the buyer their submission.
  const { notifySales, confirmToBuyer } = await import("../server/email");
  const [sales, buyer] = await Promise.all([notifySales(lead), confirmToBuyer(lead)]);
  if (!sales.ok || !buyer.ok) {
    console.error("[lead] email delivery incomplete", { reference: lead.reference, sales: sales.error, buyer: buyer.error });
  }

  return { reference: lead.reference, status: lead.status, emailed: sales.ok };
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadInputSchema)
  .handler(({ data }) => handleSubmit(data));

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as { email?: string; honeypot?: string; sourcePage?: string };
    if (record.honeypot) throw new Error("Subscription rejected.");
    const email = String(record.email ?? "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) throw new Error("Please enter a valid email address.");
    return { email, sourcePage: record.sourcePage ?? "" };
  })
  .handler(async ({ data }) => {
    const { addSubscriber } = await import("../server/lead-store");
    await addSubscriber(data.email, data.sourcePage || null);
    const { sendNewsletterWelcome } = await import("../server/email");
    const result = await sendNewsletterWelcome(data.email);
    return { ok: true, welcomed: result.ok };
  });

export const lookupInquiry = createServerFn({ method: "GET" })
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as { reference?: string; email?: string };
    const reference = String(record.reference ?? "").trim().toUpperCase();
    const email = String(record.email ?? "").trim().toLowerCase();
    if (!/^MF-\d{4}-[A-Z2-9]{5}$/.test(reference)) throw new Error("Enter the reference exactly as issued, e.g. MF-2026-AB3CD.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) throw new Error("Enter the email address used on the inquiry.");
    return { reference, email };
  })
  .handler(async ({ data }): Promise<InquiryLookup | null> => {
    const { findInquiry } = await import("../server/lead-store");
    const lead = await findInquiry(data.reference, data.email);
    if (!lead) return null;
    return {
      reference: lead.reference,
      status: lead.status,
      createdAt: lead.createdAt,
      stageNote: lead.stageNote ?? "",
      shipmentRef: lead.shipmentRef,
      carrier: lead.carrier,
    };
  });

const staffOnly = requireSupabaseAuth;

function assertStaff(context: { claims?: { email?: string } }) {
  const email = String(context.claims?.email ?? "").toLowerCase();
  return async () => {
    const { staffEmails } = await import("../server/lead-store");
    const allowed = staffEmails();
    if (allowed.length === 0) throw new Error("LEAD_STAFF_EMAILS is not configured, so no one may read the inbox.");
    if (!allowed.includes(email)) throw new Error("This account is not on the trade desk allowlist.");
    return email;
  };
}

export const adminListLeads = createServerFn({ method: "GET" })
  .middleware([staffOnly])
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as { status?: string; search?: string; limit?: number };
    return {
      status: record.status ? String(record.status) : undefined,
      search: record.search ? String(record.search).slice(0, 80) : undefined,
      limit: Math.min(Math.max(Number(record.limit ?? 100), 1), 250),
    };
  })
  .handler(async ({ data, context }) => {
    await assertStaff(context)();
    const { listLeads } = await import("../server/lead-store");
    return listLeads({ ...data, status: data.status as LeadStatus | undefined });
  });

export const adminUpdateLead = createServerFn({ method: "POST" })
  .middleware([staffOnly])
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as { reference: string; status?: LeadStatus; stageNote?: string; shipmentRef?: string; carrier?: string };
    if (!record.reference) throw new Error("Missing reference.");
    return record;
  })
  .handler(async ({ data, context }) => {
    await assertStaff(context)();
    const { updateLead } = await import("../server/lead-store");
    return updateLead(data.reference, data);
  });
