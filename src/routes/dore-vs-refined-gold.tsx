import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, SectionHeader, Stat } from "../components/site-blocks";
import { breadcrumbSchema, faqSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";
import { Link } from "@tanstack/react-router";

const faqs = [
  {
    q: "What is gold doré?",
    a: "Doré is semi-refined gold. Ore or placer material has been concentrated and then smelted and cast into bars, but it has not been electrolytically or chemically refined to a fine-gold standard. The result is an alloy of gold with silver and residual base metals — typically iron, copper, zinc or lead — usually between about 85% and 95% gold. 'Doré' is French for gilded, and in the trade it names exactly that bar: valuable, but not yet pure.",
  },
  {
    q: "What fineness is Kenyan doré?",
    a: "The material we represent falls in roughly the 85–95% band, and the width of that band is not carelessness — it is geology and processing. Goldfields in Migori, Kakamega, West Pokot and Turkana produce mineralisation with different silver and base-metal content, and consolidation from many small licensed cooperatives and artisanal parcels averages those out rather than eliminating them. The only fineness that matters commercially is the one on a witnessed drill or cut fire assay, bar by bar.",
  },
  {
    q: "How is doré priced against the spot price of gold?",
    a: "On contained fine gold, not on gross weight. Take the assayed net weight, multiply by the assayed fineness, and you have the fine ounces the refiner will actually recover. That quantity is valued against the benchmark you have agreed — commonly an LBMA reference fix — and then reduced by the treatment and refining charges and adjustments your refining arrangement carries. Indicative discounts and charge structures are specific to quantity, fineness, by-product content and destination, so they are quoted by the trade desk rather than published on a website.",
  },
  {
    q: "Can a jeweller or dealer buy doré directly?",
    a: "Only with a route to refining. A refinery buys doré because it has the plant, the sampling protocol and the accounting discipline to convert it. A jeweller, a bullion dealer without refining arrangements, or an investor buying for a vault generally needs refined product — 995 or 999.9 — because they cannot verify, assay, alloy or resell an unrefined bar on their own terms. Refined bars are available to Mayfox buyers through partner refineries.",
  },
  {
    q: "Is doré the same as gold nuggets or alluvial gold?",
    a: "No. Nuggets and alluvial or placer pieces are natural material: gold that occurred in that form and was recovered by panning, sluicing or hand-working, then sold as weighed pieces with an assay. Doré is manufactured — melted and cast into a bar by the sourcing party. Nuggets vary piece by piece rather than bar by bar, are usually sold in much smaller parcels, and are of interest to jewellers, collectors and small refiners rather than to institutional accounts buying to a fine-weight specification.",
  },
  {
    q: "Which assay settles a doré invoice from Kenya?",
    a: "Normally two assays, and you should know in advance which one is final. The origin assay — an independent testing house in Nairobi, on a witnessed sample — establishes provisional weight and fineness for the export documents and any first payment. The receiving refinery's assay establishes the payable fine gold, with an arbitration assay contracted if the two results differ beyond an agreed tolerance. Settlement on the origin assay alone transfers all sampling risk to the buyer.",
  },
  {
    q: "Why do refiners take doré when bullion banks want bars?",
    a: "Because a refiner monetises the gap between doré and fine gold. The alloy is their raw material and their margin: they know how to sample it, how much silver and gold they will recover, and how to price the residual. A bullion bank, a vault-backed investor or a good-delivery programme has no plant to do that, so it takes refined metal of declared fineness. The same bar is a commodity input to one and an unacceptable delivery from the other.",
  },
];

const finenessFactors: { title: string; body: string }[] = [
  {
    title: "Geology of the deposit",
    body: "Kenyan mineralisation ranges from relatively clean quartz-vein gold to silver-bearing and sulphide-associated ore. Silver is the usual companion metal and drags fineness down without any fault in processing.",
  },
  {
    title: "Concentration route at origin",
    body: "Gravity concentration — panning, sluicing, shaking tables, small crushers — recovers gold by density, not by chemistry. Whatever else is dense comes with it: iron oxides, copper minerals, occasional lead or zinc.",
  },
  {
    title: "Smelting without refining",
    body: "Melting and casting at or near the source makes a handleable, weighable, securable bar. It does not separate gold from silver or base metal, which requires chemical or electrolytic refining further down the chain.",
  },
  {
    title: "Consolidation of many parcels",
    body: "Doré bars presented for export blend output from multiple licensed cooperative and artisanal parcels. Blending narrows the variation; it cannot remove it, so the population sits in a band rather than at a number.",
  },
  {
    title: "Assay reality, not declared grade",
    body: "A fineness figure only carries weight when it comes from a drilled or cut sample and fire assay, witnessed by both parties. Field XRF reads a surface, and a surface is exactly what a bar can be engineered to present.",
  },
];

const buyersWhoNeedWhat: { who: string; takes: string; why: string }[] = [
  {
    who: "Refineries with their own capacity",
    takes: "Doré, 85–95%",
    why: "The alloy is their feedstock. They sample to their own protocol, recover gold and silver, and price treatment and refining charges explicitly.",
  },
  {
    who: "Refiners operating through a trading arm",
    takes: "Doré and scrap",
    why: "Same economics, different contract shape: the trading arm buys on contained fine gold and settles against its own final assay.",
  },
  {
    who: "Bullion banks and vault programmes",
    takes: "Refined 995 / 999.9",
    why: "No plant to refine, and no mandate to hold unverifiable metal. Delivery has to be of declared fineness from an acceptable refiner.",
  },
  {
    who: "LBMA Good Delivery participating refineries",
    takes: "Doré as input; Good Delivery bars as output",
    why: "Good Delivery bars are drawn to a minimum 995.0 fine standard and carry the accredited refiner's identity, weight and assay — a status a doré bar cannot have.",
  },
  {
    who: "Jewellers and fabricators",
    takes: "Refined grain or bars, then alloyed to karat",
    why: "They need to know the gold content precisely to alloy to 18k or 22k. Doré's variability makes colour and hardness impossible to control.",
  },
  {
    who: "Mints and fabricated-product makers",
    takes: "Refined 999.9",
    why: "Product specifications and statutory marking requirements are written against fine metal, not against an intermediate alloy.",
  },
];

const settlementModes: { mode: string; basis: string; risk: string }[] = [
  {
    mode: "Origin assay settlement",
    basis: "Provisional weight and fineness certified by an independent testing house in Nairobi before export, usually with a first payment against the export document pack.",
    risk: "Sampling risk sits entirely with the buyer, because the origin figure was taken from a small number of points on bars that were not sampled to a refinery protocol.",
  },
  {
    mode: "Receiving-refinery final assay",
    basis: "Refinery drills and samples on its own protocol after arrival; the invoice is trued up to the payable fine gold recovered, and the balance is released.",
    risk: "Capital and custody carry for the transit and assay period, and a genuine exposure to the difference between origin and final figures — which is why tolerances and arbitration rights are contracted, not discussed.",
  },
  {
    mode: "Dual assay with arbitration",
    basis: "Origin assay governs the interim payment; refinery assay governs the final figure; an independent third laboratory decides any gap beyond the agreed tolerance.",
    risk: "The most common institutional structure for doré, and the slowest to document properly. It is the only arrangement in which neither side can profit from being the other's rounding error.",
  },
];

const comparison: { attribute: string; dore: string; refined: string }[] = [
  {
    attribute: "Physical form",
    dore: "Smelted, cast bar; rough surface; bar-by-bar serials recorded at origin.",
    refined: "Rolled or cast bar, or grain, of declared fineness with the refiner's marking.",
  },
  {
    attribute: "Typical gold content",
    dore: "About 85–95% gold, with silver and residual base metals.",
    refined: "995 (99.5%) or 999.9 (99.99%) fine.",
  },
  {
    attribute: "What else is in it",
    dore: "Silver is normal; iron, copper, zinc and lead occur. By-product content can carry value.",
    refined: "Controlled to specification; base-metal content is the refiner's removal, not yours.",
  },
  {
    attribute: "Who can take delivery",
    dore: "Refineries and buyers with a refining arrangement behind them.",
    refined: "Bullion banks, dealers, investors, jewellers, mints, vault programmes.",
  },
  {
    attribute: "Pricing basis",
    dore: "Contained fine gold: assayed net weight × assayed fineness, against the agreed benchmark, less treatment and refining charges.",
    refined: "The agreed benchmark price per fine ounce, plus or minus a fabrication or delivery premium.",
  },
  {
    attribute: "Assay that settles",
    dore: "Usually the receiving refinery's final assay, with origin assay provisional and arbitration rights contracted.",
    refined: "Certificate of the refiner; verification by the buyer where the counterparty is unknown.",
  },
  {
    attribute: "Resale on receipt",
    dore: "Only after refining, so it is an input rather than a stock item.",
    refined: "Immediately saleable in the investment and dealer markets, subject to accepted brand and assay.",
  },
  {
    attribute: "Documentation on export from Kenya",
    dore: "Full mineral export chain: assay, standards certification, customs declaration, export authorisation, insured carriage.",
    refined: "Same institutional chain, plus the refiner's certificate carried with the delivery.",
  },
  {
    attribute: "Sampling risk",
    dore: "Material — heterogeneity means a surface reading proves very little.",
    refined: "Low, because the metal is homogeneous by definition.",
  },
  {
    attribute: "Typical buyer intent",
    dore: "Convert alloy into fine gold at a known charge and capture the spread.",
    refined: "Hold, resell, mint, or alloy to a karat specification.",
  },
];

const related: { to: string; label: string; desc: string }[] = [
  {
    to: "/products",
    label: "Products",
    desc: "Doré bars, nuggets and alluvial material, and refined bars available through partner refineries.",
  },
  {
    to: "/buy-gold-safely",
    label: "Buy gold in Kenya safely",
    desc: "The verification sequence, from licence check to settlement against documents.",
  },
  {
    to: "/kenya-gold-export-license",
    label: "Kenya gold export licence",
    desc: "Which authorities sit behind the assay and permit documents on a doré consignment.",
  },
  {
    to: "/export-documentation",
    label: "Export documentation",
    desc: "The packing list, assay certificate and airway records that carry fineness bar by bar.",
  },
  {
    to: "/gold-in-kenya",
    label: "Gold in Kenya",
    desc: "Sourcing regions — Migori, Kakamega, West Pokot, Turkana — and what each produces.",
  },
  {
    to: "/global-delivery",
    label: "Global delivery",
    desc: "Insured logistics from Nairobi JKIA to your refinery or vault.",
  },
];

export const Route = createFileRoute("/dore-vs-refined-gold")({
  head: () => {
    const seo = pageSeo({
      title: "Doré vs Refined Gold: What Institutional Buyers Must Know",
      description:
        "Doré versus refined gold for institutional buyers: what an 85–95% fineness range means, how refine yield drives pricing, and which assay settles the invoice.",
      path: "/dore-vs-refined-gold",
      keywords:
        "dore vs refined gold, gold doré meaning, what is dore gold, doré fineness, dore bars 85 95, refine yield gold, contained fine gold, gold priced against lbma, who buys gold doré, dore refining charges, gold nuggets vs dore, mine gate assay, refinery final assay, 995 gold bar, 999.9 gold bar",
      ogImage: "/og-image.jpg",
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
              { name: "Doré vs Refined Gold", path: "/dore-vs-refined-gold" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      ],
    };
  },
  component: DoreVsRefinedGold,
});

function DoreVsRefinedGold() {
  return (
    <>
      <PageHero
        eyebrow="Technical Brief"
        title={
          <>
            Doré versus refined gold: <span className="text-gradient-gold">what you are actually buying</span>.
          </>
        }
        subtitle="Fineness bands, refine yield, contained fine gold, who can take delivery of an unrefined bar, and why the assay that settles the invoice matters more than the assay that opens the negotiation."
        image={img.goldIngot}
      />

      {/* Definition */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Definitions"
              title={
                <>
                  Doré is an <span className="text-gradient-gold">intermediate product</span>. Treat it like one.
                </>
              }
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                <span className="text-foreground">Doré</span> is gold that has been concentrated and smelted
                but not refined. The sourcing party melts recovered gold into a cast bar because a bar is
                weighable, sealable, insurable and securable in a way that a bag of grains and fines is not.
                What comes out of the furnace is an alloy: gold plus silver plus whatever base metal the
                concentration process carried along, commonly in the 85–95% gold range.
              </p>
              <p>
                <span className="text-foreground">Refined gold</span> has passed through that intermediate
                stage and been taken to a declared standard — 995 (99.5%) or 999.9 (99.99%) fine — by chemical
                or electrolytic refining, then recast or rolled into bars, or produced as grain. The refiner's
                certificate, not the origin declaration, is what defines it.
              </p>
              <p>
                The commercial difference is not quality. Doré is not bad gold; it is gold that still contains
                work. Whoever buys it is deciding to pay for that work in charges and time instead of in price,
                and the entire pricing structure of the trade follows from that single choice.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              <Stat value="85–95%" label="Typical doré fineness" />
              <Stat value="995 / 999.9" label="Refined standards" />
              <Stat value="11.0 kg" label="Fine gold in the example bar" />
            </div>
          </div>
          <aside className="card-luxe p-7">
            <div className="eyebrow mb-4">What Mayfox Represents</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mayfox acts as an export agent for licensed Kenyan cooperatives and artisanal miners. We are not
              a mine owner, refiner or smelter.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span className="text-muted-foreground">
                  Doré bars in the 85–95% fineness band, from licensed Kenyan sourcing parties.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span className="text-muted-foreground">
                  Nuggets and alluvial material, weighed and assayed as pieces rather than as cast bars.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span className="text-muted-foreground">
                  Refined 995 and 999.9 bars, arranged through partner refineries for buyers who need finished
                  metal rather than feedstock.
                </span>
              </li>
            </ul>
            <Link to="/products" className="btn-gold btn-gold-hover mt-6 w-full text-center">
              View Products
            </Link>
          </aside>
        </div>
      </section>

      {/* Why a range */}
      <section className="section-y bg-onyx border-y border-border/50">
        <div className="container-x">
          <SectionHeader
            eyebrow="Fineness"
            title={
              <>
                Why 85–95% is a <span className="text-gradient-gold">range, not a rounding error</span>.
              </>
            }
            description="Buyers new to doré often ask why a seller cannot simply quote one fineness. Five reasons, none of which is a marketing choice."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {finenessFactors.map((f, i) => (
              <div key={f.title} className="card-luxe p-6">
                <div className="font-display text-xs text-gold tracking-[0.3em] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground max-w-4xl">
            Practical consequence: a bar declared at 90% and a bar declared at 86% are the same product to a
            furnace and entirely different products to your treasury line. Price on assayed fineness bar by
            bar, never on a parcel average quoted in a message.
          </p>
        </div>
      </section>

      {/* Nuggets */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={img.goldNuggets}
            alt="Gold nuggets and alluvial material"
            className="rounded-sm w-full h-[460px] object-cover"
          />
          <div>
            <SectionHeader
              eyebrow="Nuggets & Alluvial"
              title={
                <>
                  Nuggets are <span className="text-gradient-gold">not small doré</span>.
                </>
              }
              description="Alluvial and eluvial pieces — gold recovered from gravels and stream work, occurring as fragments rather than being made into them — are a separate product line with separate commercial behaviour."
            />
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Form is natural, not manufactured: no melting and no casting step, so nothing was added or
                  blended deliberately.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Fineness varies piece to piece rather than bar to bar, so parcels are assayed on a sampled
                  subset and priced on the resulting average, with the tolerance agreed in advance.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Parcel sizes are materially smaller than doré consignments, which suits jewellers, collectors
                  and refiners taking short runs rather than accounts buying to a fine-weight programme.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Documentation burden is identical. Nuggets still pass through assay, standards certification,
                  customs and export authorisation — see the Kenya licensing chain.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Refine yield pricing */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Pricing Mechanics"
            title={
              <>
                Refine yield is the <span className="text-gradient-gold">only number that matters</span>.
              </>
            }
            description="Doré is not bought per kilogram. It is bought per fine ounce of recoverable gold, referenced to a benchmark and then reduced by the cost of converting alloy into metal."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              ["Step 01", "Establish contained fine gold", "Assayed net weight × assayed fineness = fine weight. Everything else is arithmetic on top of that figure."],
              ["Step 02", "Value the fine weight", "Fine weight priced against the benchmark both parties agreed — an LBMA reference fix, or the refiner's own published basis — on a stated date and time."],
              ["Step 03", "Deduct conversion cost", "Treatment and refining charges, plus adjustments for by-product content and the settlement assay, are taken from the gross figure. The result is the payable."],
            ].map(([n, t, d]) => (
              <div key={t} className="card-luxe p-7">
                <div className="text-gold text-xs tracking-[0.3em] mb-4">{n}</div>
                <h3 className="font-display text-2xl mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-start">
            <div className="border border-gold/30 bg-charcoal/60 p-7 rounded-sm">
              <div className="eyebrow mb-4">Worked Example — Illustrative Arithmetic Only</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These are the mechanics of the calculation, not a market quotation. No price, discount or
                charge below is a real figure or an indicative one; actual terms come from the trade desk
                against a live assay and an agreed benchmark.
              </p>
              <div className="mt-6 space-y-3 font-mono text-sm">
                <div className="flex justify-between border-b border-border/60 pb-3">
                  <span className="text-muted-foreground">Gross bar weight</span>
                  <span>12.5 kg</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-3">
                  <span className="text-muted-foreground">Assayed fineness</span>
                  <span>88%</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-3">
                  <span className="text-muted-foreground">Contained fine gold</span>
                  <span className="text-gold">12.5 × 0.88 = 11.0 fine kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">In troy ounces</span>
                  <span>11.0 × 32.1507 = 353.66 fine oz</span>
                </div>
              </div>
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                Read across the comparison alongside and the pricing consequence is immediate: two bars of
                similar gross weight can carry materially different quantities of recoverable gold. That is why
                weight-only quotations for doré are a category error, and why a claimed fineness figure — not a
                stated price — is where the negotiation is actually won or lost.
              </p>
              <Link to="/request-quote" className="btn-gold btn-gold-hover mt-6 w-full text-center">
                Request Live Terms
              </Link>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-4">Same arithmetic, three bars</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-y border-border/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      <th className="text-left py-3 font-normal">Gross kg</th>
                      <th className="text-left py-3 font-normal">Fineness</th>
                      <th className="text-left py-3 font-normal">Fine kg</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["12.5", "88.0%", "11.000"],
                      ["11.8", "91.5%", "10.797"],
                      ["13.2", "85.0%", "11.220"],
                    ].map((row) => (
                      <tr key={row[0]}>
                        <td className="py-3">{row[0]}</td>
                        <td className="py-3 text-muted-foreground">{row[1]}</td>
                        <td className="py-3 text-gold">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                The finest of these three bars is not the richest one, and the whole spread between them is only
                a few tenths of a fine kilogram — invisible from gross weight alone. All three figures are
                arithmetic on illustrative inputs, and only the third column would ever appear on an invoice.
                Silver and residual base-metal content can further alter the payable where by-product recovery is
                credited; that treatment is a function of the refiner you settle with, and current terms must be
                requested from the trade desk.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                <div className="border border-border/60 p-4">
                  <span className="text-gold block font-display text-lg">1 kg</span>
                  = 32.1507 troy oz
                </div>
                <div className="border border-border/60 p-4">
                  <span className="text-gold block font-display text-lg">995</span>
                  99.5% fine
                </div>
                <div className="border border-border/60 p-4">
                  <span className="text-gold block font-display text-lg">999.9</span>
                  99.99% fine
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who buys what */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Counterparty Types"
            title={
              <>
                Who buys doré, and who <span className="text-gradient-gold">must</span> take refined.
              </>
            }
            description="Matching the product to the institution is the fastest way to tell whether a seller understands your business — or is flattering you."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm min-w-[880px]">
              <thead>
                <tr className="border-y border-border/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  <th className="text-left py-4 pr-6 font-normal w-[26%]">Buyer type</th>
                  <th className="text-left py-4 pr-6 font-normal w-[22%]">Takes</th>
                  <th className="text-left py-4 font-normal">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {buyersWhoNeedWhat.map((b) => (
                  <tr key={b.who}>
                    <td className="py-5 pr-6 align-top">
                      <span className="font-display text-lg">{b.who}</span>
                    </td>
                    <td className="py-5 pr-6 align-top text-gold">{b.takes}</td>
                    <td className="py-5 align-top text-muted-foreground leading-relaxed">{b.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-xs text-muted-foreground max-w-4xl">
            A buyer with no refining relationship who is offered doré at an attractive gross-weight price has
            not found a discount. They have been handed a cost they have not yet calculated: the assay, the
            freight, the charges and the weeks of float between casting and recovery.
          </p>
        </div>
      </section>

      {/* Settlement */}
      <section className="section-y bg-onyx border-y border-border/50">
        <div className="container-x">
          <SectionHeader
            eyebrow="Settlement"
            title={
              <>
                Mine-gate assay versus <span className="text-gradient-gold">refinery assay</span>.
              </>
            }
            description="Where the metal is sampled determines who carries the risk of being wrong about it. This is the clause institutional buyers negotiate hardest, and the one retail buyers never read."
          />
          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {settlementModes.map((s) => (
              <div key={s.mode} className="card-luxe p-7 flex flex-col">
                <h3 className="font-display text-2xl mb-4">{s.mode}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.basis}</p>
                <div className="mt-5 pt-5 border-t border-border/60">
                  <div className="text-xs tracking-[0.25em] uppercase text-gold/80 mb-2">Risk position</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.risk}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-4xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The reason refineries insist on their own assay is physical: doré is heterogeneous, so a bar's
              interior can differ from its surface, and one bar in a parcel can differ from its neighbour. An
              origin assay still has real work to do — it supports the export documents, the insurance value and
              any interim payment — but a buyer who treats it as the final word has quietly accepted the seller's
              sampling as their own.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Side by Side"
            title={
              <>
                Doré and refined gold, <span className="text-gradient-gold">attribute by attribute</span>.
              </>
            }
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="border-y border-border/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  <th className="text-left py-4 pr-6 font-normal w-[20%]">Attribute</th>
                  <th className="text-left py-4 pr-6 font-normal w-[40%]">
                    Doré <span className="text-gold">(85–95%)</span>
                  </th>
                  <th className="text-left py-4 font-normal">
                    Refined <span className="text-gold">(995 / 999.9)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparison.map((c) => (
                  <tr key={c.attribute}>
                    <td className="py-5 pr-6 align-top">
                      <span className="font-display text-base">{c.attribute}</span>
                    </td>
                    <td className="py-5 pr-6 align-top text-muted-foreground leading-relaxed">{c.dore}</td>
                    <td className="py-5 align-top text-muted-foreground leading-relaxed">{c.refined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x max-w-4xl">
          <SectionHeader
            eyebrow="Doré FAQs"
            title={
              <>
                Questions about <span className="text-gradient-gold">doré and refined gold</span>.
              </>
            }
          />
          <div className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <span className="font-display text-lg">{f.q}</span>
                  <span className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Continue Research" title="Related pages on this site" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="card-luxe p-5 flex items-start justify-between gap-4 hover:border-gold transition-colors"
              >
                <span>
                  <span className="font-display text-lg block">{r.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground leading-relaxed">{r.desc}</span>
                </span>
                <span className="text-gold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
