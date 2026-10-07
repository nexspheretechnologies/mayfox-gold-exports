import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "../integrations/supabase/auth-middleware";
import { KYC_MAX_BYTES, type KycDocument } from "./lead-schema";

// Document intake is keyed to the inquiry itself: the buyer proves they own the
// reference by supplying the same reference + email pair the tracking page uses.
// Files land in a private bucket through a single-use signed slot, and the row is
// written only after the object is in storage.
const REFERENCE = /^MF-\d{4}-[A-Z2-9]{5}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function verifiedPair(raw: Record<string, unknown>) {
  const reference = String(raw.reference ?? "").trim().toUpperCase();
  const email = String(raw.email ?? "").trim().toLowerCase();
  if (!REFERENCE.test(reference)) throw new Error("Enter the reference exactly as issued, e.g. MF-2026-AB3CD.");
  if (!EMAIL.test(email)) throw new Error("Enter the email address used on the inquiry.");
  return { reference, email };
}

export type KycSlot = {
  bucket: string;
  path: string;
  token: string;
  reference: string;
};

export const startKycUpload = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as Record<string, unknown>;
    const pair = verifiedPair(record);
    const sizeBytes = Number(record.sizeBytes);
    if (!Number.isFinite(sizeBytes) || sizeBytes <= 0 || sizeBytes > KYC_MAX_BYTES) {
      throw new Error("Files must be between 1 byte and 15 MB.");
    }
    return {
      ...pair,
      fileName: String(record.fileName ?? "").slice(0, 200),
      sizeBytes: Math.floor(sizeBytes),
      contentType: String(record.contentType ?? "").slice(0, 100),
    };
  })
  .handler(async ({ data }): Promise<KycSlot> => {
    const { createUploadSlot } = await import("../server/kyc-store");
    const { requestMeta, hashedIp } = await import("../server/lead-store");
    const { ip } = await requestMeta();
    return createUploadSlot({ ...data, ipHash: await hashedIp(ip) });
  });

export const finishKycUpload = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as Record<string, unknown>;
    const pair = verifiedPair(record);
    const path = String(record.path ?? "").slice(0, 300);
    if (!path || path.includes("..") || !path.startsWith(`${pair.reference}/`)) {
      throw new Error("That upload path is not valid for this reference.");
    }
    const sizeBytes = Number(record.sizeBytes);
    return {
      ...pair,
      path,
      fileName: String(record.fileName ?? "").slice(0, 200),
      sizeBytes: Number.isFinite(sizeBytes) ? Math.floor(sizeBytes) : 0,
      contentType: String(record.contentType ?? "").slice(0, 100),
    };
  })
  .handler(async ({ data }): Promise<KycDocument> => {
    const { recordUpload } = await import("../server/kyc-store");
    const { findInquiry, requestMeta, hashedIp } = await import("../server/lead-store");
    const { ip } = await requestMeta();

    const document = await recordUpload({ ...data, ipHash: await hashedIp(ip) });

    // The file is already stored and recorded; a mail outage must not lose that,
    // so the notification failure is logged rather than thrown.
    const lead = await findInquiry(data.reference, data.email);
    if (lead) {
      const { notifyKycUpload } = await import("../server/email");
      const result = await notifyKycUpload(lead, document);
      if (!result.ok) console.error("[kyc] notification email failed", { reference: data.reference, error: result.error });
    }
    return document;
  });

export const listKycDocuments = createServerFn({ method: "GET" })
  .inputValidator((raw: unknown) => verifiedPair((raw ?? {}) as Record<string, unknown>))
  .handler(async ({ data }): Promise<KycDocument[]> => {
    const { listDocuments } = await import("../server/kyc-store");
    return listDocuments(data.reference, data.email);
  });

export const adminListKycDocuments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((raw: unknown) => {
    const record = (raw ?? {}) as Record<string, unknown>;
    const reference = String(record.reference ?? "").trim().toUpperCase();
    if (!REFERENCE.test(reference)) throw new Error("Not a Mayfox reference.");
    return { reference };
  })
  .handler(async ({ data, context }) => {
    const { staffEmails } = await import("../server/lead-store");
    const allowed = staffEmails();
    const email = String((context.claims as { email?: string } | undefined)?.email ?? "").toLowerCase();
    if (allowed.length === 0) throw new Error("LEAD_STAFF_EMAILS is not configured, so no one may read documents.");
    if (!allowed.includes(email)) throw new Error("This account is not on the trade desk allowlist.");
    const { staffDownloadUrls } = await import("../server/kyc-store");
    return staffDownloadUrls(data.reference);
  });
