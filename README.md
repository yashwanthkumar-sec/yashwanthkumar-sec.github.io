# Yashwanth Kumar S — Red Team Portfolio

Cyberpunk interactive portfolio for Yashwanth Kumar S — cybersecurity student, TryHackMe learner, and aspiring penetration tester based in Bengaluru, India.

**Live site:** `https://yashwanthkumar-sec.github.io`

---

## Features

- Animated boot loader with progress bar
- Particle network canvas background
- Glitch hero title with scroll reveals
- Skill grid with offense / defense / core filters
- Operations timeline + case-study tab panel
- Lab practice log (LAB-001 → LAB-006)
- Certification roadmap with status badges
- Activity feed section
- Interactive terminal (`help`, `whoami`, `skills`, `nmap`, and more)
- Copy-to-clipboard contact button
- Mobile-responsive with hamburger nav
- TypeScript source → compiled `scripts/main.js`
- GitHub Actions auto-deploy to GitHub Pages

---

## Project Structure

```text
.
├── index.html                  ← Main HTML (references styles.css + scripts/main.js)
├── styles.css                  ← All CSS
├── assets/
│   └── hero-redteam-ops.png    ← Hero background image
├── scripts/
│   └── main.js                 ← Compiled from src/main.ts — DO NOT edit directly
├── src/
│   └── main.ts                 ← TypeScript source — edit this
├── .github/
│   └── workflows/
│       └── pages.yml           ← Auto-deploy workflow
├── writeups/
│   └── thm-idor-lab.md
├── notes/
│   └── linux-hardening.md
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Windows — First-Time Setup

### 1. Install tools (do once)

| Tool | Download |
|------|----------|
| Git  | git-scm.com/download/win |
| Node.js LTS | nodejs.org |

After installing, open **Command Prompt** and verify:
```cmd
git --version
node --version
npm --version
```

### 2. Create your GitHub repo

1. Go to **github.com** → click **New repository**
2. Name it **exactly**: `yashwanthkumar-sec.github.io`
   *(swap `yashwanthkumar-sec` for your real GitHub username)*
3. Set to **Public** — do NOT tick "Add README"
4. Click **Create repository**

### 3. Extract the zip and open a terminal in the folder

1. Right-click the zip → **Extract All** → choose a location
2. Open the extracted folder in File Explorer
3. Click the address bar → type `cmd` → press **Enter**
   *(Command Prompt opens already inside that folder)*

### 4. Run these commands

```cmd
npm install
npm run build
git init
git add .
git commit -m "init: red team portfolio"
git branch -M main
git remote add origin https://github.com/yashwanthkumar-sec/yashwanthkumar-sec.github.io.git
git push -u origin main
```

When Git asks for a password, use a **Personal Access Token** (not your GitHub password):
- GitHub → avatar → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
- **Generate new token** → tick **repo** → copy it → paste as your password

### 5. Enable GitHub Pages

1. Open your repo on GitHub
2. **Settings** → **Pages** (left sidebar)
3. Under **Source** → select **GitHub Actions**
4. Click **Save**

### 6. Wait ~2 minutes → site is live

```
https://yashwanthkumar-sec.github.io
```

---

## Local Preview (Windows)

```cmd
npm install
npm run build
npm run dev
```

Opens `http://localhost:3000` in your browser.

---

## Updating the site

After any change:

```cmd
git add .
git commit -m "update: describe what changed"
git push
```

GitHub Actions redeploys automatically in ~2 minutes.

---

## Editing Content

| What to change | Where |
|----------------|-------|
| Your name, links, bio | `index.html` |
| Colors, fonts, layout | `styles.css` |
| Terminal commands, counters, interactions | `src/main.ts` → then `npm run build` |
| Hero background image | Replace `assets/hero-redteam-ops.png` |
| Lab write-ups | Add `.md` files to `writeups/` |

---

## Ethics & Legal

All content reflects authorized, ethical security practice only:
- All lab work done inside TryHackMe or personal virtual machines
- Freelance reviews only within explicitly agreed scope
- No unauthorized access, exploitation, or testing of real systems

---

## License

MIT — see [LICENSE](LICENSE)

---

Built by **Yashwanth Kumar S** · Bengaluru, India · 2025  
`github.com/yashwanthkumar-sec` · `tryhackme.com/p/yashwanthkumar067`
