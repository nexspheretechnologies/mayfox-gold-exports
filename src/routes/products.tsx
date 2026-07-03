import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Gold Nuggets for Sale | Gold Dore Bars, Raw Gold & Bullion — Mayfox Kenya" },
      { name: "description", content: "Gold nuggets for sale, gold dore bars, raw gold and LBMA-grade bullion from Kenya, Tanzania, Uganda & DRC Congo. Verified African gold with full assay, certificate of origin and insured export." },
      { name: "keywords", content: "gold nuggets for sale, gold dore bars, dore bars, raw gold for sale, african gold, gold bullion kenya, gold bars kenya, 24 karat gold, 999.9 gold, lbma gold, investment grade gold, buy gold online, gold from uganda, gold from tanzania, drc congo gold" },
      { property: "og:title", content: "Gold Nuggets, Dore Bars & Bullion — Mayfox Gold Kenya" },
      { property: "og:image", content: img.goldBars2 },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const products = [
  {
    name: "Gold Bullion Bars",
    purity: "99.50% – 99.99%",
    weights: ["1 oz", "100 g", "250 g", "500 g", "1 kg", "12.5 kg LBMA"],
    image: img.goldBars2,
    overview: "LBMA-format bullion bars produced and stamped to international Good Delivery standards. Each bar is serialized, weighed and assayed before release.",
    use: "Central reserves, bullion banks, investment funds, ETFs and high-net-worth vaults.",
  },
  {
    name: "Gold Dore Bars",
    purity: "85% – 95%",
    weights: ["5 kg", "10 kg", "15 kg", "20 kg", "Custom"],
    image: img.goldIngot,
    overview: "Semi-pure gold bars cast directly at the smelter from artisanal and small-scale mining feed. Ideal for buyers operating their own refineries.",
    use: "International refineries (DMCC, Valcambi, PAMP), large-scale traders.",
  },
  {
    name: "Gold Nuggets",
    purity: "85% – 92%",
    weights: ["100 g – 5 kg parcels"],
    image: img.goldNuggets,
    overview: "Naturally formed alluvial nuggets sourced from licensed cooperatives. Each parcel includes weight breakdown and visual inspection report.",
    use: "Jewelry manufacturers, collectors, niche refiners, museum grade pieces.",
  },
  {
    name: "Raw Gold",
    purity: "Field Grade 70–88%",
    weights: ["By the kilogram"],
    image: img.oreDeposit,
    overview: "Unprocessed gold direct from cooperative-licensed pits. Refined and assayed on-site before consolidation into dore bars or sale.",
    use: "Refineries, smelters, integrated mining-trading houses.",
  },
  {
    name: "Refined Gold",
    purity: "99.50% – 99.90%",
    weights: ["Custom"],
    image: img.goldBars3,
    overview: "Twice-refined gold produced at Mayfox-partnered facilities. Casting to client specification including private branding.",
    use: "Wholesalers, mints, jewelers, regional distributors.",
  },
  {
    name: "Investment Grade Gold",
    purity: "99.99% (Four-Nines)",
    weights: ["1 oz – 1 kg"],
    image: img.goldStack,
    overview: "Highest grade investment bullion meeting LBMA Good Delivery and Swiss refinery standards. Tamper-evident packaging and digital provenance.",
    use: "Sovereign wealth, family offices, institutional portfolios.",
  },
  {
    name: "Wholesale Gold Supply",
    purity: "Mixed inventories",
    weights: ["Contractual / monthly tonnage"],
    image: img.goldBullion,
    overview: "Long-term offtake agreements for refineries and bullion banks requiring monthly tonnage. Structured under SPA with quarterly compliance review.",
    use: "Long-term institutional offtake partners.",
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Gold Products"
        title={<>Documented, assayed, <span className="text-gradient-gold">export-ready</span> precious metals.</>}
        subtitle="From dore straight off the smelter to four-nines investment bullion, every Mayfox product ships with full assay, certificate of origin, and export clearance."
        image={img.goldBars2}
      />

      <section className="section-y">
        <div className="container-x space-y-20">
          {products.map((p, i) => (
            <article key={p.name} id={p.name.toLowerCase().replace(/\s+/g, "-")} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden rounded-sm">
                  <img src={p.image} alt={p.name} className="w-full h-[480px] object-cover" />
                  <div className="absolute top-5 left-5 bg-onyx/85 backdrop-blur px-4 py-2 text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/40">
                    Purity {p.purity}
                  </div>
                </div>
              </div>
              <div>
                <div className="eyebrow mb-4">Product 0{i + 1}</div>
                <h2 className="font-display text-4xl lg:text-5xl">{p.name}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.overview}</p>

                <div className="mt-7 grid grid-cols-2 gap-5">
                  <div className="border-l border-gold/40 pl-4">
                    <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">Purity</div>
                    <div className="text-sm">{p.purity}</div>
                  </div>
                  <div className="border-l border-gold/40 pl-4">
                    <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">Weights</div>
                    <div className="text-sm">{p.weights.join(" · ")}</div>
                  </div>
                  <div className="border-l border-gold/40 pl-4">
                    <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">Packaging</div>
                    <div className="text-sm">Sealed, tamper-evident, serialized</div>
                  </div>
                  <div className="border-l border-gold/40 pl-4">
                    <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">Export</div>
                    <div className="text-sm">Worldwide insured air freight</div>
                  </div>
                </div>

                <div className="mt-6 text-sm">
                  <span className="text-gold tracking-widest text-[10px] uppercase mr-2">Industries:</span>
                  <span className="text-muted-foreground">{p.use}</span>
                </div>

                <div className="mt-8 flex gap-3">
                  <Link to="/request-quote" className="btn-gold btn-gold-hover">Request Quote</Link>
                  <Link to="/contact" className="btn-outline-gold">Speak to a Trader</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quality assurance band */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Quality Assurance"
            title={<>Every gram <span className="text-gradient-gold">assayed, weighed, sealed</span>.</>}
            align="center"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              ["XRF Spectroscopy", "Non-destructive surface purity test on every bar."],
              ["Fire Assay", "Independent fire-assay verification by SGS / Alex Stewart."],
              ["Serialization", "Each bar laser-engraved with weight, purity & unique ID."],
              ["Chain of Custody", "Documented from smelter to vault — verifiable on request."],
            ].map(([t, d]) => (
              <div key={t} className="border border-gold/20 p-6">
                <h3 className="font-display text-xl mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
