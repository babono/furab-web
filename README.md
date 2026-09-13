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

- **`.mesh`** approximates the launch screen's animated `MeshGradient` with
  three large radial blooms on slow, non-harmonic cycles.
- **`.glass-mark`** reproduces `GlassMark`: the smiley SVG is used as a *mask*
  with the glass layered underneath, so the gradient reads through the
  knocked-out eyes and mouth.

Both honour `prefers-reduced-motion`.

## Assets

`public/screenshots/` holds web-optimised captures (max 1200px). The
full-resolution 1320 × 2868 originals for App Store Connect live in the app
repo under `AppStore/screenshots/6.9-inch/`.

`public/brand/` holds the logo mark, wordmark and app icon, copied from the
app's asset catalogue.
