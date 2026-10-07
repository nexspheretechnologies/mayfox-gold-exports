import { articles } from "../data/articles";
import { buyerSegments } from "../data/buyer-segments";
import { marketPages } from "../data/market-pages";

export interface SearchDoc {
  path: string;
  title: string;
  kind: "Page" | "Market" | "Guide" | "Article" | "Buyer type";
  summary: string;
  // Search terms that a visitor might type but which do not appear verbatim in
  // the page body (product names, localities, spelling variants).
  terms: string;
}

// The corpus is small and fully static, so search runs in the browser against
// this index instead of a request-time backend.
const pages: SearchDoc[] = [
  { path: "/", title: "Home", kind: "Page", summary: "Kenya's trusted gold and precious metals export partner.", terms: "mayfox gold kenya doré bars nuggets export agent nairobi" },
  { path: "/products", title: "Gold Products", kind: "Page", summary: "Doré bars, nuggets, raw gold and refined investment bars with assay and export documentation.", terms: "gold dore bars nuggets raw gold refined bars investment grade wholesale offtake 999.9 24 karat" },
  { path: "/gold-specifications", title: "Gold Product Specifications", kind: "Page", summary: "Fineness bands, weights, form, packaging and the documents issued with each consignment.", terms: "doré bar weight specification assay certificate parcel manifest packaging 12.5 kg" },
  { path: "/gold-price", title: "Gold Price Today (USD & KES)", kind: "Page", summary: "Live spot gold per ounce, gram and kilogram with a doré valuation calculator.", terms: "gold price today gold price per gram gold price kenya shilling spot price doré calculator lbma" },
  { path: "/services", title: "Services", kind: "Page", summary: "Sourcing mandates, assay liaison, export documentation and insured logistics.", terms: "gold export services sourcing mandate assay logistics settlement" },
  { path: "/compliance", title: "Compliance & Traceability", kind: "Page", summary: "Licensed sourcing, KYC, due diligence and traceability practice.", terms: "kyc aml compliance traceability oecd due diligence conflict free licensed" },
  { path: "/export-documentation", title: "Export Documentation", kind: "Page", summary: "The Kenyan export document set and what each paper proves.", terms: "export permit customs declaration certificate of origin airway bill invoice packing list" },
  { path: "/global-delivery", title: "Global Delivery", kind: "Page", summary: "Insured air freight, vault-to-vault transfer and chain of custody.", terms: "shipping insured air freight vault to vault brinks malca-amit logistics delivery" },
  { path: "/industries", title: "Industries Served", kind: "Page", summary: "Refineries, dealers, funds and manufacturers who take African gold.", terms: "refineries jewellers bullion banks family offices manufacturers industries" },
  { path: "/about", title: "About Mayfox", kind: "Page", summary: "Nairobi-based gold export agent working licensed East and Central African sources.", terms: "about mayfox nairobi rhapta road westlands kenya company" },
  { path: "/gallery", title: "Gallery", kind: "Page", summary: "Product, smelting, assay and operations imagery.", terms: "photos images doré bars nuggets smelting assay lab" },
  { path: "/faqs", title: "FAQs", kind: "Page", summary: "Answers on sourcing, assay, payment terms, documentation and safety.", terms: "questions payment terms advance fee how long is it safe minimum quantity" },
  { path: "/contact", title: "Contact the Trade Desk", kind: "Page", summary: "Phone, WhatsApp, email and an enquiry form to the Nairobi desk.", terms: "contact phone whatsapp email sales mayfox +254 754 979 755" },
  { path: "/request-quote", title: "Request a Quote", kind: "Page", summary: "Confidential quote request: product, purity, quantity, destination.", terms: "quote request price indicative spk buying gold doré" },
  { path: "/buy-gold-safely", title: "How to Buy Gold from Kenya Safely", kind: "Guide", summary: "Counterparty verification, red flags, assay, documents and settlement order.", terms: "fraud scam verification due diligence red flags advance fee safe buying" },
  { path: "/kenya-gold-export-license", title: "The Kenya Gold Export Licence", kind: "Guide", summary: "Which Kenyan institutions sit between a mine gate and a buyer's vault.", terms: "export licence permit mining cadastral office kebs kra central bank of kenya icglp itsci" },
  { path: "/dore-vs-refined-gold", title: "Doré versus Refined Gold", kind: "Guide", summary: "What you are actually buying, and how fineness changes the price.", terms: "dore vs refined fineness 995 999.9 contained gold price difference" },
  { path: "/anti-fraud", title: "Anti-Fraud Notice", kind: "Guide", summary: "Official channels, the genuine transaction sequence and fraud typologies.", terms: "fake website impersonation clone fraud report advance fee fraud" },
  { path: "/track-inquiry", title: "Track Your Inquiry", kind: "Page", summary: "Check an MF reference against the trade desk pipeline.", terms: "reference status order tracking mf code" },
  { path: "/upload-documents", title: "Upload KYC Documents", kind: "Page", summary: "Post compliance documents securely against your inquiry reference.", terms: "kyc upload documents certificate of incorporation passport authority to sign bank reference import licence" },
  { path: "/book-a-call", title: "Book a Call", kind: "Page", summary: "Arrange a working call with the Nairobi trade desk.", terms: "meeting appointment call schedule whatsapp phone consultation" },
  { path: "/for", title: "Who We Serve", kind: "Buyer type", summary: "Buyer guides for refineries, dealers, funds, trading houses and manufacturers.", terms: "buyer types institutional customers who we serve segments" },
];

export const searchIndex: SearchDoc[] = [
  ...pages,
  ...marketPages.map((market) => ({
    path: `/${market.slug}`,
    title: market.pageTitle.split("|")[0].trim(),
    kind: "Market" as const,
    summary: market.description,
    terms: `${market.keywords} ${market.country} ${market.ogTitle}`,
  })),
  ...buyerSegments.map((segment) => ({
    path: `/for/${segment.slug}`,
    title: `${segment.label} buyer guide`,
    kind: "Buyer type" as const,
    summary: segment.description,
    terms: segment.keywords,
  })),
  ...articles.map((article) => ({
    path: `/insights/${article.slug}`,
    title: article.title,
    kind: "Article" as const,
    summary: article.dek,
    terms: `${article.category} ${article.title}`,
  })),
];

export interface SearchHit extends SearchDoc {
  score: number;
}

export function searchSite(query: string, limit = 25): SearchHit[] {
  const tokens = query
    .toLowerCase()
    .split(/[^a-z0-9éùûôç]+/)
    .filter((token) => token.length > 2);
  if (tokens.length === 0) return [];

  const scored = searchIndex.map((doc) => {
    const title = doc.title.toLowerCase();
    const summary = doc.summary.toLowerCase();
    const terms = doc.terms.toLowerCase();
    let score = 0;
    for (const token of tokens) {
      if (title.includes(token)) score += 6;
      if (terms.includes(token)) score += 3;
      if (summary.includes(token)) score += 2;
    }
    // Multi-token queries should not surface a page that matched one stray word.
    return { ...doc, score };
  });

  return scored
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
