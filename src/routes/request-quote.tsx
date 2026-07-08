import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { img } from "../lib/images";
import { PageHero } from "../components/site-blocks";
import { checkSpamProtection, honeypotWrapperStyle } from "../lib/spam-protection";
import { absoluteUrl } from "../lib/site-url";


export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Gold Bullion Quote | Mayfox Gold Kenya" },
      { name: "description", content: "Request a confidential quote for gold bullion bars, dore bars, nuggets and raw gold. Specify product, purity, quantity and destination." },
      { property: "og:title", content: "Request Quote — Mayfox Gold" },
      { property: "og:description", content: "Request a confidential quote for gold bullion bars, dore bars, nuggets and raw gold. Specify product, purity, quantity and destination." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: img.goldStack },
      { property: "og:url", content: absoluteUrl("/request-quote") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/request-quote") }],
  }),
  component: RequestQuote,
});

function RequestQuote() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

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
                onSubmit={(e) => {
                  e.preventDefault();
                  const result = checkSpamProtection({
                    formId: "quote",
                    honeypotValue: honeypotRef.current?.value ?? "",
                    startedAt: startedAt.current,
                  });
                  if (!result.ok) {
                    setError(result.message);
                    return;
                  }
                  setError(null);
                  setSent(true);
                }}
                className="space-y-6"
              >
                {/* Honeypot — hidden from humans, attractive to bots */}
                <div style={honeypotWrapperStyle} aria-hidden="true">
                  <label>
                    Website (leave blank)
                    <input
                      ref={honeypotRef}
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

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

                {error && (
                  <p className="text-xs text-destructive text-center border border-destructive/40 py-2 px-3">{error}</p>
                )}
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
              <a href="tel:+254754979755" className="font-display text-2xl mb-1 block hover:text-gold">+254 754 979 755</a>
              <a href="mailto:sales@mayfox.co.ke" className="text-sm text-muted-foreground mb-4 block hover:text-gold">sales@mayfox.co.ke</a>
              <div className="text-xs text-muted-foreground mb-4">Mon–Sat · 08:00–20:00 EAT · Rhapta Road, Westlands, Nairobi</div>
              <a href="https://wa.me/254754979755?text=Hello%20Mayfox%20Gold%2C%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#25D366] hover:underline">
                <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.806 2.722.806.395 0 2.642-.058 2.642-1.323 0-.43.014-.872-.272-1.158-.213-.215-1.96-1.146-2.215-1.146z"/></svg>
                Chat on WhatsApp
              </a>
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
