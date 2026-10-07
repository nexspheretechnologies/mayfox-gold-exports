import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { searchSite, type SearchHit } from "../lib/site-search";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { track } from "../lib/analytics";

type SearchValidation = { q?: string };

export const Route = createFileRoute("/search")({
  // The term lives in the URL so results can be shared and re-run from a bookmark.
  validateSearch: (search: Record<string, unknown>): SearchValidation => {
    const q = typeof search.q === "string" ? search.q.trim().slice(0, 120) : "";
    return q ? { q } : {};
  },
  head: () => {
    const seo = pageSeo({
      title: "Search — Mayfox Gold Kenya",
      description:
        "Search Mayfox's gold export site: doré bars and nuggets, buyer guides, export documentation, compliance, live gold prices and destination markets.",
      path: "/search",
      // A search results page has no indexable content of its own.
      noindex: true,
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
              { name: "Search", path: "/search" },
            ]),
          ),
        },
      ],
    };
  },
  component: SiteSearch,
});

const QUICK_LINKS = [
  "doré bars",
  "gold price kenya",
  "export licence",
  "assay",
  "dubai",
  "switzerland",
  "refineries",
  "minimum order",
];

const KIND_ORDER = ["Page", "Buyer type", "Market", "Guide", "Article"] as const;

function SiteSearch() {
  const { q = "" } = Route.useSearch();
  const navigate = useNavigate();
  const [term, setTerm] = useState(q);

  // Keep the box in step when the URL changes from a link or the back button.
  const [lastQ, setLastQ] = useState(q);
  if (lastQ !== q) {
    setLastQ(q);
    setTerm(q);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = term.trim();
    track("site_search", { query: next });
    void navigate({ to: "/search", search: { q: next } });
  }

  const hits = q.length > 0 ? searchSite(q) : [];

  return (
    <section className="section-y">
      <div className="container-x max-w-3xl">
        <div className="eyebrow mb-4">Site Search</div>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Find <span className="text-gradient-gold">what you need</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Product specifications, buyer guides, export documentation, compliance, live pricing and
          every destination market we ship to.
        </p>

        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 mb-8" role="search">
          <input
            type="search"
            name="q"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="e.g. doré bar weights, export licence, Dubai"
            aria-label="Search the site"
            autoComplete="off"
            className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
          />
          <button type="submit" className="btn-gold sm:w-auto">
            Search
          </button>
        </form>

        {q.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">Common searches</div>
            <div className="flex flex-wrap gap-2">
              {QUICK_LINKS.map((suggestion) => (
                <Link
                  key={suggestion}
                  to="/search"
                  search={{ q: suggestion }}
                  className="border border-border/70 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors"
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </div>
        ) : hits.length === 0 ? (
          <div className="card-luxe p-8">
            <p className="text-sm mb-4">
              Nothing matched <span className="text-gold">“{q}”</span>. The index covers pages rather
              than individual paragraphs, so try a broader term — “doré”, “assay”, “export”, a country,
              or a buyer type.
            </p>
            <p className="text-sm text-muted-foreground">
              Or ask the trade desk directly:{" "}
              <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">sales@mayfox.co.ke</a>{" "}
              or{" "}
              <a href="tel:+254754979755" className="text-gold hover:underline">+254 754 979 755</a>,
              Monday to Saturday, 08:00–20:00 EAT.
            </p>
          </div>
        ) : (
          <Results hits={hits} query={q} />
        )}

        <div className="mt-10 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          Looking for a specific consignment?{" "}
          <Link to="/request-quote" className="text-gold hover:underline">Request a quote</Link> and the
          desk will confirm availability, fineness and a delivered price.
        </div>
      </div>
    </section>
  );
}

function Results({ hits, query }: { hits: SearchHit[]; query: string }) {
  const groups = KIND_ORDER.map((kind) => ({
    kind,
    items: hits.filter((hit) => hit.kind === kind),
  })).filter((group) => group.items.length > 0);

  return (
    <div>
      <div className="text-xs text-muted-foreground mb-5">
        {hits.length} result{hits.length === 1 ? "" : "s"} for “{query}”
      </div>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.kind}>
            <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">{group.kind}s</div>
            <ul className="space-y-3">
              {group.items.map((hit) => (
                <li key={hit.path} className="card-luxe p-5">
                  <Link to={hit.path} className="block font-display text-lg hover:text-gold transition-colors">
                    {hit.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1.5">{hit.summary}</p>
                  <div className="text-[11px] text-muted-foreground/70 mt-2">{hit.path}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
