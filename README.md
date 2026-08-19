# Portfolio — Zwe Khant Lwin

Personal portfolio site for **Zwe Khant Lwin** — web developer and designer based in Helsinki.

## About

Web development trainee at SpeedZone (Zone Media OY), BBA graduate in Business Information Technology from Haaga-Helia. I design and build responsive websites in HTML, CSS, WordPress, and React, and run the infrastructure behind them on AWS and Linux.

## Stack

React 19 + TypeScript, built with Vite. No CSS framework — hand-written CSS with theme tokens, custom hooks for scroll reveal, cursor, tilt, count-up, and text-scramble effects (ported from the original vanilla-JS build). Type: Fraunces, Inter, JetBrains Mono via Google Fonts.

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
  data/         project, skill, capability, and credential content
  hooks/        theme, scroll-reveal, cursor, tilt, count-up, scramble
  components/   one component per section (Hero, WorkSection, Contact, ...)
```

Project cards, skills marquee, capabilities, and credentials are all data-driven — edit the files under `src/data/` rather than the components to update content.

## Deployment

Auto-deployed to GitHub Pages on every push to `main`: the workflow in `.github/workflows/deploy.yml` builds the site with Vite and publishes `dist/` to the `gh-pages` branch.

## Contact

- Email: zwekhantlwin5@gmail.com
- LinkedIn: https://www.linkedin.com/in/zwe-khant-lwin-948731258/
- GitHub: https://github.com/Zwekhant2
