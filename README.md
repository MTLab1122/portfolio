# Muhammad Talha — Portfolio

A fast, static portfolio site built with **Astro**, **Tailwind CSS v4**, and **TypeScript**.

## Stack

- **Astro** — static site generator, ships zero JS by default
- **Tailwind CSS v4** — via the official Vite plugin, theme tokens in `src/styles/global.css`
- **TypeScript** — strict mode
- **astro-icon** + Lucide — icon set
- **GSAP** — homepage-only intro, pinned work track, scroll depth, and card interaction timelines
- **Fontsource** — self-hosted fonts (Space Grotesk, Inter, IBM Plex Mono), no external font requests

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to ./dist
npm run preview   # preview the production build
```

## Editing content

Almost everything on the page — name, bio, skills, experience, education, projects, contact
links — lives in one file:

```
src/data/profile.ts
```

Edit that file and every section updates automatically. No need to touch component markup
for text changes.

### Adding real projects

`projects` in `src/data/profile.ts` currently has three placeholder entries. Replace `title`,
`description`, `tags`, `href` (live link) and `repo` (GitHub link) with your real work. Mark
your strongest project `featured: true` — it gets the dark highlight card.

### Swapping the resume PDF

Replace `public/Muhammad-Talha-Resume.pdf` with an updated file of the same name, or update
`resumeUrl` in `src/data/profile.ts` if you rename it.

## Project structure

```
src/
├── components/       # one component per section (Hero, About, Skills, Work, Experience, Contact...)
├── data/profile.ts   # all site content, typed
├── layouts/Layout.astro   # <head>, fonts, global scroll-reveal script
├── styles/global.css # design tokens (colors, fonts, radii) as a Tailwind v4 @theme block
└── pages/index.astro # assembles the sections into the page
```

## Design tokens

Colors, fonts, and radii are all defined once in `src/styles/global.css` under `@theme`.
Change a value there and it updates everywhere (e.g. change `--color-lime` to re-theme the
whole accent color).

## Motion system

The homepage layers motion progressively:

- `src/layouts/Layout.astro` owns the lightweight reveal observer, intro session guard, and scroll progress.
- `src/scripts/home-motion.ts` lazy-loads GSAP only on the homepage and adds the cinematic intro, hero parallax, pinned desktop work track, cursor follower, card tilt, and active-section state.
- `src/styles/global.css` owns the CSS fallback motion, responsive work-track layout, and the hard `prefers-reduced-motion` brake.

To tune the feel, adjust the GSAP durations and scrub values in `src/scripts/home-motion.ts`, then adjust the shared easing and color variables in `src/styles/global.css`. The work track becomes a normal responsive grid below `900px`; pointer effects are disabled on coarse pointers and all major motion is disabled for reduced-motion users.

## SEO checklist

- Homepage metadata targets software engineer portfolio and frontend developer searches in Khyber Pakhtunkhwa/Peshawar.
- Blog posts emit page-specific titles, descriptions, canonical URLs, and `Article` JSON-LD.
- Project pages under `/projects/` emit crawlable case-study content and `CreativeWork` JSON-LD.
- `robots.txt` and `sitemap.xml` are generated as Astro routes and include blog and project URLs.
- Keep `site` in `astro.config.mjs` aligned with the production domain before submitting the sitemap to Search Console.
- Replace placeholder project descriptions and `og-image.svg` with final case-study copy and a production social image before launch.

No analytics script is included by default. Add a privacy-reviewed provider only after choosing a consent and data-retention policy; keep it deferred so it does not compete with LCP or INP.

## Deploying

This is a fully static site — the `dist/` folder from `npm run build` can be deployed to
Vercel, Netlify, Cloudflare Pages, or GitHub Pages with no configuration. For Vercel/Netlify,
just point them at this repo; both auto-detect Astro.
