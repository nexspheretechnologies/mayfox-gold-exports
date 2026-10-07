import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { lookupInquiry } from "../lib/lead-functions";
import { STATUS_LABELS, type InquiryLookup } from "../lib/lead-schema";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { track } from "../lib/analytics";

export const Route = createFileRoute("/track-inquiry")({
  head: () => {
    const seo = pageSeo({
      title: "Track Your Inquiry | Mayfox Gold Kenya",
      description:
        "Enter the MF reference issued when you submitted a quote or contact form to see where your gold doré inquiry stands — review, KYC, indicative quote, contract or insured shipment.",
      path: "/track-inquiry",
      keywords: "track gold inquiry, quote reference, doré bar order status, Mayfox trade desk",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Track Inquiry", path: "/track-inquiry" },
            ]),
          ),
        },
      ],
    };
  },
  component: TrackInquiry,
});

// The buyer-facing view of the pipeline. Internal statuses map onto the five
// steps a trader actually walks a buyer through.
const STAGES = [
  { key: "received", label: "Received", note: "Your requirements are with the trade desk." },
  { key: "kyc", label: "KYC & compliance", note: "Light-touch KYC pack, counterparty checks." },
  { key: "quote", label: "Indicative quote", note: "Pricing, availability and delivery window." },
  { key: "contract", label: "Contract & settlement", note: "SPA, escrow or settlement terms." },
  { key: "transit", label: "In transit", note: "Assayed, documented and insured air freight." },
] as const;

type StageKey = (typeof STAGES)[number]["key"];

const STATUS_TO_STAGE: Record<string, StageKey | "closed"> = {
  new: "received",
  reviewed: "received",
  kyc_requested: "kyc",
  quoted: "quote",
  in_contract: "contract",
  shipped: "transit",
  closed_won: "transit",
  closed_lost: "closed",
  spam: "closed",
};

const STAGE_MESSAGE: Record<StageKey, string> = {
  received: "A senior trader is reviewing your requirements. Expect a reply by email, and by phone or WhatsApp if you left a number.",
  kyc: "Your inquiry has passed initial review. The trade desk has requested, or is preparing, the KYC pack required before a binding quote.",
  quote: "An indicative quote has been issued to the email address on the inquiry. Indicative prices are non-binding and valid only for the stated window.",
  contract: "You are in the contracting phase: Sales & Purchase Agreement terms, proof of funds and settlement structure.",
  transit: "Your consignment is documented and on the move, or has been released to the carrier. Tracking details were sent by email.",
};

function TrackInquiry() {
  const [reference, setReference] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<InquiryLookup | null>(null);
  const [state, setState] = useState<"idle" | "pending" | "found" | "not_found" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("pending");
    setResult(null);
    setMessage(null);
    try {
      const found = await lookupInquiry({ data: { reference, email } });
      if (!found) {
        setState("not_found");
        setMessage(
          "No inquiry matches that reference and email address. Check the reference format (MF-YYYY-XXXXX) and use the exact address from your submission.",
        );
        return;
      }
      setResult(found);
      setState("found");
      track("inquiry_lookup", { status: found.status });
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Lookup failed. Please call the trade desk on +254 754 979 755.");
    }
  }

  const activeStage = result ? STATUS_TO_STAGE[result.status] : undefined;
  const activeIndex =
    activeStage && activeStage !== "closed" ? STAGES.findIndex((s) => s.key === activeStage) : -1;

  return (
    <section className="section-y">
      <div className="container-x max-w-3xl">
        <div className="eyebrow mb-4">Trade Desk Status</div>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Track your <span className="text-gradient-gold">inquiry</span>
        </h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Every quote and contact form we receive is issued a reference beginning with{" "}
          <span className="text-gold font-medium">MF-</span>, and it is emailed to you immediately.
          Enter it here with the address on the inquiry to see where it stands.
        </p>

        <div className="card-luxe p-8 mb-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Reference" value={reference} onChange={(v) => setReference(v.toUpperCase())} placeholder="MF-2026-AB3CD" />
              <Field label="Email on the inquiry" type="email" value={email} onChange={setEmail} placeholder="you@company.com" />
            </div>

            {state === "not_found" && message && (
              <p role="alert" className="text-xs text-destructive border border-destructive/40 py-2 px-3">{message}</p>
            )}
            {state === "error" && message && (
              <p role="alert" className="text-xs text-destructive border border-destructive/40 py-2 px-3">{message}</p>
            )}

            <button type="submit" disabled={state === "pending"} className="btn-gold w-full disabled:opacity-60">
              {state === "pending" ? "Checking…" : "Check status"}
            </button>
          </form>
        </div>

        {result && activeIndex >= 0 && (
          <div className="card-luxe p-8 mb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
              <div className="eyebrow">Inquiry {result.reference}</div>
              <div className="text-xs text-muted-foreground">
                Submitted {new Date(result.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Nairobi" })} · {STATUS_LABELS[result.status]}
              </div>
            </div>

            <ol className="space-y-5">
              {STAGES.map((stage, index) => {
                const done = index < activeIndex;
                const current = index === activeIndex;
                return (
                  <li key={stage.key} className="grid grid-cols-[28px_1fr] gap-4">
                    <div
                      className={
                        current
                          ? "w-7 h-7 rounded-full border border-gold bg-gold text-onyx flex items-center justify-center text-xs font-bold"
                          : done
                            ? "w-7 h-7 rounded-full border border-gold/50 text-gold flex items-center justify-center text-xs"
                            : "w-7 h-7 rounded-full border border-border text-muted-foreground/50 flex items-center justify-center text-xs"
                      }
                    >
                      {done ? "✓" : index + 1}
                    </div>
                    <div>
                      <div className={current ? "text-gold font-medium" : done ? "text-foreground" : "text-muted-foreground"}>
                        {stage.label}
                      </div>
                      <div className="text-xs text-muted-foreground">{stage.note}</div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="text-sm text-muted-foreground mt-6 border-t border-border/60 pt-6">
              {STAGE_MESSAGE[STAGES[activeIndex].key]}
            </p>

            {result.shipmentRef && (
              <div className="mt-5 text-sm border border-gold/30 px-4 py-3">
                <span className="text-gold">Shipment:</span> {result.shipmentRef}
                {result.carrier && <span className="text-muted-foreground"> · {result.carrier}</span>}
              </div>
            )}
            {result.stageNote && (
              <div className="mt-3 text-sm text-muted-foreground border border-border/60 px-4 py-3">
                {result.stageNote}
              </div>
            )}
          </div>
        )}

        {result && activeStage === "closed" && (
          <div className="card-luxe p-8 mb-8">
            <div className="eyebrow mb-3">Inquiry {result.reference}</div>
            <p className="text-sm text-muted-foreground">
              This inquiry is no longer active. If you still want to source doré bars or nuggets, the
              trade desk is happy to reopen it — send a fresh request and mention this reference.
            </p>
          </div>
        )}

        {result && activeStage === "kyc" && (
          <div className="card-luxe p-8 mb-8">
            <div className="eyebrow mb-3">Documents</div>
            <p className="text-sm text-muted-foreground mb-5">
              Compliance paperwork does not travel by email. Post it against this reference and the
              desk will confirm receipt here.
            </p>
            <Link to="/upload-documents" search={{ reference: result.reference }} className="btn-outline-gold inline-flex !py-2.5">
              Upload KYC documents
            </Link>
          </div>
        )}

        <div className="text-sm text-muted-foreground">
          <p className="mb-3">
            Lost your reference, or prefer to speak to a person? The trade desk answers{" "}
            <a href="tel:+254754979755" className="text-gold hover:underline">+254 754 979 755</a> and{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">sales@mayfox.co.ke</a> Monday to Saturday, 08:00–20:00 EAT.
          </p>
          <Link to="/request-quote" className="btn-outline-gold inline-flex !py-2.5">
            Request a new quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
      />
    </div>
  );
}
