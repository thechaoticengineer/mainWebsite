# AGENTS.md

Shared repository instructions. All coding tools working in this repository should read and follow this file. `CLAUDE.md` references this file; keep project guidance here to avoid duplication.

## Collaboration and Git

- In interactive work, inspect and diagnose first, then agree with the user on intended behavior, approach, and scope before changing application behavior or state. Once a concrete approach is approved, proceed autonomously without asking again about routine details.
- Pause affected work if a finding requires expanding scope, discarding data or existing work, changing user settings, or delivering different behavior. Present a concrete proposal and continue independent work within the agreed scope.
- Ask about intent and meaningful consequences; own the implementation details.
- These consultation rules do not add confirmation steps to autonomous agents or queues inside Forge; follow Forge's configured autonomy and review rules there.
- Use a separate branch for design experiments. Show a visual concept and agree on the direction before implementing a redesign.
- Complete code, documentation, and configuration changes with a local Git commit after appropriate verification, unless explicitly asked to leave them uncommitted.
- Keep commit messages short and clear, following repository conventions. For substantial work, prefer focused, logically ordered commits that remain independently reviewable and working.
- Commit only task-related changes and preserve unrelated user work. Report any reason a required commit cannot be completed.
- Keep commits local by default. Push only with explicit authorization from the current session. “Keep changes local” still means commit them locally.
- Do not add AI/assistant attribution or Co-authored-by trailers to commits or metadata.

## Verification

- Run `npm run build` for application changes and `npm test` for animation-control changes. Tests use the built-in Node.js test runner; no linter is configured.
- For visual changes, inspect desktop and mobile layouts and check navigation, readability, keyboard focus, and reduced-motion behavior where applicable.
- For documentation-only changes, review the diff and run `git diff --check`; a production build is unnecessary.

## Project Overview

Personal blog/website for "The Chaotic Engineer" (thechaotic.engineer), built with Astro 7. The site has an Omarchy-inspired pixel theme: charcoal surfaces, muted olive accents, bitmap display headings, and a small machine illustration. Keep body text readable; avoid neon glows and CRT overlays.

## Commands

- `npm run dev` — local dev server at localhost:4321
- `npm test` — animation-control regression tests
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the production build locally

## Deployment

Deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. Uses Node 24.

## Architecture

- **Astro 7** static site with MDX and sitemap integrations; `compressHTML: true` preserves the pre-upgrade spacing between inline elements
- **Content collections** defined in `src/content.config.ts` — blog posts live in `src/content/blog/` as Markdown/MDX files
- Blog post frontmatter schema: `title`, `description`, `pubDate` (required), `updatedDate`, `heroImage`, `tags` (optional)
- **Layouts**: `BlogPost.astro` is the only layout, wrapping blog post content
- **Components**: `BaseHead.astro` (meta/SEO), `Header.astro` (responsive, always-visible navigation and skip link), `Footer.astro` (pixel cable divider), `HeaderLink.astro`, `FormattedDate.astro`, `PostList.astro` (shared post rows), `PixelIcon.astro`, `PixelMachine.astro`, `CableDivider.astro`, `MotionToggle.astro`
- **Pages**: `index.astro` (homepage), `about.astro`, `blog/index.astro` (listing), `blog/[...slug].astro` (individual posts), `rss.xml.js`
- **Global constants** (`SITE_TITLE`, `SITE_DESCRIPTION`) in `src/consts.ts`
- **Styling**: Shared tokens, typography, prose, focus, and reduced-motion rules in `src/styles/global.css`; component-specific styles stay scoped in Astro components. No CSS framework. Fonts: Press Start 2P for display headings, IBM Plex Mono for UI, Geist Sans for long-form reading (local `@fontsource` imports).

## Key Conventions

- Site URL configured as `https://thechaotic.engineer` in `astro.config.mjs`
- Custom domain set via `public/CNAME`
- TypeScript strict mode with `strictNullChecks`
- Built-in Node.js test runner (`tests/motion.test.mjs`)
- No linter configured

## TODO

### Medium effort
- [ ] `/projects` page — portfolio of personal projects (e.g. shopping list app, this blog) with links to repo/demo
- [ ] Client-side search with Pagefind (integrates well with Astro static builds)
- [ ] Newsletter / email subscription — e.g. Buttondown (free tier), form in footer or dedicated page
- [x] Animated hero machine and pixel cable separators, with persistent pause control and reduced-motion support
- [ ] Astro View Transitions — built-in page transitions, could do a glitch effect between pages

### Ambitious
- [ ] `/uses` page — gear, tools, IDE, terminal setup (popular format for dev blogs)
- [ ] Comments via Giscus (GitHub Discussions-based, zero backend)
- [ ] Interactive demos — embedded React components in MDX (e.g. shopping list app snippet)
- [ ] Dark/light theme toggle — keep the charcoal/olive theme as default, add a clean light variant
- [ ] `/now` page — "what I'm doing now" (nownownow.com format)
- [ ] Post series mechanism — link posts into series with prev/next navigation
- [ ] Privacy-friendly analytics — Plausible or Umami (self-hosted)

### Content ideas
- [ ] "My Terminal Setup" (fits the site aesthetic)
- [ ] "Docker Compose patterns I actually use"
- [ ] "Why I chose Astro over Next.js"
- [ ] "Code review etiquette" (bridges technical and culture topics)
