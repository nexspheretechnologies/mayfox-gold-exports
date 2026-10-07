// Server-only spot gold and USD/KES pricing with an in-memory cache, so the
// site never hammers a public feed and never shows an unexplained blank.

const GRAMS_PER_OZT = 31.1034768;
const TTL_MS = 5 * 60 * 1000;
const FEED_TIMEOUT_MS = 6000;

export type GoldQuote = {
  usdPerOzt: number;
  usdPerGram: number;
  kesPerUsd: number | null;
  changePct: number | null;
  source: string;
  quotedAt: string;
  fetchedAt: string;
  stale: boolean;
  note: string | null;
};

let cached: GoldQuote | null = null;
let inflight: Promise<GoldQuote> | null = null;

async function getJson(url: string): Promise<unknown> {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FEED_TIMEOUT_MS),
    headers: { "user-agent": "MayfoxTradeDesk/1.0 (+https://mayfox.co.ke)" },
  });
  if (!response.ok) throw new Error(`${url} responded ${response.status}`);
  return response.json();
}

type Spot = { usdPerOzt: number; changePct: number | null; source: string; quotedAt: string | null };

async function spotFromGoldApi(): Promise<Spot> {
  const payload = (await getJson("https://api.gold-api.com/price/XAU")) as {
    price?: number;
    currency?: string;
    updatedAt?: string;
  };
  const price = Number(payload.price);
  if (!Number.isFinite(price) || price < 500 || price > 200_000) throw new Error("gold-api returned no usable spot");
  const stamp = payload.updatedAt && !Number.isNaN(Date.parse(payload.updatedAt)) ? payload.updatedAt : null;
  return { usdPerOzt: price, changePct: null, source: "gold-api.com", quotedAt: stamp };
}

async function spotFromGoldPriceOrg(): Promise<Spot> {
  const payload = (await getJson("https://data-asg.goldprice.org/dbXRates/USD")) as {
    ts?: number;
    items?: Array<{ xauPrice?: number; chgXau?: number }>;
  };
  const item = payload.items?.[0];
  const price = Number(item?.xauPrice);
  if (!Number.isFinite(price) || price < 500 || price > 200_000) throw new Error("goldprice.org returned no usable spot");
  const change = Number(item?.chgXau);
  const stamp = typeof payload.ts === "number" ? new Date(payload.ts).toISOString() : null;
  return {
    usdPerOzt: price,
    changePct: Number.isFinite(change) ? (change / price) * 100 : null,
    source: "goldprice.org",
    quotedAt: stamp,
  };
}

async function fetchSpot(): Promise<Spot> {
  try {
    return await spotFromGoldApi();
  } catch (first) {
    try {
      return await spotFromGoldPriceOrg();
    } catch {
      throw first instanceof Error ? first : new Error("No gold price feed responded.");
    }
  }
}

async function fetchUsdToKes(): Promise<number | null> {
  try {
    const payload = (await getJson("https://open.er-api.com/v6/latest/USD")) as {
      rates?: Record<string, number>;
    };
    const rate = Number(payload.rates?.KES);
    return Number.isFinite(rate) && rate > 1 && rate < 500 ? rate : null;
  } catch {
    return null;
  }
}

async function refresh(): Promise<GoldQuote> {
  const now = new Date().toISOString();
  try {
    const [spot, kesPerUsd] = await Promise.all([fetchSpot(), fetchUsdToKes()]);
    cached = {
      usdPerOzt: spot.usdPerOzt,
      usdPerGram: spot.usdPerOzt / GRAMS_PER_OZT,
      kesPerUsd,
      changePct: spot.changePct,
      source: spot.source,
      quotedAt: spot.quotedAt ?? now,
      fetchedAt: now,
      stale: false,
      note: kesPerUsd ? null : "USD figures only — the currency feed did not respond, so no Kenyan shilling conversion is shown.",
    };
    return cached;
  } catch (error) {
    // Serving the last good price with a visible age beats serving nothing.
    if (cached) {
      return {
        ...cached,
        fetchedAt: now,
        stale: true,
        note: `Live feeds did not respond (${error instanceof Error ? error.message : "unknown error"}). Showing the last price received at ${new Date(cached.quotedAt).toLocaleString("en-GB", { timeZone: "Africa/Nairobi" })} EAT.`,
      };
    }
    throw error;
  }
}

export async function getGoldQuote(): Promise<GoldQuote> {
  if (cached && Date.now() - Date.parse(cached.fetchedAt) < TTL_MS) return cached;
  if (!inflight) {
    inflight = refresh().finally(() => {
      inflight = null;
    });
  }
  return inflight;
}
