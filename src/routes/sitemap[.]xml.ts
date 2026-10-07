import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "../lib/site-url";
import { articles } from "../data/articles";
import { buyerSegments } from "../data/buyer-segments";

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// lastmod is the date the page's substance last changed, not today's date.
// Search engines discard sitemaps whose lastmod is always the crawl date, so
// bump a page's date only when its content actually moves.
const entries: SitemapEntry[] = [
  { path: "/", lastmod: "2026-10-07", changefreq: "daily", priority: "1.0" },
  { path: "/gold-price", lastmod: "2026-10-07", changefreq: "hourly", priority: "0.95" },
  { path: "/products", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.95" },
  { path: "/gold-specifications", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.9" },
  { path: "/request-quote", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.95" },
  { path: "/book-a-call", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.8" },
  { path: "/upload-documents", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.9" },
  { path: "/gold-in-africa", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.95" },
  { path: "/gold-in-kenya", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.95" },
  { path: "/gold-in-tanzania", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.9" },
  { path: "/gold-in-uganda", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.9" },
  { path: "/gold-in-congo", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.9" },
  { path: "/buy-gold-safely", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.9" },
  { path: "/kenya-gold-export-license", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.9" },
  { path: "/dore-vs-refined-gold", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.85" },
  { path: "/anti-fraud", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.85" },
  { path: "/services", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.85" },
  { path: "/about", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.8" },
  { path: "/compliance", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.8" },
  { path: "/export-documentation", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.8" },
  { path: "/global-delivery", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.8" },
  { path: "/market-insights", lastmod: "2026-10-07", changefreq: "weekly", priority: "0.8" },
  { path: "/faqs", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.75" },
  { path: "/industries", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.7" },
  { path: "/for", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.8" },
  ...buyerSegments.map((segment) => ({
    path: `/for/${segment.slug}`,
    lastmod: "2026-10-07",
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
  { path: "/gallery", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.6" },
  { path: "/track-inquiry", lastmod: "2026-10-07", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy", lastmod: "2026-10-07", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", lastmod: "2026-10-07", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", lastmod: "2026-10-07", changefreq: "yearly", priority: "0.3" },
];

// Deepened on 2026-10-07 (buyer climate, corridor and settlement notes added to
// every market); these pages were first written 2026-07-08.
const buyerMarkets = [
  "/usa",
  "/united-kingdom",
  "/uae",
  "/dubai",
  "/switzerland",
  "/singapore",
  "/hong-kong",
  "/india",
  "/china",
  "/saudi-arabia",
  "/qatar",
  "/oman",
  "/kuwait",
  "/turkey",
  "/germany",
  "/france",
  "/canada",
  "/australia",
];

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = siteUrl();
        const all: SitemapEntry[] = [
          ...entries,
          ...buyerMarkets.map((path) => ({ path, lastmod: "2026-10-07", changefreq: "weekly" as const, priority: "0.85" })),
          // Insight articles carry their own review dates, so the sitemap cannot drift from them.
          ...articles.map((article) => ({
            path: `/insights/${article.slug}`,
            lastmod: article.updated,
            changefreq: "monthly" as const,
            priority: "0.75",
          })),
        ];

        const urls = all.map((entry) =>
          [
            `  <url>`,
            `    <loc>${escapeXml(`${baseUrl}${entry.path}`)}</loc>`,
            `    <lastmod>${entry.lastmod}</lastmod>`,
            entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
            entry.priority ? `    <priority>${entry.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n")
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
