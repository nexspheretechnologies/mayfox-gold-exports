import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader, Stat } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mayfox Gold Kenya | Gold Supply & Export Company" },
      { name: "description", content: "Mayfox Gold is a Kenyan precious metals export company providing verified dore bars and gold nuggets to international buyers since 2012." },
      { property: "og:title", content: "About Mayfox Gold Kenya" },
      { property: "og:description", content: "Mayfox Gold is a Kenyan precious metals export company providing verified dore bars and gold nuggets to international buyers since 2012." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl(img.boardroom) },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Mayfox"
        title={<>A Kenyan house built on <span className="text-gradient-gold">trust, assay & global trade</span>.</>}
        subtitle="Mayfox Gold and Precious Metals Kenya is one of East Africa's most established gold supply, refining and export companies, serving institutional buyers across four continents."
        image={img.boardroom}
      />

      {/* Overview */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-5">Company Overview</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              From Nairobi to the world's <span className="text-gradient-gold">premier bullion markets</span>.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2012 in Nairobi, Mayfox was established to bring institutional discipline
                to East Africa's precious metals trade. We work exclusively with licensed
                cooperatives, small-scale miners and refineries across Kenya, Tanzania, Uganda,
                DRC and Sudan — every consignment traced from pit to port.
              </p>
              <p>
                Our trade desks coordinate transactions between African origin points and refineries
                in Dubai, Zürich, Singapore and Hong Kong. We operate under a rigorous compliance
                framework that mirrors the OECD Due Diligence Guidance and LBMA Responsible Sourcing
                requirements.
              </p>
              <p>
                Today, Mayfox is a trusted name for institutional buyers seeking verified dore,
                documented provenance, and secure cross-border delivery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={img.handshake} alt="Trade partnership" className="rounded-sm h-80 object-cover" />
            <img src={img.skyline} alt="Trading hub" className="rounded-sm h-80 object-cover mt-12" />
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader eyebrow="Our History" title={<>Twelve years of <span className="text-gradient-gold">measured growth</span>.</>} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
            {[
              ["2012", "Founded in Nairobi", "Mayfox incorporated as a registered Kenyan precious metals trader."],
              ["2015", "First DMCC Export", "Established gold corridor to Dubai refineries (DMCC license partner)."],
              ["2018", "Refining Partnership", "Co-investment in a regional smelting & assay facility in Mombasa."],
              ["2024", "42-Country Network", "Active institutional buyers across Africa, GCC, Europe, Asia & Americas."],
            ].map(([y, t, d]) => (
              <div key={y} className="bg-background p-7">
                <div className="font-display text-4xl text-gradient-gold">{y}</div>
                <div className="mt-3 font-medium">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {[
            { t: "Mission", d: "To provide authentic, verified, and responsibly sourced precious metals to international buyers through secure trading, transparent documentation, and reliable global delivery.", i: img.refining },
            { t: "Vision", d: "To become Africa's most trusted precious metals export partner — the benchmark for integrity in cross-border gold trade.", i: img.cargoPlane },
            { t: "Values", d: "Integrity. Compliance. Transparency. Security. Reliability. Excellence. These six tenets govern every consignment, contract and conversation.", i: img.vault },
          ].map((c) => (
            <div key={c.t} className="card-luxe overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.i} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="eyebrow mb-3">{c.t}</div>
                <p className="text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / operations photo block */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Leadership & Operations"
            title={<>A seasoned bench of <span className="text-gradient-gold">trade, refining and compliance</span> specialists.</>}
            description="Our team brings combined decades of experience from LBMA-accredited refineries, central bank reserves, customs authorities and global commodity desks."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Trading Desk", d: "Senior traders managing live spot & forward positions in Nairobi, Dubai and Zürich.", i: img.tradingFloor },
              { t: "Refining Floor", d: "In-house smelters and metallurgists producing investment-grade gold to client spec.", i: img.smelting },
              { t: "Logistics & Security", d: "Dedicated coordinators working alongside Brinks, Loomis and Malca-Amit.", i: img.security },
            ].map((c) => (
              <div key={c.t} className="card-luxe overflow-hidden">
                <img src={c.i} alt="" className="w-full h-72 object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Stat value="2012" label="Year Founded" />
          <Stat value="42+" label="Export Destinations" />
          <Stat value="$480M" label="Value Settled" />
          <Stat value="99.99%" label="Maximum Purity" />
        </div>
      </section>

      <CTABand />
    </>
  );
}
