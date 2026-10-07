import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTABand, PageHero, SectionHeader } from "../../components/site-blocks";
import { img } from "../../lib/images";
import { articleSchema, breadcrumbSchema, pageSeo } from "../../lib/seo";
import { absoluteUrl } from "../../lib/site-url";
import { getArticle, relatedArticles, type ArticleBlock, type SiteArticle } from "../../data/articles";

// Category decides the article's hero and social image, so the imagery stays with
// the editorial taxonomy rather than being hand-picked per piece.
// These keys must be local asset imports: pageSeo() and articleSchema() both run the
// image through absoluteUrl(), which would mangle an already-absolute Unsplash URL.
const categoryImage: Record<string, string> = {
  "Pricing & Settlement": img.chart,
  "Assay & Quality": img.assay,
  "Export Process": img.goldIngot,
  Compliance: img.lab,
  Logistics: img.goldStack,
  "Trade Structure": img.boardroom,
};

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

// Heading text -> stable anchor id, shared by the table of contents and the headings.
function anchorId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function contents(article: SiteArticle) {
  return article.body
    .filter((block): block is Extract<ArticleBlock, { type: "h2" }> => block.type === "h2")
    .map((block) => ({ text: block.text, id: anchorId(block.text) }));
}

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const article = getArticle(params.slug ?? "");

    // Unknown slug: keep the shell renderable and let the component raise notFound().
    if (!article) {
      return {
        meta: [
          { title: "Insight Not Found — Mayfox Gold Kenya" },
          { name: "description", content: "This insight article does not exist. Browse the Mayfox gold market library instead." },
          { name: "robots", content: "noindex, follow" },
        ],
        links: [{ rel: "canonical", href: absoluteUrl("/market-insights") }],
      };
    }

    const path = `/insights/${article.slug}`;
    const image = categoryImage[article.category] ?? img.chart;
    const seo = pageSeo({
      title: `${article.title} — Mayfox Gold Kenya`,
      description: article.dek,
      path,
      keywords: `${article.category.toLowerCase()} gold, kenya gold export, dore gold, gold assay, lbma, mayfox gold`,
      ogImage: image,
      ogType: "article",
      published: article.published,
      modified: article.updated,
    });

    return {
      ...seo,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleSchema({
              headline: article.title,
              description: article.dek,
              path,
              published: article.published,
              modified: article.updated,
              authorName: article.author.name,
              authorBio: article.author.bio,
              authorType: article.author.type,
              image,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Market Insights", path: "/market-insights" },
              { name: article.title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticle(slug ?? "");
  if (!article) {
    notFound();
    return null;
  }

  const toc = contents(article);
  const related = relatedArticles(article.slug, 3);
  const heroImage = categoryImage[article.category] ?? img.chart;
  const changed = article.updated !== article.published;

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={<>{article.title}</>}
        subtitle={article.dek}
        image={heroImage}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[minmax(0,1fr)_260px] gap-14 items-start">
          <article className="max-w-3xl">
            {/* Visible byline + dates: the machine-readable copy in JSON-LD alone is not enough. */}
            <div className="border-y border-border py-5 mb-12 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1">Written by</div>
                <div className="font-display text-lg">{article.author.name}</div>
                <div className="text-xs text-muted-foreground">Mayfox Gold and Precious Metals Kenya — trade desk</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1">Published</div>
                <time dateTime={article.published}>{formatDate(article.published)}</time>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1">
                  {changed ? "Last updated" : "Revision"}
                </div>
                <time dateTime={article.updated}>{formatDate(article.updated)}</time>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1">Reading time</div>
                <div>{article.readMinutes} minutes</div>
              </div>
            </div>

            {toc.length > 0 && (
              <nav aria-label="Table of contents" className="card-luxe p-6 mb-12">
                <div className="eyebrow mb-4">In this article</div>
                <ol className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {article.body.map((block, i) => (
              <Block key={`${block.type}-${i}`} block={block} />
            ))}

            <div className="mt-14 border border-gold/25 p-6 text-xs text-muted-foreground leading-relaxed">
              <div className="eyebrow mb-3">Important note</div>
              <p>
                Commentary published by {article.author.name} on this website is general market and process information about
                gold sourcing, assay, export documentation and settlement. It is not investment, legal, tax or financial advice,
                it is not a price quotation or an offer to sell, and it must not be relied on as such. Regulatory requirements,
                documentation, benchmarks and institutional procedures change: confirm current requirements directly with the
                relevant authority, laboratory, carrier and bank, and take your own professional advice before acting.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/request-quote" className="btn-gold btn-gold-hover">Request a Quote</Link>
              <Link to="/market-insights" className="btn-outline-gold">All Market Insights</Link>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 space-y-8">
            <div className="border-l border-gold/40 pl-5">
              <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">Category</div>
              <div className="text-sm">{article.category}</div>
              <div className="mt-4 text-[10px] tracking-[0.24em] uppercase text-gold mb-2">Author</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{article.author.bio}</p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">Next reads</div>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/insights/$slug"
                    params={{ slug: r.slug }}
                    className="block border border-border p-4 hover:border-gold transition-colors"
                  >
                    <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">{r.category}</div>
                    <div className="font-display text-base leading-snug">{r.title}</div>
                    <div className="text-xs text-muted-foreground mt-2">{r.readMinutes} min read</div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader
            eyebrow="Keep Reading"
            title={<>More from the <span className="text-gradient-gold">Mayfox</span> trade desk.</>}
            description="Buyer-relevant analysis of doré pricing, assay, Kenyan export documentation, due diligence and settlement."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {related.map((r) => (
              <Link key={r.slug} to="/insights/$slug" params={{ slug: r.slug }} className="card-luxe p-6 block group">
                <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">{r.category}</div>
                <h3 className="font-display text-xl leading-snug mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.dek}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {formatDate(r.published)} · {r.readMinutes} min read
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

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={anchorId(block.text)} className="font-display text-3xl lg:text-4xl mt-12 mb-4 scroll-mt-32">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="mt-5 leading-relaxed text-muted-foreground">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="pl-6 relative leading-relaxed text-muted-foreground">
              <span className="absolute left-0 top-[0.6em] w-2 h-2 bg-gold/70" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 mb-8 border-l-2 border-gold pl-6 py-1">
          <p className="font-display text-xl lg:text-2xl leading-snug text-gold">{block.text}</p>
        </blockquote>
      );
    case "table":
      return (
        <div className="mt-8 mb-8 overflow-x-auto">
          <table className="w-full text-sm border border-border min-w-[640px]">
            <thead>
              <tr className="bg-charcoal">
                {block.head.map((cell) => (
                  <th key={cell} className="text-left font-display text-base px-4 py-3 border-b border-border">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-b border-border/60 last:border-0">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 align-top text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
