import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "../lib/images";
import { PageHero } from "../components/site-blocks";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Gold Bullion Quote | Mayfox Gold Kenya" },
      { name: "description", content: "Request a confidential quote for gold bullion bars, dore bars, nuggets and raw gold. Specify product, purity, quantity and destination." },
      { property: "og:title", content: "Request Quote — Mayfox Gold" },
      { property: "og:image", content: img.goldStack },
      { property: "og:url", content: "/request-quote" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: RequestQuote,
});

function RequestQuote() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={<>A confidential, <span className="text-gradient-gold">institutional-grade</span> quotation in one business hour.</>}
        subtitle="Provide your requirements below. A senior trader will respond with indicative pricing, availability and the steps to a binding Sales & Purchase Agreement."
        image={img.goldStack}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Form */}
          <div className="card-luxe p-8 lg:p-12">
            {sent ? (
              <div className="text-center py-12">
                <div className="eyebrow justify-center mb-4">Quote Request Received</div>
                <h2 className="font-display text-4xl text-gradient-gold mb-4">Thank you.</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  A senior trader will respond to your inquiry within one business hour with
                  indicative pricing, availability and next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <F label="Full Name" name="name" required />
                  <F label="Company" name="company" />
                  <F label="Email" type="email" name="email" required />
                  <F label="Phone / WhatsApp" name="phone" required />
                  <F label="Country" name="country" required />
                  <F label="Destination Country" name="destination" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <S label="Product Required" name="product" options={["Gold Bullion Bars", "Gold Dore Bars", "Gold Nuggets", "Raw Gold", "Refined Gold", "Investment Grade (99.99%)", "Wholesale Supply"]} required />
                  <S label="Purity Required" name="purity" options={["85% – Dore", "90% – Dore", "95% – Refined", "99.50%", "99.90%", "99.99% Investment"]} required />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <F label="Quantity (kg)" name="quantity" type="number" required />
                  <S label="Preferred Delivery" name="delivery" options={["Insured Air Freight", "Vault-to-Vault Transfer", "Buyer Pickup (EXW)", "Sea Freight (Bulk)"]} required />
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Additional Notes</label>
                  <textarea rows={5} placeholder="Incoterms, payment preference, timeline, branding…" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none resize-none" />
                </div>

                <label className="flex gap-3 items-start text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-[var(--gold)]" />
                  <span>I confirm I am a qualified institutional buyer and agree to Mayfox's KYC and confidentiality terms. Inquiries are non-binding until an SPA is signed.</span>
                </label>

                <button className="btn-gold btn-gold-hover w-full">Submit Quote Request</button>
              </form>
            )}
          </div>

          {/* Aside */}
          <aside className="space-y-6">
            <div className="card-luxe p-7">
              <div className="eyebrow mb-3">What happens next</div>
              <ol className="space-y-4 text-sm text-muted-foreground">
                {[
                  ["01", "Acknowledgement", "Auto-confirmation within minutes."],
                  ["02", "Trader Call-Back", "Senior trader within one business hour."],
                  ["03", "KYC", "Light-touch KYC pack issued."],
                  ["04", "Indicative Quote", "Pricing, availability, delivery window."],
                  ["05", "SPA & Settlement", "Binding contract and escrow setup."],
                ].map(([n, t, d]) => (
                  <li key={n} className="grid grid-cols-[32px_1fr] gap-3">
                    <span className="font-display text-gold">{n}</span>
                    <div>
                      <div className="text-foreground font-medium">{t}</div>
                      <div className="text-xs">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card-luxe p-7">
              <div className="eyebrow mb-3">Direct Trade Desk</div>
              <div className="font-display text-2xl mb-1">+254 700 000 000</div>
              <div className="text-sm text-muted-foreground mb-4">trade@mayfoxgold.co.ke</div>
              <div className="text-xs text-muted-foreground">Mon–Sat · 08:00–20:00 EAT</div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function F({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">{label}{required && " *"}</label>
      <input type={type} name={name} required={required} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none" />
    </div>
  );
}

function S({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">{label}{required && " *"}</label>
      <select name={name} required={required} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
