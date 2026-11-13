# The Chaotic Engineer

Personal blog at [thechaotic.engineer](https://thechaotic.engineer) — thoughts on engineering, culture, and whatever else comes to mind.

Built with Astro 7. Pixel typography, muted olive on charcoal, and a small machine illustration. The homepage and blog share a text-first post list; articles use a readable sans-serif body font.

Requires Node.js 22.23.4 or newer and npm 9.6.5 or newer. CI builds and deploys with Node.js 24.

## Commands

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start local dev server at `localhost:4321`  |
| `npm test`         | Check animation controls                    |
| `npm run build`    | Build production site to `./dist/`          |
| `npm run preview`  | Preview the production build locally        |

## Deployment

Pushes to `main` auto-deploy to GitHub Pages via GitHub Actions.

## Pixel theme

- Design experiment branch: `design/pixel-omarchy`.
- Shared palette, type, focus, and reduced-motion rules: `src/styles/global.css`.
- Homepage machine: `src/assets/pixel-machine.png`, rendered responsively by `PixelMachine.astro` with alpha transparency and no caption.
- Approved visual reference: [pixel-concept.png](docs/pixel-concept.png). Asset brief: [pixel-machine.prompt.txt](docs/pixel-machine.prompt.txt).
- Navigation stays visible on mobile. The header pause button controls the machine, satellite modules, and signal pulses along the pixel cable dividers. The choice persists across pages when local storage is available. Motion pauses in background tabs and respects reduced-motion preferences; without JavaScript the artwork stays still.
- Existing posts, dates, URLs, RSS, biography, and article illustrations are retained.

Validation: five animation-control tests (pause/resume, persistence, reduced motion, background tabs, blocked storage), the production build and checks of all nine generated HTML pages, local links, fragments, image/font assets, and page landmarks pass. Visual browser QA (desktop/mobile), keyboard interaction, clipboard behavior, and emulated reduced-motion QA remain pending: no browser was connected in the implementation session.
