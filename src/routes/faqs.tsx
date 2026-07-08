import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "../lib/images";
import { CTABand, PageHero } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Gold Export FAQs — Pricing & Docs | Mayfox Kenya" },
      { name: "description", content: "Frequently asked questions on gold purity, pricing, export documentation, shipping, security, compliance, payments and wholesale supply from Kenya." },
      { name: "keywords", content: "gold export faq, gold buying questions, gold purity faq, gold pricing faq, gold export documentation, gold shipping faq, gold compliance faq, kenya gold faq, african gold questions, bullion buying guide" },
      { property: "og:title", content: "FAQs — Mayfox Gold" },
      { property: "og:description", content: "Frequently asked questions on gold purity, pricing, export documentation, shipping, security, compliance, payments and wholesale supply from Kenya." },
      { property: "og:image", content: img.goldBars1 },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/faqs") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/faqs") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", "name": "What purity grades does Mayfox supply?", "acceptedAnswer": { "@type": "Answer", "text": "From 85% dore bars to 99.99% (four-nines) investment bullion. Every consignment is independently assayed by SGS, Alex Stewart or Bureau Veritas." } },
            { "@type": "Question", "name": "Who conducts the assay?", "acceptedAnswer": { "@type": "Answer", "text": "Independent ISO 17025 accredited laboratories — never an in-house only test for export consignments." } },
            { "@type": "Question", "name": "Can I appoint my own assayer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Buyer-appointed surveyors and witnessed assay sessions are welcomed at our Mombasa facility." } },
            { "@type": "Question", "name": "Are bars serialized?", "acceptedAnswer": { "@type": "Answer", "text": "Every refined bar is laser-engraved with weight, fineness, refinery mark and a unique serial number." } },
            { "@type": "Question", "name": "What is the tolerance on declared weight?", "acceptedAnswer": { "@type": "Answer", "text": "± 0.05% on refined bars; ± 0.2% on dore bars, with full reconciliation in the assay report." } },
            { "@type": "Question", "name": "How is the price quoted?", "acceptedAnswer": { "@type": "Answer", "text": "Quotes reference the LBMA AM or PM fix, with a discount/premium based on grade, volume and Incoterm." } },
            { "@type": "Question", "name": "What payment methods do you accept?", "acceptedAnswer": { "@type": "Answer", "text": "T/T bank transfer, irrevocable LC, escrow (Euroclear or DMCC), and bank-to-bank settlement on receipt." } },
            { "@type": "Question", "name": "Do you require a deposit?", "acceptedAnswer": { "@type": "Answer", "text": "Standard structure is a refundable Performance Bond (PB) or escrow funding rather than a deposit." } },
            { "@type": "Question", "name": "Is the price negotiable on large tonnage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — multi-shipment offtake agreements receive tiered pricing structures." } },
            { "@type": "Question", "name": "What is your minimum order?", "acceptedAnswer": { "@type": "Answer", "text": "Spot minimum is 5 kg for dore and 1 kg for refined bullion." } },
            { "@type": "Question", "name": "What documents are included?", "acceptedAnswer": { "@type": "Answer", "text": "Assay report, export license, certificate of origin, commercial invoice, packing list, export permit, customs SAD, airway bill, insurance and KYC pack." } },
            { "@type": "Question", "name": "Who issues the export license?", "acceptedAnswer": { "@type": "Answer", "text": "The Ministry of Mining of Kenya, per shipment." } },
            { "@type": "Question", "name": "Can you issue documents in multiple languages?", "acceptedAnswer": { "@type": "Answer", "text": "Documents are issued in English; certified translations available on request." } },
            { "@type": "Question", "name": "Are documents released before delivery?", "acceptedAnswer": { "@type": "Answer", "text": "Scans are released on dispatch confirmation; originals travel with the consignment." } },
            { "@type": "Question", "name": "Which Incoterms do you use?", "acceptedAnswer": { "@type": "Answer", "text": "CIF, CIP and DAP most commonly. EXW and FOB available on request." } },
            { "@type": "Question", "name": "Which carriers do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Brinks, Loomis, Malca-Amit and G4S Cash Solutions — selected per route and consignee." } },
            { "@type": "Question", "name": "How long does delivery take?", "acceptedAnswer": { "@type": "Answer", "text": "Africa & Middle East: 24–48h. Europe: 36–72h. Asia: 48–72h. Americas: 72–96h." } },
            { "@type": "Question", "name": "Where is gold flown from?", "acceptedAnswer": { "@type": "Answer", "text": "Nairobi Jomo Kenyatta International Airport (NBO) under armed escort." } },
            { "@type": "Question", "name": "Can you deliver to my private vault?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — direct vault-to-vault transfer to DMCC, Brinks, Loomis or client-nominated depository." } },
            { "@type": "Question", "name": "How is the consignment secured?", "acceptedAnswer": { "@type": "Answer", "text": "Dual-control sealing, tamper-evident packaging, armed escort to aircraft, 24/7 GPS tracking." } },
            { "@type": "Question", "name": "Is the cargo insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — full-value Lloyd's of London cargo cover, typically up to $50M per consignment." } },
            { "@type": "Question", "name": "What if a shipment is delayed?", "acceptedAnswer": { "@type": "Answer", "text": "All routings include contingency. Buyers receive real-time updates from our logistics coordinator." } },
            { "@type": "Question", "name": "Has Mayfox ever lost a shipment?", "acceptedAnswer": { "@type": "Answer", "text": "No. Across 1,200+ consignments we maintain a 0% loss record." } },
            { "@type": "Question", "name": "Is Mayfox KYC/AML compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — FRC-registered, full counterparty KYC including UBO, PEP and sanctions screening." } },
            { "@type": "Question", "name": "Do you screen for sanctions?", "acceptedAnswer": { "@type": "Answer", "text": "OFAC, EU, UN and UK lists are screened on every consignee and intermediary." } },
            { "@type": "Question", "name": "Does Mayfox follow OECD Due Diligence?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — our supplier base is reviewed under the OECD five-step framework." } },
            { "@type": "Question", "name": "Can I audit Mayfox's compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Institutional buyers may request access to our annual third-party compliance audit summary." } },
            { "@type": "Question", "name": "Do you provide source-of-gold disclosure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — origin cooperative, mining license number and route are documented for every consignment." } },
            { "@type": "Question", "name": "Can you cast bars to my specification?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — private branding, custom weights, hallmarks and finish are available for refined bullion." } },
            { "@type": "Question", "name": "Can you supply other precious metals?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — silver, platinum and palladium on a project basis." } },
            { "@type": "Question", "name": "Do you offer long-term offtake agreements?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — monthly tonnage agreements under SPA with quarterly compliance review." } },
            { "@type": "Question", "name": "Can you store gold on my behalf?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — allocated storage at partner vaults in DMCC, Switzerland or Singapore." } },
            { "@type": "Question", "name": "What is the smallest wholesale order?", "acceptedAnswer": { "@type": "Answer", "text": "Wholesale tier begins at 25 kg refined or 50 kg dore per month." } },
            { "@type": "Question", "name": "Do you supply jewelry manufacturers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — refined gold in custom grain, ingot or bar form at jewelry-house volumes." } },
            { "@type": "Question", "name": "Can wholesale orders include hedging?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Mayfox can lock LBMA fix forward to neutralize price risk." } },
            { "@type": "Question", "name": "Do you offer dealer accounts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — vetted dealers receive recurring allocations under master supply agreements." } },
          ],
        }),
      },
    ],
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
