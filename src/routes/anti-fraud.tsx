import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site-blocks";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";

// Maintained by hand: bump this date whenever the wording below changes (last reviewed 2026-10-07).
const LAST_UPDATED = "7 October 2026";

// Fraud patterns observed across the East and Central African gold trade. Descriptions are
// generic typologies, never a named case, company or individual.
const patterns: { title: string; body: string }[] = [
  {
    title: "The advance-fee cascade",
    body: "The classic shape of this market's fraud. A buyer is promised material at an attractive spread, then asked for a series of small, urgent payments first: registration, assay, export permit, storage, transport, a 'clearing agent', a tax stamp. Each fee is genuine-sounding and each one unlocks the next request. No metal exists, or exists but is never released, and the payments keep arriving because the buyer has already spent too much to walk away.",
  },
  {
    title: "The cheap consignment",
    body: "A 'distressed', 'mine-direct', 'no-banking' or 'diplomatic pouch' offer at a discount to the international benchmark wide enough to look like arbitrage rather than fraud. Real gold at a deep discount means someone is carrying risk, cost or a crime you cannot see. Institutional desks decline offers that beat the market by implausible margins; a fraud relies on you not declining.",
  },
  {
    title: "Forged assay and customs documents",
    body: "Certificates bearing the name and layout of a recognized testing house, a mineral export permit with an unverifiable number, a customs release that predates the assay it refers to. The paperwork looks authoritative because it is copied from a genuine pack. What it lacks is a reference a buyer can put to the issuing laboratory or authority and get back a matching record.",
  },
  {
    title: "Cloned websites and look-alike domains",
    body: "Copied photographs, lifted compliance pages and a domain one character away from a genuine dealer's, or a fresh site registered weeks before the pitch. Contact details point to a mailbox and a mobile number rather than the real business. The clone borrows the reputation; the conversation then moves to a private email thread the genuine company never sees.",
  },
  {
    title: "Impersonation of authorities and of you",
    body: "A 'ministry official', 'customs officer' or 'bank compliance manager' who confirms the deal by phone and accepts fees by email; or a party who already knows your buyer profile because they read it off a public inquiry, then presents themselves as the supplier your colleague recommended. Familiar detail is not verification.",
  },
  {
    title: "Payment to a personal or shifting account",
    body: "Settlement requested into a personal account, a third-party 'agent's' account, an account in a different name than the contracting entity, a crypto wallet, or a money-transfer rail. Accounts also change mid-deal, usually with a plausible excuse about a frozen corporate account. Once value leaves a correspondent bank between two cleared corporates, it does not come back.",
  },
  {
    title: "Theatre, pressure and untraceable channels",
    body: "A hotel safe, a warehouse 'viewing' with no sampling rights, a second buyer allegedly waiting outside, a mandate that expires at midnight, communications that flee to encrypted chat apps, and refusal to put anything in writing on company letterhead. Urgency is the mechanism: it exists to stop you doing the two checks that would end the deal.",
  },
];

// Mayfox's counter-measures, each tied to something a buyer can actually test.
const checks: { title: string; body: string }[] = [
  {
    title: "Confirm the channel before you confirm the deal",
    body: "Verify the phone number and email address you are using from mayfox.co.ke itself — open this site, read the contact details printed on it, and reach us there. Do not use a number or address from a message, a PDF, a business card or a mirror site. Our correspondence comes from the mayfox.co.ke domain; anything from a free mailbox or a similar-looking domain is not us.",
  },
  {
    title: "No payment before an SPA and an independent assay",
    body: "We do not take money from a buyer before a Sales & Purchase Agreement is signed and before the consignment has been weighed, sampled and assayed by an independent testing house. If you are asked for any advance amount in our name — reservation, holding, registration, permit, storage, courier, clearing, tax or 'good faith' — treat it as a hostile act against you and tell us.",
  },
  {
    title: "Independent assay before title transfers",
    body: "A buyer may require assay at a named international testing house of their choosing — for example SGS, Bureau Veritas, Intertek or Alex Stewart International — with witnessed weighing and sampling, before title passes and before final settlement releases. We will not resist this and we do not accept a seller-issued-only certificate as a settlement basis for our buyers.",
  },
  {
    title: "Corporate accounts, verified by voice",
    body: "Settlement runs corporate-to-corporate against the contract, to the account named in the signed agreement. Coordinates never change by email alone: any change of bank details is confirmed by a call you place to the published Mayfox number, to a person you have already dealt with. We never ask for payment to a personal account, an unnamed third party, a wallet address or a remittance service.",
  },
  {
    title: "Documents that answer a challenge",
    body: "Every line of the export pack for a live consignment — assay certificate, export authorisation, chamber certification, customs declaration, airway bill, insurance — should carry a reference the buyer can put to the issuing body. We would rather you verify our paperwork at source than take our word for it, and a supplier who cannot tell you how to do that has told you the answer.",
  },
  {
    title: "Real premises, real meetings, no clocks on the deal",
    body: "Our desk operates from Rhapta Road, Westlands, Nairobi, and buyers and their representatives are welcome to attend sampling, weighing and documentation in person or on a verifiable video call. We do not run transactions from hotel rooms or private residences, we do not put a midnight deadline on a legitimate offer, and a genuine mandate does not evaporate because you took forty-eight hours to instruct counsel.",
  },
];

export const Route = createFileRoute("/anti-fraud")({
  head: () => {
    const seo = pageSeo({
      title: "Anti-Fraud Notice | Mayfox Gold Kenya",
      description:
        "Anti-fraud notice for gold buyers in East and Central Africa: scam patterns to spot, how to verify Mayfox Gold Kenya, and how to report an attempt to us.",
      path: "/anti-fraud",
      ogImage: "/og-image.jpg",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Anti-Fraud", path: "/anti-fraud" }]),
          ),
        },
      ],
    };
  },
  component: AntiFraud,
});

function AntiFraud() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            If it is real, it <span className="text-gradient-gold">survives verification</span>.
          </>
        }
        subtitle="A fraud guide for buyers of East and Central African gold: the patterns that empty accounts in this market, the checks that defeat them, and exactly what Mayfox will never ask you to do."
        image={img.security}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <div className="card-luxe p-7 border-destructive/40">
            <div className="eyebrow mb-3 text-destructive">The only two channels that are ours</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Every instruction attributed to Mayfox should be checked against these before you act, wire, or sign.
              Nothing else is a Mayfox channel, whatever letterhead it uses.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gold">Email:</span>{" "}
                <a href="mailto:sales@mayfox.co.ke" className="font-display text-lg hover:text-gold">
                  sales@mayfox.co.ke
                </a>{" "}
                <span className="text-muted-foreground">(correspondence comes from the mayfox.co.ke domain only)</span>
              </div>
              <div>
                <span className="text-gold">Phone:</span>{" "}
                <a href="tel:+254754979755" className="font-display text-lg hover:text-gold">
                  +254 754 979 755
                </a>{" "}
                <span className="text-muted-foreground">(dial this number — never one copied from an email)</span>
              </div>
              <div>
                <span className="text-gold">Web:</span>{" "}
                <span className="font-display text-lg text-gold">mayfox.co.ke</span>{" "}
                <span className="text-muted-foreground">(no mirror, group or alternative domains)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y pt-0">
        <div className="container-x max-w-3xl">
          <SectionHeader
            eyebrow="Anti-Fraud Notice"
            title={<>Why we publish a page like <span className="text-gradient-gold">this one</span>.</>}
            description="Most of the damage in this trade is not bad metal. It is a buyer who paid a stranger because the paperwork, the urgency and the discount all felt convincing."
          />
          <p className="mt-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Last updated: <span className="text-gold">{LAST_UPDATED}</span>
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">1. This page exists because the market has a problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            Gold is the most fraudulent-commodity-sensitive trade in East and Central Africa. The reason is
            structural, not cultural: a high-value, compact, universally desired product; a legitimate supply chain
            that runs through cooperatives, licensed dealers, agents, brokers, laboratories, carriers and several
            regulators; and a documentary trail that a buyer abroad cannot easily inspect. Criminals do not need to
            own gold to defraud a gold buyer — they only need to imitate the paperwork and the process. Every buyer
            weighing African material should therefore assume that convincing-looking documents prove nothing until
            they have been verified at source, and that the party creating time pressure is the party to distrust.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mayfox is an export agent and partner acting for licensed Kenyan cooperatives and permitted artisanal
            miners. We are not a mine owner, a smelter or a refiner, and refined bars at 995 to 999.9 fineness are
            offered to you through our partner refineries. That is a modest claim to make, and it is exactly the sort
            of claim a fraud inflates: anyone promising you mine-direct metal at a huge discount, in volume, on short
            notice, with the owner standing by, is describing something that rarely exists.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">2. What a genuine transaction actually looks like</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sequence is the strongest fraud test available to a foreign buyer. A legitimate Kenyan export runs in this
            order, and every step is documented before the next one is paid for:
          </p>
          <ol className="mt-4 space-y-3 text-muted-foreground">
            {[
              "Inquiry and counterparty identification: who the buyer is, who the consignee is, which destination country, what quantity and fineness is wanted.",
              "Mutual KYC and sanctions screening: incorporation records, beneficial ownership, source of funds, references. This cuts both ways — you should be screening us as we screen you.",
              "Indicative terms, then a signed Sales & Purchase Agreement for an identified consignment, with price struck against a stated benchmark, weight and fineness determined by an agreed assay procedure, and an itemised cost schedule.",
              "Sourcing, consolidation and witnessed weighing and sampling of the actual metal, with the buyer or their representative entitled to attend.",
              "Independent assay by a named testing house, plus the export authorisation, certification, customs declaration and clearance for that specific consignment.",
              "Insurance and uplift with a professional secure carrier, into the vault or refinery of the buyer's choosing.",
              "Settlement as agreed in the contract — against assay and documents, between cleared corporate accounts, with final quantity trued up by the receiving assay.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Note what is missing from that list: any request for money before metal is identified and assayed, any
            account that is not the contracting party's, and any step that cannot be described in writing in advance.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">3. The patterns we see most often</h2>
          <p className="text-muted-foreground leading-relaxed">
            These are typologies, not accusations against any named party. Learn the shape of each one and you will
            recognise it inside an email thread within minutes.
          </p>
          <div className="mt-6 grid gap-px bg-border/40">
            {patterns.map((p, i) => (
              <div key={p.title} className="bg-background p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-gradient-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl mt-10 mb-3">4. How to verify you are really dealing with Mayfox</h2>
          <p className="text-muted-foreground leading-relaxed">
            Six checks, all of which cost you nothing but an hour of diligence, and any one of which is enough to end
            a fraudulent deal.
          </p>
          <div className="mt-6 space-y-4">
            {checks.map((c, i) => (
              <div key={c.title} className="card-luxe p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg">{c.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl mt-10 mb-3">5. Red-flag phrases — stop on contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Language is the fastest signal in this trade. Any of the following, in a message claiming to come from us
            or from any East African seller, is a reason to halt and verify by calling the number at the top of this
            page:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              "\"Pay the reservation fee and the bars will be locked to you today.\"",
              "\"The ministry requires this fee, and I can arrange it for you.\"",
              "\"Gold is below the market because it is mine-direct / urgent / no-paperwork.\"",
              "\"Send it to my account, the corporate one is frozen for two days.\"",
              "\"The assay was done by our own lab; a third party will slow the process.\"",
              "\"We will meet you at the hotel with the material in cash-and-carry.\"",
              "\"Do not tell your bank or your lawyers, this is a confidential mandate.\"",
              "\"Another buyer is already at the office; sign now or lose the consignment.\"",
              "\"Use this agent to clear customs; his fee is small and payable to him.\"",
              "\"Email from a domain similar to mayfox.co.ke, or from a free mailbox.\"",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-destructive">▲</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A request for confidentiality from your own bank, lawyer, compliance officer or counterparty's trade desk
            is the single loudest flag on this list. Legitimate metals trade is boringly documented.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">6. What Mayfox will never ask you to do</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              "Never pay an upfront reservation, holding or allocation fee to a personal account, an agent, a wallet address or any account other than the contracting party's corporate account named in a signed SPA.",
              "Never remit against an invoice that has no consignment, assay reference, weight, fineness and Incoterm stated on it.",
              "Never accept a change of bank details that arrived by email, messenger or a document without a verified voice callback to the number published on this site.",
              "Never route a transaction outside the banking system to keep it quiet, and never split payments across unrelated accounts to move it faster.",
              "Never send identity documents, passports, licences or bank credentials through a website form; this site's forms are for inquiry details only and are described in our privacy policy.",
              "Never buy on the strength of a certificate you have not put to the issuing laboratory, and never waive your own assay rights because a seller says verification is an insult.",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl mt-10 mb-3">7. If you believe you are being defrauded right now</h2>
          <p className="text-muted-foreground leading-relaxed">
            Act on the money first, the documents second:
          </p>
          <ol className="mt-4 space-y-3 text-muted-foreground">
            {[
              "Stop all further payments and all further documents. Do not pay the next fee to protect the last one.",
              "Call your bank or payment provider immediately and ask for a recall, stop-payment or fraud hold, and report the receiving account. Speed is the only lever that still works on a transfer.",
              "Preserve everything: emails with headers, attachments, message threads, numbers, account details, names used, documents received, photographs from any viewing. Do not delete the chat you are embarrassed about.",
              "Verify every claim independently — the laboratory, the issuing authority, the company registry, the carrier — using contacts you obtained yourself, not the ones supplied in the thread.",
              "Report it: to your national fraud and financial-intelligence authorities, to the relevant Kenyan bodies if the fraud claims Kenyan licensing or Kenyan metal, and to us so we can warn other buyers and correct the record if our name is being used.",
              "Take legal advice before confronting the counterparty; a demand letter can tip a scheme and destroy recoverable evidence.",
            ].map((line, i) => (
              <li key={line} className="flex gap-3">
                <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We will never ask you to send us money, bank credentials or documents in the course of a fraud report. Our
            interest in your report is to stop the misuse of our name and to protect the buyers who come after you.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">8. Report suspected fraud to our desk</h2>
          <p className="text-muted-foreground leading-relaxed">
            If anyone is offering gold in Mayfox's name, sending you documents on our letterhead, or operating a site
            that resembles ours, tell us — and tell us even if you are not a customer and even if you are only
            suspicious. Include the message headers if you have them, the domain or email address used, the phone
            number used, any account details quoted, and copies of documents. We will confirm from our own records
            whether the contact is genuine, and we will treat a report from a competitor or a broker as seriously as
            one from a buyer.
          </p>
          <div className="mt-6 card-luxe p-7">
            <div className="eyebrow mb-4">Report to Mayfox Trade Desk</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:sales@mayfox.co.ke?subject=Suspected%20fraud%20report" className="btn-gold btn-gold-hover">
                Email sales@mayfox.co.ke
              </a>
              <a href="tel:+254754979755" className="btn-outline-gold">
                Call +254 754 979 755
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Mayfox Gold and Precious Metals Kenya · Rhapta Road, Westlands, Nairobi, Kenya. Desk hours 08:00–20:00
              EAT, Monday to Saturday. If you cannot reach the desk on the published number within a reasonable time,
              treat any instruction that arrived in our name as unverified.
            </p>
          </div>

          <h2 className="font-display text-2xl mt-10 mb-3">9. Our own commitments, and the limits of them</h2>
          <p className="text-muted-foreground leading-relaxed">
            What we undertake: to correspond only from the mayfox.co.ke domain and the published number; to put terms
            in writing before asking for money; to accept independent assay and buyer-appointed inspection; to settle
            between corporate accounts named in a signed SPA; to disclose the sourcing party's documentation for a live
            consignment so you can verify it at source; and to tell you plainly when we cannot do a deal — a
            destination we cannot lawfully serve, a structure our partners will not underwrite, or metal we cannot
            source at the specification you need.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            What no honest seller can promise: that diligence replaces your own. We cannot verify a counterparty's
            import licence, sanctions position or tax treatment for you, and nothing published here — including this
            page — is a substitute for your own lawyers, your own auditors and your own assay. The most protective
            thing a genuine export agent can give an international buyer is a process that survives being checked.
            Read the rest of our legal terms in the{" "}
            <Link to="/terms" className="text-gold hover:underline">
              terms of use
            </Link>
            , the{" "}
            <Link to="/disclaimer" className="text-gold hover:underline">
              disclaimer
            </Link>
            , the{" "}
            <Link to="/privacy" className="text-gold hover:underline">
              privacy policy
            </Link>
            , and work through the{" "}
            <Link to="/buy-gold-safely" className="text-gold hover:underline">
              buyer due-diligence guide
            </Link>{" "}
            before you commit capital anywhere in this market.
          </p>
        </div>
      </section>
    </>
  );
}
