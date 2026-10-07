import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero, SectionHeader, Stat, FeatureCard } from "./site-blocks";

export interface CountryFaq {
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  path: string;
}

export interface MarketDepthProps {
  country: string;
  buyerClimate?: string[];
  logisticsNote?: string;
  settlementNote?: string;
  dueDiligence?: string[];
}

export interface CountryPageProps {
  country: string;
  slug: string;
  eyebrow: string;
  heroTitle: ReactNode;
  heroSubtitle: string;
  image: string;
  intro: ReactNode;
  stats: { value: string; label: string }[];
  regions: { name: string; desc: string }[];
  products: { title: string; desc: string; to: string }[];
  process: { title: string; desc: string }[];
  faqs: CountryFaq[];
  related: { label: string; to: string }[];
  relatedLinks?: RelatedLink[];
  buyerClimate?: string[];
  logisticsNote?: string;
  settlementNote?: string;
  dueDiligence?: string[];
}

function byPath(links: RelatedLink[]): RelatedLink[] {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.path)) return false;
    seen.add(l.path);
    return true;
  });
}

/**
 * Buyer-behaviour, import-corridor and settlement depth sections. Every block renders only
 * when its data is present, so markets without depth copy simply skip the section.
 */
export function MarketDepthSections(p: MarketDepthProps) {
  const climate = p.buyerClimate ?? [];
  const checklist = p.dueDiligence ?? [];
  const hasSettlementOrChecklist = Boolean(p.settlementNote) || checklist.length > 0;

  if (!climate.length && !p.logisticsNote && !hasSettlementOrChecklist) return null;

  return (
    <>
      {climate.length > 0 && (
        <section className="section-y border-t border-border/50 bg-onyx/40">
          <div className="container-x">
            <SectionHeader
              eyebrow="Buyer Climate"
              title={<>How <span className="text-gradient-gold">{p.country}</span> buyers actually buy.</>}
              description="The institutions, trade hubs and proof standards that shape a first conversation in this market."
            />
            <div className="mt-10 max-w-4xl space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              {climate.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.logisticsNote && (
        <section className="section-y">
          <div className="container-x">
            <SectionHeader
              eyebrow="Import Corridor"
              title={<>The freight route in, and the papers {p.country} buyers ask to see.</>}
            />
            <p className="mt-10 max-w-4xl text-muted-foreground leading-relaxed text-[15px]">{p.logisticsNote}</p>
          </div>
        </section>
      )}

      {hasSettlementOrChecklist && (
        <section className="section-y border-t border-border/50 bg-onyx/40">
          <div className="container-x grid lg:grid-cols-5 gap-10 items-start">
            {p.settlementNote && (
              <div className={checklist.length ? "lg:col-span-3" : "lg:col-span-5"}>
                <SectionHeader
                  eyebrow="Settling A First Trade"
                  title={<>How a first trade with an East African agent is customarily structured.</>}
                />
                <p className="mt-8 text-muted-foreground leading-relaxed text-[15px] max-w-3xl">{p.settlementNote}</p>
              </div>
            )}
            {checklist.length > 0 && (
              <aside className={p.settlementNote ? "card-luxe p-7 lg:col-span-2" : "card-luxe p-7"}>
                <div className="eyebrow mb-4">Due Diligence Checklist</div>
                <h3 className="font-display text-xl mb-5">Questions a {p.country} compliance officer should ask Mayfox.</h3>
                <ul className="space-y-4">
                  {checklist.map((q, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-gold leading-none mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      )}
    </>
  );
}

/** Shared "Explore More" link grid used by the country and market templates. */
export function ExploreMoreGrid({ links }: { links: RelatedLink[] }) {
  const unique = byPath(links);
  if (!unique.length) return null;
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeader eyebrow="Explore More" title="Related pages" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {unique.map((r) => (
            <Link key={r.path} to={r.path} className="card-luxe p-5 flex items-center justify-between hover:border-gold transition-colors">
              <span className="font-display">{r.label}</span>
              <span className="text-gold">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CountryPage(p: CountryPageProps) {
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        image={p.image}
      />

      {/* Intro */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose-luxe">
            <SectionHeader
              eyebrow={`Gold in ${p.country}`}
              title={<>Sourcing, refining and exporting <span className="text-gradient-gold">{p.country} gold</span>.</>}
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              {p.intro}
            </div>
          </div>
          <aside className="card-luxe p-7 h-fit">
            <div className="eyebrow mb-4">Trade Desk</div>
            <h3 className="font-display text-2xl mb-3">Buy {p.country} gold</h3>
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

      {/* Regions */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Sourcing Regions"
            title={<>Key gold-producing regions of <span className="text-gradient-gold">{p.country}</span>.</>}
            description={`We work with licensed cooperatives and permitted mining operators across ${p.country}'s primary goldfields, applying OECD due diligence at every step.`}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {p.regions.map((r) => (
              <div key={r.name} className="card-luxe p-6">
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Region</div>
                <h3 className="font-display text-xl mb-3">{r.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Available Products"
            title={<>What we supply from <span className="text-gradient-gold">{p.country}</span>.</>}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {p.products.map((pr) => (
              <FeatureCard key={pr.title} title={pr.title}>
                <>
                  {pr.desc}{" "}
                  <Link to={pr.to} className="text-gold hover:underline">Learn more →</Link>
                </>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="How It Works"
            title={<>Our {p.country} sourcing and export process.</>}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {p.process.map((s, i) => (
              <div key={s.title} className="card-luxe p-6">
                <div className="text-gradient-gold font-display text-4xl mb-3">0{i + 1}</div>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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

      {/* FAQs */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x max-w-4xl">
          <SectionHeader
            eyebrow="FAQs"
            title={<>Common questions about gold in <span className="text-gradient-gold">{p.country}</span>.</>}
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

      {/* Related */}
      <ExploreMoreGrid
        links={[
          ...p.related.map((r) => ({ label: r.label, path: r.to })),
          ...(p.relatedLinks ?? []),
        ]}
      />

      {/* CTA */}
      <section className="section-y border-t border-border/50 bg-gradient-to-b from-onyx to-background">
        <div className="container-x text-center max-w-3xl">
          <div className="eyebrow justify-center mb-6">Ready to trade</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6">
            Buy verified <span className="text-gradient-gold">{p.country} gold</span> today.
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach the Mayfox trade desk in Nairobi for pricing, availability and delivery to your vault.
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

export function faqJsonLd(faqs: CountryFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
