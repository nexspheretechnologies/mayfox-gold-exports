// Long-form buyer education for the Mayfox insights library.
//
// NOTE ON DATES: the `published` and `updated` values below are the dates these
// pieces actually went live on the site. If an article is materially revised, update
// `updated` to the revision date — search engines treat dateModified as a freshness
// signal and a mismatch between the visible date and the CMS record undermines it.
//
// NOTE ON CONTENT: no market prices, tonnages, growth rates, named transactions or
// client names appear in these articles. Where a number would normally sit, the text
// explains the mechanism or the arithmetic instead and directs the reader to confirm
// current figures with the trade desk or the relevant authority.

export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export interface ArticleAuthor {
  name: string;
  bio: string;
  type: "Organization";
}

export interface SiteArticle {
  slug: string;
  title: string;
  dek: string;
  category: string;
  published: string;
  updated: string;
  author: ArticleAuthor;
  readMinutes: number;
  body: ArticleBlock[];
}

// Bylined to the desk rather than to an individual: the work is institutional
// (sourcing, assay liaison, licensing, logistics) and no single person owns it.
const tradeDesk: ArticleAuthor = {
  name: "Mayfox Trade Desk",
  bio: "The Mayfox Trade Desk is the licensed export team at Mayfox Gold and Precious Metals Kenya, covering sourcing, assay liaison, export documentation, secure logistics and settlement for institutional buyers of East and Central African gold.",
  type: "Organization",
};

export const articles: SiteArticle[] = [
  {
    slug: "dore-pricing-lbma-spot-refine-yield",
    title: "How Doré Pricing Relates to LBMA Spot and Refine Yield",
    dek: "Doré is never bought on the number printed on the balance ticket. It is bought on contained fine gold, less the cost of recovering it — and the gap between those two figures is where every doré negotiation actually happens.",
    category: "Pricing & Settlement",
    published: "2026-09-24",
    updated: "2026-09-24",
    author: tradeDesk,
    readMinutes: 11,
    body: [
      {
        type: "p",
        text: "A doré bar is a half-finished product. It has been smelted at or near source, so most of the gangue material has been driven off, but the gold inside it has not yet been separated from its silver, copper, platinum-group and residual base-metal companions. Because the composition is unknown until the bar is sampled, assayed and finally refined, no rational buyer prices doré the way they price a refined bar. The price is always a derivation: a share of a benchmark gold price, adjusted for the fine gold the parties expect to recover, and then adjusted again for the cost of recovering it. Most disputes in doré trading trace back to one side quoting in gross metric weight while the other side is thinking in contained fine gold, so it is worth spelling the derivation out in full.",
      },
      { type: "h2", text: "Gross weight, fineness, and the number that gets priced" },
      {
        type: "p",
        text: "Two measurements travel with every doré parcel. Gross weight is the mass of the bars as they come off the casting floor, recorded on a calibrated balance and witnessed. Fineness, usually expressed as parts per thousand, is the share of that mass which is gold. Multiplying the two and dividing by one thousand gives the fine gold weight — also called contained or payable gold — and it is that derived third figure, not the gross weight, that the invoice is built on.",
      },
      {
        type: "p",
        text: "The difficulty is that the two inputs have very different confidence intervals. Weight is easy: a balance ticket, on a scale calibrated against test weights, witnessed by both parties or by an independent surveyor. Fineness is harder. A hand-held X-ray fluorescence scan reads a surface skin and is vulnerable to a richer or leaner layer near the exterior of a poured bar. Fire assay of a properly prepared sample — drilled, cut or crushed, then homogenised so the laboratory splits a representative sub-sample — is the reference method for doré, and a buyer should treat any fineness produced by surface scan alone as provisional, however authoritative the paperwork looks. Most structures therefore run two assay events: an indicative result that sets the provisional invoice, and a conclusive refinery result that sets the final one.",
      },
      { type: "h2", text: "Which benchmark price, and taken when" },
      {
        type: "p",
        text: "Refined gold has no single price; it has a family of screens. The London benchmarks administered for the LBMA auctions are the reference most East African doré contracts settle against, with some desks preferring a COMEX-derived level or a local spot quote from a trading hub. All of these are legitimate bases — the problem is that they are not identical, and a term sheet that says only 'at market' has said nothing at all.",
      },
      {
        type: "p",
        text: "Before comparing two quotes, pin down the variables that get bundled into a single pricing clause:",
      },
      {
        type: "list",
        items: [
          "The screen: which published benchmark is authoritative, and the exact publication name as it appears in the contract.",
          "The session: London operates a morning and an afternoon auction; they are different numbers on the same day, and a contract has to choose one or average them.",
          "The date: the invoice date, the export date, the shipment date and the refinery-result date can fall on four different days, and the exposed leg changes depending which governs.",
          "The currency and conversion: a dollar benchmark against a euro or shilling invoice requires a stated reference rate and a stated source for it.",
          "The fallback: what happens when the chosen benchmark is not published, or is published late.",
        ],
      },
      { type: "h2", text: "Refine yield: the deductions between benchmark and invoice" },
      {
        type: "p",
        text: "Once fine gold is valued at the benchmark, the refinery's work is deducted. The vocabulary varies between desks, but four categories cover it. Treatment charges pay for breaking the bar down chemically. Refining charges pay for producing the finished metal, and are frequently quoted per unit of contained gold rather than as a percentage, so they behave differently as the gold price moves. Recovery is the assumption that the refinery captures a share of the contained gold just short of complete — losses at this level are real and inevitable in any smelting or electrolytic process. Then come penalty schedules for elements the refinery does not want: copper, iron, lead, tellurium and excess silver each have their own arithmetic.",
      },
      {
        type: "p",
        text: "Silver deserves separate attention in an East African context. A doré bar carrying significant silver is not a discount — the silver is itself a saleable metal, and whether a buyer sees value from it depends on whether the contract pays a separate silver differential at a stated benchmark, or folds it into the gold deduction and keeps quiet about it.",
      },
      {
        type: "quote",
        text: "The two quote formats — an all-in discount per fine ounce from the benchmark, versus a payable-gold percentage plus separately itemised charges — give different answers at different gold prices. Fix the format, not just the number.",
      },
      { type: "h2", text: "A worked illustration of the arithmetic" },
      {
        type: "p",
        text: "The table below sets out the sequence with labelled inputs rather than invented values. Substitute the figures from your own balance ticket, assay certificate and term sheet; nothing here is a quotation.",
      },
      {
        type: "table",
        head: ["Step", "Input it uses", "What it produces"],
        rows: [
          ["1. Gross weight", "Witnessed balance ticket for the lot", "Total bar mass in kilograms or grams"],
          ["2. Fineness", "Fire assay of a homogenised sample", "Grams of gold per thousand of gross mass"],
          ["3. Fine gold", "Gross weight multiplied by fineness, divided by one thousand", "Contained gold — the quantity actually priced"],
          ["4. Benchmark value", "Fine gold in troy ounces multiplied by the agreed screen price", "Gross metal value before deductions"],
          ["5. Deductions", "Treatment, refining, recovery shortfall, penalty elements, credited silver", "Net payable value"],
          ["6. Settlement", "The pricing date and FX named in the contract, plus the reconciliation assay", "Final amount wired against documents"],
        ],
      },
      { type: "h2", text: "Provisional invoice, final settlement" },
      {
        type: "p",
        text: "Because the conclusive refinery result arrives days or weeks after the metal has moved, the first payment is almost always provisional: a percentage of the fine gold valued at the pricing date, paid against the export document pack, with the balance — in whichever direction it falls — settled within a stated number of business days after the refinery certificate. Two things make that work in practice. The provisional percentage has to be low enough that the outstanding balance still has teeth if the assay comes in lean, and the settlement window has to be short enough that the reconciliation is not itself a currency exposure. Percentages and day counts are commercial terms; confirm current figures with the trade desk rather than assuming them from a template.",
      },
      { type: "h2", text: "Where price risk sits while the metal is in transit" },
      {
        type: "p",
        text: "Between the pricing date and the settlement date the benchmark moves, and someone is exposed. Fix the price early and the seller carries the risk that the metal refines richer than assumed; fix it late and the buyer carries the risk that a rising market makes the provisional payment look generous in hindsight. Neither allocation is unfair, but an unmanaged one is dangerous: a seller who watched the gold price run after locking a sale has an incentive to reopen the fineness discussion. Ask whether the counterparty hedges the exposed leg — normally by a forward sale at the moment the pricing date is fixed — and how that hedge interacts with the settlement window.",
      },
      { type: "h2", text: "Questions to put to any doré seller before funding a parcel" },
      {
        type: "list",
        items: [
          "Is your quote built on gross weight or on contained fine gold, and can you show the derivation on one page?",
          "Which assay method produced the fineness you are quoting, and who prepared the sample?",
          "Which benchmark, which session and which date fixes the price — and what is the fallback if it is not published?",
          "Are treatment and refining charges itemised separately from the recovery assumption, or bundled into one discount?",
          "How is silver above the threshold treated — credited at a separate benchmark, or absorbed?",
          "What percentage is provisional, and how many business days after the refinery certificate does the balance settle?",
          "Is the exposed leg of this sale hedged, and by whom?",
        ],
      },
      {
        type: "p",
        text: "A seller who answers all seven in one conversation is running a mature desk. One who answers four and offers to send the contract later is asking you to underwrite the arithmetic yourself — which is fine, provided you know that is what you are doing.",
      },
    ],
  },
  {
    slug: "reading-a-gold-assay-report",
    title: "Reading a Gold Assay Report: What Every Line Actually Tells You",
    dek: "Sampling method, uncertainty range, accreditation scope, and the difference between a surface scan and a fire assay — the six checks that decide whether an assay report is evidence or decoration.",
    category: "Assay & Quality",
    published: "2026-08-27",
    updated: "2026-09-10",
    author: tradeDesk,
    readMinutes: 10,
    body: [
      {
        type: "p",
        text: "An assay report is the single document most likely to be leaned on in a gold transaction, and the single document most often read badly. Buyers look at one number on it — the fineness — and treat the rest as authentication. But the fineness figure on a certificate is only as good as everything that came before it: how the sample was taken, what was prepared, which method was run, against what standards, by a laboratory accredited to do what. Those upstream facts are what determine whether the report is evidence or decoration.",
      },
      {
        type: "p",
        text: "This piece is written for the commercial or compliance person at a refinery, bullion bank or trading house who receives assay paperwork and has to make payment decisions on it. It is not a laboratory manual, and specifications move: verify current requirements directly with the issuing laboratory and the accreditation body.",
      },
      { type: "h2", text: "Sampling decides everything, and sampling is rarely your problem to solve" },
      {
        type: "p",
        text: "Analytical chemistry can be extraordinarily precise on the material a laboratory actually receives. It cannot tell you anything about the material left outside the laboratory. A doré bar poured into a mould cools unevenly and gold segregates as the melt solidifies, so the exterior, the base and the centre can differ meaningfully in composition. Any single-point measurement of an un-homogenised bar is a measurement of one place in it, not of the bar.",
      },
      {
        type: "p",
        text: "For a single refined investment bar the risk is modest, because the finished product is cast to a declared specification and the manufacturer's process controls close most of the gap. For doré, nuggets, alluvial grain or any un-homogenised lot, the sampling protocol is the transaction. Standard practice runs through cutting or drilling multiple points, crushing, then reducing the crushed material to a laboratory sub-sample by cone-and-quartering or a mechanical riffler, so the few grams the assayer melts represent the material that was sampled. If a report does not describe or attach the sampling and preparation method, the fineness figure has no stated basis.",
      },
      { type: "h2", text: "Fire assay, XRF and cupellation: three answers to three questions" },
      {
        type: "p",
        text: "Different methods exist because they answer different questions, and the terminology on a report should tell you which question was asked.",
      },
      {
        type: "table",
        head: ["Method", "What it measures", "Where it belongs", "Where it fails"],
        rows: [
          ["Fire assay", "Total gold content of a prepared sample", "The reference method for doré and bullion settlement", "Worthless if the sample was not representative; slow"],
          ["X-ray fluorescence (XRF)", "Elemental composition of a shallow surface layer", "Rapid screening and consistency checks across a stack", "Reads a skin, not the interior; not a settlement basis"],
          ["Cupellation and parting", "Separation of noble from base metal, gold from silver", "The confirmation step inside a fire assay sequence", "Tells you nothing about material it did not receive"],
          ["ICP finish", "Dissolved concentrations at low detection limits", "Gold in a parted solution; impurity reporting", "Depends on whether dissolution got everything into solution"],
        ],
      },
      {
        type: "p",
        text: "A well-run certificate states the method for each reported element and shows both the screening and the confirmatory result where both exist. A lot described as 'XRF tested' with no fire assay anywhere in the file is a screening pack, not an assay pack, and should be provisioned accordingly.",
      },
      { type: "h2", text: "Fineness, karats, and the difference between 995 and 999.9" },
      {
        type: "p",
        text: "Fineness is a parts-per-thousand statement of the gold proportion: nine-nines-five means 99.5 percent gold by mass, four-nines means 99.99 percent. Karat is a coarser twelve-part convention mostly used in jewellery trade; a piece described as 22 karat is roughly but not precisely 916, and the rounding matters once money attaches to it. Insist that every figure in a cross-border pack is expressed in fineness, in the same unit, because mixed conventions are a routine source of small disputes that escalate. And note what a four-nines figure does not say: it describes gold content, not origin, not packaging integrity, and not whether the feedstock was responsibly sourced.",
      },
      { type: "h2", text: "Uncertainty ranges are not a confession — they are the point" },
      {
        type: "p",
        text: "Every honest measurement carries an estimate of its own error. A report that gives a fineness with no stated uncertainty, no detection limits and no reference to how many sub-samples were run is not more confident than one that does; it is less informative. What a buyer should look for is a statement of expanded uncertainty at a stated coverage level, the number of determinations behind the reported figure, and the detection limits for the impurity elements that attract penalties.",
      },
      {
        type: "p",
        text: "Two laboratories can both be correct and still produce different numbers on the same material, if they sampled different points, used different sub-sample masses, or finished by different techniques. That is why a settlement contract defines a tolerance and a tie-break method rather than pretending one number will arrive: two labs run the same prepared sample, results inside a stated band are averaged, results outside it go to a third agreed laboratory at the losing party's cost. If your agreement has no such clause, add it before the metal moves.",
      },
      { type: "h2", text: "Accreditation, scope, and the number you should verify" },
      {
        type: "p",
        text: "ISO/IEC 17025 is the competence standard for testing and calibration laboratories. Accreditation is not a blanket endorsement: it is issued against a scope listing the specific methods the assessor examined, so a laboratory can be legitimately accredited and still not accredited for the method you are relying on. Read the accreditation number off the report and confirm the method appears in that laboratory's published scope, rather than accepting a logo.",
      },
      {
        type: "list",
        items: [
          "Identify the laboratory by name and address, not just brand — names get borrowed loosely in this trade.",
          "Check the accreditation number's current status and scope with the issuing accreditation body.",
          "Confirm the report references the specific method version used, not a generic technique name.",
          "Confirm sample identifiers on the report match the seal or tag identifiers on the shipment paperwork.",
          "Treat a certificate that arrives only as a photograph, with no verifiable report number, as an image of a document rather than a document.",
        ],
      },
      { type: "h2", text: "The chain of custody of the sample itself" },
      {
        type: "p",
        text: "A perfectly executed assay on a tampered sample is worthless. The credible sequence is short and mechanical: witnessed collection and sealing with unique identifiers; a documented split between buyer's and seller's portions so each side can test independently; witnessed preparation and homogenisation; sub-samples delivered under seal by a party with no commercial interest in the result; and an archive portion retained so a later dispute can be re-run on original material rather than on a memory. Any step nobody signed for is a step that will be argued about later. Where the metal travels under a secure carrier, the sample travels with it and the seals are photographed at each handover.",
      },
      { type: "h2", text: "Red flags worth stopping a payment over" },
      {
        type: "list",
        items: [
          "A fineness that sits exactly on a round figure across an entire lot of un-refined material.",
          "One report covering many different parcels, with the same numbers repeated.",
          "A screening method quoted as the settlement basis with no confirmatory assay alongside it.",
          "A laboratory whose scope does not include the method the report claims to have used.",
          "Sample identifiers on the certificate that do not match the seal numbers on the packing list.",
          "A seller who resists the buyer appointing or witnessing the assayer.",
        ],
      },
      { type: "h2", text: "What a buyer should require before funds move" },
      {
        type: "p",
        text: "The minimum defensible pack for un-refined East African material is a witnessed weight ticket; a documented sampling and preparation method; a fire assay report from an accredited laboratory whose scope covers that method, with stated uncertainty; a retained archive portion; and the right to appoint or witness a second laboratory. For refined delivery, add the manufacturer's declaration and the serial-number schedule reconciled to the packing list. Every one of those is cheap against a parcel that does not refine as promised — and a counterparty who finds the pack unreasonable is telling you how their file usually looks.",
      },
      {
        type: "quote",
        text: "The question an assay report should answer is not 'how pure is this?' but 'how do we know, who prepared the sample, and what happens if two laboratories disagree?'",
      },
      {
        type: "p",
        text: "Assay standards, accreditation scopes and laboratory methods are revised; verify specifics directly with the issuing laboratory, the accreditation body and the receiving refinery. The Mayfox trade desk arranges independent assay on every export consignment and works alongside a buyer-appointed surveyor.",
      },
    ],
  },
  {
    slug: "kenya-gold-export-document-set",
    title: "The Kenyan Gold Export Document Set, Explained",
    dek: "Licence, permit, assay, certificate of origin, invoice, packing list, airway bill and insurance: who issues each paper, in what sequence, and what a buyer should have in hand before funds move.",
    category: "Export Process",
    published: "2026-07-16",
    updated: "2026-07-16",
    author: tradeDesk,
    readMinutes: 10,
    body: [
      {
        type: "p",
        text: "Gold leaves Kenya on paper. The metal is the easy part; it sits still and does not argue. What determines whether a consignment reaches a refinery in Dubai, Zurich or London without being held at a window is a stack of documents that have to agree with each other, be issued by the right bodies, in a workable order, with names and numbers that match from the first line of the invoice to the seal number on the last crate.",
      },
      {
        type: "p",
        text: "This article is a buyer's walkthrough of that stack: what each document is for, who normally issues it, and what it is telling you about the shipment behind it. Procedures and forms in Kenyan mining and customs administration do change, so every specific requirement below should be verified directly with the issuing authority and with the freight forwarder or security carrier handling the movement. Nothing here is legal advice, and nothing here substitutes for a licensed clearing agent.",
      },
      { type: "h2", text: "The sequence matters more than the list" },
      {
        type: "p",
        text: "A common buyer mistake is to treat the document pack as a checklist gathered in parallel. In reality the papers are chronologically dependent, and each constrains the next. Sourcing records and the seller's licence position come first, because the authorities will not clear a consignment whose origin cannot be evidenced. Weighing and sampling follow, because the assay describes the specific material that was weighed and sampled. The assay supports the export authorisation application; the authorisation supports the customs declaration; the declaration supports the airway bill; and the airway bill with the declaration together support the insurance certificate. Break that chain anywhere, and the delay surfaces at the airport rather than in the office.",
      },
      {
        type: "p",
        text: "For a buyer, the chronology is a diagnostic. A pack where every date is internally consistent, where the assay precedes the permit, and the permit precedes the airway bill, is a pack that was assembled as the shipment happened. A pack where the dates are awkward — an insurance certificate older than the airway bill, an assay report dated after departure — was most likely assembled after the fact, and that is worth a question.",
      },
      { type: "h2", text: "The documents, one by one" },
      {
        type: "table",
        head: ["Document", "Normally issued by", "What it evidences to a buyer"],
        rows: [
          ["Mining or dealer licence", "The Kenyan mining authority or relevant regulator", "That the seller is permitted to hold and trade the metal at all"],
          ["Sourcing and purchase records", "The licensed aggregator, buying centre or cooperative", "Where the gold came from and who handled it before export"],
          ["Weight ticket", "The weighing facility, in a witnessed session", "Gross mass of the lot, before fineness is applied"],
          ["Assay report", "An independent accredited laboratory", "Composition of the sampled material, with method and uncertainty"],
          ["Export authorisation or permit", "The ministry with responsibility for mining, per shipment", "That the state authorised this quantity to leave, to this consignee"],
          ["Certificate of origin", "The designated issuing or endorsing body", "Kenyan origin or processing, for tariff and sanctions purposes"],
          ["Commercial invoice and packing list", "The exporter, reconciled to weight and assay papers", "Parties, quantity, fineness basis, Incoterm, and crate or seal identifiers"],
          ["Customs declaration and clearance", "Kenya Revenue Authority, filed by a licensed clearing agent", "That the export passed through the border formalities, not around them"],
          ["Airway bill and handover records", "The operating carrier and the specialist precious-metals carrier", "Who accepted the consignment, on which flight, and who held it at each transfer"],
          ["Insurance certificate", "The underwriter or broker acting for the cargo owner", "Insured value, scope of transit, and who the loss payee is"],
          ["KYC and due-diligence pack", "The exporter's compliance function", "Beneficial ownership, source, screening results and risk assessment"],
        ],
      },
      { type: "h2", text: "Licence first, and licence for the right activity" },
      {
        type: "p",
        text: "Kenya regulates the dealing, trading, holding, processing and export of gold as distinct activities, and a licence that authorises one does not automatically authorise another. A buyer's first question to any Kenyan counterparty is therefore not 'are you licensed?' but 'which of these are you licensed to do, and does that cover the step you are taking here?'. The mining cadastre and the ministry with responsibility for mining are the places to verify current status, and a legitimate exporter expects the question rather than resenting it.",
      },
      {
        type: "p",
        text: "Then check the licence itself. A photocopy with no verifiable number is a feature of fraudulent trades, and verification usually takes one call and an official reference. Licence numbers on the export authorisation, the invoice and the packing list must be the same number; mismatches there are a frequent cause of a consignment being held at the export window.",
      },
      { type: "h2", text: "The assay report as the spine of the pack" },
      {
        type: "p",
        text: "The assay report is where the document set and the pricing set intersect. It supplies the fineness the provisional invoice is calculated from, and its sample identifiers have to appear on the packing list, the export authorisation and the airway bill description. From a documentation angle the checks are narrower than the analysis itself: does the material described reconcile, in weight and identifier, to the material being shipped, and does the laboratory hold accreditation covering the method it claims?",
      },
      { type: "h2", text: "Customs, HS classification and duty position" },
      {
        type: "p",
        text: "Gold exports are declared to Kenya Revenue Authority customs through a licensed clearing agent, against the Harmonised System classification appropriate to the form the metal is in — un-wrought, semi-manufactured or powder — since that classification drives both the declaration and the receiving country's treatment. Royalty, withholding and value-added-tax positions move with fiscal policy, so a buyer should never carry a duty assumption forward from a previous trade. Have the clearing agent confirm the current treatment in writing for this consignment, and have the importer's own broker confirm destination entry requirements before the metal leaves Nairobi. Import-side surprises — dealer registration, sanctions declarations, cash-reporting thresholds — cost the most time, because they surface after the shipment has landed.",
      },
      { type: "h2", text: "Carriage and cover" },
      {
        type: "p",
        text: "The airway bill is a contract of carriage, not proof of insurance and not proof of ownership. It names carrier, shipper, consignee and notified party, and describes the goods as the shipper declared them — which is why that description must match the packing list exactly, down to seal numbers. The security leg before the apron is normally handled by a specialist precious-metals carrier rather than a general forwarder, and its handover records are what make the custody chain auditable.",
      },
      {
        type: "p",
        text: "Insurance for gold in transit is a specialist line, priced per movement and written with conditions. Read three things on the certificate before treating the cargo as covered: the insured value and how it is calculated, the scope of the transit (vault-to-vault, apron-to-apron, or warehouse-to-warehouse), and who is named as loss payee. A certificate naming the seller as loss payee protects the seller, not you — and where your own policy and the shipper's overlap, that is not extra safety but a claim dispute waiting to happen.",
      },
      { type: "h2", text: "The compliance pack" },
      {
        type: "p",
        text: "The know-your-customer and due-diligence material is what a buyer's own compliance department will care about most, and what counterparty sales teams most often treat as an afterthought. At minimum it covers identity and beneficial ownership of every entity in the chain, the physical source of the material, sanctions screening, and a documented risk assessment for the specific origin. Where feedstock came from artisanal and small-scale mining, the OECD-derived questions apply in full.",
      },
      {
        type: "quote",
        text: "The document set is not a formality that surrounds the trade. For a Kenyan gold export, the document set is the trade — the metal is simply the thing the paperwork describes.",
      },
      { type: "h2", text: "A buyer's pre-funding review sequence" },
      {
        type: "list",
        items: [
          "Verify the exporter's licence covers the activity, by number, with the issuing authority.",
          "Confirm every document carries the same exporter name, licence number and consignee name.",
          "Check the chronology: assay before authorisation, authorisation before customs, customs before carriage.",
          "Reconcile weights across weight ticket, invoice, packing list, airway bill and declaration.",
          "Match sample and seal identifiers across the assay report, packing list and carrier records.",
          "Read the insurance certificate for value, scope of transit and named loss payee.",
          "Have the destination broker confirm import entry requirements in writing before dispatch.",
        ],
      },
      {
        type: "p",
        text: "Kenyan export requirements, forms, fees and institutional responsibilities change, so verify the specifics directly with the ministry with responsibility for mining, the mining cadastre, Kenya Revenue Authority, the Kenya Bureau of Standards and the carrier handling the movement. Mayfox assembles the full pack on every consignment we export and releases scans on dispatch confirmation, with originals travelling with the cargo.",
      },
    ],
  },
  {
    slug: "artisanal-gold-oecd-due-diligence",
    title: "Sourcing Artisanal and Small-Scale Gold Under OECD Due Diligence",
    dek: "The five-step framework is not a certificate you attach to a shipment. It is a documented way of running a supply chain — and a buyer can ask for the evidence of each step.",
    category: "Compliance",
    published: "2026-06-11",
    updated: "2026-06-11",
    author: tradeDesk,
    readMinutes: 11,
    body: [
      {
        type: "p",
        text: "A large share of the world's gold comes out of the ground by hand. In East and Central Africa, artisanal and small-scale mining is not a marginal activity; it is the dominant form of extraction in many goldfields, and it is where a serious sourcing programme has to engage with the reality of the chain rather than with the tidy version that appears on an invoice. It is also where the reputational and legal risk concentrates.",
      },
      {
        type: "p",
        text: "The framework most of the industry works to is the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. It is not a law in itself and it does not issue certificates. It is a set of expectations, organised into five steps, that downstream companies are asked to embed in how they actually operate — expectations that then get picked up by refinery accreditation schemes, by regulation in importing jurisdictions, and by a buyer's own compliance policy. This article walks the five steps as a buyer will encounter them in a real doré transaction, and says what evidence each step should leave behind.",
      },
      { type: "h2", text: "Step one: build the management system you can be audited against" },
      {
        type: "p",
        text: "The first step is internal and unglamorous. A company that puts gold into its supply chain is expected to have a stated policy communicated to its suppliers; internal roles with someone accountable rather than a shared inbox; a system of controls and transparency over the chain; a route for suppliers to raise problems without ending the relationship; and record-keeping over a defined retention period, including a grievance channel that has actually been used at least once, because a channel nobody has touched is evidence of nothing.",
      },
      {
        type: "list",
        items: [
          "A supply-chain policy that names the framework it is based on, rather than describing good intentions.",
          "A named owner for due diligence inside the organisation, and evidence they can stop a shipment.",
          "Supplier terms that make disclosure a condition of trading, not a courtesy.",
          "A record-keeping system with a defined retention period, able to answer a question three years later.",
        ],
      },
      { type: "h2", text: "Step two: identify what is actually happening in your chain" },
      {
        type: "p",
        text: "Risk assessment means describing the chain as it is, not as the paperwork implies. For artisanal gold that usually means naming: the area or the mining unit the material came from; who mined or recovered it; who bought it first; every intermediate hand, aggregator, processor, transporter and licence-holder between the pit and the export; and the facts on the ground in that area. That last item is the one buyers find most uncomfortable, and it is the point of the step. It involves consulting credible information on conflict, human-rights abuse, sanctions, governance and the presence of armed groups or public security forces operating around mining sites, rather than relying only on what the supplier says.",
      },
      {
        type: "p",
        text: "The output of step two is a written assessment with a named author, a date, and a decision attached: continue, continue with mitigation, or disengage. A chain with no flagged risk anywhere is not necessarily a clean chain — it may simply be an unexamined one. Ask how many sites or intermediaries in a supplier's file carry a flagged risk with a mitigation attached; a realistic answer is non-zero.",
      },
      { type: "h2", text: "Step three: respond — and know when to pause rather than leave" },
      {
        type: "p",
        text: "Once a risk is identified, the framework expects a plan: what will change, who owns it, by when, and how it will be verified. The nuance that matters for artisanal sourcing is that immediate disengagement is often the wrong answer. Cutting off a site because it has problems removes the only external incentive that site had to fix them, and the metal does not disappear — it moves to a buyer who asks fewer questions. Continued engagement under a documented mitigation plan, with a genuine exit trigger if the plan is not executed, is normally the more responsible response, which is why the framework asks that responses be tracked rather than merely recorded.",
      },
      { type: "h2", text: "Step four: the third-party audit that sits behind your desk" },
      {
        type: "p",
        text: "The fourth step concerns upstream parties: refiners, aggregators and any programme in the chain that has been independently assessed. For a downstream buyer this means checking the accreditation and audit status of the refinery that will ultimately receive the metal, and reading the summary of the audits that scheme publishes. The check has a narrow purpose: it tells you whether the entity that will finally convert your doré into a bar has itself been examined, by whom, and when. Scheme membership is not a blanket exoneration of any particular parcel, and participant lists change — verify current status directly with the scheme.",
      },
      {
        type: "quote",
        text: "Due diligence is a process you run. A document you receive is an output of somebody else's process, which is a different thing and considerably cheaper to fake.",
      },
      { type: "h2", text: "Step five: report, and be accountable for what you say" },
      {
        type: "p",
        text: "The fifth step is public communication: an annual statement of the diligence exercised, covering the chain, the risks identified, the responses taken and the audit findings relied on. Where a reporting regime or a company's customers require it, this becomes a disclosure rather than a brochure, and the gap between the two shows quickly. A useful buyer-side test is to ask for a supplier's most recent statement and check whether it is specific enough to be falsifiable; a statement written so that nothing in it could be wrong is the one to worry about.",
      },
      { type: "h2", text: "What the framework looks like in a doré file" },
      {
        type: "p",
        text: "Translated into the paperwork of an actual East African purchase, the five steps leave a recognisable trail. Some of it overlaps with the export documents described in our piece on the Kenyan document set, but the due-diligence layer is separate and asks different questions of the same facts.",
      },
      {
        type: "table",
        head: ["Framework step", "Artefacts a buyer should expect to see", "What is easy to fake"],
        rows: [
          ["Management system", "Dated policy, named accountable officer, supplier terms, control register", "A policy PDF with no evidence of implementation"],
          ["Risk identification", "Chain-of-custody map with every hand and licence holder named and verified", "A one-line 'mined in Kenya' provenance claim"],
          ["Risk response", "Written assessment with a decision, mitigation plan, owners and dates", "A risk matrix with every cell marked low"],
          ["Third-party audit", "Refinery accreditation status and audit summary, checked currently", "An old logo on a letterhead"],
          ["Reporting", "An annual due-diligence statement specific enough to be checked", "Generic language about ethical sourcing"],
        ],
      },
      { type: "h2", text: "Where artisanal formalisation genuinely helps" },
      {
        type: "p",
        text: "The most under-discussed factor in this chain is legality itself. Miners working without a licence have no route to sell through a documented channel, so their output enters the trade outside the paperwork and stays there; formalisation is therefore not a welfare add-on but the precondition for traceability. Cooperative structures, licensed buying centres and designated trading points give small-scale producers a lawful exit for their gold, which in turn gives the downstream chain something to record. Where a buyer wants to improve the quality of a supply chain rather than merely its documentation, sourcing through structures that make legal sale possible is the highest-leverage choice available — and documented, timely payment through formal channels is a compliance measure disguised as a commercial one, because producers paid late or in kind sell to whoever pays first, which is precisely what breaks traceability.",
      },
      { type: "h2", text: "Practical questions to put to an upstream supplier" },
      {
        type: "list",
        items: [
          "Map every hand from pit to export for this specific lot, with names and licence numbers, and say which of them you have verified rather than recorded.",
          "Which accredited refinery will process this material, and what is its current audit status?",
          "Show your last due-diligence statement, and tell me what risk it identified and what you did about it.",
          "What would cause you to stop buying from this area, and has that trigger ever been used?",
          "How are producers in this chain paid, in what currency, and how quickly?",
        ],
      },
      {
        type: "p",
        text: "Framework text, scheme requirements and applicable regulation in importing markets are updated regularly; specifics should be confirmed directly with the OECD publication, with the relevant accreditation scheme and with your own counsel. Mayfox sources through licensed cooperatives and licensed buying structures and maintains chain-of-custody records for each consignment, which a prospective buyer can review before committing.",
      },
    ],
  },
  {
    slug: "insured-air-freight-precious-metals",
    title: "Insured Air Freight for Precious Metals: How a Gold Shipment Actually Moves",
    dek: "Vault to vault is a sequence of named handovers under bond, not a flight. Here is the handover chain, what all-risk cover really responds to, and the four places shipments get held.",
    category: "Logistics",
    published: "2026-05-14",
    updated: "2026-05-14",
    author: tradeDesk,
    readMinutes: 9,
    body: [
      {
        type: "p",
        text: "Ask a buyer how gold gets from Nairobi to Zurich and the answer usually involves an aircraft. Ask a security carrier and the answer involves a chain of signatures. The flight is a small part of the movement and, in practice, the least risky part. Gold has spent decades travelling commercially in the belly of passenger aircraft with remarkably few dramatic losses; the exposures that actually cost money sit in the hours before and after, in custody gaps, in documentary mismatches, and in insurance conditions nobody read carefully.",
      },
      {
        type: "p",
        text: "This is a description of how a properly run precious-metals air movement works, why each step exists, and where a buyer's attention is best spent. Operational requirements change with airline policy, security-carrier procedure and the rules of the airports involved, so the specifics should be confirmed with the carrier, the forwarder and the relevant authorities before a shipment is planned around this article.",
      },
      { type: "h2", text: "The movement is a chain of handovers, each one signed" },
      {
        type: "p",
        text: "Precious-metals transport is built on the concept of continuity of custody: at every instant, some named party is legally responsible for the cargo, and the transfer of that responsibility is recorded. The chain normally runs from the exporter's vault or the processing facility, to the armoured collection, to the airport perimeter or airside secured facility, to the aircraft under an accepted airway bill, to the destination airport's secure facility, to the consignee's appointed carrier, to the receiving vault. Each transition has paperwork: a handover note naming the individuals, the piece count, the seal numbers and the time.",
      },
      {
        type: "p",
        text: "The practical significance is that a gap in this record is a gap in your claim. If seal numbers are not logged at the point of acceptance, an allegation of interference at destination becomes unanswerable. If the handover at the destination apron is signed by someone whose authority is not documented, the chain of custody that supported your assay sample and your insurance position starts to fray. Buyers who are not paying for the transport themselves should still request the handover record, because it is the evidence that protects them later.",
      },
      { type: "h2", text: "Packaging, sealing and what the crate is being asked to do" },
      {
        type: "p",
        text: "Transit packaging for gold has three jobs and they are not the same job. It must physically protect the contents — doré bars in particular will abrade, dent and lose material if carried loose, and a weight reconciliation at destination can turn a hundred-gram discrepancy into an argument. It must be tamper-evident, meaning a numbered seal or a locking mechanism whose state can be verified and photographed at each handover, so interference is detectable rather than merely unlikely. And it must be identifiable, carrying the piece count and the marks that tie the crate to the packing list and airway bill.",
      },
      {
        type: "list",
        items: [
          "Sealed, numbered containers or cases with the seal sequence recorded on the packing list.",
          "Photographs of the sealed package before acceptance by the carrier — cheap, and decisive in a dispute.",
          "Piece count stated on the airway bill exactly as it appears on the packing list.",
          "Bar or parcel serial identifiers carried through from the assay report to the customs declaration.",
          "Declared gross weight that matches what the balance produced, not what was estimated.",
        ],
      },
      { type: "h2", text: "What all-risk transit cover responds to — and what it does not" },
      {
        type: "p",
        text: "Gold-in-transit insurance is a specialist short-course product, normally arranged per movement rather than under an annual cargo programme, and priced on the declared value, the route and the custody arrangements. The word 'all-risk' is doing less work than most buyers assume. These policies are built around a set of conditions, and the claim is not paid because the cargo went missing — it is paid because the insured complied with the conditions.",
      },
      {
        type: "p",
        text: "The conditions that most often decide a claim concern custody. Many transit wordings require carriage by a named approved carrier, or between named approved facilities, and exclude or limit cover where the consignment travelled by ordinary freight, or was left unattended in a hotel, an office, or the back of an unapproved vehicle for a period. Valuation clauses specify how a loss is measured — often by reference to a market value at a stated time rather than the price paid, which matters when the gold price has moved. Notification clauses require prompt notice of circumstances, not just of a loss. And the insured must be the party with an insurable interest at the relevant point in the journey, which is precisely where an Incoterm decision becomes an insurance question.",
      },
      {
        type: "quote",
        text: "The single most common logistics failure in gold trading is not theft. It is a consignment that moved under a custody arrangement its own policy did not cover.",
      },
      { type: "h2", text: "Who bears the risk at which point: Incoterms as a custody map" },
      {
        type: "p",
        text: "The delivery term in the sale and purchase agreement allocates cost, risk and the obligation to insure, and it should be read as a map of custody rather than a pricing note. A term that puts risk on the buyer from the origin airport means the buyer needs an interest in the policy covering that leg, and needs to be satisfied with the seller's choice of carrier. A term that keeps risk with the seller until the goods reach the buyer's nominated vault means the seller is choosing the route and the carrier, and the buyer should still verify the arrangement because it is the buyer's metal at risk. Whatever the term, three things need to line up on paper: the point at which risk passes, the point at which insurance cover begins and ends, and the point at which title and payment settle. Where those three disagree, someone is uninsured without knowing it.",
      },
      { type: "h2", text: "The four places shipments get held" },
      {
        type: "p",
        text: "Delays in gold logistics are overwhelmingly documentary, and they cluster in four places. Knowing which side of each you are responsible for is the bulk of planning the movement.",
      },
      {
        type: "table",
        head: ["Where it stalls", "Typical cause", "Who should be managing it"],
        rows: [
          ["Export authorisation and customs at origin", "Licence or name mismatches across documents, unverified assay basis, questions on provenance", "The exporter and their clearing agent"],
          ["Carrier acceptance at the airport", "Packaging or seal records incomplete, declared value outside an approved limit, security screening backlog", "The security carrier, with the exporter"],
          ["Import entry at destination", "Dealer or precious-metals registration requirements, sanctions and source declarations, cash-reporting thresholds", "The consignee and their appointed broker"],
          ["Release at the receiving facility", "Vault slot and appointment not arranged, authorised receiver not present, custody handover unsigned", "The consignee and receiving carrier"],
        ],
      },
      {
        type: "p",
        text: "The destination items are the consignee's responsibility, and are the ones most frequently discovered late. A buyer importing into a new jurisdiction should open the conversation with their own broker and regulator rather than assuming the exporter will handle it: receiving-country obligations for precious-metals dealers, and reporting requirements on high-value movements, differ genuinely between markets.",
      },
      { type: "h2", text: "Timing, and what a realistic plan looks like" },
      {
        type: "p",
        text: "From a cleared, weighed, assayed and sealed parcel sitting in an export vault, the air movement itself is short. The document chain — assay, export authorisation, customs acceptance, carrier booking, flight availability, destination entry, vault handover — is what takes the time, and the parts that take time are the parts requiring a third party to say yes. A buyer should therefore plan around three dates rather than one: the date the export authorisation is granted, the date of acceptance by the carrier, and the date of the pricing session the invoice will use. Any of the three can slip independently, and structures that assume they move together produce unhappy settlement conversations.",
      },
      {
        type: "p",
        text: "Routing deserves one note: consignments transiting a third country for consolidation or trade-hub handling pick up that country's own import and re-export formalities, and a route chosen to save a day can add a set of declarations. Ask the carrier to show the custody chain and the paperwork implied by each leg before agreeing it.",
      },
      {
        type: "p",
        text: "Airline policy, carrier approvals, security requirements and airport procedures change; confirm current requirements with your appointed security carrier, freight forwarder and the authorities at both ends of the movement. Mayfox books fully insured, bonded movements with specialist carriers on every consignment, and provides the complete handover record to the buyer with the document pack.",
      },
    ],
  },
  {
    slug: "what-a-refinery-looks-for-in-an-offtake-counterparty",
    title: "What a Refinery Looks For in an Offtake Counterparty",
    dek: "Before a refinery commits throughput to a supply agreement, it screens the seller on five things: licensure, feedstock consistency, compliance record, financial substance and delivery behaviour. Here is that screen from the inside.",
    category: "Trade Structure",
    published: "2026-04-09",
    updated: "2026-08-06",
    author: tradeDesk,
    readMinutes: 10,
    body: [
      {
        type: "p",
        text: "A refinery's scarce resource is not capital and it is not machinery. It is throughput that it can plan around. Refining is a batch process with a fixed weekly cadence, a laboratory that has to prepare and assay each incoming consignment, a working-capital cycle tied to the gold price, and an accreditation regime that makes the refinery answerable for where its feedstock came from. When a refinery signs a multi-shipment supply agreement, it is committing planned capacity and taking on somebody else's compliance risk for the length of the term. So it screens hard, and the screening criteria are more interesting than most sellers assume.",
      },
      {
        type: "p",
        text: "This article sets out the five areas a refinery typically examines, what evidence satisfies each, and what usually causes a promising counterparty conversation to stop. Specific requirements differ between refineries and change over time, and a buyer or seller should confirm the current onboarding requirements directly with the refinery they intend to work with.",
      },
      { type: "h2", text: "One: licensure and legal standing, checked rather than asserted" },
      {
        type: "p",
        text: "The refinery's legal and compliance functions want to know that the exporting entity is permitted to do what it says it does, in the jurisdiction it says it is doing it in, and that the person signing has authority to bind it. That means licence numbers that can be verified with the issuing authority, constitutional documents, a beneficial-ownership disclosure that goes to actual humans rather than to an intermediate holding company, sanctions and adverse-media screening on the entity and its principals, and confirmation of the signatory's authority.",
      },
      {
        type: "p",
        text: "This is table stakes, and it is still where a meaningful number of conversations end — not because the seller lacks a licence, but because the licence covers dealing rather than export, or expired, or names a different entity from the one on the invoice. A refinery reading a document pack with three entity names in it is not being pedantic; it has seen that pattern before and it knows what it means.",
      },
      { type: "h2", text: "Two: feedstock consistency, because the plant is calibrated on it" },
      {
        type: "p",
        text: "A refinery processes doré of many compositions, but it does not process it blind. Each incoming lot is sampled and assayed on receipt, and the refining sequence, the parting step and the reagent charges are adjusted to what the assay shows. A counterparty whose material sits in a predictable band — a broadly stable gold fineness, a known silver range, and no surprises on elements like copper, lead, zinc or tellurium that complicate processing — is materially cheaper to work with than one whose composition swings parcel to parcel, even if both are nominally selling 'doré'.",
      },
      {
        type: "list",
        items: [
          "Historical assay data across multiple consignments, not one representative certificate.",
          "A stated expectation of the fineness band and the impurity profile the material will carry.",
          "Disclosure of anything known to complicate processing, such as high silver, refractory content or deliberate plating on a surface.",
          "Consistent sampling and sample-preparation practice between parcels, so that comparisons over time mean something.",
          "A declared source or set of sources, so that a shift in composition can be traced rather than merely noticed.",
        ],
      },
      {
        type: "p",
        text: "The corollary is that a seller offering to blend material to a specification is making a promise about process control, not about quality, and the refinery will ask how the blending is done and verified. A seller who cannot answer that question is describing a hope.",
      },
      { type: "h2", text: "Three: the compliance record behind the metal" },
      {
        type: "p",
        text: "For an accredited refinery, accepting feedstock means accepting an obligation to know where it came from. Refineries accredited under international responsible-gold guidance are required to assess the risks in their supply chains and to be able to demonstrate that assessment to an auditor. So a refinery will ask an East African seller what a buyer should ask: map the chain from pit to export, name every intermediate hand, identify the origin areas, describe the due-diligence process run against the OECD framework, and show what was done when a risk was found.",
      },
      {
        type: "quote",
        text: "A refinery is not asking whether your gold is clean. It is asking whether you can show an auditor, in writing and years later, how you satisfied yourself that it was.",
      },
      {
        type: "p",
        text: "The distinction is commercial. A seller whose files are structured for audit — dated assessments, named reviewers, mitigation plans with owners and dates — shortens onboarding, because the refinery's compliance team has something to work with the first time it asks. A seller who assembles answers after each request tends to be onboarded slowly, in small trial volumes, and stays that way.",
      },
      { type: "h2", text: "Four: financial substance and payment behaviour" },
      {
        type: "p",
        text: "Refineries buy most feedstock on terms that involve paying before they sell, so a counterparty's financial standing is a credit question with two edges: can the seller fund the purchase at source and carry it through assay, licensing and transit without a forced sale, and can it meet the reconciliation invoice if the refining result comes in below the provisional assumption?",
      },
      {
        type: "p",
        text: "The second edge is the one that generates losses. Provisional payments rest on an estimate, and the correction flows both ways. A counterparty with no balance sheet, or whose banking relationships cannot move the amounts implied by the agreed volumes, will eventually be unable to settle a downward adjustment. Expect requests for trade references and for independently verifiable banking details, and expect them to be checked rather than filed.",
      },
      { type: "h2", text: "Five: delivery behaviour — the most predictive thing about a new seller" },
      {
        type: "p",
        text: "How a seller behaves in the weeks before a first shipment is a strong signal of how they will behave when something goes wrong on the twentieth. Refineries and their logistics partners watch a short list of concrete indicators, and every one of them is within a seller's control.",
      },
      {
        type: "table",
        head: ["Indicator", "What good looks like", "What it predicts"],
        rows: [
          ["Document turnaround", "Complete, internally consistent pack on first request", "Whether a discrepancy will be resolved in days or weeks"],
          ["Weight and assay reconciliation", "Figures agree across balance ticket, invoice, packing list and certificate", "Whether settlement conversations stay civil"],
          ["Responsiveness of named contacts", "One accountable person who answers, including on bad news", "Behaviour under price or assay stress"],
          ["Willingness to be witnessed", "Accepts buyer-appointed surveyor and sealed sample splits", "Confidence in their own numbers"],
          ["Handling of the first problem", "Discloses it before it is discovered", "Whether the relationship has a future"],
        ],
      },
      {
        type: "p",
        text: "The last row is the decisive one, and it is why refineries often run a deliberately small first parcel: the point of the pilot is not the volume but the observation of the counterparty under a condition nobody can simulate in a term sheet.",
      },
      { type: "h2", text: "What a serious first proposal contains" },
      {
        type: "p",
        text: "Sellers open refinery conversations with price alone. Price is the part a refinery can negotiate and the part it can least rely on, so a proposal that gets read carefully carries the following before any number is discussed — while one that contains only a discount quote and a photograph of a bar will be answered with a compliance questionnaire.",
      },
      {
        type: "list",
        items: [
          "Entity information: registration, licence numbers with the issuing authority named, ownership disclosure and signatory authority.",
          "Source description: the areas, cooperatives, buying structures or processors the material comes from, and the due-diligence process applied to them.",
          "Feedstock profile: typical fineness band, silver range, impurity elements of note, and assay history across parcels.",
          "Logistics plan: named security carrier, routing, Incoterm, insurance arrangement and who holds cover at each leg.",
          "Settlement proposal: pricing benchmark, session and date; provisional percentage; reconciliation method and window; tie-break laboratory.",
          "A pilot offer: a deliberately small first consignment with the full pack, on the same terms as the intended programme.",
        ],
      },
      { type: "h2", text: "Reading it from the buyer's side" },
      {
        type: "p",
        text: "There is a useful inversion here for institutions that buy gold rather than refine it. The criteria a refinery applies to a seller are, almost line for line, the criteria a buyer should apply to an export agent. A counterparty that has been onboarded by a reputable refinery, passed its compliance screening, and settled reconciled parcels before it, has already had a great deal of your diligence done for you by a party with more leverage over the seller than you have.",
      },
      {
        type: "p",
        text: "Confirm current onboarding criteria, throughput terms and accreditation requirements directly with the refinery or trade desk concerned; they differ between facilities and change. Mayfox works with established refining partners and structured supply agreements, and can describe — without naming — the categories of counterparty it already supplies.",
      },
    ],
  },
  {
    slug: "great-lakes-chain-of-custody-schemes",
    title: "Chain-of-Custody Schemes in the Great Lakes Region",
    dek: "Regional traceability programmes for gold from conflict-affected areas credential a chain of handling, not a moral conclusion. What they prove, what they do not, and how a buyer should use them.",
    category: "Compliance",
    published: "2026-02-26",
    updated: "2026-02-26",
    author: tradeDesk,
    readMinutes: 9,
    body: [
      {
        type: "p",
        text: "Gold from the eastern regions of the Democratic Republic of the Congo, and from neighbouring areas of Uganda, Rwanda, Burundi, Tanzania and Kenya, moves through supply chains that are genuinely difficult to document. Mining sites shift, intermediaries are numerous, transport crosses borders informally before it crosses them formally, and several of the areas concerned have experienced armed conflict and serious human-rights abuse. Buyers of East and Central African gold cannot avoid this geography, because it is where the metal is. What they can do is rely on mechanisms built specifically for it.",
      },
      {
        type: "p",
        text: "Chain-of-custody schemes are the most important of those mechanisms. They are widely misunderstood — treated by some as a moral absolution and by others as a sticker — and both readings lead to bad decisions. This article describes what such a scheme does mechanically, what it can and cannot support a buyer's claim to know, and how it fits alongside OECD-style due diligence rather than replacing it.",
      },
      { type: "h2", text: "What a chain-of-custody scheme actually does" },
      {
        type: "p",
        text: "Strip away the branding and the logic is simple and administrative. Gold is tagged with an identity at the earliest point in the chain where it can reasonably be tagged — often a licensed site, a cooperative, or a certified trading point — and that identity travels with the metal through every subsequent hand. Each transfer is recorded with who passed what to whom, in what quantity, and with what documentation, and the record is maintained by a body that is not the buyer and not the seller. The purpose is to make the history of a parcel reconstructible after the fact, so that a downstream refinery or regulator can be told where the metal has been, and can check.",
      },
      {
        type: "p",
        text: "The value is in the reconstruction. Without a custody record, an origin claim is a statement about the past that nobody can verify. With one, the same claim becomes a series of entries that can be tested for gaps, for quantity reconciliation, and for the presence of entities that are not supposed to be in the chain. In the Great Lakes specifically, the regional architecture matters: the International Conference on the Great Lakes Region operates a regional certification mechanism for the trade in gold designed precisely to address the link between mineral flows and conflict in that region, working alongside — not instead of — the international due-diligence framework and the accreditation standards of the refineries at the end of the chain.",
      },
      { type: "h2", text: "The four things a certificate does not tell you" },
      {
        type: "p",
        text: "A custody certificate is a claim about handling, and its limits are worth stating as plainly as its value, because a buyer who over-reads one is exposed in a specific way.",
      },
      {
        type: "list",
        items: [
          "It does not prove the metal is conflict-free. It proves the metal moved through a monitored chain from a certified point onward. Material can enter a chain legitimately at a certified point and still originate in a problematic setting upstream of that point.",
          "It does not certify price, terms or taxes paid to the producer. A certified chain can contain exploitation; it is a traceability instrument, not a fairness instrument.",
          "It does not substitute for your own risk assessment. Downstream obligations under the OECD framework and applicable regulation remain yours, and an auditor will expect you to have exercised your own judgement.",
          "It does not cover the whole chain automatically. Certification usually starts at a defined node, so the segment between the pit and that node may sit outside the scheme's scope — which is often the segment that matters most.",
        ],
      },
      {
        type: "quote",
        text: "Chain of custody answers 'where has this metal been since we started watching?'. It does not answer 'what happened before we started watching', and it certainly does not answer 'was anyone treated well on the way'.",
      },
      { type: "h2", text: "Where certification begins, and why the first mile dominates" },
      {
        type: "p",
        text: "The most consequential design question in any traceability programme is the point at which it starts. If certification begins at an aggregation or trading centre, everything upstream of that centre is asserted rather than evidenced, and the coherence of the whole scheme depends on how well the centre's intake is controlled. If it begins at the site, the scheme needs site-level presence — trained monitors, physical tagging, records kept by people who are usually not professional documenters — which is expensive, slow and harder to sustain.",
      },
      {
        type: "p",
        text: "For a buyer, this means the right question is not 'is this parcel certified?' but 'at which node was this parcel certified, and what controls apply before that node?'. Two parcels carrying the same certificate type can have very different evidentiary strength depending on where in the chain the watchful eye first landed. The same logic applies to licensing: formalisation of artisanal and small-scale mining is the precondition for credible certification, because an unlicensed producer has no lawful route into a documented chain and their output enters the trade outside the record.",
      },
      { type: "h2", text: "How a buyer should actually use a scheme" },
      {
        type: "p",
        text: "Used properly, a chain-of-custody programme is one input into a risk assessment rather than a conclusion. Practically, that means four habits.",
      },
      {
        type: "table",
        head: ["Habit", "What it looks like in practice", "Why it matters"],
        rows: [
          ["Verify rather than receive", "Check the certificate or parcel reference with the administering body, not only against a scan supplied by the seller", "Certificates are the easiest document in the pack to reproduce"],
          ["Locate the start node", "Ask where the chain of custody begins and who controls intake at that point", "Determines how much of the chain is evidenced versus asserted"],
          ["Reconcile quantities", "Compare certified mass through the chain against assay and weight records at each hand", "Unexplained quantity drift is where mixing or substitution shows up"],
          ["Keep it inside your own process", "Record the scheme data as one exhibit in your own dated risk assessment", "Your auditor will examine your assessment, not the scheme's"],
        ],
      },
      {
        type: "p",
        text: "The reconciliation row deserves emphasis because it is the one a buyer can perform without specialised capability. A chain in which the certified mass at the trading point, the invoiced mass at export and the assayed mass at the refinery all reconcile, within a stated tolerance, is a chain behaving like a real chain. A chain in which the numbers drift and everyone ascribes the drift to rounding is worth a closer look.",
      },
      { type: "h2", text: "Schemes change, and membership lists go stale" },
      {
        type: "p",
        text: "Regional certification mechanisms, accreditation programmes and national licensing regimes are all living systems: participants are added and suspended, criteria are revised, and the scope of what a programme covers can narrow or widen. A buyer relying on a scheme's name from a previous transaction is relying on an out-of-date picture. Before a consignment is funded, check the current status of the administering programme, the particular certification or licence number cited for that parcel, and the standing of the refinery at the end of the chain. Confirm current requirements directly with the regional mechanism, with the relevant national mining authority, and with the accreditation body.",
      },
      { type: "h2", text: "The sourcing posture behind the paperwork" },
      {
        type: "p",
        text: "Traceability schemes are most useful to buyers who are prepared to act on what they find. A programme that produces an uncomfortable answer about a particular area is only worth having if someone in the transaction is authorised to pause. That is a structural point rather than a rhetorical one: it is the difference between compliance as a filing activity and compliance as a decision process.",
      },
      {
        type: "p",
        text: "It is also why the choice of upstream partners is more decisive than the choice of scheme. Working through licensed cooperatives and certified trading structures — where producers have a lawful, documented route to sell and to be paid — produces material whose history can be reconstructed, and produces it at the point where reconstruction is cheapest. Mayfox sources within licensed and traceable structures across Kenya and the wider East and Central African region, and maintains handling records for each consignment so that a buyer's own due-diligence function has something concrete to assess. Nothing in this article is legal or compliance advice, and programme requirements should be verified with the relevant authorities.",
      },
    ],
  },
  {
    slug: "settlement-against-documents-gold",
    title: "Settlement Against Documents: How Gold Trades on Paper",
    dek: "Telegraphic transfer on documents, letters of credit, cash against documents and escrow — how each instrument decides who is exposed to whom, and why the wrong choice stalls a shipment.",
    category: "Pricing & Settlement",
    published: "2026-01-22",
    updated: "2026-01-22",
    author: tradeDesk,
    readMinutes: 10,
    body: [
      {
        type: "p",
        text: "Physical gold is one of the few commodity trades where goods and money can cross paths in the middle of a journey, because the goods are small enough to move quickly and liquid enough to be valued precisely. That creates an unusual set of settlement options, and an unusual set of failure modes. Most are not about fraud: they are about an instrument being chosen that allocates risk in a way neither party actually wanted, and that only being discovered when a document arrives late.",
      },
      {
        type: "p",
        text: "'Settlement against documents' covers the territory: payment conditioned on presentation of a defined set of papers, rather than on the physical arrival of the metal or on the goodwill of either side. Bank practice and cross-border payment rules change; confirm specific terms with your own bank and counsel before a structure is agreed.",
      },
      { type: "h2", text: "The underlying problem: three moments that will not line up" },
      {
        type: "p",
        text: "Every settlement structure is an attempt to reconcile three moments that occur at different times. The first is transfer of title, when the buyer becomes the owner of the metal. The second is transfer of possession, when the metal physically moves into the buyer's custody or that of their carrier. The third is transfer of value, when money actually arrives and is unconditionally the seller's.",
      },
      {
        type: "p",
        text: "If money goes first, the buyer is exposed to the seller performing. If possession goes first, the seller is exposed to the buyer paying. Documents exist to close that gap: they are simultaneously evidence that the seller has done their part and the condition on which the buyer's bank will release funds. A structure works when the documents a bank will accept are the same documents that genuinely evidence performance.",
      },
      { type: "h2", text: "Telegraphic transfer released against a documentary presentation" },
      {
        type: "p",
        text: "The simplest structure, and the most common in African doré trading. The sale and purchase agreement defines a list of documents; the seller presents them to the buyer or the buyer's bank; funds are wired by telegraphic transfer on presentation, sometimes against a defined percentage, with the balance following the refinery result as described in our article on doré pricing.",
      },
      {
        type: "p",
        text: "Its virtue is speed and low administrative cost. Its weakness is that it is fundamentally an unsecured commercial promise backed by nothing but the contract: no bank undertakes to pay, and if the buyer declines to pay on presentation the seller's remedy is a legal claim rather than a deduction from a document. The practical protection is therefore in the drafting — a precise documentary list, an objective definition of a conforming presentation, a stated number of banking days for payment, and a stated consequence of delay. Where a counterparty resists specifying those four things, that is information.",
      },
      { type: "h2", text: "Letter of credit: a bank substitutes its judgement for yours" },
      {
        type: "p",
        text: "A documentary credit inverts the risk in the transfer structure. The buyer's bank, on the buyer's instruction, undertakes to pay a nominated beneficiary against presentation of documents that conform to the credit's terms. The seller's assurance becomes the bank's obligation rather than the buyer's intention, which is why this is the natural instrument when the parties have limited trust, limited history, or are in jurisdictions that find each other difficult to transact with directly.",
      },
      {
        type: "list",
        items: [
          "Irrevocable and confirmed, or the seller's protection is only as good as the issuing bank and the country risk it carries.",
          "Independently verifiable document requirements — certificates a nominated bank can check, not adjectives.",
          "Weight, fineness and pricing expressed as document conditions rather than as a formula the bank would have to evaluate.",
          "A realistic presentation window, allowing for the fact that a conclusive refinery assay arrives after carriage.",
          "Named banks, a nominated presenting bank, and a stated rulebook for documentary credits.",
        ],
      },
      {
        type: "p",
        text: "The cost is real: issuance and confirmation fees, capital committed by the applicant, and — most under-appreciated — time. Opening a credit facility with a bank unfamiliar with precious metals can take longer than sourcing the gold. And because a credit is examined on its face, parties new to them are routinely surprised by rejection over a spelling difference between the invoice and the airway bill. That is not pedantry; it is the instrument functioning as designed.",
      },
      { type: "h2", text: "Cash against documents, and collection as a middle option" },
      {
        type: "p",
        text: "A documentary collection sits between the two. The seller ships, then instructs its bank to forward documents to the buyer's bank against payment or acceptance, and the buyer's bank releases the documents only when the buyer meets the terms. No bank has undertaken to pay, so the seller still carries the credit risk; but the buyer cannot take delivery of goods whose release depends on the paper without paying first. For bullion the instrument is used less often than for general merchandise, because possession of gold is not really controlled by documents once the goods reach a named consignee — ask the carrier how release at destination is actually authorised before relying on a documentary retention of title.",
      },
      { type: "h2", text: "Escrow and the settlement agent" },
      {
        type: "p",
        text: "Escrow puts a neutral third party in the middle of the money. Funds are deposited with an agent or into a designated account and released against objectively verifiable triggers — typically arrival at a named facility, a re-assay within a stated range, and delivery of a complete conforming document pack. It is the structure of choice where both sides want certainty and neither wants to trust, and in precious-metals trading it is often arranged through specialist agents or vault operators in established hubs.",
      },
      {
        type: "p",
        text: "Three questions decide whether an escrow is real or decorative. Who is the agent, and are they regulated, bonded or licensed to hold third-party funds? What exactly is the release test, and who verifies it — because 'satisfactory to the buyer' is not a release condition, it is an option written by the seller. And what happens on a failed or partial verification, including who bears the cost of the metal sitting idle while the argument runs? An escrow with vague triggers is worse than none, because it advertises security it does not provide.",
      },
      {
        type: "quote",
        text: "Instruments do not create trust between strangers. They convert a trust problem into a document problem, which is worthwhile only because document problems are cheaper to argue about.",
      },
      { type: "h2", text: "Matching the instrument to the relationship" },
      {
        type: "p",
        text: "Choosing an instrument is mostly a question of how much history and how much independent verification already exist. The pattern below is descriptive, not prescriptive.",
      },
      {
        type: "table",
        head: ["Situation", "Structure that usually fits", "What it assumes"],
        rows: [
          ["First trade with an unknown counterparty", "Escrow with objective triggers, or a confirmed credit", "That neither side will perform first"],
          ["Established supplier, pilot or small volume", "Telegraphic transfer on documents with a defined provisional percentage", "That reconciliation terms are enforceable and agreed"],
          ["Repeating programme with assay history", "Documentary transfer with a short settlement window and a tie-break laboratory", "That both sides can meet an adjustment invoice"],
          ["Seller requiring assurance of funds", "Confirmed credit or pre-funded escrow", "That the buyer's bank will open the line in time"],
        ],
      },
      { type: "h2", text: "The documentary trigger is the whole negotiation" },
      {
        type: "p",
        text: "Whatever instrument is chosen, the operative clause is the list of documents that triggers payment. Buyers routinely under-negotiate it because it looks like an annex, but it is the definition of performance. A sound list names each document, the party who must issue it, the data it must contain, and the standard against which it will be judged — usually the same set laid out in our article on the Kenyan export document set, with weight, fineness and pricing reconciling across every line.",
      },
      {
        type: "p",
        text: "Two cautions sit alongside the drafting. Currency and correspondent routing are part of settlement, not separate from it: a payment obligation that cannot clear because the corridor is awkward is an unpaid obligation. And sanctions screening sits before all of it — every party, every bank in the chain and the origin of the metal must be clearable, which is a different thing from being clear.",
      },
      {
        type: "p",
        text: "Mayfox settles on documentary terms agreed in advance with each institutional buyer, with provisional payment against the export pack and final reconciliation on the refinery certificate. Bank requirements, correspondent practice and regulatory obligations change; confirm current figures and requirements directly with your bank, your counsel and the trade desk. Commentary on this website is market information and is not investment, legal or financial advice.",
      },
    ],
  },
];

export function articleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticle(slug: string): SiteArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

// Same-category pieces first, then the newest remaining articles, so a reader
// who finishes a technical piece can be handed either a deeper one or the latest.
export function relatedArticles(slug: string, count = 3): SiteArticle[] {
  const current = getArticle(slug);
  if (!current) return [];
  const rest = articles.filter((a) => a.slug !== slug);
  const byDate = (a: SiteArticle, b: SiteArticle) => b.published.localeCompare(a.published);
  const sameCategory = rest.filter((a) => a.category === current.category).sort(byDate);
  const others = rest.filter((a) => a.category !== current.category).sort(byDate);
  return [...sameCategory, ...others].slice(0, count);
}
