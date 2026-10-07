import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { img } from "../lib/images";
import { PageHero } from "../components/site-blocks";
import { checkSpamProtection, honeypotWrapperStyle } from "../lib/spam-protection";
import { absoluteUrl } from "../lib/site-url";
import { useLeadSubmit } from "../lib/use-lead-submit";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mayfox Gold Kenya | Trade Desk, Email & WhatsApp" },
      { name: "description", content: "Contact Mayfox Gold Kenya: trade desk, business hours, office location in Nairobi, email, WhatsApp and inquiry form for gold buyers." },
      { property: "og:title", content: "Contact — Mayfox Gold" },
      { property: "og:description", content: "Contact Mayfox Gold Kenya: trade desk, business hours, office location in Nairobi, email, WhatsApp and inquiry form for gold buyers." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl(img.boardroom) },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: Contact,
});

function Contact() {
  const { state, submit } = useLeadSubmit("contact");
  const [blocked, setBlocked] = useState<string | null>(null);
  const startedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const sent = state.status === "sent";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Speak to the <span className="text-gradient-gold">trade desk</span>.</>}
        subtitle="Senior traders respond within one business hour, Monday to Saturday. All inquiries are handled under strict confidentiality."
        image={img.boardroom}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="space-y-10">
              <div>
                <div className="eyebrow mb-3">Head Office</div>
                <div className="font-display text-2xl">Rhapta Road, Westlands</div>
                <div className="text-muted-foreground">Nairobi, Kenya · P.O. Box 00100</div>
              </div>
              <div>
                <div className="eyebrow mb-3">Trade Desk</div>
                <a href="tel:+254754979755" className="font-display text-2xl hover:text-gold">+254 754 979 755</a>
                <div className="text-muted-foreground">Direct senior trader line — Mon–Sat, 08:00–20:00 EAT</div>
              </div>
              <div>
                <div className="eyebrow mb-3">Email</div>
                <a href="mailto:sales@mayfox.co.ke" className="font-display text-2xl hover:text-gold">sales@mayfox.co.ke</a>
                <div className="text-muted-foreground">All sales, compliance and logistics inquiries</div>
              </div>
              <div>
                <div className="eyebrow mb-3">WhatsApp Chat</div>
                <a href="https://wa.me/254754979755" target="_blank" rel="noopener noreferrer" className="font-display text-2xl hover:text-gold">+254 754 979 755</a>
                <div className="text-muted-foreground">Tap the floating WhatsApp button for instant chat with our trade desk.</div>
              </div>
              <div>
                <div className="eyebrow mb-3">Business Hours</div>
                <div className="text-muted-foreground">Monday – Friday: 08:00 – 18:00 EAT</div>
                <div className="text-muted-foreground">Saturday: 09:00 – 14:00 EAT</div>
                <div className="text-muted-foreground">Sunday: Closed (trade desk on-call via WhatsApp)</div>
              </div>
            </div>

            <div className="mt-12 aspect-[16/10] overflow-hidden rounded-sm border border-border">
              <iframe
                title="Mayfox Gold — Rhapta Road, Westlands, Nairobi office map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.795%2C-1.275%2C36.820%2C-1.258&layer=mapnik&marker=-1.2667%2C36.8067"
                className="w-full h-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card-luxe p-8 lg:p-10">
            <div className="eyebrow mb-4">Inquiry Form</div>
            <h2 className="font-display text-3xl mb-8">Tell us about your requirement</h2>

            {sent ? (
              <div className="border border-gold/40 p-6 text-center">
                <div className="font-display text-2xl text-gradient-gold mb-2">Inquiry Received</div>
                <p className="text-sm text-muted-foreground">A senior trader will reach out within one business hour.</p>
                <p className="mt-4 text-sm">
                  Reference: <strong className="font-display text-gold tracking-widest">{state.result.reference}</strong>
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={async (e) => {
                  e.preventDefault();
                  const result = checkSpamProtection({
                    formId: "contact",
                    honeypotValue: honeypotRef.current?.value ?? "",
                    startedAt: startedAt.current,
                  });
                  if (!result.ok) {
                    setBlocked(result.message);
                    return;
                  }
                  setBlocked(null);
                  if (formRef.current) await submit(formRef.current);
                }}
                className="space-y-5"
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone / WhatsApp" name="phone" />
                </div>
                <Field label="Country" name="country" />
                <Field label="Subject" name="topic" />
                <div>
                  <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Message</label>
                  <textarea name="message" required rows={5} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none resize-none" />
                </div>
                {(blocked ?? (state.status === "error" ? state.message : null)) && (
                  <p role="alert" className="text-xs text-destructive text-center border border-destructive/40 py-2 px-3">
                    {blocked ?? (state.status === "error" ? state.message : "")}
                  </p>
                )}
                <button className="btn-gold btn-gold-hover w-full" disabled={state.status === "pending"}>
                  {state.status === "pending" ? "Sending…" : "Send Inquiry"}
                </button>
                <p className="text-xs text-muted-foreground text-center">NDA available on request · Your reference is issued immediately.</p>
              </form>

            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">{label}{required && " *"}</label>
      <input type={type} name={name} required={required} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none" />
    </div>
  );
}
