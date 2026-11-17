# AI Launchpad — Website

Marketing site for **AI Launchpad**, an AI safety and engineering company.
Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**,
with a dark/light theme derived from the AI Launchpad logo.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, React 19, static export-ready
- [Tailwind CSS 3](https://tailwindcss.com/) — theming via CSS variables
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light toggle (defaults to dark, respects system)
- TypeScript throughout

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, theme provider, header/footer
  page.tsx          Home page — composes the sections
  globals.css       Theme tokens (light + dark) and base styles
components/
  header.tsx        Sticky nav with mobile menu + theme toggle
  footer.tsx        Footer with product/company links
  logo.tsx          Theme-aware SVG logo (mark + wordmark)
  theme-provider.tsx / theme-toggle.tsx
  reveal.tsx        Scroll-reveal animation wrapper
  sections/         Hero, About, Services, Products, Approach, Contact
lib/
  site.ts           Central site config: nav, products, email, socials
public/
  logo.jpg          Original logo asset (used as favicon)
```

## Editing content

Most copy and links live in [`lib/site.ts`](lib/site.ts) (nav, products, email,
social links) and inside each section component under `components/sections/`.

Products link out to the live apps:

- **ExpertAI** → https://ai-launchpad-v1.com
- **Personai** → https://usepersonai.com

## Theming

Colors are defined as CSS variables in [`app/globals.css`](app/globals.css)
(`:root` for light, `.dark` for dark) and exposed to Tailwind in
[`tailwind.config.ts`](tailwind.config.ts). Change them in one place to retheme
the whole site. Palette is drawn from the logo: charcoal, cream, and the orange
rocket flame (`--accent`).

## Deploying to Vercel

This is a standard Next.js app — Vercel detects and configures it automatically.

**Option A — Git (recommended):**

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In [Vercel](https://vercel.com/new), "Add New → Project" and import the repo.
3. Keep the defaults (Framework: Next.js, Build: `next build`). Deploy.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel
```

No environment variables are required.

## To do / ideas

- Point the contact CTA at a real inbox or form (currently `mailto:` in `lib/site.ts`).
- Add Open Graph image at `/public/og.png` and reference it in `app/layout.tsx`.
- Add real social URLs in `lib/site.ts`.
- Add dedicated pages (e.g. `/about`, `/careers`, `/blog`) as the site grows.
