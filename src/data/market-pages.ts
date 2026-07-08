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
}

export const marketPages: MarketData[] = [
  {
    slug: "usa",
    country: "United States",
    eyebrow: "Gold Supplier for the United States",
    heroTitle: "Buy Gold Bullion from Kenya for US Investors & Institutions",
    heroSubtitle: "Wholesale gold supplier for American refineries, bullion dealers, investment funds and institutional buyers seeking verified African gold with full LBMA documentation and insured transatlantic delivery.",
    pageTitle: "US Gold Bullion Supplier — Buy Gold Bars from Kenya | Mayfox",
    description: "Wholesale gold supplier for the United States. Buy verified gold bullion, dore bars and investment-grade bars from Kenya's leading exporter. LBMA documentation, insured delivery to US refineries and institutions.",
    keywords: "buy gold bullion, wholesale gold supplier, buy gold bars online, gold bullion supplier USA, gold investment bullion, LBMA gold supplier USA, wholesale precious metals, institutional gold supplier, gold import USA, African gold supplier USA, gold exporter USA, gold from Kenya to USA, bullion for American buyers",
    ogTitle: "Gold Bullion Supplier USA — Buy African Gold Wholesale | Mayfox",
    ogDescription: "Wholesale African gold bullion for US institutions. Verified 999.9 bars with full LBMA documentation and insured delivery to American refineries and dealers.",
    introParagraphs: [
      "The United States is the world's largest institutional gold market, home to LBMA Good Delivery refineries, COMEX-approved vaults, bullion banks and a vast network of coin dealers, wealth managers and ETF custodians. American buyers demand verifiable chain-of-custody, independent assay certification and strict regulatory compliance — standards that Mayfox meets on every consignment.",
      "Mayfox supplies the US market with investment-grade 999.9 gold bullion bars, dore bars (85–95%), gold nuggets and refined 995 bars sourced from Kenya, Tanzania, Uganda and DRC Congo. Every shipment is documented with Certificate of Origin, independent SGS assay, Kenyan export licence and customs clearance paperwork required for US import under CBP and FinCEN regulations.",
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
      { q: "What is the minimum order for US buyers?", a: "The minimum order for US institutional buyers is 1 kg for refined 999.9 bullion bars and 500 g for dore bars or nuggets. Larger wholesale consignments of 10 kg+ benefit from volume pricing. Contact the Mayfox trade desk for a tailored quote." },
      { q: "How is gold shipped from Kenya to the USA?", a: "Via Brinks, Malca-Amit or Loomis secure air freight from JKIA Nairobi to JFK (New York), Miami, Los Angeles or Houston. Vault-to-vault transfer with all-risk marine cargo insurance. Typical transit time: 3–5 business days from cleared funds." },
      { q: "Do you supply COMEX-good-delivery bars?", a: "Mayfox supplies investment-grade 999.9 (24 karat) bars that meet the fineness requirements for LBMA Good Delivery refiners. We can deliver directly to COMEX-approved refiners and depositories in the US for further processing if needed." },
      { q: "What purity gold do you supply to the US market?", a: "Investment-grade 99.99% (999.9) bullion bars, refined 99.5% (995) bars, dore bars at 85–95% purity and gold nuggets at 85–92% purity. Every consignment includes an independent SGS or KEBS assay certificate." },
      { q: "How do US buyers pay for gold from Kenya?", a: "US buyers can pay via SWIFT bank wire transfer in USD to our Kenyan or Dubai (DMCC) accounts. We also support escrow settlement and standby letters of credit for larger institutional orders. Contact the trade desk for payment terms." },
      { q: "Is Mayfox compliant with US sanctions and AML regulations?", a: "Yes. Mayfox screens every transaction against OFAC, UN, EU and UK sanctions lists. We conduct full KYC and source-of-funds verification on all buyers. Our compliance programme meets the standards expected by US institutional buyers and their compliance departments." },
    ]
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    eyebrow: "Gold Bullion Supply for the United Kingdom",
    heroTitle: "Gold Bullion Supply for UK Dealers, Refineries & Investors",
    heroSubtitle: "LBMA-grade African gold bullion for UK-based refiners, bullion dealers, jewellery manufacturers and institutional investors — full documentation, assay certification and insured delivery to London, Birmingham and Hatton Garden.",
    pageTitle: "Gold Bullion UK — Gold Suppliers UK | Mayfox Gold Kenya",
    description: "Leading gold supplier for the UK market. Buy verified African gold bullion, dore bars and investment-grade bars from Kenya. LBMA documentation, insured delivery to London refineries, dealers and institutional buyers.",
    keywords: "gold bullion UK, gold suppliers UK, wholesale gold UK, buy gold bars London, precious metals supplier UK, gold bullion dealer UK, LBMA gold UK, African gold UK, gold import UK, gold from Kenya to UK, institutional gold UK, gold refinery supply UK",
    ogTitle: "Gold Bullion Supplier UK — African Gold for London Refineries | Mayfox",
    ogDescription: "Verified African gold bullion for UK refineries and bullion dealers. LBMA documentation, independent assay and insured delivery to London, Birmingham and Hatton Garden.",
    introParagraphs: [
      "The United Kingdom, anchored by the London Bullion Market, is the world's most important gold trading centre. The LBMA sets the global standard for gold bar quality and responsible sourcing, and London is home to the Bank of England's gold vaults, major bullion banks, refiners, ETF custodians and a centuries-old jewellery quarter in Hatton Garden. UK buyers expect world-class documentation, independent assay certification and demonstrable responsible sourcing — standards Mayfox was built to meet.",
      "Mayfox supplies the UK market with investment-grade 999.9 gold bars, refined 995 bars, gold dore and nuggets sourced from Kenya, Tanzania, Uganda and DRC Congo. Every consignment is assayed by SGS or KEBS, documented with Certificate of Origin, export licence, commercial invoice and full chain-of-custody records. Our documentation suite is designed to satisfy LBMA Responsible Gold Guidance requirements and UK HMRC import procedures.",
      "The Nairobi–London trade corridor operates via secure air freight (Brinks, Malca-Amit) into Heathrow, with onward vault transfer to LBMA Good Delivery refiners, the Bank of England, bullion banks and secure storage facilities throughout the UK. Transit time is typically 3–5 business days from cleared funds. Settlement is via SWIFT in GBP or USD through our Kenyan and Dubai trade desks.",
      "Whether you are a Hatton Garden dealer, a UK bullion refinery, an investment platform or a wealth manager adding physical gold to portfolios, Mayfox provides the verified African supply chain with transparent LBMA-based pricing and full regulatory compliance."
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
        "Documentation includes Certificate of Origin (Kenya), independent assay report (SGS/KEBS), Kenyan Ministry of Mining export permit, commercial invoice, packing list, airway bill and all-risk marine cargo insurance certificate. UK import is straightforward for refined gold bullion — Mayfox coordinates with UK-based customs agents to ensure HMRC-compliant entry.",
        "All shipments are insured door-to-door from our Nairobi vault to your designated UK receiving vault. We provide real-time shipment tracking and proactive customs clearance coordination."
      ]
    },
    complianceSection: {
      title: "UK Regulatory Compliance & LBMA Standards",
      paragraphs: [
        "As a supplier to the UK market, Mayfox operates under OECD Due Diligence Guidance for Responsible Supply Chains of Minerals and the LBMA Responsible Gold Guidance — the two standards most important to UK institutional gold buyers. Our sourcing is conflict-free, traceable to licensed cooperatives and fully documented.",
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
      { q: "Can UK refineries source dore bars from Mayfox?", a: "Yes. Mayfox supplies gold dore bars at 85–95% purity to UK LBMA Good Delivery refineries for further processing. Every dore consignment includes an independent assay, Certificate of Origin and full export documentation. We can deliver directly to UK refinery intake." },
      { q: "What documentation does Mayfox provide for UK gold imports?", a: "Full documentation package: Certificate of Origin (Kenya), independent SGS/KEBS assay report, Kenyan Ministry of Mining export permit, commercial invoice, packing list, airway bill and all-risk insurance certificate. All documents are suitable for HMRC import clearance and LBMA compliance audits." },
      { q: "How is gold priced for UK buyers?", a: "Against the LBMA AM/PM USD fix, which is the global benchmark and the standard UK buyers expect. Discounts apply to dore bars based on purity as assayed. Prices are quoted in USD per troy ounce with GBP equivalents available on request." },
      { q: "Can I visit Mayfox's office before placing an order?", a: "Yes. UK buyers are welcome to visit our trade desk on Rhapta Road, Westlands, Nairobi, by appointment. We encourage due diligence visits and can arrange assay laboratory tours, vault inspection and introductions to our logistics partners." },
      { q: "Do you supply Hatton Garden jewellery manufacturers?", a: "Yes. Mayfox supplies refined 999.9 gold bars and grain gold suitable for jewellery manufacturing to Hatton Garden and Birmingham Jewellery Quarter buyers. Minimum order quantities apply. Contact the trade desk for a tailored supply agreement." },
      { q: "How do UK buyers pay for gold from Kenya?", a: "Payment via SWIFT bank transfer in GBP or USD to our Kenyan or Dubai (DMCC) accounts. Escrow settlement and standby letters of credit are available for larger institutional orders. Standard payment terms: funds cleared before shipment." },
      { q: "Is Mayfox gold compliant with UK sanctions regulations?", a: "Yes. We screen every transaction against the UK HMT sanctions list, OFAC, UN and EU consolidated lists. Our KYC programme meets the standards expected by FCA-regulated UK institutions. Full compliance documentation is provided to every buyer." },
    ]
  },
  {
    slug: "uae",
    country: "United Arab Emirates",
    eyebrow: "Gold Supplier for the UAE",
    heroTitle: "Buy Gold Dubai — Wholesale Gold Supplier UAE",
    heroSubtitle: "Verified African gold bullion for Dubai DMCC refineries, bullion traders, jewellery manufacturers and gold souk dealers. Same-week delivery from Nairobi to Dubai with full documentation and DMCC-compliant paperwork.",
    pageTitle: "Buy Gold Dubai — Gold Supplier UAE & Bullion Exporter | Mayfox",
    description: "Wholesale gold supplier in Dubai and UAE. Buy verified African gold bullion, dore bars, nuggets from Kenya for DMCC refineries, gold traders, jewellery manufacturers. Full assay, insured delivery to Dubai.",
    keywords: "buy gold Dubai, gold supplier Dubai, wholesale gold Dubai, gold refinery Dubai, bullion supplier UAE, gold exporter UAE, gold import UAE, DMCC gold, African gold Dubai, gold from Kenya to UAE, gold bullion Dubai, gold dore Dubai, gold trading Dubai",
    ogTitle: "Buy Gold Dubai — African Bullion & Dore Supplier UAE | Mayfox",
    ogDescription: "Wholesale African gold for Dubai's DMCC refineries and gold traders. Verified bullion with full assay and same-week delivery from Nairobi.",
    introParagraphs: [
      "Dubai is the world's most dynamic physical gold hub. The Dubai Multi Commodities Centre (DMCC) hosts over 4,000 precious metals companies, and Dubai's gold souks, refineries, vaults and re-export trade corridors move hundreds of tonnes of bullion annually into India, Turkey, Saudi Arabia and East Asia. Dubai buyers demand verified quality, competitive pricing and rapid logistics — exactly what Mayfox's Nairobi–Dubai corridor delivers.",
      "Mayfox supplies the UAE market with investment-grade 999.9 gold bullion bars, dore bars at 85–95% purity, gold nuggets and refined 995 bars sourced from Kenya, Tanzania, Uganda and DRC Congo. Each consignment is independently assayed by SGS or KEBS and documented with Certificate of Origin, Kenyan export permit, commercial invoice and full chain-of-custody records ready for DMCC audit.",
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
        "Documentation for UAE import includes Certificate of Origin, Kenyan Ministry of Mining export permit, independent assay, commercial invoice, packing list, airway bill and all-risk insurance. UAE Customs clearance is straightforward for gold bullion — Mayfox coordinates with Dubai-based customs agents to ensure smooth entry.",
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
      { q: "Do you supply DMCC refineries?", a: "Yes. Mayfox supplies dore bars at 85–95% purity to DMCC-registered refineries in Al Quoz and JLT. Every dore consignment includes an independent assay and full export documentation suitable for DMCC refinery intake and audit." },
      { q: "What is the minimum order for UAE buyers?", a: "Our standard minimum is 1 kg for refined bullion and 500 g for dore bars or nuggets. Larger wholesale consignments of 10 kg+ benefit from volume pricing. Contact the Dubai trade desk for a specific quote." },
      { q: "Can Mayfox arrange re-export from Dubai?", a: "Yes. We can coordinate with DMCC-registered vaults and logistics partners in Dubai to arrange onward re-export to India, Turkey, Saudi Arabia or other destinations under DMCC documentation. Contact the trade desk to discuss re-export requirements." },
      { q: "How do UAE buyers pay?", a: "Payment via SWIFT bank transfer in USD to our Dubai (DMCC) or Nairobi accounts. Escrow settlement is available for larger orders. Funds must be cleared before shipment. We can also accept payment through DMCC-registered banking partners." },
      { q: "Is Mayfox DMCC compliant?", a: "Yes. Our sourcing and documentation meet DMCC Responsible Sourcing standards. We provide full chain-of-custody, independent assay and KYC/AML compliance packs suitable for DMCC audit. We work with DMCC-registered counterparties regularly." },
      { q: "Do you supply gold to the Dubai Gold Souk?", a: "Mayfox supplies wholesale gold bullion and dore to established Dubai gold traders and jewellery manufacturers, many of whom serve the Gold Souk retail market. Minimum wholesale quantities apply. Contact the trade desk for qualifying criteria." },
    ]
  },
  {
    slug: "dubai",
    country: "Dubai",
    eyebrow: "Gold Supplier for Dubai",
    heroTitle: "Dubai Gold Supply — Wholesale Bullion & Dore from Africa",
    heroSubtitle: "Direct African gold for Dubai's DMCC ecosystem. Investment-grade bullion, dore bars and nuggets with verified assay, same-week delivery and DMCC-compliant documentation for refiners, traders and jewellery manufacturers.",
    pageTitle: "Dubai Gold Supplier — African Bullion & Dore Wholesale | Mayfox",
    description: "Direct gold supplier for Dubai. Buy verified African gold bullion, dore bars and nuggets. Same-week delivery to DMCC vaults and refineries. Full assay, export docs, DMCC-compliant documentation.",
    keywords: "Dubai gold supplier, gold supplier Dubai, African gold Dubai, gold bullion Dubai, gold dore Dubai, DMCC gold supplier, gold import Dubai, gold from Kenya to Dubai, wholesale gold Dubai, gold refinery Dubai supply, bullion Dubai",
    ogTitle: "Dubai Gold Supplier — African Bullion Direct | Mayfox",
    ogDescription: "Direct African gold supply for Dubai's DMCC refineries and traders. Verified bullion, same-week delivery, full assay and DMCC-compliant documentation.",
    introParagraphs: [
      "Dubai has transformed itself into the world's busiest physical gold trading hub. The DMCC free zone, the Gold Souk in Deira, the Al Quoz refinery district and the JLT gold cluster form an integrated ecosystem that refines, trades and re-exports gold to India, the Gulf, Turkey and beyond. Dubai buyers expect speed, verified quality and competitive pricing — the three pillars of Mayfox's Nairobi–Dubai corridor.",
      "Mayfox supplies Dubai with 999.9 investment-grade bullion bars, dore bars at 85–95%, gold nuggets and refined 995 bars sourced from our licensed East African supply chain. Every consignment is independently assayed by SGS or KEBS and documented for DMCC compliance, with Certificate of Origin, Kenyan export permit and full chain-of-custody records.",
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
        "Documentation includes Certificate of Origin, Kenyan Ministry of Mining export permit, independent SGS/KEBS assay, commercial invoice, packing list, airway bill and all-risk cargo insurance. UAE Customs clearance is efficient for gold bullion — Mayfox coordinates with Dubai-based customs agents.",
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
      { q: "What is the minimum order for Dubai buyers?", a: "Minimum 1 kg for refined bullion bars, 500 g for dore or nuggets. Wholesale orders of 10 kg+ benefit from tiered volume pricing. Contact the Dubai trade desk for a specific quote." },
      { q: "Do you handle re-export from Dubai to other markets?", a: "Yes. We can coordinate with DMCC-registered logistics partners to arrange re-export from Dubai to India, Saudi Arabia, Turkey and other Gulf and Asian destinations under DMCC documentation." },
      { q: "How do I pay for gold as a Dubai buyer?", a: "SWIFT USD transfer to our Dubai or Nairobi accounts. Escrow settlement available for institutional orders. Payment must be cleared before shipment. We work with DMCC-registered banking partners." },
      { q: "Is your gold suitable for the Dubai Gold Souk?", a: "Mayfox supplies wholesale gold to established Dubai traders and manufacturers, many of whom serve the Gold Souk market. We supply bullion, dore and grain gold in wholesale quantities with full documentation." },
    ]
  },
  {
    slug: "switzerland",
    country: "Switzerland",
    eyebrow: "Swiss Gold Import Guide",
    heroTitle: "Swiss Gold Import Guide — African Bullion for Swiss Refineries",
    heroSubtitle: "Supply African gold dore, bullion and nuggets to Switzerland's world-leading LBMA refineries. Full OECD due diligence documentation, independent assay and insured delivery to Ticino and Neuchâtel.",
    pageTitle: "Swiss Gold Supplier — African Bullion for Swiss Refineries | Mayfox",
    description: "Swiss gold supplier. Buy African gold dore and bullion for Switzerland's LBMA refineries. Verified 999.9 bars with OECD due diligence, independent assay and insured delivery to Ticino and Neuchâtel refineries.",
    keywords: "Swiss gold supplier, investment bullion Switzerland, wholesale gold Switzerland, gold import Switzerland, Swiss gold refinery supply, gold dore Switzerland, LBMA gold Switzerland, African gold Switzerland, gold from Kenya to Switzerland, Swiss bullion supplier",
    ogTitle: "Swiss Gold Supplier — African Dore & Bullion for Refineries | Mayfox",
    ogDescription: "African gold dore and bullion for Switzerland's LBMA refineries. Full OECD documentation, independent assay and insured delivery to Ticino and Neuchâtel.",
    introParagraphs: [
      "Switzerland is the world's gold refining capital. Four of the world's largest LBMA Good Delivery refiners operate in Ticino and Neuchâtel, processing over 60% of global gold output annually. Swiss refiners demand high-purity dore, impeccable chain-of-custody documentation and rigorous OECD-compliant responsible sourcing — standards that define Mayfox's entire export operation.",
      "Mayfox supplies Swiss LBMA refiners with gold dore bars at 85–95% purity, refined 995 bars and investment-grade 999.9 bullion sourced exclusively from licensed East African cooperatives in Kenya, Tanzania, Uganda and DRC Congo. Every consignment is accompanied by an independent SGS assay, Certificate of Origin, Kenyan export licence and a complete OECD Due Diligence documentation pack suitable for Swiss refinery intake audits.",
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
      "Independent SGS assay on every dore and bullion consignment",
      "Direct delivery to Ticino and Neuchâtel refineries via Zurich",
      "SWIFT settlement in CHF, USD or EUR",
      "Full mine-to-refinery traceability records",
      "Experienced with Swiss refinery compliance requirements",
    ],
    faqs: [
      { q: "Do you supply Swiss LBMA Good Delivery refiners?", a: "Yes. Mayfox supplies gold dore bars at 85–95% purity to Swiss LBMA refiners with complete OECD due diligence documentation, independent SGS assay and full chain-of-custody records. We can deliver directly to refinery intake in Ticino or Neuchâtel." },
      { q: "What OECD documentation do you provide?", a: "A complete OECD Step 1–5 due diligence pack: supply chain mapping from mine to export, risk assessment, mitigation strategy, independent third-party audit trail and annual reporting data. This meets Swiss refinery compliance requirements." },
      { q: "What purity dore do you supply to Swiss refineries?", a: "Dore bars at 85–95% gold content, assayed independently by SGS or KEBS before shipment. We can also supply refined 995 and 999.9 bars if required. Every consignment includes an assay certificate." },
      { q: "How long does delivery to Switzerland take?", a: "Typically 3–5 business days from cleared funds. Brinks or Malca-Amit secure air freight from JKIA Nairobi to Zurich, then armoured road transfer to your refinery in Ticino or Neuchâtel." },
      { q: "Can Swiss buyers visit your operations in Kenya?", a: "Yes. We welcome due diligence visits from Swiss refinery compliance teams. Visits can include our Nairobi trade desk, assay laboratory, partner vaults and licensed cooperative sourcing sites, with advance notice." },
      { q: "How do Swiss buyers pay?", a: "SWIFT bank transfer in CHF, USD or EUR to our Kenyan or Dubai accounts. Escrow and confirmed letters of credit are available for larger institutional orders. Funds cleared before shipment." },
    ]
  },
  {
    slug: "singapore",
    country: "Singapore",
    eyebrow: "Gold Bullion Supply for Singapore",
    heroTitle: "Gold Bullion Supply for Singapore Refineries & Investors",
    heroSubtitle: "LBMA-grade African gold bullion for Singapore's bullion banks, refineries, wealth managers and institutional investors. Full documentation, assay certification and insured delivery to Changi and Shenton Way vaults.",
    pageTitle: "Gold Bullion Singapore — African Gold Supplier | Mayfox",
    description: "Gold supplier for Singapore. Buy verified African gold bullion, dore bars and investment-grade bars for Singapore refineries, bullion banks and wealth managers. Full assay and insured delivery to Singapore.",
    keywords: "gold bullion Singapore, gold supplier Singapore, wholesale gold Singapore, buy gold bars Singapore, precious metals Singapore, gold import Singapore, African gold Singapore, gold from Kenya to Singapore, institutional gold Singapore, bullion dealer Singapore, gold refinery Singapore",
    ogTitle: "Gold Bullion Supplier Singapore — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion for Singapore's financial hub. LBMA documentation, independent assay and insured delivery to Changi and Shenton Way vaults.",
    introParagraphs: [
      "Singapore has rapidly established itself as Asia's premier gold hub. With the Singapore Bullion Market Association (SBMA), the new LBMA-accredited refinery, Singapore Freeport (Le Freeport) vaults, Changi Airport's secure cargo infrastructure and a growing community of bullion banks and wealth managers, Singapore offers a sophisticated ecosystem for gold import, storage and trading. Singapore buyers demand quality, transparency and reliability — Mayfox delivers all three.",
      "Mayfox supplies the Singapore market with investment-grade 999.9 bullion bars, dore bars at 85–95% purity, refined 995 bars and gold nuggets sourced from our licensed East African supply chain. Each consignment is independently assayed by SGS or KEBS, documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records suitable for SBMA and LBMA requirements.",
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
      { q: "Can Singapore refineries source gold dore from Mayfox?", a: "Yes. Mayfox supplies gold dore bars at 85–95% purity to Singapore refineries with independent SGS assay, Certificate of Origin, OECD due diligence documentation and full export paperwork. We deliver directly to refinery intake." },
      { q: "How is gold shipped to Singapore?", a: "Via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Singapore Changi Airport, then armoured transport to Le Freeport, Shenton Way vaults or your designated receiving facility. Transit time: 4–7 business days." },
      { q: "What is the minimum order for Singapore buyers?", a: "Standard minimum is 1 kg for refined bullion and 500 g for dore or nuggets. Larger wholesale orders of 10 kg+ benefit from volume pricing. Contact the trade desk for a tailored quote." },
      { q: "Do you supply gold to Singapore wealth managers?", a: "Yes. Mayfox supplies investment-grade 999.9 bullion bars to Singapore-based wealth managers, family offices and private banks seeking physical African gold allocation for client portfolios." },
      { q: "Is Mayfox compliant with Singapore regulations?", a: "Yes. Our sourcing and documentation meet OECD Due Diligence standards recognised in Singapore. We screen against UN, OFAC, EU and MAS sanctions lists and provide full KYC documentation." },
      { q: "How do Singapore buyers pay?", a: "SWIFT bank transfer in USD or SGD to our Kenyan or Dubai accounts. Escrow and letters of credit are available for larger institutional orders." },
    ]
  },
  {
    slug: "hong-kong",
    country: "Hong Kong",
    eyebrow: "Gold Bullion Supply for Hong Kong",
    heroTitle: "Gold Bullion Supply for Hong Kong Dealers & Investors",
    heroSubtitle: "Verified African gold for Hong Kong's bullion dealers, jewellery manufacturers, wealth managers and institutional buyers. Full documentation, independent assay and insured delivery to Hong Kong vaults.",
    pageTitle: "Gold Bullion Hong Kong — African Gold Supplier | Mayfox",
    description: "Gold supplier for Hong Kong. Buy verified African gold bullion, dore bars, investment-grade bars for Hong Kong dealers, jewellery manufacturers and institutional buyers. Full assay and insured delivery.",
    keywords: "gold bullion Hong Kong, gold supplier Hong Kong, wholesale gold Hong Kong, buy gold bars Hong Kong, precious metals Hong Kong, African gold Hong Kong, gold import Hong Kong, gold from Kenya to Hong Kong, bullion dealer Hong Kong, gold jewellery Hong Kong",
    ogTitle: "Gold Bullion Supplier Hong Kong — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion for Hong Kong's bullion market. LBMA documentation, independent assay and insured delivery to Hong Kong vaults.",
    introParagraphs: [
      "Hong Kong is one of Asia's most established gold trading centres, home to the Chinese Gold and Silver Exchange Society (CGSE), major bullion bank trading desks, international jewellery manufacturers and a sophisticated wealth management industry. Hong Kong's free port status, robust financial infrastructure and proximity to mainland China make it an ideal entry point for African gold into the Asian market.",
      "Mayfox supplies Hong Kong with investment-grade 999.9 gold bullion bars, dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African supply chain. Every consignment is independently assayed, fully documented and shipped via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Hong Kong International Airport.",
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
      { q: "What purity gold do you supply to Hong Kong?", a: "Investment-grade 999.9 bullion bars, refined 995 bars, dore bars at 85–95% and gold nuggets at 85–92%. Every consignment has an independent SGS or KEBS assay certificate." },
      { q: "Do you supply Hong Kong jewellery manufacturers?", a: "Yes. Mayfox supplies refined 999.9 gold bars and grain gold to Hong Kong jewellery manufacturers in Kowloon and the New Territories. Wholesale minimums apply." },
      { q: "How do Hong Kong buyers pay?", a: "SWIFT bank transfer in USD or HKD to our Kenyan or Dubai accounts. Escrow settlement is available for larger orders. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "india",
    country: "India",
    eyebrow: "Gold Bullion Supply for India",
    heroTitle: "Gold Bullion Supply for Indian Importers & Refineries",
    heroSubtitle: "Verified African gold bullion and dore for India's refineries, bullion dealers, jewellery manufacturers and institutional importers. Full documentation, independent assay and insured delivery to Mumbai, Delhi and Ahmedabad.",
    pageTitle: "Gold Bullion India — African Gold Supplier | Mayfox",
    description: "Gold supplier for India. Buy verified African gold bullion and dore bars for Indian refineries, bullion dealers and jewellery manufacturers. Full assay, export documentation and insured delivery to Mumbai, Delhi and Ahmedabad.",
    keywords: "gold bullion India, gold supplier India, wholesale gold India, buy gold bars India, gold import India, gold dore India, African gold India, gold from Kenya to India, gold refinery India, bullion dealer India, gold jewellery India, Mumbai gold import",
    ogTitle: "Gold Bullion Supplier India — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion and dore for India's refineries and dealers. Full documentation, independent assay and insured delivery to Mumbai, Delhi and Ahmedabad.",
    introParagraphs: [
      "India is the world's second-largest gold consumer, with annual imports exceeding 700 tonnes. From Mumbai's Zaveri Bazaar to Delhi's Chandni Chowk, Ahmedabad's jewellery manufacturing cluster to Coimbatore's refinery ecosystem, India's gold industry spans bullion banks, dore refiners, jewellery manufacturers and millions of retail investors. Indian importers need reliable supply, verified purity and competitive pricing — Mayfox delivers on all three.",
      "Mayfox supplies the Indian market with gold dore bars at 85–95% purity (ideal for Indian refinery processing), refined 995 bars, investment-grade 999.9 bullion and gold nuggets. Our East African gold is priced against the LBMA USD fix, with purity discounts applied to dore based on independent SGS or KEBS assay. Every consignment includes full documentation ready for Indian Customs and DGFT requirements.",
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
      "Independent SGS/KEBS assay on every dore and bullion consignment",
      "SWIFT settlement in USD via established banking channels",
      "Delivery to Mumbai, Delhi and Ahmedabad",
      "Dubai DMCC alternative for Indian importers preferring GCC corridor",
    ],
    faqs: [
      { q: "Can Indian refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore bars at 85–95% purity to Indian refineries registered under DGFT. Each dore consignment includes independent SGS assay, Certificate of Origin and full documentation for DGFT and Indian Customs clearance." },
      { q: "How is gold shipped to India?", a: "Via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Mumbai International Airport, with onward delivery to Delhi, Ahmedabad or your designated facility. Transit time: 4–7 business days. The Dubai DMCC corridor is also available." },
      { q: "What documentation does Mayfox provide for Indian import?", a: "Full package: Certificate of Origin, independent SGS/KEBS assay, Kenyan export permit, commercial invoice, packing list, airway bill and all-risk insurance. Documentation is compatible with DGFT and Indian Customs requirements." },
      { q: "What is the minimum order for Indian buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Wholesale dore consignments of 10 kg+ for refinery processing benefit from volume pricing. Contact the trade desk for a quote." },
      { q: "Can I take delivery in Dubai and import to India myself?", a: "Yes. Mayfox can deliver to your DMCC vault in Dubai, and you arrange your own re-export to India under your DGFT authorisation. This is a common arrangement for Indian importers with existing Dubai relationships." },
      { q: "How do Indian buyers pay?", a: "SWIFT bank transfer in USD to our Kenyan or Dubai accounts. Letters of credit and escrow settlement are available for larger institutional orders. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "china",
    country: "China",
    eyebrow: "Gold Bullion Supply for China",
    heroTitle: "African Gold Bullion Supply for Chinese Refineries & Importers",
    heroSubtitle: "Verified African gold bullion and dore for Chinese SGE-member refineries, bullion banks, jewellery manufacturers and institutional importers. Full assay documentation, OECD compliance and insured delivery to Shanghai and Hong Kong.",
    pageTitle: "Gold Bullion China — African Gold Supplier | Mayfox",
    description: "Gold supplier for China. Buy verified African gold bullion and dore for Chinese refineries, bullion banks and jewellery manufacturers. Full assay, OECD compliance and insured delivery to Shanghai and via Hong Kong.",
    keywords: "gold bullion China, gold supplier China, wholesale gold China, gold import China, gold dore China, African gold China, gold from Kenya to China, SGE gold, gold refinery China, bullion China, Shanghai Gold Exchange, gold jewellery China",
    ogTitle: "Gold Bullion Supplier China — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion and dore for China's SGE refineries and importers. Full assay, OECD compliance and insured delivery.",
    introParagraphs: [
      "China is the world's largest gold producer and consumer, with the Shanghai Gold Exchange (SGE) serving as the primary physical gold trading platform. Chinese refineries, bullion banks, jewellery manufacturers and institutional investors represent one of the deepest gold markets globally. Chinese importers demand verified purity, competitive pricing and compliant documentation — standards Mayfox meets on every consignment.",
      "Mayfox supplies the Chinese market with gold dore bars at 85–95% purity, refined 995 bars and investment-grade 999.9 bullion from our licensed East African supply chain. Every consignment is independently assayed, documented with Certificate of Origin and Kenyan export licence, and prepared for Chinese import procedures.",
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
      "African gold dore and bullion for Chinese refineries and SGE members",
      "Full OECD-compliant documentation and independent assay",
      "Direct shipping to Shanghai or via Hong Kong corridor",
      "SWIFT settlement in USD via established banking partners",
      "Competitive LBMA-based pricing for wholesale consignments",
      "Experienced with Asian institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Chinese refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore at 85–95% purity to Chinese SGE-authorised refineries with independent SGS assay, Certificate of Origin and full OECD documentation. Delivery is available to Shanghai or via Hong Kong." },
      { q: "How is gold shipped to China?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Shanghai Pudong, or via Hong Kong for HK-based consolidation. Transit: 5–8 business days. We coordinate with Chinese customs brokers for compliant entry." },
      { q: "What is the minimum order for Chinese buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Wholesale dore consignments for refinery processing benefit from volume pricing starting at 10 kg+." },
      { q: "Do you ship via Hong Kong for Chinese buyers?", a: "Yes. Many Chinese buyers prefer delivery to Hong Kong for consolidation and re-export to the mainland under their SGE authorisation. Mayfox delivers to HKIA or HK vaults for this purpose." },
      { q: "How do Chinese buyers pay?", a: "SWIFT bank transfer in USD to our Kenyan or Dubai accounts. Letters of credit are available for larger institutional orders. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    eyebrow: "Gold Bullion Supply for Saudi Arabia",
    heroTitle: "Gold Bullion Supply for Saudi Refineries & Investors",
    heroSubtitle: "Verified African gold bullion and dore for Saudi refineries, bullion dealers, jewellery manufacturers and institutional buyers. Full documentation, independent assay and insured delivery to Riyadh, Jeddah and Dammam.",
    pageTitle: "Gold Bullion Saudi Arabia — African Gold Supplier | Mayfox",
    description: "Gold supplier for Saudi Arabia. Buy verified African gold bullion and dore bars for Saudi refineries, bullion dealers and investors. Full documentation, independent assay and insured delivery to Riyadh, Jeddah and Dammam.",
    keywords: "gold bullion Saudi Arabia, gold supplier Saudi, wholesale gold Saudi, gold import Saudi, gold dore Saudi, African gold Saudi, gold from Kenya to Saudi, gold refinery Saudi, bullion Saudi Arabia, gold jewellery Saudi, Riyadh gold",
    ogTitle: "Gold Bullion Supplier Saudi Arabia — African Gold | Mayfox",
    ogDescription: "Verified African gold for Saudi refineries and investors. Full documentation, independent assay and insured delivery to Riyadh, Jeddah and Dammam.",
    introParagraphs: [
      "Saudi Arabia's gold market is expanding rapidly under Vision 2030. The Kingdom is home to the Makkah Gold Souk, a growing refinery sector, major jewellery manufacturing in Riyadh and Jeddah, and a sovereign wealth-driven investment appetite for physical precious metals. Saudi buyers seek verified quality, Shariah-compliant physical gold and reliable supply chains — exactly what Mayfox provides.",
      "Mayfox supplies the Saudi market with investment-grade 999.9 bullion bars, gold dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African operations. Every consignment is independently assayed, fully documented and priced against the LBMA USD fix. We offer Shariah-compliant physical gold delivery with full chain-of-custody documentation.",
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
      "Verified African gold bullion for Saudi refineries and investors",
      "Shariah-compliant physical gold delivery available",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or SAR",
      "Delivery to Riyadh, Jeddah and Dammam",
      "Full compliance documentation for Saudi Customs and SAMA",
    ],
    faqs: [
      { q: "Can Saudi refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore at 85–95% purity to Saudi refineries with independent SGS assay, Certificate of Origin and full export documentation. Delivery to Riyadh, Jeddah or Dammam." },
      { q: "How is gold shipped to Saudi Arabia?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Riyadh, Jeddah or Dammam international airports. Transit time: 3–5 business days. Vault-to-vault delivery with full insurance." },
      { q: "Do you offer Shariah-compliant gold?,ref:saudi-faq-3", a: "Yes. Mayfox supplies physical gold bullion that meets Shariah compliance requirements for Islamic finance. We provide full chain-of-custody documentation and can deliver to Shariah-compliant vaults in the Kingdom." },
      { q: "What is the minimum order for Saudi buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Wholesale orders of 10 kg+ benefit from volume pricing. Contact the trade desk for a tailored quote." },
      { q: "How do Saudi buyers pay?", a: "SWIFT bank transfer in USD or SAR to our Kenyan or Dubai accounts. Letters of credit are available for larger institutional orders. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "qatar",
    country: "Qatar",
    eyebrow: "Gold Bullion Supply for Qatar",
    heroTitle: "Gold Bullion Supply for Qatar Investors & Dealers",
    heroSubtitle: "Verified African gold bullion and investment-grade bars for Qatari institutional investors, bullion dealers and wealth managers. Full documentation, independent assay and insured delivery to Doha.",
    pageTitle: "Gold Bullion Qatar — African Gold Supplier | Mayfox",
    description: "Gold supplier for Qatar. Buy verified African gold bullion and investment-grade bars for Qatari institutional investors, bullion dealers and wealth managers. Full assay and insured delivery to Doha.",
    keywords: "gold bullion Qatar, gold supplier Qatar, wholesale gold Qatar, gold import Qatar, African gold Qatar, gold from Kenya to Qatar, bullion Qatar, gold investment Qatar, institutional gold Qatar, Doha gold, gold bars Qatar",
    ogTitle: "Gold Bullion Supplier Qatar — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion for Qatari institutions and investors. Full documentation, independent assay and insured delivery to Doha.",
    introParagraphs: [
      "Qatar is one of the world's wealthiest nations per capita, with a sovereign wealth fund, growing private wealth sector and increasing appetite for physical gold as a portfolio diversifier. The Qatar Financial Centre, Qatar Central Bank-regulated institutions and Doha's emerging bullion dealer community represent a sophisticated buyer base that demands verified quality and institutional-grade documentation.",
      "Mayfox supplies the Qatari market with investment-grade 999.9 gold bullion bars, dore bars at 85–95% and refined 995 bars from our licensed East African supply chain. Every consignment is independently assayed by SGS or KEBS, documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records.",
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
      "African gold bullion for Qatari institutional investors and family offices",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or QAR",
      "Insured vault-to-vault delivery to Doha",
      "Full compliance documentation for Qatar Central Bank and Customs",
      "Competitive LBMA-based pricing for wholesale orders",
    ],
    faqs: [
      { q: "Can Qatari investors import gold from Kenya?", a: "Yes. Mayfox supplies investment-grade gold bullion to Qatari institutional investors, family offices and bullion dealers with full documentation, independent assay and insured delivery to Doha." },
      { q: "How is gold shipped to Qatar?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Hamad International Airport, Doha. Transit time: 3–5 business days. Vault-to-vault delivery with full insurance." },
      { q: "What is the minimum order for Qatari buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Larger orders benefit from volume pricing. Contact the trade desk for a tailored quote." },
      { q: "How do Qatari buyers pay?", a: "SWIFT bank transfer in USD or QAR to our Kenyan or Dubai accounts. Letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Is Mayfox gold suitable for Islamic investment?", a: "Yes. We supply physical gold bullion — a Shariah-compliant asset class — with full documentation and chain-of-custody records. Gold is widely recognised as Shariah-compliant for investment purposes." },
    ]
  },
  {
    slug: "oman",
    country: "Oman",
    eyebrow: "Gold Bullion Supply for Oman",
    heroTitle: "Gold Bullion Supply for Oman Dealers & Investors",
    heroSubtitle: "Verified African gold bullion and investment-grade bars for Omani bullion dealers, jewellery manufacturers and institutional investors. Full documentation, independent assay and insured delivery to Muscat.",
    pageTitle: "Gold Bullion Oman — African Gold Supplier | Mayfox",
    description: "Gold supplier for Oman. Buy verified African gold bullion and investment-grade bars for Omani bullion dealers, jewellery manufacturers and investors. Full assay and insured delivery to Muscat.",
    keywords: "gold bullion Oman, gold supplier Oman, wholesale gold Oman, gold import Oman, African gold Oman, gold from Kenya to Oman, bullion Oman, gold Muscat, gold jewellery Oman, gold investment Oman",
    ogTitle: "Gold Bullion Supplier Oman — African Gold | Mayfox",
    ogDescription: "Verified African gold for Oman's bullion market. Full documentation, independent assay and insured delivery to Muscat.",
    introParagraphs: [
      "Oman has a long tradition of gold trading, anchored by the Muscat Gold Souk in Muttrah and a network of bullion dealers, jewellery manufacturers and private investors. The Sultanate's strategic position on the Arabian Sea, its well-regulated financial sector and its growing role as a Gulf logistics hub make it an attractive market for verified African gold.",
      "Mayfox supplies the Omani market with investment-grade 999.9 bullion bars, gold dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African operations. Each consignment is independently assayed, fully documented and competitively priced against the LBMA USD fix.",
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
      { q: "Can Omani dealers import gold from Kenya?", a: "Yes. Mayfox supplies gold bullion and dore to Omani bullion dealers with full documentation, independent assay and insured delivery to Muscat." },
      { q: "How long does delivery to Oman take?", a: "3–5 business days via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Muscat International Airport, with vault delivery in Muscat." },
      { q: "What is the minimum order for Omani buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Contact the trade desk for volume pricing on wholesale orders." },
      { q: "How do Omani buyers pay?", a: "SWIFT bank transfer in USD or OMR to our Kenyan or Dubai accounts. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "kuwait",
    country: "Kuwait",
    eyebrow: "Gold Bullion Supply for Kuwait",
    heroTitle: "Gold Bullion Supply for Kuwait Investors & Dealers",
    heroSubtitle: "Verified African gold bullion for Kuwaiti institutional investors, bullion dealers and wealth managers. Full documentation, independent assay and insured delivery to Kuwait City.",
    pageTitle: "Gold Bullion Kuwait — African Gold Supplier | Mayfox",
    description: "Gold supplier for Kuwait. Buy verified African gold bullion and investment-grade bars for Kuwaiti investors, bullion dealers and wealth managers. Full assay and insured delivery to Kuwait City.",
    keywords: "gold bullion Kuwait, gold supplier Kuwait, wholesale gold Kuwait, gold import Kuwait, African gold Kuwait, gold from Kenya to Kuwait, bullion Kuwait, gold investment Kuwait, Kuwait gold dealers",
    ogTitle: "Gold Bullion Supplier Kuwait — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion for Kuwaiti institutions and investors. Full documentation, independent assay and insured delivery to Kuwait City.",
    introParagraphs: [
      "Kuwait is one of the Gulf's most sophisticated gold markets, with a strong tradition of physical gold ownership among institutional investors, family offices and private wealth holders. Kuwait City's gold souk and the country's well-capitalised dealer network create consistent demand for verified, institutional-grade bullion.",
      "Mayfox supplies the Kuwaiti market with investment-grade 999.9 bullion bars, dore bars at 85–95% and refined 995 bars from our licensed East African supply chain. Each consignment is independently assayed by SGS or KEBS, documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records.",
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
      "African gold bullion for Kuwait's institutional investors and dealers",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or KWD",
      "Insured vault-to-vault delivery to Kuwait City",
      "Full compliance documentation",
      "Competitive LBMA-based pricing",
    ],
    faqs: [
      { q: "Can Kuwaiti investors import gold from Kenya?", a: "Yes. Mayfox supplies investment-grade gold bullion to Kuwaiti institutional investors and dealers with full documentation, independent assay and insured delivery to Kuwait City." },
      { q: "How is gold shipped to Kuwait?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Kuwait International Airport. Transit: 3–5 business days with vault delivery in Kuwait City." },
      { q: "What is the minimum order for Kuwaiti buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Volume pricing available for larger orders. Contact the trade desk." },
      { q: "How do Kuwaiti buyers pay?", a: "SWIFT bank transfer in USD or KWD to our Kenyan or Dubai accounts. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "turkey",
    country: "Turkey",
    eyebrow: "Gold Bullion Supply for Turkey",
    heroTitle: "African Gold Bullion Supply for Turkish Refineries & Dealers",
    heroSubtitle: "Verified African gold bullion and dore for Turkey's refineries, bullion dealers, jewellery manufacturers and institutional investors. Full documentation, independent assay and insured delivery to Istanbul.",
    pageTitle: "Gold Bullion Turkey — African Gold Supplier | Mayfox",
    description: "Gold supplier for Turkey. Buy verified African gold bullion and dore bars for Turkish refineries, bullion dealers, jewellery manufacturers and investors. Full assay and insured delivery to Istanbul.",
    keywords: "gold bullion Turkey, gold supplier Turkey, wholesale gold Turkey, gold import Turkey, gold dore Turkey, African gold Turkey, gold from Kenya to Turkey, gold refinery Turkey, bullion Turkey, Istanbul gold, gold jewellery Turkey, Grand Bazaar gold",
    ogTitle: "Gold Bullion Supplier Turkey — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion and dore for Turkey's refineries and dealers. Full documentation, independent assay and insured delivery to Istanbul.",
    introParagraphs: [
      "Turkey is one of the world's most important gold markets, with a centuries-old tradition centred on Istanbul's Grand Bazaar and Kapalıçarşı gold district. Turkish refineries process significant volumes of imported dore, while the country's vast jewellery manufacturing sector supplies markets across Europe, the Middle East and Central Asia. Turkish buyers demand competitive pricing, verified purity and fast logistics.",
      "Mayfox supplies the Turkish market with gold dore bars at 85–95% purity (ideal for Turkish refinery processing), refined 995 bars, investment-grade 999.9 bullion and gold nuggets from our licensed East African operations. Every consignment is independently assayed, fully documented and priced against the LBMA USD fix.",
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
      { q: "Can Turkish refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore at 85–95% purity to Turkish refineries with independent SGS assay, Certificate of Origin and full export documentation. Delivery to Istanbul refinery intake." },
      { q: "How long does delivery to Turkey take?", a: "4–7 business days via Brinks or Malca-Amit from JKIA Nairobi to Istanbul Airport. The Dubai corridor is also available for Turkish buyers who prefer GCC-based consolidation." },
      { q: "What is the minimum order for Turkish buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore. Wholesale dore consignments of 10 kg+ for refinery processing benefit from volume pricing. Contact the trade desk." },
      { q: "Do you supply gold to Grand Bazaar dealers?", a: "Mayfox supplies wholesale gold bullion and dore to established Turkish bullion dealers, many serving the Grand Bazaar ecosystem. Wholesale minimums apply." },
      { q: "How do Turkish buyers pay?", a: "SWIFT bank transfer in USD, EUR or TRY to our Kenyan or Dubai accounts. Letters of credit available for institutional orders. Funds cleared before shipment." },
    ]
  },
  {
    slug: "germany",
    country: "Germany",
    eyebrow: "Gold Bullion Supply for Germany",
    heroTitle: "African Gold Bullion Supply for German Refineries & Investors",
    heroSubtitle: "Verified African gold bullion and dore for German refineries, bullion dealers, industrial users and institutional investors. Full OECD documentation, independent assay and insured delivery to Frankfurt and Pforzheim.",
    pageTitle: "Gold Bullion Germany — African Gold Supplier | Mayfox",
    description: "Gold supplier for Germany. Buy verified African gold bullion and dore for German refineries, bullion dealers and institutional investors. Full OECD documentation and insured delivery to Frankfurt and Pforzheim.",
    keywords: "gold bullion Germany, gold supplier Germany, wholesale gold Germany, gold import Germany, gold dore Germany, African gold Germany, gold from Kenya to Germany, gold refinery Germany, bullion Germany, Frankfurt gold, Pforzheim gold, institutional gold Germany",
    ogTitle: "Gold Bullion Supplier Germany — African Gold | Mayfox",
    ogDescription: "Verified African gold for German refineries and investors. Full OECD documentation, independent assay and insured delivery to Frankfurt and Pforzheim.",
    introParagraphs: [
      "Germany is Europe's largest gold market and home to some of the continent's most important refineries in Pforzheim and Hanau, as well as a sophisticated network of bullion dealers, industrial gold users, private investors and institutional buyers centred around Frankfurt, Stuttgart and Berlin. German buyers expect rigorous documentation, verified purity and demonstrable responsible sourcing — standards Mayfox meets on every consignment.",
      "Mayfox supplies the German market with gold dore bars at 85–95% purity, refined 995 bars, investment-grade 999.9 bullion and gold nuggets from our licensed East African supply chain. Every consignment is independently assayed by SGS, documented with Certificate of Origin, Kenyan export licence, OECD due diligence pack and full chain-of-custody records suitable for German refinery intake.",
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
      "African gold dore and bullion for German refineries and dealers",
      "Full OECD Step 1–5 due diligence documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in EUR or USD",
      "Delivery to Frankfurt, Pforzheim, Hanau and throughout Germany",
      "Experienced with EU import procedures and German refinery requirements",
    ],
    faqs: [
      { q: "Can German refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore at 85–95% purity to German refineries in Pforzheim and Hanau with independent SGS assay, OECD due diligence documentation and full export paperwork. Delivery to refinery intake." },
      { q: "How long does delivery to Germany take?", a: "4–7 business days via Brinks or Malca-Amit secure air freight from JKIA Nairobi to Frankfurt Airport, then armoured road transport to your German destination. EU customs clearance included." },
      { q: "What documentation do you provide for German import?", a: "Complete OECD due diligence pack (Steps 1–5), Certificate of Origin, independent SGS assay, Kenyan export licence, commercial invoice, packing list, airway bill and all-risk insurance — all suitable for German Zoll and EU import." },
      { q: "What is the minimum order for German buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Wholesale orders of 10 kg+ for refinery processing benefit from volume pricing." },
      { q: "How do German buyers pay?", a: "SWIFT bank transfer in EUR or USD to our Kenyan or Dubai accounts. Escrow and confirmed letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Are gold imports to Germany from Kenya duty-free?", a: "Yes. Gold bullion imports into the EU from Kenya benefit from duty-free treatment. Mayfox provides all necessary documentation for duty-free EU import clearance." },
    ]
  },
  {
    slug: "france",
    country: "France",
    eyebrow: "Gold Bullion Supply for France",
    heroTitle: "African Gold Bullion Supply for French Dealers & Investors",
    heroSubtitle: "Verified African gold bullion for French bullion dealers, institutional investors, wealth managers and private buyers. Full documentation, independent assay and insured delivery to Paris and throughout France.",
    pageTitle: "Gold Bullion France — African Gold Supplier | Mayfox",
    description: "Gold supplier for France. Buy verified African gold bullion and investment-grade bars for French bullion dealers, investors and wealth managers. Full assay and insured delivery to Paris and throughout France.",
    keywords: "gold bullion France, gold supplier France, wholesale gold France, gold import France, African gold France, gold from Kenya to France, bullion France, gold investment France, Paris gold, gold bars France, institutional gold France",
    ogTitle: "Gold Bullion Supplier France — African Gold | Mayfox",
    ogDescription: "Verified African gold bullion for French dealers and investors. Full documentation, independent assay and insured delivery to Paris and throughout France.",
    introParagraphs: [
      "France has a deep and sophisticated gold market, anchored by the Banque de France's historic gold reserves, a network of established bullion dealers in Paris, and a growing community of wealth managers and private investors who view physical gold as an essential portfolio component. French buyers demand quality, transparency and regulatory compliance — standards Mayfox delivers.",
      "Mayfox supplies the French market with investment-grade 999.9 gold bullion bars, dore bars at 85–95% and refined 995 bars from our licensed East African supply chain. Every consignment is independently assayed and documented with Certificate of Origin, Kenyan export licence and full chain-of-custody records suitable for EU import.",
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
      "African gold bullion for French dealers and institutional investors",
      "Independent SGS assay on every consignment",
      "EU-compliant documentation for duty-free import",
      "SWIFT settlement in EUR or USD",
      "Insured vault-to-vault delivery to Paris and throughout France",
      "Experienced with EU import procedures",
    ],
    faqs: [
      { q: "Can French dealers import gold from Kenya?", a: "Yes. Mayfox supplies investment-grade gold bullion to French dealers with independent SGS assay, Certificate of Origin and full EU-compliant documentation. Delivery to Paris CDG and throughout France." },
      { q: "How long does delivery to France take?", a: "4–7 business days via Brinks or Malca-Amit from JKIA Nairobi to Paris Charles de Gaulle, including EU customs clearance. Secure transport to your designated French vault." },
      { q: "What is the minimum order for French buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Volume pricing available for larger orders. Contact the trade desk for a quote." },
      { q: "Are gold imports from Kenya to France duty-free?", a: "Yes. Gold bullion imports into the EU from Kenya are duty-free. Mayfox provides all documentation for compliant duty-free EU import." },
      { q: "How do French buyers pay?", a: "SWIFT bank transfer in EUR or USD to our Kenyan or Dubai accounts. Escrow settlement available for institutional orders. Funds cleared before shipment." },
    ]
  },
  {
    slug: "canada",
    country: "Canada",
    eyebrow: "Gold Bullion Supply for Canada",
    heroTitle: "African Gold Bullion Supply for Canadian Refineries & Investors",
    heroSubtitle: "Verified African gold bullion and dore for Canadian refineries, bullion dealers, mining finance institutions and investors. Full documentation, independent assay and insured delivery to Toronto, Vancouver and Montreal.",
    pageTitle: "Gold Bullion Canada — African Gold Supplier | Mayfox",
    description: "Gold supplier for Canada. Buy verified African gold bullion and dore for Canadian refineries, bullion dealers, institutional investors and mining finance institutions. Full assay and insured delivery to Toronto, Vancouver and Montreal.",
    keywords: "gold bullion Canada, gold supplier Canada, wholesale gold Canada, gold import Canada, gold dore Canada, African gold Canada, gold from Kenya to Canada, gold refinery Canada, bullion Canada, Toronto gold, Vancouver gold, institutional gold Canada, Royal Canadian Mint",
    ogTitle: "Gold Bullion Supplier Canada — African Gold | Mayfox",
    ogDescription: "Verified African gold for Canadian refineries and investors. Full documentation, independent assay and insured delivery to Toronto, Vancouver and Montreal.",
    introParagraphs: [
      "Canada is home to the Royal Canadian Mint, a world-class refinery and bullion producer, as well as a sophisticated network of bullion dealers, institutional investors, mining finance institutions and wealth managers concentrated in Toronto, Vancouver and Montreal. Canadian buyers demand rigorous documentation, verified chain-of-custody and compliance with Canadian anti-money laundering regulations — standards Mayfox meets on every shipment.",
      "Mayfox supplies the Canadian market with gold dore bars at 85–95% purity, investment-grade 999.9 bullion bars, refined 995 bars and gold nuggets from our licensed East African operations. Each consignment is independently assayed, fully documented and priced against the LBMA USD fix in USD or CAD equivalents.",
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
      { q: "Can Canadian refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore at 85–95% purity to Canadian refineries with independent SGS assay, Certificate of Origin, full export documentation and FINTRAC-compatible compliance records. Delivery to Toronto, Vancouver or Montreal." },
      { q: "How is gold shipped to Canada?", a: "Brinks or Malca-Amit secure air freight from JKIA Nairobi to Toronto Pearson, Vancouver or Montreal-Trudeau. Transit: 4–7 business days including CBSA customs clearance. Vault-to-vault delivery." },
      { q: "What is the minimum order for Canadian buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Wholesale dore consignments for refinery processing benefit from volume pricing at 10 kg+." },
      { q: "Is Mayfox compliant with Canadian AML regulations?", a: "Yes. Our KYC and AML protocols meet FINTRAC-equivalent standards. We provide full beneficial ownership disclosure, source-of-funds verification and sanctions screening with every transaction." },
      { q: "How do Canadian buyers pay?", a: "SWIFT bank transfer in USD or CAD to our Kenyan or Dubai accounts. Escrow and letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
    ]
  },
  {
    slug: "australia",
    country: "Australia",
    eyebrow: "Gold Bullion Supply for Australia",
    heroTitle: "African Gold Bullion Supply for Australian Refineries & Investors",
    heroSubtitle: "Verified African gold bullion and dore for Australian refineries, bullion dealers, institutional investors and SMSF trustees. Full documentation, independent assay and insured delivery to Perth, Sydney and Melbourne.",
    pageTitle: "Gold Bullion Australia — African Gold Supplier | Mayfox",
    description: "Gold supplier for Australia. Buy verified African gold bullion and dore bars for Australian refineries, bullion dealers, institutional investors and SMSF buyers. Full assay and insured delivery to Perth, Sydney and Melbourne.",
    keywords: "gold bullion Australia, gold supplier Australia, wholesale gold Australia, gold import Australia, gold dore Australia, African gold Australia, gold from Kenya to Australia, gold refinery Australia, Perth Mint, bullion Australia, Sydney gold, Melbourne gold, SMSF gold",
    ogTitle: "Gold Bullion Supplier Australia — African Gold | Mayfox",
    ogDescription: "Verified African gold for Australian refineries and investors. Full documentation, independent assay and insured delivery to Perth, Sydney and Melbourne.",
    introParagraphs: [
      "Australia is one of the world's most important gold markets, home to the Perth Mint — a globally recognised refinery and bullion producer — as well as a robust network of bullion dealers, institutional investors, SMSF trustees and private wealth holders. Australian buyers demand LBMA-grade quality, transparent pricing and reliable logistics from established counterparties.",
      "Mayfox supplies the Australian market with investment-grade 999.9 bullion bars, gold dore bars at 85–95%, refined 995 bars and gold nuggets from our licensed East African supply chain. Each consignment is independently assayed, fully documented and competitively priced against the LBMA USD fix, with AUD equivalents provided on request.",
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
      "African gold bullion for Australian refineries including Perth Mint intake",
      "AUSTRAC-compatible KYC/AML documentation",
      "Independent SGS assay on every consignment",
      "SWIFT settlement in USD or AUD",
      "Delivery to Perth, Sydney, Melbourne and across Australia",
      "Experienced with Australian institutional buyer requirements",
    ],
    faqs: [
      { q: "Can Australian refineries import gold dore from Kenya?", a: "Yes. Mayfox supplies gold dore at 85–95% purity to Australian refineries with independent SGS assay, Certificate of Origin, full export documentation and AUSTRAC-compatible compliance records. Delivery to Perth, Sydney or Melbourne." },
      { q: "How long does delivery to Australia take?", a: "5–8 business days via Brinks or Malca-Amit from JKIA Nairobi to Perth, Sydney or Melbourne international airports, including Australian Border Force clearance. Vault-to-vault delivery." },
      { q: "What is the minimum order for Australian buyers?", a: "Standard minimum: 1 kg refined bullion, 500 g dore or nuggets. Wholesale dore consignments for refinery processing benefit from volume pricing at 10 kg+. Contact the trade desk." },
      { q: "Can Australian SMSF trustees buy gold from Mayfox?", a: "Yes. Mayfox supplies investment-grade 999.9 bullion bars suitable for SMSF physical gold allocation, with full documentation meeting ATO and AUSTRAC requirements for SMSF compliance." },
      { q: "How do Australian buyers pay?", a: "SWIFT bank transfer in USD or AUD to our Kenyan or Dubai accounts. Escrow and letters of credit available for institutional orders. Standard terms: funds cleared before shipment." },
      { q: "Is Mayfox compliant with Australian AML regulations?", a: "Yes. Our KYC and AML protocols meet AUSTRAC-equivalent standards with full beneficial ownership disclosure, source-of-funds verification and DFAT sanctions screening." },
    ]
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
