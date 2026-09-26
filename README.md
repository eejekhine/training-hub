# Training Hub

One home-screen app linking out to everything you've built — the Dashboard,
training, and life admin — plus workout logging, PRs and an editable budget,
all saved to a small database of your own so it's the same data wherever you
open it from. Static site, no build step.

## 1. Get it on GitHub Pages (one-time setup)

1. Go to https://github.com/new and create a repository (e.g. `training-hub`).
   Keep it **public** (required for free GitHub Pages) and don't add a README.
2. Push this whole folder to it:
   ```
   cd "Training hub"
   git init
   git add .
   git commit -m "Training hub v2 — copper/Fraunces redesign, Supabase-backed"
   git branch -M main
   git remote add origin https://github.com/<your-username>/training-hub.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings → Pages** → under "Build and
   deployment", set Source to **Deploy from a branch**, branch `main`,
   folder `/ (root)` → Save.
4. Wait ~1 minute, then your app is live at:
   `https://<your-username>.github.io/training-hub/`

## 2. Connect the backend (Supabase — free tier)

Budget entries, workout sessions and PRs are saved to a small Supabase
database rather than just your browser, so they're the same wherever you
open the Hub from.

1. Go to https://supabase.com → sign up (free, no card needed) → **New
   project**. Pick any name/region, set a database password (you won't need
   it day to day — Supabase generates the API keys you actually use).
2. Once it's created: left sidebar → **SQL Editor** → **New query** → paste
   in the contents of `supabase-schema.sql` (in this folder) → **Run**.
   That creates the three tables the Hub needs.
3. Left sidebar → **Project Settings → API**. Copy the **Project URL** and
   the **anon public** key.
4. Open `config.js` in this folder and paste them in:
   ```js
   window.SUPABASE_URL = "https://xxxxxxxx.supabase.co";
   window.SUPABASE_ANON_KEY = "eyJ...";
   ```
5. Commit and push that change (`git add config.js && git commit -m "connect backend" && git push`).

Until you do this, the Budget Plan and the Log tabs on Hooper Programme /
Couples Routine still work and show what you type — they just show a banner
saying nothing's being saved, and it isn't, until `config.js` has real values.

**Worth knowing:** because GitHub Pages' free tier needs a public repo, that
anon key ends up visible in your site's public source. `supabase-schema.sql`
sets policies that let it fully read/write the three tables. There's nothing
sensitive in them — budget categories and amounts, workout numbers, no
account details — so that's a reasonable trade-off for a personal
single-user app, just worth knowing rather than assuming it's private.

## 3. Add it to your phone home screen

- **iPhone (Safari):** open the link above → Share icon → **Add to Home
  Screen**.
- **Android (Chrome):** open the link → ⋮ menu → **Add to Home screen** /
  **Install app**.

## 4. What's in it right now

- **EJx10k Dashboard** — pinned, opens the live claude.ai artifact.
- **Hooper Programme** and **Couples Routine** — the original programmes,
  now with a **Log** tab: log a session (date, split, notes) and add PRs.
  Saved to Supabase once step 2 above is done.
- **Budget Plan** — fully editable: add income/outgoing entries, see
  totals and net, delete entries. Saved to Supabase.
- **Food Plan** and **Uni Study** — placeholder tiles for now, not built yet.

Not included in this rebuild: **Vert Lab**, **Shift Hooper**, and the
uni/work decision framework — out of scope per the trimmed-down plan (26
Sep). Their old files are still sitting in this folder untouched if you want
them back later; just add an entry for them in `tools.json`.

## 5. Adding a new tool later

Add one entry to `tools.json` (name, description, category, href) and drop
the tool's `.html` file into `files/`. The launcher reads `tools.json` on
load — no code changes needed.

## 6. Files in this folder

- `index.html`, `manifest.json`, `sw.js`, `tools.json` — the launcher (PWA).
- `hub-data.js`, `config.js`, `supabase-schema.sql` — the shared backend layer.
- `files/budget-plan.html` — editable budget.
- `files/hooper-programme.html`, `files/couples-routine.html` — the two
  training tools, redesigned wrapper kept as-is, Log tab added.
- `files/food-plan.html`, `files/uni-study.html` — placeholders.
- `icon-192.png`, `icon-512.png` — home-screen icons (unchanged from before).
