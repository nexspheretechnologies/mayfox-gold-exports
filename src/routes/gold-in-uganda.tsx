import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, faqJsonLd } from "../components/country-page";
import { img } from "../lib/images";
import { absoluteUrl } from "../lib/site-url";

const faqs = [
  { q: "Where can I buy gold in Uganda?", a: "Mayfox sources verified Ugandan gold from licensed dealers and cooperatives in Karamoja, Busia, Mubende and Buhweju, consolidating consignments in Nairobi for onward international export with full documentation." },
  { q: "Is Uganda a major gold exporter?", a: "Yes. Gold has become one of Uganda's leading export earners in recent years, with significant transit and refining volume moving through Kampala and Entebbe. The African Gold Refinery (AGR) in Entebbe is a major regional refiner." },
  { q: "What are the main gold regions in Uganda?", a: "Karamoja (Moroto, Nakapiripirit, Amudat), Busia, Buhweju, Mubende, Kigezi (Kanungu) and the Kaabong district — plus significant cross-border flows from the DRC processed in Entebbe." },
  { q: "Is Ugandan gold LBMA compliant?", a: "The African Gold Refinery in Entebbe operates to international refining standards; Mayfox screens every Ugandan consignment against OECD Due Diligence and LBMA Responsible Gold Guidance before accepting it." },
  { q: "Can Ugandan gold be exported through Kenya?", a: "Yes. Ugandan gold cleared under a URA export permit is commonly consolidated in Nairobi for onward air freight to Dubai, Zurich, Mumbai and beyond." },
  { q: "What purities of Ugandan gold are available?", a: "Dore typically 85–95%, refined gold at 995 and 9999 investment-grade bars via partner refineries." },
  { q: "How do you verify Ugandan gold origin?", a: "Each consignment carries seller KYC, exporter licence, purity assay, chain-of-custody documentation and OECD-compliant due diligence records." },
];

export const Route = createFileRoute("/gold-in-uganda")({
  head: () => ({
    meta: [
      { title: "Gold in Uganda | Buy Ugandan Gold Dore Bars & Nuggets — Mayfox" },
      { name: "description", content: "Buy gold in Uganda — verified Ugandan dore bars, nuggets and refined gold from Karamoja, Busia, Mubende and Buhweju. Consolidated in Nairobi with full assay and export documentation." },
      { name: "keywords", content: "gold in uganda, ugandan gold, uganda gold export, uganda gold mining, karamoja gold, mubende gold, buy gold in uganda, gold dealers in uganda, entebbe gold refinery, african gold refinery" },
      { property: "og:title", content: "Gold in Uganda — Verified Dore & Nuggets" },
      { property: "og:description", content: "Ugandan gold from Karamoja, Busia and Mubende with full assay and export documentation." },
      { property: "og:url", content: absoluteUrl("/gold-in-uganda") },
      { property: "og:image", content: absoluteUrl(img.goldNuggets) },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gold-in-uganda") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: UgandaPage,
});

function UgandaPage() {
  return (
    <CountryPage
      country="Uganda"
      slug="uganda"
      eyebrow="Gold in Uganda"
      heroTitle={<>Sourcing and exporting <span className="text-gradient-gold">gold in Uganda</span>.</>}
      heroSubtitle="Verified Ugandan dore, nuggets and refined gold from Karamoja, Busia, Mubende and Buhweju — consolidated and exported through Mayfox Nairobi."
      image={img.goldNuggets}
      intro={
        <>
          <p>
            Gold has become one of Uganda's most important export commodities.
            The country's own artisanal production combines with significant
            regional transit and refining volume — the African Gold Refinery
            (AGR) in Entebbe has established Uganda as a Great Lakes refining
            hub for source metal from Uganda, the DRC and neighbouring states.
          </p>
          <p>
            Mayfox partners with licensed Ugandan dealers and cooperatives to
            source verified dore, nuggets and refined product. All consignments
            are screened under OECD Due Diligence Guidance, LBMA Responsible
            Gold Guidance and Uganda's Mining Act, then consolidated in Nairobi
            for onward air freight.
          </p>
          <p>
            Ugandan gold enters the international market via Entebbe or via
            Nairobi (JKIA), destined for Dubai, Zurich, London, Mumbai,
            Singapore and Hong Kong. Mayfox handles the licensing, KYC, assay
            and secure logistics end-to-end.
          </p>
        </>
      }
      stats={[
        { value: "Top-3", label: "Uganda Export" },
        { value: "9999", label: "Refined Purity" },
        { value: "24hr", label: "Quote Response" },
        { value: "50+", label: "Vault Destinations" },
      ]}
      regions={[
        { name: "Karamoja", desc: "Moroto, Nakapiripirit, Amudat and Kaabong — Uganda's largest artisanal goldfield." },
        { name: "Busia", desc: "Eastern Uganda alluvial and hard-rock mining on the Kenyan border, with active cooperative production." },
        { name: "Mubende", desc: "Central Uganda historic goldfield with strong ASM output around Kitumbi and Bukuya." },
        { name: "Buhweju", desc: "South-western Uganda alluvial and eluvial production in the Ankole region." },
        { name: "Kigezi (Kanungu)", desc: "Emerging small-scale hard-rock production near the DRC border." },
        { name: "Entebbe Refining Hub", desc: "The African Gold Refinery (AGR) is a Great Lakes refining centre serving regional source metal." },
      ]}
      products={[
        { title: "Ugandan Dore Bars", desc: "85–95% purity dore from licensed dealers and cooperatives.", to: "/products" },
        { title: "Gold Nuggets", desc: "Alluvial nuggets from Karamoja and Buhweju with independent assay.", to: "/products" },
        { title: "Refined 995 Gold", desc: "Ugandan-source gold refined to 995 through Entebbe or Dubai partner refineries.", to: "/products" },
        { title: "Investment 9999 Bars", desc: "24-karat bars in 100g, 250g, 500g and 1 kg denominations.", to: "/products" },
        { title: "Raw Gold", desc: "Unprocessed placer gold with field assay for buyers with in-house refining.", to: "/products" },
        { title: "Refined Gold Grain", desc: "9999 grain for jewellers and secondary refiners.", to: "/products" },
      ]}
      process={[
        { title: "Source", desc: "OECD-screened sourcing from licensed Ugandan dealers and cooperatives." },
        { title: "Assay", desc: "Independent purity assay at accredited laboratories in Kampala, Entebbe or Nairobi." },
        { title: "Consolidate", desc: "Consignments cleared under URA export permits and consolidated in Nairobi." },
        { title: "Export", desc: "Insured air freight via JKIA or Entebbe with Brinks, Malca-Amit or Loomis." },
      ]}
      faqs={faqs}
      related={[
        { label: "Gold in Kenya", to: "/gold-in-kenya" },
        { label: "Gold in Tanzania", to: "/gold-in-tanzania" },
        { label: "Gold in Congo (DRC)", to: "/gold-in-congo" },
        { label: "Gold in Africa", to: "/gold-in-africa" },
        { label: "Products", to: "/products" },
        { label: "Global Delivery", to: "/global-delivery" },
      ]}
    />
  );
}
