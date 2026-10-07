import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site-blocks";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";

// Maintained by hand: bump this date whenever the wording below changes (last reviewed 2026-10-07).
const LAST_UPDATED = "7 October 2026";

export const Route = createFileRoute("/disclaimer")({
  head: () => {
    const seo = pageSeo({
      title: "Disclaimer | Mayfox Gold Kenya",
      description:
        "Mayfox Gold Kenya disclaimer: website figures are indicative, nothing here is investment, legal or tax advice, and buyers verify permits in their own country.",
      path: "/disclaimer",
      ogImage: "/og-image.jpg",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer" }]),
          ),
        },
      ],
    };
  },
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            What this website <span className="text-gradient-gold">does not</span> promise you.
          </>
        }
        subtitle="The limits of marketing copy in a regulated commodities trade, stated plainly: indicative figures, no advice, no offer, and your own verification as the final word."
        image={img.certificate}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <SectionHeader
            eyebrow="Disclaimer"
            title={<>Precision about <span className="text-gradient-gold">the limits</span>.</>}
            description="A buyer who understands exactly what a website page is worth — and what it is worth nothing at — is a buyer we can work with. This page sets out where our statements stop being sufficient for your decision."
          />
          <p className="mt-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Last updated: <span className="text-gold">{LAST_UPDATED}</span>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This disclaimer applies to mayfox.co.ke and every page on it. It works alongside the{" "}
            <Link to="/terms" className="text-gold hover:underline">
              terms of use
            </Link>
            ; where the two differ on a point of contract, the terms and then your signed Sales &amp; Purchase
            Agreement control.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">1. Informational purpose only</h2>
          <p className="text-muted-foreground leading-relaxed">
            Content on this site exists to describe the services Mayfox offers as a Kenyan gold export agent and to
            help an international buyer decide whether to open a conversation. It is general information about a
            specific business and its process. It is not a prospectus, an offering memorandum, a tender document, a
            price sheet, a compliance certificate or a legal opinion, and it is not addressed to any particular
            buyer until it is issued to that buyer in a named document.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">2. Not investment, legal, tax or customs advice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nothing on this site is investment advice, financial advice, legal advice, tax advice, accounting advice
            or customs advice, and nothing on it should be acted upon as if it were. We do not assess whether gold,
            or any transaction structure, is suitable for your balance sheet, your mandate, your fiduciary duty or
            your tax position. Before you commit capital or sign anything, take your own advice: from counsel in your
            own jurisdiction on import, sanctions and contractual matters; from your accountants or tax advisers on
            duty, VAT, withholding and capital-gains treatment; and from your compliance function on sourcing,
            anti-money-laundering and beneficial-ownership requirements. Where our description of a process touches
            your regulatory position, your adviser's view governs, not ours.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">3. Website figures are indicative</h2>
          <p className="text-muted-foreground leading-relaxed">
            Any number on this site — a purity band, a fineness range, a weight or lot size, a discount or premium
            expressed against an international benchmark, a transit time, a handling window, a stated capacity or an
            example of what a consignment might be worth — is indicative and illustrative. Benchmarks referenced in
            our copy, including the London Bullion Market Association's daily prices, are third-party market
            information that moves continuously and that we neither control nor warrant. Indicative figures are
            snapshots of how we generally work, not commitments, and they expire the moment the market, the assay or
            the permit position moves. Only the numbers written into a signed contract — weight and fineness as
            determined by the agreed assay procedure, price as struck at the agreed fixing, charges as itemised — are
            operative.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">4. No offer and no contract arises from this site</h2>
          <p className="text-muted-foreground leading-relaxed">
            Product pages, gallery images, FAQ answers, market commentary and any quotation we email back to you are
            invitations to treat. They do not constitute an offer capable of acceptance, and your submission of a
            form does not create a contract. We will not sell to you, and you will not buy from us, until a Sales
            &amp; Purchase Agreement is executed for an identified consignment. Until then neither party has any
            obligation to the other, and we may decline any inquiry for any lawful reason — including a counterparty
            that will not complete due diligence, a destination we cannot lawfully serve, or a structure our partners
            will not underwrite.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">5. Assay, purity and the buyer's duty to verify</h2>
          <p className="text-muted-foreground leading-relaxed">
            Fineness in a doré consignment is a measurement, not a promise, and the measurement depends on who took
            the sample and how. Statements on this site about assay reflect the reports issued by the independent
            laboratories and testing houses engaged on a particular consignment. We disclaim any representation that
            an unassayed lot matches a stated figure, and we disclaim responsibility for readings taken by parties we
            did not instruct. Our position is the one institutional buyers already hold: verify the metal, do not
            verify the brochure. You are entitled to instruct, or to accept only, an assay from a named international
            testing house, to require witnessed weighing and sampling, and to reserve arbitration-assay rights in the
            contract. A seller who resists that is telling you something.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">6. Compliance statements are alignment, not certification</h2>
          <p className="text-muted-foreground leading-relaxed">
            When this site says that our process reflects the OECD Due Diligence Guidance for Responsible Supply
            Chains of Minerals from Conflict-Affected and High-Risk Areas, or the LBMA Responsible Gold Guidance, that
            is a description of the framework we design our paperwork around. It is not a claim that Mayfox or this
            website holds an accreditation, an audit certificate, a chain-of-custody approval or a membership issued
            by any of those bodies, and it must not be read as one. Likewise, references to Kenyan licensing cover
            the framework we operate inside — the Mining Act, Kenya Revenue Authority customs procedures, the Financial
            Reports Centre and Ministry of Mining export authorisation — and the entity-specific licence, permit and
            tax documents for a given transaction are provided to the contracting buyer for that transaction, and are
            verifiable at source by that buyer. Do not treat website copy as your due-diligence record; treat the
            document and its issuing authority as the record.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">7. Imagery and depictions on this site</h2>
          <p className="text-muted-foreground leading-relaxed">
            Photographs and images on this site — including pictures of bars, nuggets, grains, laboratory benches,
            boardrooms, freight and office settings — are illustrative of the categories of material and service we
            handle. They do not depict the specific consignment discussed in a quotation, and no image here should be
            read as evidence of the existence, weight, fineness, markings or origin of metal available to you. Where
            an image is a staged or generated representation rather than a documentary photograph of a live
            consignment, we consider it our duty to say so when you ask, and we will. A certificate of assay, a
            weighing record and a bill of lading describe your metal; a photograph describes a marketing page.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">8. Third parties, links and market references</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our process involves parties we do not control: licensed cooperatives and mining partners, partner
            refineries, independent laboratories, security carriers, insurers, customs brokers, banks and the
            regulators of several jurisdictions. Mentioning one of them — as a testing house a buyer might appoint, a
            carrier used on a route or a market where metal settles — is not a recommendation, not a partnership
            claim and not a statement that they have vetted this site or endorse Mayfox. External links are provided
            for convenience; we are not responsible for the accuracy, availability or legality of content we do not
            maintain, and the appearance of a bullion bank, refinery or trading hub in our copy does not mean that
            institution has transacted with us.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">9. Accuracy, currency and availability of the site</h2>
          <p className="text-muted-foreground leading-relaxed">
            We try to keep this site correct, and we correct it when we are told it is wrong. But regulatory
            requirements, permit routes, carrier capacity, laboratory turnaround and market conventions change faster
            than a website does, and a page written months ago may describe a process that has since moved. Content
            is provided on an as-is and as-available basis. We do not warrant that the site is uninterrupted,
            error-free, secure from third-party attack, or current at the moment you read it, and we accept no
            liability for loss arising from the site being unavailable, from a typographical error, or from information
            you relied on that had already changed.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Consequential loss — lost profit, lost margin, missed opportunity, business interruption, spoilage of a
            transaction — is excluded to the widest extent the law permits. Nothing in this disclaimer excludes or
            limits liability for fraud or fraudulent misrepresentation, for death or personal injury caused by
            negligence, or any other liability that cannot lawfully be excluded, including the rights of a buyer in
            Kenya, the European Union, the United Kingdom or any other jurisdiction whose consumer-protection statute
            cannot be contracted around.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">10. Tell us when something here is wrong</h2>
          <p className="text-muted-foreground leading-relaxed">
            If a page on this site states something inaccurate, out of date or capable of being read as a promise we
            did not intend, we want to hear about it — particularly from a buyer whose compliance or legal function
            has flagged it. Write to{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">
              sales@mayfox.co.ke
            </a>
            , cite the page and the sentence, and call{" "}
            <a href="tel:+254754979755" className="text-gold hover:underline">+254 754 979 755</a> if it is urgent.
            For the practical side of protecting yourself in this market, read our{" "}
            <Link to="/anti-fraud" className="text-gold hover:underline">
              anti-fraud notice
            </Link>{" "}
            and the{" "}
            <Link to="/buy-gold-safely" className="text-gold hover:underline">
              buyer due-diligence guide
            </Link>{" "}
            before you respond to any offer in our name.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            <Link to="/terms" className="btn-outline-gold justify-center">
              Terms of Use
            </Link>
            <Link to="/privacy" className="btn-outline-gold justify-center">
              Privacy Policy
            </Link>
            <Link to="/anti-fraud" className="btn-outline-gold justify-center">
              Anti-Fraud Notice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
