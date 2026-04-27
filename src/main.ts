
/**
 * main.ts — Red Team Portfolio
 * Author : Yashwanth Kumar S
 * GitHub : github.com/yashwanthkumar-sec
 *
 * Compile → scripts/main.js via:  npm run build
 *
 * Matches every data-* attribute used in index.html:
 *   data-loader, data-loader-line, data-loader-progress
 *   data-particles, data-cursor, data-header, data-nav-toggle
 *   data-skill-grid, data-filter, data-count-to
 *   data-case, data-case-panel
 *   data-terminal, data-terminal-form, data-terminal-input, data-terminal-output
 *   data-copy, data-copy-toast
 *   .reveal → .is-visible, .tilt-card
 */

"use strict";

/* ══════════════════════════════════════════
   TYPES
══════════════════════════════════════════ */

interface TerminalEntry {
  lines: string[];
}

/* ══════════════════════════════════════════
   CONSTANTS
══════════════════════════════════════════ */

const LOADER_MESSAGES: string[] = [
  "initializing profile matrix...",
  "mounting encrypted filesystem...",
  "establishing secure tunnel...",
  "loading recon modules...",
  "verifying operator credentials...",
  "importing skill arsenal...",
  "syncing TryHackMe progress...",
  "portfolio systems online.",
];

const TERMINAL_COMMANDS: Record<string, TerminalEntry> = {
  help: {
    lines: [
      "Available commands:",
      "  whoami      — operator profile",
      "  skills      — skill matrix summary",
      "  projects    — project and lab log",
      "  certs       — certification roadmap",
      "  contact     — contact information",
      "  nmap        — simulated scan",
      "  status      — live system status",
      "  roadmap     — 2025-2026 goals",
      "  clear       — clear the screen",
    ],
  },
  whoami: {
    lines: [
      "// OPERATOR PROFILE",
      "Name     : Yashwanth Kumar S",
      "Role     : Cybersecurity Student & Security Trainee",
      "School   : Cambridge Institute of Technology, Bengaluru",
      "Program  : B.E. Cyber Security (2024 - 2028)",
      "Status   : OPEN TO INTERNSHIP",
      "Focus    : Web Security · SOC · Linux · OSINT",
      "Platform : TryHackMe — 43 rooms, 8 badges",
      "Location : Greater Bengaluru Area, India",
      "Mode     : AUTHORIZED ENVIRONMENTS ONLY",
    ],
  },
  skills: {
    lines: [
      "// SKILL MATRIX",
      "Penetration Testing  ████████░░  74%",
      "Linux Administration █████████░  78%",
      "Networking           ████████░░  72%",
      "SIEM / Splunk        ███████░░░  66%",
      "Web Security         ████████░░  70%",
      "Python / C++         ███████░░░  64%",
      "OSINT                ███████░░░  68%",
      "CTF Practice         █████████░  76%",
    ],
  },
  projects: {
    lines: [
      "// OPERATIONS LOG",
      "LAB-001  IDOR Access Control Testing (TryHackMe)",
      "LAB-002  Splunk Fundamentals Lab",
      "LAB-003  Phishing Awareness Simulation",
      "LAB-004  HTTP Security Fundamentals",
      "LAB-005  Advent of Cyber 2024 (Badge Earned)",
      "LAB-006  Home Lab — Kali + Metasploitable 2",
      "OPS-001  Small Business Website Security Audit",
      "OPS-002  Fiverr Security Check Service",
    ],
  },
  certs: {
    lines: [
      "// CERTIFICATION ROADMAP",
      "[DONE]  Advent of Cyber 2024    — TryHackMe",
      "[DONE]  Linux Fundamentals      — TryHackMe",
      "[DONE]  Splunk Basics           — TryHackMe",
      "[ WIP]  CompTIA Security+       — target 2026",
      "[PLAN]  eJPT (INE Security)     — target 2028",
    ],
  },
  contact: {
    lines: [
      "// CONTACT",
      "LinkedIn  : linkedin.com/in/yashwanthkumar-sec",
      "TryHackMe : tryhackme.com/p/yashwanthkumar067",
      "GitHub    : github.com/yashwanthkumar-sec",
      "Fiverr    : fiverr.com/yeshwanthkumar9",
      "Location  : Greater Bengaluru, India",
      "Response  : < 24 hours",
    ],
  },
  nmap: {
    lines: [
      "Starting Nmap 7.94 ( https://nmap.org )",
      "Nmap scan report for portfolio.local (127.0.0.1)",
      "Host is up (0.00009s latency).",
      "",
      "PORT     STATE  SERVICE   VERSION",
      "22/tcp   open   ssh       OpenSSH 9.0",
      "80/tcp   open   http      nginx 1.24.0",
      "443/tcp  open   https     nginx 1.24.0",
      "",
      "Nmap done: 1 IP (1 host up) scanned in 0.38s",
    ],
  },
  status: {
    lines: [
      "// SYSTEM STATUS",
      "Portfolio    : ONLINE",
      "TryHackMe    : 43 rooms completed",
      "Internship   : ACTIVELY SEEKING",
      "CTF Team     : LOOKING FOR TEAMMATES",
      `Timestamp    : ${new Date().toUTCString()}`,
    ],
  },
  roadmap: {
    lines: [
      "// 2025-2026 LEARNING ROADMAP",
      "Q2 2025  Complete THM Jr Pentester path",
      "Q3 2025  CompTIA Security+ exam",
      "Q4 2025  Build 2 Python security tools",
      "Q1 2026  Attempt eJPT certification",
      "Q2 2026  Land first cybersecurity internship",
      "Q3 2026  Start CTF competition circuit",
    ],
  },
};

/* ══════════════════════════════════════════
   LOADER
══════════════════════════════════════════ */

function initLoader(): void {
  const loader = document.querySelector<HTMLElement>("[data-loader]");
  const lineEl = document.querySelector<HTMLElement>("[data-loader-line]");
  const progressEl = document.querySelector<HTMLElement>("[data-loader-progress]");

  if (!loader || !lineEl || !progressEl) return;

  document.body.classList.add("is-loading");

  let msgIdx = 0;
  const totalMsgs = LOADER_MESSAGES.length;

  function step(): void {
    if (msgIdx >= totalMsgs) {
      finish();
      return;
    }
    lineEl!.textContent = LOADER_MESSAGES[msgIdx];
    const pct = Math.round(((msgIdx + 1) / totalMsgs) * 100);
    progressEl!.style.width = `${pct}%`;
    msgIdx++;
    setTimeout(step, msgIdx === 1 ? 300 : 320);
  }

  function finish(): void {
    // Immediately unblock page — remove overflow:hidden right away
    document.body.classList.remove("is-loading");

    // Trigger CSS fade-out
    loader!.classList.add("is-hidden");

    // Guard so we only remove once
    let removed = false;
    function removeLoader(): void {
      if (removed) return;
      removed = true;
      if (loader!.parentNode) {
        loader!.style.display = "none";
        loader!.remove();
      }
    }

    // Primary: fire after opacity transition ends
    loader!.addEventListener("transitionend", (e: TransitionEvent) => {
      if (e.propertyName === "opacity") removeLoader();
    });

    // Guaranteed fallback — fires after 900ms even if transitionend never fires
    // Covers: prefers-reduced-motion, paint issues, transition blocked by browser
    setTimeout(removeLoader, 900);
  }

  step();
}

/* ══════════════════════════════════════════
   PARTICLES / CANVAS
══════════════════════════════════════════ */

function initParticles(): void {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-particles]");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
  }

  const COUNT = 80;
  const LINK_DIST = 130;
  let W = 0, H = 0;
  let particles: Particle[] = [];

  function resize(): void {
    W = canvas!.width  = window.innerWidth;
    H = canvas!.height = window.innerHeight;
  }

  function spawn(): Particle {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    };
  }

  function init(): void {
    resize();
    particles = Array.from({ length: COUNT }, spawn);
  }

  function draw(): void {
    ctx!.clearRect(0, 0, W, H);

    // links
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx!.beginPath();
          ctx!.moveTo(particles[i].x, particles[i].y);
          ctx!.lineTo(particles[j].x, particles[j].y);
          ctx!.strokeStyle = `rgba(72,245,255,${(1 - dist / LINK_DIST) * 0.18})`;
          ctx!.lineWidth = 0.6;
          ctx!.stroke();
        }
      }
    }

    // dots
    particles.forEach(p => {
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(72,245,255,0.55)";
      ctx!.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener("resize", () => { resize(); }, { passive: true });
}

/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */

function initCursor(): void {
  const cursor = document.querySelector<HTMLElement>("[data-cursor]");
  if (!cursor || window.matchMedia("(max-width: 700px)").matches) return;

  let cx = -100, cy = -100;
  let tx = -100, ty = -100;

  document.addEventListener("mousemove", (e: MouseEvent) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  const interactives = "a, button, [data-copy]";
  document.querySelectorAll<HTMLElement>(interactives).forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
  });

  function loop(): void {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    cursor!.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();
}

/* ══════════════════════════════════════════
   STICKY HEADER
══════════════════════════════════════════ */

function initHeader(): void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;

  const obs = new IntersectionObserver(
    ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
    { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
  );

  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:100%;pointer-events:none;";
  document.body.prepend(sentinel);
  obs.observe(sentinel);
}

/* ══════════════════════════════════════════
   MOBILE NAV TOGGLE
══════════════════════════════════════════ */

function initNavToggle(): void {
  const btn = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const nav = document.querySelector<HTMLElement>(".main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  // Close when a link is clicked
  nav.querySelectorAll<HTMLAnchorElement>("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // Active link highlight on scroll
  const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
  const links    = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a[href^='#']"));

  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove("is-active"));
        const active = links.find(l => l.getAttribute("href") === `#${e.target.id}`);
        active?.classList.add("is-active");
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => spy.observe(s));
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */

function initReveal(): void {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("is-visible"), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });

  document.querySelectorAll<HTMLElement>(".reveal").forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   TILT CARDS
══════════════════════════════════════════ */

function initTiltCards(): void {
  document.querySelectorAll<HTMLElement>(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
      card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ══════════════════════════════════════════
   SKILL FILTER  (data-filter / data-category)
══════════════════════════════════════════ */

function initSkillFilter(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
  const grid    = document.querySelector<HTMLElement>("[data-skill-grid]");
  if (!buttons.length || !grid) return;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-category]"));

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filter = btn.dataset["filter"];
      cards.forEach(card => {
        const show = filter === "all" || card.dataset["category"] === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });
}

/* ══════════════════════════════════════════
   ANIMATED COUNTERS  (data-count-to)
══════════════════════════════════════════ */

function initCounters(): void {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>("[data-count-to]")
  );
  if (!elements.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target as HTMLElement;
      const target = parseInt(el.dataset["countTo"] ?? "0", 10);
      if (!Number.isFinite(target)) return;

      obs.unobserve(el);
      let current = 0;
      const step  = Math.max(1, Math.ceil(target / 40));
      const id    = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = String(current);
        if (current >= target) clearInterval(id);
      }, 35);
    });
  }, { threshold: 0.6 });

  elements.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   OPERATIONS CASE TABS  (data-case / data-case-panel)
══════════════════════════════════════════ */

function initCaseTabs(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-case]");
  const panels  = document.querySelectorAll<HTMLElement>("[data-case-panel]");
  if (!buttons.length || !panels.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset["case"];

      buttons.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      panels.forEach(p => p.classList.remove("is-active"));

      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      const panel = document.querySelector<HTMLElement>(`[data-case-panel="${target}"]`);
      panel?.classList.add("is-active");
    });
  });
}

/* ══════════════════════════════════════════
   INTERACTIVE TERMINAL  (data-terminal)
══════════════════════════════════════════ */

function initTerminal(): void {
  const form   = document.querySelector<HTMLFormElement>("[data-terminal-form]");
  const input  = document.querySelector<HTMLInputElement>("[data-terminal-input]");
  const output = document.querySelector<HTMLElement>("[data-terminal-output]");
  if (!form || !input || !output) return;

  const cmdHistory: string[] = [];
  let histIdx = -1;

  function escapeHTML(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function appendOutput(text: string, cls: "cmd" | "out" | "err" = "out"): void {
    const p = document.createElement("p");
    if (cls === "cmd") {
      p.innerHTML = `<span>redteam@portfolio:~$</span> ${escapeHTML(text)}`;
    } else if (cls === "err") {
      p.style.color = "var(--red)";
      p.textContent = text;
    } else {
      p.textContent = text;
    }
    output!.appendChild(p);
    output!.scrollTop = output!.scrollHeight;
  }

  function runCommand(raw: string): void {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    cmdHistory.unshift(cmd);
    histIdx = -1;
    appendOutput(raw, "cmd");

    if (cmd === "clear") {
      output!.innerHTML = "";
      return;
    }

    const entry = TERMINAL_COMMANDS[cmd];
    if (entry) {
      entry.lines.forEach(line => appendOutput(line || " "));
    } else {
      appendOutput(`bash: ${escapeHTML(cmd)}: command not found — try 'help'`, "err");
    }
  }

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    runCommand(input!.value);
    input!.value = "";
  });

  input.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIdx < cmdHistory.length - 1) input!.value = cmdHistory[++histIdx];
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) input!.value = cmdHistory[--histIdx];
      else { histIdx = -1; input!.value = ""; }
    }
  });

  // Run default "help" on load
  runCommand("help");
}

/* ══════════════════════════════════════════
   COPY TO CLIPBOARD  (data-copy / data-copy-toast)
══════════════════════════════════════════ */

function initCopyButtons(): void {
  const toastEl = document.querySelector<HTMLElement>("[data-copy-toast]");

  document.querySelectorAll<HTMLElement>("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.dataset["copy"] ?? "";
      try {
        await navigator.clipboard.writeText(text);
        if (toastEl) {
          toastEl.textContent = "Profile link copied!";
          setTimeout(() => { toastEl.textContent = ""; }, 2500);
        }
      } catch {
        if (toastEl) toastEl.textContent = "Copy failed — please copy manually.";
      }
    });
  });
}

/* ══════════════════════════════════════════
   ENTRY POINT
══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initParticles();
  initCursor();
  initHeader();
  initNavToggle();
  initReveal();
  initTiltCards();
  initSkillFilter();
  initCounters();
  initCaseTabs();
  initTerminal();
  initCopyButtons();
});
