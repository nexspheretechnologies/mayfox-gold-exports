import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/85 to-background" />
      </div>
      <div className="container-x relative py-32 lg:py-40">
        <div className="eyebrow mb-6">{eyebrow}</div>
        <h1 className="font-display text-5xl lg:text-7xl max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className={`eyebrow mb-5 ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</div>}
      <h2 className="font-display text-4xl lg:text-5xl leading-tight">{title}</h2>
      {description && <p className="mt-5 text-muted-foreground text-lg">{description}</p>}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-gold/40 pl-5">
      <div className="font-display text-4xl lg:text-5xl text-gradient-gold">{value}</div>
      <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card-luxe p-7 group">
      {icon && (
        <div className="w-12 h-12 mb-5 border border-gold/40 flex items-center justify-center text-gold text-xl group-hover:bg-gold group-hover:text-onyx transition-colors">
          {icon}
        </div>
      )}
      <h3 className="font-display text-2xl mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export function CTABand() {
  return (
    <section className="relative section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-sm border border-gold/30 bg-gradient-to-br from-charcoal to-onyx p-10 lg:p-16">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="eyebrow mb-4">Speak to the Trade Desk</div>
              <h2 className="font-display text-3xl lg:text-5xl max-w-2xl">
                Ready to source <span className="text-gradient-gold">verified dore</span> for your portfolio?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Our senior traders respond within one business hour. All inquiries are handled
                under strict confidentiality and full KYC compliance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/request-quote" className="btn-gold btn-gold-hover">Request Quote</Link>
              <Link to="/contact" className="btn-outline-gold">Contact Trade Desk</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
