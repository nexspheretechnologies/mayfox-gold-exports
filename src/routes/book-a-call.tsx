import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { img } from "../lib/images";
import { PageHero, SectionHeader, CTABand } from "../components/site-blocks";

// Cal.com (or any scheduler that exposes an embeddable page) is optional
// infrastructure: set VITE_CAL_URL in the deployment env to turn the iframe on.
// Without it the page still works as a booking request, by phone, WhatsApp or email.
const CAL_URL = (import.meta.env.VITE_CAL_URL as string | undefined)?.trim() ?? "";

export const Route = createFileRoute("/book-a-call")({
  head: () => {
    const seo = pageSeo({
      title: "Book a Call with the Mayfox Trade Desk | Gold Sourcing Meetings",
      description:
        "Schedule a call with Mayfox's Nairobi trade desk to discuss a gold doré or nugget requirement: volumes, fineness, assay, export documentation, settlement structure and delivery destination.",
      path: "/book-a-call",
      keywords: "book gold sourcing call, gold supplier meeting, doré bar enquiry call, kenya gold trade desk, precious metals consultation",
      ogImage: img.tradingFloor,
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Book a Call", path: "/book-a-call" },
            ]),
          ),
        },
      ],
    };
  },
  component: BookACall,
});

const AGENDA = [
  {
    title: "Your requirement",
    body: "Product form (doré bar, nugget or refined), target fineness, indicative weight per parcel and how often you would take it.",
  },
  {
    title: "Destination and custody",
    body: "Which airport or vault the metal must reach, who receives it on your side, and whether you use your own secure logistics account.",
  },
  {
    title: "Documents you must satisfy",
    body: "What your compliance function, your bank and your customs authority need to see before the metal can be booked in.",
  },
  {
    title: "How the trade settles",
    body: "Assay reference, pricing basis, treatment and refining charges, settlement sequence and who bears each step.",
  },
];

const PREP = [
  "Entity name, jurisdiction and the person who will sign",
  "The licence, registration or authorisation your side needs to import unworked gold",
  "Indicative volume and cadence for the first twelve months",
  "Preferred destination airport or refinery and your forwarder, if any",
  "Your compliance questionnaire, if you would rather we complete yours",
];

function BookACall() {
  return (
    <>
      <PageHero
        eyebrow="Talk to a trader"
        title={
          <>
            Book a call with the{" "}
            <span className="text-gradient-gold">Nairobi trade desk</span>
          </>
        }
        subtitle="A first call is a working session, not a pitch. Bring your requirement and your compliance questions and we will tell you plainly whether we can serve them, what the documents look like and how a first parcel would settle."
        image={img.tradingFloor}
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <div className="mb-10">
              <SectionHeader
                eyebrow="Scheduling"
                title={CAL_URL ? "Pick a slot" : "Slots are arranged with the desk"}
                description={
                  CAL_URL
                    ? "Choose a time below. The calendar opens in Nairobi time (EAT, UTC+3); most buyers from Dubai, Europe and Asia find the 08:00–13:00 EAT window the friendliest."
                    : "The desk runs Monday to Saturday, 08:00–20:00 EAT (UTC+3) and answers by phone, WhatsApp or email. Send your preferred window and a trader will confirm a slot the same working day."
                }
              />
            </div>

            {CAL_URL ? (
              <div className="card-luxe p-2">
                <iframe
                  src={`${CAL_URL}${CAL_URL.includes("?") ? "&" : "?"}embed=true`}
                  title="Book a call with Mayfox Gold"
                  loading="lazy"
                  className="w-full h-[640px] bg-white rounded-sm"
                />
                <p className="text-xs text-muted-foreground px-4 py-3">
                  Calendar not loading?{" "}
                  <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    Open it in a new tab
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="card-luxe p-8 space-y-6">
                <p className="text-sm text-muted-foreground">
                  Reach the desk directly and say which window suits you. Online booking is not enabled
                  on this site yet, so a trader arranges the slot by hand — which is how most of our
                  conversations start anyway.
                </p>
                <dl className="grid sm:grid-cols-2 gap-5 text-sm">
                  <div>
                    <dt className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1.5">Phone</dt>
                    <dd>
                      <a href="tel:+254754979755" className="hover:text-gold">+254 754 979 755</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1.5">WhatsApp</dt>
                    <dd>
                      <a
                        href="https://wa.me/254754979755"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold"
                      >
                        Message the desk
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1.5">Email</dt>
                    <dd>
                      <a href="mailto:sales@mayfox.co.ke" className="hover:text-gold">sales@mayfox.co.ke</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1.5">Hours</dt>
                    <dd className="text-muted-foreground">Mon–Sat, 08:00–20:00 EAT</dd>
                  </div>
                </dl>
                <Link to="/contact" className="btn-outline-gold inline-flex !py-2.5">
                  Send the details in writing
                </Link>
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="card-luxe p-8">
              <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-4">What we cover</div>
              <ul className="space-y-5">
                {AGENDA.map((item) => (
                  <li key={item.title}>
                    <div className="text-sm font-medium mb-1">{item.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxe p-8">
              <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-4">Have this ready</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {PREP.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-5 border-t border-border/60 pt-4">
                We do not ask for banking details, proof of funds or shareholder documents on a first
                call. Those belong to the KYC stage, after both sides are satisfied there is a real
                requirement to serve.
              </p>
            </div>

            <div className="card-luxe p-8">
              <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-4">Reading first</div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/buy-gold-safely" className="hover:text-gold">How to buy gold from Kenya safely</Link>
                </li>
                <li>
                  <Link to="/kenya-gold-export-license" className="hover:text-gold">The Kenya gold export licence</Link>
                </li>
                <li>
                  <Link to="/dore-vs-refined-gold" className="hover:text-gold">Doré versus refined gold</Link>
                </li>
                <li>
                  <Link to="/gold-specifications" className="hover:text-gold">Gold product specifications</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}
