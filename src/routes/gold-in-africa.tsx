import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, faqJsonLd } from "../components/country-page";
import { img } from "../lib/images";
import { absoluteUrl } from "../lib/site-url";

const faqs = [
  { q: "Which African countries produce the most gold?", a: "Ghana is Africa's largest gold producer, followed by South Africa, Sudan, Mali, Burkina Faso, Tanzania, Guinea, the DRC, Ivory Coast, Zimbabwe and Kenya. Together the continent produces more than 25% of the world's mined gold." },
  { q: "Where can I buy African gold?", a: "Mayfox Gold, headquartered in Nairobi, sources verified African gold from Kenya, Tanzania, Uganda and the DRC Congo, and supplies international buyers with full assay, chain-of-custody and export documentation." },
  { q: "Is African gold safe to buy?", a: "Yes — when sourced from licensed dealers and cooperatives with OECD Due Diligence, LBMA Responsible Gold and (for DRC) ICGLR Regional Certification. Mayfox applies this framework to every consignment." },
  { q: "What forms of African gold are available for export?", a: "Alluvial and eluvial nuggets, dore bars 82–95% purity, refined 995 bullion, investment-grade 9999 bars, refined grain and jewellery-ready gold." },
  { q: "How is African gold priced?", a: "African gold is priced against the LBMA AM/PM fix in USD per troy ounce, discounted for dore based on assayed purity. Mayfox provides live quotes on request." },
  { q: "How is African gold shipped internationally?", a: "Consignments are consolidated in Nairobi and shipped as insured air freight via JKIA using Brinks, Malca-Amit or Loomis to Dubai (DMCC), Zurich, London, Singapore, Hong Kong, Mumbai, New York and Johannesburg." },
  { q: "Is African gold conflict-free?", a: "Mayfox only supplies gold that meets OECD Due Diligence Guidance for Responsible Supply Chains and, where applicable, ICGLR Regional Certification and LBMA Responsible Gold Guidance." },
  { q: "How can I verify an African gold supplier?", a: "Ask for the dealer's export licence, KYC records, independent assay certificates, chain-of-custody documentation and prior export references. Mayfox provides these before any transaction." },
];

export const Route = createFileRoute("/gold-in-africa")({
  head: () => ({
    meta: [
      { title: "Gold in Africa | African Gold Suppliers, Dore Bars & Bullion — Mayfox" },
      { name: "description", content: "The complete guide to buying gold in Africa. Verified African gold from Kenya, Tanzania, Uganda and DRC Congo — dore bars, nuggets, refined 995 bullion and investment-grade 9999 bars with full documentation. Trade desk: +254 754 979 755." },
      { name: "keywords", content: "gold in africa, african gold, africa gold suppliers, buy gold in africa, gold mining africa, gold dealers africa, east africa gold, west africa gold, kenya gold, tanzania gold, uganda gold, congo gold, ghana gold, south africa gold, mali gold, burkina faso gold, africa gold export, lbma africa, oecd gold africa" },
      { property: "og:title", content: "Gold in Africa — Verified Suppliers & Exporters" },
      { property: "og:description", content: "African gold from Kenya, Tanzania, Uganda and DRC with full assay, chain-of-custody and export documentation." },
      { property: "og:url", content: absoluteUrl("/gold-in-africa") },
      { property: "og:image", content: img.goldBars1 },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gold-in-africa") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: AfricaPage,
});

function AfricaPage() {
  return (
    <CountryPage
      country="Africa"
      slug="africa"
      eyebrow="Gold in Africa"
      heroTitle={<>The definitive guide to <span className="text-gradient-gold">gold in Africa</span>.</>}
      heroSubtitle="African gold suppliers with verified sourcing from Kenya, Tanzania, Uganda and DRC Congo — full assay, chain-of-custody and export documentation, exported worldwide from Nairobi."
      image={img.goldBars1}
      intro={
        <>
          <p>
            Africa produces more than a quarter of the world's mined gold and
            holds some of the largest untapped reserves on the planet. From
            Ghana's Ashanti belt in the west to Tanzania's Lake Victoria
            goldfield in the east, and from Sudan's Nubian shield in the north
            to South Africa's Witwatersrand basin in the south, the continent
            is central to the global bullion market.
          </p>
          <p>
            Mayfox Gold and Precious Metals Kenya is a licensed African gold
            supplier headquartered in Nairobi. We source verified consignments
            from Kenya, Tanzania, Uganda and the DRC Congo, apply OECD Due
            Diligence Guidance and LBMA Responsible Gold Guidance to every
            transaction, and export worldwide through JKIA to Dubai, Zurich,
            London, Singapore, Hong Kong, Mumbai, New York and Johannesburg.
          </p>
          <p>
            Whether you need alluvial gold nuggets, dore bars for refining,
            refined 995 bullion or investment-grade 9999 bars, our Nairobi
            trade desk provides institutional pricing, verified origin and
            insured global delivery.
          </p>
        </>
      }
      stats={[
        { value: "25%+", label: "Of Global Mined Gold" },
        { value: "4", label: "Core Source Countries" },
        { value: "50+", label: "Export Destinations" },
        { value: "9999", label: "Max Purity" },
      ]}
      regions={[
        { name: "East Africa", desc: "Kenya, Tanzania, Uganda — Mayfox's core sourcing corridor, consolidated in Nairobi for global export." },
        { name: "Great Lakes", desc: "DRC Congo — one of the world's largest gold provinces, sourced under strict ICGLR and OECD frameworks." },
        { name: "West Africa", desc: "Ghana, Mali, Burkina Faso, Ivory Coast, Guinea — the Ashanti and Birimian belts host multiple world-class producers." },
        { name: "Southern Africa", desc: "South Africa and Zimbabwe — historic Witwatersrand basin and greenstone belt production." },
        { name: "Northern Africa", desc: "Sudan, Egypt and Mauritania — significant emerging production on the Arabian-Nubian shield." },
        { name: "Refining Hubs", desc: "Rand Refinery (South Africa), AGR (Uganda), Kaloti (Uganda), Metalor and PAMP counterparts in Dubai serving African source metal." },
      ]}
      products={[
        { title: "African Gold Nuggets", desc: "Alluvial and eluvial nuggets from East and Central Africa with independent assay.", to: "/products" },
        { title: "Dore Bars", desc: "82–95% purity dore bars sourced from licensed African cooperatives and exporters.", to: "/products" },
        { title: "Refined 995 Bullion", desc: "LBMA-standard refined bars in 1 kg and larger denominations.", to: "/products" },
        { title: "Investment 9999 Bars", desc: "24-karat investment bars in 100g, 250g, 500g and 1 kg sizes.", to: "/products" },
        { title: "Raw Gold", desc: "Unprocessed placer and alluvial gold for buyers with in-house refining.", to: "/products" },
        { title: "Refined Gold Grain", desc: "9999 grain for jewellers and secondary refiners.", to: "/products" },
      ]}
      process={[
        { title: "Source", desc: "OECD-screened sourcing from licensed operators in Kenya, Tanzania, Uganda and DRC." },
        { title: "Verify", desc: "KYC on every seller, ICGLR certification for DRC metal, independent purity assay." },
        { title: "Refine", desc: "Optional smelting and refining to 995 or 9999 through LBMA-standard partner refineries." },
        { title: "Export", desc: "Full export documentation and insured air freight via JKIA to the buyer's vault worldwide." },
      ]}
      faqs={faqs}
      related={[
        { label: "Gold in Kenya", to: "/gold-in-kenya" },
        { label: "Gold in Tanzania", to: "/gold-in-tanzania" },
        { label: "Gold in Uganda", to: "/gold-in-uganda" },
        { label: "Gold in Congo (DRC)", to: "/gold-in-congo" },
        { label: "Products", to: "/products" },
        { label: "Global Delivery", to: "/global-delivery" },
      ]}
    />
  );
}
