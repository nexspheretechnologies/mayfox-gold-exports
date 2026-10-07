import type { KycDocument, LeadRecord } from "../lib/lead-schema";

const NOTIFY_TO = process.env.LEAD_NOTIFY_EMAIL || "sales@mayfox.co.ke";
const FROM = process.env.RESEND_FROM || "Mayfox Trade Desk <onboarding@resend.dev>";
const SITE_NAME = "Mayfox Gold and Precious Metals Kenya";

// Every value below can originate from a visitor, so nothing reaches HTML or a
// subject line without escaping.
export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function lines(rows: Array<[string, unknown]>): string {
  return rows
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#8a8a8a;font-size:12px;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#111;font-size:14px">${esc(v)}</td></tr>`,
    )
    .join("");
}

function layout(heading: string, body: string, footer: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f6f5f2;padding:24px;font-family:Segoe UI,Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;border:1px solid #e4e1da">
<tr><td style="padding:22px 26px;border-bottom:3px solid #bc8100">
<span style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#bc8100">${esc(SITE_NAME)}</span>
<h1 style="margin:8px 0 0;font-size:20px;color:#111">${esc(heading)}</h1></td></tr>
<tr><td style="padding:22px 26px">${body}</td></tr>
<tr><td style="padding:16px 26px;border-top:1px solid #e4e1da;color:#8a8a8a;font-size:12px">${esc(footer)}</td></tr>
</table></body></html>`;
}

function table(rows: Array<[string, unknown]>): string {
  return `<table role="presentation" width="100%">${lines(rows)}</table>`;
}

async function post(payload: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, error: "RESEND_API_KEY is not set" };
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, error: `Resend ${res.status}: ${(await res.text()).slice(0, 200)}` };
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

export async function notifySales(lead: LeadRecord): Promise<{ ok: boolean; error?: string }> {
  const isQuote = lead.kind !== "contact";
  const rows: Array<[string, unknown]> = [
    ["Reference", lead.reference],
    ["Type", lead.kind],
    ["Name", lead.name],
    ["Company", lead.company],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Country", lead.country],
    ["Destination", lead.destination],
    ["Product", lead.product],
    ["Purity", lead.purity],
    ["Quantity (kg)", lead.quantityKg],
    ["Indicative (USD)", lead.indicativeUsd],
    ["Delivery", lead.delivery],
    ["Topic", lead.topic],
    ["Source page", lead.sourcePage],
    ["Notes", lead.notes ?? lead.message],
  ];
  return post({
    from: FROM,
    to: [NOTIFY_TO],
    replyTo: lead.email,
    subject: `${isQuote ? "Quote request" : "Inquiry"} ${lead.reference} — ${lead.company || lead.name}`,
    html: layout(
      isQuote ? "New quote request" : "New website inquiry",
      table(rows),
      `Received ${new Date(lead.createdAt).toUTCString()} · Reply directly to ${lead.email}`,
    ),
  });
}

export async function confirmToBuyer(lead: LeadRecord): Promise<{ ok: boolean; error?: string }> {
  const hours = "one business hour";
  return post({
    from: FROM,
    to: [lead.email],
    subject: `We have your request — reference ${lead.reference}`,
    html: layout(
      "Thank you for contacting Mayfox",
      `<p style="margin:0 0 16px;color:#111;font-size:14px">Hello ${esc(lead.name)},</p>
<p style="margin:0 0 16px;color:#111;font-size:14px">Your request has reached our trade desk and is logged under reference
<strong>${esc(lead.reference)}</strong>. A senior trader will respond within ${hours} (08:00–20:00 EAT, Monday to Saturday)
with indicative pricing, availability and next steps.</p>
<p style="margin:0 0 16px;color:#111;font-size:14px">Please keep the reference for any follow-up. You can check its status
at any time on our inquiry tracking page.</p>
${table([
  ["Reference", lead.reference],
  ["Product", lead.product],
  ["Quantity (kg)", lead.quantityKg],
  ["Destination", lead.destination],
])}`,
      `${SITE_NAME} · Rhapta Road, Westlands, Nairobi · +254 754 979 755 · This message is a receipt, not a binding offer.`,
    ),
  });
}

export async function sendNewsletterWelcome(email: string): Promise<{ ok: boolean; error?: string }> {
  return post({
    from: FROM,
    to: [email],
    subject: "Your Mayfox East Africa market note",
    html: layout(
      "You are on the list",
      `<p style="margin:0 0 16px;color:#111;font-size:14px">You will receive our East African gold market note — sourcing,
logistics and regulatory developments affecting doré and nugget buyers.</p>
<p style="margin:0;color:#111;font-size:14px">Every message carries a one-click unsubscribe link.</p>`,
      `${SITE_NAME} · Rhapta Road, Westlands, Nairobi`,
    ),
  });
}

export async function notifyKycUpload(
  lead: LeadRecord,
  document: KycDocument,
): Promise<{ ok: boolean; error?: string }> {
  const sizeMb = (document.sizeBytes / 1024 / 1024).toFixed(2);
  return post({
    from: FROM,
    to: [NOTIFY_TO],
    replyTo: lead.email,
    subject: `KYC document ${document.fileName} — ${lead.reference}`,
    html: layout(
      "New KYC document received",
      `<p style="margin:0 0 16px;color:#111;font-size:14px">A buyer uploaded a compliance document against an existing inquiry.
Open it from the trade desk inbox (Documents section of the lead row); files are never attached to email.</p>
${table([
  ["Reference", lead.reference],
  ["Buyer", `${lead.company ? `${lead.company} — ` : ""}${lead.name}`],
  ["Email", lead.email],
  ["Phone", lead.phone],
  ["Status", lead.status],
  ["File", document.fileName],
  ["Type", document.contentType],
  ["Size", `${sizeMb} MB`],
])}`,
      `${SITE_NAME} · Private bucket kyc-documents · Reply directly to ${lead.email}`,
    ),
  });
}
