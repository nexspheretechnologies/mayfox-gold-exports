import { createFileRoute, Link } from "@tanstack/react-router";
import { buyerSegments } from "@/data/buyer-segments";
import { PageHero, SectionHeader, CTABand } from "@/components/site-blocks";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";
import { img } from "@/lib/images";

export const Route = createFileRoute("/for/")({
  head: () => {
    const seo = pageSeo({
      title: "Who We Serve — Gold Buyers | Mayfox Gold Kenya",
      description:
        "Buyer-specific guides for refineries, bullion dealers, family offices and funds, trading houses and jewellery manufacturers sourcing gold doré, nuggets and refined gold from East and Central Africa.",
      path: "/for",
      ogImage: img.handshake,
      keywords:
        "gold buyers kenya, doré for refineries, gold supplier for dealers, physical gold for family office, gold trading house mandate, gold for jewellers manufacturers",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Who We Serve", path: "/for" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Mayfox buyer guides",
            description:
              "Guides to sourcing Kenyan and East African gold for each class of institutional buyer.",
            numberOfItems: buyerSegments.length,
            itemListElement: buyerSegments.map((segment, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${seo.links[0].href}/${segment.slug}`,
              name: segment.label,
            })),
          }),
        },
      ],
    };
  },
  component: BuyerSegmentsIndex,
});

function BuyerSegmentsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title={<>Different buyers, <span className="text-gradient-gold">different gold</span>.</>}
        subtitle="A refinery, a dealer, a fund and a foundry do not want the same product, paperwork or price mechanism. Each guide below is written for one of them."
        image={img.handshake}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Buyer guides"
            title="Pick the desk that matches how you take metal"
            description="Each page covers what that buyer class needs, how a Mayfox mandate is normally structured, where these trades stall, and the questions that buyer asks first."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerSegments.map((segment) => (
              <article key={segment.slug} className="card-luxe p-7 flex flex-col">
                <div className="eyebrow mb-3">{segment.label}</div>
                <h2 className="font-display text-xl mb-3">{segment.h1}</h2>
                <p className="text-sm text-muted-foreground flex-1">{segment.description}</p>
                <Link
                  to="/for/$segment"
                  params={{ segment: segment.slug }}
                  className="mt-6 btn-outline-gold !py-2.5 self-start"
                >
                  Read the guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="Position" title="What every buyer should understand first" />
          <div className="mt-7 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Mayfox is an export agent. We arrange sourcing from licensed cooperatives and buying houses,
              independent assay, the export document set and insured logistics. Refined investment product is
              produced through partner refineries. We are not a mine, a smelter, a refinery or a custodian, and
              each guide says plainly what that means for your structure.
            </p>
            <p>
              Doré and nuggets are semi-finished material priced on contained gold. Investment-grade bars are a
              different product with a different risk profile and a different buyer. If you are unsure which you
              should be asking about, the comparison is on the{" "}
              <Link to="/dore-vs-refined-gold" className="text-gold hover:underline">doré versus refined</Link>{" "}
              page, and the pricing maths is on the{" "}
              <Link to="/gold-price" className="text-gold hover:underline">gold price</Link> page.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
