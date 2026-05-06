# Yale SOM Consulting Club — Website

A modern, premium-feeling marketing site for the Yale SOM Consulting Club.
Built to feel closer to McKinsey / Bain / Yale SOM's own brand than a
templated Squarespace, while staying simple enough for next year's leadership
to maintain.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build & dev server)
- **Tailwind CSS** (utility-first styling, custom Yale-inspired tokens)
- **Framer Motion** (subtle entrance & hover animations)
- **lucide-react** (icon set)

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

Node 18+ recommended.

## Project structure

```
.
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── src/
    ├── App.tsx                  # composes all sections
    ├── main.tsx                 # entry
    ├── index.css                # Tailwind layers + design tokens
    ├── lib/utils.ts             # cn() class-name helper
    ├── data/                    # all editable site content
    │   ├── nav.ts
    │   ├── recruiting.ts
    │   ├── events.ts
    │   ├── leadership.ts
    │   ├── sponsors.ts
    │   ├── stats.ts
    │   └── faq.ts
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── Mission.tsx
        ├── Stats.tsx
        ├── Recruiting.tsx
        ├── Events.tsx           # programming timeline + calendar preview
        ├── Leadership.tsx
        ├── Sponsors.tsx         # gold / silver tiers
        ├── FAQ.tsx              # accordion
        ├── JoinCTA.tsx
        ├── Footer.tsx
        └── ui/
            ├── Container.tsx
            └── SectionHeader.tsx
```

## How to update content (no React knowledge required)

All editable copy lives in `src/data/*.ts`. To update the site, just edit
those files and redeploy.

| What you want to change          | File to edit                |
| -------------------------------- | --------------------------- |
| Top nav links                    | `src/data/nav.ts`           |
| Recruiting resource cards        | `src/data/recruiting.ts`    |
| Programming / events timeline    | `src/data/events.ts`        |
| Leadership board                 | `src/data/leadership.ts`    |
| Sponsor list & tiers             | `src/data/sponsors.ts`      |
| Stats strip                      | `src/data/stats.ts`         |
| FAQ items                        | `src/data/faq.ts`           |
| Mission statement copy           | `src/components/Mission.tsx`|
| Hero headline & meta strip       | `src/components/Hero.tsx`   |
| Footer email / socials           | `src/components/Footer.tsx` |

### Adding leadership headshots

`Leadership.tsx` currently renders an initials placeholder for each board
member. To add real headshots, drop the photo into `public/leadership/` and
extend the `Leader` type in `src/data/leadership.ts` with `image: "/leadership/your-name.jpg"`,
then render it inside the portrait `<div>` in `Leadership.tsx`.

### Adding sponsor logos

Sponsor tiles use a typographic placeholder by default so the layout never
breaks. To use a real logo, place an SVG in `public/sponsors/` and extend
`Sponsor` in `src/data/sponsors.ts` with `logo: "/sponsors/firm.svg"`,
then render that image inside `SponsorLogoMark` in `Sponsors.tsx`. The
grayscale-to-color hover is already wired up via Tailwind classes.

## Design system

- **Palette**: deep Yale-inspired navy (`#0a1a2f`), ivory (`#fbfaf7`),
  warm gold accent (`#b58e5f`). All tokens live in `tailwind.config.js`.
- **Type**: `Fraunces` (display serif) + `Inter` (body sans), loaded from
  Google Fonts in `index.html`.
- **Motion**: subtle fade-up entrances on scroll, gentle gradient pans on
  dark sections, no bouncy or "startup-y" effects.
- **Components**: every section uses shared `Container` and `SectionHeader`
  primitives so spacing and rhythm stay consistent.

## Deployment

The site is a fully static SPA. After `npm run build`, deploy the `dist/`
folder to any static host:

- Vercel / Netlify (zero-config)
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages

No backend or environment variables required.

## License

Internal — Yale SOM Consulting Club.
