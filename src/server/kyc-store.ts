import { supabaseAdmin } from "../integrations/supabase/client.server";
import type { Database } from "../integrations/supabase/types";
import { KYC_ALLOWED_TYPES, KYC_MAX_BYTES, type KycDocument } from "../lib/lead-schema";
import { findInquiry } from "./lead-store";

type KycRow = Database["public"]["Tables"]["kyc_documents"]["Row"];
type KycInsert = Database["public"]["Tables"]["kyc_documents"]["Insert"];

// A closed or spam inquiry has no reason to receive files, so intake stops there.
const INTAKE_CLOSED = ["closed_won", "closed_lost", "spam"];
const MAX_FILES_PER_REFERENCE = 12;
const MAX_UPLOADS_PER_IP = 20;
const IP_WINDOW_MS = 60 * 60 * 1000;

export function kycBucket(): string {
  return (process.env.KYC_BUCKET ?? "kyc-documents").trim() || "kyc-documents";
}

export function acceptsKycFile(input: { fileName: string; sizeBytes: number; contentType: string }) {
  if (input.sizeBytes <= 0) throw new Error("That file is empty.");
  if (input.sizeBytes > KYC_MAX_BYTES) throw new Error("Files are limited to 15 MB each.");
  if (!(KYC_ALLOWED_TYPES as readonly string[]).includes(input.contentType)) {
    throw new Error("Please upload PDF, JPEG or PNG files only.");
  }
  if (input.fileName.trim().length === 0) throw new Error("The file has no name.");
}

// Storage keys must not carry the caller's path separators or odd characters: the
// key is built here, never taken from the browser.
export function sanitizeFileName(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "document";
  const cleaned = base
    .normalize("NFKD")
    .replace(/[^A-Za-z0-9._ -]/g, "_")
    .replace(/\s+/g, "-")
    .slice(0, 80);
  return cleaned.replace(/^[.-]+/, "") || "document";
}

function fromKycRow(row: KycRow): KycDocument {
  return {
    id: String(row.id),
    reference: String(row.reference),
    fileName: String(row.file_name),
    contentType: String(row.content_type),
    sizeBytes: Number(row.size_bytes),
    uploadedBy: row.uploaded_by === "desk" ? "desk" : "buyer",
    uploadedAt: String(row.created_at),
  };
}

async function countForReference(reference: string): Promise<number> {
  const { count, error } = await supabaseAdmin
    .from("kyc_documents")
    .select("id", { count: "exact", head: true })
    .eq("reference", reference);
  if (error) throw new Error(`Could not check existing documents: ${error.message}`);
  return count ?? 0;
}

async function countRecentUploadsByIp(ipHash: string): Promise<number> {
  const since = new Date(Date.now() - IP_WINDOW_MS).toISOString();
  const { count, error } = await supabaseAdmin
    .from("kyc_documents")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);
  if (error) return 0;
  return count ?? 0;
}

export type UploadSlot = {
  bucket: string;
  path: string;
  token: string;
  reference: string;
  product: string | null;
};

// The browser never holds the service-role key and never chooses where a file lands:
// it is handed one signed slot for one object, and only after the inquiry reference
// and its email address have both matched a live lead.
export async function createUploadSlot(input: {
  reference: string;
  email: string;
  fileName: string;
  sizeBytes: number;
  contentType: string;
  ipHash: string;
}): Promise<UploadSlot> {
  acceptsKycFile(input);

  const lead = await findInquiry(input.reference, input.email);
  if (!lead) {
    throw new Error("No inquiry matches that reference and email address. Check both, exactly as issued.");
  }
  if (INTAKE_CLOSED.includes(lead.status)) {
    throw new Error("This inquiry is closed, so document intake is not open for it. Contact the trade desk.");
  }

  if ((await countRecentUploadsByIp(input.ipHash)) >= MAX_UPLOADS_PER_IP) {
    throw new Error("Too many uploads from this connection in the last hour. Please call the trade desk.");
  }
  if ((await countForReference(input.reference)) >= MAX_FILES_PER_REFERENCE) {
    throw new Error(`This inquiry already has ${MAX_FILES_PER_REFERENCE} documents on file. Email the desk for more.`);
  }

  const path = `${input.reference}/${Date.now()}-${sanitizeFileName(input.fileName)}`;
  const { data, error } = await supabaseAdmin.storage.from(kycBucket()).createSignedUploadUrl(path);
  if (error || !data?.token) {
    throw new Error(
      `Document storage is not available (${error?.message ?? "no upload token returned"}). ` +
        "Check that the kyc-documents bucket exists and migrations/0002 has been applied, or email sales@mayfox.co.ke.",
    );
  }

  return {
    bucket: kycBucket(),
    path: data.path ?? path,
    token: data.token,
    reference: lead.reference,
    product: lead.product,
  };
}

export async function recordUpload(input: {
  reference: string;
  email: string;
  path: string;
  fileName: string;
  sizeBytes: number;
  contentType: string;
  ipHash: string;
}): Promise<KycDocument> {
  const lead = await findInquiry(input.reference, input.email);
  if (!lead) throw new Error("No inquiry matches that reference and email address.");

  // Objects are only ever addressable under the caller's own reference prefix, so a
  // mismatch here means the slot was used for something it was not issued for.
  if (!input.path.startsWith(`${lead.reference}/`)) throw new Error("That upload path does not match the reference.");

  const row: KycInsert = {
    reference: lead.reference,
    file_path: input.path,
    file_name: input.fileName.slice(0, 120),
    content_type: input.contentType,
    size_bytes: input.sizeBytes,
    uploaded_by: "buyer",
    ip_hash: input.ipHash,
  };
  const { data, error } = await supabaseAdmin.from("kyc_documents").insert(row).select().single();
  if (error) throw new Error(`Could not record the document: ${error.message}`);
  return fromKycRow(data);
}

export async function listDocuments(reference: string, email: string): Promise<KycDocument[]> {
  const lead = await findInquiry(reference, email);
  if (!lead) throw new Error("No inquiry matches that reference and email address.");
  const { data, error } = await supabaseAdmin
    .from("kyc_documents")
    .select("*")
    .eq("reference", lead.reference)
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Could not list documents: ${error.message}`);
  return (data ?? []).map(fromKycRow);
}

// Staff-only: the trade desk reads buyer files through a short-lived signed URL, so
// the bucket never becomes public and a link expires rather than circulating.
export async function staffDownloadUrls(reference: string) {
  const { data, error } = await supabaseAdmin
    .from("kyc_documents")
    .select("*")
    .eq("reference", reference)
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Could not list documents: ${error.message}`);
  const rows = (data ?? []).map(fromKycRow);
  const signed = await Promise.all(
    (data ?? []).map(async (row) => {
      const { data: url, error: urlError } = await supabaseAdmin.storage
        .from(kycBucket())
        .createSignedUrl(String(row.file_path), 5 * 60);
      return urlError ? null : (url?.signedUrl ?? null);
    }),
  );
  return rows.map((document, index) => ({ ...document, url: signed[index] }));
}
