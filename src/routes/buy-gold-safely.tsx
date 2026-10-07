import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, SectionHeader, Stat } from "../components/site-blocks";
import { breadcrumbSchema, faqSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";
import { Link } from "@tanstack/react-router";

// One source of truth: the same array drives the FAQPage JSON-LD in `head` and
// the visible accordions below, so the structured data can never diverge from
// the rendered text.
const faqs = [
  {
    q: "Is it safe to buy gold from Kenya?",
    a: "Yes, when the transaction runs through a licensed Kenyan dealer or export agent and every step leaves a document trail. Kenya licenses gold dealing and mineral exports, assay is certified by the national standards body and by independent testing houses, and consignments clear customs with a banked flow of funds. The risk in this market comes from unlicensed intermediaries inventing their own process, not from Kenya's legal framework.",
  },
  {
    q: "What should I never pay in advance when buying gold in Kenya?",
    a: "Never pay registration, assay, export permit, storage, transport or 'clearing agent' fees before material has been independently assayed, weighed and documented for your account. Advance-fee requests are the defining feature of most East and West African gold fraud. Genuine costs are either built into the negotiated price, paid to a named authority against an official receipt, or settled against shipping documents.",
  },
  {
    q: "How do I verify a Kenyan gold seller's licence?",
    a: "Ask for the licence held by the dealing or mining entity, the tax PIN certificate and the company incorporation record, then verify each at source rather than reading the scan: licence and cadastral status through the Mining Cadastral Office, tax status with the Kenya Revenue Authority, and incorporation with the Registrar of Companies. Verification routes, forms and fees change, so confirm current requirements directly with each authority or appoint a Nairobi agent to run the searches for you.",
  },
  {
    q: "Who should assay gold before it is exported from Kenya?",
    a: "A named international testing house that both parties instruct — for example SGS, Bureau Veritas, Intertek or Alex Stewart International — or, at the other end, your own refinery. Insist on fire assay of a drilled or cut sample rather than relying only on surface XRF readings or a seller-issued certificate, and write arbitration assay rights into the contract before any metal moves.",
  },
  {
    q: "How is gold legally exported from Kenya?",
    a: "As a fully documented export: quality and assay certification, mineral export authorisation, a customs declaration with tax clearance from the Kenya Revenue Authority, insured carriage with a professional security carrier, and a bank-recognised settlement route for the foreign-exchange side of the transaction. Requirements for each line move, so confirm them directly with the Kenyan authorities and with your freight and banking partners before you book a shipment.",
  },
  {
    q: "Can Mayfox ship gold without export paperwork?",
    a: "No. Mayfox acts as an export agent for licensed Kenyan cooperatives and artisanal miners, and every consignment we touch moves with the complete document set and an independent assay. If a buyer asks us to skip documentation we decline, and if another seller offers to skip it, treat that as disqualifying rather than convenient.",
  },
  {
    q: "What payment terms protect a foreign buyer of Kenyan doré?",
    a: "Settlement only against documents, and only against an assay you instructed or accepted — commonly provisional weight and fineness at origin, with the final payable quantity confirmed by the receiving refinery and the balance released once the export pack is verified. Corporate-to-corporate transfers between KYC-cleared accounts only. Payment into personal accounts, third-party accounts, or accounts that change mid-transaction is a fraud indicator, not an inconvenience.",
  },
];

const roles: { title: string; body: string }[] = [
  {
    title: "What Mayfox is",
    body: "An export agent. We represent licensed Kenyan mining cooperatives and artisanal miners, organise consolidation, assay and clearance, and run the export for institutional buyers.",
  },
  {
    title: "What Mayfox is not",
    body: "We are not a mine owner, not a refiner and not a smelter. The metal belongs to the licensed sourcing parties until it is sold, and refining to 995 or 999.9 happens through partner refineries.",
  },
  {
    title: "What we represent",
    body: "Doré bars in the 85–95% fineness band, plus nuggets and alluvial material from Kenyan goldfields. Refined bars are available through partner refineries for buyers who need them.",
  },
  {
    title: "What we hand you",
    body: "The sourcing party's licence and tax documentation, the independent assay, witnessed weighing records, the export document set, and the carrier and insurance paperwork.",
  },
];

const redFlags: { title: string; body: string }[] = [
  {
    title: "Advance fees of any kind",
    body: "If money must move before metal is assayed and sealed — for permits, storage, assay 'processing', taxes or a 'clearing agent' — stop. It is the single most reliable predictor of a lost deposit.",
  },
  {
    title: "Discounts far below the reference price",
    body: "Gold is a globally priced commodity. A seller offering an implausible margin under the benchmark is not giving you a deal; they are buying your attention. A real doré discount reflects fineness, refining charges and freight, and is explainable line by line.",
  },
  {
    title: "Undocumented consignments",
    body: "'We can move it outside the system, faster' is an offer to make you the exporter of record for material with no provenance. It exposes you to seizure, sanctions and anti-money-laundering liability in your own jurisdiction.",
  },
  {
    title: "Personal or shifting bank accounts",
    body: "Payment instructions to personal accounts, to an entity unrelated to the seller, or that change mid-transaction. Insist on one beneficiary account matching the contracted entity and never deviate from it.",
  },
  {
    title: "Cloned domains and lookalike identities",
    body: "Fraudsters copy the website, email format and licence scans of real, licensed firms. Confirm the domain and mailbox through a second channel, call the registered office, and verify the licence with the issuing authority in Nairobi instead of trusting a PDF.",
  },
  {
    title: "Escrow nominated by the seller",
    body: "An 'escrow agent' introduced by the counterparty, with no verifiable licence and no independent legal review, is a payment step rather than a protection. Appoint your own escrow, or settle against documents.",
  },
  {
    title: "Metal you cannot inspect",
    body: "No viewing, no witnessed weighing, no drill or cut sample, no access for your own surveyor. If the counterparty resists inspection, that resistance is the answer.",
  },
  {
    title: "Documents that cannot be verified at source",
    body: "Reference numbers no authority will confirm, a laboratory that will not authenticate a report on request, 'verification letters' with no contactable issuer. Every genuine document survives verification.",
  },
];

const sequence: { title: string; principle: string; points: string[] }[] = [
  {
    title: "Counterparty licence check",
    principle: "Confirm the entity, not the individual.",
    points: [
      "Obtain the dealing or mining licence held by the Kenyan sourcing party, the tax PIN certificate and the incorporation record.",
      "Verify licence and cadastral status at the Mining Cadastral Office, tax status at the Kenya Revenue Authority and incorporation at the Registrar of Companies — directly, or through a Nairobi lawyer you appoint.",
      "Confirm the person negotiating is named in a board resolution or power of attorney authorising the sale.",
    ],
  },
  {
    title: "Independent assay",
    principle: "Instruct the laboratory yourself, or accept your refinery's assay.",
    points: [
      "A named international testing house performs fire assay on a drilled or cut sample, with sampling witnessed by both parties.",
      "Treat surface XRF readings and seller-issued certificates as indicative only — never as the settlement basis.",
      "Agree payable fineness, the reference price and arbitration assay rights in writing before metal is cast or moved.",
    ],
  },
  {
    title: "Inspected weighing",
    principle: "A number is only worth the witnessing around it.",
    points: [
      "Weighing on calibrated scales, serialised, recorded, and photographed, with your surveyor or the carrier's agent present.",
      "Bar-by-bar serial numbers that then match the packing list, the commercial invoice and the airway bill.",
      "Tamper-evident sealing with the seal number carried onto the certificate.",
    ],
  },
  {
    title: "Export documentation set",
    principle: "The pack must be complete before the consignment is tendered to the carrier.",
    points: [
      "Assay certificate, mineral export authorisation, customs declaration with tax clearance, certificate of origin, commercial invoice, packing list, airway bill and insurance certificate.",
      "Check names, weights, fineness and consignee details for consistency across every line — mismatched paperwork is where liability lands on the buyer.",
      "The line-by-line pack is on our export documentation page; the authority-by-authority chain is on the Kenya gold export licence page.",
    ],
  },
  {
    title: "Insured logistics",
    principle: "Chain of custody does not stop at the airport.",
    points: [
      "Movement by a professional security carrier, with named handlers and a documented custody transfer at every stage.",
      "All-risk cover to the full declared value, with the buyer or its bank noted on the policy.",
      "Arranged by the Kenyan side in advance. A seller who cannot show the carrier contract and the policy has not shipped gold before.",
    ],
  },
  {
    title: "Settlement only against documents",
    principle: "Value transfers when the pack proves the metal moved.",
    points: [
      "Payment from a KYC-cleared corporate account to the contracted entity's account, triggered by the verified document set — not by a phone call.",
      "For doré, a retained balance settled against the receiving refinery's final assay is normal and protects both sides.",
      "No cash settlements, no third-party beneficiaries, no re-direction of funds after the contract is signed.",
    ],
  },
];

const checklist: { group: string; items: string[] }[] = [
  {
    group: "Before you commit",
    items: [
      "Licence, tax PIN and incorporation documents obtained from the Kenyan sourcing party",
      "Those documents verified at source, not accepted from scanned copies",
      "Authority of the signatory confirmed in writing",
      "Sanctions, adverse-media and beneficial-ownership screening completed",
      "Named international testing house agreed and instructed",
      "Payable fineness, reference price and discount basis agreed in writing",
    ],
  },
  {
    group: "Before the metal moves",
    items: [
      "Sampling and assay witnessed — drill or cut samples, not surface readings alone",
      "Weighing inspected and recorded, bars serialised and sealed",
      "Mineral export authorisation, assay certificate and certificate of origin issued",
      "Customs declaration filed and tax clearance confirmed",
      "Security carrier and all-risk insurance booked, with the buyer noted on the policy",
      "Your own surveyor or agent present at handover to the carrier",
    ],
  },
  {
    group: "Before you settle",
    items: [
      "Full document set received and cross-checked for consistent names, weights and fineness",
      "Document references confirmed independently with the issuing authorities and laboratory",
      "Payment route verified as the contracted entity's own corporate account",
      "Retention against receiving-refinery final assay agreed and reflected on the invoice",
      "Arbitration forum, governing law and venue settled in the contract",
      "Compliance file closed: provenance, source-of-funds and due-diligence records archived",
    ],
  },
];

const related: { to: string; label: string; desc: string }[] = [
  {
    to: "/kenya-gold-export-license",
    label: "Kenya gold export licence",
    desc: "Which Kenyan institutions sit on a doré export, what each controls, and what to ask a counterparty to produce.",
  },
  {
    to: "/export-documentation",
    label: "Export documentation",
    desc: "The document set that accompanies a lawful consignment out of Nairobi, line by line.",
  },
  {
    to: "/compliance",
    label: "Compliance framework",
    desc: "KYC, AML, sanctions screening, responsible sourcing and audit-ready record keeping.",
  },
  {
    to: "/anti-fraud",
    label: "Anti-fraud warning",
    desc: "The scripts circulating in this market, why they work, and how each one is dismantled.",
  },
];

export const Route = createFileRoute("/buy-gold-safely")({
  head: () => {
    const seo = pageSeo({
      title: "Buy Gold in Kenya Safely: Buyer Due-Diligence Guide",
      description:
        "How institutional buyers source Kenyan gold doré and nuggets safely: licence checks, independent assay, inspected weighing, export documents and settlement.",
      path: "/buy-gold-safely",
      keywords:
        "buy gold in kenya safely, kenya gold for sale, gold doré kenya, is buying gold from africa safe, kenyan gold dealer verification, gold due diligence, gold assay kenya, kenya gold export, buy doré bars, gold fraud red flags, kenya gold buyer guide, independent assay, settlement against documents",
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
              { name: "Buying Gold Safely", path: "/buy-gold-safely" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      ],
    };
  },
  component: BuyGoldSafely,
});

function BuyGoldSafely() {
  return (
    <>
      <PageHero
        eyebrow="Buyer Due Diligence"
        title={
          <>
            How to buy gold in Kenya <span className="text-gradient-gold">safely</span>.
          </>
        }
        subtitle="The institutional sourcing process, the red flags that end a conversation, and the six verification steps a refinery, bullion bank, dealer or jeweller should run before money or metal moves."
        image={img.goldNuggets}
      />

      {/* The honest position */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.25fr_1fr] gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="The Honest Position"
              title={
                <>
                  Kenya is a regulated gold market.{" "}
                  <span className="text-gradient-gold">Most of the fraud in it is not Kenyan.</span>
                </>
              }
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                Gold mined in Migori, Kakamega, West Pokot and Turkana is dealt and exported lawfully.
                Licensed cooperatives and permitted artisanal miners sell to licensed dealers and export
                agents, an independent laboratory certifies the fineness, the consignment clears customs
                against tax documentation, and the proceeds move through the banking system. That chain is
                why refiners, bullion banks and jewellers source from East Africa at all.
              </p>
              <p>
                The losses in this market come from a different population entirely: intermediaries with no
                licence and no metal, who borrow the identity of real firms, promise prices no refinery could
                justify, and structure the deal so the buyer pays first. They operate across the region and
                target buyers who search for "gold for sale in Africa" rather than buyers who look for a
                specific, verifiable counterparty.
              </p>
              <p>
                So the real question is never whether Kenya is safe. It is whether the counterparty in front
                of you sits inside the regulated chain — and whether you can prove that before you commit.
                Below is the sequence we would ask any buyer to run, including one buying from us.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                <Stat value="85–95%" label="Doré fineness we represent" />
                <Stat value="6" label="Verification steps, in order" />
                <Stat value="18" label="Checklist lines below" />
              </div>
            </div>
          </div>
          <aside className="card-luxe p-7">
            <div className="eyebrow mb-4">Trade Desk</div>
            <h3 className="font-display text-2xl mb-3">Ask us to prove it first</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Before a commercial discussion goes further, the Mayfox desk will set out the sourcing party's
              documentation, the laboratory you nominate, and the settlement structure you require.
              Verification requests are handled under confidentiality.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="tel:+254754979755" className="block hover:text-gold">
                <span className="text-gold">Call:</span> +254 754 979 755
              </a>
              <a href="mailto:sales@mayfox.co.ke" className="block hover:text-gold">
                <span className="text-gold">Email:</span> sales@mayfox.co.ke
              </a>
            </div>
            <Link to="/request-quote" className="btn-gold btn-gold-hover mt-6 w-full text-center">
              Request a Quote
            </Link>
            <Link to="/anti-fraud" className="btn-outline-gold mt-3 w-full text-center">
              Read the Fraud Warning
            </Link>
          </aside>
        </div>
      </section>

      {/* Roles */}
      <section className="section-y bg-onyx border-y border-border/50">
        <div className="container-x">
          <SectionHeader
            eyebrow="Know Your Counterparty"
            title={
              <>
                Who does what in a <span className="text-gradient-gold">Kenyan doré export</span>.
              </>
            }
            description="Much of the confusion in this market is a vocabulary problem. Separate the roles and the due diligence writes itself."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {roles.map((r) => (
              <div key={r.title} className="card-luxe p-6">
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Role</div>
                <h3 className="font-display text-xl mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
            A note on wording: we describe ourselves as an export agent for licensed Kenyan cooperatives and
            artisanal miners. A party calling itself a Nairobi "refinery" while offering unrefined doré at a
            deep discount deserves a harder look, not a faster wire.
          </p>
        </div>
      </section>

      {/* Red flags */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Red Flags"
            title={
              <>
                Eight signals that <span className="text-gradient-gold">end the conversation</span>.
              </>
            }
            description="Each of these has cost a real buyer real money. Any one is enough to stop; two is a reason to report the counterparty rather than merely decline it."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {redFlags.map((f, i) => (
              <div key={f.title} className="border border-destructive/25 bg-destructive/[0.04] p-7 rounded-sm">
                <div className="font-display text-xs text-destructive tracking-[0.3em] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 card-luxe p-7">
            <h3 className="font-display text-xl mb-2">The common thread</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
              Every red flag above inverts the correct order of operations. In a legitimate trade the metal is
              verified, documented and moved, and only then does value transfer. In a fraud value is asked to
              transfer first, and verification is always one step away — tomorrow, after the fee, once the
              permit clears. Our anti-fraud page collects the specific scripts circulating in this market and
              how each one is dismantled.
            </p>
            <Link to="/anti-fraud" className="btn-outline-gold mt-6">
              Anti-Fraud Warning
            </Link>
          </div>
        </div>
      </section>

      {/* Verification sequence */}
      <section className="section-y border-t border-border/50 bg-onyx/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Verification Sequence"
            title={
              <>
                Six steps, in the <span className="text-gradient-gold">only order that works</span>.
              </>
            }
            description="Run them out of sequence and you have created a gap someone else will monetise. Each step states what to check, what to request, and what a clean result looks like."
          />
          <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {sequence.map((s, i) => (
              <div key={s.title} className="grid lg:grid-cols-[110px_1fr_1.15fr] gap-6 py-9">
                <div className="font-display text-4xl text-gradient-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-gold/80 italic">{s.principle}</p>
                </div>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-gold shrink-0">◆</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Buyer Checklist"
            title={
              <>
                The <span className="text-gradient-gold">due-diligence checklist</span>, as we work it.
              </>
            }
            description="Eighteen lines. Tick every one before the first dollar moves, and refuse a counterparty who objects to any of them. The trade desk will send this as a working document, pre-populated with the pack a licensed Kenyan export should produce."
          />
          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {checklist.map((c, i) => (
              <div key={c.group} className="card-luxe p-7">
                <div className="eyebrow mb-5">Stage {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl mb-6">{c.group}</h3>
                <ul className="space-y-4">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 w-4 h-4 shrink-0 border border-gold/60 rounded-[2px]" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/request-quote" className="btn-gold btn-gold-hover">
              Request the Checklist Pack
            </Link>
            <Link to="/export-documentation" className="btn-outline-gold">
              See the Document Set
            </Link>
          </div>
        </div>
      </section>

      {/* Internal mesh */}
      <section className="section-y border-t border-border/50 bg-onyx/50">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={img.inspection}
            alt="Witnessed inspection and weighing of gold bars before export"
            className="rounded-sm w-full h-[460px] object-cover"
          />
          <div>
            <SectionHeader
              eyebrow="Where the Paper Trail Leads"
              title={
                <>
                  Four pages that finish <span className="text-gradient-gold">this answer</span>.
                </>
              }
              description="A buyer's due diligence never lives on one page. Each link opposite answers the question that comes immediately after the one before it."
            />
            <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
              {related.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="group block py-5">
                    <span className="font-display text-lg group-hover:text-gold transition-colors">
                      {r.label}
                    </span>
                    <span className="text-gold ml-2">→</span>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs — visible text mirrors the FAQPage schema above */}
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <SectionHeader
            eyebrow="Questions Buyers Ask"
            title={
              <>
                Buying gold in Kenya, <span className="text-gradient-gold">answered plainly</span>.
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

      <CTABand />
    </>
  );
}
