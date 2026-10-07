import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { absoluteUrl } from "../lib/site-url";
import { articles } from "../data/articles";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Deterministic formatter: no locale lookup, so server markup and client hydration agree.
function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

// Newest first, so the visible order matches the ItemList ordering in the JSON-LD.
const byNewest = [...articles].sort((a, b) => b.published.localeCompare(a.published));
const categories = ["All", ...Array.from(new Set(byNewest.map((a) => a.category)))];
const cardImages = [
  img.chart, img.assay, img.documents, img.certificate,
  img.cargoPlane, img.contract, img.lab, img.goldStack,
];

export const Route = createFileRoute("/market-insights")({
  head: () => {
    const seo = pageSeo({
      title: "African Gold Market Insights | Mayfox Gold Kenya",
      description:
        "African gold market intelligence: doré pricing against LBMA benchmarks, assay reports, Kenyan export documentation, OECD due diligence, insured air freight and settlement — written for institutional buyers.",
      path: "/market-insights",
      keywords:
        "african gold market, gold price africa, dore price lbma, gold assay report, kenya gold export documentation, oecd due diligence gold, gold air freight insurance, gold settlement documents, kenya gold news, lbma gold",
      ogImage: img.chart,
      ogType: "website",
    });

    return {
      ...seo,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "African Gold Market Insights — Mayfox Gold Kenya",
            description:
              "Bullion market intelligence, African mining compliance and gold export analysis for institutional buyers.",
            numberOfItems: byNewest.length,
            itemListElement: byNewest.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/insights/${article.slug}`),
              item: {
                "@type": "Article",
                name: article.title,
                headline: article.title,
                description: article.dek,
                datePublished: article.published,
                dateModified: article.updated,
                inLanguage: "en-KE",
                author: {
                  "@type": article.author.type,
                  name: article.author.name,
                  description: article.author.bio,
                  url: absoluteUrl("/"),
                },
                articleSection: article.category,
                keywords: article.category,
                url: absoluteUrl(`/insights/${article.slug}`),
              },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Market Insights", path: "/market-insights" },
            ]),
          ),
        },
      ],
    };
  },
  component: Insights,
});

function Insights() {
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? byNewest : byNewest.filter((a) => a.category === category);

  return (
    <>
      <PageHero
        eyebrow="Market Insights"
        title={<>Gold intelligence from the <span className="text-gradient-gold">Mayfox</span> trade desk.</>}
        subtitle="Long-form, buyer-relevant analysis of doré pricing, assay, Kenyan export documentation, due diligence, logistics and settlement — every article published at its own address."
        image={img.chart}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={c === category}
                className={`text-xs tracking-[0.2em] uppercase border px-4 py-2 transition-colors ${
                  c === category ? "border-gold text-gold" : "border-border hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((a) => (
              <Link
                to="/insights/$slug"
                params={{ slug: a.slug }}
                key={a.slug}
                className="card-luxe overflow-hidden block group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={cardImages[byNewest.indexOf(a) % cardImages.length]}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">{a.category}</div>
                  <h2 className="font-display text-xl leading-snug mb-3">{a.title}</h2>
                  <p className="text-sm text-muted-foreground">{a.dek}</p>
                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={a.published}>{formatDate(a.published)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{a.readMinutes} min read</span>
                    <span className="ml-auto text-gold">Read article</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-xs text-muted-foreground leading-relaxed">
            Every article listed here is general market and process information published by the Mayfox Trade Desk. It is not
            investment, legal, tax or financial advice, and it is not a price quotation or an offer to sell. Requirements issued
            by regulators, laboratories, carriers and banks change — confirm current figures and requirements directly with the
            relevant authority, or with our trade desk.
          </p>
        </div>
      </section>

      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Weekly Briefing"
            title={<>Subscribe to the <span className="text-gradient-gold">Mayfox Gold Brief</span>.</>}
            align="center"
            description="A concise weekly note for institutional readers: price action, flows, compliance and Africa mining."
          />
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 max-w-md mx-auto flex gap-3">
            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="flex-1 bg-card border border-border px-4 py-3 text-sm focus:border-gold outline-none"
            />
            <button className="btn-gold btn-gold-hover">Subscribe</button>
          </form>
        </div>
      </section>

      <CTABand />
    </>
  );
}
