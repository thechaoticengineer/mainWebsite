# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/website for "The Chaotic Engineer" (thechaotic.engineer), built with Astro 6. The site has a cyberpunk/neon-green-on-dark theme with CRT scanline effects and glitch animations.

## Commands

- `npm run dev` — local dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the production build locally

## Deployment

Deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. Uses Node 24.

## Architecture

- **Astro 6** static site with MDX and sitemap integrations
- **Content collections** defined in `src/content.config.ts` — blog posts live in `src/content/blog/` as Markdown/MDX files
- Blog post frontmatter schema: `title`, `description`, `pubDate` (required), `updatedDate`, `heroImage`, `tags` (optional)
- **Layouts**: `BlogPost.astro` is the only layout, wrapping blog post content
- **Components**: `BaseHead.astro` (meta/SEO), `Header.astro` (sticky nav with mobile hamburger menu), `Footer.astro`, `HeaderLink.astro`, `FormattedDate.astro`
- **Pages**: `index.astro` (homepage), `about.astro`, `blog/index.astro` (listing), `blog/[...slug].astro` (individual posts), `rss.xml.js`
- **Global constants** (`SITE_TITLE`, `SITE_DESCRIPTION`) in `src/consts.ts`
- **Styling**: Single global stylesheet `src/styles/global.css` with CSS custom properties for the cyberpunk theme. No CSS framework. Font: Atkinson (served from `/public/fonts/`)

## Key Conventions

- Site URL configured as `https://thechaotic.engineer` in `astro.config.mjs`
- Custom domain set via `public/CNAME`
- TypeScript strict mode with `strictNullChecks`
- No test framework configured
- No linter configured

## TODO

### Medium effort
- [ ] `/projects` page — portfolio of personal projects (e.g. shopping list app, this blog) with links to repo/demo
- [ ] Client-side search with Pagefind (integrates well with Astro static builds)
- [ ] Newsletter / email subscription — e.g. Buttondown (free tier), form in footer or dedicated page
- [ ] Typing effect animation on hero section — fits the cyberpunk/terminal aesthetic
- [ ] Astro View Transitions — built-in page transitions, could do a glitch effect between pages

### Ambitious
- [ ] `/uses` page — gear, tools, IDE, terminal setup (popular format for dev blogs)
- [ ] Comments via Giscus (GitHub Discussions-based, zero backend)
- [ ] Interactive demos — embedded React components in MDX (e.g. shopping list app snippet)
- [ ] Dark/light theme toggle — keep retro green as default, add a clean light variant
- [ ] `/now` page — "what I'm doing now" (nownownow.com format)
- [ ] Post series mechanism — link posts into series with prev/next navigation
- [ ] Privacy-friendly analytics — Plausible or Umami (self-hosted)

### Content ideas
- [ ] "My Terminal Setup" (fits the site aesthetic)
- [ ] "Docker Compose patterns I actually use"
- [ ] "Why I chose Astro over Next.js"
- [ ] "Code review etiquette" (bridges technical and culture topics)
