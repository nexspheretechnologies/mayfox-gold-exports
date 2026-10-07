import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site-blocks";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";

// Maintained by hand: bump this date whenever the wording below changes (last reviewed 2026-10-07).
const LAST_UPDATED = "7 October 2026";

export const Route = createFileRoute("/terms")({
  head: () => {
    const seo = pageSeo({
      title: "Terms & Conditions | Mayfox Gold Kenya",
      description:
        "Terms of use for Mayfox Gold Kenya, a Nairobi gold export agent: figures are indicative, and no offer arises until a signed Sales and Purchase Agreement.",
      path: "/terms",
      ogImage: "/og-image.jpg",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]),
          ),
        },
      ],
    };
  },
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms that <span className="text-gradient-gold">draw the line</span> between a quote and a contract.
          </>
        }
        subtitle="What you agree to by using this website, what Mayfox does and does not promise, and the exact point at which a binding obligation appears."
        image={img.contract}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <SectionHeader
            eyebrow="Terms & Conditions"
            title={<>One document, <span className="text-gradient-gold">two purposes</span>.</>}
            description="These terms govern use of mayfox.co.ke. They are deliberately subordinate to the Sales & Purchase Agreement, because in cross-border metals the signed contract — not the website — is what carries the deal."
          />
          <p className="mt-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Last updated: <span className="text-gold">{LAST_UPDATED}</span>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Please read this page and the{" "}
            <Link to="/disclaimer" className="text-gold hover:underline">
              disclaimer
            </Link>{" "}
            before you request a quote. Using the site or submitting an inquiry means you accept these terms. If you
            cannot accept them, the honest answer is that we should not be transacting, and we would rather lose the
            inquiry than paper over it.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">1. Who Mayfox is and what Mayfox does</h2>
          <p className="text-muted-foreground leading-relaxed">
            Mayfox Gold and Precious Metals Kenya is a licensed Kenyan gold export agent operating from Rhapta Road,
            Westlands, Nairobi. We act for and alongside licensed Kenyan cooperatives and permitted artisanal and
            small-scale mining operations: sourcing, verification, assay coordination, export documentation,
            logistics and settlement arrangement. We are a partner and agent in the transaction, not the mine owner,
            not the smelter and not the refiner. Refined bars at 995 to 999.9 fineness are available through our
            partner refineries, and the refinery or mint that produces them is the party that warrants their output.
            Nothing on this site should be read as a claim that Mayfox itself refines, smelts or mints metal.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">2. Nothing on this site is an offer</h2>
          <p className="text-muted-foreground leading-relaxed">
            This is the most important sentence on the page: material published on mayfox.co.ke — product pages,
            purity ranges, indicative discounts to the international benchmark, capacity statements, delivery
            windows and any worked example shown on a product page — is descriptive and indicative. It is not
            an offer to sell, not a firm bid, not a commitment of supply and not a representation that metal is
            presently held or available in any
            stated quantity. No offer is made, and no obligation to sell or to buy arises on either side, until a
            Sales &amp; Purchase Agreement is signed by the named counterparties for a specific consignment.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A reference number issued by our quote form — an acknowledgement that we received your request — is a
            receipt, not an allocation of metal and not a price hold.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">3. Pricing, quotations and how they may move</h2>
          <p className="text-muted-foreground leading-relaxed">
            Gold is priced continuously against international benchmarks, and any quotation we issue is valid only for
            the period stated in that quotation, subject to assay-confirmed fineness, weight, the destination, the
            Incoterms agreed and the security-carrier routing available at the time of shipment. Quotations are
            re-struck whenever the benchmark moves beyond the tolerance stated in the quote, and are withdrawn if
            permitting, sanctions screening or carrier availability changes. Taxes, duties, levies, licence fees,
            insurance and handling charges in either Kenya or the destination country are not absorbed by a website
            figure; they are itemised in the SPA.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">4. What you agree when you use the site</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              "You will submit accurate identity, company and contact details, and accurate information about the intended buyer, consignee and destination.",
              "You will not use the site for unlawful, sanctioned or disguised trade, and will not represent yourself as an institution you are not.",
              "You will not scrape, mass-submit, or attempt to overwhelm the forms, or probe the site for the personal data of other users.",
              "You will not rely on any figure, statement or document from this site as the sole basis of a commercial or regulatory decision.",
              "You will verify any instruction that appears to come from Mayfox through the published contact channels before acting on it.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Text and images you submit through our forms remain yours; by submitting you grant us the limited right
            to store, transmit and reproduce them internally in order to answer your inquiry and document the
            transaction. Site content — copy, structure, branding and the Mayfox name — may not be republished or
            used to lend credibility to another desk's offer without written permission. If you find our name or
            site being copied, see the{" "}
            <Link to="/anti-fraud" className="text-gold hover:underline">
              anti-fraud notice
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">5. Inquiries, due diligence and confidentiality</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reply to serious inquiries, but a reply is not endorsement or verification of the counterparty. Before
            metal moves, both sides complete customer due diligence: identity of the contracting entity, ultimate
            beneficial ownership, source of funds, consignee details and sanctions screening against the relevant
            Kenyan, UN, UK, EU and US lists. Information exchanged in that process is confidential on both sides, is
            used only for the transaction in question, and is disclosed to regulators, banks, insurers or carriers
            only where the law or the agreed logistics require it. Our handling of your personal data is set out in
            the{" "}
            <Link to="/privacy" className="text-gold hover:underline">
              privacy policy
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">6. Payment terms — the non-negotiable ones</h2>
          <p className="text-muted-foreground leading-relaxed">
            Payment terms exist only inside an SPA. Settlement is made against the contract, to the corporate bank
            account of the named counterparty, in the manner and sequence the contract sets out. Mayfox does not ask
            buyers to move funds to a personal account, to an unnamed third party, in cryptocurrency, by money-transfer
            rail, or as an advance "reservation", "holding", "storage", "documentation" or "clearing" fee outside the
            contract. If any such demand reaches you in our name, it is fraudulent: stop, and contact the desk on the
            number published on this site.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">7. Permits, and your obligations in your own jurisdiction</h2>
          <p className="text-muted-foreground leading-relaxed">
            For an export from Kenya, the required permitting, licensing, assay certification, chamber-of-commerce
            certification and customs clearance are arranged through the licensed parties in the transaction, and the
            documents are provided to the buyer for the specific consignment. That covers the Kenyan side only. The
            buyer is solely responsible for confirming and obtaining everything the destination requires — import
            licence, precious-metals registration, customs classification, declared value, anti-money-laundering
            filing, tax treatment, and any licence or sanction authorisation needed to receive or pay for the metal.
            Buyers must verify permits in their own jurisdiction before contracting; a Kenyan export document is not
            an import authorisation, and no statement on this site substitutes for your own regulatory advice.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">8. Title, risk, delivery and inspection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Title and risk pass exactly as the SPA says, in practice following the agreed Incoterm, and neither
            transfers on the basis of a quotation, an invoice draft or a conversation. Delivery windows quoted are
            targets dependent on permitting, assay scheduling, carrier availability and customs release; they are not
            guarantees, and force majeure, regulatory stoppages and carrier decisions beyond our control extend them.
            Buyers have the right — and we recommend it — to appoint an independent inspection and assay party at the
            point of loading or arrival, with witnessed weighing and sampling, and to satisfy themselves that the
            consignment matches the contract before title passes or final settlement is released.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">9. Responsibility, and where it stops</h2>
          <p className="text-muted-foreground leading-relaxed">
            The site is provided on an as-is basis. To the fullest extent the law allows, we exclude implied warranties
            about website content and accept no liability for indirect, incidental or consequential loss — including
            lost margin, missed shipments, business interruption or lost profits — arising from reliance on website
            information, from temporary unavailability, or from the acts of third parties such as carriers,
            laboratories, refiners, banks or other desks. Where liability cannot be excluded, our aggregate exposure
            for claims connected to a transaction is limited, absent wilful misconduct, to the fees payable to Mayfox
            for that transaction. Nothing here excludes fraud, death or personal injury caused by negligence, or any
            statutory right that cannot lawfully be limited.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">10. Governing law, changes and contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms are governed by the laws of the Republic of Kenya, and the courts of Nairobi have jurisdiction
            over disputes arising from use of the site, without prejudice to any different forum your signed SPA may
            specify. Each clause stands on its own: if a court strikes one, the rest survive. We may revise these
            terms as the site, the law or our processes change; the version in force is the one published here on the
            date you submitted your inquiry, and material changes will be reflected in the date above.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Questions on these terms, or a request for the current version in writing: Mayfox Gold and Precious Metals
            Kenya, Rhapta Road, Westlands, Nairobi —{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">sales@mayfox.co.ke</a> ·{" "}
            <a href="tel:+254754979755" className="text-gold hover:underline">+254 754 979 755</a>.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            <Link to="/privacy" className="btn-outline-gold justify-center">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="btn-outline-gold justify-center">
              Disclaimer
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
