import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served | Refineries, Bullion Banks, Jewelers — Mayfox Kenya" },
      { name: "description", content: "Mayfox Gold supplies verified bullion to refineries, bullion banks, jewelry manufacturers, investment funds, central reserves and industrial buyers worldwide." },
      { property: "og:title", content: "Industries Served — Mayfox Gold" },
      { property: "og:image", content: img.boardroom },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const items = [
  { t: "Mining Companies", i: img.mining, d: "Long-term offtake agreements for licensed cooperatives and mid-tier producers across East Africa." },
  { t: "Jewelry Manufacturers", i: img.goldCoins, d: "Reliable supply of refined gold to ateliers and large-scale jewelry houses in the GCC, Asia and Europe." },
  { t: "Investment Firms", i: img.tradingFloor, d: "Bullion-backed portfolio supply for funds, family offices and HNWIs seeking allocated gold." },
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
