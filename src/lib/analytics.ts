declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID = (import.meta.env.VITE_GA_ID as string | undefined) ?? "";

export const analyticsEnabled = GA_ID.length > 0;

export type EventProps = Record<string, string | number | boolean | undefined>;

export function track(event: string, props: EventProps = {}) {
  if (typeof window === "undefined" || !GA_ID) return;
  window.gtag?.("event", event, props);
}

export function trackOutboundClick(destination: string, context: string) {
  track("outbound_click", { destination, context });
}

export function reportException(error: unknown, context: EventProps = {}) {
  if (typeof window === "undefined" || !GA_ID) return;
  window.gtag?.("event", "exception", {
    description: error instanceof Error ? error.message : String(error),
    fatal: false,
    route: window.location.pathname,
    ...context,
  });
}

export const analyticsHeadScripts = GA_ID
  ? [
      {
        children: [
          `window.dataLayer=window.dataLayer||[];`,
          `function gtag(){dataLayer.push(arguments);}window.gtag=gtag;`,
          `gtag('js',new Date());gtag('config',${JSON.stringify(GA_ID)},{anonymize_ip:true});`,
        ].join(""),
      },
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
    ]
  : [];
