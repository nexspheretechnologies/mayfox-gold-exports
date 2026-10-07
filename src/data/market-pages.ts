export interface MarketFaq {
  q: string;
  a: string;
}

export interface MarketData {
  slug: string;
  country: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  pageTitle: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  introParagraphs: string[];
  stats: { value: string; label: string }[];
  shippingSection: {
    title: string;
    paragraphs: string[];
  };
  complianceSection: {
    title: string;
    paragraphs: string[];
  };
  whyMayfox: string[];
  faqs: MarketFaq[];
  /** How this market actually buys precious metals: institutions, hubs and proof expectations. */
  buyerClimate?: string[];
  /** Air-freight / customs corridor into this market and the paperwork local buyers ask to see. */
  logisticsNote?: string;
  /** How a first trade with an unfamiliar East African counterparty is customarily structured. */
  settlementNote?: string;
  /** Market-specific questions a local compliance officer should ask before a first trade. */
  dueDiligence?: string[];
  /** Internal links surfaced in the page's Explore More grid. */
  relatedLinks?: { label: string; path: string }[];
}

export const marketPages: MarketData[] = [
  {
    slug: "usa",
    country: "United States",
    eyebrow: "Gold Supply for the United States",
    heroTitle: "Buy Gold Dore Bars from Kenya for US Investors & Institutions",
    heroSubtitle: "Wholesale gold export agent for American refineries, bullion dealers, investment funds and institutional buyers seeking verified African gold with full LBMA documentation and insured transatlantic delivery.",
    pageTitle: "US Gold Dore Export Agent — Buy Gold Bars from Kenya | Mayfox",
    description: "Wholesale gold export agent for the United States. Buy verified gold dore bars and investment-grade bars from Kenya's leading exporter. LBMA documentation, insured delivery to US refineries and institutions.",
    keywords: "Buy gold dore bars, wholesale gold export agent, buy gold bars online, gold dore export agent USA, gold investment bars, LBMA gold export agent USA, wholesale precious metals, institutional gold export agent, gold import USA, African gold export agent USA, gold exporter USA, gold from Kenya to USA, gold for American buyers",
    ogTitle: "Gold Dore Export Agent USA — Buy African Gold Wholesale | Mayfox",
    ogDescription: "Wholesale African dore gold for US institutions. Verified 999.9 bars with full LBMA documentation and insured delivery to American refineries and dealers.",
    introParagraphs: [
      "The United States is the world's largest institutional gold market, home to LBMA Good Delivery refineries, COMEX-approved vaults, bullion banks and a vast network of coin dealers, wealth managers and ETF custodians. American buyers demand verifiable chain-of-custody, independent assay certification and strict regulatory compliance — standards that Mayfox meets on every consignment.",
      "Mayfox provides the US market with refined 999.9 bars through our partner refineries, dore bars (85–95%), gold nuggets and refined 995 bars sourced from Kenya, Tanzania, Uganda and DRC Congo. Every shipment is documented with Certificate of Origin, independent SGS assay, Kenyan export licence and customs clearance paperwork required for US import under CBP and FinCEN regulations.",
      "Our US trade corridor runs Nairobi → New York (JFK), Miami, Los Angeles and Houston via Brinks and Malca-Amit secure air freight. We coordinate with US-based customs brokers, LBMA refineries and COMEX depositories to ensure seamless vault-to-vault transfer. Institutional buyers benefit from escrow settlement through our Dubai (DMCC) trade desk and SWIFT transfer via Kenyan and international correspondent banks.",
      "Whether you are a US bullion dealer seeking a consistent African gold supply line, a refinery sourcing dore for further processing, or an investment fund diversifying into physical East African gold, Mayfox provides the verified supply chain, KYC-compliant onboarding and transparent pricing you require."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "JFK/MIA", label: "US Entry Ports" },
      { value: "48hr", label: "Quote Turnaround" },
      { value: "$480M+", label: "Settled Value" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to the United States",
      paragraphs: [
        "US-bound gold shipments depart Nairobi's Jomo Kenyatta International Airport (JKIA) via secure air freight operated by Brinks, Malca-Amit or Loomis. Transit time to JFK, Miami, Los Angeles or Houston is typically 3–5 business days from cleared funds, including customs clearance at both origin and destination.",
        "Each consignment includes a Certificate of Origin, Commercial Invoice, Packing List, independent SGS or KEBS assay report, Kenyan Ministry of Mining export permit, airway bill and all-risk marine cargo insurance. US import clearance requires CBP Form 7501 and may involve a customs bond depending on consignment value — Mayfox coordinates with US-licensed customs brokers to ensure compliant entry.",
        "Vault-to-vault transfer to LBMA refineries in New York, Miami or Los Angeles is standard. Institutional buyers can also arrange delivery to COMEX-approved depositories or IRS-approved precious metals storage facilities. All shipments are fully insured from our Nairobi vault to your designated receiving vault."
      ]
    },
    complianceSection: {
      title: "US Import Compliance & Regulatory Framework",
      paragraphs: [
        "Gold imported into the United States from Kenya benefits from AGOA (African Growth and Opportunity Act) preferential treatment. Mayfox provides all documentation required by US Customs and Border Protection (CBP) including NAFTA/AGOA Certificates of Origin where applicable. We operate under OECD Due Diligence Guidance for Responsible Supply Chains and the LBMA Responsible Gold Guidance.",
        "Our KYC and AML protocols meet FinCEN requirements for precious metals dealers. Every transaction is documented with full beneficial ownership disclosure, source-of-funds verification and sanctions screening against OFAC, UN, EU and UK lists. Institutional buyers receive a complete compliance pack before shipment, suitable for their own regulatory audit trail.",
        "Mayfox can coordinate directly with your US customs broker, compliance officer and receiving refinery to ensure all documentation meets US import requirements before the consignment leaves Nairobi."
      ]
    },
    whyMayfox: [
      "Direct supply from licensed East African cooperatives — no intermediaries inflating cost",
      "Independent SGS/KEBS assay on every consignment before shipment",
      "Full US import documentation including CBP-compliant certificates",
      "Escrow and SWIFT settlement via Dubai (DMCC) trade desk",
      "AGOA-compliant origin documentation for preferential US entry",
      "KYC/AML cleared onboarding in 24–48 hours",
    ],
    faqs: [
      { q: "Can I import gold from Kenya into the United States?", a: "Yes. Gold imports from Kenya into the US are permitted under CBP regulations. Mayfox provides all required documentation: Certificate of Origin, independent assay, export permit, commercial invoice, airway bill and insurance certificate. We coordinate with US-licensed customs brokers for compliant CBP entry." },
      { q: "What is the minimum order for US buyers?", a: "The minimum order for US institutional buyers is 1 kg for refined 999.9 gold bars and 500 g for dore bars or nuggets. Larger wholesale consignments of 10 kg+ benefit from volume pricing. Contact the Mayfox trade desk for a tailored quote." },
      { q: "How is gold shipped from Kenya to the USA?", a: "Via Brinks, Malca-Amit or Loomis secure air freight from JKIA Nairobi to JFK (New York), Miami, Los Angeles or Houston. Vault-to-vault transfer with all-risk marine cargo insurance. Typical transit time: 3–5 business days from cleared funds." },
      { q: "Do you supply COMEX-good-delivery bars?", a: "Mayfox provides investment-grade 999.9 (24 karat) bars that meet the fineness requirements for LBMA Good Delivery refiners. We can deliver directly to COMEX-approved refiners and depositories in the US for further processing if needed." },
      { q: "What purity gold do you supply to the US market?", a: "Investment-grade 99.99% (999.9) refined bars, refined 99.5% (995) bars, dore bars at 85–95% purity and gold nuggets at 85–92% purity. Every consignment includes an independent SGS or KEBS assay certificate." },
      { q: "How do US buyers pay for gold from Kenya?", a: "US buyers can pay via SWIFT bank wire transfer in USD to our Kenyan or Dubai (DMCC) accounts. We also support escrow settlement and standby letters of credit for larger institutional orders. Contact the trade desk for payment terms." },
      { q: "Is Mayfox compliant with US sanctions and AML regulations?", a: "Yes. Mayfox screens every transaction against OFAC, UN, EU and UK sanctions lists. We conduct full KYC and source-of-funds verification on all buyers. Our compliance programme meets the standards expected by US institutional buyers and their compliance departments." },
      { q: "Does Mayfox trade as principal or as agent in a US transaction?", a: "As agent. Mayfox represents licensed Kenyan cooperatives and artisanal miners it is mandated to work with; it does not own a mine, refinery or smelter, and refined 995 and 999.9 bars are obtained through partner refineries. Your contract should state plainly which entity holds title to the metal at each stage of the trade." },
      { q: "Can a US buyer have the metal tested before funds move?", a: "That is customary practice and Mayfox can arrange it as agent: independent assay before loading, verification or re-assay at a US laboratory or receiving refinery on intake, and settlement released against that agreed result within a stated tolerance. Who appoints the laboratory, who pays for testing and how a discrepancy is resolved belong in the contract, not in marketing copy." },
    ],
    buyerClimate: [
      "American gold buyers fall into two cultures that ask different questions. Refineries, custodians, funds and approved vault operators buy on documented process: they want the Kenyan licence chain, the cooperative mandate, buying-station records, an assay from a laboratory they recognise and a compliance file their own counsel can audit line by line. Coin-and-bar dealers buy on repeatability: consistent bar formats, declared fineness that survives re-testing, and a counterparty that answers quickly. Because Mayfox acts as an export agent for Kenyan cooperatives and artisanal miners, US buyers should expect a paperwork pack assembled by that agent rather than a mine-owned vault statement.",
      "US proof culture is legalistic and it is front-loaded. Expect requests for beneficial-ownership disclosure for every entity in the chain, sanctions and adverse-media screening records, evidence that the consignment left Kenya under a valid export authorisation, and assay taken before loading rather than after. Institutional buyers usually route metal straight into a US refinery or approved depository rather than holding it themselves, price in troy ounces against published benchmarks, and for dore discuss treatment and refining charges separately from the metal value. Nothing rests on trust: a first trade is typically a small trial consignment whose documentation goes to a compliance committee before a second is even discussed."
    ],
    logisticsNote:
      "Freight into the United States leaves Nairobi's Jomo Kenyatta International Airport with licensed valuables carriers and lands at the gateways American buyers already work through - New York, Miami, Los Angeles or Houston - where a bonded carrier and a US-licensed customs broker take the consignment onward. Entry is filed by that broker, so the questions US-side officers ask are structural: who is the importer of record, is the commodity correctly described and valued for the entry, and does the commercial invoice, assay certificate and airway bill tell one consistent story. Buyers routinely ask to see the Certificate of Origin, the Kenyan export authorisation, the independent assay report, the carrier's housebill details and an insurance certificate naming them or their vault. Tariff classification, filing thresholds and inspection practice should be confirmed with the broker and US Customs and Border Protection before the consignment departs Nairobi.",
    settlementNote:
      "With an unfamiliar East African counterparty the customary American structure is assay-then-settle: independent assay before loading, delivery into a mutually acceptable vault or refinery, verification or re-assay at destination, and value released only once both sides accept the recorded weight and fineness. As agent, Mayfox can arrange settlement against documents through its Nairobi or Dubai desk, release of funds on escrow, or title transfer conditioned on an independent laboratory report; these are options that depend on the banks, vaults and brokers the buyer appoints, not guarantees. What a US compliance officer should insist on is a written sequence - who holds title at each step, who carries the insurance, and what happens if the destination assay differs from the export assay.",
    dueDiligence: [
      "Which Kenyan licences and permits does Mayfox hold, and can our officer verify them directly with the issuing ministry?",
      "Does Mayfox ever take title to the metal, or does it act strictly as agent for the cooperatives and miners it represents?",
      "Who is named as importer of record in the US, and which licensed customs broker files the entry?",
      "Which laboratory issues the assay, is it accredited, and does the contract allow a second determination at destination?",
      "What sanctions and adverse-media screening has Mayfox run on the selling side, and is that file retained for our audit?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Insured global delivery", path: "/global-delivery" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "How to verify a gold offer", path: "/anti-fraud" },
    ],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    eyebrow: "Gold Dore Supply for the United Kingdom",
    heroTitle: "Gold Dore Supply for UK Dealers, Refineries & Investors",
    heroSubtitle: "LBMA-grade African dore gold for UK-based refiners, bullion dealers, jewellery manufacturers and institutional investors — full documentation, assay certification and insured delivery to London, Birmingham and Hatton Garden.",
    pageTitle: "Gold Dore UK — Gold Export Agents UK | Mayfox Gold Kenya",
    description: "Trusted gold export partner for the UK market. Buy verified African gold dore bars and investment-grade bars from Kenya. LBMA documentation, insured delivery to London refineries, dealers and institutional buyers.",
    keywords: "gold dore UK, gold export agents UK, wholesale gold UK, buy gold bars London, precious metals export agent UK, gold bullion dealer UK, LBMA gold UK, African gold UK, gold import UK, gold from Kenya to UK, institutional gold UK, gold refinery supply UK",
    ogTitle: "Gold Dore Export Agent UK — African Gold for London Refineries | Mayfox",
    ogDescription: "Verified African dore gold for UK refineries and bullion dealers. LBMA documentation, independent assay and insured delivery to London, Birmingham and Hatton Garden.",
    introParagraphs: [
      "The United Kingdom, anchored by the London Bullion Market, is the world's most important gold trading centre. The LBMA sets the global standard for gold bar quality and responsible sourcing, and London is home to the Bank of England's gold vaults, major bullion banks, refiners, ETF custodians and a centuries-old jewellery quarter in Hatton Garden. UK buyers expect world-class documentation, independent assay certification and demonstrable responsible sourcing — standards Mayfox was built to meet.",
      "Mayfox provides the UK market with refined 999.9 bars through our partner refineries, refined 995 bars, gold dore bars and nuggets sourced from Kenya, Tanzania, Uganda and DRC Congo. Every consignment is assayed by SGS or KEBS, documented with Certificate of Origin, export licence, commercial invoice and full chain-of-custody records. Our documentation suite is designed to satisfy LBMA Responsible Gold Guidance requirements and UK HMRC import procedures.",
      "The Nairobi–London trade corridor operates via secure air freight (Brinks, Malca-Amit) into Heathrow, with onward vault transfer to LBMA Good Delivery refiners, the Bank of England, bullion banks and secure storage facilities throughout the UK. Transit time is typically 3–5 business days from cleared funds. Settlement is via SWIFT in GBP or USD through our Kenyan and Dubai trade desks.",
      "Whether you are a Hatton Garden dealer, a UK gold refinery, an investment platform or a wealth manager adding physical gold to portfolios, Mayfox provides the verified African supply chain with transparent LBMA-based pricing and full regulatory compliance."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Heathrow", label: "UK Entry" },
      { value: "3-5 Days", label: "Transit Time" },
      { value: "LBMA", label: "Compliant" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to the United Kingdom",
      paragraphs: [
        "UK-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to London Heathrow. From Heathrow, secure armoured transport delivers directly to LBMA Good Delivery refiners, bullion bank vaults, the Bank of England or private secure storage facilities. Standard transit time is 3–5 business days including customs clearance at both ends.",
        "Documentation includes Certificate of Origin (Kenya), independent assay report (SGS/KEBS), Kenyan Ministry of Mining export permit, commercial invoice, packing list, airway bill and all-risk marine cargo insurance certificate. UK import is straightforward for refined gold — Mayfox coordinates with UK-based customs agents to ensure HMRC-compliant entry.",
        "All shipments are insured door-to-door from our Nairobi vault to your designated UK receiving vault. We provide real-time shipment tracking and proactive customs clearance coordination."
      ]
    },
    complianceSection: {
      title: "UK Regulatory Compliance & LBMA Standards",
      paragraphs: [
        "As an export agent to the UK market, Mayfox operates under OECD Due Diligence Guidance for Responsible Supply Chains of Minerals and the LBMA Responsible Gold Guidance — the two standards most important to UK institutional gold buyers. Our sourcing is conflict-free, traceable to licensed cooperatives and fully documented.",
        "KYC and AML protocols meet UK Money Laundering Regulations standards. Every transaction includes full beneficial ownership disclosure, source-of-wealth verification and sanctions screening against HMT (HM Treasury), OFAC, UN and EU consolidated lists. UK buyers receive a complete compliance pack suitable for their own FCA/HMRC regulatory requirements.",
        "We can supply gold in formats and purities that meet the input specifications of UK LBMA Good Delivery refiners, enabling seamless integration into the London gold market ecosystem."
      ]
    },
    whyMayfox: [
      "Direct African gold supply line for UK refineries and bullion dealers",
      "LBMA Responsible Gold Guidance-compliant sourcing and documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in GBP or USD via established banking channels",
      "Insured vault-to-vault delivery to any UK destination",
      "HMRC-compliant import documentation and customs coordination",
    ],
    faqs: [
      { q: "Can UK refineries source dore bars from Mayfox?", a: "Yes. Mayfox provides gold dore bars at 85–95% purity to UK LBMA Good Delivery refineries for further processing. Every dore consignment includes an independent assay, Certificate of Origin and full export documentation. We can deliver directly to UK refinery intake." },
      { q: "What documentation does Mayfox provide for UK gold imports?", a: "Full documentation package: Certificate of Origin (Kenya), independent SGS/KEBS assay report, Kenyan Ministry of Mining export permit, commercial invoice, packing list, airway bill and all-risk insurance certificate. All documents are suitable for HMRC import clearance and LBMA compliance audits." },
      { q: "How is gold priced for UK buyers?", a: "Against the LBMA AM/PM USD fix, which is the global benchmark and the standard UK buyers expect. Discounts apply to dore bars based on purity as assayed. Prices are quoted in USD per troy ounce with GBP equivalents available on request." },
      { q: "Can I visit Mayfox's office before placing an order?", a: "Yes. UK buyers are welcome to visit our trade desk on Rhapta Road, Westlands, Nairobi, by appointment. We encourage due diligence visits and can arrange assay laboratory tours, vault inspection and introductions to our logistics partners." },
      { q: "Do you supply Hatton Garden jewellery manufacturers?", a: "Yes. Mayfox provides refined 999.9 gold bars and grain gold suitable for jewellery manufacturing to Hatton Garden and Birmingham Jewellery Quarter buyers. Minimum order quantities apply. Contact the trade desk for a tailored supply agreement." },
      { q: "How do UK buyers pay for gold from Kenya?", a: "Payment via SWIFT bank transfer in GBP or USD to our Kenyan or Dubai (DMCC) accounts. Escrow settlement and standby letters of credit are available for larger institutional orders. Standard payment terms: funds cleared before shipment." },
      { q: "Is Mayfox gold compliant with UK sanctions regulations?", a: "Yes. We screen every transaction against the UK HMT sanctions list, OFAC, UN and EU consolidated lists. Our KYC programme meets the standards expected by FCA-regulated UK institutions. Full compliance documentation is provided to every buyer." },
      { q: "What does a UK refinery's compliance team review before accepting Kenyan dore?", a: "Expect a responsible-sourcing review of its own: supply-chain mapping back to the buying cooperative or association, a documented risk assessment and mitigation under the OECD guidance, an assay from a laboratory the refinery accepts, and evidence that the consignment left Kenya under a valid export authorisation. Mayfox supplies that pack as agent, but each UK LBMA Good Delivery refinery sets its own intake criteria, so the buyer should confirm requirements with its own compliance function before the first shipment." },
      { q: "Can Mayfox deliver into a London vault instead of a dealer's premises?", a: "Yes, that is the normal pattern for institutional UK trade. Delivery instructions name the receiving vault operator or refinery intake, the consignee and the loss payee, and valuables carriers handle the Heathrow-to-vault leg under their own security protocols. Mayfox arranges the routing as agent; storage terms, acceptance records and insurance are with the appointed vault or carrier and should be confirmed by the buyer." },
    ],
    buyerClimate: [
      "London is where gold's paperwork conventions were invented, and UK buyers trade inside them. The city's infrastructure - the LBMA good-delivery list, the bullion banks and their vault accounts, the Bank of England's secure holdings, commercial vault operators, refineries and the dealers of Hatton Garden with the Birmingham and jewellery-making quarter behind them - all speak the same language: benchmark prices quoted in USD per troy ounce with sterling conversion, settlement by instruction between accounts, and metal that moves on records rather than on sight. A UK counterparty will therefore judge an East African file by its auditability, not its enthusiasm, and will expect the seller to be comfortable with a documented chain of custody from buying station to export.",
      "The second half of the market thinks in carats, not ounces. Jewellery manufacturers and hallmarking-driven dealers care how refined metal fabricates - 9, 14, 18 and 22 carat work - and rely on the UK assay offices and the hallmarking system to guarantee article purity, so a UK maker buying through a refiner is ultimately paying for certainty about fineness. That makes British buyers unusually sceptical of declared figures they cannot re-test, and unusually accepting of assay-then-settle structures. Institutional desks additionally want pre-trade KYC, sources of wealth explained, and often references or a Nairobi meeting before a first consignment; none of that is theatre, it is what their own regulators require them to evidence."
    ],
    logisticsNote:
      "UK-bound consignments move from JKIA Nairobi with licensed valuables carriers into the London gateway the buyer's vault or refinery already uses, then onward by bonded road transport to a refinery intake, a vault operator or a dealer's appointed storage. British customs entry is made through a broker or the receiving institution's own procedures, and the questions they ask are documentary: is the metal correctly described as unworked or partly worked gold, is the value supported by the commercial invoice, and does the assay certificate match the declared weight of the consignment? Expect a UK buyer to require the Certificate of Origin, the Kenyan export authorisation, the independent assay report, the packing list, the airway bill and an insurance certificate naming the receiving party. Duty and VAT treatment of investment gold, and any entry filing requirements, should be confirmed with HMRC or the buyer's customs agent before departure.",
    settlementNote:
      "London practice is to separate metal risk from payment risk and to record both. With a first East African counterparty the customary sequence is assay before loading, delivery into a recognised vault or refinery, an intake determination by an assayer the buyer accepts, and release of funds against those confirmed documents rather than against a promise. As agent, Mayfox can arrange settlement against documents, escrow release, or title transfer conditional on an independent assay within an agreed tolerance, using the buyer's own bank, vault operator or refiner as the control points. None of this is a guarantee of outcome; what it gives a UK compliance function is a documented chain they can show their regulator, with each step signed off by an independent party.",
    dueDiligence: [
      "Which parts of the OECD and LBMA responsible-sourcing expectations does Mayfox cover as agent, and where do our own refinery intake duties begin?",
      "Can we inspect the current cooperative mandate and Kenyan export authorisation before committing funds?",
      "Which laboratory issues the assay, and is it internationally accredited or acceptable to our receiving refiner?",
      "Who physically holds and insures the metal between JKIA and the London-area vault?",
      "Are sanctions screens refreshed per consignment against UK and international lists, and can we retain the evidence?",
    ],
    relatedLinks: [
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Insured global delivery", path: "/global-delivery" },
      { label: "Gold in Kenya", path: "/gold-in-kenya" },
      { label: "Market insights", path: "/market-insights" },
      { label: "Frequently asked questions", path: "/faqs" },
    ],
  },
  {
    slug: "uae",
    country: "United Arab Emirates",
    eyebrow: "Gold Supply for the UAE",
    heroTitle: "Buy Gold Dubai — Wholesale Gold Export Agent UAE",
    heroSubtitle: "Verified African dore gold for Dubai DMCC refineries, bullion traders, jewellery manufacturers and gold souk dealers. Same-week delivery from Nairobi to Dubai with full documentation and DMCC-compliant paperwork.",
    pageTitle: "Buy Gold Dubai — Gold Export Agent UAE | Mayfox",
    description: "Wholesale gold export agent in Dubai and UAE. Buy verified African gold dore bars, nuggets from Kenya for DMCC refineries, gold traders, jewellery manufacturers. Full assay, insured delivery to Dubai.",
    keywords: "buy gold Dubai, gold export agent Dubai, wholesale gold Dubai, gold refinery Dubai, gold export agent UAE, gold exporter UAE, gold import UAE, DMCC gold, African gold Dubai, gold from Kenya to UAE, gold dore Dubai, gold trading Dubai",
    ogTitle: "Buy Gold Dubai — African Dore & Nuggets Export Agent UAE | Mayfox",
    ogDescription: "Wholesale African gold for Dubai's DMCC refineries and gold traders. Verified dore with full assay and same-week delivery from Nairobi.",
    introParagraphs: [
      "Dubai is the world's most dynamic physical gold hub. The Dubai Multi Commodities Centre (DMCC) hosts over 4,000 precious metals companies, and Dubai's gold souks, refineries, vaults and re-export trade corridors move hundreds of tonnes of gold annually into India, Turkey, Saudi Arabia and East Asia. Dubai buyers demand verified quality, competitive pricing and rapid logistics — exactly what Mayfox's Nairobi–Dubai corridor delivers.",
      "Mayfox provides the UAE market with refined 999.9 bars through our partner refineries, dore bars at 85–95% purity, gold nuggets and refined 995 bars sourced from Kenya, Tanzania, Uganda and DRC Congo. Each consignment is independently assayed by SGS or KEBS and documented with Certificate of Origin, Kenyan export permit, commercial invoice and full chain-of-custody records ready for DMCC audit.",
      "The Nairobi–Dubai trade corridor is our fastest route. Direct flights from JKIA to Dubai International (DXB) carry Brinks and Malca-Amit secure consignments, with transit times as fast as 24–48 hours from cleared funds. Delivery is made directly to DMCC vaults, refinery intake, or designated secure storage in the Al Quoz and JLT gold districts. Settlement is in USD via SWIFT to our Dubai or Nairobi accounts.",
      "For UAE-based bullion dealers, refinery operators, jewellery manufacturers and gold re-exporters, Mayfox provides a reliable African supply line priced against the LBMA USD fix with transparent premiums. We handle all export licensing and customs documentation on the Kenyan side, so your consignment arrives DMCC-ready."
    ],
    stats: [
      { value: "24-48hr", label: "Dubai Transit" },
      { value: "99.99%", label: "Max Purity" },
      { value: "DMCC", label: "Compliant" },
      { value: "15+", label: "UAE Buyers" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Dubai, UAE",
      paragraphs: [
        "The Nairobi–Dubai corridor is our most efficient route. Brinks and Malca-Amit operate direct secure air freight from JKIA Nairobi to Dubai International Airport (DXB). Transit time is typically 24–48 hours from departure, making this one of the fastest gold trade corridors in the Mayfox network.",
        "Documentation for UAE import includes Certificate of Origin, Kenyan Ministry of Mining export permit, independent assay, commercial invoice, packing list, airway bill and all-risk insurance. UAE Customs clearance is straightforward for gold dore — Mayfox coordinates with Dubai-based customs agents to ensure smooth entry.",
        "Delivery is made to DMCC-approved vaults, refinery intake at Al Quoz or JLT, or any designated secure storage facility in Dubai. We can also coordinate onward re-export from Dubai under DMCC documentation if required."
      ]
    },
    complianceSection: {
      title: "DMCC Compliance & UAE Gold Regulations",
      paragraphs: [
        "The UAE, through the DMCC and the UAE Good Delivery Standard, has established itself as a world leader in responsible gold sourcing. Mayfox operates under OECD Due Diligence Guidance and the LBMA Responsible Gold Guidance, producing documentation that meets DMCC audit requirements for responsible sourcing and chain-of-custody.",
        "All transactions are screened against UAE, UN, OFAC and EU sanctions lists. KYC protocols include full beneficial ownership disclosure and source-of-funds verification. UAE buyers receive a compliance pack suitable for DMCC Responsible Sourcing audits and UAE Central Bank reporting.",
        "Mayfox's documentation is designed to integrate seamlessly with DMCC vault operators' compliance requirements, enabling quick turnaround from import to re-export for UAE traders."
      ]
    },
    whyMayfox: [
      "Fastest delivery: 24–48 hours Nairobi → Dubai direct",
      "DMCC-compliant documentation for seamless UAE import and re-export",
      "Independent SGS assay on every consignment before departure",
      "SWIFT settlement in USD to Dubai or Nairobi accounts",
      "Experienced UAE trade desk familiar with DMCC requirements",
      "Direct delivery to Al Quoz, JLT and DMCC vaults",
    ],
    faqs: [
      { q: "How quickly can you deliver gold to Dubai?", a: "The Nairobi–Dubai corridor is our fastest route. Typical transit time is 24–48 hours from departure through Brinks or Malca-Amit air freight from JKIA to Dubai International Airport. Same-week delivery is standard for cleared orders." },
      { q: "Do you supply DMCC refineries?", a: "Yes. Mayfox provides dore bars at 85–95% purity to DMCC-registered refineries in Al Quoz and JLT. Every dore consignment includes an independent assay and full export documentation suitable for DMCC refinery intake and audit." },
      { q: "What is the minimum order for UAE buyers?", a: "Our standard minimum is 1 kg for refined gold and 500 g for dore bars or nuggets. Larger wholesale consignments of 10 kg+ benefit from volume pricing. Contact the Dubai trade desk for a specific quote." },
      { q: "Can Mayfox arrange re-export from Dubai?", a: "Yes. We can coordinate with DMCC-registered vaults and logistics partners in Dubai to arrange onward re-export to India, Turkey, Saudi Arabia or other destinations under DMCC documentation. Contact the trade desk to discuss re-export requirements." },
      { q: "How do UAE buyers pay?", a: "Payment via SWIFT bank transfer in USD to our Dubai (DMCC) or Nairobi accounts. Escrow settlement is available for larger orders. Funds must be cleared before shipment. We can also accept payment through DMCC-registered banking partners." },
      { q: "Is Mayfox DMCC compliant?", a: "Yes. Our sourcing and documentation meet DMCC Responsible Sourcing standards. We provide full chain-of-custody, independent assay and KYC/AML compliance packs suitable for DMCC audit. We work with DMCC-registered counterparties regularly." },
      { q: "Do you supply gold to the Dubai Gold Souk?", a: "Mayfox provides wholesale gold dore to established Dubai gold traders and jewellery manufacturers, many of whom serve the Gold Souk retail market. Minimum wholesale quantities apply. Contact the trade desk for qualifying criteria." },
      { q: "Does buying through a DMCC-registered entity change what Mayfox has to provide?", a: "It raises the documentary standard rather than changing the product. A free-zone counterparty importing for refining, vaulting or onward sale needs the Kenyan export authorisation, Certificate of Origin, independent assay and chain-of-custody records to be complete and consistent, because its own regulators and its onward buyers will both review the same file. Mayfox assembles that pack as agent; whether a given entity is registered and what its obligations are is confirmed with the DMCC and the UAE authorities." },
      { q: "Can we import dore into the UAE and refine it there?", a: "That is the dominant regional pattern, and several Emirates refineries take foreign dore on agreed refining terms. Mayfox is an export agent, not a refiner, so the refining specification, recovery basis and charges are contracted directly between you and the refinery you choose; we arrange the pre-shipment assay, sealed samples, export documentation and delivery into the refinery's intake as your agent." },
    ],
    buyerClimate: [
      "The United Arab Emirates is a jurisdiction of registered zones rather than a single open market, and that shapes how buyers there operate. Precious metals companies sit inside the DMCC free zone and are expected to satisfy its responsible-sourcing and reporting requirements; the UAE Good Delivery Standard gives locally refined bars a national mark of quality; the central bank's anti-money-laundering framework reaches dealers and refiners; and federal tax rules treat investment-grade gold differently from other supplies. A UAE counterparty therefore usually buys as a registered entity that imports, vaults or refines and then re-exports - so its real demand is a file that survives two audits: the one at UAE entry and the one performed by the onward buyer in India, Turkey or the Gulf.",
      "Emirati refineries and traders are also technically demanding about feedstock. Dore bars are accepted against a published intake specification and settled on a refining basis, so the declared fineness, impurities and sample protocol matter more to the buyer than the headline weight. Local dealing culture quotes in grams and tola alongside troy ounces, is fast-moving, and expects price to be struck against a recognised benchmark at a stated moment. Proof a UAE buyer will ask for before a first trade: an assay from a laboratory they recognise, sealed retained samples, the Kenyan export authorisation, and evidence that the agent's mandate from the selling cooperatives is current for that particular consignment."
    ],
    logisticsNote:
      "The Emirates end of the corridor runs from JKIA Nairobi to Dubai International with licensed valuables carriers, and clearance is handled by the importer's own customs agent, frequently inside a free-zone procedure rather than a general import. What a UAE counterpart asks to see is unusually short but unusually strict: the Certificate of Origin, the Kenyan export authorisation, the independent assay report, the commercial invoice and packing list, the airway bill with the carrier's references, and the insurance certificate naming the receiving vault or refinery. If the metal is intended for onward shipment, the same documents travel with it and will be read again by the next buyer, so completeness before departure is what protects the trade. Customs treatment, VAT position on the specific form of gold and free-zone procedures must be confirmed with UAE Customs, the Federal Tax Authority and the buyer's own agent.",
    settlementNote:
      "Gulf trade moves on short cycles, and a first arrangement with an East African agent reflects that. Customary practice is assay before loading at a laboratory both sides accept, delivery into a refinery intake or registered vault, an intake determination within a stated tolerance, and release of value against the resulting documents - either by wire from the buyer's bank, through an escrow arrangement, or on a settlement-against-documents basis via our Nairobi or Dubai desk. Mayfox acts as agent in these structures and can coordinate the sampling, assay appointments and document flow; it cannot underwrite the outcome, since title, insurance and payment all sit with the counterparties each side appoints. Buyers who intend to re-export should agree who holds title at the vault before freight is booked.",
    dueDiligence: [
      "Is the importing entity DMCC-registered, and which responsible-sourcing review will it apply to our file?",
      "Will the Kenyan export authorisation, assay and origin documents satisfy both a DMCC audit and an onward re-export audit?",
      "Which laboratory performs the pre-loading assay, and does the refinery's intake assay govern settlement?",
      "Can Mayfox evidence that its mandate from the selling cooperatives is current for this consignment?",
      "What is the UAE VAT and customs treatment of the exact form of gold we are importing, and who confirms it?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Market insights", path: "/market-insights" },
      { label: "Request a quote", path: "/request-quote" },
    ],
  },
  {
    slug: "dubai",
    country: "Dubai",
    eyebrow: "Gold Supply for Dubai",
    heroTitle: "Dubai Gold Supply — Wholesale Dore & Nuggets from Africa",
    heroSubtitle: "Direct African gold for Dubai's DMCC ecosystem. Investment-grade dore bars and nuggets with verified assay, same-week delivery and DMCC-compliant documentation for refiners, traders and jewellery manufacturers.",
    pageTitle: "Dubai Gold Export Agent — African Dore & Nuggets Wholesale | Mayfox",
    description: "Direct gold export agent for Dubai. Buy verified African gold dore bars and nuggets. Same-week delivery to DMCC vaults and refineries. Full assay, export docs, DMCC-compliant documentation.",
    keywords: "Dubai gold export agent, gold export agent Dubai, African gold Dubai, gold dore Dubai, DMCC gold export agent, gold import Dubai, gold from Kenya to Dubai, wholesale gold Dubai, gold refinery Dubai supply, gold Dubai",
    ogTitle: "Dubai Gold Export Agent — African Dore Direct | Mayfox",
    ogDescription: "Direct African gold supply for Dubai's DMCC refineries and traders. Verified dore, same-week delivery, full assay and DMCC-compliant documentation.",
    introParagraphs: [
      "Dubai has transformed itself into the world's busiest physical gold trading hub. The DMCC free zone, the Gold Souk in Deira, the Al Quoz refinery district and the JLT gold cluster form an integrated ecosystem that refines, trades and re-exports gold to India, the Gulf, Turkey and beyond. Dubai buyers expect speed, verified quality and competitive pricing — the three pillars of Mayfox's Nairobi–Dubai corridor.",
      "Mayfox provides Dubai with refined 999.9 bars through our partner refineries, dore bars at 85–95%, gold nuggets and refined 995 bars sourced from our licensed East African supply chain. Every consignment is independently assayed by SGS or KEBS and documented for DMCC compliance, with Certificate of Origin, Kenyan export permit and full chain-of-custody records.",
      "Direct flights from JKIA Nairobi to Dubai International carry our Brinks and Malca-Amit secure consignments, arriving within 24–48 hours of departure. Delivery is made to DMCC-approved vaults, refinery intake at Al Quoz, or secure storage in JLT. Dubai's position as our fastest trade corridor makes Mayfox the ideal African supply partner for Dubai-based gold businesses.",
      "Whether you operate a DMCC refinery, trade gold across the Gulf, manufacture jewellery in Deira or manage a bullion vault, Mayfox delivers verified African gold on your timeline with documentation that passes every DMCC audit."
    ],
    stats: [
      { value: "24-48hr", label: "Dubai Transit" },
      { value: "99.99%", label: "Max Purity" },
      { value: "DMCC", label: "Compliant" },
      { value: "30+", label: "Monthly Consignments" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Dubai",
      paragraphs: [
        "Gold shipments to Dubai depart JKIA Nairobi via Brinks or Malca-Amit secure air freight on direct flights to Dubai International Airport (DXB). This is our fastest route, with typical transit of 24–48 hours from departure to delivery at your Dubai vault or refinery.",
        "Documentation includes Certificate of Origin, Kenyan Ministry of Mining export permit, independent SGS/KEBS assay, commercial invoice, packing list, airway bill and all-risk cargo insurance. UAE Customs clearance is efficient for gold dore — Mayfox coordinates with Dubai-based customs agents.",
        "We deliver to DMCC vaults, Al Quoz refinery intake, JLT secure storage and any other Dubai address. Re-export coordination from Dubai under DMCC documentation is also available for buyers serving onward markets."
      ]
    },
    complianceSection: {
      title: "DMCC & UAE Gold Compliance",
      paragraphs: [
        "Dubai has established world-class gold compliance standards through the DMCC Responsible Sourcing programme and the UAE Good Delivery Standard. Mayfox's sourcing and documentation meet these requirements, with full chain-of-custody records, independent assay and OECD-compliant due diligence on every consignment.",
        "All transactions are screened against UAE, UN, OFAC and EU sanctions lists. KYC includes full beneficial ownership disclosure and source-of-funds verification. The compliance pack provided to UAE buyers is designed to satisfy DMCC audit requirements and UAE Central Bank reporting obligations.",
        "For re-exporters, our documentation enables smooth DMCC-to-DMCC and DMCC-to-overseas transfers with complete audit trail integrity."
      ]
    },
    whyMayfox: [
      "Fastest delivery in the Mayfox network: 24–48 hours to Dubai",
      "DMCC-compliant documentation for import, refining and re-export",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD via Dubai and Nairobi banking partners",
      "Direct delivery to Al Quoz refineries, JLT vaults and DMCC storage",
      "Experienced with Dubai gold trade — we speak your business language",
    ],
    faqs: [
      { q: "How fast is gold delivery to Dubai?", a: "Dubai is our fastest trade corridor — 24 to 48 hours from departure at JKIA Nairobi to delivery at your Dubai vault or refinery, via Brinks or Malca-Amit secure air freight." },
      { q: "Can Mayfox deliver dore to my DMCC refinery?", a: "Yes. We regularly supply dore bars at 85–95% purity to DMCC-registered refineries in Al Quoz and JLT. Each dore consignment includes an independent SGS assay, Certificate of Origin and full export documentation." },
      { q: "What is the minimum order for Dubai buyers?", a: "Minimum 1 kg for refined dore bars, 500 g for dore or nuggets. Wholesale orders of 10 kg+ benefit from tiered volume pricing. Contact the Dubai trade desk for a specific quote." },
      { q: "Do you handle re-export from Dubai to other markets?", a: "Yes. We can coordinate with DMCC-registered logistics partners to arrange re-export from Dubai to India, Saudi Arabia, Turkey and other Gulf and Asian destinations under DMCC documentation." },
      { q: "How do I pay for gold as a Dubai buyer?", a: "SWIFT USD transfer to our Dubai or Nairobi accounts. Escrow settlement available for institutional orders. Payment must be cleared before shipment. We work with DMCC-registered banking partners." },
      { q: "Is your gold suitable for the Dubai Gold Souk?", a: "Mayfox provides wholesale gold to established Dubai traders and manufacturers, many of whom serve the Gold Souk market. We provide dore and grain gold in wholesale quantities with full documentation." },
      { q: "Will a Dubai dealer accept Kenyan dore without testing it themselves?", a: "In practice no, and that is healthy. City dealers and refineries weigh, sample and assay incoming metal at their own intake and expect settlement to move with that result. Mayfox is content with that convention as agent: we supply an independent pre-loading assay, sealed retained samples and full export documents, and structure the first trade so the buyer's own intake determination is part of the payment sequence." },
      { q: "Can we take delivery in a Dubai vault and decide the onward route later?", a: "Yes. Many Dubai counterparties buy into secure city storage or a registered vault operator first and choose the onward destination once the metal is assayed and priced. Freight, acceptance records and insurance sit with the appointed carrier and vault, and onward re-export documentation travels with the consignment. Tell the desk your intended route at quotation stage so the paperwork is issued for that destination from the outset." },
    ],
    buyerClimate: [
      "Dubai buys gold as a city trade, not only as a jurisdiction. Around the Deira gold souk and the jewellery workshops behind it, dealers quote locally in dirhams per gram alongside international benchmarks, reputations are checked through a small circle of families and brokers rather than through documents alone, and metal that lands is expected to move quickly - into refinement, into 22-carat jewellery stock, or onward as re-export - because idle inventory carries vault and financing cost. That turnover speed is the real characteristic of the market: buyers are comfortable with unfamiliar origins provided a transaction is short, the price is struck at a defined moment, and the consignment can be tested at their own counter or at the Al Quoz intake desk down the road.",
      "Two questions dominate a Dubai buyer's mind, and they are different from a European compliance officer's. First, is this metal what it says it is - so the local habit is weigh, sample and re-assay at intake, and treat the seller's certificate as the starting figure rather than the conclusion. Second, do the documents travel cleanly - because a Dubai dealer who re-sells into India, Turkey or the Gulf transfers the whole file to the next owner, and a gap in origin papers destroys resale value. A new East African counterparty is therefore judged on whether its assay, origin certificate and export authorisation line up exactly, and on whether it accepts a small trial consignment without arguing about who tests the metal."
    ],
    logisticsNote:
      "Dubai is the shortest leg in the Mayfox network: valuables carriers move consignments from JKIA Nairobi to Dubai International, where the buyer's appointed agent or carrier collects and transports to a refinery intake, a registered vault or a dealer's storage in the gold districts. Local import formalities are handled by the receiving entity's customs agent, so the buyer's document requests are practical and predictable: Certificate of Origin, the Kenyan export authorisation, the independent assay report, commercial invoice and packing list with weights that reconcile to the assay, the airway bill with the carrier's house reference, and the insurance certificate naming the consignee. Where the metal is destined for onward re-export, Dubai counterparties want that file complete at the moment of import, because the next buyer will examine the same papers. Customs and tax treatment in the specific free-zone or mainland procedure used must be confirmed with UAE Customs and the buyer's agent.",
    settlementNote:
      "Dubai's habit with an unknown counterparty is to keep the trade short and the risk visible. The customary structure is a single trial consignment, price struck against a recognised benchmark at an agreed fixing moment, independent assay before loading with sealed samples retained, and settlement released after the buyer's own intake assay confirms weight and fineness inside the tolerance both sides wrote down. As agent, Mayfox can arrange that sequence, or settlement against documents through the Dubai or Nairobi desk, or payment on escrow release once the receiving vault records acceptance. None of these are guarantees: they put an independent test between the two parties, and they leave title, insurance and payment in the hands of the carriers, vaults and banks each side appoints.",
    dueDiligence: [
      "Who weighs and assays the consignment at our intake, and does that result set the final price?",
      "Can you give us sealed retained samples so a dispute can be resolved without re-melting the bars?",
      "Are the origin certificate, export authorisation and invoice consistent enough to survive an onward sale by us?",
      "Which carrier and which Dubai vault or refinery intake physically holds the metal, and under whose insurance?",
      "Will you accept a single trial consignment before any repeat-order discussion?",
    ],
    relatedLinks: [
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "How to verify a gold offer", path: "/anti-fraud" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Request a quote", path: "/request-quote" },
      { label: "Gold in Africa", path: "/gold-in-africa" },
    ],
  },
  {
    slug: "switzerland",
    country: "Switzerland",
    eyebrow: "Swiss Gold Import Guide",
    heroTitle: "Swiss Gold Import Guide — African Dore for Swiss Refineries",
    heroSubtitle: "Supply African gold dore, gold and nuggets to Switzerland's world-leading LBMA refineries. Full OECD due diligence documentation, independent assay and insured delivery to Ticino and Neuchâtel.",
    pageTitle: "Swiss Gold Export Agent — African Dore for Swiss Refineries | Mayfox",
    description: "Swiss gold export agent. Buy African gold dore bars and nuggets for Switzerland's LBMA refineries. Verified 999.9 bars with OECD due diligence, independent assay and insured delivery to Ticino and Neuchâtel refineries.",
    keywords: "Swiss gold export agent, investment gold bars Switzerland, wholesale gold Switzerland, gold import Switzerland, Swiss gold refinery supply, gold dore Switzerland, LBMA gold Switzerland, African gold Switzerland, gold from Kenya to Switzerland",
    ogTitle: "Swiss Gold Export Agent — African Dore for Refineries | Mayfox",
    ogDescription: "African gold dore bars and nuggets for Switzerland's LBMA refineries. Full OECD documentation, independent assay and insured delivery to Ticino and Neuchâtel.",
    introParagraphs: [
      "Switzerland is the world's gold refining capital. Four of the world's largest LBMA Good Delivery refiners operate in Ticino and Neuchâtel, processing over 60% of global gold output annually. Swiss refiners demand high-purity dore, impeccable chain-of-custody documentation and rigorous OECD-compliant responsible sourcing — standards that define Mayfox's entire export operation.",
      "Mayfox provides Swiss LBMA refiners with gold dore bars at 85–95% purity, refined 995 bars and refined 999.9 gold through our partner refineries sourced exclusively from licensed East African cooperatives in Kenya, Tanzania, Uganda and DRC Congo. Every consignment is accompanied by an independent SGS assay, Certificate of Origin, Kenyan export licence and a complete OECD Due Diligence documentation pack suitable for Swiss refinery intake audits.",
      "Shipments to Switzerland travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Zurich Airport, with onward road transfer to refinery intake in Ticino (Mendrisio, Balerna) or Neuchâtel. Transit time is typically 3–5 business days from cleared funds. All consignments are fully insured from our Nairobi vault to the receiving refinery vault.",
      "For Swiss refineries seeking a verified, documented African gold supply line — whether for dore processing, bullion aggregation or direct investment-grade product sourcing — Mayfox provides the transparent pricing, regulatory rigour and logistics reliability that the Swiss market demands."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "OECD", label: "Compliant" },
      { value: "3-5 Days", label: "Zurich Transit" },
      { value: "SGS", label: "Assayed" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Switzerland",
      paragraphs: [
        "Switzerland-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Zurich Airport (ZRH). From Zurich, armoured road transport delivers directly to refinery intake in Ticino (Mendrisio, Balerna, Chiasso) or Neuchâtel (Marin, Peseux). Transit time is 3–5 business days including customs clearance.",
        "Each consignment includes Certificate of Origin (Kenya), independent SGS/KEBS assay report, Kenyan Ministry of Mining export permit, commercial invoice, packing list, OECD Due Diligence pack, airway bill and all-risk cargo insurance. Swiss customs clearance is handled through a licensed Swiss customs agent coordinated by Mayfox.",
        "All shipments are insured vault-to-vault. We provide real-time tracking and proactive communication with the receiving refinery's intake team."
      ]
    },
    complianceSection: {
      title: "Swiss Refinery Compliance & OECD Standards",
      paragraphs: [
        "Swiss LBMA refiners operate under the most rigorous responsible sourcing standards in the world: LBMA Responsible Gold Guidance, OECD Due Diligence Guidance and Swiss precious metals control legislation. Mayfox's entire sourcing and export operation is built to meet these standards.",
        "Every dore consignment destined for Swiss refineries includes a complete OECD Step 1–5 due diligence pack: supply chain mapping, risk assessment, mitigation strategy documentation, independent third-party audit trail and annual reporting data. Our KYC and AML programme meets Swiss FINMA-level expectations.",
        "We maintain detailed records of every miner, cooperative, buying station and consolidation point in our supply chain. Swiss refinery compliance teams can access this documentation before, during and after shipment."
      ]
    },
    whyMayfox: [
      "Complete OECD Step 1–5 due diligence documentation for Swiss refinery intake",
      "Independent SGS assay on every dore bars and nuggets consignment",
      "Direct delivery to Ticino and Neuchâtel refineries via Zurich",
      "SWIFT settlement in CHF, USD or EUR",
      "Full mine-to-refinery traceability records",
      "Experienced with Swiss refinery compliance requirements",
    ],
    faqs: [
      { q: "Do you supply Swiss LBMA Good Delivery refiners?", a: "Yes. Mayfox provides gold dore bars at 85–95% purity to Swiss LBMA refiners with complete OECD due diligence documentation, independent SGS assay and full chain-of-custody records. We can deliver directly to refinery intake in Ticino or Neuchâtel." },
      { q: "What OECD documentation do you provide?", a: "A complete OECD Step 1–5 due diligence pack: supply chain mapping from mine to export, risk assessment, mitigation strategy, independent third-party audit trail and annual reporting data. This meets Swiss refinery compliance requirements." },
      { q: "What purity dore do you supply to Swiss refineries?", a: "Dore bars at 85–95% gold content, assayed independently by SGS or KEBS before shipment. We can also supply refined 995 and 999.9 bars if required. Every consignment includes an assay certificate." },
      { q: "How long does delivery to Switzerland take?", a: "Typically 3–5 business days from cleared funds. Brinks or Malca-Amit secure air freight from JKIA Nairobi to Zurich, then armoured road transfer to your refinery in Ticino or Neuchâtel." },
      { q: "Can Swiss buyers visit your operations in Kenya?", a: "Yes. We welcome due diligence visits from Swiss refinery compliance teams. Visits can include our Nairobi trade desk, assay laboratory, partner vaults and licensed cooperative sourcing sites, with advance notice." },
      { q: "How do Swiss buyers pay?", a: "SWIFT bank transfer in CHF, USD or EUR to our Kenyan or Dubai accounts. Escrow and confirmed letters of credit are available for larger institutional orders. Funds cleared before shipment." },
      { q: "Do Swiss refineries buy through an agent, or only direct from miners?", a: "Both patterns exist, and the deciding factor is not the label on the seller but whether the supply chain can be documented back to identifiable licensed sources. Mayfox acts as export agent for Kenyan cooperatives and artisanal miners, and supplies the traceability, risk-assessment and assay records a Swiss intake team reviews. The refinery's own responsible-sourcing rules decide acceptance, so those criteria should be confirmed with the receiving refinery before any freight is booked." },
      { q: "Is a licence or approval needed to import gold dore into Switzerland?", a: "Switzerland applies customs declarations and statutory due-diligence and transparency duties to gold imports from conflict-affected and high-risk areas, with scope depending on the importer's size and activity. Rather than guess at your threshold, confirm the position with the Swiss Federal Customs Administration, your customs agent and the receiving refinery's compliance team. Mayfox supplies the Kenyan-side authorisations, assay and chain-of-custody records that those reviews rely on." },
    ],
    buyerClimate: [
      "Switzerland buys gold as feedstock, and that single fact explains most of the market's behaviour. The refining clusters in Ticino and Neuchâtel are home to LBMA Good Delivery refiners whose business is turning dore into certified bars for banks, dealers and investors worldwide, so they evaluate an East African consignment the way a mill evaluates grain: declared fineness against their own assay, impurity content, weight reconciliation, recovery basis and the treatment and refining terms attached. Vault-to-vault movement is the norm rather than an upgrade, transfer instructions are given between storage operators, and the metal often leaves the refinery as a different product than it arrived. A counterparty that cannot talk about sampling protocol and intake assay has not really entered the Swiss market.",
      "The second Swiss characteristic is an audit-first culture. Refineries and their compliance functions work to the OECD five-step framework, the LBMA Responsible Gold Guidance and Swiss statutory due-diligence and transparency requirements for gold from conflict-affected and high-risk areas, whose scope and thresholds must be confirmed with the competent Swiss authorities for each importer. In practice that means a Swiss reviewer wants supply-chain mapping to named cooperatives and buying stations, a documented risk assessment and mitigation, evidence of independent third-party audit, and consistency between the Kenyan export authorisation and the commercial documents. Swiss counterparties will accept artisanal and cooperative-origin dore - the country's refiners do exactly that - but only where the paperwork is complete before the consignment is accepted, not reconstructed afterwards."
    ],
    logisticsNote:
      "Swiss-bound consignments depart JKIA Nairobi with licensed valuables carriers for Zurich, where bonded road transport takes the consignment to the receiving refinery's intake in Ticino or the Neuchâtel region, or into a storage facility the buyer nominates. Swiss import is a declarable procedure with a compliance dimension: the receiving refinery or its customs agent files the entry, records the origin and value, and applies its own due-diligence review on acceptance, so declarations, thresholds and any filing duties must be confirmed with the Swiss customs administration and the buyer's agent. What a Swiss intake team asks to see before signing for freight is a familiar list, examined unusually closely: Certificate of Origin, Kenyan export authorisation, independent assay report with sample details, invoice and packing list whose weights reconcile with that assay, airway bill, insurance certificate naming the receiving vault, and the OECD-aligned supply-chain file.",
    settlementNote:
      "Swiss practice with an unfamiliar East African counterparty puts an assay between the parties rather than a promise. The customary sequence is independent determination before loading with sealed samples retained, delivery into the refinery or a mutually accepted vault, an intake assay performed by the receiving refiner or a laboratory the buyer appoints, and settlement on that result inside a tolerance band agreed in writing - with price adjusted for fine gold rather than for the seller's declared figure. As agent, Mayfox can arrange any of those structures, including settlement against documents or escrow release through the Nairobi or Dubai desk. None of it is guaranteed; the point is that title, insurance and payment each pass through an independent step, which is exactly what a Swiss refinery's compliance file needs to show.",
    dueDiligence: [
      "Can the consignment be mapped to named cooperatives and buying stations, with dates, before we accept it?",
      "Which parts of the Swiss statutory due-diligence and OECD expectations does Mayfox cover as agent, and which remain our refinery's duty?",
      "Which laboratory issues the pre-shipment assay, is it accredited, and is a re-assay dispute procedure written into the contract?",
      "Which legal entity signs the sale contract, where is it registered, and does it hold title at any point?",
      "Who insures the metal between JKIA and our refinery intake, and is our company named on the certificate?",
    ],
    relatedLinks: [
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Gold in Africa", path: "/gold-in-africa" },
      { label: "Market insights", path: "/market-insights" },
      { label: "About Mayfox", path: "/about" },
    ],
  },
  {
    slug: "singapore",
    country: "Singapore",
    eyebrow: "Gold Dore Supply for Singapore",
    heroTitle: "Gold Dore Supply for Singapore Refineries & Investors",
    heroSubtitle: "LBMA-grade African dore gold for Singapore's bullion banks, refineries, wealth managers and institutional investors. Full documentation, assay certification and insured delivery to Changi and Shenton Way vaults.",
    pageTitle: "Gold Dore Singapore — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Singapore. Buy verified African gold dore bars and investment-grade bars for Singapore refineries, bullion banks and wealth managers. Full assay and insured delivery to Singapore.",
    keywords: "gold dore Singapore, gold export agent Singapore, wholesale gold Singapore, buy gold bars Singapore, precious metals Singapore, gold import Singapore, African gold Singapore, gold from Kenya to Singapore, institutional gold Singapore, bullion dealer Singapore, gold refinery Singapore",
    ogTitle: "Gold Dore Export Agent Singapore — African Gold | Mayfox",
    ogDescription: "Verified African dore gold for Singapore's financial hub. LBMA documentation, independent assay and insured delivery to Changi and Shenton Way vaults.",
    introParagraphs: [
      "Singapore has rapidly established itself as Asia's premier gold hub. With the Singapore Bullion Market Association (SBMA), the new LBMA-accredited refinery, Singapore Freeport (Le Freeport) vaults, Changi Airport's secure cargo infrastructure and a growing community of bullion banks and wealth managers, Singapore offers a sophisticated ecosystem for gold import, storage and trading. Singapore buyers demand quality, transparency and reliability — Mayfox delivers all three.",
      "Mayfox provides the Singapore market with refined 999.9 bars through our partner refineries, dore bars at 85–95% purity, refined 995 bars and gold nuggets sourced from our licensed East African supply chain. Each consignment is independently assayed by SGS or KEBS, documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records suitable for SBMA and LBMA requirements.",
      "The Nairobi–Singapore corridor operates via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Singapore Changi Airport. Transit time is 4–7 business days. Onward delivery is made to Le Freeport vaults, Shenton Way bullion bank storage, refinery intake or any designated secure facility. Settlement is via SWIFT in USD or SGD through established banking channels.",
      "For Singapore bullion banks, wealth management platforms, refinery operators and institutional investors seeking a reliable African gold supply line, Mayfox provides verified quality, competitive LBMA-based pricing and comprehensive documentation."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Changi", label: "Singapore Port" },
      { value: "4-7 Days", label: "Transit Time" },
      { value: "24hr", label: "Quote Response" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Singapore",
      paragraphs: [
        "Singapore-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Singapore Changi Airport. From Changi, secure transport delivers to Le Freeport vaults, Shenton Way financial district storage, refinery intake or any designated facility. Transit time is 4–7 business days.",
        "Documentation includes Certificate of Origin (Kenya), independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Singapore Customs clearance is efficient — Mayfox coordinates with Singapore-based logistics partners.",
        "All consignments are insured vault-to-vault. We provide tracking and proactive customs coordination throughout transit."
      ]
    },
    complianceSection: {
      title: "Singapore Compliance & Regulatory Standards",
      paragraphs: [
        "Singapore's precious metals regulatory framework, overseen by the Ministry of Law and Singapore Customs, increasingly expects OECD Due Diligence compliance for gold imports. Mayfox operates under OECD Guidance and LBMA Responsible Gold Guidance, producing documentation that meets Singapore's evolving standards.",
        "KYC and AML protocols meet international best practice. All transactions include beneficial ownership disclosure, source-of-funds verification and sanctions screening against UN, OFAC, EU and MAS lists. Singapore buyers receive a complete compliance pack.",
        "We can coordinate with Singapore-based compliance officers and receiving vaults to ensure all documentation meets local regulatory requirements before the consignment departs Nairobi."
      ]
    },
    whyMayfox: [
      "Direct African gold supply for Singapore's growing bullion hub",
      "LBMA and OECD-compliant documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or SGD",
      "Delivery to Le Freeport, Changi vaults and Shenton Way storage",
      "Experienced with Asian institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Singapore refineries source gold dore from Mayfox?", a: "Yes. Mayfox provides gold dore bars at 85–95% purity to Singapore refineries with independent SGS assay, Certificate of Origin, OECD due diligence documentation and full export paperwork. We deliver directly to refinery intake." },
      { q: "How is gold shipped to Singapore?", a: "Via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Singapore Changi Airport, then armoured transport to Le Freeport, Shenton Way vaults or your designated receiving facility. Transit time: 4–7 business days." },
      { q: "What is the minimum order for Singapore buyers?", a: "Standard minimum is 1 kg for refined gold and 500 g for dore or nuggets. Larger wholesale orders of 10 kg+ benefit from volume pricing. Contact the trade desk for a tailored quote." },
      { q: "Do you supply gold to Singapore wealth managers?", a: "Yes. Mayfox provides refined 999.9 bars through our partner refineries to Singapore-based wealth managers, family offices and private banks seeking physical African gold allocation for client portfolios." },
      { q: "Is Mayfox compliant with Singapore regulations?", a: "Yes. Our sourcing and documentation meet OECD Due Diligence standards recognised in Singapore. We screen against UN, OFAC, EU and MAS sanctions lists and provide full KYC documentation." },
      { q: "How do Singapore buyers pay?", a: "SWIFT bank transfer in USD or SGD to our Kenyan or Dubai accounts. Escrow and letters of credit are available for larger institutional orders." },
      { q: "Does Singapore require a permit to import gold dore?", a: "Singapore applies permit and declaration controls to unworked gold and dore in certain forms, and the requirement depends on how the consignment is classified and who imports it. Confirm the position with Singapore Customs, International Enterprise Singapore and your own customs agent before booking freight. Mayfox supplies the Kenyan export authorisation, Certificate of Origin, independent assay and chain-of-custody records your declaration will be supported with." },
      { q: "Can we buy African dore and simply store it in Singapore?", a: "Yes, and many Asian buyers do exactly that: metal lands at Changi, moves into a bonded or commercial vault and stays there while the owner decides whether to refine, sell onward within the region or hold. Storage agreements, acceptance records and insurance sit with the appointed vault operator. Mayfox can arrange the inbound leg and documentation as agent, and can hold repeat consignments to the same vault arrangement once the buyer's intake assay has validated the first." },
    ],
    buyerClimate: [
      "Singapore's gold trade runs on association conventions and vault infrastructure rather than on a single exchange. The Singapore Bullion Market Association gives the market its shared vocabulary of bar specifications, dealer practice and responsible-sourcing expectations; an LBMA-accredited refinery operates in the city; secure storage exists both inside purpose-built freeport facilities and in the vaults used by banks, family offices and wealth platforms around the financial district. The practical consequence for an African consignment is that Singapore buyers often do not want the metal refined locally at all - they want it delivered into storage they control, in a form their refinery or dealer network can verify, so that it can be sold onward within Asia later without moving again.",
      "Proof expectations there are strict but economical. A Singapore counterparty expects an assay from a laboratory it recognises, weights on the packing list that reconcile with that assay, chain-of-custody from the buying cooperative through to the Nairobi vault, and a price basis stated against a recognised benchmark in USD with a tight, explicit margin. Because the city's regulated financial sector is used to screening counterparties, buyers also ask who exactly holds title, whether the seller is an agent, and how the seller's mandate from Kenyan cooperatives is evidenced. Regulatory supervision of stored metal and of dealers' anti-money-laundering duties continues to develop locally, so sophisticated Singapore buyers import standards themselves from refinery and association guidance - and current obligations should be confirmed with the relevant Singapore authority."
    ],
    logisticsNote:
      "Singapore-bound freight leaves JKIA Nairobi with licensed valuables carriers and lands at Changi, where the buyer's appointed handler moves it into bonded or commercial storage, a refinery intake, or a vault operated for a bank or family office. Import controls, declarations and any tax treatment turn on how the consignment is classified - unworked gold and dore attract permit requirements in some circumstances, while investment-grade product is treated differently - so the buyer's customs agent and the competent Singapore authority should confirm the position before departure. Documents a Singapore importer expects in hand: Certificate of Origin, Kenyan export authorisation, independent assay report, commercial invoice and packing list with reconciling weights, airway bill with the carrier's reference, and an insurance certificate naming the receiving consignee or vault. Because Asian buyers frequently re-sell intra-region, they will ask whether the same file can travel with the metal.",
    settlementNote:
      "For a first trade with an East African agent, Singapore counterparties normally keep the structure short and let an assay carry the trust. Customary practice: independent assay before loading with sealed samples retained, delivery into the buyer's own or a third-party vault, verification by an assayer the buyer appoints at that vault, and release of funds against the resulting documents - by USD wire through an established correspondent route, or on escrow terms. Mayfox acts as agent and can arrange settlement against documents, escrow release, or title transfer conditional on the destination determination within an agreed tolerance; storage acceptance records and payment are controlled by the buyer's vault and bank. Nothing here is a guarantee, and a first consignment should be sized so the re-assay tolerance is survivable for both sides.",
    dueDiligence: [
      "Which vault or freeport facility will take acceptance, and whose insurance covers the metal until then?",
      "Is the pre-shipment assay from a laboratory accredited in a way our refinery or dealer network recognises?",
      "Does the packing list reconcile to the assay certificate, bar by bar?",
      "Is Mayfox an agent or a principal, and how is its mandate from the selling cooperatives evidenced?",
      "Does our import of this classification require a trade permit, and who files it?",
    ],
    relatedLinks: [
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Gold in Kenya", path: "/gold-in-kenya" },
      { label: "Frequently asked questions", path: "/faqs" },
      { label: "Contact the trade desk", path: "/contact" },
    ],
  },
  {
    slug: "hong-kong",
    country: "Hong Kong",
    eyebrow: "Gold Dore Supply for Hong Kong",
    heroTitle: "Gold Dore Supply for Hong Kong Dealers & Investors",
    heroSubtitle: "Verified African gold for Hong Kong's bullion dealers, jewellery manufacturers, wealth managers and institutional buyers. Full documentation, independent assay and insured delivery to Hong Kong vaults.",
    pageTitle: "Gold Dore Hong Kong — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Hong Kong. Buy verified African gold dore bars, investment-grade bars for Hong Kong dealers, jewellery manufacturers and institutional buyers. Full assay and insured delivery.",
    keywords: "gold dore Hong Kong, gold export agent Hong Kong, wholesale gold Hong Kong, buy gold bars Hong Kong, precious metals Hong Kong, African gold Hong Kong, gold import Hong Kong, gold from Kenya to Hong Kong, bullion dealer Hong Kong, gold jewellery Hong Kong",
    ogTitle: "Gold Dore Export Agent Hong Kong — African Gold | Mayfox",
    ogDescription: "Verified African dore gold for Hong Kong's bullion market. LBMA documentation, independent assay and insured delivery to Hong Kong vaults.",
    introParagraphs: [
      "Hong Kong is one of Asia's most established gold trading centres, home to the Chinese Gold and Silver Exchange Society (CGSE), major bullion bank trading desks, international jewellery manufacturers and a sophisticated wealth management industry. Hong Kong's free port status, robust financial infrastructure and proximity to mainland China make it an ideal entry point for African gold into the Asian market.",
      "Mayfox provides Hong Kong with refined 999.9 bars through our partner refineries, dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African supply chain. Every consignment is independently assayed, fully documented and shipped via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Hong Kong International Airport.",
      "Transit time is 5–7 business days from cleared funds. Delivery is made to Hong Kong International Airport vaults, Kowloon secure storage, or designated receiving facilities in Central, Tsim Sha Tsui and Kwun Tong. Settlement via SWIFT in USD or HKD through established banking channels.",
      "For Hong Kong bullion dealers, jewellery manufacturers in Kowloon, private wealth managers and institutional investors seeking physical African gold, Mayfox provides a verified supply chain with transparent LBMA-based pricing and complete compliance documentation."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "HKIA", label: "Entry Port" },
      { value: "5-7 Days", label: "Transit Time" },
      { value: "CGSE", label: "Compatible" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Hong Kong",
      paragraphs: [
        "Hong Kong-bound gold shipments depart JKIA Nairobi via Brinks or Malca-Amit secure air freight to Hong Kong International Airport (HKIA). From HKIA, secure transport delivers to airport vaults, Kowloon storage, Central business district facilities or any designated receiving location. Transit time is 5–7 business days.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Hong Kong's free port status means straightforward customs procedures for gold bullion imports.",
        "All consignments are insured vault-to-vault with tracking throughout transit."
      ]
    },
    complianceSection: {
      title: "Hong Kong Regulatory Framework",
      paragraphs: [
        "Hong Kong's precious metals trade operates under the CGSE, Hong Kong Customs and the Companies Registry. While gold bullion imports benefit from Hong Kong's free port status, buyers increasingly expect OECD-compliant sourcing documentation. Mayfox meets these requirements with full chain-of-custody, independent assay and OECD-aligned due diligence.",
        "KYC and AML protocols include beneficial ownership verification, source-of-funds checks and sanctions screening against UN, OFAC, EU and Hong Kong SFC lists. Every buyer receives a compliance pack suitable for Hong Kong regulatory requirements.",
        "We can coordinate with Hong Kong-based compliance officers, vault operators and receiving counterparties."
      ]
    },
    whyMayfox: [
      "Direct African gold supply to Hong Kong's bullion market",
      "Full compliance documentation meeting Hong Kong standards",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or HKD",
      "Delivery to HKIA, Kowloon and Central storage facilities",
      "Experienced with Asian institutional buyer onboarding",
    ],
    faqs: [
      { q: "Can I import gold from Kenya to Hong Kong?", a: "Yes. Hong Kong is a free port and gold imports are straightforward. Mayfox provides all documentation: Certificate of Origin, independent assay, export permit, commercial invoice and insurance. We coordinate delivery to HKIA or your designated vault." },
      { q: "How long does delivery to Hong Kong take?", a: "Typically 5–7 business days from cleared funds via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Hong Kong International Airport." },
      { q: "What purity gold do you supply to Hong Kong?", a: "Refined 999.9 bars through our partner refineries, refined 995 bars, dore bars at 85–95% and gold nuggets at 85–92%. Every consignment has an independent SGS or KEBS assay certificate." },
      { q: "Do you supply Hong Kong jewellery manufacturers?", a: "Yes. Mayfox provides refined 999.9 gold bars and grain gold to Hong Kong jewellery manufacturers in Kowloon and the New Territories. Wholesale minimums apply." },
      { q: "How do Hong Kong buyers pay?", a: "SWIFT bank transfer in USD or HKD to our Kenyan or Dubai accounts. Escrow settlement is available for larger orders. Standard terms: funds cleared before shipment." },
      { q: "Does Hong Kong licence the buyer as well as the dealer?", a: "Hong Kong's retail gold market is organised around licensed dealing members of the Chinese Gold and Silver Exchange Society, while jewellery fabrication and import trade sit with manufacturers and their own customs arrangements. Whether a particular consignment needs a declaration or a licence depends on the metal's form, the importer's activity and current Hong Kong requirements, which should be confirmed with the relevant authority and the buyer's own agent. Mayfox's role as export agent is to deliver a complete Kenyan-side file into whichever procedure the buyer uses." },
      { q: "Can Hong Kong be used as the delivery point for mainland China buyers?", a: "It frequently is, because the city is a free port, an assay-capable market and a short hop from the mainland. The important boundary is that onward entry into the mainland is the buyer's own authorised procedure: Mayfox arranges the Nairobi-to-Hong Kong leg, the independent assay and the export documents, and the receiving party handles clearance and any mainland approval under its own authorisation. Tell us at quotation stage which of the two destinations you intend, since the documents are issued to match it." },
    ],
    buyerClimate: [
      "Hong Kong's gold trade has a formal backbone that surprises newcomers: the Chinese Gold and Silver Exchange Society regulates its member dealers and underwrites the market's conventions on bar fineness, weighing and clearing, and its members' quotes set the tone for retail dealing. Alongside that sits one of Asia's densest jewellery manufacturing scenes, historically in Kowloon and the New Territories, which buys metal for fabrication and thinks in carats and casting grain rather than in investment bar series, plus a private-banking and family-office community that buys allocation product and stores it. A Hong Kong counterparty is therefore usually either a dealer who will resell within days, or a manufacturer who will melt within weeks - and both judge an African consignment by how quickly and cheaply it can be verified.",
      "Verification culture there is hands-on and fast. Expect the buyer to re-weigh and assay at their own bench, to price the consignment off that result rather than off the certificate, and to care about physical detail that European buyers leave to the paperwork: bar serialisation, packaging integrity, whether the declared weights reconcile, and whether fineness marks follow the 999.9 and 995 conventions the Chinese-speaking market recognises. Because the city is a gateway to the mainland, dealers also ask a second question: does the documentation travel with the metal to the next owner, or does it stop at Hong Kong? Sellers who cannot answer that in one sentence rarely get a second consignment discussion."
    ],
    logisticsNote:
      "Consignment routing into Hong Kong runs from JKIA Nairobi with licensed valuables carriers to Hong Kong International Airport, where the buyer's appointed handler takes delivery into airport-adjacent storage, a dealer vault, a manufacturer's facility or a bank's safekeeping arrangement. The city's free-port status removes duty friction but not paperwork discipline: declarations, controls on dealings in precious and industrial metals, and any onward mainland procedure should be confirmed with the relevant Hong Kong authorities and the buyer's agent before freight is booked. Hong Kong buyers ask for a tight document set - Certificate of Origin, Kenyan export authorisation, independent assay report, invoice and packing list with bar-level weights, airway bill, and insurance naming the consignee - and will check each bar number against that list at acceptance. If the metal may continue to the mainland, the same file must be consistent enough to support that step.",
    settlementNote:
      "The local convention with a new overseas counterparty is to shorten the trade and test the metal. Typically that means one trial consignment, an agreed price basis struck against a recognised benchmark at a stated time, independent assay before loading with sealed samples retained, and release of funds after the buyer's own bench assay confirms weight and fineness within the tolerance written into the contract. As agent, Mayfox can arrange settlement against documents through the Nairobi desk, escrow release on the buyer's acceptance record, or a re-assay mechanism in which the destination result governs the final metal value. These are practices Mayfox can organise for you, not assurances: title, insurance and payment remain with the carriers, vaults and banks each side appoints, and the first trade should be sized accordingly.",
    dueDiligence: [
      "Is the metal serialised bar by bar in a way our assayer can check against the packing list?",
      "Which licensed dealer, refinery or manufacturer will re-assay at acceptance, and does that result set the price?",
      "Can sealed samples be retained so a fineness dispute is resolved without melting the consignment?",
      "Is Mayfox acting as agent for named Kenyan cooperatives, and what evidences that mandate to us?",
      "Will the origin and assay documents support an onward transfer if we resell into the mainland?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "How to verify a gold offer", path: "/anti-fraud" },
      { label: "Industries we serve", path: "/industries" },
      { label: "Request a quote", path: "/request-quote" },
    ],
  },
  {
    slug: "india",
    country: "India",
    eyebrow: "Gold Dore Supply for India",
    heroTitle: "Gold Dore Supply for Indian Importers & Refineries",
    heroSubtitle: "Verified African gold dore for India's refineries, bullion dealers, jewellery manufacturers and institutional importers. Full documentation, independent assay and insured delivery to Mumbai, Delhi and Ahmedabad.",
    pageTitle: "Gold Dore India — African Gold Export Agent | Mayfox",
    description: "Gold export agent for India. Buy verified African gold dore bars and nuggets for Indian refineries, bullion dealers and jewellery manufacturers. Full assay, export documentation and insured delivery to Mumbai, Delhi and Ahmedabad.",
    keywords: "gold dore India, gold export agent India, wholesale gold India, buy gold bars India, gold import India, African gold India, gold from Kenya to India, gold refinery India, bullion dealer India, gold jewellery India, Mumbai gold import",
    ogTitle: "Gold Dore Export Agent India — African Gold | Mayfox",
    ogDescription: "Verified African gold dore for India's refineries and dealers. Full documentation, independent assay and insured delivery to Mumbai, Delhi and Ahmedabad.",
    introParagraphs: [
      "India is the world's second-largest gold consumer, with annual imports exceeding 700 tonnes. From Mumbai's Zaveri Bazaar to Delhi's Chandni Chowk, Ahmedabad's jewellery manufacturing cluster to Coimbatore's refinery ecosystem, India's gold industry spans bullion banks, dore refiners, jewellery manufacturers and millions of retail investors. Indian importers need reliable supply, verified purity and competitive pricing — Mayfox delivers on all three.",
      "Mayfox provides the Indian market with gold dore bars at 85–95% purity (ideal for Indian refinery processing), refined 995 bars, refined 999.9 gold through our partner refineries and gold nuggets. Our East African gold is priced against the LBMA USD fix, with purity discounts applied to dore based on independent SGS or KEBS assay. Every consignment includes full documentation ready for Indian Customs and DGFT requirements.",
      "The Nairobi–Mumbai corridor is our primary Indian route, with Brinks and Malca-Amit secure air freight from JKIA to Mumbai International Airport. Delivery to Delhi and Ahmedabad is arranged via Mumbai re-export or direct flights. Transit time is 4–7 business days. Indian importers benefit from our Dubai DMCC trade desk as an alternative delivery and settlement hub.",
      "For Indian dore refiners, bullion dealers, jewellery manufacturers and institutional importers, Mayfox provides a verified African gold supply line with transparent pricing, complete RBI and DGFT-compliant documentation, and the logistics reliability that India's fast-moving gold market demands."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Mumbai", label: "Primary Port" },
      { value: "4-7 Days", label: "Transit Time" },
      { value: "25+", label: "Indian Buyers" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to India",
      paragraphs: [
        "Indian-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Mumbai's Chhatrapati Shivaji Maharaj International Airport. From Mumbai, delivery is made to refineries, bullion dealer vaults or designated secure storage in Mumbai, Delhi, Ahmedabad or other Indian cities. Direct-to-Delhi and direct-to-Ahmedabad routes are also available. Transit time is 4–7 business days.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill, all-risk cargo insurance and documentation required for DGFT and Indian Customs clearance. Mayfox coordinates with Indian customs brokers to ensure compliant import.",
        "The Dubai DMCC route is also available for Indian importers who prefer to take delivery in Dubai and arrange their own re-export to India. We can deliver to your DMCC vault for onward shipment."
      ]
    },
    complianceSection: {
      title: "Indian Import Compliance & RBI Regulations",
      paragraphs: [
        "Gold imports into India are regulated by the DGFT, RBI and Indian Customs. Import is permitted for nominated agencies, banks and entities authorised under RBI guidelines. Mayfox provides all documentation required for compliant Indian import: Certificate of Origin, independent assay, export permit, commercial invoice, packing list and insurance.",
        "Our KYC and AML programme meets international standards expected by Indian institutional buyers. All transactions include full beneficial ownership disclosure, source-of-funds verification and sanctions screening against UN, OFAC, EU and Indian regulatory lists.",
        "We can supply dore bars that meet the purity specifications of Indian refinery processing, with assay documentation from independent laboratories recognised internationally."
      ]
    },
    whyMayfox: [
      "African gold dore ideal for Indian refinery processing",
      "DGFT and RBI-compliant documentation",
      "Independent SGS/KEBS assay on every dore bars and nuggets consignment",
      "SWIFT settlement in USD via established banking channels",
      "Delivery to Mumbai, Delhi and Ahmedabad",
      "Dubai DMCC alternative for Indian importers preferring GCC corridor",
    ],
    faqs: [
      { q: "Can Indian refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore bars at 85–95% purity to Indian refineries registered under DGFT. Each dore consignment includes independent SGS assay, Certificate of Origin and full documentation for DGFT and Indian Customs clearance." },
      { q: "How is gold shipped to India?", a: "Via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Mumbai International Airport, with onward delivery to Delhi, Ahmedabad or your designated facility. Transit time: 4–7 business days. The Dubai DMCC corridor is also available." },
      { q: "What documentation does Mayfox provide for Indian import?", a: "Full package: Certificate of Origin, independent SGS/KEBS assay, Kenyan export permit, commercial invoice, packing list, airway bill and all-risk insurance. Documentation is compatible with DGFT and Indian Customs requirements." },
      { q: "What is the minimum order for Indian buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Wholesale dore consignments of 10 kg+ for refinery processing benefit from volume pricing. Contact the trade desk for a quote." },
      { q: "Can I take delivery in Dubai and import to India myself?", a: "Yes. Mayfox can deliver to your DMCC vault in Dubai, and you arrange your own re-export to India under your DGFT authorisation. This is a common arrangement for Indian importers with existing Dubai relationships." },
      { q: "How do Indian buyers pay?", a: "SWIFT bank transfer in USD to our Kenyan or Dubai accounts. Letters of credit and escrow settlement are available for larger institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Can Mayfox sell directly to an Indian jeweller or dealer?", a: "Whoever receives the consignment must hold the import authorisation and complete the Indian-side entry; that is frequently a refinery, an authorised trading house or a bank rather than a jewellery manufacturer. Mayfox acts as export agent from the Kenyan side and does not obtain Indian import rights for a buyer. If your intended consignee is a jeweller, confirm their authorisation status with the Directorate General of Foreign Trade and their customs house agent before we quote a delivery basis." },
      { q: "Do you supply 22-carat gold for the Indian market?", a: "Mayfox represents dore bars and nuggets, and refined 995 and 999.9 product is arranged through partner refineries. Indian 22-carat jewellery metal is produced by the refiner or minter who alloy and fabricate it, so carat conversion, hallmarking and any making charges sit with that facility and with the buyer's own assay arrangements, not with the export agent." },
    ],
    buyerClimate: [
      "India buys gold principally to be worn, and the calendar of that demand shapes everything: jewellery for weddings and festivals is the largest single use, and it runs on 22-carat taste rather than the one-ounce investment bar culture of Western markets. That means the Indian buyer of African dore is usually a refinery or an authorised importer converting crude metal into jewellery stock and small investment bars, with manufacturing clusters in Gujarat, workshop networks across Mumbai and the south, and assay and hallmarking infrastructure operating under the Bureau of Indian Standards to certify article purity for the retail customer. Trade bodies such as the India Bullion and Jewellers Association set the practical conventions dealers argue about daily: quoting in ten-gram and tola units against the international benchmark, with local premia that move with availability.",
      "The economics of Indian import explain the buyer's obsession with fineness. Landed cost stacks customs duty, tax and the refiner's or jeweller's charges on top of the metal value, so each point of shortfall in declared purity is amplified several times over by the time the bar becomes a bangle - which is why an Indian importer treats the seller's assay certificate as a hypothesis and their own refinery determination as the verdict. Expect a first-time East African counterparty to be pushed toward assay-then-settle: pre-loading assay by a laboratory both sides name, sealed samples retained for dispute, an intake assay on arrival, and price adjusted to that result. Bulk import economics also mean Indian buyers think in repeat lots and prefer a source whose declared figures hold consignment after consignment."
    ],
    logisticsNote:
      "Indian-bound consignments leave JKIA Nairobi with licensed valuables carriers, arriving at Mumbai's international airport for onward movement to refineries and dealer storage, with alternative routings through the Dubai corridor where the buyer prefers to take delivery there and re-export themselves. Entry is made by the authorised importer through their customs house agent, and Indian-side requirements - import authorisation, bank certification of the import transaction and customs valuation - are the buyer's procedure, so they must be confirmed with the Directorate General of Foreign Trade, the Reserve Bank of India and the buyer's own CHA. The paperwork Indian importers ask to see before committing funds is predictable: Certificate of Origin, Kenyan export authorisation, independent assay report with sample details, invoice and packing list reconciling to that assay, airway bill and insurance certificate. Bar serialisation matters in practice because the receiving refinery checks it at intake.",
    settlementNote:
      "With an unknown East African counterparty, Indian importers habitually build the trade around two assays and one tolerance band. Customary practice is an independent determination before loading at a mutually named laboratory with sealed samples retained, freight to the refinery or vault, an intake determination by the receiving refinery, and settlement released against those documents once weight and fineness fall inside what both sides wrote into the contract - often through the buyer's bank on letter of credit or documents-against-payment terms. As agent, Mayfox can arrange that sequence, escrow release, or title transfer conditional on the destination assay, coordinating the sampling and laboratory appointments for you. These are structures, not promises: import authorisation, refining recovery and payment mechanics remain with the buyer's refinery, bank and customs agent.",
    dueDiligence: [
      "Are you an agent or the owner of the metal, and which cooperatives does this consignment come from?",
      "Which accredited laboratory issues the pre-shipment assay, and can our refinery re-assay before payment?",
      "Do the invoice weights reconcile exactly to the assay certificate, bar by bar?",
      "What tolerance band applies if our intake assay differs from your export assay, and who bears the shortfall?",
      "Can your documents support an Indian customs entry and bank import filing without amendment?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Gold in Africa", path: "/gold-in-africa" },
      { label: "Industries we serve", path: "/industries" },
    ],
  },
  {
    slug: "china",
    country: "China",
    eyebrow: "Gold Dore Supply for China",
    heroTitle: "African Dore Gold Supply for Chinese Refineries & Importers",
    heroSubtitle: "Verified African gold dore for Chinese SGE-member refineries, bullion banks, jewellery manufacturers and institutional importers. Full assay documentation, OECD compliance and insured delivery to Shanghai and Hong Kong.",
    pageTitle: "Gold Dore China — African Gold Export Agent | Mayfox",
    description: "Gold export agent for China. Buy verified African gold dore for Chinese refineries, bullion banks and jewellery manufacturers. Full assay, OECD compliance and insured delivery to Shanghai and via Hong Kong.",
    keywords: "gold dore China, gold export agent China, wholesale gold China, gold import China, African gold China, gold from Kenya to China, SGE gold, gold refinery China, gold China, Shanghai Gold Exchange, gold jewellery China",
    ogTitle: "Gold Dore Export Agent China — African Gold | Mayfox",
    ogDescription: "Verified African gold dore for China's SGE refineries and importers. Full assay, OECD compliance and insured delivery.",
    introParagraphs: [
      "China is the world's largest gold producer and consumer, with the Shanghai Gold Exchange (SGE) serving as the primary physical gold trading platform. Chinese refineries, bullion banks, jewellery manufacturers and institutional investors represent one of the deepest gold markets globally. Chinese importers demand verified purity, competitive pricing and compliant documentation — standards Mayfox meets on every consignment.",
      "Mayfox provides the Chinese market with gold dore bars at 85–95% purity, refined 995 bars and refined 999.9 gold through our partner refineries from our licensed East African supply chain. Every consignment is independently assayed, documented with Certificate of Origin and Kenyan export licence, and prepared for Chinese import procedures.",
      "Gold shipments to China travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Shanghai Pudong International Airport, or via the Hong Kong SAR corridor for buyers preferring HK-based consolidation. Transit time is 5–8 business days. Settlement is via SWIFT in USD through our Kenyan or Dubai trade desks.",
      "For Chinese SGE-member refineries, bullion banks, jewellery manufacturers and authorised importers, Mayfox provides a verified African gold supply line with transparent LBMA-based pricing and full compliance documentation."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Shanghai", label: "Primary Port" },
      { value: "5-8 Days", label: "Transit Time" },
      { value: "SGE", label: "Compatible" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to China",
      paragraphs: [
        "China-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Shanghai Pudong International Airport, or via Hong Kong for buyers who prefer HK consolidation and re-export. Transit time is 5–8 business days including customs clearance. Delivery is made to refinery intake, SGE-approved vaults or designated secure storage.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Chinese customs brokers experienced in precious metals import to ensure compliant entry.",
        "For buyers using the Hong Kong corridor, Mayfox delivers to HKIA and the buyer arranges their own HK-to-mainland re-export under their SGE authorisation."
      ]
    },
    complianceSection: {
      title: "Chinese Import Compliance & SGE Standards",
      paragraphs: [
        "Gold imports into China are regulated through the SGE and require authorised importer status. Mayfox provides all documentation for compliant import: Certificate of Origin, independent assay, export permit and full chain-of-custody records. Our OECD-aligned due diligence meets the expectations of Chinese institutional buyers.",
        "KYC and AML protocols include full beneficial ownership disclosure, source-of-funds verification and sanctions screening. Every buyer receives a complete compliance pack suitable for Chinese regulatory requirements.",
        "For buyers using the Hong Kong corridor, we provide documentation suitable for both HK import and subsequent re-export to mainland China."
      ]
    },
    whyMayfox: [
      "African gold dore bars and nuggets for Chinese refineries and SGE members",
      "Full OECD-compliant documentation and independent assay",
      "Direct shipping to Shanghai or via Hong Kong corridor",
      "SWIFT settlement in USD via established banking partners",
      "Competitive LBMA-based pricing for wholesale consignments",
      "Experienced with Asian institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Chinese refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore at 85–95% purity to Chinese SGE-authorised refineries with independent SGS assay, Certificate of Origin and full OECD documentation. Delivery is available to Shanghai or via Hong Kong." },
      { q: "How is gold shipped to China?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Shanghai Pudong, or via Hong Kong for HK-based consolidation. Transit: 5–8 business days. We coordinate with Chinese customs brokers for compliant entry." },
      { q: "What is the minimum order for Chinese buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Wholesale dore consignments for refinery processing benefit from volume pricing starting at 10 kg+." },
      { q: "Do you ship via Hong Kong for Chinese buyers?", a: "Yes. Many Chinese buyers prefer delivery to Hong Kong for consolidation and re-export to the mainland under their SGE authorisation. Mayfox delivers to HKIA or HK vaults for this purpose." },
      { q: "How do Chinese buyers pay?", a: "SWIFT bank transfer in USD to our Kenyan or Dubai accounts. Letters of credit are available for larger institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Can a Chinese buyer import dore without an exchange-member refinery?", a: "Entry of unworked gold into China is administered through designated channels and approved participants rather than being open to any company, and the practical route depends on the importer's own authorisation status. We will not guess on your behalf: confirm your position with your bank, your customs broker and the competent Chinese authority before agreeing a delivery basis. Mayfox's responsibility as export agent is that the Kenyan authorisation, Certificate of Origin, assay and chain-of-custody records are complete and internally consistent for whichever procedure you use." },
      { q: "Do you provide Chinese-language export documents?", a: "The Kenyan documents Mayfox arranges - export authorisation, Certificate of Origin, assay report, invoice, packing list and airway bill - are issued in English, which is normal for the export leg. Translation, customs labelling and any locally required forms sit with the buyer's broker and receiving refinery. If your intake team needs translated summaries for internal approval, we will supply the underlying documents early enough for that work to be completed before freight is booked." },
    ],
    buyerClimate: [
      "Chinese gold demand is Shanghai-centred and channel-controlled. The Shanghai Gold Exchange is the main domestic venue for physical trading, its member banks and refineries set the specifications that circulating bars must meet, and a number of Chinese refiners also hold international good-delivery accreditation, so the country is simultaneously the world's largest market and a serious refining centre. Entry of unworked gold is not open to every company: import rights run through designated, approved channels under the state framework, and any buyer must confirm its own authorisation status with the People's Bank of China-supervised arrangements, the exchange and its customs broker rather than relying on a seller's assurances.",
      "The proof culture that comes with that structure is formal and institutional. A Chinese counterpart typically wants an internationally recognised assay mirrored by a domestic inspection at the receiving refinery; contracts signed by the correct legal entity with the company seal; party names, weights and values that match across every document because customs and bank filings are checked line by line; and settlement routed through cross-border banking channels with the paperwork that channel requires. Chinese refiners are experienced with African and Asian feedstock and understand dore, so they argue about sampling protocol, impurity content and the recovery basis rather than about whether East African metal is acceptable. They will also ask, early and bluntly, whether the seller is an agent and what evidence it holds of that mandate."
    ],
    logisticsNote:
      "China-bound freight departs JKIA Nairobi with licensed valuables carriers for Shanghai Pudong, or moves through the Hong Kong corridor where the buyer prefers to consolidate and handle mainland entry under its own authorisation. Import clearance, permit or licence presentation, valuation and currency filing are the importer's obligations through their broker and bank, and the precise requirements turn on the metal's classification and the buyer's channel status, so they must be confirmed with the competent Chinese authority before the consignment leaves Kenya. Chinese importers routinely request: Certificate of Origin, Kenyan export authorisation, an independent assay report naming the laboratory and method, invoice and packing list whose figures reconcile exactly, the airway bill, and insurance naming the consignee. Consistency across documents is the point of scrutiny, because each document feeds a different filing.",
    settlementNote:
      "With a first East African counterparty, Chinese institutional buyers generally insist on an independent test standing between the parties. Customary practice is assay before loading at a laboratory both sides accept with sealed samples retained, delivery into the refinery or an approved vault, a determination at the receiving refinery, and payment released against those documents within a tolerance band agreed in writing, routed through cross-border banking channels that match the import filing. As agent, Mayfox can arrange settlement against documents, escrow release, or title transfer conditional on the destination assay, and can coordinate laboratory appointments and sampling for the buyer. These are options we organise as agent, not guarantees: authorisation status, refining recovery and payment routing remain with the buyer and its bank and refinery.",
    dueDiligence: [
      "Which legal entity is contracting with us, where is it registered, and does it hold the metal at any stage?",
      "Can you evidence your agency mandate from the Kenyan cooperatives for this specific consignment?",
      "Which laboratory performs the export assay, and will you accept our refinery's determination as the settlement basis?",
      "Do all document names, weights and values match exactly so our customs and bank filings will pass?",
      "What tolerance applies between export assay and intake assay, and how is a shortfall priced?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Market insights", path: "/market-insights" },
      { label: "About Mayfox", path: "/about" },
    ],
  },
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    eyebrow: "Gold Dore Supply for Saudi Arabia",
    heroTitle: "Gold Dore Supply for Saudi Refineries & Investors",
    heroSubtitle: "Verified African gold dore for Saudi refineries, bullion dealers, jewellery manufacturers and institutional buyers. Full documentation, independent assay and insured delivery to Riyadh, Jeddah and Dammam.",
    pageTitle: "Gold Dore Saudi Arabia — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Saudi Arabia. Buy verified African gold dore bars and nuggets for Saudi refineries, bullion dealers and investors. Full documentation, independent assay and insured delivery to Riyadh, Jeddah and Dammam.",
    keywords: "gold dore Saudi Arabia, gold export agent Saudi, wholesale gold Saudi, gold import Saudi, gold dore Saudi, African gold Saudi, gold from Kenya to Saudi, gold refinery Saudi, gold Saudi Arabia, gold jewellery Saudi, Riyadh gold",
    ogTitle: "Gold Dore Export Agent Saudi Arabia — African Gold | Mayfox",
    ogDescription: "Verified African gold for Saudi refineries and investors. Full documentation, independent assay and insured delivery to Riyadh, Jeddah and Dammam.",
    introParagraphs: [
      "Saudi Arabia's gold market is expanding rapidly under Vision 2030. The Kingdom is home to the Makkah Gold Souk, a growing refinery sector, major jewellery manufacturing in Riyadh and Jeddah, and a sovereign wealth-driven investment appetite for physical precious metals. Saudi buyers seek verified quality, Shariah-compliant physical gold and reliable supply chains — exactly what Mayfox provides.",
      "Mayfox provides the Saudi market with refined 999.9 bars through our partner refineries, gold dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African operations. Every consignment is independently assayed, fully documented and priced against the LBMA USD fix. We offer Shariah-compliant physical gold delivery with full chain-of-custody documentation.",
      "The Nairobi–Riyadh and Nairobi–Jeddah corridors operate via Brinks and Malca-Amit secure air freight from JKIA Nairobi. Transit time is 3–5 business days from cleared funds. Delivery is made to designated vaults, refinery intake or secure storage in Riyadh, Jeddah or Dammam. Settlement via SWIFT in USD or SAR through established banking channels.",
      "For Saudi refineries, bullion dealers, jewellery manufacturers and institutional investors, Mayfox provides a verified African gold supply line with transparent pricing, complete documentation and the regulatory compliance expected in the Kingdom."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Riyadh", label: "Primary Port" },
      { value: "3-5 Days", label: "Transit Time" },
      { value: "24hr", label: "Quote Response" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Saudi Arabia",
      paragraphs: [
        "Saudi-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to King Khalid International Airport (Riyadh), King Abdulaziz International Airport (Jeddah) or King Fahd International Airport (Dammam). Transit time is 3–5 business days including customs clearance.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Saudi customs agents to ensure compliant import under Saudi Customs regulations.",
        "All consignments are insured vault-to-vault. We provide tracking and proactive communication throughout transit."
      ]
    },
    complianceSection: {
      title: "Saudi Import Compliance & Regulatory Framework",
      paragraphs: [
        "Gold imports into Saudi Arabia are regulated by Saudi Customs and the Saudi Central Bank (SAMA). Mayfox provides documentation meeting Saudi import requirements: Certificate of Origin, independent assay, export permit and full chain-of-custody records.",
        "KYC and AML protocols meet international standards. All transactions include beneficial ownership disclosure, source-of-funds verification and sanctions screening. We can supply Shariah-compliant physical gold with full documentation for Islamic finance institutions.",
        "Saudi buyers receive a complete compliance pack suitable for their own regulatory requirements and Saudi Customs import procedures."
      ]
    },
    whyMayfox: [
      "Verified African dore gold for Saudi refineries and investors",
      "Shariah-compliant physical gold delivery available",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or SAR",
      "Delivery to Riyadh, Jeddah and Dammam",
      "Full compliance documentation for Saudi Customs and SAMA",
    ],
    faqs: [
      { q: "Can Saudi refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore at 85–95% purity to Saudi refineries with independent SGS assay, Certificate of Origin and full export documentation. Delivery to Riyadh, Jeddah or Dammam." },
      { q: "How is gold shipped to Saudi Arabia?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Riyadh, Jeddah or Dammam international airports. Transit time: 3–5 business days. Vault-to-vault delivery with full insurance." },
      { q: "Do you offer Shariah-compliant gold?", a: "The metal we arrange is physical, identified gold doré delivered into custody the buyer controls, which is the form most buyers describe as the basis for a Shariah-compliant purchase. Mayfox is an export agent rather than an Islamic-finance adviser, so the religious characterisation should be confirmed with the buyer's own scholars and bank; we document the trade to support whichever structure they approve." },
      { q: "What is the minimum order for Saudi buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Wholesale orders of 10 kg+ benefit from volume pricing. Contact the trade desk for a tailored quote." },
      { q: "How do Saudi buyers pay?", a: "SWIFT bank transfer in USD or SAR to our Kenyan or Dubai accounts. Letters of credit are available for larger institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Can a Saudi jewellery manufacturer import dore directly?", a: "Import of unworked gold into the Kingdom is a regulated activity and is normally undertaken by entities whose licensing covers it; jewellers and dealers frequently acquire metal through refiners or authorised traders instead. Licensing and customs requirements must be confirmed with Saudi Customs and the relevant Saudi authority by the importing entity itself. Mayfox's task as export agent is to deliver a Kenyan-authorised, assayed and documented consignment to whichever licensed receiver you nominate." },
      { q: "How is a Shariah-compliant physical purchase structured?", a: "The practical requirement buyers describe is genuine ownership and possession of identified metal rather than a paper position, so a compliant structure looks like a real sale of specific bars, delivered into custody the buyer controls, priced at a stated moment, with settlement following the transfer. Mayfox is an export agent and is not an Islamic-finance adviser: the religious and regulatory characterisation should be confirmed with the buyer's own scholars, bank and the relevant Saudi authority, and we will document the trade to support whichever structure is agreed." },
    ],
    buyerClimate: [
      "Saudi gold buying is anchored in the souk and in family trading houses, and its centre of gravity is jewellery rather than the investment bar. Demand for 21 and 22-carat wedding and gift jewellery sustains the workshops of Riyadh and Jeddah and the historic gold markets of Makkah and Madinah, and it is served by dealers whose commercial habits are personal, fast and reference-driven: a trading house decides on a consignment on the strength of who vouches for it and how quickly the metal can be tested on their own bench. Alongside that tradition sits a growing institutional appetite from family offices and finance-driven buyers, and a refinery sector that increasingly takes foreign dore on stated intake specifications.",
      "Two formal expectations travel with that culture. First, purity labelling and article standards: Saudi rules on gold article fineness and marking are administered by the Kingdom's standards and metrology authority, and a buyer who will convert your bars into hallmark-conscious jewellery stock thinks in carats and assays accordingly - so confirm current requirements with the relevant Saudi authority and the receiving refinery. Second, real possession: buyers who structure a purchase to be Shariah-compliant want identified metal actually transferred into their control rather than a paper position, which pushes the trade toward delivery into a named vault or refinery with documented custody. A Saudi counterparty will therefore ask for assay, origin and export authorisation, and for a clear statement of who ships, who holds title and who insures at each step."
    ],
    logisticsNote:
      "Saudi-bound consignments depart JKIA Nairobi with licensed valuables carriers for King Khalid International in Riyadh, King Abdulaziz International in Jeddah or King Fahd International in Dammam, and are cleared by the importing entity's Saudi customs broker into a refinery intake, a dealer vault or a nominated secure facility. Many Saudi buyers historically take delivery in Dubai and move metal onward themselves; a direct Nairobi-to-Kingdom arrival therefore tends to attract more verification, which is a reason to have the file complete rather than promising to fix it later. Expect requests for Certificate of Origin, the Kenyan export authorisation, the independent assay report, invoice and packing list reconciling to that assay, the airway bill and the insurance certificate naming the Saudi consignee. Import licensing, customs valuation and any approval for unworked gold must be confirmed with Saudi Customs and the relevant authority by the importing entity.",
    settlementNote:
      "First-trade custom with an unfamiliar East African counterparty follows the same logic as most Gulf trade: keep the consignment small, put an assay between the parties, and pay against documents. Typically that means an independent determination before loading with sealed samples retained, delivery into the buyer's nominated refinery or vault, an intake assay that governs the final metal value within an agreed tolerance, and settlement by wire from a Saudi or Gulf bank once those documents are accepted. As agent, Mayfox can arrange documents-against-payment terms, escrow release on the acceptance record, or title transfer conditional on the destination assay; custody, banking and any Shariah-compliant structuring are the buyer's own arrangements and should be confirmed with their advisers and the relevant Saudi authority rather than assumed from this page.",
    dueDiligence: [
      "Do you hold the Kenyan export authorisation for this specific consignment, and can we verify it?",
      "Which entity is the seller of record, and does it own the metal or act for cooperatives?",
      "Will your assay be confirmed by our refinery's intake test, and what tolerance applies?",
      "Who is the carrier into Riyadh or Jeddah, and who holds custody until we accept the metal?",
      "Can the documents support a Shariah-compliant structure of real sale and documented possession?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Request a quote", path: "/request-quote" },
      { label: "Services for buyers", path: "/services" },
    ],
  },
  {
    slug: "qatar",
    country: "Qatar",
    eyebrow: "Gold Dore Supply for Qatar",
    heroTitle: "Gold Dore Supply for Qatar Investors & Dealers",
    heroSubtitle: "Verified African dore gold and investment-grade bars for Qatari institutional investors, bullion dealers and wealth managers. Full documentation, independent assay and insured delivery to Doha.",
    pageTitle: "Gold Dore Qatar — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Qatar. Buy verified African dore gold and investment-grade bars for Qatari institutional investors, bullion dealers and wealth managers. Full assay and insured delivery to Doha.",
    keywords: "gold dore Qatar, gold export agent Qatar, wholesale gold Qatar, gold import Qatar, African gold Qatar, gold from Kenya to Qatar, gold Qatar, gold investment Qatar, institutional gold Qatar, Doha gold, gold bars Qatar",
    ogTitle: "Gold Dore Export Agent Qatar — African Gold | Mayfox",
    ogDescription: "Verified African dore gold for Qatari institutions and investors. Full documentation, independent assay and insured delivery to Doha.",
    introParagraphs: [
      "Qatar is one of the world's wealthiest nations per capita, with a sovereign wealth fund, growing private wealth sector and increasing appetite for physical gold as a portfolio diversifier. The Qatar Financial Centre, Qatar Central Bank-regulated institutions and Doha's emerging bullion dealer community represent a sophisticated buyer base that demands verified quality and institutional-grade documentation.",
      "Mayfox provides the Qatari market with refined 999.9 bars through our partner refineries, dore bars at 85–95% and refined 995 bars from our licensed East African supply chain. Every consignment is independently assayed by SGS or KEBS, documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records.",
      "Gold shipments to Qatar travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Hamad International Airport in Doha. Transit time is 3–5 business days. Delivery is made to designated secure vaults in Doha. Settlement via SWIFT in USD or QAR through established banking channels.",
      "For Qatari institutional investors, family offices, bullion dealers and wealth managers, Mayfox provides verified African gold with transparent LBMA-based pricing, complete compliance documentation and reliable logistics."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Doha", label: "Entry Port" },
      { value: "3-5 Days", label: "Transit Time" },
      { value: "24hr", label: "Quote Response" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Qatar",
      paragraphs: [
        "Qatar-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Hamad International Airport, Doha. Transit time is 3–5 business days from cleared funds. Delivery is made to designated secure vaults or receiving facilities in Doha.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Qatari customs agents for compliant import.",
        "All consignments are insured vault-to-vault with full tracking throughout transit."
      ]
    },
    complianceSection: {
      title: "Qatar Import Compliance & Regulatory Standards",
      paragraphs: [
        "Gold imports into Qatar are regulated by Qatar Customs and the Qatar Central Bank. Mayfox provides documentation meeting Qatari import requirements: Certificate of Origin, independent assay, export permit and full chain-of-custody records.",
        "KYC and AML protocols include beneficial ownership disclosure, source-of-funds verification and sanctions screening. Qatari buyers receive a complete compliance pack suitable for regulatory requirements and institutional audit.",
        "We can coordinate with Doha-based receiving agents and compliance officers to ensure smooth import clearance."
      ]
    },
    whyMayfox: [
      "African dore gold for Qatari institutional investors and family offices",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or QAR",
      "Insured vault-to-vault delivery to Doha",
      "Full compliance documentation for Qatar Central Bank and Customs",
      "Competitive LBMA-based pricing for wholesale orders",
    ],
    faqs: [
      { q: "Can Qatari investors import gold from Kenya?", a: "Yes. Mayfox provides investment-grade gold dore to Qatari institutional investors, family offices and bullion dealers with full documentation, independent assay and insured delivery to Doha." },
      { q: "How is gold shipped to Qatar?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Hamad International Airport, Doha. Transit time: 3–5 business days. Vault-to-vault delivery with full insurance." },
      { q: "What is the minimum order for Qatari buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Larger orders benefit from volume pricing. Contact the trade desk for a tailored quote." },
      { q: "How do Qatari buyers pay?", a: "SWIFT bank transfer in USD or QAR to our Kenyan or Dubai accounts. Letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Is Mayfox gold suitable for Islamic investment?", a: "Yes. We provide physical gold dore — a Shariah-compliant asset class — with full documentation and chain-of-custody records. Gold is widely recognised as Shariah-compliant for investment purposes." },
      { q: "Who can import gold into Qatar?", a: "Importing entities deal through Qatar Customs and, where the buyer is a regulated institution, under the supervision of the relevant Qatari financial authority; the specifics depend on the importer's licence and the metal's form, so they must be confirmed with the competent Qatari authority and the buyer's customs broker. Mayfox acts as the Kenyan export agent and supplies the origin, assay and export-authorisation documents that the importing entity's own filing relies on." },
      { q: "Is Qatari demand mostly investment metal or jewellery metal?", a: "Both, but through different hands. Institutional and family-office buyers are interested in documented investment-grade product held in secure custody, while the souk trade consumes refined material that becomes 18, 21 and 22-carat jewellery. That split determines what proof matters: an institution wants an accredited assay and a clean chain of custody; a dealer or refiner wants to test the metal at their own intake before paying. Mayfox represents dore bars and nuggets and arranges refined product through partner refineries for either route." },
    ],
    buyerClimate: [
      "Qatar's gold market is small, concentrated and relationship-run, and that changes how a new origin enters it. The dealing culture sits around Doha's gold souk and the workshops serving Qatari household demand for high-carat jewellery, while the institutional layer is formed by banks, family offices and financial-centre entities whose compliance is formal because Qatar's anti-money-laundering supervision and its financial-centre regulator expect it to be. There are fewer counterparties here than in the Gulf's larger markets, so reputations travel quickly, an introduction from an existing regional counterparty carries real weight, and a buyer who decides to test a new supply line tends to do so with more attention than a scattered market would pay.",
      "What Qatari buyers demand as proof reflects that concentration: an assay from a laboratory they can identify, the Kenyan export authorisation for the consignment rather than a general claim to be licensed, evidence of who mandated the seller, and a named carrier and custody chain into Doha. Because most Qatari metal has historically arrived via Dubai intermediaries, a direct East African consignment raises the verification bar rather than lowering it - the buyer has fewer reference points and will substitute documentation for familiarity. Pricing conversations are in USD against the international benchmark with a local premium, settlement is routed through the buyer's own bank, and institutional buyers increasingly want a file that would satisfy a Qatari regulator's inspection, not only their own commercial approval."
    ],
    logisticsNote:
      "Qatar-bound freight moves from JKIA Nairobi with licensed valuables carriers into Hamad International Airport, where the receiving entity's handler takes the consignment to a bank vault, a dealer's storage or a nominated facility in Doha. Clearance is performed by the importer's Qatari customs agent, and any import approval, valuation or reporting duty that applies to unworked gold must be confirmed with Qatar Customs and the relevant authority by the importing entity itself. Qatari buyers typically ask for a complete Kenyan file before committing funds: Certificate of Origin, export authorisation, independent assay report with laboratory details, commercial invoice and packing list whose weights reconcile to that assay, the airway bill, and an insurance certificate naming them or their vault as loss payee. Buyers who would ordinarily receive metal through Dubai will want the direct route documented particularly carefully, since that is the substitute for the intermediary they are giving up.",
    settlementNote:
      "For a first trade with an East African agent, Qatari practice is to make the consignment small and the checks independent. The customary sequence: assay before loading at a mutually named laboratory with sealed samples retained, delivery into the buyer's appointed vault or refinery intake, verification by an assayer the buyer selects, and release of payment through their own bank against those accepted documents. As agent, Mayfox can organise settlement against documents, escrow release following the acceptance record, or transfer of title conditional on the destination determination inside an agreed tolerance; the buyer's bank and vault remain the control points, and nothing on this page should be read as a guarantee. Where the buyer requires a structure compliant with Islamic finance principles, that characterisation belongs to their advisers and the relevant Qatari authority, and Mayfox will document the sale, custody transfer and payment sequence to support it.",
    dueDiligence: [
      "Can you show the export authorisation covering this consignment, not a general licence claim?",
      "Which laboratory assayed the metal, and will you accept a Doha re-assay as the settlement basis?",
      "Who holds title and insurance between Nairobi and our vault in Doha?",
      "Do you act for named cooperatives, and what document evidences that mandate to us?",
      "Will your documents satisfy a Qatari regulatory inspection of our own files?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "How to verify a gold offer", path: "/anti-fraud" },
      { label: "Gold in Kenya", path: "/gold-in-kenya" },
      { label: "Contact the trade desk", path: "/contact" },
    ],
  },
  {
    slug: "oman",
    country: "Oman",
    eyebrow: "Gold Dore Supply for Oman",
    heroTitle: "Gold Dore Supply for Oman Dealers & Investors",
    heroSubtitle: "Verified African dore gold and investment-grade bars for Omani bullion dealers, jewellery manufacturers and institutional investors. Full documentation, independent assay and insured delivery to Muscat.",
    pageTitle: "Gold Dore Oman — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Oman. Buy verified African dore gold and investment-grade bars for Omani bullion dealers, jewellery manufacturers and investors. Full assay and insured delivery to Muscat.",
    keywords: "gold dore Oman, gold export agent Oman, wholesale gold Oman, gold import Oman, African gold Oman, gold from Kenya to Oman, gold Oman, gold Muscat, gold jewellery Oman, gold investment Oman",
    ogTitle: "Gold Dore Export Agent Oman — African Gold | Mayfox",
    ogDescription: "Verified African gold for Oman's bullion market. Full documentation, independent assay and insured delivery to Muscat.",
    introParagraphs: [
      "Oman has a long tradition of gold trading, anchored by the Muscat Gold Souk in Muttrah and a network of bullion dealers, jewellery manufacturers and private investors. The Sultanate's strategic position on the Arabian Sea, its well-regulated financial sector and its growing role as a Gulf logistics hub make it an attractive market for verified African gold.",
      "Mayfox provides the Omani market with refined 999.9 bars through our partner refineries, gold dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African operations. Each consignment is independently assayed, fully documented and competitively priced against the LBMA USD fix.",
      "Gold shipments to Oman travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Muscat International Airport. Transit time is 3–5 business days. Delivery is made to designated vaults in Muscat, including the Muttrah gold district. Settlement via SWIFT in USD or OMR.",
      "For Omani bullion dealers, jewellery manufacturers and private investors, Mayfox provides a reliable African gold supply with complete documentation, transparent pricing and insured logistics."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Muscat", label: "Entry Port" },
      { value: "3-5 Days", label: "Transit Time" },
      { value: "LBMA", label: "Pricing" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Oman",
      paragraphs: [
        "Oman-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Muscat International Airport. Transit time is 3–5 business days. Delivery to Muttrah gold district vaults, dealer storage or any designated secure facility in Muscat.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Omani customs agents for compliant import.",
        "All consignments are insured vault-to-vault with tracking throughout transit."
      ]
    },
    complianceSection: {
      title: "Omani Import Compliance",
      paragraphs: [
        "Gold imports into Oman are regulated by Oman Customs and the Central Bank of Oman. Mayfox provides documentation meeting Omani import requirements: Certificate of Origin, independent assay, export permit and chain-of-custody records.",
        "KYC and AML protocols meet international standards with beneficial ownership verification, source-of-funds checks and sanctions screening. Omani buyers receive a complete compliance pack for their regulatory requirements."
      ]
    },
    whyMayfox: [
      "African gold supply for Oman's Muscat gold market",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or OMR",
      "Insured delivery to Muscat and Muttrah district",
      "Full compliance documentation",
      "Competitive LBMA-based pricing",
    ],
    faqs: [
      { q: "Can Omani dealers import gold from Kenya?", a: "Yes. Mayfox provides gold dore to Omani bullion dealers with full documentation, independent assay and insured delivery to Muscat." },
      { q: "How long does delivery to Oman take?", a: "3–5 business days via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Muscat International Airport, with vault delivery in Muscat." },
      { q: "What is the minimum order for Omani buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Contact the trade desk for volume pricing on wholesale orders." },
      { q: "How do Omani buyers pay?", a: "SWIFT bank transfer in USD or OMR to our Kenyan or Dubai accounts. Standard terms: funds cleared before shipment." },
      { q: "Does Oman import gold directly, or mostly through Dubai?", a: "A large share of Omani metal historically reaches dealers via Dubai intermediaries, which is why a direct Nairobi-to-Muscat consignment usually invites more documentary verification rather than less. Direct import is available to entities whose licensing covers it, and the requirements should be confirmed with Oman Customs and the relevant Omani authority by the importing party. Mayfox will document the Kenyan export leg fully so that whichever route you use, the file travels with the metal." },
      { q: "What minimum quantity makes sense for a first Omani trade?", a: "Small. The customary approach in a compact market where the parties have not previously dealt is a single trial consignment that the buyer can weigh, assay and resell or refine without tying up their own working capital - which is easier to arrange in gold bars and dore lots than in a large crude shipment. Tell the desk your intended intake arrangements and we will price and document a lot that fits them, with sealed samples retained in case of a fineness dispute." },
    ],
    buyerClimate: [
      "Oman's gold trade is old, personal and tied to the Indian Ocean. The Muscat gold souk at Muttrah sits within a trading culture that has moved goods between the Arabian Peninsula and the Swahili coast for centuries, and Omani dealers still operate largely as family houses: decisions are made by people who know the market by name, and East Africa is not an exotic origin to them. Demand is dominated by jewellery in the high-carat styles the region wears, produced by workshops that buy refined metal and dore to cast, roll and finish locally, with investment bar buying present but a much smaller share of the trade than in the Gulf's larger markets.",
      "Because the market is compact, an Omani buyer's proof demands are practical rather than bureaucratic. They want to weigh and assay at their own counter or through a local refiner before releasing value; they want the origin papers to be complete enough that they can resell or re-export later; and they care who physically delivers, because in Muscat the chain from airport to souk is short and personal. Regulatory supervision of dealers' anti-money-laundering conduct sits with the Sultanate's central bank and customs administration, and institutional buyers increasingly keep compliance files - but the decisive test for a first-time East African counterparty is whether the declared fineness stands up to a local re-test and whether the seller is willing to be paid after that result."
    ],
    logisticsNote:
      "Oman-bound consignments depart JKIA Nairobi with licensed valuables carriers for Muscat International Airport, where the buyer's appointed handler moves the metal into a dealer vault, a refiner's intake or storage in the Muttrah district; buyers without their own import arrangements frequently route through Dubai instead, in which case Mayfox delivers into a Dubai vault and the onward leg becomes the buyer's procedure. Omani customs entry is filed by the importing entity's agent, and any approval, valuation or reporting obligation for unworked gold should be confirmed with Oman Customs and the relevant authority before departure. Dealers ask for a tight and legible set: Certificate of Origin, the Kenyan export authorisation, the independent assay report, invoice and packing list whose weights reconcile with it, the airway bill and the insurance certificate naming the consignee - plus bar-level detail they can check one by one at their counter.",
    settlementNote:
      "In a market this size the sensible first trade is deliberately small and deliberately tested. Customary practice is an independent assay before loading with sealed samples retained, delivery into the buyer's own hands or a locally trusted vault, a re-weigh and assay at the buyer's counter or a Muscat refiner, and payment released against that result within a tolerance the two sides wrote down beforehand. As agent, Mayfox can arrange documents-against-payment terms through the Nairobi desk, escrow release on acceptance, or title transfer conditional on the destination determination. These are structures we can organise for you rather than guarantees: the buyer's bank, carrier and local assayer control their parts, and the size of a first consignment should reflect how comfortably both sides can absorb a re-assay disagreement.",
    dueDiligence: [
      "Is this your own metal, or are you selling as agent for cooperatives we can identify?",
      "Will you accept payment after our own assay in Muscat rather than against your certificate alone?",
      "Can we keep sealed samples from this consignment in case of a dispute?",
      "Which carrier delivers in Muscat, and who is the named consignee on the airway bill?",
      "Do your origin documents travel intact if we later re-export the metal?",
    ],
    relatedLinks: [
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "Frequently asked questions", path: "/faqs" },
      { label: "Request a quote", path: "/request-quote" },
    ],
  },
  {
    slug: "kuwait",
    country: "Kuwait",
    eyebrow: "Gold Dore Supply for Kuwait",
    heroTitle: "Gold Dore Supply for Kuwait Investors & Dealers",
    heroSubtitle: "Verified African dore gold for Kuwaiti institutional investors, bullion dealers and wealth managers. Full documentation, independent assay and insured delivery to Kuwait City.",
    pageTitle: "Gold Dore Kuwait — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Kuwait. Buy verified African dore gold and investment-grade bars for Kuwaiti investors, bullion dealers and wealth managers. Full assay and insured delivery to Kuwait City.",
    keywords: "gold dore Kuwait, gold export agent Kuwait, wholesale gold Kuwait, gold import Kuwait, African gold Kuwait, gold from Kenya to Kuwait, gold Kuwait, gold investment Kuwait, Kuwait gold dealers",
    ogTitle: "Gold Dore Export Agent Kuwait — African Gold | Mayfox",
    ogDescription: "Verified African dore gold for Kuwaiti institutions and investors. Full documentation, independent assay and insured delivery to Kuwait City.",
    introParagraphs: [
      "Kuwait is one of the Gulf's most sophisticated gold markets, with a strong tradition of physical gold ownership among institutional investors, family offices and private wealth holders. Kuwait City's gold souk and the country's well-capitalised dealer network create consistent demand for verified, institutional-grade gold.",
      "Mayfox provides the Kuwaiti market with refined 999.9 bars through our partner refineries, dore bars at 85–95% and refined 995 bars from our licensed East African supply chain. Each consignment is independently assayed by SGS or KEBS, documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records.",
      "Gold shipments to Kuwait travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Kuwait International Airport. Transit time is 3–5 business days. Delivery is made to designated secure vaults in Kuwait City. Settlement via SWIFT in USD or KWD.",
      "For Kuwaiti institutional investors, bullion dealers and private wealth managers, Mayfox provides a verified African gold supply line with transparent LBMA-based pricing, full documentation and insured delivery."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Kuwait City", label: "Entry Port" },
      { value: "3-5 Days", label: "Transit Time" },
      { value: "LBMA", label: "Pricing" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Kuwait",
      paragraphs: [
        "Kuwait-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Kuwait International Airport. Transit time is 3–5 business days. Delivery is made to designated secure vaults in Kuwait City.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Kuwaiti customs agents.",
        "All consignments are insured vault-to-vault with full tracking."
      ]
    },
    complianceSection: {
      title: "Kuwait Import Compliance",
      paragraphs: [
        "Gold imports into Kuwait are regulated by Kuwait Customs and the Central Bank of Kuwait. Mayfox provides documentation meeting Kuwaiti import requirements and international OECD standards for responsible sourcing.",
        "KYC and AML protocols include beneficial ownership verification, source-of-funds checks and sanctions screening. Kuwaiti buyers receive a complete compliance pack suitable for institutional requirements."
      ]
    },
    whyMayfox: [
      "African dore gold for Kuwait's institutional investors and dealers",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or KWD",
      "Insured vault-to-vault delivery to Kuwait City",
      "Full compliance documentation",
      "Competitive LBMA-based pricing",
    ],
    faqs: [
      { q: "Can Kuwaiti investors import gold from Kenya?", a: "Yes. Mayfox provides investment-grade gold dore to Kuwaiti institutional investors and dealers with full documentation, independent assay and insured delivery to Kuwait City." },
      { q: "How is gold shipped to Kuwait?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Kuwait International Airport. Transit: 3–5 business days with vault delivery in Kuwait City." },
      { q: "What is the minimum order for Kuwaiti buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Volume pricing available for larger orders. Contact the trade desk." },
      { q: "How do Kuwaiti buyers pay?", a: "SWIFT bank transfer in USD or KWD to our Kenyan or Dubai accounts. Standard terms: funds cleared before shipment." },
      { q: "Can a Kuwaiti gold shop import dore, or must it buy through a refiner?", a: "Commercial-licence conditions and import rules in Kuwait distinguish between dealing in finished articles and bringing unworked gold into the country, so an importer should confirm its own position with Kuwait's Ministry of Commerce and Industry, Kuwait Customs and its bank before agreeing a delivery basis. Mayfox represents dore bars and nuggets and arranges refined product through partner refineries, and can deliver into whichever licensed receiving route the buyer's own approvals support." },
      { q: "Do Kuwaiti banks handle payment against export documents?", a: "Kuwait's banks are conservative and documentary, which suits this trade: funds are normally released against an accepted set of export documents and an agreed assay position rather than on a seller's invoice alone. Practical details - which documents your bank requires, whether it will act on an escrow, how the transfer is described for reporting purposes - are questions for the buyer's own bank and the Central Bank of Kuwait's rules, not for this page. Mayfox will prepare the file to whatever documentary standard your bank names." },
    ],
    buyerClimate: [
      "Kuwait has one of the Gulf's deepest household gold cultures in a very small commercial market: strong per-capita ownership, souk-based dealing around the old Mubarakiya and Kuwait City gold streets, and a handful of wholesale houses and jewellery manufacturers that supply most of it. Because the trade is concentrated, a Kuwaiti buyer's judgment of a new origin is formed by a few people whose names carry through the market, and the country's Islamic banks operate in-house gold trading desks that give institutional demand a documented, physically settled shape. Kuwaiti money is also habitually invested in hard assets, so investment-grade metal has a genuine local audience rather than only a fabricator's audience.",
      "The proof Kuwaiti buyers expect is commercial and documentary at once. Dealing in gold articles is supervised by the Ministry of Commerce and Industry with rules on purity description and disclosure - which a buyer will confirm with the ministry for their own shop - and imports are screened through Kuwait Customs with anti-money-laundering expectations set by the Central Bank of Kuwait. Against that background, a Kuwaiti counterpart asks three things of an East African agent: an assay they can re-test at a local refiner, documents whose names and figures match because their bank will read them, and clarity that the seller is an agent with a real mandate rather than an intermediary with no metal behind the offer. They will settle through a Kuwaiti bank on documentary terms, and they will usually start with one small consignment precisely because the market is small enough to talk to afterwards."
    ],
    logisticsNote:
      "Consignment routing into Kuwait runs from JKIA Nairobi with licensed valuables carriers to Kuwait International Airport, cleared by the importing entity's Kuwaiti customs agent into a dealer vault, a refiner's intake or bank safekeeping; many Kuwaiti buyers also take delivery through Dubai and bring the metal in themselves, which changes whose procedures apply rather than what documents are needed. Import licensing, customs valuation and any reporting duty attaching to the receiving institution must be confirmed with Kuwait Customs, the Ministry of Commerce and Industry and the Central Bank of Kuwait by the importing party. Expect a Kuwaiti buyer to require: Certificate of Origin, the Kenyan export authorisation, the independent assay report, invoice and packing list that reconcile to it, the airway bill naming the consignee, and the insurance certificate. Banks frequently want the same figures visible in all five documents before they will release funds.",
    settlementNote:
      "Kuwaiti practice with an untested counterparty is to make the first trade documentary and modest. The customary structure is assay before loading at a laboratory both sides name, sealed samples retained, delivery into the buyer's vault or refiner, verification at that intake, and payment released by the buyer's bank against the accepted documents and result within a tolerance agreed in advance. As agent, Mayfox can arrange settlement against documents through the Nairobi desk, escrow release on the acceptance record, or transfer of title conditional on the destination assay. These are arrangements we can organise, not assurances of outcome: the bank, carrier and assayer are the buyer's appointed parties, and a first consignment should be sized so that both sides can live with a re-test.",
    dueDiligence: [
      "Which entity holds the Kenyan export authorisation, and how do we verify it independently?",
      "Are you the owner of the metal or its agent, and can you show the mandate?",
      "Will your price adjust to our Kuwaiti re-assay, and within what written tolerance?",
      "Which documents will our bank require before releasing funds, and can you supply them pre-shipment?",
      "Who is the named consignee and loss payee on the freight and insurance?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "How to verify a gold offer", path: "/anti-fraud" },
      { label: "Services for buyers", path: "/services" },
      { label: "About Mayfox", path: "/about" },
    ],
  },
  {
    slug: "turkey",
    country: "Turkey",
    eyebrow: "Gold Dore Supply for Turkey",
    heroTitle: "African Dore Gold Supply for Turkish Refineries & Dealers",
    heroSubtitle: "Verified African gold dore for Turkey's refineries, bullion dealers, jewellery manufacturers and institutional investors. Full documentation, independent assay and insured delivery to Istanbul.",
    pageTitle: "Gold Dore Turkey — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Turkey. Buy verified African gold dore bars and nuggets for Turkish refineries, bullion dealers, jewellery manufacturers and investors. Full assay and insured delivery to Istanbul.",
    keywords: "gold dore Turkey, gold export agent Turkey, wholesale gold Turkey, gold import Turkey, African gold Turkey, gold from Kenya to Turkey, gold refinery Turkey, gold Turkey, Istanbul gold, gold jewellery Turkey, Grand Bazaar gold",
    ogTitle: "Gold Dore Export Agent Turkey — African Gold | Mayfox",
    ogDescription: "Verified African gold dore for Turkey's refineries and dealers. Full documentation, independent assay and insured delivery to Istanbul.",
    introParagraphs: [
      "Turkey is one of the world's most important gold markets, with a centuries-old tradition centred on Istanbul's Grand Bazaar and Kapalıçarşı gold district. Turkish refineries process significant volumes of imported dore, while the country's vast jewellery manufacturing sector provides markets across Europe, the Middle East and Central Asia. Turkish buyers demand competitive pricing, verified purity and fast logistics.",
      "Mayfox provides the Turkish market with gold dore bars at 85–95% purity (ideal for Turkish refinery processing), refined 995 bars, refined 999.9 gold through our partner refineries and gold nuggets from our licensed East African operations. Every consignment is independently assayed, fully documented and priced against the LBMA USD fix.",
      "Gold shipments to Turkey travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Istanbul Airport or via Dubai for buyers preferring the GCC re-export corridor. Transit time is 4–7 business days. Delivery is made to refinery intake, dealer vaults or designated secure storage in Istanbul. Settlement via SWIFT in USD, EUR or TRY.",
      "For Turkish refineries, bullion dealers in the Grand Bazaar ecosystem, jewellery manufacturers in Istanbul and institutional investors, Mayfox provides a reliable African gold supply line with transparent pricing, full documentation and the logistics speed the Turkish market demands."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Istanbul", label: "Primary Port" },
      { value: "4-7 Days", label: "Transit Time" },
      { value: "20+", label: "Active Buyers" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Turkey",
      paragraphs: [
        "Turkey-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Istanbul Airport, or via Dubai for buyers who prefer the GCC re-export corridor. Transit time is 4–7 business days. Delivery is made to refinery intake, Grand Bazaar dealer vaults or designated secure storage in Istanbul.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Turkish customs agents to ensure compliant import.",
        "All consignments are insured vault-to-vault with full tracking and proactive customs coordination."
      ]
    },
    complianceSection: {
      title: "Turkish Import Compliance & Borsa İstanbul Standards",
      paragraphs: [
        "Gold imports into Turkey are regulated by the Ministry of Trade and can be conducted through Borsa İstanbul precious metals members. Mayfox provides documentation meeting Turkish import requirements: Certificate of Origin, independent assay, export permit and chain-of-custody records.",
        "KYC and AML protocols meet international standards. All transactions include beneficial ownership disclosure, source-of-funds checks and sanctions screening. Turkish buyers receive a complete compliance pack for their regulatory requirements.",
        "For buyers using the Dubai corridor, we provide documentation suitable for both UAE export and Turkish import procedures."
      ]
    },
    whyMayfox: [
      "African gold dore ideal for Turkish refinery processing",
      "Independent SGS/KEBS assay on every consignment",
      "SWIFT settlement in USD, EUR or TRY",
      "Direct delivery to Istanbul or via Dubai corridor",
      "Full documentation for Turkish Customs and Borsa İstanbul",
      "Experienced with Turkish institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Turkish refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore at 85–95% purity to Turkish refineries with independent SGS assay, Certificate of Origin and full export documentation. Delivery to Istanbul refinery intake." },
      { q: "How long does delivery to Turkey take?", a: "4–7 business days via Brinks or Malca-Amit from JKIA Nairobi to Istanbul Airport. The Dubai corridor is also available for Turkish buyers who prefer GCC-based consolidation." },
      { q: "What is the minimum order for Turkish buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore. Wholesale dore consignments of 10 kg+ for refinery processing benefit from volume pricing. Contact the trade desk." },
      { q: "Do you supply gold to Grand Bazaar dealers?", a: "Mayfox provides wholesale gold dore to established Turkish bullion dealers, many serving the Grand Bazaar ecosystem. Wholesale minimums apply." },
      { q: "How do Turkish buyers pay?", a: "SWIFT bank transfer in USD, EUR or TRY to our Kenyan or Dubai accounts. Letters of credit available for institutional orders. Funds cleared before shipment." },
      { q: "Who holds the Turkish import licence for gold dore?", a: "Entry of unworked gold is a licensed activity in Turkey, undertaken by importers authorised under the Ministry of Trade's regime and often transacted through members of the exchange's precious metals market. The licence belongs to the Turkish importer, never to the overseas seller, so confirm your own status or your buyer's with the ministry and your customs broker. Mayfox acts as Kenyan export agent and supplies the origin, assay and export-authorisation file the licensed importer's entry relies on." },
      { q: "Do Turkish refiners accept 85-95% dore, and how is it priced?", a: "Yes - imported dore is standard refinery feedstock in Istanbul, and refiners there are technically fluent in crude metal. Pricing follows the same logic as most refining markets: the metal value is struck against the international benchmark and the refiner's treatment and refining charges, recovery basis and any impurity deductions are agreed separately, with the refiner's own intake assay governing the final figure. Mayfox arranges an independent pre-shipment assay and sealed samples so the two determinations can be compared honestly." },
    ],
    buyerClimate: [
      "Istanbul is one of the world's great physical gold cities, and the trade still runs through the Kapalıçarşı - the Grand Bazaar's dealers, assay benches and workshops - even though the modern machinery sits elsewhere. Turkish demand is unusually two-sided: households save in gram and small-bar gold as a store of value against currency movement, while jewellers fabricate high-carat work for domestic weddings and for export into Europe and Central Asia, and refineries in the city process imported dore as routine feedstock. That combination makes Turkish buyers technically confident and commercially impatient: they know exactly how crude metal behaves, they price metal in lira per gram against the world benchmark, and they expect a supply line that keeps arriving.",
      "Formally, entry of unworked gold is administered by the Ministry of Trade through licensed importers, and part of the trade is transacted through the precious metals market at Borsa Istanbul; licensing status and current procedural rules must be confirmed with the ministry and the exchange by the importing entity. The practical proof demands follow from that structure: a licensed importer or refiner wants their own intake assay to govern settlement, wants sampling and sealing arrangements that allow a re-test, and wants documents that reconcile because customs and bank filings in Turkey are checked line by line. Turkish refineries are also comfortable with East African and Asian feedstock, so a first-time Kenyan counterparty is judged less on origin than on whether its declared fineness survives an Istanbul bench test."
    ],
    logisticsNote:
      "Turkey-bound consignments leave JKIA Nairobi with licensed valuables carriers for Istanbul Airport, or arrive through the Dubai corridor where the licensed importer prefers GCC consolidation; either way the metal is cleared by the importer's Turkish customs broker into a refinery intake, a dealer vault or exchange-member storage. Because import rights for unworked gold are licensed, the entry procedure, valuation and any currency or reporting obligations belong to the Turkish importer and must be confirmed with the Ministry of Trade, Turkey's customs administration and the buyer's bank before freight is booked. Turkish buyers ask for the standard Kenyan file and check it hard: Certificate of Origin, export authorisation, independent assay report with laboratory and method identified, invoice and packing list whose weights match the assay, airway bill, and insurance naming the consignee. Refineries in particular will not sign for freight without the assay document in hand.",
    settlementNote:
      "The customary Turkish first trade with an unfamiliar East African counterparty is short, tested and priced on the refiner's number. Practice runs: independent assay before loading with sealed samples retained, delivery into the licensed importer's or refiner's intake, an assay at that intake, and settlement on the resulting fine-gold content within a tolerance agreed in writing - usually by wire from a Turkish bank, sometimes on documents-against-payment or letter-of-credit terms the buyer's bank prefers. As agent, Mayfox can arrange that sequence, escrow release following the intake determination, or transfer of title conditional on it; refining terms, recovery bases and deductions are contracted directly between the buyer and their refinery, since Mayfox does not refine. Nothing here is a guarantee, and a first consignment is best sized so a re-assay disagreement is survivable.",
    dueDiligence: [
      "Do you hold a current Kenyan export authorisation for this exact consignment?",
      "Are you contracting as principal or as agent for Kenyan cooperatives?",
      "Which laboratory issued the export assay, and is it accredited to a standard our refiner recognises?",
      "How is the price adjusted if our intake assay is lower than your certificate?",
      "Do your invoice and packing list reconcile to the assay for customs and bank filing?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Industries we serve", path: "/industries" },
      { label: "Request a quote", path: "/request-quote" },
    ],
  },
  {
    slug: "germany",
    country: "Germany",
    eyebrow: "Gold Dore Supply for Germany",
    heroTitle: "African Dore Gold Supply for German Refineries & Investors",
    heroSubtitle: "Verified African gold dore for German refineries, bullion dealers, industrial users and institutional investors. Full OECD documentation, independent assay and insured delivery to Frankfurt and Pforzheim.",
    pageTitle: "Gold Dore Germany — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Germany. Buy verified African gold dore for German refineries, bullion dealers and institutional investors. Full OECD documentation and insured delivery to Frankfurt and Pforzheim.",
    keywords: "gold dore Germany, gold export agent Germany, wholesale gold Germany, gold import Germany, African gold Germany, gold from Kenya to Germany, gold refinery Germany, gold Germany, Frankfurt gold, Pforzheim gold, institutional gold Germany",
    ogTitle: "Gold Dore Export Agent Germany — African Gold | Mayfox",
    ogDescription: "Verified African gold for German refineries and investors. Full OECD documentation, independent assay and insured delivery to Frankfurt and Pforzheim.",
    introParagraphs: [
      "Germany is Europe's largest gold market and home to some of the continent's most important refineries in Pforzheim and Hanau, as well as a sophisticated network of bullion dealers, industrial gold users, private investors and institutional buyers centred around Frankfurt, Stuttgart and Berlin. German buyers expect rigorous documentation, verified purity and demonstrable responsible sourcing — standards Mayfox meets on every consignment.",
      "Mayfox provides the German market with gold dore bars at 85–95% purity, refined 995 bars, refined 999.9 gold through our partner refineries and gold nuggets from our licensed East African supply chain. Every consignment is independently assayed by SGS, documented with Certificate of Origin, Kenyan export licence, OECD due diligence pack and full chain-of-custody records suitable for German refinery intake.",
      "Gold shipments to Germany travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Frankfurt Airport, with onward secure road transport to Pforzheim, Hanau, Stuttgart or any designated German destination. Transit time is 4–7 business days. Settlement via SWIFT in EUR or USD.",
      "For German refineries, bullion dealers, industrial precious metals users and institutional investors, Mayfox provides a verified African gold supply line with transparent LBMA-based pricing, OECD-compliant documentation and the logistical reliability the German market demands."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Frankfurt", label: "Entry Port" },
      { value: "4-7 Days", label: "Transit Time" },
      { value: "OECD", label: "Compliant" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Germany",
      paragraphs: [
        "Germany-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Frankfurt Airport. From Frankfurt, armoured road transport delivers to Pforzheim refineries, Hanau processing facilities, Stuttgart dealer vaults or any designated secure storage in Germany. Transit time is 4–7 business days.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, OECD due diligence pack, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with German customs agents for EU import clearance.",
        "All consignments are insured vault-to-vault. We provide real-time tracking and proactive customs coordination."
      ]
    },
    complianceSection: {
      title: "German & EU Import Compliance",
      paragraphs: [
        "Gold imports into Germany and the EU benefit from duty-free treatment. Mayfox provides documentation meeting German Zoll (customs) requirements and EU import regulations: Certificate of Origin, independent assay, export permit and full OECD due diligence documentation.",
        "KYC and AML protocols meet BaFin and EU AMLD standards. All transactions include beneficial ownership disclosure, source-of-funds verification and sanctions screening. German buyers receive a compliance pack suitable for BaFin-regulated institutions and EU regulatory requirements.",
        "We can coordinate directly with German refinery compliance teams to ensure all documentation meets their specific intake requirements before the consignment departs Nairobi."
      ]
    },
    whyMayfox: [
      "African gold dore bars and nuggets for German refineries and dealers",
      "Full OECD Step 1–5 due diligence documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in EUR or USD",
      "Delivery to Frankfurt, Pforzheim, Hanau and throughout Germany",
      "Experienced with EU import procedures and German refinery requirements",
    ],
    faqs: [
      { q: "Can German refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore at 85–95% purity to German refineries in Pforzheim and Hanau with independent SGS assay, OECD due diligence documentation and full export paperwork. Delivery to refinery intake." },
      { q: "How long does delivery to Germany take?", a: "4–7 business days via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Frankfurt Airport, then armoured road transport to your German destination. EU customs clearance included." },
      { q: "What documentation do you provide for German import?", a: "Complete OECD due diligence pack (Steps 1–5), Certificate of Origin, independent SGS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk insurance — all suitable for German Zoll and EU import." },
      { q: "What is the minimum order for German buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Wholesale orders of 10 kg+ for refinery processing benefit from volume pricing." },
      { q: "How do German buyers pay?", a: "SWIFT bank transfer in EUR or USD to our Kenyan or Dubai accounts. Escrow and confirmed letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Are gold imports to Germany from Kenya duty-free?", a: "Yes. Gold bullion imports into the EU from Kenya benefit from duty-free treatment. Mayfox provides all necessary documentation for duty-free EU import clearance." },
      { q: "Does German supply-chain due-diligence law apply to our import of Kenyan gold?", a: "Obligations under German supply-chain due-diligence rules and the European Union's due-diligence framework for gold importers depend on the importer's size, sector and activity, and on current transposition and threshold details, so scope must be confirmed with the competent German authority and your legal adviser rather than assumed from a seller's website. Mayfox's contribution as export agent is the substance those reviews look for: mapped origin, documented risk assessment, independent assay and a chain of custody that matches the commercial documents." },
      { q: "Can a German dealer buy dore, or is refined product the only option?", a: "Refineries and fabrication houses in Pforzheim and Hanau take crude metal as feedstock, which is a normal German practice because the country refines and mints at scale. Dealers and industrial users generally work with refined product, arranged here through partner refineries, since their specifications and VAT positions differ between unworked and investment-grade metal. Tell the desk which of the two you need and who your receiving refiner is; the assay, documentation and settlement structure change accordingly." },
    ],
    buyerClimate: [
      "Germany is Europe's biggest gold economy and it is organised around making things. Pforzheim, the historic Goldstadt, concentrates jewellery and precision metalwork; Hanau and the Rhine-Main area host refining and industrial precious-metals users; Frankfurt supplies the financial infrastructure as the home of the European Central Bank and of BaFin supervision, and it is where institutional money and vault logistics meet. Around that industrial and financial spine sits one of the world's most active retail investment cultures, which favours small bars and gram weights alongside one-ounce formats and expects buy-back liquidity - a market detail that shapes how German dealers order metal and how quickly they want it verified and put into stock.",
      "German proof culture is written, precise and legalistic. Buyers expect specification sheets rather than assertions, an accredited independent assay with sampling method stated, tolerance bands for weight and fineness written into the contract, a named dispute-reassessment procedure, and a contract governed by clear law with a counterparty whose registration can be checked. Due-diligence expectations come from two directions: the European Union's and Germany's own supply-chain due-diligence frameworks, whose scope depends on company size and sector and must be confirmed with the competent authority, and the responsible-sourcing rules the receiving refinery or association already applies. VAT treatment differs between product forms and buyer status, so that too belongs to the importer's tax adviser and the German customs administration - and German buyers will not accept a seller who answers those questions with marketing language."
    ],
    logisticsNote:
      "Consignment routing into Germany is straightforward and is expected to be documented: valuables carriers move metal from JKIA Nairobi to Frankfurt Airport, where bonded road transport delivers to refineries and fabrication sites in Pforzheim and Hanau, to dealer or vault storage in Frankfurt, Stuttgart or Munich, or to an EU entry point the buyer nominates. The customs procedure - entry filing, classification of unworked versus worked gold, VAT treatment of the specific product, and any statistical declarations - is completed by the receiving entity's customs agent, and must be confirmed with the German customs administration (Zoll) and, where relevant, the EU member-state authority handling the import. German buyers request the full Kenyan file and check internal consistency: Certificate of Origin, export authorisation, accredited assay report with sampling details, invoice and packing list whose bar-level weights reconcile, airway bill, insurance naming the consignee, and the due-diligence documentation pack their compliance department will archive.",
    settlementNote:
      "With a first East African counterparty, German buyers habitually reduce the arrangement to a written sequence with independent checkpoints. Typically: assay before loading at an accredited laboratory with sealed samples retained, delivery into refinery or vault storage, a determination by the receiving refinery or an assayer the buyer appoints, and payment released against those documents, with price adjusted to fine-gold content within a stated tolerance and a defined process if the two assays disagree. As agent, Mayfox can organise settlement against documents, escrow release, or transfer of title conditional on the destination determination, and can supply the file in the structure a German compliance function archives. These are customary options rather than guarantees; the buyer's bank, refiner and auditor hold their own roles, and a first consignment should be sized to make a re-assay disagreement manageable for both parties.",
    dueDiligence: [
      "Is the pre-shipment assay from an accredited laboratory, and does it state the sampling method?",
      "Can you map this consignment to named licensed cooperatives and buying stations with dates?",
      "Which written tolerance applies between your assay and our refiner's intake assay?",
      "Which entity contracts with us, where is it registered, and does it ever hold title?",
      "Does your due-diligence pack support the obligations our compliance function must evidence?",
    ],
    relatedLinks: [
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Market insights", path: "/market-insights" },
      { label: "About Mayfox", path: "/about" },
    ],
  },
  {
    slug: "france",
    country: "France",
    eyebrow: "Gold Dore Supply for France",
    heroTitle: "African Dore Gold Supply for French Dealers & Investors",
    heroSubtitle: "Verified African dore gold for French bullion dealers, institutional investors, wealth managers and private buyers. Full documentation, independent assay and insured delivery to Paris and throughout France.",
    pageTitle: "Gold Dore France — African Gold Export Agent | Mayfox",
    description: "Gold export agent for France. Buy verified African dore gold and investment-grade bars for French bullion dealers, investors and wealth managers. Full assay and insured delivery to Paris and throughout France.",
    keywords: "gold dore France, gold export agent France, wholesale gold France, gold import France, African gold France, gold from Kenya to France, gold France, gold investment France, Paris gold, gold bars France, institutional gold France",
    ogTitle: "Gold Dore Export Agent France — African Gold | Mayfox",
    ogDescription: "Verified African dore gold for French dealers and investors. Full documentation, independent assay and insured delivery to Paris and throughout France.",
    introParagraphs: [
      "France has a deep and sophisticated gold market, anchored by the Banque de France's historic gold reserves, a network of established bullion dealers in Paris, and a growing community of wealth managers and private investors who view physical gold as an essential portfolio component. French buyers demand quality, transparency and regulatory compliance — standards Mayfox delivers.",
      "Mayfox provides the French market with refined 999.9 bars through our partner refineries, dore bars at 85–95% and refined 995 bars from our licensed East African supply chain. Every consignment is independently assayed and documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records suitable for EU import.",
      "Gold shipments to France travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Paris Charles de Gaulle Airport. Transit time is 4–7 business days. Delivery is made to Banque de France-approved vaults, dealer storage, private vault facilities or any designated secure destination in France. Settlement via SWIFT in EUR or USD.",
      "For French bullion dealers, wealth managers, private investors and institutional buyers, Mayfox provides a verified African gold supply line with transparent pricing, EU-compliant documentation and reliable logistics."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Paris CDG", label: "Entry Port" },
      { value: "4-7 Days", label: "Transit Time" },
      { value: "EU", label: "Compliant" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to France",
      paragraphs: [
        "France-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Paris Charles de Gaulle Airport. From CDG, secure transport delivers to designated vaults, dealer storage or secure facilities throughout France. Transit time is 4–7 business days including EU customs clearance.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with French customs agents for EU import clearance.",
        "All consignments are insured vault-to-vault with full tracking."
      ]
    },
    complianceSection: {
      title: "French & EU Regulatory Compliance",
      paragraphs: [
        "Gold imports into France benefit from EU duty-free treatment. Mayfox provides documentation meeting French Douanes requirements: Certificate of Origin, independent assay, export permit and full chain-of-custody records.",
        "KYC and AML protocols meet ACPR/Banque de France and EU AMLD standards. All transactions include beneficial ownership disclosure, source-of-funds verification and sanctions screening against EU and French lists.",
        "French buyers receive a complete compliance pack suitable for ACPR-regulated institutions and EU regulatory requirements."
      ]
    },
    whyMayfox: [
      "African dore gold for French dealers and institutional investors",
      "Independent SGS assay on every consignment",
      "EU-compliant documentation for duty-free import",
      "SWIFT settlement in EUR or USD",
      "Insured vault-to-vault delivery to Paris and throughout France",
      "Experienced with EU import procedures",
    ],
    faqs: [
      { q: "Can French dealers import gold from Kenya?", a: "Yes. Mayfox provides investment-grade gold dore to French dealers with independent SGS assay, Certificate of Origin and full EU-compliant documentation. Delivery to Paris CDG and throughout France." },
      { q: "How long does delivery to France take?", a: "4–7 business days via Brinks or Malca-Amit from JKIA Nairobi to Paris Charles de Gaulle, including EU customs clearance. Secure transport to your designated French vault." },
      { q: "What is the minimum order for French buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Volume pricing available for larger orders. Contact the trade desk for a quote." },
      { q: "Are gold imports from Kenya to France duty-free?", a: "Yes. Gold bullion imports into the EU from Kenya are duty-free. Mayfox provides all documentation for compliant duty-free EU import." },
      { q: "How do French buyers pay?", a: "SWIFT bank transfer in EUR or USD to our Kenyan or Dubai accounts. Escrow settlement available for institutional orders. Funds cleared before shipment." },
      { q: "Does France require gold imports to go through a particular procedure?", a: "France has historically channelled investment-gold trade through dedicated customs regimes and supervised precious-metals dealers through a professional body, so the correct procedure depends on the metal's form, the importer's status and current rules. Confirm the applicable regime, the VAT position and any declaration duty with the French customs administration (Douanes) and your tax adviser before shipping; do not rely on a seller's summary. Mayfox supplies the Kenyan authorisation, Certificate of Origin, accredited assay and chain-of-custody records your filing needs." },
      { q: "Do you supply small bars for French private investors?", a: "Refined investment-grade product in the bar formats French dealers and wealth advisers actually sell - including smaller gram weights - is arranged through partner refineries, while dore bars and nuggets are what Mayfox represents directly from Kenyan sources. If your business is retail allocation rather than refinery feedstock, tell the desk the formats and the packaging your clients expect, since documentation, assay presentation and VAT treatment follow the product form." },
    ],
    buyerClimate: [
      "France has a quieter but structurally important gold market, and it is institutional in its habits. Paris's precious-metals trade descends from the old exchange premises at the Bourse de Commerce and is administered through dedicated customs regimes for investment gold, with dealers' professional conduct overseen by the sector's official professional body; the Banque de France's historic reserves and its role in the national gold story still shape how the market thinks about custody and credibility. Around that core sits a genuine private-investor culture - small bars and gram weights bought through banks, advisers and specialist dealers, held in allocated or vault storage, and regarded as portfolio insurance rather than a trading position - plus wealth managers who buy physical metal for clients and care most about buy-back liquidity.",
      "The French proof standard is documentary and administrative. An importer wants an assay from a recognised laboratory, invoice and packing list that reconcile exactly because customs and tax filings cross-check them, EUR or USD invoicing that matches the declared regime, and a supply-chain file aligned with OECD guidance and the European Union's due-diligence framework for gold, whose scope by company size and sector should be confirmed with the competent authority. French counterparties are polite, slow to commit and unusually consistent once they do: a first trade is typically a modest trial lot with a written tolerance between export and destination assay, and the relationship, if the paperwork holds, tends to repeat on the same terms for years."
    ],
    logisticsNote:
      "France-bound freight departs JKIA Nairobi with licensed valuables carriers for Paris Charles de Gaulle, where the receiving entity's handler takes the consignment to a bank or commercial vault, a dealer's storage or a fabrication site, and EU entry is completed by the buyer's French customs agent. Investment gold, unworked gold and industrial or fabricated forms attract different customs regimes and different VAT consequences, and the codes and procedures applicable to a given consignment must be confirmed with the Douanes and the importer's adviser before departure. A French buyer will expect the complete Kenyan file presented consistently: Certificate of Origin, export authorisation, accredited independent assay with sampling method identified, invoice and packing list reconciling bar by bar, airway bill naming the consignee, insurance certificate, and the due-diligence documentation their compliance function retains. Many French institutional buyers also ask whether metal can be routed into EU or Swiss storage, which is a delivery-instruction question rather than a change in documentation.",
    settlementNote:
      "The customary French structure with an unfamiliar East African counterparty is conservative and written down. Practice is: independent assay before loading with sealed samples retained, delivery into the buyer's nominated vault or refinery, verification by an assayer the buyer appoints, and payment released against those accepted documents within a tolerance band agreed in advance - by wire in EUR or USD, on documents-against-payment terms, or through an escrow arrangement where the buyer's bank supports it. As agent, Mayfox can arrange each of those sequences and can prepare the file to whatever documentary standard the buyer's bank or custodian names; none of it is a guarantee, since title, custody, insurance and payment remain with the appointed carriers, vaults and banks. French counterparties generally prefer a first consignment small enough that both sides can absorb an adverse re-assay without renegotiating the relationship.",
    dueDiligence: [
      "Which laboratory issued the assay, is it accredited, and does it state sampling and method?",
      "Can your documents support the customs regime and VAT position our importer claims?",
      "Are invoice, packing list and assay figures consistent to the gram, as our filings require?",
      "Do you act as agent for identifiable licensed cooperatives, and what evidences that?",
      "Will you accept a destination re-assay as the settlement basis, within what tolerance?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "Gold in Kenya", path: "/gold-in-kenya" },
      { label: "Frequently asked questions", path: "/faqs" },
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    eyebrow: "Gold Dore Supply for Canada",
    heroTitle: "African Dore Gold Supply for Canadian Refineries & Investors",
    heroSubtitle: "Verified African gold dore for Canadian refineries, bullion dealers, mining finance institutions and investors. Full documentation, independent assay and insured delivery to Toronto, Vancouver and Montreal.",
    pageTitle: "Gold Dore Canada — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Canada. Buy verified African gold dore for Canadian refineries, bullion dealers, institutional investors and mining finance institutions. Full assay and insured delivery to Toronto, Vancouver and Montreal.",
    keywords: "gold dore Canada, gold export agent Canada, wholesale gold Canada, gold import Canada, African gold Canada, gold from Kenya to Canada, gold refinery Canada, gold Canada, Toronto gold, Vancouver gold, institutional gold Canada, Royal Canadian Mint",
    ogTitle: "Gold Dore Export Agent Canada — African Gold | Mayfox",
    ogDescription: "Verified African gold for Canadian refineries and investors. Full documentation, independent assay and insured delivery to Toronto, Vancouver and Montreal.",
    introParagraphs: [
      "Canada is home to the Royal Canadian Mint, a world-class refinery and gold producer, as well as a sophisticated network of bullion dealers, institutional investors, mining finance institutions and wealth managers concentrated in Toronto, Vancouver and Montreal. Canadian buyers demand rigorous documentation, verified chain-of-custody and compliance with Canadian anti-money laundering regulations — standards Mayfox meets on every shipment.",
      "Mayfox provides the Canadian market with gold dore bars at 85–95% purity, refined 999.9 bars through our partner refineries, refined 995 bars and gold nuggets from our licensed East African operations. Each consignment is independently assayed, fully documented and priced against the LBMA USD fix in USD or CAD equivalents.",
      "Gold shipments to Canada travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Toronto Pearson, Vancouver or Montreal-Trudeau international airports. Transit time is 4–7 business days. Delivery is made to refinery intake, dealer vaults or designated secure storage. Settlement via SWIFT in USD or CAD.",
      "For Canadian refineries, bullion dealers, institutional investors, mining finance companies and wealth managers, Mayfox provides a reliable African gold supply line with transparent pricing, full compliance documentation and the logistics reliability Canadian buyers expect."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Toronto", label: "Primary Port" },
      { value: "4-7 Days", label: "Transit Time" },
      { value: "FINTRAC", label: "Compliant" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Canada",
      paragraphs: [
        "Canada-bound gold departs JKIA Nairobi via Brinks or Malca-Amit to Toronto Pearson, Vancouver or Montreal-Trudeau international airports. Transit time is 4–7 business days including Canada Customs clearance. Delivery is made to refinery intake, dealer vaults or designated secure storage.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Canadian customs brokers for compliant CBSA entry.",
        "All consignments are insured vault-to-vault with full tracking throughout transit."
      ]
    },
    complianceSection: {
      title: "Canadian Import Compliance & FINTRAC Standards",
      paragraphs: [
        "Gold imports into Canada are regulated by the Canada Border Services Agency (CBSA). Precious metals dealers in Canada are regulated under FINTRAC and the PCMLTFA. Mayfox provides documentation meeting Canadian import and compliance requirements: Certificate of Origin, independent assay, export permit and full chain-of-custody.",
        "KYC and AML protocols meet FINTRAC-equivalent standards. All transactions include beneficial ownership disclosure, source-of-funds verification and sanctions screening against Canadian, UN, OFAC and EU lists. Canadian buyers receive a complete compliance pack for FINTRAC audit purposes.",
        "We can coordinate with Canadian compliance officers and receiving vaults to ensure all documentation meets CBSA and FINTRAC requirements."
      ]
    },
    whyMayfox: [
      "African gold dore for Canadian refineries including Royal Canadian Mint intake",
      "FINTRAC-compatible compliance documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or CAD",
      "Delivery to Toronto, Vancouver, Montreal and across Canada",
      "Experienced with North American institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Canadian refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore at 85–95% purity to Canadian refineries with independent SGS assay, Certificate of Origin, full export documentation and FINTRAC-compatible compliance records. Delivery to Toronto, Vancouver or Montreal." },
      { q: "How is gold shipped to Canada?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Toronto Pearson, Vancouver or Montreal-Trudeau. Transit: 4–7 business days including CBSA customs clearance. Vault-to-vault delivery." },
      { q: "What is the minimum order for Canadian buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Wholesale dore consignments for refinery processing benefit from volume pricing at 10 kg+." },
      { q: "Is Mayfox compliant with Canadian AML regulations?", a: "Yes. Our KYC and AML protocols meet FINTRAC-equivalent standards. We provide full beneficial ownership disclosure, source-of-funds verification and sanctions screening with every transaction." },
      { q: "How do Canadian buyers pay?", a: "SWIFT bank transfer in USD or CAD to our Kenyan or Dubai accounts. Escrow and letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Do Canadian buyers need a licence to import gold dore?", a: "Import of gold into Canada is handled through Canada Border Services Agency entry procedures rather than a seller-side approval, but the receiving party's own obligations - customs entry, currency and anti-money-laundering reporting where they apply, and the refiner's intake requirements - must be confirmed by that party with CBSA, FINTRAC and its broker. Mayfox does not act as importer of record: as Kenyan export agent we supply the export authorisation, Certificate of Origin, accredited assay and chain-of-custody documents the Canadian entry is filed against." },
      { q: "How do Canadian refiners price East African dore?", a: "In the same language they use for domestic Canadian dore: metal value struck against the international benchmark, with treatment and refining charges, recovery basis and deductions for impurities agreed separately, and settlement following the refinery's own assay rather than the seller's certificate. Mayfox represents dore bars and nuggets at the purities stated on this site and arranges refined product through partner refineries, so a Canadian refiner should expect an independent pre-shipment assay, sealed samples and a written tolerance for the intake determination." },
    ],
    buyerClimate: [
      "Canada is a gold-producing country, which makes its buyers unusually fluent in exactly what Mayfox represents. Domestic mines ship dore to refiners as a routine industrial practice, so Canadian counterparties already think in terms of unrefined bars, assay uncertainty, moisture and impurity deductions, and treatment and refining charges quoted separately from metal value. The infrastructure around that knowledge is substantial: the Royal Canadian Mint operates as an internationally accredited good-delivery refiner, Toronto concentrates mining finance and institutional investors who underwrite producers worldwide, Vancouver supports an active dealer and retail-investor community, and Canadian refiners and processors take foreign feedstock as a matter of course.",
      "That fluency comes with formal expectations. Canada's anti-money-laundering regime supervised by FINTRAC has been extended towards precious-metals dealers, so Canadian compliance files now ask for beneficial ownership, source of funds and counterparty screening evidence that a UK or Gulf buyer might treat as optional. Institutional buyers want to know who the exporter of record is on the Kenyan side and who the importer of record is on theirs, whether the seller is an agent and who mandated it, and how the stated assay uncertainty will be reconciled when the refinery reports its own determination. Practically, Canadian dore trade is settled on the receiving refinery's numbers with a tolerance band, in USD or CAD through correspondent banking, and a first consignment is normally sized to that same industrial convention rather than to a dealer's minimum."
    ],
    logisticsNote:
      "Canadian-bound consignments move from JKIA Nairobi with licensed valuables carriers to Toronto Pearson, Vancouver or Montreal-Trudeau, then by bonded transport to a refiner's intake, a dealer vault or a storage facility the buyer nominates. Entry is filed by the importer's Canadian broker with the Canada Border Services Agency, and tariff treatment, valuation, any reporting duty on the transaction and the receiving refiner's own intake criteria are matters for the importing party to confirm with CBSA, the broker and where relevant FINTRAC. Canadian buyers ask for the full export file and expect it to be internally consistent: Certificate of Origin, the Kenyan export authorisation naming the exporter of record, the accredited assay report with sampling details, commercial invoice and packing list reconciling bar by bar, the airway bill with consignee identified and the insurance certificate. Refinery compliance teams typically want those documents before freight is booked, not on arrival.",
    settlementNote:
      "The customary Canadian structure with an unfamiliar East African counterparty borrows from domestic dore practice: the seller's assay is a starting figure, the receiving refinery's assay is the settlement figure. Typical sequence is independent determination before loading with sealed samples retained, delivery to the refiner or an approved vault, intake assay and weight verification, and payment released against those documents with fine-gold content adjusted inside an agreed tolerance - by wire in USD or CAD, through escrow, or on documents-against-payment terms. As agent, Mayfox can arrange each of those structures, coordinate the laboratory appointments and supply the compliance file; we do not own refineries and cannot dictate a refiner's terms, and nothing here is a guarantee. Both sides are best protected by a first consignment small enough that a re-assay disagreement is a pricing conversation rather than a dispute.",
    dueDiligence: [
      "Who is the exporter of record in Kenya for this consignment, and how do we verify the authorisation?",
      "Do you hold a current mandate from the cooperatives that supplied this metal?",
      "Which laboratory issued the pre-shipment assay, and does it state uncertainty and method?",
      "Will settlement follow our refinery's intake assay, and within what written tolerance?",
      "Can you provide beneficial-ownership and screening records that fit a FINTRAC-oriented file?",
    ],
    relatedLinks: [
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Industries we serve", path: "/industries" },
      { label: "Request a quote", path: "/request-quote" },
    ],
  },
  {
    slug: "australia",
    country: "Australia",
    eyebrow: "Gold Dore Supply for Australia",
    heroTitle: "African Dore Gold Supply for Australian Refineries & Investors",
    heroSubtitle: "Verified African gold dore for Australian refineries, bullion dealers, institutional investors and SMSF trustees. Full documentation, independent assay and insured delivery to Perth, Sydney and Melbourne.",
    pageTitle: "Gold Dore Australia — African Gold Export Agent | Mayfox",
    description: "Gold export agent for Australia. Buy verified African gold dore bars and nuggets for Australian refineries, bullion dealers, institutional investors and SMSF buyers. Full assay and insured delivery to Perth, Sydney and Melbourne.",
    keywords: "gold dore Australia, gold export agent Australia, wholesale gold Australia, gold import Australia, African gold Australia, gold from Kenya to Australia, gold refinery Australia, Perth Mint, gold Australia, Sydney gold, Melbourne gold, SMSF gold",
    ogTitle: "Gold Dore Export Agent Australia — African Gold | Mayfox",
    ogDescription: "Verified African gold for Australian refineries and investors. Full documentation, independent assay and insured delivery to Perth, Sydney and Melbourne.",
    introParagraphs: [
      "Australia is one of the world's most important gold markets, home to the Perth Mint — a globally recognised refinery and gold producer — as well as a robust network of bullion dealers, institutional investors, SMSF trustees and private wealth holders. Australian buyers demand LBMA-grade quality, transparent pricing and reliable logistics from established counterparties.",
      "Mayfox provides the Australian market with refined 999.9 bars through our partner refineries, gold dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African supply chain. Each consignment is independently assayed, fully documented and competitively priced against the LBMA USD fix, with AUD equivalents provided on request.",
      "Gold shipments to Australia travel via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Perth, Sydney or Melbourne international airports. Transit time is 5–8 business days, including Australian Border Force clearance. Delivery is made to refinery intake, dealer vaults or designated secure storage. Settlement via SWIFT in USD or AUD.",
      "For Australian refineries, bullion dealers, institutional investors and SMSF trustees seeking physical African gold, Mayfox provides a verified supply chain with complete documentation, transparent pricing and insured delivery to all major Australian cities."
    ],
    stats: [
      { value: "99.99%", label: "Max Purity" },
      { value: "Perth", label: "Primary Port" },
      { value: "5-8 Days", label: "Transit Time" },
      { value: "AUSTRAC", label: "Compliant" },
    ],
    shippingSection: {
      title: "Shipping Gold from Kenya to Australia",
      paragraphs: [
        "Australia-bound gold departs JKIA Nairobi via Brinks or Malca-Amit secure air freight to Perth, Sydney (Kingsford Smith) or Melbourne (Tullamarine) international airports. Transit time is 5–8 business days including Australian Border Force clearance. Delivery is made to refinery intake, dealer vaults, SMSF-approved storage or any designated secure facility.",
        "Documentation includes Certificate of Origin, independent SGS/KEBS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk cargo insurance. Mayfox coordinates with Australian customs brokers for compliant ABF entry.",
        "All consignments are insured vault-to-vault with full tracking and proactive customs coordination throughout transit."
      ]
    },
    complianceSection: {
      title: "Australian Import Compliance & AUSTRAC Standards",
      paragraphs: [
        "Gold imports into Australia are regulated by the Australian Border Force. Australian bullion dealers are regulated under AUSTRAC and the AML/CTF Act. Mayfox provides documentation meeting Australian import and compliance requirements: Certificate of Origin, independent assay, export permit and full chain-of-custody.",
        "KYC and AML protocols meet AUSTRAC-equivalent standards. All transactions include beneficial ownership disclosure, source-of-funds verification and sanctions screening against Australian (DFAT), UN, OFAC and EU consolidated lists. Australian buyers receive a complete compliance pack.",
        "We can coordinate with Australian customs brokers, compliance officers and receiving vaults to ensure all documentation meets ABF and AUSTRAC requirements before the consignment departs Nairobi."
      ]
    },
    whyMayfox: [
      "African dore gold for Australian refineries including Perth Mint intake",
      "AUSTRAC-compatible KYC/AML documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or AUD",
      "Delivery to Perth, Sydney, Melbourne and across Australia",
      "Experienced with Australian institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Australian refineries import gold dore from Kenya?", a: "Yes. Mayfox provides gold dore at 85–95% purity to Australian refineries with independent SGS assay, Certificate of Origin, full export documentation and AUSTRAC-compatible compliance records. Delivery to Perth, Sydney or Melbourne." },
      { q: "How long does delivery to Australia take?", a: "5–8 business days via Brinks or Malca-Amit from JKIA Nairobi to Perth, Sydney or Melbourne international airports, including Australian Border Force clearance. Vault-to-vault delivery." },
      { q: "What is the minimum order for Australian buyers?", a: "Standard minimum: 1 kg refined gold, 500 g dore or nuggets. Wholesale dore consignments for refinery processing benefit from volume pricing at 10 kg+. Contact the trade desk." },
      { q: "Can Australian SMSF trustees buy gold from Mayfox?", a: "Yes. Mayfox provides refined 999.9 bars through our partner refineries suitable for SMSF physical gold allocation, with full documentation meeting ATO and AUSTRAC requirements for SMSF compliance." },
      { q: "How do Australian buyers pay?", a: "SWIFT bank transfer in USD or AUD to our Kenyan or Dubai accounts. Escrow and letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Is Mayfox compliant with Australian AML regulations?", a: "Yes. Our KYC and AML protocols meet AUSTRAC-equivalent standards with full beneficial ownership disclosure, source-of-funds verification and DFAT sanctions screening." },
      { q: "Do we need an import permit or approval to bring gold into Australia?", a: "Australia controls the arrival of gold in bar and dore form through import-permission and border-clearance procedures administered by the relevant Australian authority, and whether a permission is required depends on the metal's form, origin and the importer's circumstances. Confirm the position with the Australian Border Force, the department that issues import permissions and your own customs broker before we book freight. Mayfox as export agent provides the Kenyan export authorisation, Certificate of Origin, accredited assay and chain-of-custody records that the Australian entry is supported with." },
      { q: "Will Mayfox supply metal that fits an SMSF holding?", a: "Superannuation, tax and storage conditions that a self-managed super fund must satisfy turn on the fund's own deed, the trustee's obligations and current Australian Taxation Office guidance, so those should be confirmed with the fund's adviser rather than taken from this page. What Mayfox can do as agent is supply documented product - dore and nuggets directly, and refined investment-grade bars through partner refineries - with the assay and custody records an adviser or auditor will want to see, delivered into storage the trustee controls." },
    ],
    buyerClimate: [
      "Australia is both a major gold producer and a mature retail and institutional market, and that double identity sets the tone. Domestic mines and processors move dore to refiners routinely, so Australian buyers are comfortable with unrefined feedstock, stated assay uncertainty and pricing settled against a receiving refiner's determination; the Perth Mint operates as an internationally recognised good-delivery refiner and mint, dealer networks in Sydney and Melbourne serve one of the world's most active private investor bases, and institutional demand arrives through superannuation-linked vehicles where the metal must satisfy the rules of the fund structure rather than simply the taste of the buyer.",
      "The proof expectations follow from that regulated, producer-literate environment. Dealers and refiners are reporting entities under Australia's anti-money-laundering regime supervised by AUSTRAC, so buyers ask for beneficial-ownership detail, source-of-funds explanation and screening evidence as standard; SMSF-driven demand makes custody and insurance records decisive, because a trustee must be able to show where the metal is held and on what terms; and because Australian investors quote metal in ounces against the international benchmark in Australian dollars, they scrutinise the fineness figure that converts into their local price. A first-time East African counterparty is expected to accept an independent intake assay and to be paid after it."
    ],
    logisticsNote:
      "Australia-bound consignments depart JKIA Nairobi with licensed valuables carriers for Perth, Sydney or Melbourne airports, with bonded handover to a refiner's intake, a dealer vault or storage arrangements a fund trustee controls. Arrival is cleared by the importer's Australian broker under Australian Border Force procedures, and whether an import permission or other approval applies to the specific form of gold is a question for the Australian authority and the buyer's broker to answer before freight is booked, together with customs valuation and any goods and services tax consequences of the product form. Australian buyers expect the complete Kenyan file and check it methodically: Certificate of Origin, export authorisation identifying the exporter of record, accredited assay report with sampling method, commercial invoice and packing list that reconcile bar by bar to that assay, airway bill naming the consignee, and the insurance certificate - plus, for fund-related purchases, custody documentation identifying the storage provider and the terms of holding.",
    settlementNote:
      "Australian custom with an unfamiliar East African counterparty mirrors how the country already trades dore at home: the seller's certificate starts the conversation and an independent determination ends it. In practice that means assay before loading at a laboratory both sides accept with sealed samples retained, delivery into the refiner's or the buyer's vault, verification by an assayer the buyer appoints at intake, and release of funds against those documents within a tolerance band recorded in the contract - by wire in USD or AUD, through escrow, or on documents-against-payment terms via our Nairobi desk. As agent, Mayfox can arrange those steps and supply the audit trail a trustee's or dealer's compliance file requires; we do not own a refinery, cannot bind a receiving refiner's terms, and none of this is a guarantee. Sizing the first consignment so a re-assay disagreement is survivable remains the standard advice on both sides.",
    dueDiligence: [
      "Are you the owner of this metal or its export agent, and who mandated you?",
      "Is the pre-shipment laboratory accredited, and will settlement follow our refiner's assay?",
      "Can you provide records that support our AUSTRAC-oriented customer due diligence?",
      "Who holds and insures the metal between arrival and our vault or refinery?",
      "If the purchase is for a fund structure, will your documents evidence custody to our auditor?",
    ],
    relatedLinks: [
      { label: "Global delivery and secure freight", path: "/global-delivery" },
      { label: "Export documentation pack", path: "/export-documentation" },
      { label: "Compliance and due diligence", path: "/compliance" },
      { label: "Dore vs refined gold", path: "/dore-vs-refined-gold" },
      { label: "Kenya gold export licence explained", path: "/kenya-gold-export-license" },
      { label: "Buying gold safely", path: "/buy-gold-safely" },
      { label: "Industries we serve", path: "/industries" },
    ],
  },
];

export function faqJsonLd(faqs: MarketFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
