import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";
import { absoluteUrl } from "../lib/site-url";

export const Route = createFileRoute("/export-documentation")({
  head: () => ({
    meta: [
      { title: "Gold Export Documentation Kenya | Assay Reports, Licenses, Permits" },
      { name: "description", content: "Full gold export documentation from Kenya: assay reports, export licenses, certificate of origin, commercial invoice, packing lists, customs and shipping documents." },
      { property: "og:title", content: "Export Documentation — Mayfox Gold Kenya" },
      { property: "og:description", content: "Full gold export documentation from Kenya: assay reports, export licenses, certificate of origin, commercial invoice, packing lists, customs and shipping documents." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: img.documents },
      { property: "og:url", content: absoluteUrl("/export-documentation") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/export-documentation") }],
  }),
  component: ExportDocs,
});

const docs = [
  ["Assay Report", "Independent laboratory analysis confirming purity, weight and metallic composition of each bar. Issued by SGS, Alex Stewart or Bureau Veritas."],
  ["Export License", "Issued by the Ministry of Mining of Kenya, authorizing the export of refined or semi-refined gold under license number, quantity and consignee."],
  ["Certificate of Origin", "Confirms that the gold was sourced and processed in Kenya. Endorsed by the Kenya National Chamber of Commerce & Industry (KNCCI)."],
  ["Commercial Invoice", "Itemized invoice declaring weight, purity, agreed price, Incoterms (typically CIF or DAP) and the importing party."],
  ["Packing List", "Bar-by-bar breakdown including serial numbers, gross/net weight, fineness and sealed package identifiers."],
  ["Export Permit", "Specific shipment permit issued per consignment, valid for the declared route and consignee."],
  ["Customs Documentation", "Single Administrative Document (SAD), HS-coded declaration, duty exemption confirmation and customs broker filing."],
  ["Airway Bill / Bill of Lading", "Issued by the security carrier (Brinks, Loomis, Malca-Amit) — confirms acceptance of consignment for international air freight."],
  ["Insurance Certificate", "Full-value cargo insurance, typically Lloyd's of London underwritten, covering door-to-door transit."],
  ["KYC / Compliance Pack", "Counterparty KYC, AML clearance, beneficial ownership disclosure and OECD due-diligence report."],
];

function ExportDocs() {
  return (
    <>
      <PageHero
        eyebrow="Export Documentation"
        title={<>Every consignment ships with a <span className="text-gradient-gold">complete document pack</span>.</>}
        subtitle="Mayfox handles every line of paperwork required to move bullion from Nairobi to your vault — legally, compliantly, and on time."
        image={img.documents}
      />

      {/* Workflow */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Documentation Workflow"
            title={<>From order confirmation to <span className="text-gradient-gold">customs release</span>.</>}
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border/40">
            {[
              ["01", "Order & KYC", "SPA executed, KYC and AML cleared."],
              ["02", "Assay", "Independent laboratory verification."],
              ["03", "Licensing", "Export permit & license issued."],
              ["04", "Customs", "SAD filed, duty cleared, sealed."],
              ["05", "Release", "Document pack handed to courier."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background p-7">
                <div className="font-display text-3xl text-gradient-gold">{n}</div>
                <div className="mt-3 font-medium">{t}</div>
                <p className="mt-2 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents detailed */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader eyebrow="The Document Pack" title={<>Ten documents — one verifiable <span className="text-gradient-gold">chain of custody</span>.</>} />
          <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {docs.map(([t, d], i) => (
              <div key={t} className="grid md:grid-cols-[80px_280px_1fr] gap-6 py-7 items-baseline">
                <div className="font-display text-3xl text-gradient-gold">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={img.contract} alt="Documentation review" className="rounded-sm w-full h-[480px] object-cover" />
          <div>
            <div className="eyebrow mb-5">Regulatory Liaison</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              In-house clearance with <span className="text-gradient-gold">every Kenyan regulator</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our compliance team maintains direct working relationships with the Ministry of Mining,
              Kenya Revenue Authority (KRA Customs), Kenya National Chamber of Commerce & Industry
              (KNCCI), Central Bank of Kenya (CBK) Forex Reporting, and the Financial Reporting
              Centre (FRC). This means your paperwork moves at institutional speed — never stuck
              waiting on an outside broker.
            </p>
            <ul className="mt-7 space-y-3">
              {["Ministry of Mining – Kenya", "Kenya Revenue Authority (KRA)", "KNCCI Certificate of Origin", "Central Bank of Kenya (CBK)", "Financial Reporting Centre (FRC)"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm">
                  <span className="text-gold">◆</span> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
