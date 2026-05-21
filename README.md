# jmy-web

Landing page + legal pages for **jmy** — `https://jmy.app`.

Static-exported Next.js (App Router, TypeScript, Tailwind 4). No server, no SSR, no runtime. Deploys to any static host.

This repo is a git submodule of the parent [`gabyng1510/jmy`](https://github.com/gabyng1510/jmy) at `web/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # → ./out (static bundle)
npm run lint
```

## Routes

- `/` — landing (hero + value prop + how-it-works)
- `/privacy/` — privacy policy (plain english)
- `/terms/` — terms of service (plain english)

## Editing the legal pages

The privacy + terms copy lives at:

- `app/privacy/page.tsx`
- `app/terms/page.tsx`

Each page uses the shared `LegalShell` + `Section` components from `components/Legal.tsx`. To bump the "last updated" date, edit the `updated="…"` prop at the top of each page.

When jmy incorporates and counsel rewrites these:

- delete the italic "we're not a Real Company™ yet" banner (the `banner=…` prop)
- add governing-law / arbitration / liability-cap sections
- add the company's registered name + postal address

## Branding

- **Display font**: `Chubbo-Bold` (next/font/local) — copied from iOS app `DesignSystem/Fonts/`. Use sparingly, for headlines + the wordmark.
- **Body font**: `Supreme` (Light / Regular / Medium / Bold, next/font/local) — copied from iOS app `DesignSystem/Fonts/`. Use for everything else.
- **Colors** (defined in `app/globals.css` via Tailwind 4 `@theme`, mirroring `ios/jmy/DesignSystem/Tokens/JmyColor.swift`):
  - `bg` cream `#fff5ec`, `surface` white
  - `teal` `#14b8a6`, `teal-deep` `#0f766e`, `teal-light` `#5eead4` — primary brand color
  - `ink` `#111827`, `ink-soft` `#4b5563`, `ink-mute` `#9ca3af`
  - `success`, `destructive`, `warning` — status colors, also matching iOS
- **Icons**: `@phosphor-icons/react` (`weight="duotone"` on web — matches the iOS app's icon language while adding a bit more personality at desktop sizes).
- **Voice**: lowercase, verb-forward. See `../CLAUDE.md` at the parent repo for the full rules.

When the iOS design system gains a new token, mirror it here (and vice versa). The web should never drift from the app.

## Assets

- `public/jmy-wordmark.svg` — text-rendered placeholder. Replace with the real wordmark when ready.
- `app/favicon.ico` — Next.js default placeholder. Replace with a real one.

## Deploy

**Recommended: Vercel.**

```bash
npx vercel link
npx vercel --prod
```

Custom domain (jmy.app): follow Vercel's DNS instructions in the project dashboard.

**Alternatives** (all consume the `./out` bundle from `npm run build`):

- **Cloudflare Pages** — connect this repo in the Cloudflare dashboard, build command `npm run build`, output dir `out`
- **GitHub Pages / S3 / Netlify / any static host** — upload `out/`

## Stack

- Next.js 16 (App Router, static export via `output: "export"`)
- React 19
- Tailwind 4 (`@tailwindcss/postcss`)
- TypeScript 5
- `next/font/google` for self-hosted Outfit + Inter

## Project conventions

Read `AGENTS.md` — Next.js 16 has breaking changes vs older training data. Check `node_modules/next/dist/docs/` before guessing at APIs.
