import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "../lib/images";
import { CTABand, PageHero } from "../components/site-blocks";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Gold Export FAQs — Pricing & Docs | Mayfox Kenya" },
      { name: "description", content: "Frequently asked questions on gold purity, pricing, export documentation, shipping, security, compliance, payments and wholesale supply from Kenya." },
      { property: "og:title", content: "FAQs — Mayfox Gold" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: FAQs,
});

const groups: { g: string; items: [string, string][] }[] = [
  {
    g: "Purity & Quality",
    items: [
      ["What purity grades does Mayfox supply?", "From 85% dore bars to 99.99% (four-nines) investment bullion. Every consignment is independently assayed by SGS, Alex Stewart or Bureau Veritas."],
      ["Who conducts the assay?", "Independent ISO 17025 accredited laboratories — never an in-house only test for export consignments."],
      ["Can I appoint my own assayer?", "Yes. Buyer-appointed surveyors and witnessed assay sessions are welcomed at our Mombasa facility."],
      ["Are bars serialized?", "Every refined bar is laser-engraved with weight, fineness, refinery mark and a unique serial number."],
      ["What is the tolerance on declared weight?", "± 0.05% on refined bars; ± 0.2% on dore bars, with full reconciliation in the assay report."],
    ],
  },
  {
    g: "Pricing & Payment",
    items: [
      ["How is the price quoted?", "Quotes reference the LBMA AM or PM fix, with a discount/premium based on grade, volume and Incoterm."],
      ["What payment methods do you accept?", "T/T bank transfer, irrevocable LC, escrow (Euroclear or DMCC), and bank-to-bank settlement on receipt."],
      ["Do you require a deposit?", "Standard structure is a refundable Performance Bond (PB) or escrow funding rather than a deposit."],
      ["Is the price negotiable on large tonnage?", "Yes — multi-shipment offtake agreements receive tiered pricing structures."],
      ["What is your minimum order?", "Spot minimum is 5 kg for dore and 1 kg for refined bullion."],
    ],
  },
  {
    g: "Documentation",
    items: [
      ["What documents are included?", "Assay report, export license, certificate of origin, commercial invoice, packing list, export permit, customs SAD, airway bill, insurance and KYC pack."],
      ["Who issues the export license?", "The Ministry of Mining of Kenya, per shipment."],
      ["Can you issue documents in multiple languages?", "Documents are issued in English; certified translations available on request."],
      ["Are documents released before delivery?", "Scans are released on dispatch confirmation; originals travel with the consignment."],
    ],
  },
  {
    g: "Export & Shipping",
    items: [
      ["Which Incoterms do you use?", "CIF, CIP and DAP most commonly. EXW and FOB available on request."],
      ["Which carriers do you use?", "Brinks, Loomis, Malca-Amit and G4S Cash Solutions — selected per route and consignee."],
      ["How long does delivery take?", "Africa & Middle East: 24–48h. Europe: 36–72h. Asia: 48–72h. Americas: 72–96h."],
      ["Where is gold flown from?", "Nairobi Jomo Kenyatta International Airport (NBO) under armed escort."],
      ["Can you deliver to my private vault?", "Yes — direct vault-to-vault transfer to DMCC, Brinks, Loomis or client-nominated depository."],
    ],
  },
  {
    g: "Security",
    items: [
      ["How is the consignment secured?", "Dual-control sealing, tamper-evident packaging, armed escort to aircraft, 24/7 GPS tracking."],
      ["Is the cargo insured?", "Yes — full-value Lloyd's of London cargo cover, typically up to $50M per consignment."],
      ["What if a shipment is delayed?", "All routings include contingency. Buyers receive real-time updates from our logistics coordinator."],
      ["Has Mayfox ever lost a shipment?", "No. Across 1,200+ consignments we maintain a 0% loss record."],
    ],
  },
  {
    g: "Compliance & Verification",
    items: [
      ["Is Mayfox KYC/AML compliant?", "Yes — FRC-registered, full counterparty KYC including UBO, PEP and sanctions screening."],
      ["Do you screen for sanctions?", "OFAC, EU, UN and UK lists are screened on every consignee and intermediary."],
      ["Does Mayfox follow OECD Due Diligence?", "Yes — our supplier base is reviewed under the OECD five-step framework."],
      ["Can I audit Mayfox's compliance?", "Institutional buyers may request access to our annual third-party compliance audit summary."],
      ["Do you provide source-of-gold disclosure?", "Yes — origin cooperative, mining license number and route are documented for every consignment."],
    ],
  },
  {
    g: "Delivery & Custom Orders",
    items: [
      ["Can you cast bars to my specification?", "Yes — private branding, custom weights, hallmarks and finish are available for refined bullion."],
      ["Can you supply other precious metals?", "Yes — silver, platinum and palladium on a project basis."],
      ["Do you offer long-term offtake agreements?", "Yes — monthly tonnage agreements under SPA with quarterly compliance review."],
      ["Can you store gold on my behalf?", "Yes — allocated storage at partner vaults in DMCC, Switzerland or Singapore."],
    ],
  },
  {
    g: "Wholesale Supply",
    items: [
      ["What is the smallest wholesale order?", "Wholesale tier begins at 25 kg refined or 50 kg dore per month."],
      ["Do you supply jewelry manufacturers?", "Yes — refined gold in custom grain, ingot or bar form at jewelry-house volumes."],
      ["Can wholesale orders include hedging?", "Yes — Mayfox can lock LBMA fix forward to neutralize price risk."],
      ["Do you offer dealer accounts?", "Yes — vetted dealers receive recurring allocations under master supply agreements."],
    ],
  },
];

function FAQs() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title={<>Everything buyers ask <span className="text-gradient-gold">before</span> placing their first order.</>}
        subtitle="Quality, pricing, documentation, shipping, security and compliance — answered openly."
        image={img.documents}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[260px_1fr] gap-12">
          <aside className="lg:sticky lg:top-32 self-start">
            <div className="eyebrow mb-5">Categories</div>
            <ul className="space-y-3 text-sm">
              {groups.map((g) => (
                <li key={g.g}>
                  <a href={`#${g.g.replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-gold transition-colors">
                    {g.g}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-16">
            {groups.map((g) => (
              <section key={g.g} id={g.g.replace(/\s+/g, "-")}>
                <h2 className="font-display text-3xl mb-6">{g.g}</h2>
                <div className="divide-y divide-border/60 border-y border-border/60">
                  {g.items.map(([q, a], i) => {
                    const id = `${g.g}-${i}`;
                    const isOpen = open === id;
                    return (
                      <button
                        key={q}
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="w-full text-left py-5 group"
                      >
                        <div className="flex items-start justify-between gap-6">
                          <span className="font-medium group-hover:text-gold transition-colors">{q}</span>
                          <span className="text-gold font-display text-2xl leading-none">{isOpen ? "–" : "+"}</span>
                        </div>
                        {isOpen && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>}
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
