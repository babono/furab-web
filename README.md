# furab-web

Marketing site for **FURAB — for your baby**, an iOS baby-tracking app.

The pitch is **THR: Track, Highlight, Remind**.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4. Fully static —
`next build` prerenders the single route, so it deploys anywhere.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
```

## Brand

Tokens in `src/app/globals.css` are lifted from the app's `Theme.swift` so the
site and the product read as one thing:

| Token | Value | Use |
| --- | --- | --- |
| `--brand` | `#0abba5` | Teal. Actions only, as in the app. |
| `--boy` / `--girl` | `#a3c7e5` / `#f2a3b4` | The gender accents the app themes itself with. |
| `--ink` | `#111116` | Primary text. |
| `--page` | `#ededf0` | Page background. |

Two effects are ported from the app rather than reinvented:

- **`.mesh`** approximates the launch screen's animated `MeshGradient` with two
  radial blooms moved by `translate3d` on non-harmonic cycles (7s / 9s).
  Animating gradient *positions* instead — even via `@property` — repaints the
  whole element every frame, which flickered on a large hero. Soft edges come
  from the radial-gradient itself, not a blur filter, which would re-rasterise
  as the layer moves.
- **`.coin`** is the smiley behind the hero, turning on its vertical axis like
  a coin. Depth is faked by stacking five masked copies at different
  `translateZ` values under `preserve-3d`; they separate as it turns, which
  reads as thickness. CSS cannot extrude a real edge. The mark is left-right
  symmetric, so the reverse face needs no special handling.
- **`.glass-mark`** reproduces `GlassMark`: the smiley SVG is used as a *mask*
  with the glass layered underneath, so the gradient reads through the
  knocked-out eyes and mouth.

Both honour `prefers-reduced-motion`.

## Deployment

Deploys to Vercel as-is — no build configuration needed. The production domain
is `furab.app`; it is hardcoded in `metadataBase` (`src/app/layout.tsx`),
`sitemap.ts` and `robots.ts`, so change it in those three places if the domain
ever moves.

## Assets

`public/screenshots/` holds web-optimised captures (max 1200px) in two sets,
`girl/` (Cia, pink) and `boy/` (Cio, blue) — the app themes itself by the
baby's gender, and the site picks one at random on every load as an easter
egg. The choice is made after mount, not during render: the page is
prerendered, so picking at render time would bake one variant into the HTML
and mismatch on hydration.

The full-resolution 1320 × 2868 originals for App Store Connect live in the app
repo under `AppStore/screenshots/6.9-inch/`.

`public/brand/` holds the logo mark, wordmark and app icon, copied from the
app's asset catalogue. `logo-furab-wordmark.png` is `logo-text-furab.png`
cropped to just the FURAB lettering, for the header; the uncropped original is
kept as the source to re-crop from.

Favicons live in `src/app/` under Next's file conventions (`icon.svg`,
`icon.png`, `favicon.ico`, `apple-icon.png`) — there is no `icons` field in the
metadata. The browser-tab icons put the smiley on **brand teal** rather than
reusing the app icon: the app icon's pale gradient is unreadable at 16px.
`apple-icon.png` does use the real app icon, so a home-screen bookmark matches
the installed app. `icon.svg` is generated from the same logo path the app
ships, so it cannot drift from the mark.
