import { z } from "zod";

const emptyToUndefined = (v: unknown) => (v === "" || v == null ? undefined : v);
const optionalString = (max: number) =>
  z.preprocess(emptyToUndefined, z.string().trim().max(max).optional());
const optionalNumber = (max: number) =>
  z.preprocess(emptyToUndefined, z.coerce.number().positive().max(max).optional());

// Rejected server-side as well as in the DOM: a filled honeypot or a submission
// faster than a human can type is treated as a bot.
const antiBot = {
  honeypot: optionalString(0),
  filledMs: z.preprocess(emptyToUndefined, z.coerce.number().int().nonnegative().optional()),
  sourcePage: optionalString(200),
};

export const quoteLeadSchema = z.object({
  kind: z.literal("quote"),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(5).max(40),
  company: optionalString(160),
  country: z.string().trim().min(2).max(80),
  destination: optionalString(80),
  product: optionalString(80),
  purity: optionalString(60),
  quantityKg: optionalNumber(1_000_000),
  delivery: optionalString(60),
  notes: optionalString(4000),
  ...antiBot,
});

export const contactLeadSchema = z.object({
  kind: z.literal("contact"),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: optionalString(40),
  company: optionalString(160),
  country: optionalString(80),
  topic: optionalString(80),
  message: z.string().trim().min(10).max(4000),
  ...antiBot,
});

export const calculatorLeadSchema = z.object({
  kind: z.literal("calculator"),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: optionalString(40),
  company: optionalString(160),
  country: optionalString(80),
  product: optionalString(80),
  purity: optionalString(60),
  quantityKg: z.coerce.number().positive().max(1_000_000),
  indicativeUsd: z.coerce.number().nonnegative().max(100_000_000_000),
  ...antiBot,
});

export const leadInputSchema = z.discriminatedUnion("kind", [
  quoteLeadSchema,
  contactLeadSchema,
  calculatorLeadSchema,
]);

export type LeadInput = z.infer<typeof leadInputSchema>;

export const LEAD_STATUSES = [
  "new",
  "reviewed",
  "kyc_requested",
  "quoted",
  "in_contract",
  "shipped",
  "closed_won",
  "closed_lost",
  "spam",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  reviewed: "Reviewed",
  kyc_requested: "KYC requested",
  quoted: "Quoted",
  in_contract: "In contract",
  shipped: "Shipped",
  closed_won: "Closed won",
  closed_lost: "Closed lost",
  spam: "Spam",
};

export const PIPELINE_STATUSES: LeadStatus[] = [
  "new",
  "reviewed",
  "kyc_requested",
  "quoted",
  "in_contract",
  "shipped",
  "closed_won",
];

export type InquiryLookup = {
  reference: string;
  status: LeadStatus;
  createdAt: string;
  stageNote: string;
  shipmentRef: string | null;
  carrier: string | null;
};

// Stored-lead shape shared by the server store and the trade desk UI, so no
// client file has to reach into src/server.
export type LeadRecord = {
  id: string;
  reference: string;
  kind: LeadInput["kind"];
  status: LeadStatus;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  country: string | null;
  destination: string | null;
  product: string | null;
  purity: string | null;
  quantityKg: number | null;
  indicativeUsd: number | null;
  delivery: string | null;
  topic: string | null;
  notes: string | null;
  message: string | null;
  sourcePage: string | null;
  shipmentRef: string | null;
  carrier: string | null;
  stageNote: string | null;
  createdAt: string;
};

// A KYC file the buyer has uploaded against their inquiry reference. Kept here so
// the upload page and the trade desk inbox share one shape without importing the
// server store.
export type KycDocument = {
  id: string;
  reference: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
  uploadedBy: "buyer" | "desk";
  uploadedAt: string;
};

export const KYC_ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"] as const;
export const KYC_MAX_BYTES = 15 * 1024 * 1024;
