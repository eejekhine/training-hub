-- Training Hub — Supabase schema
-- Run this once in your Supabase project's SQL editor (left sidebar → SQL Editor → New query → Run).
--
-- Honest note on security: the anon key these tables trust gets embedded in your
-- site's public JS source, since GitHub Pages' free tier requires a public repo.
-- These policies let that key fully read/write these three tables. There's nothing
-- sensitive stored here — budget categories/amounts and workout numbers, no account
-- details — so that's a reasonable trade-off for a personal single-user app, just
-- worth knowing rather than assuming it's private.

create extension if not exists "pgcrypto";

create table if not exists workout_sessions (
  id uuid primary key default gen_random_uuid(),
  tool text not null,           -- 'hooper-programme' | 'couples-routine'
  split text,                   -- e.g. 'push' | 'pull' | 'legs' | 'day-a' | 'day-b' | 'day-c'
  date date not null,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists personal_records (
  id uuid primary key default gen_random_uuid(),
  tool text not null,
  exercise text not null,
  value numeric not null,
  unit text,                    -- 'kg' | 'reps' | 'cm' | etc.
  date date not null,
  created_at timestamptz not null default now()
);

create table if not exists budget_entries (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('income', 'outgoing')),
  category text,
  label text not null,
  amount numeric not null,
  date date not null,
  created_at timestamptz not null default now()
);

alter table workout_sessions enable row level security;
alter table personal_records enable row level security;
alter table budget_entries enable row level security;

create policy "anon full access" on workout_sessions for all using (true) with check (true);
create policy "anon full access" on personal_records for all using (true) with check (true);
create policy "anon full access" on budget_entries for all using (true) with check (true);
