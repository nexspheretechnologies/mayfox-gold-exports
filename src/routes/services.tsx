import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Gold Smelting, Refining, Assay & Export — Mayfox Kenya" },
      { name: "description", content: "End-to-end precious metals services: gold smelting, refining, assay, gold offtake, procurement, trading, export facilitation and secure logistics." },
      { property: "og:title", content: "Services — Mayfox Gold Kenya" },
      { property: "og:description", content: "End-to-end precious metals services: gold smelting, refining, assay, gold offtake, procurement, trading, export facilitation and secure logistics." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl(img.smelting) },
      { property: "og:url", content: absoluteUrl("/services") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: Services,
});

const services = [
  { t: "Gold Smelting Services", i: img.smelting, d: "On-site induction smelting of raw gold and concentrates into homogeneous dore bars. Full melt-loss reporting, post-melt sampling and weight reconciliation." },
  { t: "Gold Refining", i: img.refining, d: "Two-stage refining (chlorination + Miller / Wohlwill) to deliver 99.9% to 99.99% gold under partner-LBMA standards." },
  { t: "Precious Metal Assay", i: img.assay, d: "Independent fire assay, XRF, ICP-OES and cupellation testing. Reports issued by SGS, Alex Stewart and Bureau Veritas accredited labs." },
  { t: "Gold Offtake", i: img.goldBars3, d: "Spot and forward offtake of dore bars and nuggets, with refined bars through our partner refineries, for bullion banks, central reserves, refineries and investment funds." },
  { t: "Gold Procurement", i: img.mining, d: "Direct procurement from licensed cooperatives across Kenya, Tanzania, Uganda, DRC and Sudan, under documented chain-of-custody." },
  { t: "International Gold Trading", i: img.tradingFloor, d: "Multi-desk trading across Nairobi, Dubai, Zürich and Singapore with hedged exposure to LBMA AM/PM fix." },
  { t: "Export Facilitation", i: img.documents, d: "Complete export documentation, customs clearance, licensing and regulator liaison — handled in-house." },
  { t: "Commodity Brokerage", i: img.handshake, d: "Confidential brokerage between large-scale producers and institutional offtakers, structured under SPAs." },
  { t: "Secure Logistics Coordination", i: img.cargoPlane, d: "Insured airfreight via Brinks, Loomis, Malca-Amit and G4S Cash Solutions — vault-to-vault, fully tracked." },
  { t: "Compliance Verification", i: img.contract, d: "KYC, KYB, AML, sanctions screening and OECD due-diligence review on every counterparty." },
  { t: "Quality Inspection", i: img.inspection, d: "Pre-shipment inspection by client-appointed surveyors. Joint sampling, witnessed weighing and sealing." },
  { t: "Buyer Support", i: img.meeting, d: "Dedicated account managers, dispute resolution, post-delivery assay reconciliation and long-term offtake structuring." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>End-to-end <span className="text-gradient-gold">precious metals</span> services.</>}
        subtitle="From the smelter floor in Mombasa to the vault floor in Zürich — Mayfox handles every step of the gold lifecycle in-house."
        image={img.smelting}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={s.t} className="card-luxe overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.i} alt={s.t} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">Service · 0{idx + 1 < 10 ? idx + 1 : idx + 1}</div>
                  <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader eyebrow="Operating Standards" title={<>Built on <span className="text-gradient-gold">LBMA & OECD</span> frameworks.</>} align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              ["OECD Due Diligence Guidance", "Five-step risk-based supply chain review on every export agent."],
              ["LBMA Responsible Sourcing", "Alignment with the LBMA Responsible Gold Guidance v9."],
              ["KYC / KYB / AML", "Full counterparty screening including PEP and sanctions checks."],
              ["ISO 17025 Laboratories", "Assays processed by ISO 17025 accredited laboratories only."],
            ].map(([t, d]) => (
              <div key={t} className="border border-gold/20 p-7">
                <h3 className="font-display text-xl mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
