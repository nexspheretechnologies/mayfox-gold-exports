import { defineConfig, loadEnv, type UserConfig } from "vite";

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const { tanstackStart } = await import("@tanstack/react-start/plugin/vite");
  const { default: react } = await import("@vitejs/plugin-react");
  const { default: tailwindcss } = await import("@tailwindcss/vite");
  const { default: tsConfigPaths } = await import("vite-tsconfig-paths");

  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
  ];

  // Nitro only runs at build time; `vite dev` must not pull the deploy plugin in.
  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    // node-server writes .output/ for Railway and local `npm start`. Vercel cannot
    // run a long-lived Node entry point: it needs the Build Output API tree in
    // .vercel/output, which is what the "vercel" preset emits. Vercel sets VERCEL=1
    // during the build, and NITRO_PRESET lets any target be forced explicitly.
    const preset = process.env.NITRO_PRESET || (process.env.VERCEL ? "vercel" : "node-server");
    plugins.push(nitro({ preset }));
  }

  plugins.push(react());

  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), "VITE_"))) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define: envDefine,
    ...(command === "build" && mode === "development"
      ? {
          // Client-scoped: a global NODE_ENV flip emits jsxDEV, which the
          // react-server SSR runtime cannot resolve.
          environments: {
            client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } },
          },
        }
      : {}),
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: {
      host: "::",
      port: 8080,
      watch: { awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 } },
    },
    plugins,
  };
});
