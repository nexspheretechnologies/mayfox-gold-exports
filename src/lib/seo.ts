import { absoluteUrl } from "./site-url";

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

type Crumb = { name: string; path: string };

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  published?: string;
  modified?: string;
};

// Every route builds its head from this so canonical, og:url and og:image are
// always absolute — relative og:image URLs are ignored by crawlers.
export function pageSeo(seo: PageSeo) {
  const image = absoluteUrl(seo.ogImage ?? DEFAULT_OG_IMAGE);
  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      ...(seo.keywords ? [{ name: "keywords", content: seo.keywords }] : []),
      {
        name: "robots",
        content: seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: absoluteUrl(seo.path) },
      { property: "og:type", content: seo.ogType ?? "website" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: seo.title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(seo.path) }],
  };
}

export function breadcrumbSchema(trail: Crumb[]) {
  const base = absoluteUrl("/").replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? base : `${base}${crumb.path}`,
    })),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  published: string;
  modified?: string;
  authorName: string;
  authorBio: string;
  authorType?: "Person" | "Organization";
  image?: string;
}) {
  const org = `${absoluteUrl("/").replace(/\/$/, "")}/#organization`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: absoluteUrl(input.image ?? DEFAULT_OG_IMAGE),
    datePublished: input.published,
    dateModified: input.modified ?? input.published,
    inLanguage: "en-KE",
    author: {
      "@type": input.authorType ?? "Person",
      name: input.authorName,
      description: input.authorBio,
      ...(input.authorType === "Organization" ? { url: absoluteUrl("/") } : { worksFor: { "@type": "Organization", "@id": org } }),
    },
    publisher: { "@type": "Organization", "@id": org },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@type": "Organization", "@id": `${absoluteUrl("/").replace(/\/$/, "")}/#organization` },
    areaServed: "Worldwide",
    serviceType: "Gold export agency",
  };
}
