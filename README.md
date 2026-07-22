# Ashil c k — Portfolio (Next.js)

A Next.js (App Router) rebuild of the original Framer site, with:

- Next.js 14 + TypeScript + Tailwind CSS
- `next/font` for Space Grotesk (display), Inter (body), JetBrains Mono (labels/mono)
- `next/image` pulling the original project screenshots straight from the Framer CDN
- A copy-to-clipboard email button (client component) mirroring the original's "Copy / Copied" interaction
- A masonry-style work gallery, subtle rotating gradient ring on the avatar, and scroll-in animations that respect `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx      — fonts + metadata
  page.tsx        — assembles the sections
  globals.css     — Tailwind + base styles
components/
  Hero.tsx        — avatar, name, bio, socials
  Contact.tsx     — "interested in working together" card
  CopyEmail.tsx   — clipboard copy button (client component)
  Gallery.tsx     — work screenshots + video
  Footer.tsx
```

## Notes

- The gallery currently references the original project's hosted images (framerusercontent.com) so it renders immediately. Swap the `shots` array in `components/Gallery.tsx` for your own images/CDN whenever you'd like to fully self-host.
- The "Book a call" button points to a placeholder (`https://cal.com`) — replace with your real scheduling link.
- Update the accent color (`accent` in `tailwind.config.ts`) to restyle the whole site from one place.
