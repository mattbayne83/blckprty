# Blck Prty Website

Pre-order / hype site for **Jon's flat-pack street ramp** — the OBP (Original Blck Prty). Two visual treatments, one bundle, toggle in the nav.

- Safe (default): `http://localhost:5176/`
- Loud: `http://localhost:5176/?v=loud`

## Stack

React 19 · TypeScript 5.9 · Vite 7 · Tailwind 4 · Big Shoulders Stencil Display / Archivo / JetBrains Mono.

## Run

```bash
npm install
npm run dev    # vite, picks first open port from 5173+
npm run build  # static output in dist/
npm run lint
```

## Architecture

See [`CLAUDE.md`](./CLAUDE.md). TL;DR:

- `src/data/content.ts` — single source for copy, price, ship date, specs, quotes.
- `src/components/` — `Countdown`, `Scrubber`, `SignupForm`, `HeroPhoto`, `RampDiagram`, `VariationToggle`.
- `src/variations/{Safe,Loud}Variation.tsx` + scoped `.safe` / `.loud` CSS so both treatments coexist.
- `src/styles/{tokens,components,site}.css` — brand tokens + shared component CSS, ported from the design bundle verbatim.

## Roadmap

- Drop a real photo of Jon's prototype, replace `<HeroPhoto />` in both variations.
- Wire `SignupForm` to Klaviyo / Mailchimp / Beehiiv.
- Back the `$50` reserve button with Stripe Checkout or Shopify.

## Deploy

`npm run build`, drag `dist/` to Netlify Drop / Vercel / Cloudflare Pages.
