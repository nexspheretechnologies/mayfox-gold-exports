import { img } from "../lib/images";

export interface BuyerSegment {
  slug: string;
  label: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  lede: string;
  image: string;
  // What this buyer class is actually trying to solve when they source doré.
  needs: string[];
  howWeFit: string[];
  mandate: Array<{ label: string; value: string }>;
  stalls: string[];
  faqs: Array<{ q: string; a: string }>;
}

// No volumes, client names, licence numbers or performance claims: each line is
// something a trade desk can say out loud on a call without qualifying it.
export const buyerSegments: BuyerSegment[] = [
  {
    slug: "refineries",
    label: "Refineries",
    title: "Gold Doré Supply for Refineries | Mayfox Kenya",
    description:
      "How doré-focused refiners source East and Central African gold: assayed consignments, sampling and weighing at the buyer's option, documentation packs and settlement structured around refinery certificate of analysis.",
    keywords:
      "gold doré supplier refinery, doré bars for refining, PGM free doré, refinery feed sourcing, gold treatment charges, mine gate assay vs refinery assay",
    h1: "For refineries: feed you can reconcile against your own certificate",
    lede: "You are not buying a bar, you are buying a known quantity of contained gold plus a known cost of recovery. Our documentation is structured so your receiving assayer, not our shipping assayer, sets the final number.",
    image: img.smelting,
    needs: [
      "Consistent chemistry, not a surprise every truck: declared origin, concentrate type and the impurities that hurt your process.",
      "Sampling and weighing that your own appointed surveyor can witness before the metal leaves the ground.",
      "A paperwork set that clears export formalities without a phone call to explain it.",
      "Settlement that references your certificate of analysis, so the reconciliation is arithmetic rather than negotiation.",
      "Counterparty records your compliance function can file: mandate, licence chain and source jurisdiction.",
    ],
    howWeFit: [
      "We present the source profile before the metal moves: origin country, cooperative or buying-house route, and the metals we expect alongside the gold.",
      "Buyer-appointed testing houses are standard, not an concession — sampling, weighing and sealing happen with your representative in the room.",
      "Every consignment travels with the full export document set, so your customs broker works from documents rather than assumptions.",
      "Contracts state the provisional payment percentage and the reconciliation window against your refinery result explicitly.",
      "Repeat mandates get a fixed documentation template, which keeps your compliance reviews short.",
    ],
    mandate: [
      { label: "Product taken", value: "Doré bars 85–95%, and unsmelted doré-grade material where declared" },
      { label: "Pricing basis", value: "Contained fine gold against the agreed benchmark, less treatment and refining charges" },
      { label: "Assay authority", value: "Receiving refinery certificate governs the final settlement" },
      { label: "Logistics", value: "Insured air freight with documented chain of custody from sealing to delivery" },
      { label: "Contract form", value: "Serial spot consignments or a term mandate with a monthly volume range" },
    ],
    stalls: [
      "Undeclared material mixed into a bar: a bar that assays clean but whose sister bar carries copper is a relationship-ending event, so origin is declared up front.",
      "Mine-gate numbers presented as final: we invoice on contained gold, and the provisional payment always leaves balance outstanding until your result lands.",
    ],
    faqs: [
      {
        q: "Do you ship doré without a refining agreement in place?",
        a: "No. Metal moves only under a signed Sales & Purchase Agreement that names the receiving facility, the testing house, the provisional payment percentage and the reconciliation window.",
      },
      {
        q: "Who appoints the sampling and assaying party?",
        a: "The buyer, if you want to. We routinely work alongside a refinery-appointed surveyor for sampling, weighing and sealing, and the sealed sample split is part of the contract.",
      },
      {
        q: "How do you handle silver-bearing doré?",
        a: "Silver is assayed and valued separately from gold, and the refining deduction is quoted for both. A two-metal assay is normal on East African doré rather than an exception.",
      },
      {
        q: "What do you need from a refinery to start?",
        a: "A short letter of intent covering the product specification you accept, your testing house, and your settlement structure. Compliance KYC runs in parallel rather than after the quote.",
      },
    ],
  },
  {
    slug: "bullion-dealers",
    label: "Bullion dealers",
    title: "Gold Bars and Nuggets for Bullion Dealers | Mayfox Kenya",
    description:
      "Refined bars, doré and nuggets for licensed bullion dealers: provenance documentation, assay certificates, serialised product and repeatable supply for retail and reseller books.",
    keywords:
      "gold bars for resellers, wholesale gold bullion dealer supplier, gold nuggets for dealers, assay certificate gold bars, serialised gold bars, provenance documentation gold",
    h1: "For bullion dealers: stock you can answer questions about at the counter",
    lede: "Your retail buyer's question is never the price. It is where the metal came from and whether the certificate holds up. We give you the paperwork trail in a form you can hand across a counter.",
    image: img.goldBars4,
    needs: [
      "Product with a certificate that names the assayer and the serial number printed on the bar.",
      "Deliverable sizes your customers actually ask for, rather than one 1 kg format.",
      "A replenishment path that does not require a new negotiation every month.",
      "Documentation that survives resale, so your customer can exit without calling you.",
      "A story about origin that is accurate, because dealers get burned by invented provenance.",
    ],
    howWeFit: [
      "Refined bars are produced through partner refineries and arrive serialised and assayed; doré and nuggets are sold as what they are, labelled as such.",
      "Nugget parcels ship with a weight breakdown and a visual inspection record per parcel.",
      "Dealers can hold a term arrangement with an agreed price mechanism, so pricing is a formula rather than a daily phone call.",
      "Every shipment includes the export document set and the certificate your buyer's own verifier can check.",
      "We do not claim a heritage or a mine name that cannot be evidenced. If a parcel is consolidated from several licensed sources, we say that.",
    ],
    mandate: [
      { label: "Product taken", value: "Refined investment bars, small-format bars, doré bars and nugget parcels" },
      { label: "Pricing basis", value: "Benchmark plus a stated premium, agreed for the term of the arrangement" },
      { label: "Assay authority", value: "Issuing refinery certificate, verifiable by your own assay on request" },
      { label: "Logistics", value: "Insured air freight to your vault or a nominated secure courier leg" },
      { label: "Contract form", value: "Series of spot buys, or a term mandate with a price mechanism" },
    ],
    stalls: [
      "Product described as a single named mine when it is consolidated: we state the sourcing basis in writing.",
      "Premiums quoted before the size and certificate format are fixed: the premium depends on what you are actually asking us to produce.",
    ],
    faqs: [
      {
        q: "Can you supply bars in small retail formats?",
        a: "Yes, through partner refineries, subject to the format and certificate type you need. Tell us the sizes and branding you intend to hold and we confirm what is producible before quoting.",
      },
      {
        q: "Are your nuggets natural alluvial pieces?",
        a: "Nuggets are naturally formed alluvial pieces from licensed sources, parcelled by weight. Each parcel carries its weight breakdown, and we do not sell machine-cut shapes as nuggets.",
      },
      {
        q: "Will you hold stock for a dealer?",
        a: "Term mandates can include a call-off structure, but the metal is bought against your commitment. We are an export agent, so carried inventory is not part of the model.",
      },
      {
        q: "What does a dealer need for their own licensing file?",
        a: "The commercial invoice, packing list, assay or inspection record, airway bill and export authorisation copies. We issue them as a pack, and you can hand copies to your regulator.",
      },
    ],
  },
  {
    slug: "family-offices",
    label: "Family offices & funds",
    title: "Physical Gold Allocation for Family Offices and Funds | Mayfox Kenya",
    description:
      "How institutional allocators take physical gold from East Africa: refined bars, vault-to-vault transfer, third-party inspection, documented provenance and settlement structures that survive an audit.",
    keywords:
      "physical gold for family office, allocate to gold bars, vault to vault gold transfer, gold provenance documentation, institutional gold purchase process, insured gold custody",
    h1: "For family offices and funds: physical gold that survives an audit",
    lede: "Allocating to physical metal is a documentation exercise with a metal attached. What your auditor asks is not the price you paid, but who held it, who tested it, who insured it and where the title moved.",
    image: img.goldStack,
    needs: [
      "An investment-grade product with an independent certificate, not a seller's word.",
      "A custody and transfer chain that is documented at every hand-off.",
      "A counterparty assessment your compliance committee can actually complete.",
      "A pricing mechanism that is defined in the contract rather than decided later.",
      "Exit optionality: metal that a future buyer can verify without contacting us.",
    ],
    howWeFit: [
      "Refined gold is produced through partner refineries to investment grade, with the certificate issued by the refining facility.",
      "Buyer-appointed inspection is available at every stage, including witnessing sampling and sealing before export.",
      "We sit on the trade-desk side of the structure: sourcing, assay liaison, documentation and logistics — the metal is held and moved by licensed parties, and the papers name them.",
      "Indicative pricing is time-limited and the contract defines the fixing basis, so nobody is arguing about a stale number.",
      "Settlement runs through corporate accounts against the document pack. We do not take advance fees, cash collections or personal-account transfers.",
    ],
    mandate: [
      { label: "Product taken", value: "Investment-grade refined bars; doré only where the fund accepts assay risk" },
      { label: "Pricing basis", value: "Benchmark on the agreed fixing date, plus stated all-in costs" },
      { label: "Assay authority", value: "Refining facility certificate, with buyer verification at option" },
      { label: "Logistics", value: "Insured air freight or vault-to-vault transfer with named custodians" },
      { label: "Contract form", value: "One-off purchase or a staged programme across several tranches" },
    ],
    stalls: [
      "Allocating to doré without accepting that the assay result arrives after the metal moves: an investment committee should decide that before, not after.",
      "Judging a counterparty on a website: the verification is documents, licence chain and a live call-back to published details.",
    ],
    faqs: [
      {
        q: "Can a fund buy doré rather than refined bars?",
        a: "It can, but the economic case is refining margin against assay and timing risk. Most investment mandates end up on refined product, and we are straightforward about which buyers doré actually suits.",
      },
      {
        q: "Who holds custody during transit?",
        a: "Licensed logistics and secure-custody providers named in the contract. Mayfox arranges the export and documents the chain; we are not a custodian.",
      },
      {
        q: "How is the price fixed?",
        a: "Against a recognised benchmark on a date defined in the agreement. The alternative — 'the price on the day it arrives' — is how both sides get surprised, so it is written down instead.",
      },
      {
        q: "What does your compliance process ask of a buyer?",
        a: "Entity details, source-of-funds confirmation and jurisdiction checks. It is the same light-touch pack we would expect from a counterparty of any size, and it is completed before metal moves.",
      },
    ],
  },
  {
    slug: "trading-houses",
    label: "Trading houses",
    title: "Gold Export Mandates for Trading Houses and Brokers | Mayfox Kenya",
    description:
      "Structures for intermediaries brokering East and Central African gold: mandate documentation, traceable sourcing, price mechanisms and back-to-back settlement that protects both ends of the trade.",
    keywords:
      "gold trading house supplier, gold broker mandate africa, back to back gold trade, doré offtake agreement, gold export agent kenya, traced gold sourcing intermediary",
    h1: "For trading houses: a mandate you can put your name to",
    lede: "You sit between a buyer who has never seen the metal and a source that has never seen the money. Our job is to make the middle of that trade boring: documents that check out, prices that are defined, and metal that matches its description.",
    image: img.tradingFloor,
    needs: [
      "Traceable sourcing you can represent to a buyer without hedging language.",
      "A price structure you can re-offer with a margin and still be accurate.",
      "Timing you can commit to, with the export formalities already understood.",
      "Back-to-back settlement so you are not carrying the metal on your own balance sheet.",
      "A counterparty that survives the buyer's due diligence, because your reputation is attached to ours.",
    ],
    howWeFit: [
      "Origin, licence chain and sourcing route are documented per consignment, so representations you make are supportable.",
      "Indicative quotes state the basis and the validity window, which lets you price your own leg without guessing.",
      "Documentation and logistics are handled by us on the export side, on a timetable agreed before the metal is booked.",
      "Where the buyer and the seller are both mandated, we work back-to-back and say plainly which party we act for.",
      "Your buyer can appoint their own testing house at any point in the process.",
    ],
    mandate: [
      { label: "Product taken", value: "Doré bars and nuggets; refined product on request" },
      { label: "Pricing basis", value: "Published indicative basis plus a stated validity window, for your pricing leg" },
      { label: "Assay authority", value: "Independent assay, with buyer-side verification at option" },
      { label: "Logistics", value: "Insured air freight, documentation led rather than improvised" },
      { label: "Contract form", value: "Back-to-back mandates or serial spot trades under one framework" },
    ],
    stalls: [
      "Intermediaries presenting a mandate they cannot evidence. We act for a disclosed party and can confirm our role to the counterparty.",
      "Timetables built on hope: the export authorisation sequence has an order, and it is the same order every time.",
    ],
    faqs: [
      {
        q: "Do you sign non-circumvention agreements?",
        a: "Confidentiality and mandate terms are documented as part of the agreement. What we will not do is promise protection in exchange for a fee — an NCNDA should cost nothing.",
      },
      {
        q: "Can you quote a price I can re-offer?",
        a: "Yes. The indicative quote states the basis, the deduction structure and the validity period, so your margin is a deliberate number rather than an assumption.",
      },
      {
        q: "How fast can a consignment actually move?",
        a: "Once the product, documentation and settlement structure are agreed, the remaining steps are execution. Any participant who guarantees a fixed number of days before seeing the paperwork is the one to check hardest.",
      },
      {
        q: "Which intermediaries should avoid this market?",
        a: "Anyone unwilling to verify the licence chain or to let the buyer appoint testing. This market punishes those two shortcuts faster than any other commodity desk.",
      },
    ],
  },
  {
    slug: "jewellery-manufacturers",
    label: "Jewellery manufacturers",
    title: "Gold for Jewellery Manufacturers and Casters | Mayfox Kenya",
    description:
      "Doré, nuggets and refined gold for manufacturers and casters: fineness you can plan a melt around, documented sourcing, parcel sizes suited to foundry intake and settlement against verifiable assay.",
    keywords:
      "gold doré for casters, raw gold for jewellery manufacturer, gold fineness for melting, karat gold sourcing africa, refined gold granules supplier, gold supplier for jewellers",
    h1: "For manufacturers and casters: fineness you can plan a melt around",
    lede: "A foundry does not care about a story. It cares about the assay, the weight, and whether the next parcel behaves like the last one. That is the brief we try to meet.",
    image: img.goldNuggets,
    needs: [
      "A declared fineness band you can rely on when setting karat targets.",
      "Parcel sizes that fit how you actually take metal in.",
      "Predictable chemistry, so your alloying maths does not change every consignment.",
      "Sourcing you can defend if a customer or certifier asks about provenance.",
      "Commercial terms that do not require a finance department to decode.",
    ],
    howWeFit: [
      "Doré is presented with its assayed fineness band, typically 85–95%, and the certificate travels with the parcel.",
      "Nuggets and alluvial material are parcelled by weight with an inspection record, so you know what is arriving.",
      "Where your process needs fine metal, refined product is sourced through partner refineries rather than described loosely.",
      "Repeat parcels can be structured with an agreed price mechanism, so planning a production run does not require a fresh negotiation.",
      "Documentation is complete enough for a jeweller's own compliance check, including origin and export papers.",
    ],
    mandate: [
      { label: "Product taken", value: "Doré bars, alluvial nuggets, refined gold where fine metal is required" },
      { label: "Pricing basis", value: "Contained gold against the agreed benchmark, less refining and treatment" },
      { label: "Assay authority", value: "Independent certificate; buyer verification at option before melt" },
      { label: "Logistics", value: "Insured air freight in parcel sizes matched to your intake" },
      { label: "Contract form", value: "Recurring parcels under a simple framework, or single lots" },
    ],
    stalls: [
      "Buying doré as if it were 999 fine: the shortfall is a refining step your foundry has to price, not a discount to ignore.",
      "Assuming mixed parcels behave alike: consolidated material varies, so declared origin and fineness matter more than the headline price.",
    ],
    faqs: [
      {
        q: "What fineness is Kenyan and regional doré?",
        a: "Commonly in the 85–95% range, depending on the ore body and how the material was concentrated and smelted. The number that matters is the assay on your parcel, not the market's average.",
      },
      {
        q: "Can a smaller manufacturer buy directly?",
        a: "Yes, provided the buyer can complete KYC and take the metal with correct import arrangements in their own jurisdiction. Parcel sizes are what usually set the practical floor.",
      },
      {
        q: "Do you supply refined granules for casting?",
        a: "Refined gold can be sourced through partner refineries in formats agreed in advance. Specific granulation and branding requests are a production question, confirmed before quoting.",
      },
      {
        q: "How do I check the metal is not conflict-linked?",
        a: "Ask for the sourcing records and export papers, and verify them with the issuing authorities rather than accepting a certificate image. Our programme is built around traced, licensed sources — the guide to what to request is on the export licence page.",
      },
    ],
  },
];

export function findSegment(slug: string): BuyerSegment | undefined {
  return buyerSegments.find((segment) => segment.slug === slug);
}
