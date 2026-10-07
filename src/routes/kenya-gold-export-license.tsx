import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, SectionHeader, Stat } from "../components/site-blocks";
import { breadcrumbSchema, faqSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";
import { Link } from "@tanstack/react-router";

const CONFIRM =
  "Current requirements must be confirmed directly with the authority, since fees, forms and thresholds change.";

const faqs = [
  {
    q: "Does a foreign buyer need a Kenyan export licence to buy gold?",
    a: "No. Licensing and export obligations in Kenya attach to the Kenyan exporting side — the licensed dealing, mining or cooperative entity and the agent acting for it. As an overseas buyer your own permissions are import-side: the licences, declarations and reporting your customs authority and financial regulator require. What you should insist on is a Kenyan counterparty that can show the documents the Kenyan chain produces, and verify each one at source. Exact requirements for every permit change, so confirm them with the Kenyan authorities and with your own customs broker.",
  },
  {
    q: "Which Kenyan institutions are involved when gold is exported?",
    a: "In practice the chain runs through the Mining Cadastral Office for licence and cadastral records, the Kenya Bureau of Standards for quality and assay certification, the Kenya Revenue Authority for tax clearance and export customs documentation, the Directorate of Overseas Trade for mineral export permits, and the Central Bank of Kenya for the foreign-exchange and precious-metals control side of the transaction. Material of Great Lakes origin brings regional chain-of-custody schemes into the same chain. Confirm each institution's current requirements directly with it, since fees, forms and thresholds change.",
  },
  {
    q: "Who verifies the purity of gold exported from Kenya?",
    a: "Two layers, and a careful buyer relies on neither alone. The national standards body and accredited laboratories provide certification within the Kenyan chain, and independent international testing houses — SGS, Bureau Veritas, Intertek, Alex Stewart International among them — issue assay reports on request. Because doré is not homogeneous, base your settlement on a drilled or cut fire assay that you instructed or that your receiving refinery performs, with arbitration rights written into the contract.",
  },
  {
    q: "How much does a Kenyan gold export licence cost?",
    a: "We deliberately do not publish a figure. Application, processing, certification and export charges are set by the Kenyan authorities, and they change; a number quoted on any website today is likely to be wrong when you apply. The correct cost of a specific consignment comes from the authority handling it and from the exporter's own documentation, not from a third party's page — including this one. Confirm current requirements directly with the authority, since fees, forms and thresholds change.",
  },
  {
    q: "How long does export authorisation take in Kenya?",
    a: "No honest participant guarantees a number of days for a permit, a certificate or a customs release, because filing completeness, inspection scheduling and seasonal workload all move the timeline. Ask instead for evidence that previous, comparable consignments cleared the full chain, and build float into your settlement schedule. Any seller who promises a fixed turnaround as a selling point is telling you what you want to hear rather than what the authorities control.",
  },
  {
    q: "What are ICGLP and ITSCI, and do they matter to my purchase?",
    a: "They matter when the material is connected to the Great Lakes region rather than to Kenyan goldfields. The ICGLP Regional Certification Mechanism is a state-anchored scheme for certifying the origin and movement of minerals from that region, and ITSCI is an industry due-diligence programme covering tin, tantalum, tungsten and gold. Both exist to document chain of custody. If provenance is claimed under either, verify the paperwork with the responsible secretariat and require the same at origin; participation status and requirements change, so confirm them with the scheme directly.",
  },
  {
    q: "How do I check that documents issued in Kenya are genuine?",
    a: "Verify at source rather than at face value. Every real document carries details an authority can confirm: licence and cadastral particulars at the Mining Cadastral Office, tax status at the Kenya Revenue Authority, assay reports authenticated by the issuing laboratory, and shipment records that match the carrier's own files. Engage Nairobi counsel or a named inspection company to run the checks, ask for originals rather than scans, and treat any document the issuer will not confirm as fabricated.",
  },
];

const authorities: {
  name: string;
  short: string;
  role: string;
  controls: string[];
  ask: string;
}[] = [
  {
    name: "Mining Cadastral Office",
    short: "MCO",
    role: "Holds the licensing and cadastral record — the administrative register of mineral rights, claims and the entitlements a dealer or mining cooperative is operating under. It is where you establish that a licence cited by a counterparty corresponds to a real, current holding rather than a scan of someone else's document.",
    controls: [
      "Cadastral and mineral-rights records for the sourcing area",
      "Administration of mining and dealing licence documentation",
      "Applicant-facing filing routes for licence enquiries and searches",
    ],
    ask: "The licence particulars of the Kenyan sourcing entity, the claim or area they relate to, and the registered holder name matching the entity you are contracting. Then run a search at the office yourself, or instruct counsel to.",
  },
  {
    name: "Kenya Bureau of Standards",
    short: "KEBS",
    role: "The national standards body, concerned with quality certification and conformity for gold offered for sale and export. Its involvement is about the metal meeting declared specification, which is why a buyer's own assay instruction sits alongside the Kenyan certification rather than instead of it.",
    controls: [
      "Standards and conformity certification touching gold quality",
      "Laboratory and certification pathways for assay documentation",
      "Requirements that apply to consignments presented for export",
    ],
    ask: "The quality or conformity documentation issued for the consignment, with the certificate reference put to the issuing body for authentication and the sampling method disclosed in writing.",
  },
  {
    name: "Kenya Revenue Authority",
    short: "KRA",
    role: "Customs and tax. An export leaves Kenya through a declaration, and the exporting entity's tax standing is part of what makes the transaction bankable. This is also where any applicable export charge, levy or exemption treatment is determined — on the day, on the file, not from a website.",
    controls: [
      "Export customs declaration and release of the consignment",
      "Tax compliance and PIN standing of the exporting entity",
      "Assessment and documentation of any applicable export charge",
    ],
    ask: "The exporter's tax compliance documentation and, once filed, the export declaration as presented. Have your freight partner or customs broker read the declaration against your invoice before goods move.",
  },
  {
    name: "Directorate of Overseas Trade",
    short: "DOT",
    role: "The trade-side body concerned with export permits and the promotion and monitoring of Kenyan exports. For precious metals this is the layer where a specific consignment is authorised to leave the country, naming consignee, quantity and route.",
    controls: [
      "Permitting and authorisation for mineral exports",
      "Consistency between permitted consignee, quantity and destination",
      "Export promotion and monitoring obligations on the exporter",
    ],
    ask: "The export authorisation covering this consignment, and confirmation that the consignee, weight and destination on it match your contract exactly. A permit naming someone else is not your permit.",
  },
  {
    name: "Central Bank of Kenya",
    short: "CBK",
    role: "External transactions and the foreign-exchange framework, which is where the value side of a gold export is supervised as well as recorded. Its practical relevance to you is narrow but decisive: the settlement route must be one a bank on both ends will process without improvisation.",
    controls: [
      "Foreign-exchange and cross-border payment framework",
      "Authorised-dealer channels through which value may move",
      "Reporting expectations attached to precious-metal transactions",
    ],
    ask: "Confirmation from your own bank, and from the exporter's, of how the payment will be documented and reported. Never route settlement outside the banking channel to accommodate a counterparty's convenience.",
  },
  {
    name: "ICGLP and ITSCI regional schemes",
    short: "GL",
    role: "For material originating in the Great Lakes region rather than Kenyan goldfields, chain of custody becomes a regional question. The ICGLP certification mechanism is a state-anchored process for documenting mineral origin and movement, and ITSCI is an industry due-diligence programme covering tin, tantalum, tungsten and gold.",
    controls: [
      "Regional certification of mineral origin and transit",
      "Participant and audit status for smelters and traders",
      "Due-diligence documentation expected by downstream buyers",
    ],
    ask: "Where Great Lakes provenance is claimed, the certification and transit documentation trail from origin, verified with the responsible secretariat and reconciled against the Kenyan export pack. Kenyan-origin material does not carry these documents, and a seller offering you a 'regional certificate' for Migori metal is inventing paper.",
  },
];

const documentTable: { doc: string; proves: string; verify: string }[] = [
  {
    doc: "Licence and cadastral particulars of the sourcing entity",
    proves: "That a licensed Kenyan party is entitled to deal in or mine the metal being sold.",
    verify: "Search at the Mining Cadastral Office, in person or through appointed Nairobi counsel, against the registered holder name.",
  },
  {
    doc: "Tax PIN and compliance documentation",
    proves: "The exporting entity exists in the Kenyan tax system and is in standing to file an export.",
    verify: "Confirm the PIN and compliance status with the Kenya Revenue Authority rather than from the certificate image.",
  },
  {
    doc: "Independent assay report",
    proves: "Fine gold content, by bar or by sample, on a stated method and sampling basis.",
    verify: "Put the report reference to the issuing laboratory for authentication; check the sampling was witnessed, not assumed.",
  },
  {
    doc: "Quality or conformity certification",
    proves: "The consignment was presented through the Kenyan standards pathway.",
    verify: "Query the certificate number with the issuing body and reconcile fineness and weight against the assay.",
  },
  {
    doc: "Export authorisation for the consignment",
    proves: "Permission to move this quantity, to this consignee, by this route.",
    verify: "Compare consignee, weight, fineness and destination line by line against your contract and invoice.",
  },
  {
    doc: "Customs export declaration and clearance",
    proves: "The goods left Kenya through the declared channel, not around it.",
    verify: "Obtain the filed declaration through your freight partner or broker; confirm the flight and master airway bill match.",
  },
  {
    doc: "Certificate of origin",
    proves: "Where the metal was sourced or processed, for your import declaration.",
    verify: "Authenticate the issuing chamber's record and cross-check against the claimed goldfield or origin.",
  },
  {
    doc: "Commercial invoice, packing list, weighing record",
    proves: "Bar-by-bar identity: serials, gross and net weights, seal numbers.",
    verify: "Reconcile every serial against the assay and airway bill; mismatches are the usual first fingerprint of substitution.",
  },
  {
    doc: "Airway bill and insurance certificate",
    proves: "The carrier took the consignment and it is covered to declared value.",
    verify: "Confirm the airway bill with the airline or security carrier directly and check the buyer is noted on the policy.",
  },
  {
    doc: "Chain-of-custody certification (Great Lakes origin only)",
    proves: "Regional provenance and due-diligence trail for non-Kenyan material.",
    verify: "Verify participant and shipment status with the responsible scheme secretariat; do not accept a scan in isolation.",
  },
];

const notPublished: { item: string; why: string }[] = [
  {
    item: "Fee and charge amounts",
    why: "Application, certification and export charges are set by the authorities and revised. A stale figure on our page would become a term you argued about with a bank.",
  },
  {
    item: "Processing-day guarantees",
    why: "Timelines depend on filing completeness, inspections and authority workload. Sellers who promise days are selling a number they do not control.",
  },
  {
    item: "Statute and section citations",
    why: "Legal instruments and their provisions are amended. Cite nothing in a contract that has not been read in its current form by Kenyan counsel.",
  },
  {
    item: "Licence numbers",
    why: "Real licence references are private to the holder and are the raw material of cloned-identity fraud. They are disclosed to a genuine counterparty for verification, under confidentiality.",
  },
  {
    item: "Forms and annex names",
    why: "Form sets change between filing systems. Obtain the current forms from the authority handling your transaction, or from the exporter's agent.",
  },
];

const related: { to: string; label: string; desc: string }[] = [
  {
    to: "/buy-gold-safely",
    label: "Buy gold in Kenya safely",
    desc: "The buyer's verification sequence and the red flags that end a conversation.",
  },
  {
    to: "/export-documentation",
    label: "Export documentation",
    desc: "The consignment-level document set, line by line.",
  },
  {
    to: "/compliance",
    label: "Compliance framework",
    desc: "KYC, AML, sanctions screening and responsible sourcing standards we operate to.",
  },
  {
    to: "/anti-fraud",
    label: "Anti-fraud warning",
    desc: "The scripts used against buyers in this market and how to dismantle them.",
  },
  {
    to: "/dore-vs-refined-gold",
    label: "Doré vs refined gold",
    desc: "What the assay on a permit actually describes, and who settles on which figure.",
  },
  {
    to: "/gold-in-kenya",
    label: "Gold in Kenya",
    desc: "Kenyan goldfields, sourcing regions and the products we represent.",
  },
];

export const Route = createFileRoute("/kenya-gold-export-license")({
  head: () => {
    const seo = pageSeo({
      title: "Kenya Gold Export Licence: Buyer's Explainer | Mayfox",
      description:
        "Kenyan gold export licensing explained for buyers: the Mining Cadastral Office, KEBS, KRA, Overseas Trade, Central Bank and Great Lakes chain-of-custody checks.",
      path: "/kenya-gold-export-license",
      keywords:
        "kenya gold export licence, gold export permit kenya, mining cadastral office, kebs gold assay, kenya revenue authority gold export, directorate of overseas trade, central bank of kenya gold, icglp gold, itsci gold, kenya gold regulations, gold export documents kenya, doré export kenya",
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
              { name: "Kenya Gold Export Licence", path: "/kenya-gold-export-license" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      ],
    };
  },
  component: KenyaGoldExportLicense,
});

function KenyaGoldExportLicense() {
  return (
    <>
      <PageHero
        eyebrow="Regulatory Chain"
        title={
          <>
            The Kenya gold export licence, <span className="text-gradient-gold">institution by institution</span>.
          </>
        }
        subtitle="What a doré export actually passes through in Kenya, what each authority controls, and what a foreign buyer should ask a Kenyan counterparty to produce — and then verify at source."
        image={img.documents}
      />

      {/* Framing */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Who Holds the Licence"
              title={
                <>
                  The licence is <span className="text-gradient-gold">the Kenyan side's problem</span> — and it is yours to check.
                </>
              }
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                A buyer in Zurich, Dubai or London does not obtain a Kenyan mineral licence. Kenyan
                obligations attach to the Kenyan entity that deals in, processes or exports the metal, and
                to the agent filing on its behalf. Your obligations are the mirror image: import declarations,
                provenance records, payment-channel rules and due-diligence expectations in your own
                jurisdiction.
              </p>
              <p>
                What is genuinely yours is verification. A doré export in Kenya is not one permit; it is a
                sequence of records produced by several institutions, each with a different subject matter —
                who may hold the mineral, whether the metal is what it is said to be, whether tax has been
                accounted for, whether this consignment may leave, and how the money crosses back. A buyer who
                can name those layers and demand the matching document is a buyer fraud operators avoid.
              </p>
              <p>
                Mayfox operates as an export agent for licensed Kenyan cooperatives and artisanal miners. We
                are not a mine owner, a refiner or a smelter, and we are not the authority: the institutions
                below are. Treat every requirement on this page as a description of the chain, never as a
                substitute for asking the authority itself.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                <Stat value="5" label="Kenyan institutions in the chain" />
                <Stat value="2" label="Regional schemes for Great Lakes origin" />
                <Stat value="10" label="Documents a buyer should demand" />
              </div>
            </div>
          </div>
          <aside className="border border-gold/30 bg-charcoal/60 p-7 rounded-sm">
            <div className="eyebrow mb-4">Accuracy Notice</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This page describes institutional roles. It deliberately publishes{" "}
              <span className="text-foreground">no fee amounts, no processing-day guarantees, no statute or
              section citations and no licence numbers</span>. Each authority named on this page sets its own
              paperwork and pricing, so treat the summary below as a map of the chain rather than as filing
              instructions.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-gold">◆</span> Fees, forms and thresholds are revised without notice.
              </li>
              <li className="flex gap-2">
                <span className="text-gold">◆</span> Requirements differ by consignment, origin and filing route.
              </li>
              <li className="flex gap-2">
                <span className="text-gold">◆</span> Kenyan counsel or your customs broker should read the current
                position for your specific transaction.
              </li>
            </ul>
            <div className="mt-6 border-t border-border/60 pt-5 text-xs text-muted-foreground">
              Need the live position rather than a summary? Ask the trade desk which documents exist for your
              consignment and we will point you at the authority to verify each one with.
            </div>
            <Link to="/request-quote" className="btn-outline-gold mt-5 w-full text-center">
              Ask the Trade Desk
            </Link>
          </aside>
        </div>
      </section>

      {/* Authorities */}
      <section className="section-y bg-onyx border-y border-border/50">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Institutional Chain"
            title={
              <>
                Six layers between <span className="text-gradient-gold">a Kenyan mine gate</span> and your vault.
              </>
            }
            description="Each block states what the institution controls, what to request from your counterparty, and how to verify it. The closing line repeats for every one of them, because it is true for every one of them."
          />
          <div className="mt-12 space-y-6">
            {authorities.map((a, i) => (
              <div key={a.name} className="card-luxe p-7 lg:p-9">
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-display text-4xl text-gradient-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl">{a.name}</h3>
                  <span className="text-xs tracking-[0.25em] uppercase text-gold/70">{a.short}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-4xl">{a.role}</p>
                <div className="mt-6 grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                      What it touches
                    </div>
                    <ul className="space-y-2">
                      {a.controls.map((c) => (
                        <li key={c} className="flex gap-3 text-sm leading-relaxed">
                          <span className="text-gold shrink-0">◆</span>
                          <span className="text-muted-foreground">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
                      What to ask for
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">{a.ask}</p>
                  </div>
                </div>
                <p className="mt-6 pt-5 border-t border-border/60 text-xs text-gold/80 italic">
                  {CONFIRM}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document table */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Buyer's Document Requests"
            title={
              <>
                What to ask a Kenyan counterparty to <span className="text-gradient-gold">produce</span>.
              </>
            }
            description="Ten lines of paper, what each one proves, and where the check is run. Ask for them before a sales agreement is drafted, not after a deposit is requested."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="border-y border-border/60">
                  <th className="text-left py-4 pr-6 font-display text-base w-[30%]">Document</th>
                  <th className="text-left py-4 pr-6 text-xs tracking-[0.25em] uppercase font-normal w-[28%]">
                    What it proves
                  </th>
                  <th className="text-left py-4 text-xs tracking-[0.25em] uppercase font-normal">
                    How you verify it
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {documentTable.map((d) => (
                  <tr key={d.doc}>
                    <td className="py-5 pr-6 align-top">
                      <span className="font-display text-lg">{d.doc}</span>
                    </td>
                    <td className="py-5 pr-6 align-top text-muted-foreground leading-relaxed">{d.proves}</td>
                    <td className="py-5 align-top text-muted-foreground leading-relaxed">{d.verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-xs text-muted-foreground max-w-4xl">
            Sequencing note: the licence, tax and authority records come before commitment; the assay and
            weighing records come before the metal is tendered to a carrier; the customs, airway and insurance
            records come before settlement. Nothing on this table should be requested "after the advance
            payment" — that ordering is the fraud, not the paperwork.
          </p>
        </div>
      </section>

      {/* What we do not publish */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Deliberate Omissions"
            title={
              <>
                Five things a <span className="text-gradient-gold">responsible page</span> will not tell you.
              </>
            }
            description="Every one of these is publishable, would improve this page's search ranking, and would be wrong or unsafe within a season. Here is why each is absent."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {notPublished.map((n) => (
              <div key={n.item} className="card-luxe p-6">
                <h3 className="font-display text-xl mb-3">{n.item}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.why}</p>
              </div>
            ))}
            <div className="border border-gold/30 p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="eyebrow mb-4">Instead</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ask the authority, instruct your broker, or have the Mayfox desk tell you which document to
                  take to which office for authentication. Verifiable process beats a memorised figure.
                </p>
              </div>
              <Link to="/contact" className="btn-outline-gold mt-6 w-full text-center">
                Contact the Trade Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={img.cargoPlane}
            alt="Air freight export from Nairobi"
            className="rounded-sm w-full h-[440px] object-cover"
          />
          <div>
            <SectionHeader
              eyebrow="Provenance"
              title={
                <>
                  Kenyan origin and Great Lakes origin are <span className="text-gradient-gold">two different files</span>.
                </>
              }
              description="Nairobi is a trading and transit hub, so material presented for export here may have been mined in Kenyan goldfields or moved in from the Democratic Republic of Congo, Uganda or Tanzania. The documentary answer differs completely."
            />
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Kenyan-origin material is supported by the licensing and cadastral record of the Kenyan
                  sourcing party, plus the assay, customs and permit documents generated in Nairobi.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Great Lakes-origin material should additionally carry a regional chain-of-custody trail. If
                  provenance is claimed under a regional scheme, verify it with the scheme itself rather than
                  with the trader who supplied the scan.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  A certificate that does not match the declared origin is not a clerical error. It is the most
                  consequential document failure in the pack, because it lands on the importer's declaration.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0">◆</span>
                <span>
                  Scheme membership, certification routes and requirements are not static. For the regional
                  schemes, current requirements must be confirmed directly with the secretariat and the
                  national focal point, since fees, forms and thresholds change.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x max-w-4xl">
          <SectionHeader
            eyebrow="Licensing FAQs"
            title={
              <>
                Questions about <span className="text-gradient-gold">Kenyan gold export licensing</span>.
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
