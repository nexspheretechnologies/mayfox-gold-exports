import { createServerFn } from "@tanstack/react-start";

export type GoldQuoteView = {
  usdPerOzt: number;
  usdPerGram: number;
  kesPerUsd: number | null;
  changePct: number | null;
  source: string;
  quotedAt: string;
  stale: boolean;
  note: string | null;
};

export type PriceResult = { ok: true; quote: GoldQuoteView } | { ok: false; error: string };

// Price pages must render numbers even when a feed is down, so the failure is
// returned as data instead of thrown — the UI shows it as a red banner.
export const getGoldPrices = createServerFn({ method: "GET" }).handler(
  async (): Promise<PriceResult> => {
    try {
      const { getGoldQuote } = await import("../server/gold-price");
      const quote = await getGoldQuote();
      return {
        ok: true,
        quote: {
          usdPerOzt: quote.usdPerOzt,
          usdPerGram: quote.usdPerGram,
          kesPerUsd: quote.kesPerUsd,
          changePct: quote.changePct,
          source: quote.source,
          quotedAt: quote.quotedAt,
          stale: quote.stale,
          note: quote.note,
        },
      };
    } catch (error) {
      return {
        ok: false,
        error: error instanceof Error ? error.message : "The price feeds did not respond.",
      };
    }
  },
);

export const GRAMS_PER_OZT = 31.1034768;

export function formatUsd(value: number, digits = 2) {
  return `US$ ${value.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
}

export function formatKes(value: number) {
  return `KSh ${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function formatMoney(value: number, currency: "USD" | "KES") {
  return currency === "USD" ? formatUsd(value, 0) : formatKes(value);
}

// Payable percentage bands used by the trade desk for doré: a discount to the
// contained value, not a markup on it.
export const PURITY_BANDS = [
  { label: "85% doré bar", pct: 85 },
  { label: "90% doré bar", pct: 90 },
  { label: "95% refined", pct: 95 },
  { label: "99.5% fine gold", pct: 99.5 },
  { label: "99.99% investment", pct: 99.99 },
] as const;
