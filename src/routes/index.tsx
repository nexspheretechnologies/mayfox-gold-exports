import { createFileRoute, Link } from "@tanstack/react-router";
import { img, realPhotos } from "../lib/images";
import { CTABand, SectionHeader, Stat } from "../components/site-blocks";
import { SilentVideo, VideoShowcase, mayfoxVideos } from "../components/video-showcase";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy African Gold — Nuggets & Dore Bars | Mayfox" },
      { name: "description", content: "Kenya's trusted African gold exporter. Buy gold nuggets, dore bars, raw gold and refined bars through our partner refineries from Kenya, Tanzania, Uganda & DRC Congo." },
      { name: "keywords", content: "african gold, gold in africa, gold in kenya, gold in uganda, gold in tanzania, gold in congo, gold nuggets for sale, raw gold for sale, gold dore bars, lbma gold, gold investment, gold dore kenya, gold bars kenya, gold dealers in kenya, gold price kenya, gold mining kenya, gold refinery kenya, gold exporters kenya, gold export agents nairobi, precious metals kenya, alluvial gold, east africa gold, migori gold, kakamega gold, tanzania gold mining, uganda gold export, drc congo gold, gold smelting africa, 24 karat gold, 999.9 gold, conflict-free gold africa, dubai gold export agents, gold assay kenya, sell gold nairobi, gold trading company kenya, Mayfox Gold" },
      { property: "og:title", content: "African Gold Export Agents — Mayfox Gold Kenya" },
      { property: "og:description", content: "Verified African gold — nuggets, dore bars, raw & refined gold — exported worldwide with full documentation." },
      { property: "og:image", content: absoluteUrl(img.goldBars1) },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Where can I buy gold in Kenya?", acceptedAnswer: { "@type": "Answer", text: "Mayfox Gold, based on Rhapta Road, Westlands, Nairobi, is a licensed Kenyan gold dealer and exporter providing verified dore bars, nuggets and raw gold to institutional buyers worldwide." } },
            { "@type": "Question", name: "Do you supply gold from Tanzania, Uganda and DRC Congo?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mayfox sources responsibly-mined gold across East and Central Africa — Kenya, Tanzania, Uganda and the Democratic Republic of Congo — under OECD due-diligence and KYC/AML controls." } },
            { "@type": "Question", name: "What gold products does Mayfox export?", acceptedAnswer: { "@type": "Answer", text: "Gold dore bars (85–95%), gold nuggets (85–92%), raw and alluvial gold, and grain gold — with refined 995 to 999.9 bars cast through our partner refineries on request." } },
            { "@type": "Question", name: "Do you ship gold internationally?", acceptedAnswer: { "@type": "Answer", text: "Yes — insured air freight to Dubai (DMCC), Zurich, London, Singapore, Hong Kong, Mumbai and North America with full export documentation and certificate of origin." } },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SilentVideo
            src={mayfoxVideos[0]}
            poster={realPhotos.bars}
            ariaLabel="Mayfox Gold vault footage"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container-x relative py-32">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow mb-6">Nairobi · Dubai · Zürich · London</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Kenya's Trusted <span className="text-gradient-gold">Gold</span> & Precious Metals Export Partner
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Verified African gold — dore bars, nuggets and precious metals — arranged for
              international buyers with complete export documentation and secure global delivery.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/request-quote" className="btn-gold btn-gold-hover">Request Quote</Link>
              <Link to="/contact" className="btn-outline-gold">Speak to Our Team</Link>
              <Link to="/products" className="text-sm tracking-[0.18em] uppercase text-gold self-center hover:underline underline-offset-8 decoration-gold/40">Explore Products →</Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              <Stat value="99.99%" label="Max Purity" />
              <Stat value="42+" label="Countries Served" />
              <Stat value="100%" label="Documented Exports" />
            </div>
          </div>
        </div>

        {/* Floating credentials */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gold/20 bg-onyx/80 backdrop-blur">
          <div className="container-x py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            <div>✦ Verified Purity 95% – 99.99%</div>
            <div>✦ Full Export Documentation</div>
            <div>✦ Insured Global Logistics</div>
            <div>✦ KYC & AML Compliant</div>
          </div>
        </div>
      </section>

      {/* WHY MAYFOX */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <div>
              <div className="eyebrow mb-5">Why Mayfox</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Institutional-grade integrity in every transaction.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                For over a decade, Mayfox has connected responsibly sourced East African gold
                to refineries, jewelers, central reserves and institutional buyers across four
                continents. Every consignment ships with a verifiable assay, regulatory clearance,
                and end-to-end insurance.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ["Verified Origin", "All consignments traced to licensed cooperatives and miners."],
                  ["Independent Assay", "Gold tested by SGS and third-party laboratories."],
                  ["Secure Settlement", "Escrow, LC, and bank-to-bank options for institutional buyers."],
                  ["Full Compliance", "Adherence to LBMA Responsible Sourcing & OECD Due Diligence."],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-4 pb-4 border-b border-border/60">
                    <div className="text-gold font-display text-xl">◆</div>
                    <div>
                      <div className="font-medium">{t}</div>
                      <div className="text-sm text-muted-foreground">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={realPhotos.bars} alt="Crates of gold bars at Mayfox trading desk" loading="eager" className="rounded-sm h-72 w-full object-cover" />
              <img src={realPhotos.grains} alt="Sacks of gold grains for refining" loading="eager" className="rounded-sm h-72 w-full object-cover mt-12" />
              <img src={realPhotos.scale} alt="Gold bar on precision weighing scale" loading="eager" className="rounded-sm h-72 w-full object-cover -mt-8" />
              <img src={img.goldBullion} alt="Gold dore bars" loading="lazy" className="rounded-sm h-72 w-full object-cover mt-4" />
            </div>
          </div>
        </div>
      </section>

      <VideoShowcase />

      {/* PRODUCTS */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <SectionHeader
              eyebrow="Products"
              title={<>Investment-grade <span className="text-gradient-gold">precious metals</span>.</>}
              description="From dore bars straight from the smelter to refined 999.9 investment gold bars, every product is documented, assayed, and export-ready."
            />
            <Link to="/products" className="btn-outline-gold whitespace-nowrap">All Products</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Good Delivery Format Bars", purity: "99.99%", image: img.goldBars2 },
              { name: "Gold Dore Bars", purity: "85–95%", image: img.goldIngot },
              { name: "Gold Nuggets", purity: "85–92%", image: img.goldNuggets },
              { name: "Raw Gold", purity: "Field Grade", image: img.oreDeposit },
              { name: "Refined Gold", purity: "99.5–99.9%", image: img.goldBars3 },
              { name: "Investment Grade", purity: "999.9 / LBMA", image: img.goldStack },
            ].map((p) => (
              <Link
                to="/products"
                key={p.name}
                className="card-luxe overflow-hidden block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="p-6 flex justify-between items-end">
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-gold mb-2">Purity {p.purity}</div>
                    <h3 className="font-display text-xl">{p.name}</h3>
                  </div>
                  <div className="text-gold">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={img.worldMap} alt="Global delivery network" className="rounded-sm w-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-onyx/40 to-transparent" />
            </div>
            <div>
              <div className="eyebrow mb-5">Global Reach</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Delivering verified gold to <span className="text-gradient-gold">42+ markets</span> worldwide.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Mayfox maintains active trade corridors into the world's most demanding gold
                markets — coordinated through our partners in Dubai, Zürich, Singapore, Hong
                Kong, London and New York.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
                {["Africa", "Middle East", "Europe", "Asia", "North America", "South America"].map((r) => (
                  <div key={r} className="flex items-center justify-between border-b border-border/60 pb-3">
                    <span className="text-sm">{r}</span>
                    <span className="text-gold text-xs tracking-widest">ACTIVE</span>
                  </div>
                ))}
              </div>
              <Link to="/global-delivery" className="btn-outline-gold mt-8 inline-flex">Explore Logistics</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Mayfox Process"
            title={<>A precise <span className="text-gradient-gold">six-step</span> export workflow.</>}
            description="From inquiry to delivery at your vault, every Mayfox transaction follows the same documented, auditable process."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["01", "Inquiry & KYC", "Buyer onboarding, KYC verification and contract drafting."],
              ["02", "Quotation & SPA", "Locked price, weight, purity and delivery terms via Sales & Purchase Agreement."],
              ["03", "Independent Assay", "On-site or third-party laboratory verification with full assay certificate."],
              ["04", "Export Documentation", "Origin certificates, export licence, customs clearance, insurance."],
              ["05", "Secure Logistics", "Insured airfreight via approved security carriers (Brinks, Loomis, Malca-Amit)."],
              ["06", "Delivery & Settlement", "Vault-to-vault delivery and bank-confirmed settlement on receipt."],
            ].map(([n, t, d]) => (
              <div key={n} className="card-luxe p-7">
                <div className="font-display text-5xl text-gradient-gold mb-4">{n}</div>
                <h3 className="font-display text-2xl mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <SectionHeader eyebrow="Industries Served" title={<>Trusted across the global <span className="text-gradient-gold">precious metals</span> ecosystem.</>} />
            <Link to="/industries" className="btn-outline-gold whitespace-nowrap">All Sectors</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/40">
            {[
              "Refineries", "Bullion Banks", "Jewelry Houses", "Investment Funds",
              "Central Reserves", "Mining Cooperatives", "Commodity Traders", "Industrial Buyers",
              "Wealth Managers", "Sovereign Wealth",
            ].map((i) => (
              <div key={i} className="bg-background p-6 hover:bg-onyx transition-colors">
                <div className="text-gold text-xs tracking-widest mb-2">◆</div>
                <div className="font-display text-lg leading-tight">{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="section-y bg-onyx border-y border-border/60">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            ["12+", "Years in Gold Trade"],
            ["$480M", "Settled Cargo Value"],
            ["1,200+", "Documented Consignments"],
            ["0", "Failed Deliveries"],
          ].map(([v, l]) => (
            <Stat key={l} value={v} label={l} />
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <SectionHeader eyebrow="Market Insights" title={<>Gold intelligence from the <span className="text-gradient-gold">Mayfox</span> trade desk.</>} />
            <Link to="/market-insights" className="btn-outline-gold whitespace-nowrap">All Articles</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Gold Reaches New All-Time High Amid Global Uncertainty", c: "Market Trends", img: img.chart },
              { t: "Africa's Rising Role in the Global Gold Supply Chain", c: "Africa Mining", img: img.mining },
              { t: "Understanding LBMA Good Delivery Standards", c: "Compliance", img: img.lab },
            ].map((a) => (
              <Link to="/market-insights" key={a.t} className="card-luxe overflow-hidden block group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">{a.c}</div>
                  <h3 className="font-display text-xl leading-snug">{a.t}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
