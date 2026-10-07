import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { PageHero, SectionHeader } from "@/components/site-blocks";
import { breadcrumbSchema, faqSchema, pageSeo } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/gold-specifications")({
  head: () => {
    const seo = pageSeo({
      title: "Gold Product Specifications — Doré Bars, Nuggets & Refined | Mayfox",
      description:
        "Printable specification sheet for Mayfox gold products: assayed fineness bands, parcel and bar weights, form, packaging, the assay and export documents issued with every consignment, and what is confirmed per order.",
      path: "/gold-specifications",
      ogImage: img.goldIngot,
      keywords:
        "gold doré bar specification, doré bar weight 12.5 kg, gold nugget parcel weight, refined gold bar certificate, gold export documentation list, gold assay certificate kenya",
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
              { name: "Products", path: "/products" },
              { name: "Specifications", path: "/gold-specifications" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(specFaqs)) },
      ],
    };
  },
  component: GoldSpecifications,
});

interface SpecRow {
  field: string;
  value: string;
}

const sheets: Array<{ product: string; rows: SpecRow[]; note?: string }> = [
  {
    product: "Gold Doré Bars",
    rows: [
      { field: "Form", value: "Cast bar, smelter-poured at or near source" },
      { field: "Assayed fineness", value: "85% – 95% gold, certificate per bar" },
      { field: "Weights offered", value: "5 kg, 10 kg, 15 kg, 20 kg, and custom pours" },
      { field: "Silver content", value: "Assayed and valued separately; commonly material in East African doré" },
      { field: "Other constituents", value: "Declared per consignment before pricing (base metals, residual flux)" },
      { field: "Sampling", value: "Drilled or cut sample, witnessed and sealed; buyer may appoint the sampler" },
      { field: "Pricing basis", value: "Contained fine gold against the agreed benchmark, less refining and treatment charges" },
      { field: "Packaging", value: "Individually numbered, sealed, tamper-evident transport cases" },
      { field: "Documents issued", value: "Commercial invoice, packing list, assay certificate, export authorisation, airway bill, certificate of origin" },
    ],
    note: "Bar dimensions follow the pour weight and the smelter's mould set, so they are confirmed on the order rather than published as a fixed drawing.",
  },
  {
    product: "Gold Nuggets and Alluvial Parcels",
    rows: [
      { field: "Form", value: "Naturally formed alluvial pieces, unsmelted" },
      { field: "Assayed fineness", value: "85% – 92% typical, verified on the parcel" },
      { field: "Parcel weights", value: "100 g – 5 kg, with a per-parcel weight breakdown" },
      { field: "Inspection", value: "Visual inspection record and count per parcel; buyer may verify on receipt" },
      { field: "Pricing basis", value: "Weighted average fineness against the benchmark, less recovery charges" },
      { field: "Packaging", value: "Sealed, labelled trays with parcel manifest" },
      { field: "Documents issued", value: "Invoice, parcel manifest, inspection record, export authorisation, airway bill" },
    ],
    note: "Cut, shaped or machine-formed pieces are not sold or described as natural nuggets.",
  },
  {
    product: "Raw and Field-Grade Gold",
    rows: [
      { field: "Form", value: "Unsmelted or crudely concentrated gold material" },
      { field: "Grade", value: "Field grade, commonly 70% – 88%, established by assay before any firm price" },
      { field: "Handling", value: "Smelted to doré or taken directly by a refinery that accepts the declared chemistry" },
      { field: "Risk note", value: "Highest assay and variance risk of any product line; priced accordingly" },
      { field: "Documents issued", value: "Invoice, assay on the consigned material, export authorisation, airway bill" },
    ],
    note: "We decline to quote firm prices on photographs or unassayed samples of raw material.",
  },
  {
    product: "Refined and Investment-Grade Gold",
    rows: [
      { field: "Form", value: "Refined bars produced through partner refineries" },
      { field: "Fineness", value: "99.50% – 99.99%, including four-nines investment grade" },
      { field: "Formats", value: "1 oz, 100 g, 250 g, 500 g, 1 kg and large-bar formats subject to refinery capability" },
      { field: "Certificate", value: "Issued by the refining facility; serialised product where the facility serialises" },
      { field: "Branding", value: "Client-specified casting and marking available on confirmation of the format" },
      { field: "Packaging", value: "Tamper-evident assay-card packaging or sealed mint packs" },
      { field: "Pricing basis", value: "Benchmark plus a stated premium, agreed for the term of the arrangement" },
      { field: "Documents issued", value: "Invoice, refinery certificate, packing list, export authorisation, airway bill, insurance certificate" },
    ],
    note: "Good Delivery list membership, refinery accreditation scope and current formats are properties of the refining facility; we confirm them with the counterparty rather than asserting them.",
  },
];

const documentSet = [
  ["Commercial invoice", "The commercial terms: parties, description, value, Incoterms and settlement basis."],
  ["Packing list", "Piece-by-piece weight and serial detail, so the receiving count can be checked against the papers."],
  ["Assay certificate", "Fineness and the sampling method behind it, issued by the testing party named on the certificate."],
  ["Export authorisation", "Kenyan export paperwork for the specific consignment, carried with the metal."],
  ["Certificate of origin", "Origin of the material as evidenced by the sourcing records on file."],
  ["Airway bill", "Movement of the consignment and the named carrier that held it."],
  ["Insurance certificate", "Cover for the transit leg, with the insured value and the named beneficiary."],
];

const specFaqs = [
  {
    q: "Why don't you publish bar dimensions?",
    a: "Doré is poured, not minted to a drawing. Dimensions follow the mould set at the smelter and the target pour weight, so a published drawing would be a guess about someone else's equipment. Confirm the shape you need at order stage and we check it is producible.",
  },
  {
    q: "Which number in the specification actually governs payment?",
    a: "The assayed fineness of the sealed sample from your consignment, applied to the net weight, valued against the benchmark named in the contract. Everything else on this sheet describes the product rather than settling it.",
  },
  {
    q: "Can a buyer appoint their own assay?",
    a: "Yes. Buyer-appointed sampling, weighing and sealing is normal practice on doré mandates, and the sealed sample split is written into the agreement so both sides test the same material.",
  },
  {
    q: "Do refined bars come with an LBMA Good Delivery certificate?",
    a: "Refined product is produced through partner refineries, and the certificate is the issuing facility's. Good Delivery status, accreditation scope and formats belong to that facility, so we state which facility produced the bars rather than making the claim on its behalf.",
  },
  {
    q: "What is not on this sheet?",
    a: "Prices, premiums, treatment charges, recovery percentages and transit insurance rates. Those depend on the product, volume, route and benchmark date, and a figure printed on a website would be a number you should not trade on.",
  },
];

function GoldSpecifications() {
  return (
    <>
      <PageHero
        eyebrow="Product Specifications"
        title={<>The specification sheet, <span className="text-gradient-gold">in one page</span>.</>}
        subtitle="Fineness bands, weights, form, packaging and the exact documents that travel with each consignment. Built to be printed, filed and checked."
        image={img.goldIngot}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="text-xs text-muted-foreground">
              Mayfox Gold and Precious Metals Kenya · product specification ·{" "}
              <span className="text-gold">{absoluteUrl("/gold-specifications").replace(/^https?:\/\//, "")}</span>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-outline-gold !py-2 !px-4 print:hidden"
            >
              Print or save as PDF
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sheets.map((sheet) => (
              <article key={sheet.product} className="card-luxe p-7 break-inside-avoid">
                <div className="eyebrow mb-4">{sheet.product}</div>
                <dl className="divide-y divide-border/60 border-y border-border/60 text-sm">
                  {sheet.rows.map((row) => (
                    <div key={row.field} className="grid grid-cols-[135px_1fr] gap-4 py-3">
                      <dt className="text-[10px] tracking-[0.2em] uppercase text-gold pt-1">{row.field}</dt>
                      <dd className="text-muted-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                {sheet.note && <p className="mt-4 text-xs text-muted-foreground italic">{sheet.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x grid lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <SectionHeader
              eyebrow="Document set"
              title="What travels with the metal"
              description="Every consignment is released against this pack. A buyer should be able to check each document against the issuing party before settlement."
            />
            <dl className="mt-8 divide-y divide-border/60 border-y border-border/60">
              {documentSet.map(([name, purpose]) => (
                <div key={name} className="grid md:grid-cols-[220px_1fr] gap-4 py-4">
                  <dt className="text-sm text-foreground">{name}</dt>
                  <dd className="text-sm text-muted-foreground">{purpose}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="space-y-6">
            <div className="card-luxe p-7">
              <div className="eyebrow mb-3">Not on this sheet</div>
              <p className="text-sm text-muted-foreground mb-4">
                Prices, premiums, treatment and refining charges, recovery percentages and insurance rates are
                quoted per consignment against a stated benchmark date. Any website that prints them as fixed
                numbers is describing a price it cannot deliver.
              </p>
              <Link to="/request-quote" className="btn-gold w-full">Request firm terms</Link>
            </div>

            <div className="card-luxe p-7">
              <div className="eyebrow mb-3">Related</div>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products" className="text-muted-foreground hover:text-gold">Gold products</Link></li>
                <li><Link to="/dore-vs-refined-gold" className="text-muted-foreground hover:text-gold">Doré versus refined</Link></li>
                <li><Link to="/export-documentation" className="text-muted-foreground hover:text-gold">Export documentation guide</Link></li>
                <li><Link to="/gold-price" className="text-muted-foreground hover:text-gold">Live price and doré calculator</Link></li>
                <li><Link to="/compliance" className="text-muted-foreground hover:text-gold">Compliance and traceability</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="Specification questions" title="Asked before an order is placed" />
          <div className="mt-7 space-y-3">
            {specFaqs.map((faq) => (
              <details key={faq.q} className="card-luxe p-5">
                <summary className="cursor-pointer text-sm font-medium">{faq.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
