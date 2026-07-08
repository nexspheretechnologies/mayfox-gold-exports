import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "../lib/images";
import { PageHero, SectionHeader } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/market-insights")({
  head: () => ({
    meta: [
      { title: "African Gold Market Insights | Mayfox Gold Kenya" },
      { name: "description", content: "African gold market intelligence: bullion price trends, Kenya, Tanzania, Uganda & DRC mining news, LBMA compliance and export updates." },
      { name: "keywords", content: "african gold market, gold price africa, gold mining africa, kenya gold news, tanzania gold mining, uganda gold export, drc congo gold, lbma gold, gold investment africa, bullion market insights" },
      { property: "og:title", content: "Market Insights — Mayfox Gold" },
      { property: "og:description", content: "African gold market intelligence: bullion price trends, Kenya, Tanzania, Uganda & DRC mining news, LBMA compliance and export updates." },
      { property: "og:image", content: img.chart },
      { property: "og:url", content: absoluteUrl("/market-insights") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/market-insights") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "African Gold Market Insights — Mayfox Gold Kenya",
          description: "Bullion market intelligence, African mining news, LBMA compliance updates and gold export analysis for institutional buyers.",
          numberOfItems: 20,
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@type": "Article", name: "Gold Reaches New All-Time High Amid Global Uncertainty", headline: "Gold Reaches New All-Time High Amid Global Uncertainty", description: "How geopolitical tension and central bank buying are redrawing the bullion landscape.", about: "Market Trends" } },
            { "@type": "ListItem", position: 2, item: { "@type": "Article", name: "Africa's Rising Role in the Global Bullion Supply Chain", headline: "Africa's Rising Role in the Global Bullion Supply Chain", description: "Why the continent now accounts for over a quarter of global mined gold.", about: "Africa Mining" } },
            { "@type": "ListItem", position: 3, item: { "@type": "Article", name: "Understanding LBMA Good Delivery Standards", headline: "Understanding LBMA Good Delivery Standards", description: "What it takes for a refinery to achieve and maintain LBMA accreditation.", about: "Compliance" } },
            { "@type": "ListItem", position: 4, item: { "@type": "Article", name: "A Buyer's Guide to Kenyan Gold Export Documentation", headline: "A Buyer's Guide to Kenyan Gold Export Documentation", description: "Walkthrough of the ten documents accompanying every Mayfox consignment.", about: "Export" } },
            { "@type": "ListItem", position: 5, item: { "@type": "Article", name: "Allocated vs Unallocated Gold — What Institutional Buyers Choose", headline: "Allocated vs Unallocated Gold — What Institutional Buyers Choose", description: "Comparing custody models for sovereign and HNW portfolios.", about: "Investment" } },
            { "@type": "ListItem", position: 6, item: { "@type": "Article", name: "Q1 Bullion Flow: East Africa to GCC Corridor", headline: "Q1 Bullion Flow: East Africa to GCC Corridor", description: "Quarterly snapshot of physical gold movement through the Nairobi–Dubai trade route.", about: "Commodity Reports" } },
            { "@type": "ListItem", position: 7, item: { "@type": "Article", name: "Central Bank Gold Reserves Cross 36,000 Tonnes", headline: "Central Bank Gold Reserves Cross 36,000 Tonnes", description: "Why sovereign appetite for physical gold is at multi-decade highs.", about: "Market Trends" } },
            { "@type": "ListItem", position: 8, item: { "@type": "Article", name: "Artisanal Mining in East Africa — Formalization Progress", headline: "Artisanal Mining in East Africa — Formalization Progress", description: "How licensed cooperative models are improving traceability and economics.", about: "Africa Mining" } },
            { "@type": "ListItem", position: 9, item: { "@type": "Article", name: "Gold ETFs vs Physical Bullion in 2026", headline: "Gold ETFs vs Physical Bullion in 2026", description: "What the new wave of physical-backed ETFs means for vault demand.", about: "Investment News" } },
            { "@type": "ListItem", position: 10, item: { "@type": "Article", name: "Kenya's New Export Duty Framework Explained", headline: "Kenya's New Export Duty Framework Explained", description: "Updates on royalty, VAT exemption and licensing for refined gold exports.", about: "Export Regulations" } },
            { "@type": "ListItem", position: 11, item: { "@type": "Article", name: "OECD Due Diligence — A Practical Guide for Buyers", headline: "OECD Due Diligence — A Practical Guide for Buyers", description: "Five-step framework every institutional buyer should require.", about: "Compliance" } },
            { "@type": "ListItem", position: 12, item: { "@type": "Article", name: "Silver, Platinum, Palladium — Diversifying the Precious Basket", headline: "Silver, Platinum, Palladium — Diversifying the Precious Basket", description: "Mayfox's view on the role of supporting metals in a portfolio.", about: "Precious Metals" } },
            { "@type": "ListItem", position: 13, item: { "@type": "Article", name: "Dollar Weakness and the Bullion Rally", headline: "Dollar Weakness and the Bullion Rally", description: "Decoding the inverse relationship between USD strength and gold price.", about: "Market Trends" } },
            { "@type": "ListItem", position: 14, item: { "@type": "Article", name: "Why Dubai Remains the World's Physical Gold Capital", headline: "Why Dubai Remains the World's Physical Gold Capital", description: "DMCC infrastructure, customs treatment and global vaulting.", about: "Trade Insights" } },
            { "@type": "ListItem", position: 15, item: { "@type": "Article", name: "Family Offices Are Increasing Physical Gold Allocations", headline: "Family Offices Are Increasing Physical Gold Allocations", description: "A look at the structural shift toward allocated bullion mandates.", about: "Investment" } },
            { "@type": "ListItem", position: 16, item: { "@type": "Article", name: "Tanzania's New Refining Capacity and Its Impact on East Africa", headline: "Tanzania's New Refining Capacity and Its Impact on East Africa", description: "How regional refining changes the dore-export economics.", about: "Africa Mining" } },
            { "@type": "ListItem", position: 17, item: { "@type": "Article", name: "Half-Year Gold Demand Trends Report", headline: "Half-Year Gold Demand Trends Report", description: "Combined jewellery, technology, investment and central bank demand analysis.", about: "Commodity Reports" } },
            { "@type": "ListItem", position: 18, item: { "@type": "Article", name: "Sanctions Screening Best Practices for Bullion Dealers", headline: "Sanctions Screening Best Practices for Bullion Dealers", description: "Tools, lists and workflows used by leading compliance teams.", about: "Compliance" } },
            { "@type": "ListItem", position: 19, item: { "@type": "Article", name: "Hedging Bullion Inventory with Forwards and Options", headline: "Hedging Bullion Inventory with Forwards and Options", description: "Mayfox's approach to managing price risk on inventory in transit.", about: "Investment" } },
            { "@type": "ListItem", position: 20, item: { "@type": "Article", name: "Gold Versus Bitcoin as a Store of Value in 2026", headline: "Gold Versus Bitcoin as a Store of Value in 2026", description: "A balanced comparison from a physical-bullion perspective.", about: "Market Trends" } },
          ],
        }),
      },
    ],
  }),
  component: Insights,
});

const articles = [
  { c: "Market Trends", t: "Gold Reaches New All-Time High Amid Global Uncertainty", d: "How geopolitical tension and central bank buying are redrawing the bullion landscape." },
  { c: "Africa Mining", t: "Africa's Rising Role in the Global Bullion Supply Chain", d: "Why the continent now accounts for over a quarter of global mined gold." },
  { c: "Compliance", t: "Understanding LBMA Good Delivery Standards", d: "What it takes for a refinery to achieve and maintain LBMA accreditation." },
  { c: "Export", t: "A Buyer's Guide to Kenyan Gold Export Documentation", d: "Walkthrough of the ten documents accompanying every Mayfox consignment." },
  { c: "Investment", t: "Allocated vs Unallocated Gold — What Institutional Buyers Choose", d: "Comparing custody models for sovereign and HNW portfolios." },
  { c: "Commodity Reports", t: "Q1 Bullion Flow: East Africa to GCC Corridor", d: "Quarterly snapshot of physical gold movement through the Nairobi–Dubai trade route." },
  { c: "Market Trends", t: "Central Bank Gold Reserves Cross 36,000 Tonnes", d: "Why sovereign appetite for physical gold is at multi-decade highs." },
  { c: "Africa Mining", t: "Artisanal Mining in East Africa — Formalization Progress", d: "How licensed cooperative models are improving traceability and economics." },
  { c: "Investment News", t: "Gold ETFs vs Physical Bullion in 2026", d: "What the new wave of physical-backed ETFs means for vault demand." },
  { c: "Export Regulations", t: "Kenya's New Export Duty Framework Explained", d: "Updates on royalty, VAT exemption and licensing for refined gold exports." },
  { c: "Compliance", t: "OECD Due Diligence — A Practical Guide for Buyers", d: "Five-step framework every institutional buyer should require." },
  { c: "Precious Metals", t: "Silver, Platinum, Palladium — Diversifying the Precious Basket", d: "Mayfox's view on the role of supporting metals in a portfolio." },
  { c: "Market Trends", t: "Dollar Weakness and the Bullion Rally", d: "Decoding the inverse relationship between USD strength and gold price." },
  { c: "Trade Insights", t: "Why Dubai Remains the World's Physical Gold Capital", d: "DMCC infrastructure, customs treatment and global vaulting." },
  { c: "Investment", t: "Family Offices Are Increasing Physical Gold Allocations", d: "A look at the structural shift toward allocated bullion mandates." },
  { c: "Africa Mining", t: "Tanzania's New Refining Capacity and Its Impact on East Africa", d: "How regional refining changes the dore-export economics." },
  { c: "Commodity Reports", t: "Half-Year Gold Demand Trends Report", d: "Combined jewellery, technology, investment and central bank demand analysis." },
  { c: "Compliance", t: "Sanctions Screening Best Practices for Bullion Dealers", d: "Tools, lists and workflows used by leading compliance teams." },
  { c: "Investment", t: "Hedging Bullion Inventory with Forwards and Options", d: "Mayfox's approach to managing price risk on inventory in transit." },
  { c: "Market Trends", t: "Gold Versus Bitcoin as a Store of Value in 2026", d: "A balanced comparison from a physical-bullion perspective." },
];

const categories = ["All", "Market Trends", "Investment", "Africa Mining", "Compliance", "Export", "Commodity Reports"];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Market Insights"
        title={<>Bullion intelligence from the <span className="text-gradient-gold">Mayfox</span> trade desk.</>}
        subtitle="Field-led analysis, regulatory updates and African mining intelligence — written for institutional buyers and serious investors."
        image={img.chart}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <span key={c} className="text-xs tracking-[0.2em] uppercase border border-border px-4 py-2 hover:border-gold hover:text-gold cursor-pointer transition-colors">{c}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Link to="/contact" key={a.t} className="card-luxe overflow-hidden block group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={[img.chart, img.mining, img.lab, img.documents, img.tradingFloor, img.vault, img.goldStack, img.smelting][i % 8]} alt={a.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">{a.c}</div>
                  <h3 className="font-display text-xl leading-snug mb-3">{a.t}</h3>
                  <p className="text-sm text-muted-foreground">{a.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Weekly Briefing"
            title={<>Subscribe to the <span className="text-gradient-gold">Mayfox Bullion Brief</span>.</>}
            align="center"
            description="A concise weekly note for institutional readers: price action, flows, compliance and Africa mining."
          />
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 max-w-md mx-auto flex gap-3">
            <input type="email" required placeholder="Email address" className="flex-1 bg-card border border-border px-4 py-3 text-sm focus:border-gold outline-none" />
            <button className="btn-gold btn-gold-hover">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
