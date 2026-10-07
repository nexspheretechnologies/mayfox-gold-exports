-- Mayfox lead capture. Apply with:  supabase db push   (or paste into the SQL editor)
-- Access model: the browser never talks to PostgREST directly. Server functions write
-- and read with the service-role key, so RLS denies every anon/authenticated role here
-- and the trade-desk allowlist (LEAD_STAFF_EMAILS) is enforced in application code.

create table if not exists public.leads (
  id               uuid primary key default gen_random_uuid(),
  reference        text not null unique,
  kind             text not null check (kind in ('quote', 'contact', 'calculator')),
  status           text not null default 'new' check (status in (
                     'new','reviewed','kyc_requested','quoted','in_contract',
                     'shipped','closed_won','closed_lost','spam')),
  name             text not null,
  email            text not null,
  phone            text,
  company          text,
  country          text,
  destination      text,
  product          text,
  purity           text,
  quantity_kg      numeric check (quantity_kg is null or quantity_kg > 0),
  indicative_usd   numeric check (indicative_usd is null or indicative_usd >= 0),
  delivery         text,
  topic            text,
  notes            text,
  message          text,
  stage_note       text,
  shipment_ref     text,
  carrier          text,
  source_page      text,
  ip_hash          text,
  user_agent       text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_email_idx on public.leads (lower(email));
create index if not exists leads_ip_window_idx on public.leads (ip_hash, created_at desc);

create table if not exists public.newsletter_subscribers (
  email       text primary key,
  source_page text,
  created_at  timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- No policies are granted to anon or authenticated roles on purpose: any read that
-- does not pass through the server function must be refused by Postgres itself.
