import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { adminListLeads, adminUpdateLead } from "@/lib/lead-functions";
import { adminListKycDocuments } from "@/lib/kyc-functions";
import { LEAD_STATUSES, PIPELINE_STATUSES, STATUS_LABELS, type KycDocument, type LeadStatus, type LeadRecord } from "@/lib/lead-schema";
import { pageSeo } from "@/lib/seo";
import { reportClientError } from "@/lib/error-reporting";

export const Route = createFileRoute("/admin/leads")({
  head: () =>
    pageSeo({
      title: "Trade Desk Inbox — Mayfox",
      description: "Internal inquiry pipeline.",
      path: "/admin/leads",
      noindex: true,
    }),
  component: AdminLeads,
});

type UserState = string | null | undefined;

function AdminLeads() {
  const [user, setUser] = useState<UserState>(undefined);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase
      .auth.getSession()
      .then(({ data }) => {
        if (cancelled) return;
        setUser(data.session ? (data.session.user.email ?? "Signed in") : null);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setUser(null);
        setConfigError(errorMessage(error));
      });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setUser(next ? (next.user.email ?? "Signed in") : null);
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (user === undefined) {
    return (
      <section className="section-y">
        <div className="container-x text-sm text-muted-foreground">Checking sign-in…</div>
      </section>
    );
  }

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="eyebrow mb-2">Trade Desk</div>
            <h1 className="font-display text-3xl">Inquiry inbox</h1>
          </div>
          {user && <SignedIn email={user} onSignOut={() => void supabase.auth.signOut()} />}
        </div>

        {configError && (
          <p role="alert" className="text-xs text-destructive border border-destructive/40 py-2 px-3 mb-6">
            {configError}
          </p>
        )}

        {user ? <Inbox /> : <SignIn />}
      </div>
    </section>
  );
}

function SignedIn({ email, onSignOut }: { email: string; onSignOut: () => void }) {
  return (
    <div className="flex items-center gap-4 text-xs text-muted-foreground">
      <span>Signed in as <span className="text-gold">{email}</span></span>
      <button type="button" onClick={onSignOut} className="btn-outline-gold !py-2 !px-3">Sign out</button>
    </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setPending(false);
    if (authError) setError(authError.message);
    // On success the auth-state subscription swaps in the inbox.
  }

  return (
    <div className="card-luxe p-8 max-w-md">
      <div className="eyebrow mb-4">Staff sign-in</div>
      <p className="text-xs text-muted-foreground mb-6">
        Access requires a Supabase Auth account whose email is listed in <code>LEAD_STAFF_EMAILS</code>.
        Read access is refused outright if that variable is unset.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block text-sm">
          <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="w-full bg-background border border-border px-4 py-3 focus:border-gold outline-none"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Password</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full bg-background border border-border px-4 py-3 focus:border-gold outline-none"
          />
        </label>
        {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
        <button type="submit" disabled={pending} className="btn-gold w-full disabled:opacity-60">
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

function Inbox() {
  const [status, setStatus] = useState<"" | LeadStatus>("");
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await adminListLeads({
        data: { status: status || undefined, search: search || undefined, limit: 200 },
      });
      setLeads(rows);
    } catch (err) {
      reportClientError(err, { surface: "admin-leads-list" });
      setError(errorMessage(err));
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }, [status, search]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <div className="grid md:grid-cols-[220px_1fr_auto] gap-4 items-end mb-6">
        <label className="text-sm block">
          <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Stage</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "" | LeadStatus)}
            className="w-full bg-background border border-border px-3 py-2.5 focus:border-gold outline-none"
          >
            <option value="">All stages</option>
            {LEAD_STATUSES.map((s) => (
              <option key={s} value={s}>{STATUS_LABELS[s]}</option>
            ))}
          </select>
        </label>
        <label className="text-sm block">
          <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="reference, name, email or company"
            className="w-full bg-background border border-border px-3 py-2.5 focus:border-gold outline-none"
          />
        </label>
        <button type="button" onClick={() => void load()} disabled={loading} className="btn-outline-gold !py-2.5 disabled:opacity-60">
          {loading ? "Loading…" : "Refresh"}
        </button>
      </div>

      {error && (
        <p role="alert" className="text-xs text-destructive border border-destructive/40 py-2 px-3 mb-6">
          {error}
        </p>
      )}

      {!loading && leads.length === 0 && !error && (
        <div className="card-luxe p-8 text-sm text-muted-foreground">
          No inquiries match this filter.{" "}
          {status === "" && !search && (
            <>If this is a fresh deployment, the <code>leads</code> table may not exist yet — run{" "}
            <code>supabase/migrations/0001_leads.sql</code>.</>
          )}
        </div>
      )}

      <div className="space-y-3">
        {leads.map((lead) => (
          <LeadRow
            key={lead.id}
            lead={lead}
            expanded={open === lead.reference}
            onToggle={() => setOpen(open === lead.reference ? null : lead.reference)}
            onSaved={() => void load()}
          />
        ))}
      </div>

      <div className="mt-8 text-xs text-muted-foreground">
        Buyer-facing status page: <Link to="/track-inquiry" className="text-gold hover:underline">/track-inquiry</Link>.
        Shipment reference and stage note entered here are what that page shows.
      </div>
    </div>
  );
}

function LeadRow({
  lead,
  expanded,
  onToggle,
  onSaved,
}: {
  lead: LeadRecord;
  expanded: boolean;
  onToggle: () => void;
  onSaved: () => void;
}) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Array<KycDocument & { url: string | null }> | null>(null);
  const [documentsError, setDocumentsError] = useState<string | null>(null);
  const docsRequested = useRef(false);
  const [form, setForm] = useState({
    status: lead.status,
    stageNote: lead.stageNote ?? "",
    shipmentRef: lead.shipmentRef ?? "",
    carrier: lead.carrier ?? "",
  });

  // Signed URLs expire in five minutes, so files are fetched each time a row opens
  // rather than cached with the list.
  useEffect(() => {
    if (!expanded || docsRequested.current) return;
    docsRequested.current = true;
    adminListKycDocuments({ data: { reference: lead.reference } })
      .then(setDocuments)
      .catch((err) => {
        setDocuments([]);
        setDocumentsError(errorMessage(err));
      });
  }, [expanded, lead.reference]);

  async function save() {
    setSaving(true);
    setError(null);
    try {
      await adminUpdateLead({ data: { reference: lead.reference, ...form } });
      onSaved();
    } catch (err) {
      reportClientError(err, { surface: "admin-leads-update", reference: lead.reference });
      setError(errorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card-luxe p-5">
      <button type="button" onClick={onToggle} className="w-full text-left">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="font-display text-gold">{lead.reference}</span>
            <span className="text-sm">{lead.name}</span>
            {lead.company && <span className="text-xs text-muted-foreground">· {lead.company}</span>}
            <StageBadge status={lead.status} />
          </div>
          <div className="text-xs text-muted-foreground">
            {kindLabel(lead)} · {new Date(lead.createdAt).toLocaleString("en-GB")}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="mt-5 border-t border-border/60 pt-5 grid lg:grid-cols-2 gap-8">
          <div className="space-y-2 text-sm">
            <Detail label="Email" value={lead.email} href={`mailto:${lead.email}`} />
            {lead.phone && <Detail label="Phone" value={lead.phone} href={`tel:${lead.phone}`} />}
            {lead.country && <Detail label="Country" value={lead.country} />}
            {lead.destination && <Detail label="Destination" value={lead.destination} />}
            {lead.product && <Detail label="Product" value={lead.product} />}
            {lead.purity && <Detail label="Purity" value={lead.purity} />}
            {lead.quantityKg != null && <Detail label="Quantity" value={`${lead.quantityKg} kg`} />}
            {lead.indicativeUsd != null && <Detail label="Indicative" value={`US$ ${lead.indicativeUsd.toLocaleString("en-US")}`} />}
            {lead.delivery && <Detail label="Delivery" value={lead.delivery} />}
            {lead.topic && <Detail label="Topic" value={lead.topic} />}
            {lead.sourcePage && <Detail label="Source page" value={lead.sourcePage} />}
            {(lead.notes ?? lead.message) && (
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-1">Message</div>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{lead.notes ?? lead.message}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <label className="block text-sm">
              <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Stage</span>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as LeadStatus })}
                className="w-full bg-background border border-border px-3 py-2.5 focus:border-gold outline-none"
              >
                {LEAD_STATUSES.map((s) => (
                  <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                ))}
              </select>
            </label>

            <label className="block text-sm">
              <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">
                Stage note <span className="normal-case tracking-normal text-muted-foreground">(visible to the buyer)</span>
              </span>
              <textarea
                rows={3}
                value={form.stageNote}
                onChange={(e) => setForm({ ...form, stageNote: e.target.value })}
                className="w-full bg-background border border-border px-3 py-2.5 text-sm focus:border-gold outline-none resize-none"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">
                <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Shipment ref</span>
                <input
                  value={form.shipmentRef}
                  onChange={(e) => setForm({ ...form, shipmentRef: e.target.value })}
                  className="w-full bg-background border border-border px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Carrier</span>
                <input
                  value={form.carrier}
                  onChange={(e) => setForm({ ...form, carrier: e.target.value })}
                  className="w-full bg-background border border-border px-3 py-2.5 text-sm focus:border-gold outline-none"
                />
              </label>
            </div>

            {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
            <button type="button" onClick={save} disabled={saving} className="btn-gold w-full disabled:opacity-60">
              {saving ? "Saving…" : "Save updates"}
            </button>
          </div>

          <div className="lg:col-span-2 border-t border-border/60 pt-5">
            <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-3">KYC documents</div>
            {documentsError && (
              <p role="alert" className="text-xs text-destructive">{documentsError}</p>
            )}
            {!documents && !documentsError && (
              <p className="text-xs text-muted-foreground">Loading…</p>
            )}
            {documents && documents.length === 0 && !documentsError && (
              <p className="text-xs text-muted-foreground">
                Nothing uploaded against this reference. Buyers post files at{" "}
                <Link to="/upload-documents" className="text-gold hover:underline">/upload-documents</Link>.
              </p>
            )}
            {documents && documents.length > 0 && (
              <ul className="space-y-2 text-sm">
                {documents.map((document) => (
                  <li key={document.id} className="flex flex-wrap items-baseline gap-3">
                    {document.url ? (
                      <a href={document.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                        {document.fileName}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{document.fileName} (link unavailable)</span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {(document.sizeBytes / 1024 / 1024).toFixed(2)} MB · {document.uploadedBy} ·{" "}
                      {new Date(document.uploadedAt).toLocaleString("en-GB", { timeZone: "Africa/Nairobi" })}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StageBadge({ status }: { status: LeadStatus }) {
  const inPipeline = PIPELINE_STATUSES.includes(status);
  return (
    <span
      className={
        inPipeline
          ? "text-[10px] tracking-[0.18em] uppercase border border-gold/50 text-gold px-2 py-0.5"
          : "text-[10px] tracking-[0.18em] uppercase border border-border text-muted-foreground px-2 py-0.5"
      }
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-[10px] tracking-[0.24em] uppercase text-gold w-28 shrink-0 pt-0.5">{label}</span>
      {href ? (
        <a href={href} className="text-muted-foreground hover:text-gold break-all">{value}</a>
      ) : (
        <span className="text-muted-foreground">{value}</span>
      )}
    </div>
  );
}

function kindLabel(lead: LeadRecord) {
  if (lead.kind === "quote") return "Quote request";
  if (lead.kind === "calculator") return "Calculator lead";
  return "Contact form";
}

function errorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}
