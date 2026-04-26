# Yashwanth Kumar S - Red Team Portfolio

Cyberpunk interactive portfolio built from Yashwanth Kumar S's LinkedIn profile information. It highlights red-team goals, TryHackMe work, web security audits, SIEM practice, and internship availability.

## Features

- Animated cyberpunk loading screen
- AI-generated hero artwork saved inside the repo
- Particle network canvas background
- Glitch hero title and responsive HUD metrics
- Skill filtering for offense, defense, and core fundamentals
- Interactive operation case-study tabs
- Connection hub for LinkedIn, TryHackMe, and GitHub
- TryHackMe profile panel with rooms, badges, projects, and certification progress
- Detailed lab practice log and certification roadmap
- Tilt cards, scroll reveals, and animated counters
- Terminal-style command panel
- GitHub Pages deployment workflow
- TypeScript source with compiled browser JavaScript

## Project Structure

```text
.
├── assets/
│   └── hero-redteam-ops.png
├── scripts/
│   └── main.js
├── src/
│   └── main.ts
├── .github/
│   └── workflows/
│       └── pages.yml
├── index.html
├── styles.css
├── package.json
├── tsconfig.json
└── README.md
```

## Run Locally

This portfolio can be opened directly from `index.html`.

For a local dev server after installing dependencies:

```bash
npm install
npm run dev
```

## Build TypeScript

```bash
npm install
npm run build
```

The TypeScript source in `src/main.ts` compiles to `scripts/main.js`.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. The included workflow publishes the static site automatically.

## Content Notes

The portfolio is framed around authorized security testing, student learning, TryHackMe labs, small-business audit experience, and internship readiness. Keep future updates practical, evidence-backed, and focused on permission-based security work.
