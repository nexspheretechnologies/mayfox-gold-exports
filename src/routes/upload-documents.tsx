import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { finishKycUpload, listKycDocuments, startKycUpload } from "../lib/kyc-functions";
import { KYC_ALLOWED_TYPES, KYC_MAX_BYTES, type KycDocument } from "../lib/lead-schema";
import { breadcrumbSchema, pageSeo } from "../lib/seo";
import { track } from "../lib/analytics";

export const Route = createFileRoute("/upload-documents")({
  // The tracking page and the confirmation email can hand the reference straight over.
  validateSearch: (search: Record<string, unknown>): { reference?: string } => {
    const reference =
      typeof search.reference === "string" ? search.reference.trim().toUpperCase().slice(0, 20) : "";
    return reference ? { reference } : {};
  },
  head: () => {
    const seo = pageSeo({
      title: "Upload KYC & Compliance Documents | Mayfox Gold Kenya",
      description:
        "Securely upload the KYC and compliance documents the Mayfox trade desk has requested against your inquiry reference — certificate of incorporation, signatory ID, authority to sign, bank reference or import authorisation.",
      path: "/upload-documents",
      keywords: "gold buyer kyc, upload compliance documents, certificate of incorporation gold purchase, import authorisation gold kenya",
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
              { name: "Upload Documents", path: "/upload-documents" },
            ]),
          ),
        },
      ],
    };
  },
  component: UploadDocuments,
});

const TYPICAL = [
  ["Certificate of incorporation", "Or the registry extract your bank accepts, showing directors and shareholders."],
  ["Signatory identification", "Passport or national ID for the person who will sign and pay."],
  ["Authority to sign", "Board resolution or power of attorney if the signer is not a director."],
  ["Bank reference or KYC form", "Whichever your side normally exchanges before a first settlement."],
  ["Import authorisation", "The licence, permit or dealer registration covering unworked gold in your jurisdiction."],
];

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function errorMessage(error: unknown) {
  if (error instanceof Error && error.message) return error.message;
  return "Something went wrong. Please try again or call the trade desk.";
}

function UploadDocuments() {
  const [reference, setReference] = useState(Route.useSearch().reference ?? "");
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [documents, setDocuments] = useState<KycDocument[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function refresh() {
    setDocuments(await listKycDocuments({ data: { reference, email } }));
  }

  async function onVerify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      setDocuments(await listKycDocuments({ data: { reference, email } }));
      setVerified(true);
      track("kyc_verify", {});
    } catch (err) {
      setError(errorMessage(err));
      setVerified(false);
    } finally {
      setBusy(false);
    }
  }

  async function onUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const file = new FormData(event.currentTarget).get("document");
    if (!(file instanceof File) || file.size === 0) {
      setError("Choose a file first.");
      return;
    }
    if (!KYC_ALLOWED_TYPES.includes(file.type as (typeof KYC_ALLOWED_TYPES)[number])) {
      setError("Please upload a PDF, JPEG or PNG file.");
      return;
    }
    if (file.size > KYC_MAX_BYTES) {
      setError("That file is larger than 15 MB. Please compress or split it before uploading.");
      return;
    }

    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const slot = await startKycUpload({
        data: { reference, email, fileName: file.name, sizeBytes: file.size, contentType: file.type },
      });
      const { error: uploadError } = await supabase.storage
        .from(slot.bucket)
        .uploadToSignedUrl(slot.path, slot.token, file, { contentType: file.type || "application/octet-stream" });
      if (uploadError) throw new Error(uploadError.message);

      await finishKycUpload({
        data: { reference, email, path: slot.path, fileName: file.name, sizeBytes: file.size, contentType: file.type },
      });
      await refresh();
      setNotice(`${file.name} is with the trade desk.`);
      track("kyc_upload", { size: file.size });
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section-y">
      <div className="container-x max-w-3xl">
        <div className="eyebrow mb-4">Document Intake</div>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Upload your <span className="text-gradient-gold">KYC documents</span>
        </h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Once the desk has reviewed your requirement, compliance documents can be sent here instead
          of by email. Enter the reference issued to you together with the address on the inquiry —
          both are needed before anything can be uploaded or listed.
        </p>

        <div className="card-luxe p-8 mb-8">
          <form onSubmit={onVerify} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Reference</span>
                <input
                  value={reference}
                  onChange={(event) => setReference(event.target.value.toUpperCase())}
                  placeholder="MF-2026-AB3CD"
                  autoComplete="off"
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">Email on the inquiry</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold outline-none"
                />
              </label>
            </div>
            <button type="submit" disabled={busy} className="btn-gold w-full disabled:opacity-60">
              {busy && !verified ? "Checking…" : verified ? "Refresh documents" : "Open my document list"}
            </button>
          </form>
        </div>

        {error && (
          <p role="alert" className="text-sm text-destructive border border-destructive/40 px-4 py-3 mb-8">
            {error}
          </p>
        )}
        {notice && (
          <p className="text-sm text-gold border border-gold/40 px-4 py-3 mb-8">{notice}</p>
        )}

        {verified && (
          <div className="card-luxe p-8 mb-8 space-y-6">
            <div className="text-[10px] tracking-[0.24em] uppercase text-gold">Upload a document</div>
            <form onSubmit={onUpload} className="space-y-4">
              <input
                type="file"
                name="document"
                accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                required
                className="w-full bg-background border border-border px-4 py-3 text-sm file:mr-4 file:bg-transparent file:text-gold file:border-0 outline-none"
              />
              <p className="text-xs text-muted-foreground">PDF, JPEG or PNG · up to 15 MB · up to 12 files per inquiry.</p>
              <button type="submit" disabled={busy} className="btn-outline-gold w-full disabled:opacity-60">
                {busy ? "Uploading…" : "Upload"}
              </button>
            </form>

            <div className="border-t border-border/60 pt-6">
              <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-4">
                On file ({documents.length})
              </div>
              {documents.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Nothing has been received against {reference} yet.
                </p>
              ) : (
                <ul className="space-y-2.5">
                  {documents.map((document) => (
                    <li key={document.id} className="flex flex-wrap items-baseline justify-between gap-3 text-sm">
                      <span>{document.fileName}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatBytes(document.sizeBytes)} ·{" "}
                        {new Date(document.uploadedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          timeZone: "Africa/Nairobi",
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        <div className="card-luxe p-8 mb-8">
          <div className="text-[10px] tracking-[0.24em] uppercase text-gold mb-4">What the desk usually asks for</div>
          <dl className="space-y-4">
            {TYPICAL.map(([title, body]) => (
              <div key={title}>
                <dt className="text-sm font-medium">{title}</dt>
                <dd className="text-xs text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-muted-foreground mt-6 border-t border-border/60 pt-4">
            Uploading here does not complete compliance on its own: a trader reviews what arrives and
            tells you if anything is missing. Files sit in a private bucket, are visible only to the
            trade desk, and are never attached to outgoing email. If you would rather send documents
            by an agreed secure channel, ask the desk on{" "}
            <a href="mailto:sales@mayfox.co.ke" className="text-gold hover:underline">sales@mayfox.co.ke</a>.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          Lost your reference, or want to check where the review stands?{" "}
          <Link to="/track-inquiry" className="text-gold hover:underline">Track your inquiry</Link>.
        </div>
      </div>
    </section>
  );
}
