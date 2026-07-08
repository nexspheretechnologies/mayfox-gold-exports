import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, faqJsonLd } from "../components/country-page";
import { img } from "../lib/images";
import { absoluteUrl } from "../lib/site-url";

const faqs = [
  { q: "Where can I buy gold in Tanzania?", a: "Mayfox sources verified Tanzanian gold from licensed cooperatives and permitted operators across Geita, Mwanza, Shinyanga, Mara and Chunya, consolidating consignments in Nairobi for onward export with full documentation." },
  { q: "Is Tanzania a major gold producer?", a: "Yes. Tanzania is Africa's fourth-largest gold producer, with annual output above 45 tonnes from world-class mines including Bulyanhulu, North Mara, Buzwagi and Geita, plus a very large artisanal and small-scale (ASM) sector." },
  { q: "What are the main gold mining regions in Tanzania?", a: "The Lake Victoria Goldfield (Geita, Mwanza, Shinyanga, Mara, Kagera), the Lupa Goldfield (Chunya, Mbeya) and emerging production in Singida and Tabora." },
  { q: "Do I need a licence to buy Tanzanian gold?", a: "Foreign buyers do not need a Tanzanian licence but must transact with a licensed dealer, exporter or refinery. Mayfox handles the sourcing, assay, refining and export licensing chain end-to-end." },
  { q: "Can Tanzanian gold be exported through Kenya?", a: "Yes. Consignments cleared under Tanzanian export permits are commonly consolidated in Nairobi for onward air freight to Dubai, Switzerland, London and Asia via JKIA." },
  { q: "What purities of Tanzanian gold are available?", a: "Artisanal dore typically ranges from 82% to 92% purity. Refined product is available at 995 and 9999 through partner refineries." },
  { q: "How is Tanzanian ASM gold verified?", a: "Every consignment undergoes independent assay, KYC on the seller, chain-of-custody documentation and OECD-compliant due diligence before Mayfox accepts it." },
];

export const Route = createFileRoute("/gold-in-tanzania")({
  head: () => ({
    meta: [
      { title: "Gold in Tanzania | Buy Tanzanian Gold Dore, Nuggets & Bullion — Mayfox" },
      { name: "description", content: "Buy gold in Tanzania — verified Tanzanian dore bars, gold nuggets and refined bullion from Geita, Mwanza, Shinyanga and the Lake Victoria goldfield. Full assay, chain-of-custody and export documentation." },
      { name: "keywords", content: "gold in tanzania, tanzania gold, tanzanian gold, tanzania gold mining, geita gold, mwanza gold, gold dealers in tanzania, buy gold in tanzania, tanzanian dore bars, lake victoria gold" },
      { property: "og:title", content: "Gold in Tanzania — Verified Dore, Nuggets & Bullion" },
      { property: "og:description", content: "Tanzanian gold from Geita, Mwanza and Shinyanga with full assay and export documentation." },
      { property: "og:url", content: absoluteUrl("/gold-in-tanzania") },
      { property: "og:image", content: img.goldIngot },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gold-in-tanzania") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: TanzaniaPage,
});

function TanzaniaPage() {
  return (
    <CountryPage
      country="Tanzania"
      slug="tanzania"
      eyebrow="Gold in Tanzania"
      heroTitle={<>Sourcing and exporting <span className="text-gradient-gold">gold in Tanzania</span>.</>}
      heroSubtitle="Verified Tanzanian dore, nuggets and refined bullion from Geita, Mwanza, Shinyanga and the Lake Victoria goldfield — consolidated and exported through Mayfox Nairobi."
      image={img.goldIngot}
      intro={
        <>
          <p>
            Tanzania is Africa's fourth-largest gold producer, mining more than
            45 tonnes annually from world-class hard-rock operations in the Lake
            Victoria Greenstone Belt and a very large artisanal and small-scale
            mining (ASM) sector. Gold has been Tanzania's leading export earner
            for over two decades and continues to drive the mining sector.
          </p>
          <p>
            Mayfox works with licensed Tanzanian dealers, exporters and
            cooperatives to source verified dore, nuggets and refined product.
            Every consignment passes independent assay, OECD Due Diligence
            screening and Tanzanian export licensing before being consolidated
            in Nairobi for onward air freight to Dubai, Zurich, London,
            Singapore and Mumbai.
          </p>
          <p>
            Tanzania's Mining Commission regulates the sector under the Mining
            Act (Cap. 123). We operate strictly within this framework and provide
            buyers with the full documentation trail from mine to vault.
          </p>
        </>
      }
      stats={[
        { value: "#4", label: "Africa Gold Producer" },
        { value: "45t+", label: "Annual Output" },
        { value: "9999", label: "Max Refined Purity" },
        { value: "24hr", label: "Quote Response" },
      ]}
      regions={[
        { name: "Geita", desc: "Home to the Geita Gold Mine and dozens of licensed ASM operators — the largest producing area in Tanzania." },
        { name: "Mwanza", desc: "Central Lake Victoria hub with strong ASM output and consolidation trading." },
        { name: "Shinyanga", desc: "Hosts Bulyanhulu and Buzwagi plus significant small-scale hard-rock mining." },
        { name: "Mara Region", desc: "North Mara complex plus artisanal alluvial operations along the Mara River basin." },
        { name: "Chunya (Lupa Goldfield)", desc: "Historic Mbeya region goldfield with active small-scale hard-rock and alluvial mining." },
        { name: "Singida & Tabora", desc: "Emerging production zones with growing licensed cooperative activity." },
      ]}
      products={[
        { title: "Tanzanian Dore Bars", desc: "82–92% purity dore from licensed cooperatives and permitted ASM operators.", to: "/products" },
        { title: "Gold Nuggets", desc: "Alluvial nuggets from Geita, Chunya and Mara sold by verified weight and purity.", to: "/products" },
        { title: "Refined 995 Bullion", desc: "Tanzanian gold refined to 995 through partner refineries in the region.", to: "/products" },
        { title: "Investment 9999 Bars", desc: "24-karat investment bars refined from Tanzanian source metal.", to: "/products" },
        { title: "Raw Gold", desc: "Unprocessed alluvial gold with field assay for buyers with in-house refining.", to: "/products" },
        { title: "Refined Gold Grain", desc: "9999 grain for jewellers and secondary refiners.", to: "/products" },
      ]}
      process={[
        { title: "Source", desc: "Direct sourcing from licensed Tanzanian dealers, cooperatives and permitted ASM operators." },
        { title: "Assay", desc: "Independent purity assay in Tanzania or Kenya at accredited laboratories." },
        { title: "Consolidate", desc: "Consignments cleared under Tanzanian export permits and consolidated in Nairobi." },
        { title: "Export", desc: "Insured air freight via JKIA with Brinks, Malca-Amit or Loomis to the buyer's vault." },
      ]}
      faqs={faqs}
      related={[
        { label: "Gold in Kenya", to: "/gold-in-kenya" },
        { label: "Gold in Uganda", to: "/gold-in-uganda" },
        { label: "Gold in Congo (DRC)", to: "/gold-in-congo" },
        { label: "Gold in Africa", to: "/gold-in-africa" },
        { label: "Products", to: "/products" },
        { label: "Compliance", to: "/compliance" },
      ]}
    />
  );
}
