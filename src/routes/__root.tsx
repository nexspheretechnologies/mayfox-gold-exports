import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header, Footer } from "../components/site-chrome";
import { WhatsAppWidget } from "../components/whatsapp-widget";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-md text-center">
          <div className="eyebrow justify-center mb-6">Error 404</div>
          <h1 className="font-display text-6xl text-gradient-gold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for has been moved or no longer exists.
          </p>
          <Link to="/" className="btn-gold btn-gold-hover">Return Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">Please try again or return home.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold btn-gold-hover"
          >
            Try Again
          </button>
          <a href="/" className="btn-outline-gold">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "African Gold Suppliers | Gold Dore Bars, Nuggets & Bullion — Mayfox Kenya" },
      { name: "description", content: "African gold suppliers — buy verified gold nuggets, gold dore bars, raw gold and LBMA-grade bullion from Kenya, Tanzania, Uganda and DRC Congo. Mayfox Gold Nairobi ships worldwide with full assay & export docs. Trade desk: +254 754 979 755." },
      { name: "keywords", content: "african gold, gold in africa, gold in kenya, gold in uganda, gold in tanzania, gold in congo, gold nuggets for sale, raw gold for sale, gold dore bars, dore bars, lbma gold, gold investment, gold bullion kenya, gold bars kenya, gold dealers in kenya, gold price kenya, gold mining kenya, gold refinery kenya, gold exporters kenya, gold suppliers nairobi, precious metals kenya, alluvial gold, east africa gold, migori gold, kakamega gold, tanzania gold mining, uganda gold export, drc congo gold, gold smelting africa, 24 karat gold, 999.9 gold, conflict-free gold africa, dubai gold suppliers, gold assay kenya, sell gold nairobi, gold trading company kenya, Mayfox Gold" },
      { name: "author", content: "Mayfox Gold and Precious Metals Kenya" },
      { name: "geo.region", content: "KE-30" },
      { name: "geo.placename", content: "Nairobi, Kenya" },
      { name: "geo.position", content: "-1.2667;36.8067" },
      { name: "ICBM", content: "-1.2667, 36.8067" },
      { property: "og:site_name", content: "Mayfox Gold & Precious Metals Kenya" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_KE" },
      { property: "og:title", content: "Mayfox Gold & Precious Metals Kenya — Trusted Bullion Exporter" },
      { property: "og:description", content: "Verified Kenyan gold bullion, dore bars, nuggets and refined gold exported worldwide with full documentation. Based on Rhapta Road, Westlands, Nairobi." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mayfox Gold Kenya — Bullion, Refining & Export" },
      { name: "twitter:description", content: "Kenya's trusted gold dealer and exporter. Verified bullion, dore bars and nuggets with full assay and secure global delivery." },
      { name: "theme-color", content: "#141414" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          "@id": "/#organization",
          name: "Mayfox Gold and Precious Metals Kenya",
          alternateName: ["Mayfox Gold", "Mayfox Gold Kenya"],
          url: "/",
          logo: "/favicon.ico",
          image: "/favicon.ico",
          description:
            "Leading Kenyan gold trading, bullion supply, refining, smelting and precious metals export company serving institutional buyers across Africa, the Middle East, Europe, Asia and North America.",
          foundingDate: "2013",
          areaServed: ["KE", "TZ", "UG", "RW", "ET", "AE", "CH", "GB", "US", "CN", "IN", "ZA", "SG", "HK"],
          knowsAbout: [
            "Gold bullion trading",
            "Gold dore bar refining",
            "Gold export Kenya",
            "LBMA Good Delivery",
            "Precious metals logistics",
            "KYC and AML compliance",
            "OECD due diligence on minerals",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rhapta Road, Westlands",
            addressLocality: "Nairobi",
            addressRegion: "Nairobi",
            postalCode: "00100",
            addressCountry: "KE",
          },
          geo: { "@type": "GeoCoordinates", latitude: -1.2667, longitude: 36.8067 },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
          ],
          telephone: "+254754979755",
          email: "sales@mayfox.co.ke",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+254-754-979-755",
              contactType: "sales",
              email: "sales@mayfox.co.ke",
              areaServed: ["KE", "AE", "CH", "GB", "US", "CN", "IN", "ZA"],
              availableLanguage: ["English", "Swahili"],
            },
          ],
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mayfox Gold Kenya",
          url: "/",
          inLanguage: "en-KE",
          publisher: { "@id": "/#organization" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </QueryClientProvider>
  );
}
