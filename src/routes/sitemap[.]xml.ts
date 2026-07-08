import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "../lib/site-url";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/products", changefreq: "weekly", priority: "0.95" },
  { path: "/services", changefreq: "monthly", priority: "0.85" },
  { path: "/export-documentation", changefreq: "monthly", priority: "0.8" },
  { path: "/global-delivery", changefreq: "monthly", priority: "0.8" },
  { path: "/industries", changefreq: "monthly", priority: "0.7" },
  { path: "/compliance", changefreq: "monthly", priority: "0.8" },
  { path: "/market-insights", changefreq: "weekly", priority: "0.75" },
  { path: "/gold-in-africa", changefreq: "weekly", priority: "0.95" },
  { path: "/gold-in-kenya", changefreq: "weekly", priority: "0.95" },
  { path: "/gold-in-tanzania", changefreq: "weekly", priority: "0.9" },
  { path: "/gold-in-uganda", changefreq: "weekly", priority: "0.9" },
  { path: "/gold-in-congo", changefreq: "weekly", priority: "0.9" },
  { path: "/gallery", changefreq: "monthly", priority: "0.6" },
  { path: "/faqs", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/request-quote", changefreq: "monthly", priority: "0.95" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = siteUrl();
        const today = new Date().toISOString().split("T")[0];
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${baseUrl}${e.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
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
