import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, faqJsonLd } from "../components/country-page";
import { img } from "../lib/images";

const faqs = [
  { q: "Where can I buy gold in Kenya?", a: "Mayfox Gold is a licensed Kenyan gold dealer headquartered on Rhapta Road, Westlands, Nairobi. We supply verified gold nuggets, dore bars, refined bullion and investment-grade bars to institutional buyers and serious private investors, with full assay, chain-of-custody and export documentation." },
  { q: "Is buying gold in Kenya legal for foreign buyers?", a: "Yes. Kenya permits the export of refined and dore gold to foreign buyers under a Ministry of Mining export permit. Mayfox handles all licensing, KRA clearance, KEBS assay and Kenya Revenue Authority documentation on behalf of the buyer." },
  { q: "What is the price of gold in Kenya today?", a: "Kenyan gold is priced against the LBMA AM/PM fix in USD per troy ounce, converted to KES at the day's interbank rate. Discounts apply to dore based on purity assayed at KEBS or an independent lab. Contact the Mayfox trade desk for a live quote." },
  { q: "Where is gold mined in Kenya?", a: "Kenya's primary goldfields are in Migori (Macalder, Masara, Kehancha), Kakamega (Rosterman, Bushiangala, Ikolomani), Vihiga, Siaya, West Pokot and Turkana. Mayfox sources from licensed cooperatives and permitted operators across these areas." },
  { q: "Do you export Kenyan gold internationally?", a: "Yes. Mayfox exports Kenyan gold to Dubai (DMCC), Switzerland, London, Singapore, Hong Kong, Mumbai, New York and Johannesburg via Brinks, Malca-Amit and Loomis, using JKIA as the port of exit with full customs clearance." },
  { q: "What purities of Kenyan gold do you sell?", a: "Dore bars from 85% to 92% purity, refined bullion at 99.5% (995) and investment-grade bars at 99.99% (9999). Every consignment ships with an independent assay certificate." },
  { q: "How do I verify a Kenyan gold dealer?", a: "Ask for the Ministry of Mining dealer's licence, KRA PIN, physical office address, KEBS assay reports and previous export documentation. Mayfox provides all of these on request before any transaction." },
];

export const Route = createFileRoute("/gold-in-kenya")({
  head: () => ({
    meta: [
      { title: "Gold in Kenya | Buy Kenyan Gold Nuggets, Dore Bars & Bullion — Mayfox" },
      { name: "description", content: "Buy gold in Kenya from a licensed Nairobi dealer. Verified Kenyan gold nuggets, dore bars, refined bullion and investment-grade bars from Migori, Kakamega and West Pokot with full assay and export documentation." },
      { name: "keywords", content: "gold in kenya, kenyan gold, gold dealers in kenya, gold price kenya, buy gold in kenya, gold mining kenya, migori gold, kakamega gold, gold bullion kenya, gold nuggets kenya, sell gold nairobi, gold refinery kenya, gold exporters kenya" },
      { property: "og:title", content: "Gold in Kenya — Buy Verified Kenyan Bullion & Nuggets" },
      { property: "og:description", content: "Licensed Nairobi gold dealer. Verified Kenyan gold with full assay, chain-of-custody and export documentation." },
      { property: "og:url", content: "/gold-in-kenya" },
      { property: "og:image", content: img.goldBullion },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/gold-in-kenya" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: KenyaPage,
});

function KenyaPage() {
  return (
    <CountryPage
      country="Kenya"
      slug="kenya"
      eyebrow="Gold in Kenya"
      heroTitle={<>The complete guide to buying <span className="text-gradient-gold">gold in Kenya</span>.</>}
      heroSubtitle="Licensed Kenyan gold supplier on Rhapta Road, Westlands, Nairobi — serving institutional bullion buyers, refineries, jewellers and private investors worldwide."
      image={img.goldBullion}
      intro={
        <>
          <p>
            Kenya is East Africa's most established bullion trading hub. Nairobi
            sits at the intersection of gold flows from Migori, Kakamega, West
            Pokot and Turkana, as well as cross-border consignments from
            Tanzania, Uganda and the eastern DRC. Mayfox operates from Rhapta
            Road, Westlands, running the licensed sourcing, assay, refining and
            export desk that international buyers rely on.
          </p>
          <p>
            The Kenyan gold industry is regulated by the Ministry of Mining under
            the Mining Act 2016. Every dealer must hold a valid dealer's licence,
            KRA PIN and export permit. Mayfox operates within this framework and
            complies with OECD Due Diligence Guidance, the LBMA Responsible Gold
            Guidance and Kenya's Proceeds of Crime and Anti-Money Laundering Act.
          </p>
          <p>
            We supply gold nuggets, alluvial gold, dore bars from 85–92% purity,
            refined 995 bullion and investment-grade 9999 bars — with independent
            assay certificates and full export documentation for onward delivery
            to Dubai, Zurich, London, Singapore, Mumbai and New York.
          </p>
        </>
      }
      stats={[
        { value: "13+", label: "Years Trading" },
        { value: "99.99%", label: "Max Purity" },
        { value: "24hr", label: "Quote Response" },
        { value: "50+", label: "Export Destinations" },
      ]}
      regions={[
        { name: "Migori Goldfield", desc: "Macalder, Masara, Kehancha and Rongo — Kenya's largest producing region, dominated by both mechanised and artisanal alluvial and hard-rock operations." },
        { name: "Kakamega Belt", desc: "Rosterman, Bushiangala, Ikolomani and Lirhanda Hill — historic greenstone belt, high-grade hard-rock ore feeding licensed cooperative processing." },
        { name: "West Pokot", desc: "Emerging alluvial and eluvial gold production around Sekerr and the Suam river system." },
        { name: "Turkana", desc: "Alluvial gold from seasonal river systems in the Loima and Nakalale areas." },
        { name: "Vihiga & Siaya", desc: "Small-scale hard-rock and alluvial operations in the Nyanza greenstone belt." },
        { name: "Nairobi Trade Desk", desc: "Consolidation, assay, refining coordination and export licensing from Mayfox's Westlands headquarters." },
      ]}
      products={[
        { title: "Gold Nuggets", desc: "Alluvial and eluvial nuggets from Migori and Kakamega, sold by weight with independent purity assay.", to: "/products" },
        { title: "Gold Dore Bars", desc: "Semi-refined dore bars 85–92% purity from Kenyan cooperatives and mining operators.", to: "/products" },
        { title: "Refined Gold Bullion", desc: "995 refined bars in 1 kg and larger denominations, refined to LBMA reference standards.", to: "/products" },
        { title: "Investment-Grade Bars", desc: "9999 (24-karat) investment bars in 100g, 250g, 500g and 1 kg sizes with certified assay.", to: "/products" },
        { title: "Raw Gold", desc: "Unprocessed placer gold with field assay reports for buyers with in-house refining.", to: "/products" },
        { title: "Refined Gold Grain", desc: "9999 refined grain for jewellers and secondary refiners.", to: "/products" },
      ]}
      process={[
        { title: "Source", desc: "OECD-compliant sourcing from licensed Kenyan mining cooperatives and permitted operators." },
        { title: "Assay", desc: "Independent purity assay at KEBS or a Mayfox-approved third-party laboratory in Nairobi." },
        { title: "Refine", desc: "Optional smelting and refining to 995 or 9999 through partner refineries in Kenya or Dubai." },
        { title: "Export", desc: "Full customs clearance at JKIA with insured air freight via Brinks, Malca-Amit or Loomis." },
      ]}
      faqs={faqs}
      related={[
        { label: "Gold in Tanzania", to: "/gold-in-tanzania" },
        { label: "Gold in Uganda", to: "/gold-in-uganda" },
        { label: "Gold in Congo (DRC)", to: "/gold-in-congo" },
        { label: "Gold in Africa", to: "/gold-in-africa" },
        { label: "Products", to: "/products" },
        { label: "Export Documentation", to: "/export-documentation" },
      ]}
    />
  );
}
