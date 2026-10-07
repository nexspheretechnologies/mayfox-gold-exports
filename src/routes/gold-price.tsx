import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { img } from "@/lib/images";
import { PageHero, SectionHeader } from "@/components/site-blocks";
import { GRAMS_PER_OZT, PURITY_BANDS, formatKes, formatUsd, getGoldPrices, type GoldQuoteView } from "@/lib/gold-price";
import { useLeadSubmit } from "@/lib/use-lead-submit";
import { breadcrumbSchema, faqSchema, pageSeo } from "@/lib/seo";
import { honeypotWrapperStyle } from "@/lib/spam-protection";

export const Route = createFileRoute("/gold-price")({
  loader: async () => ({ prices: await getGoldPrices() }),
  head: () => {
    const seo = pageSeo({
      title: "Gold Price Today in USD & Kenyan Shillings | Mayfox Gold",
      description:
        "Live spot gold in US dollars per troy ounce and per gram, converted to Kenyan shillings, with a doré bar and nugget valuation calculator by weight and purity for institutional buyers sourcing from East Africa.",
      path: "/gold-price",
      ogImage: img.goldStack,
      keywords:
        "gold price today, gold price per gram KES, doré bar value calculator, Kenya gold price, LBMA reference price, gold price per kilogram USD",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Gold Price", path: "/gold-price" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(GOLD_FAQS)) },
      ],
    };
  },
  component: GoldPrice,
});

const GOLD_FAQS = [
  {
    q: "How is the price of gold doré calculated?",
    a: "Doré is priced on contained gold, not on the weight of the bar. Weigh the consignment, multiply by the assay fineness, then value that contained gold at the agreed reference price and deduct refining charges and treatment loss. The payable percentage is therefore always below 100 of spot.",
  },
  {
    q: "Which reference price do you use?",
    a: "International gold trades against the LBMA Gold Price as its daily benchmark, with spot quoted continuously in US dollars per troy ounce. Our page shows a public spot feed as an indicative reference; a binding quote is struck against the reference price agreed in the Sales & Purchase Agreement.",
  },
  {
    q: "Why is gold quoted per troy ounce and doré sold per kilogram?",
    a: "Spot markets quote in troy ounces (31.1034768 grams), while physical doré changes hands by the kilogram. Our table converts both, so a 25 kg bar can be valued without hand arithmetic.",
  },
  {
    q: "How volatile is the price between quote and settlement?",
    a: "Gold moves continuously while markets are open. Indicative quotes we issue are time-limited, and contracts define the fixing mechanism — usually an LBMA average over a pricing window — so neither side is exposed to an unpriced gap.",
  },
  {
    q: "Do you buy gold from artisanal miners?",
    a: "We work with licensed cooperatives and buying houses as an export agent, and we do not contract material that cannot be traced to a licensed source. Counterparty checks come before pricing on every mandate.",
  },
];

function GoldPrice() {
  const { prices } = Route.useLoaderData();
  const [quote, setQuote] = useState<GoldQuoteView | null>(prices.ok ? prices.quote : null);
  const [error, setError] = useState<string | null>(prices.ok ? null : prices.error);
  const [refreshing, setRefreshing] = useState(false);

  async function refresh() {
    setRefreshing(true);
    const next = await getGoldPrices();
    if (next.ok) {
      setQuote(next.quote);
      setError(null);
    } else {
      setError(next.error);
    }
    setRefreshing(false);
  }

  return (
    <>
      <PageHero
        eyebrow="Live Reference"
        title={<>Gold price today, in <span className="text-gradient-gold">dollars and shillings</span>.</>}
        subtitle="Spot gold per troy ounce, per gram and per kilogram, converted to Kenyan shillings, with the contained-value maths our traders use when pricing doré bars and nuggets."
        image={img.goldStack}
      />

      <section className="section-y !pt-12">
        <div className="container-x">
          {error && (
            <p role="alert" className="text-xs text-destructive border border-destructive/40 py-3 px-4 mb-8">
              Price feeds are unreachable right now: {error} The desk still quotes daily — call +254 754 979 755 or use the request form.
            </p>
          )}

          {quote && (
            <>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <PriceCard label="US$ / troy ounce" value={formatUsd(quote.usdPerOzt)} sub={changeLabel(quote)} />
                <PriceCard label="US$ / gram" value={formatUsd(quote.usdPerGram, 3)} sub={`1 kg = ${formatUsd(quote.usdPerGram * 1000, 0)}`} />
                <PriceCard
                  label="KSh / gram"
                  value={quote.kesPerUsd ? formatKes(quote.usdPerGram * quote.kesPerUsd) : "Unavailable"}
                  sub={quote.kesPerUsd ? `USD/KSh ${quote.kesPerUsd.toFixed(2)}` : "Currency feed down"}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground mb-10">
                <span>
                  Indicative spot from {quote.source}, quoted{" "}
                  {new Date(quote.quotedAt).toLocaleString("en-GB", { timeZone: "Africa/Nairobi" })} EAT.
                  {quote.stale && <span className="text-destructive"> Last good price — live feeds did not respond.</span>}
                  {" "}Not a tradable quote.
                </span>
                <button type="button" onClick={refresh} disabled={refreshing} className="btn-outline-gold !py-2 !px-4 disabled:opacity-60">
                  {refreshing ? "Refreshing…" : "Refresh"}
                </button>
              </div>

              {quote.note && (
                <p className="text-xs text-muted-foreground border border-border/60 py-3 px-4 mb-10">{quote.note}</p>
              )}

              <ContainedTable quote={quote} />
              <ValuationCalculator quote={quote} />
            </>
          )}
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x max-w-3xl">
          <SectionHeader
            eyebrow="How doré is priced"
            title="Contained gold, less refining — never spot for gross weight"
          />
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              A doré bar is an alloy: gold plus silver and base-metal impurities. Pricing starts from the
              assay, which gives fineness as a percentage, and applies that percentage to the net weight to
              find the contained ounces. Only the contained gold is valued.
            </p>
            <p>
              From there the refining and treatment deduction is taken, which covers the refinery's cost of
              bringing the bar to 999 fine and the margin agreed with the seller. Because of it, the payable
              price is always below spot on gross weight — any offer that pays spot or better on unassayed
              doré is a warning sign, and we cover it on our{" "}
              <Link to="/anti-fraud" className="text-gold hover:underline">anti-fraud notice</Link>.
            </p>
            <p>
              Silver content in East African doré is often material. It is assayed separately and paid on its
              own reference price, so a two-metal assay is normal on first consignment.
            </p>
            <p>
              The settlement currency, the fixing mechanism and who pays assay, freight and insurance are
              written into the Sales & Purchase Agreement. Our{" "}
              <Link to="/buy-gold-safely" className="text-gold hover:underline">buyer's guide to sourcing safely</Link>{" "}
              and the{" "}
              <Link to="/kenya-gold-export-license" className="text-gold hover:underline">Kenya export licence guide</Link>{" "}
              explain what to verify before signing.
            </p>
          </div>

          <div className="mt-10 card-luxe p-7">
            <div className="eyebrow mb-3">Frequently asked</div>
            <dl className="space-y-5">
              {GOLD_FAQS.map((item) => (
                <div key={item.q}>
                  <dt className="text-sm text-foreground font-medium mb-1">{item.q}</dt>
                  <dd className="text-sm text-muted-foreground">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/request-quote" className="btn-gold">Request a firm quote</Link>
            <Link to="/dore-vs-refined-gold" className="btn-outline-gold">Doré vs refined gold</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function changeLabel(quote: GoldQuoteView) {
  if (quote.changePct == null) return "Continuous spot";
  const sign = quote.changePct >= 0 ? "+" : "";
  return `${sign}${quote.changePct.toFixed(2)}% on the day`;
}

function PriceCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="card-luxe p-7">
      <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">{label}</div>
      <div className="font-display text-3xl md:text-4xl mb-2 tabular-nums">{value}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function ContainedTable({ quote }: { quote: GoldQuoteView }) {
  const rows = [1, 5, 10, 25, 50, 100];
  return (
    <div className="card-luxe p-7 mb-12 overflow-x-auto">
      <div className="eyebrow mb-4">Gross value at current spot, by weight and fineness</div>
      <table className="w-full text-sm tabular-nums">
        <thead>
          <tr className="text-[10px] tracking-[0.2em] uppercase text-gold border-b border-border/60">
            <th className="text-left py-2 pr-4 font-normal">Net weight</th>
            {PURITY_BANDS.map((band) => (
              <th key={band.label} className="text-right py-2 px-3 font-normal whitespace-nowrap">{band.pct}%</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((kg) => (
            <tr key={kg} className="border-b border-border/30 last:border-0">
              <td className="py-2.5 pr-4 text-muted-foreground whitespace-nowrap">{kg} kg</td>
              {PURITY_BANDS.map((band) => (
                <td key={band.label} className="py-2.5 px-3 text-right">
                  {formatUsd(quote.usdPerGram * kg * 1000 * (band.pct / 100), 0)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground mt-4">
        Contained gold valued at spot, before refining and treatment deductions. Fineness is established by
        assay, not by appearance. One troy ounce is {GRAMS_PER_OZT} g.
      </p>
    </div>
  );
}

function ValuationCalculator({ quote }: { quote: GoldQuoteView }) {
  const [quantityKg, setQuantityKg] = useState("25");
  const [purity, setPurity] = useState("90");
  const [deduction, setDeduction] = useState("");
  const { state, submit } = useLeadSubmit("calculator");

  const computed = useMemo(() => {
    const kg = Number(quantityKg);
    const pct = Number(purity);
    const deduct = Number(deduction || "0");
    if (!Number.isFinite(kg) || kg <= 0 || kg > 100_000 || !Number.isFinite(pct) || pct <= 0 || pct > 100) return null;
    if (!Number.isFinite(deduct) || deduct < 0 || deduct > 30) return null;
    const contained = quote.usdPerGram * kg * 1000 * (pct / 100);
    const payable = contained * (1 - deduct / 100);
    return { kg, pct, deduct, contained, payable };
  }, [quantityKg, purity, deduction, quote.usdPerGram]);

  return (
    <div className="card-luxe p-8 lg:p-10 mb-12">
      <div className="eyebrow mb-3">Doré valuation calculator</div>
      <h2 className="font-display text-2xl mb-2">What is my consignment worth?</h2>
      <p className="text-sm text-muted-foreground mb-7 max-w-xl">
        Enter net weight and assayed fineness. The refining and treatment field is your own assumption —
        a real number is quoted per consignment after assay, which is why it starts at zero.
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mb-7">
        <Field label="Net weight (kg)" value={quantityKg} onChange={setQuantityKg} type="number" />
        <div>
          <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Assayed fineness</label>
          <select
            value={purity}
            onChange={(e) => setPurity(e.target.value)}
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
          >
            {PURITY_BANDS.map((band) => (
              <option key={band.pct} value={String(band.pct)}>{band.label}</option>
            ))}
          </select>
        </div>
        <Field label="Less refining & treatment (%)" value={deduction} onChange={setDeduction} type="number" placeholder="0" />
      </div>

      {computed ? (
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <Outcome
            label={`Contained gold at spot (${computed.pct}% of ${computed.kg} kg)`}
            value={formatUsd(computed.contained, 0)}
            sub={quote.kesPerUsd ? formatKes(computed.contained * quote.kesPerUsd) : undefined}
          />
          <Outcome
            label={`Indicative payable${computed.deduct > 0 ? ` after ${computed.deduct}% deduction` : " before deductions"}`}
            value={formatUsd(computed.payable, 0)}
            sub={quote.kesPerUsd ? formatKes(computed.payable * quote.kesPerUsd) : undefined}
          />
        </div>
      ) : (
        <p className="text-xs text-muted-foreground mb-8">
          Enter a weight between 0 and 100,000 kg, a fineness up to 100%, and a deduction under 30%.
        </p>
      )}

      {state.status === "sent" ? (
        <div className="text-center border border-gold/40 py-8 px-6">
          <div className="eyebrow justify-center mb-3">Sent to the trade desk</div>
          <p className="text-sm text-muted-foreground">
            Your reference is <span className="text-gold font-medium">{state.result.reference}</span>. A senior
            trader will confirm assay assumptions and issue a firm, time-limited quote.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!computed) return;
            void submit(e.currentTarget);
          }}
          className="space-y-5"
        >
          <div style={honeypotWrapperStyle} aria-hidden="true">
            <label>
              Website (leave blank)
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone / WhatsApp" name="phone" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Company" name="company" />
            <Field label="Country" name="country" required />
          </div>

          {/* The working figures travel with the lead so the trader sees the buyer's assumption. */}
          <input type="hidden" readOnly name="quantityKg" value={computed?.kg ?? ""} />
          <input type="hidden" readOnly name="indicativeUsd" value={computed ? Math.round(computed.payable) : ""} />
          <input type="hidden" readOnly name="purity" value={PURITY_BANDS.find((b) => String(b.pct) === purity)?.label ?? `${purity}%`} />
          <input type="hidden" readOnly name="product" value="Gold Dore Bars (85–95%)" />

          {state.status === "error" && (
            <p role="alert" className="text-xs text-destructive border border-destructive/40 py-2 px-3">{state.message}</p>
          )}

          <button type="submit" disabled={!computed || state.status === "pending"} className="btn-gold w-full disabled:opacity-60">
            {state.status === "pending" ? "Sending…" : "Send these figures to a trader"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  value?: string;
  onChange?: (v: string) => void;
  name?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">{label}{required && " *"}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
      />
    </div>
  );
}

function Outcome({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border border-gold/30 px-5 py-4">
      <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2">{label}</div>
      <div className="font-display text-xl tabular-nums">{value}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1 tabular-nums">{sub}</div>}
    </div>
  );
}
