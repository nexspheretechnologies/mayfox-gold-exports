-- Mayfox KYC document intake. Apply with:  supabase db push   (or paste into the SQL editor)
--
-- Buyers upload compliance documents (certificate of incorporation, passport, authority to
-- sign) against an existing inquiry reference. Files go to a private Storage bucket through a
-- short-lived signed upload URL minted by the server function; the row below is the audit trail
-- and is what the trade desk inbox lists.
--
-- After applying, regenerate the client types so src/integrations/supabase/types.ts matches:
--   supabase gen types typescript --linked --schema public > src/integrations/supabase/types.ts
-- (This file has been hand-written to match the table below, which is why the shapes must agree.)

create table if not exists public.kyc_documents (
  id            uuid primary key default gen_random_uuid(),
  reference     text not null references public.leads (reference) on delete cascade,
  -- Storage object key inside the bucket: <REFERENCE>/<timestamp>-<sanitised filename>
  file_path     text not null unique,
  file_name     text not null,
  content_type  text not null,
  size_bytes    bigint not null check (size_bytes > 0 and size_bytes <= 15728640),
  uploaded_by   text not null default 'buyer' check (uploaded_by in ('buyer', 'desk')),
  ip_hash       text,
  created_at    timestamptz not null default now()
);

create index if not exists kyc_documents_reference_idx on public.kyc_documents (reference, created_at desc);
create index if not exists kyc_documents_ip_window_idx on public.kyc_documents (ip_hash, created_at desc);

alter table public.kyc_documents enable row level security;
-- Deliberately no policies: anon and authenticated roles cannot read or write this table at
-- all. Every access goes through a server function using the service-role key, and the staff
-- allowlist (LEAD_STAFF_EMAILS) is enforced in application code.

-- The bucket itself. Signed upload URLs are authorised by their token, so no storage policy is
-- needed (or wanted) for the anon role. Skip this statement if you create "kyc-documents" from
-- the dashboard instead — the server reads the name from KYC_BUCKET when it is not "kyc-documents".
insert into storage.buckets (id, name, public)
values ('kyc-documents', 'kyc-documents', false)
on conflict (id) do nothing;
