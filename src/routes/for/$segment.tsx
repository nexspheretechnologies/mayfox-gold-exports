import { createFileRoute, Link } from "@tanstack/react-router";
import { buyerSegments, findSegment } from "@/data/buyer-segments";
import { PageHero, SectionHeader, CTABand } from "@/components/site-blocks";
import { breadcrumbSchema, faqSchema, pageSeo } from "@/lib/seo";
import { img } from "@/lib/images";

export const Route = createFileRoute("/for/$segment")({
  head: ({ params }) => {
    const segment = findSegment(params.segment);
    if (!segment) {
      return pageSeo({
        title: "Buyer Guide Not Found | Mayfox Gold Kenya",
        description: "This buyer guide is not available. Browse the guides for refineries, dealers, funds and manufacturers.",
        path: "/for",
        noindex: true,
      });
    }
    const seo = pageSeo({
      title: segment.title,
      description: segment.description,
      keywords: segment.keywords,
      path: `/for/${segment.slug}`,
      ogImage: segment.image,
      ogType: "article",
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
              { name: segment.label, path: `/for/${segment.slug}` },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(segment.faqs)) },
      ],
    };
  },
  component: SegmentPage,
});

function SegmentPage() {
  const { segment: slug } = Route.useParams();
  const segment = findSegment(slug);

  if (!segment) {
    return (
      <section className="section-y">
        <div className="container-x max-w-2xl">
          <h1 className="font-display text-4xl mb-4">Guide not found</h1>
          <p className="text-muted-foreground mb-6">
            We do not have a guide at that address. The buyer guides we maintain are listed here.
          </p>
          <ul className="space-y-2">
            {buyerSegments.map((other) => (
              <li key={other.slug}>
                <Link to="/for/$segment" params={{ segment: other.slug }} className="text-gold hover:underline">
                  {other.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={`Who We Serve — ${segment.label}`}
        title={<>{segment.h1}</>}
        subtitle={segment.lede}
        image={segment.image}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="The buyer's problem" title="What this buyer class actually needs" />
            <ul className="mt-7 space-y-4">
              {segment.needs.map((need) => (
                <li key={need} className="grid grid-cols-[20px_1fr] gap-3 text-sm text-muted-foreground">
                  <span className="text-gold">—</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Our side" title="How Mayfox fits that requirement" />
            <ul className="mt-7 space-y-4">
              {segment.howWeFit.map((point) => (
                <li key={point} className="grid grid-cols-[20px_1fr] gap-3 text-sm text-muted-foreground">
                  <span className="text-gold">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x grid lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <SectionHeader eyebrow="Structure" title="Typical shape of a mandate" />
            <dl className="mt-7 divide-y divide-border/60 border-y border-border/60">
              {segment.mandate.map((row) => (
                <div key={row.label} className="grid md:grid-cols-[200px_1fr] gap-4 py-4">
                  <dt className="text-[10px] tracking-[0.24em] uppercase text-gold pt-1">{row.label}</dt>
                  <dd className="text-sm text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <SectionHeader eyebrow="Where deals stall" title="The two that end most conversations" />
              <ul className="mt-6 space-y-4">
                {segment.stalls.map((stall) => (
                  <li key={stall} className="text-sm text-muted-foreground border-l-2 border-gold/40 pl-4">
                    {stall}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card-luxe p-7">
              <div className="eyebrow mb-4">Other buyer guides</div>
              <ul className="space-y-3 text-sm">
                {buyerSegments
                  .filter((other) => other.slug !== segment.slug)
                  .map((other) => (
                    <li key={other.slug}>
                      <Link to="/for/$segment" params={{ segment: other.slug }} className="text-muted-foreground hover:text-gold">
                        {other.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="card-luxe p-7">
              <div className="eyebrow mb-3">Read next</div>
              <ul className="space-y-3 text-sm">
                <li><Link to="/buy-gold-safely" className="text-muted-foreground hover:text-gold">How to source Kenyan gold safely</Link></li>
                <li><Link to="/kenya-gold-export-license" className="text-muted-foreground hover:text-gold">The Kenya export licence chain</Link></li>
                <li><Link to="/dore-vs-refined-gold" className="text-muted-foreground hover:text-gold">Doré versus refined gold</Link></li>
                <li><Link to="/gold-price" className="text-muted-foreground hover:text-gold">Live gold price and doré calculator</Link></li>
                <li><Link to="/export-documentation" className="text-muted-foreground hover:text-gold">Export documentation set</Link></li>
              </ul>
            </div>

            <div className="card-luxe p-7">
              <div className="eyebrow mb-3">{segment.label} desk</div>
              <p className="text-sm text-muted-foreground mb-5">
                Send the specification you work to and the structure you need. A senior trader replies with an
                indicative basis and the documents we would each have to produce.
              </p>
              <Link to="/request-quote" className="btn-gold w-full">Request a quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="Questions" title={`${segment.label} FAQ`} />
          <div className="mt-7 space-y-3">
            {segment.faqs.map((faq) => (
              <details key={faq.q} className="card-luxe p-5">
                <summary className="cursor-pointer text-sm font-medium">{faq.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
