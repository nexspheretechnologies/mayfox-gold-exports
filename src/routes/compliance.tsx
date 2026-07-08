import { createFileRoute } from "@tanstack/react-router";
import { img } from "../lib/images";
import { CTABand, PageHero, SectionHeader } from "../components/site-blocks";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — KYC, AML & OECD | Mayfox Gold Kenya" },
      { name: "description", content: "Mayfox operates to LBMA, OECD and Kenyan regulatory standards: verified purity 95–99.99%, KYC, AML, responsible sourcing and full export compliance." },
      { property: "og:title", content: "Compliance — Mayfox Gold" },
      { property: "og:image", content: img.lab },
      { property: "og:url", content: "/compliance" },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: Compliance,
});

const pillars = [
  ["Verified Gold Purity", "All bullion independently assayed and reported with bar-by-bar fineness from 95% to 99.99%."],
  ["Assay Verification", "Fire assay & XRF by SGS, Alex Stewart and Bureau Veritas accredited laboratories."],
  ["Export Compliance", "Full licensing under the Mining Act of Kenya, KRA Customs and CBK forex reporting."],
  ["Anti-Money Laundering", "FRC-aligned AML program with transaction monitoring and STR reporting."],
  ["Know Your Customer", "Multi-tier KYC including UBO disclosure, source-of-funds, PEP and sanctions screening."],
  ["Responsible Sourcing", "Alignment with LBMA Responsible Gold Guidance v9 and OECD Due Diligence."],
  ["Quality Assurance", "ISO 17025 lab partners; chain-of-custody documented end-to-end."],
  ["Inspection Protocols", "Pre-shipment inspection by client-appointed surveyors with witnessed weighing."],
  ["Risk Management", "Country risk, counterparty risk and operational risk reviewed quarterly."],
  ["Trade Compliance", "OFAC, EU, UN and UK sanctions screening on every consignee and intermediary."],
  ["International Standards", "Conformance with FATF, EITI, Dodd-Frank Sec. 1502 disclosure requirements."],
  ["Independent Audit", "Annual third-party compliance audit of supplier base and transaction trail."],
];

function Compliance() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title={<>Integrity is our <span className="text-gradient-gold">non-negotiable</span>.</>}
        subtitle="Every Mayfox transaction is engineered to withstand institutional, regulatory and audit scrutiny — from origin in East Africa to settlement abroad."
        image={img.lab}
      />

      {/* Purity callout */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow mb-5">Purity Standards</div>
            <h2 className="font-display text-5xl lg:text-6xl">
              <span className="text-gradient-gold">95% – 99.99%</span> verified fineness on every consignment.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl">
              Mayfox declares the exact bar-by-bar fineness of every shipment. We do not bundle
              dore with refined, nor mix grades across consignments. Every certificate is verifiable
              with the issuing laboratory.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-px bg-border/40">
              {[["95%", "Min Dore"], ["99.50%", "Refined"], ["99.99%", "Investment"]].map(([v, l]) => (
                <div key={l} className="bg-background p-7">
                  <div className="font-display text-4xl text-gradient-gold">{v}</div>
                  <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={img.assay} alt="Assay laboratory" className="rounded-sm w-full h-[520px] object-cover" />
        </div>
      </section>

      {/* Pillars */}
      <section className="section-y bg-onyx">
        <div className="container-x">
          <SectionHeader eyebrow="Compliance Framework" title={<>Twelve pillars of <span className="text-gradient-gold">institutional trust</span>.</>} align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 mt-14">
            {pillars.map(([t, d], i) => (
              <div key={t} className="bg-background p-7">
                <div className="font-display text-xs text-gold tracking-[0.3em] mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-xl mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Standards & Frameworks" title="Aligned with the global benchmarks of bullion integrity." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {["LBMA", "OECD", "FATF", "EITI", "ISO 17025", "Dodd-Frank"].map((f) => (
              <div key={f} className="border border-gold/30 py-10 text-center font-display text-2xl text-gradient-gold">{f}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
