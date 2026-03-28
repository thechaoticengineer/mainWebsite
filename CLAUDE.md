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
- Blog post frontmatter schema: `title`, `description`, `pubDate` (required), `updatedDate`, `heroImage` (optional)
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
