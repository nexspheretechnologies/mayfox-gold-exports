import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site-blocks";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";

// Maintained by hand: bump this date whenever the wording below changes (last reviewed 2026-10-07).
const LAST_UPDATED = "7 October 2026";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const seo = pageSeo({
      title: "Privacy Policy | Mayfox Gold Kenya",
      description:
        "Privacy policy for Mayfox Gold Kenya, a Nairobi gold export agent: what buyer data our forms collect, where it is stored, who can read it, your rights.",
      path: "/privacy",
      ogImage: "/og-image.jpg",
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]),
          ),
        },
      ],
    };
  },
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Your data, <span className="text-gradient-gold">held to account</span>.
          </>
        }
        subtitle="A plain-language account of what this website collects from an international buyer, where the submission goes, who is allowed to read it and how you get it removed."
        image={img.documents}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <SectionHeader
            eyebrow="Privacy Policy"
            title={<>Written for <span className="text-gradient-gold">buyers, not lawyers</span>.</>}
            description="Institutional gold trading runs on disclosed information: your name, your company, your destination country and the size of the consignment. You are entitled to know exactly what happens to that information before you press submit."
          />
          <p className="mt-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Last updated: <span className="text-gold">{LAST_UPDATED}</span>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This policy describes the site as its software behaves today. It is deliberately specific — including
            the technologies we use to store and transmit your inquiry — because generic privacy language tells a
            buyer nothing. Where the site does not do something (for example, we do not take payment details
            through any form), we say so.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">1. Who is responsible for your data</h2>
          <p className="text-muted-foreground leading-relaxed">
            Mayfox Gold and Precious Metals Kenya operates this website from Rhapta Road, Westlands, Nairobi,
            Kenya. For the information described below, Mayfox is the organisation that decides why and how your
            data is processed, and you can reach that decision-maker at{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">
              sales@mayfox.co.ke
            </a>{" "}
            or <a href="tel:+254754979755" className="text-gold hover:underline">+254 754 979 755</a>. Mayfox acts
            as an export agent and partner for licensed Kenyan cooperatives and artisanal miners; where an inquiry
            becomes a transaction, the sourcing and refining partners you contract with become responsible for
            their own records under the terms of the Sales &amp; Purchase Agreement (SPA).
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">2. What our forms collect from you</h2>
          <p className="text-muted-foreground leading-relaxed">
            Two forms on this site accept personal data. The quote form at{" "}
            <Link to="/request-quote" className="text-gold hover:underline">
              /request-quote
            </Link>{" "}
            and the general form at{" "}
            <Link to="/contact" className="text-gold hover:underline">
              /contact
            </Link>{" "}
            collect the fields you fill in:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              "Your name and your company name.",
              "Your email address and your phone number.",
              "Your country and, for a quote, the destination country for the consignment.",
              "The product you want, the purity you require and the quantity in kilograms.",
              "Your preferred delivery method (for example insured air freight or vault-to-vault transfer).",
              "A free-text notes or message field, which is yours to write in — please do not put passport scans, bank details or other sensitive documents in it.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The forms do not ask for, and cannot accept, card numbers, bank credentials or identity documents. If a
            party claims to be Mayfox and asks you to upload those through a website form, treat it as fraud and
            read our{" "}
            <Link to="/anti-fraud" className="text-gold hover:underline">
              anti-fraud notice
            </Link>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Newsletter signup collects two things only: your email address and the page on which you submitted it,
            so we can tell which market note you opted into. Every newsletter message carries a one-click
            unsubscribe link.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">3. How your submission travels and where it lands</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you press submit, the browser sends the form over HTTPS to a Mayfox server function — the data
            never goes to the database directly from your device. The server validates the content, then does two
            things in order:
          </p>
          <ol className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-display text-gold">01</span>
              <span>
                The inquiry is written to our Postgres database (hosted with Supabase) and given a reference such
                as MF-2026-XXXXX. Storage happens first, so that an outage at our email provider can never silently
                lose your request.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-gold">02</span>
              <span>
                Two emails are dispatched through Resend, a transactional email service: one to the Mayfox sales
                desk containing your inquiry details, and one to you confirming receipt with your reference.
              </span>
            </li>
          </ol>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Practical consequence: your inquiry exists both in our database and as an email in the sales inbox, and
            email is not end-to-end encrypted. That is why we ask you to keep documents and payment instructions out
            of the free-text field and send them only inside a signed transaction.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">4. Abuse prevention: hashed IP and browser string</h2>
          <p className="text-muted-foreground leading-relaxed">
            Public forms attract bots, and a gold-export inbox is a favourite target. To limit automated submissions
            the server stores, alongside each inquiry, a salted SHA-256 hash of your IP address rather than the raw
            address itself, plus a truncated copy of your browser user-agent string. The hash is not reversible to
            an IP and we keep no raw IP log for form submissions; it exists so we can cap repeat submissions from the
            same connection (a small number of submissions per ten-minute window) and flag obvious automation.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            On your own device the form uses three further protections that involve no upload: a hidden honeypot
            field that only bots fill, a minimum time check that rejects sub-second submissions, and a short rolling
            list of submission timestamps kept in your browser's local storage for rate limiting. Those local-storage
            entries stay on your device and are never transmitted to us as identifiers.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">5. Analytics and cookies, if the owner enables them</h2>
          <p className="text-muted-foreground leading-relaxed">
            Google Analytics is optional on this site and is only active if the site owner has configured a
            measurement ID. If it is enabled, page views, approximate country of access, referring site and device
            category are collected for aggregate traffic analysis, and the tag is configured to request IP
            anonymisation before storage. If it is not enabled, this page sets no analytics cookies and no page-view
            data leaves your browser beyond the ordinary web request. We do not run advertising retargeting pixels,
            and we do not sell or licence visitor data to any third party under any configuration.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">6. Who is allowed to read your inquiry</h2>
          <p className="text-muted-foreground leading-relaxed">
            Access is narrow by design. The database itself grants no anonymous read access at all: row-level
            security is enabled with no policies issued to anonymous or public roles, so any read that does not pass
            through our own server functions is refused by Postgres. Inside the application, the trade-desk inbox is
            limited to an email allowlist enforced in code — only the accounts on that list can list or update
            inquiries, and everything else is rejected. Beyond Mayfox staff, the only processors touching the data
            are our database host, our email provider and the infrastructure serving this site, each acting on our
            behalf to deliver a submission you initiated.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The inquiry-status lookup on this site returns only the stage of a request, and it requires both the
            reference we issued and the email address you used, so a guess at a reference alone discloses nothing.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">7. Why we process it, and the basis we rely on</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use your information to answer your inquiry, price it, complete customer due-diligence before a
            transaction, arrange documentation and delivery if a deal proceeds, keep a record of the correspondence,
            and defend the site against automated abuse. Under the frameworks referenced in section 9, that breaks
            down as: taking steps at your request before entering a contract for the inquiry itself; legitimate
            interests for spam prevention and record-keeping; consent for the newsletter, which you can withdraw at
            any time by the unsubscribe link or one email to the address below. Compliance with legal obligations —
            including Kenyan anti-money-laundering and export record requirements — may require us to retain
            transaction records even after a deal closes or you ask us to delete an inquiry.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">8. Retention, and cross-border storage</h2>
          <p className="text-muted-foreground leading-relaxed">
            An inquiry is kept while it is commercially live: while it is being quoted, contracted or shipped, and
            afterwards as the correspondence trail for whatever agreement followed. Marked-as-spam records and stale
            unanswered inquiries are of no value to us and are the first candidates for removal. At the time of
            writing, deletion is carried out case by case by our team rather than by an automated purge timer — which
            is exactly why we honour a deletion request manually instead of claiming a retention schedule the site
            does not yet enforce. Ask and we will remove or anonymise your record unless we are obliged to keep it
            for a legal or contractual purpose, and we will tell you when we are.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our desk is in Nairobi, but our hosting and email providers may store and process data in the regions
            they operate, which can be outside Kenya and outside your own country. Where that matters to your
            compliance function, ask us in writing and we will describe the providers in use so you can assess the
            transfer under your own rules.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">9. Your rights and the frameworks we address</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request access to what we hold about you, correction of anything inaccurate, and deletion of
            your inquiry or newsletter subscription. Send your request from the email address on the file if you can,
            quote your inquiry reference, and mark the subject "Data request" — it goes to{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">
              sales@mayfox.co.ke
            </a>
            . We will not require more personal data than necessary just to satisfy a request to remove it.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This site is written to address Kenya's Data Protection Act, 2019 and, for European and British buyers,
            the EU and UK General Data Protection Regulation. We describe those as the standards we work to; we do
            not claim a certification, registration number or appointed supervisory liaison in this policy, and you
            should not read the wording here as a warranty of registration. You keep the right to complain to the
            data-protection authority in your own jurisdiction, and in Kenya the Office of the Data Protection
            Commissioner, independently of anything we do.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3">10. Security, its limits, and how to reach us</h2>
          <p className="text-muted-foreground leading-relaxed">
            In transit we rely on HTTPS. At rest the database is reachable only through authenticated server-side
            access, staff reads are gated by the allowlist described above, IP data is stored hashed, and inbound
            submissions are length- and shape-validated before they are accepted. No website is a vault: email
            delivery, provider outages and the ordinary risks of transmitting data over the public internet remain
            part of any digital process. For that reason the highest-sensitivity material in a gold transaction —
            bank coordinates, identity documents, precious-metals logistics timings — is exchanged only after an SPA
            is in place, between named counterparties, and verified by voice callback to the number published on this
            site.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Questions about this policy, a request to see or delete your data, or a report that something on this
            site is not behaving as described here: email{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">sales@mayfox.co.ke</a> or call{" "}
            <a href="tel:+254754979755" className="text-gold hover:underline">+254 754 979 755</a>. The related pages
            below govern the same relationship from other angles, and we update this policy whenever the software
            changes — the date at the top of this page is the version marker.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            <Link to="/terms" className="btn-outline-gold justify-center">
              Terms of Use
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
