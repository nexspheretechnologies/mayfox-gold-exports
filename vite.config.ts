// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import type { Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

function lovableAssetUrlRewriter(): Plugin {
  const LOVABLE_CDN = "https://eee21e38-ed83-4489-aeaf-00127ef00e59.lovableproject.com";

  return {
    name: "lovable-asset-url-rewriter",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".asset.json")) return;
      const data = JSON.parse(code);
      if (data.url?.startsWith("/__l5e/")) {
        data.url = `${LOVABLE_CDN}${data.url}`;
        return JSON.stringify(data);
      }
    },
  };
}

export default defineConfig({
  nitro: {
    preset: "node-server",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [lovableAssetUrlRewriter()],
});
