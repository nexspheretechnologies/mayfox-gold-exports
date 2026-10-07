import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "African Gold export agents to Refineries, Bullion Banks & Jewelers | Mayfox" },
      { name: "description", content: "African gold export agent to LBMA refineries, bullion banks, jewelry manufacturers, investment funds and central reserves — sourcing from Kenya, Tanzania, Uganda and DRC Congo." },
      { name: "keywords", content: "african gold export agents, gold export agents to refineries, bullion bank gold supply, gold for jewelry manufacturers, dubai gold export agents, lbma refinery supply, gold offtake africa" },
      { property: "og:title", content: "Industries Served — Mayfox Gold" },
      { property: "og:description", content: "African gold export agent to LBMA refineries, bullion banks, jewelry manufacturers, investment funds and central reserves — sourcing from Kenya, Tanzania, Uganda and DRC Congo." },
      { property: "og:image", content: absoluteUrl(img.boardroom) },
      { property: "og:url", content: absoluteUrl("/industries") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries Served — Mayfox Gold Kenya",
          description: "Nine institutional verticals served by Mayfox Gold: mining companies, jewelry manufacturers, investment firms, bullion dealers, refineries, commodity traders, industrial buyers, financial institutions and precious metal distributors.",
          numberOfItems: 9,
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "Mining Companies", description: "Long-term offtake agreements for licensed cooperatives and mid-tier producers across East Africa." } },
            { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Jewelry Manufacturers", description: "Reliable supply of refined gold to ateliers and large-scale jewelry houses in the GCC, Asia and Europe." } },
            { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Investment Firms", description: "Gold-backed portfolio supply for funds, family offices and HNWIs seeking allocated gold." } },
            { "@type": "ListItem", position: 4, item: { "@type": "Thing", name: "Bullion Dealers", description: "Wholesale tonnage to regional bullion dealers under tiered pricing and structured logistics." } },
            { "@type": "ListItem", position: 5, item: { "@type": "Thing", name: "Refineries", description: "Dore bar supply to LBMA-accredited refineries in Dubai, Switzerland and Singapore." } },
            { "@type": "ListItem", position: 6, item: { "@type": "Thing", name: "Commodity Traders", description: "Brokerage and physical execution for trading desks operating across precious metals markets." } },
            { "@type": "ListItem", position: 7, item: { "@type": "Thing", name: "Industrial Buyers", description: "Industrial-grade refined gold for electronics, dentistry, aerospace and specialty manufacturing." } },
            { "@type": "ListItem", position: 8, item: { "@type": "Thing", name: "Financial Institutions", description: "Central reserves and bullion banks requiring documented, allocated and audit-ready inventory." } },
            { "@type": "ListItem", position: 9, item: { "@type": "Thing", name: "Precious Metal Distributors", description: "Distribution partners seeking consistent monthly supply with full provenance documentation." } },
          ],
        }),
      },
    ],
  }),
  component: Industries,
});

const items = [
  { t: "Mining Companies", i: img.mining, d: "Long-term offtake agreements for licensed cooperatives and mid-tier producers across East Africa." },
  { t: "Jewelry Manufacturers", i: img.goldCoins, d: "Reliable supply of refined gold to ateliers and large-scale jewelry houses in the GCC, Asia and Europe." },
  { t: "Investment Firms", i: img.tradingFloor, d: "Gold-backed portfolio supply for funds, family offices and HNWIs seeking allocated gold." },
  { t: "Bullion Dealers", i: img.goldStack, d: "Wholesale tonnage to regional bullion dealers under tiered pricing and structured logistics." },
  { t: "Refineries", i: img.refining, d: "Dore bar supply to LBMA-accredited refineries in Dubai, Switzerland and Singapore." },
  { t: "Commodity Traders", i: img.handshake, d: "Brokerage and physical execution for trading desks operating across precious metals markets." },
  { t: "Industrial Buyers", i: img.warehouse, d: "Industrial-grade refined gold for electronics, dentistry, aerospace and specialty manufacturing." },
  { t: "Financial Institutions", i: img.boardroom, d: "Central reserves and bullion banks requiring documented, allocated and audit-ready inventory." },
  { t: "Precious Metal Distributors", i: img.vault, d: "Distribution partners seeking consistent monthly supply with full provenance documentation." },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        title={<>Trusted by the global <span className="text-gradient-gold">precious metals</span> ecosystem.</>}
        subtitle="Mayfox serves nine core institutional verticals — from artisanal refineries to sovereign reserves."
        image={img.boardroom}
      />

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.t} className="card-luxe overflow-hidden">
              <img src={it.i} alt={it.t} className="w-full h-56 object-cover" />
              <div className="p-7">
                <h3 className="font-display text-2xl mb-3">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Tailored Programs"
            title={<>Each sector gets a <span className="text-gradient-gold">bespoke supply structure</span>.</>}
            align="center"
            description="From single-shipment spot orders to multi-year offtake agreements with monthly tonnage commitments."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
