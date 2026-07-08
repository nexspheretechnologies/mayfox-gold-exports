import { createFileRoute } from "@tanstack/react-router";
import { MarketPage } from "../components/market-page";
import { marketPages, faqJsonLd } from "../data/market-pages";
import { absoluteUrl } from "../lib/site-url";
import { img } from "../lib/images";

const data = marketPages.find((m) => m.slug === "saudi-arabia")!;

export const Route = createFileRoute("/saudi-arabia")({
  head: () => ({
    meta: [
      { title: data.pageTitle },
      { name: "description", content: data.description },
      { name: "keywords", content: data.keywords },
      { property: "og:title", content: data.ogTitle },
      { property: "og:description", content: data.ogDescription },
      { property: "og:url", content: absoluteUrl(`/${data.slug}`) },
      { property: "og:image", content: img.goldBullion },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(`/${data.slug}`) }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(data.faqs)) }],
  }),
  component: () => <MarketPage {...data} />,
});
