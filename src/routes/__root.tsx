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
      { title: "Mayfox Gold & Precious Metals Kenya | Trusted Bullion Export Partner" },
      { name: "description", content: "Kenya's trusted gold bullion supplier and precious metals export company. Verified gold bars, dore bars, nuggets with full export documentation and secure global delivery." },
      { name: "keywords", content: "Gold Dealers Kenya, Gold Bullion Kenya, Gold Export Kenya, Gold Suppliers Kenya, Gold Bars Kenya, Gold Refinery Kenya, Precious Metals Kenya, Gold Dore Bar Exporters, African Gold Suppliers" },
      { name: "author", content: "Mayfox Gold and Precious Metals Kenya" },
      { property: "og:site_name", content: "Mayfox Gold & Precious Metals" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Mayfox Gold & Precious Metals Kenya" },
      { property: "og:description", content: "Verified gold bullion, dore bars and precious metals export from Kenya to global markets." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#141414" },
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
          "@type": "Organization",
          name: "Mayfox Gold and Precious Metals Kenya",
          url: "/",
          logo: "/favicon.ico",
          description: "Leading Kenyan gold trading, bullion supply, refining and precious metals export company.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mayfox House, Westlands",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254-700-000-000",
            contactType: "sales",
            areaServed: ["KE", "AE", "CH", "GB", "US", "CN", "IN", "ZA"],
          },
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
      </div>
    </QueryClientProvider>
  );
}
