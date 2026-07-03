import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, faqJsonLd } from "../components/country-page";
import { img } from "../lib/images";

const faqs = [
  { q: "Where can I buy gold from the DRC Congo?", a: "Mayfox sources verified Congolese gold only through licensed exporters and cooperatives that meet OECD Due Diligence Guidance and ICGLR Regional Certification, consolidating consignments in Nairobi for onward export with full traceability documentation." },
  { q: "Is buying DRC gold legal?", a: "Yes — provided the consignment is sourced from licensed exporters, carries an ICGLR Regional Certificate, complies with OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected Areas, and passes LBMA Responsible Gold screening. Mayfox will not handle any consignment that fails these checks." },
  { q: "Which regions produce gold in the DRC?", a: "Ituri (Mongbwalu, Djugu), South Kivu (Kamituga, Mwenga, Twangiza), North Kivu (Walikale), Maniema (Namoya) and Haut-Uele. Kibali in Haut-Uele is one of the world's largest gold mines." },
  { q: "How does Mayfox handle conflict-minerals compliance for DRC gold?", a: "We apply a five-step OECD due diligence framework: strong management systems, risk identification, risk mitigation, independent third-party audit and public reporting. We only accept gold with valid ICGLR/iTSCi documentation and full chain-of-custody records." },
  { q: "Can DRC gold be exported through Kenya?", a: "Yes. DRC-origin gold cleared under a valid Congolese export permit and ICGLR Regional Certificate is commonly consolidated in Nairobi for onward air freight to Dubai, Zurich, London and Asian markets." },
  { q: "What purities of Congolese gold are available?", a: "Artisanal dore 85–95%, refined bullion at 995 and investment-grade 9999 bars refined via LBMA-standard partner refineries." },
  { q: "Is DRC gold LBMA compliant?", a: "Mayfox works exclusively with source-verified consignments and partner refineries that meet or align with LBMA Responsible Gold Guidance." },
];

export const Route = createFileRoute("/gold-in-congo")({
  head: () => ({
    meta: [
      { title: "Gold in DRC Congo | Buy Verified Congolese Gold — Mayfox Nairobi" },
      { name: "description", content: "Buy responsibly sourced gold from the DRC Congo. Verified Congolese dore, nuggets and refined bullion with ICGLR certification, OECD due diligence and LBMA-compliant partner refining. Consolidated and exported through Nairobi." },
      { name: "keywords", content: "gold in congo, drc congo gold, congolese gold, gold in drc, buy gold from congo, kibali gold, ituri gold, south kivu gold, oecd compliant gold, icglr certified gold, conflict-free gold africa" },
      { property: "og:title", content: "Gold in DRC Congo — Verified & Responsibly Sourced" },
      { property: "og:description", content: "Congolese gold with ICGLR certification, OECD due diligence and LBMA-standard partner refining." },
      { property: "og:url", content: "/gold-in-congo" },
      { property: "og:image", content: img.oreDeposit ?? img.goldBullion },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/gold-in-congo" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: CongoPage,
});

function CongoPage() {
  return (
    <CountryPage
      country="DRC Congo"
      slug="congo"
      eyebrow="Gold in DRC Congo"
      heroTitle={<>Responsibly sourced <span className="text-gradient-gold">gold in DRC Congo</span>.</>}
      heroSubtitle="ICGLR-certified, OECD-compliant Congolese gold from Ituri, South Kivu, North Kivu, Maniema and Haut-Uele — consolidated and exported through Mayfox Nairobi."
      image={img.oreDeposit ?? img.goldBullion}
      intro={
        <>
          <p>
            The Democratic Republic of the Congo is one of the world's most
            significant gold provinces. Kibali in Haut-Uele is among the
            largest gold mines on the planet, and artisanal production across
            Ituri, South Kivu, North Kivu and Maniema adds tens of tonnes of
            annual output. The scale of the resource is matched by the
            complexity of the compliance environment — which is why Mayfox
            approaches DRC sourcing with an exceptionally strict framework.
          </p>
          <p>
            Every Congolese consignment we handle must meet the OECD Due
            Diligence Guidance for Responsible Supply Chains of Minerals from
            Conflict-Affected and High-Risk Areas, carry a valid ICGLR
            Regional Certificate, and originate from licensed exporters and
            cooperatives. We will not handle consignments that fail these
            checks.
          </p>
          <p>
            Verified DRC gold is refined through LBMA-standard partner
            refineries in the region or in Dubai, and consolidated in Nairobi
            for onward air freight to institutional buyers in Dubai, Zurich,
            London, Singapore, Mumbai and Hong Kong.
          </p>
        </>
      }
      stats={[
        { value: "OECD", label: "Due Diligence" },
        { value: "ICGLR", label: "Certification" },
        { value: "LBMA", label: "Standard Refining" },
        { value: "9999", label: "Investment Purity" },
      ]}
      regions={[
        { name: "Ituri", desc: "Mongbwalu, Djugu and Kilo-Moto belt — historic and active production with strong cooperative structure." },
        { name: "South Kivu", desc: "Kamituga, Mwenga and Twangiza — major hard-rock and alluvial artisanal production." },
        { name: "North Kivu", desc: "Walikale district alluvial and hard-rock operations under formalisation." },
        { name: "Maniema", desc: "Namoya area — active mechanised and artisanal production." },
        { name: "Haut-Uele", desc: "Home to the Kibali gold mine — one of the world's largest producers." },
        { name: "Tshopo & Bas-Uele", desc: "Emerging goldfields with growing licensed cooperative activity." },
      ]}
      products={[
        { title: "Congolese Dore Bars", desc: "85–95% purity dore from ICGLR-certified exporters and cooperatives.", to: "/products" },
        { title: "Gold Nuggets", desc: "Alluvial nuggets with full origin documentation and independent assay.", to: "/products" },
        { title: "Refined 995 Bullion", desc: "DRC-source gold refined through LBMA-standard partner refineries.", to: "/products" },
        { title: "Investment 9999 Bars", desc: "24-karat investment bars refined from certified Congolese source metal.", to: "/products" },
        { title: "Raw Gold", desc: "Unprocessed placer gold — accepted only with full ICGLR certification.", to: "/products" },
        { title: "Refined Gold Grain", desc: "9999 grain from responsibly sourced Congolese metal.", to: "/products" },
      ]}
      process={[
        { title: "Screen", desc: "Five-step OECD due diligence: management systems, risk identification, mitigation, audit and reporting." },
        { title: "Certify", desc: "Verify ICGLR Regional Certificate, exporter licence and full chain-of-custody documentation." },
        { title: "Assay & Refine", desc: "Independent assay and refining through LBMA-standard partner refineries." },
        { title: "Export", desc: "Consolidated in Nairobi and shipped via JKIA to the buyer's vault under insured air freight." },
      ]}
      faqs={faqs}
      related={[
        { label: "Gold in Kenya", to: "/gold-in-kenya" },
        { label: "Gold in Tanzania", to: "/gold-in-tanzania" },
        { label: "Gold in Uganda", to: "/gold-in-uganda" },
        { label: "Gold in Africa", to: "/gold-in-africa" },
        { label: "Compliance", to: "/compliance" },
        { label: "Export Documentation", to: "/export-documentation" },
      ]}
    />
  );
}
