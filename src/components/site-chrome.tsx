import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/export-documentation", label: "Export Docs" },
  { to: "/global-delivery", label: "Global Delivery" },
  { to: "/industries", label: "Industries" },
  { to: "/compliance", label: "Compliance" },
  { to: "/market-insights", label: "Insights" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Ticker */}
      <div className="bg-onyx border-b border-border/60 text-[11px] tracking-[0.18em] uppercase text-muted-foreground overflow-hidden">
        <div className="container-x flex items-center justify-between py-2 gap-6">
          <span className="hidden md:inline">Verified Purity 95% – 99.99%</span>
          <span className="hidden lg:inline">Secure Global Delivery</span>
          <span className="hidden md:inline">Full Export Documentation</span>
          <span className="text-gold">+254 (0) 700 000 000 · trade@mayfoxgold.co.ke</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="container-x flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] flex items-center justify-center text-onyx font-display text-xl font-bold">M</div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">MAYFOX</div>
              <div className="text-[9px] tracking-[0.32em] text-gold uppercase">Gold & Precious Metals</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-7 text-[12px] tracking-[0.12em] uppercase font-medium">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/request-quote" className="hidden md:inline-flex btn-gold btn-gold-hover">Request Quote</Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="xl:hidden p-2 border border-border rounded-sm"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <div className="w-5 h-px bg-gold" />
                <div className="w-5 h-px bg-gold" />
                <div className="w-5 h-px bg-gold" />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-onyx">
            <div className="container-x py-4 grid grid-cols-2 gap-3 text-sm">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-muted-foreground hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/request-quote" onClick={() => setOpen(false)} className="col-span-2 btn-gold mt-2">
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-onyx border-t border-border/60 mt-24">
      <div className="container-x py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold-deep)] flex items-center justify-center text-onyx font-display text-xl font-bold">M</div>
            <div>
              <div className="font-display text-lg">MAYFOX</div>
              <div className="text-[9px] tracking-[0.32em] text-gold uppercase">Gold & Precious Metals</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Mayfox Gold and Precious Metals Kenya is a leading bullion supply, refining,
            and precious metals export company serving institutional buyers across Africa,
            the Middle East, Europe, Asia, and North America.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div><span className="text-gold">Address:</span> Mayfox House, Westlands, Nairobi, Kenya</div>
            <div><span className="text-gold">Trade Desk:</span> +254 (0) 700 000 000</div>
            <div><span className="text-gold">Email:</span> trade@mayfoxgold.co.ke</div>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/compliance" className="hover:text-gold">Compliance</Link></li>
            <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link to="/market-insights" className="hover:text-gold">Market Insights</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">Trade</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-gold">Gold Products</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/export-documentation" className="hover:text-gold">Export Documentation</Link></li>
            <li><Link to="/global-delivery" className="hover:text-gold">Global Delivery</Link></li>
            <li><Link to="/request-quote" className="hover:text-gold">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.28em] uppercase text-gold mb-5">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Weekly bullion market briefings and export advisories.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full bg-card border border-border px-3 py-2.5 text-sm focus:border-gold outline-none"
            />
            <button className="w-full btn-outline-gold !py-2.5">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Mayfox Gold and Precious Metals Kenya. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Disclaimer</a>
            <a href="#" className="hover:text-gold">Anti-Fraud Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
