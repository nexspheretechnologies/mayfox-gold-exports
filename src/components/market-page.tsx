import { Link } from "@tanstack/react-router";
import type { MarketData } from "../data/market-pages";
import { img } from "../lib/images";
import { PageHero, SectionHeader, Stat } from "./site-blocks";
import { ExploreMoreGrid, MarketDepthSections } from "./country-page";

export function MarketPage(p: MarketData) {
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={<>{p.heroTitle}</>}
        subtitle={p.heroSubtitle}
        image={img.goldBullion}
      />

      {/* Intro */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose-luxe">
            <SectionHeader
              eyebrow="Market Overview"
              title={<>Verified <span className="text-gradient-gold">African gold</span> for {p.country}.</>}
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              {p.introParagraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
          <aside className="card-luxe p-7 h-fit">
            <div className="eyebrow mb-4">Trade Desk</div>
            <h3 className="font-display text-2xl mb-3">Buy gold for {p.country}</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Verified consignments with assay, chain-of-custody and full export
              documentation. Nairobi desk responds within one business hour.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+254754979755" className="block hover:text-gold"><span className="text-gold">Call:</span> +254 754 979 755</a>
              <a href="mailto:sales@mayfox.co.ke" className="block hover:text-gold"><span className="text-gold">Email:</span> sales@mayfox.co.ke</a>
              <a href="https://wa.me/254754979755" target="_blank" rel="noopener noreferrer" className="block hover:text-gold"><span className="text-gold">WhatsApp:</span> +254 754 979 755</a>
            </div>
            <Link to="/request-quote" className="btn-gold btn-gold-hover mt-6 w-full text-center">Request Quote</Link>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="section-y border-t border-border/50 bg-onyx/50">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
          {p.stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      {/* Shipping */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Logistics"
            title={p.shippingSection.title}
          />
          <div className="mt-10 max-w-4xl space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            {p.shippingSection.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Regulatory Framework"
            title={p.complianceSection.title}
          />
          <div className="mt-10 max-w-4xl space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            {p.complianceSection.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mayfox */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Mayfox"
            title={<>Why {p.country} buyers choose <span className="text-gradient-gold">Mayfox Gold</span>.</>}
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {p.whyMayfox.map((item, i) => (
              <div key={i} className="card-luxe p-6 flex gap-4">
                <div className="text-gold text-2xl font-display flex-shrink-0 mt-0.5">&#10003;</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketDepthSections
        country={p.country}
        buyerClimate={p.buyerClimate}
        logisticsNote={p.logisticsNote}
        settlementNote={p.settlementNote}
        dueDiligence={p.dueDiligence}
      />

      <ExploreMoreGrid links={p.relatedLinks ?? []} />

      {/* FAQs */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x max-w-4xl">
          <SectionHeader
            eyebrow="FAQs"
            title={<>Common questions about buying gold for <span className="text-gradient-gold">{p.country}</span>.</>}
          />
          <div className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {p.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <span className="font-display text-lg">{f.q}</span>
                  <span className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y border-t border-border/50 bg-gradient-to-b from-onyx to-background">
        <div className="container-x text-center max-w-3xl">
          <div className="eyebrow justify-center mb-6">Ready to trade</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6">
            Buy verified <span className="text-gradient-gold">African gold</span> for {p.country} today.
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach the Mayfox trade desk in Nairobi for pricing, availability and delivery to your vault in {p.country}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote" className="btn-gold btn-gold-hover">Request Quote</Link>
            <Link to="/contact" className="btn-outline-gold">Contact Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
