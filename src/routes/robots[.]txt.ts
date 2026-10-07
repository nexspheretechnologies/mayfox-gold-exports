import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "../lib/site-url";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = siteUrl();
        const body = [
          `# Mayfox Gold and Precious Metals Kenya`,
          `# Licensed export agent for gold doré bars and nuggets from East and Central Africa.`,
          ``,
          `User-agent: *`,
          `Allow: /`,
          `Disallow: /admin/`,
          `Disallow: /search`,
          ``,
          `Sitemap: ${baseUrl}/sitemap.xml`,
        ].join("\n");
        return new Response(body, {
          headers: { "Content-Type": "text/plain", "Cache-Control": "public, max-age=86400" },
        });
      },
    },
  },
});
