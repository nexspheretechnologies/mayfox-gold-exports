import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "../lib/site-url";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = siteUrl();
        const body = [
          `User-agent: *`,
          `Allow: /`,
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
