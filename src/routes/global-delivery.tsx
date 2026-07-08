import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader, Stat } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/global-delivery")({
  head: () => ({
    meta: [
      { title: "Global Gold Delivery | Secure Bullion Logistics from Kenya" },
      { name: "description", content: "Insured worldwide gold delivery from Kenya via Brinks, Loomis, Malca-Amit. Air freight, vault-to-vault transfer, customs coordination and shipment tracking." },
      { property: "og:title", content: "Global Delivery — Mayfox Gold Kenya" },
      { property: "og:description", content: "Insured worldwide gold delivery from Kenya via Brinks, Loomis, Malca-Amit. Air freight, vault-to-vault transfer, customs coordination and shipment tracking." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: img.cargoPlane },
      { property: "og:url", content: absoluteUrl("/global-delivery") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/global-delivery") }],
  }),
  component: GlobalDelivery,
});

const regions = [
  { r: "Africa", c: "Kenya, Tanzania, UAE corridor, South Africa, Ghana", time: "24–48h" },
  { r: "Middle East", c: "UAE, Saudi Arabia, Qatar, Bahrain, Oman", time: "24–36h" },
  { r: "Europe", c: "Switzerland, UK, Germany, Belgium, Italy", time: "36–72h" },
  { r: "Asia", c: "Singapore, Hong Kong, India, China, Japan", time: "48–72h" },
  { r: "North America", c: "USA (NY, LA), Canada (Toronto)", time: "72–96h" },
  { r: "South America", c: "Brazil, Argentina (on request)", time: "96h+" },
];

function GlobalDelivery() {
  return (
    <>
      <PageHero
        eyebrow="Global Delivery"
        title={<>Vault-to-vault. <span className="text-gradient-gold">Fully insured</span>. Anywhere on earth.</>}
        subtitle="Mayfox coordinates secure international logistics with the world's top precious metals carriers — Brinks, Loomis, Malca-Amit and G4S Cash Solutions."
        image={img.cargoPlane}
      />

      {/* Map / regions */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={img.worldMap} alt="Global delivery network map" className="rounded-sm w-full" />
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx/60 to-transparent" />
          </div>
          <div>
            <div className="eyebrow mb-5">Network</div>
            <h2 className="font-display text-4xl lg:text-5xl">42+ destinations on six continents.</h2>
            <p className="mt-5 text-muted-foreground">
              Whether your vault is in DMCC Dubai, Brinks Zürich, Malca-Amit Singapore or a
              private depository in New York — Mayfox can deliver. Routings are pre-cleared with
              destination customs before consignments leave Nairobi.
            </p>
            <div className="mt-8 space-y-3">
              {regions.map((r) => (
                <div key={r.r} className="grid grid-cols-[120px_1fr_80px] gap-4 items-baseline border-b border-border/60 py-3">
                  <div className="font-display text-lg text-gold">{r.r}</div>
                  <div className="text-sm text-muted-foreground">{r.c}</div>
                  <div className="text-xs text-right tracking-widest text-gold">{r.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Secure Carriers"
            title={<>Only the world's most <span className="text-gradient-gold">trusted hands</span>.</>}
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 mt-12">
            {["Brinks", "Loomis", "Malca-Amit", "G4S"].map((c) => (
              <div key={c} className="bg-background py-12 flex items-center justify-center font-display text-3xl text-gradient-gold">{c}</div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { i: img.cargoPlane2, t: "Secure Air Freight", d: "Direct routings via Nairobi JKIA, with priority loading and armed-escort transfers to the aircraft." },
              { i: img.containers, t: "Cargo Handling", d: "Strong-room transit, dual-control sealing, and tamper-evident tertiary packaging." },
              { i: img.warehouse, t: "Vault Coordination", d: "Direct hand-over to destination vault operators — DMCC, Brinks, Loomis or client-specified." },
            ].map((c) => (
              <div key={c.t} className="card-luxe overflow-hidden">
                <img src={c.i} alt={c.t} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Stat value="100%" label="Insured Transit" />
          <Stat value="$50M" label="Per-Shipment Cover" />
          <Stat value="24/7" label="Shipment Tracking" />
          <Stat value="0" label="Lost Consignments" />
        </div>
      </section>

      <CTABand />
    </>
  );
}
