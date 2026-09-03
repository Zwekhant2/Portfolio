# Portfolio — Zwe Khant Lwin

Personal portfolio site for **Zwe Khant Lwin** — web developer and designer based in Helsinki.

## About

Web development trainee at SpeedZone (Zone Media OY), BBA graduate in Business Information Technology from Haaga-Helia. I design and build responsive websites in HTML, CSS, WordPress, and React, and run the infrastructure behind them on AWS and Linux.

## Stack

React 19 + TypeScript, built with Vite. No CSS framework and no UI dependencies — hand-written CSS with theme tokens, and a small set of hooks for theme, hash routing, scroll reveal, and View Transitions.

The design is editorial: one serif (Newsreader) carries both display and body text, the system sans stack is used only for meta, and a single accent colour does the rest. Each project is a written case study rather than a card.

## Local development

```
git clone https://github.com/Zwekhant2/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open the URL Vite prints (defaults to `http://localhost:5173/Portfolio/`).

## Build

```
npm run build      # type-checks and builds to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  data/         project case studies, capabilities, credentials
  hooks/        theme, hash routing, scroll reveal, view transitions
  components/   one component per section (Hero, WorkSection, Contact, ...)
```

All content is data-driven — edit the files under `src/data/` rather than the components. Each entry in `projects.ts` carries its full case study: a standfirst, a facts table, and the prose sections rendered on `#/work/<id>`.

## Deployment

Auto-deployed to GitHub Pages on every push to `main`: the workflow in `.github/workflows/deploy.yml` builds the site with Vite and publishes `dist/` to the `gh-pages` branch.

## Contact

- Email: zwekhantlwin5@gmail.com
- LinkedIn: https://www.linkedin.com/in/zwe-khant-lwin-948731258/
- GitHub: https://github.com/Zwekhant2
