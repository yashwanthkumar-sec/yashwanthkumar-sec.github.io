/* ============================================================
   Yashwanth Kumar S — Red Team Portfolio  |  scripts/main.js
   ============================================================ */
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  /* ── Loader ──────────────────────────────────────────────── */
  (function initLoader() {
    const loader  = document.querySelector("[data-loader]");
    const lineEl  = document.querySelector("[data-loader-line]");
    const barSpan = document.querySelector("[data-loader-progress]");

    function dismiss() {
      if (!loader) return;
      loader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 700);
    }

    /* Hard failsafe — clears loader after 5 s no matter what */
    const failsafe = setTimeout(dismiss, 5000);

    if (!loader || !lineEl || !barSpan) {
      clearTimeout(failsafe);
      dismiss();
      return;
    }

    document.body.classList.add("is-loading");

    const steps = [
      "initializing profile matrix...",
      "loading exploit framework...",
      "mounting TryHackMe modules...",
      "establishing secure channel...",
      "verifying operator credentials...",
      "[ OK ] portfolio ready. welcome.",
    ];

    let idx = 0;

    function tick() {
      if (idx >= steps.length) {
        clearTimeout(failsafe);
        setTimeout(dismiss, 320);
        return;
      }
      lineEl.textContent = steps[idx];
      barSpan.style.width = Math.round(((idx + 1) / steps.length) * 100) + "%";
      idx++;
      setTimeout(tick, 390);
    }

    requestAnimationFrame(function () { setTimeout(tick, 80); });
  })();


  /* ── Particle canvas ─────────────────────────────────────── */
  (function initParticles() {
    var canvas = document.querySelector("[data-particles]");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var W, H, particles;

    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    function mkP() {
      return { x: Math.random()*W, y: Math.random()*H,
               vx:(Math.random()-0.5)*0.36, vy:(Math.random()-0.5)*0.36,
               r:Math.random()*1.5+0.4, a:Math.random()*0.5+0.15 };
    }
    function init() { resize(); particles = Array.from({length:70}, mkP); }
    function draw() {
      ctx.clearRect(0,0,W,H);
      for (var i=0;i<particles.length;i++) {
        for (var j=i+1;j<particles.length;j++) {
          var dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
          var d=Math.sqrt(dx*dx+dy*dy);
          if (d<160) {
            ctx.beginPath();
            ctx.strokeStyle="rgba(72,245,255,"+(0.12*(1-d/160))+")";
            ctx.lineWidth=0.7;
            ctx.moveTo(particles[i].x,particles[i].y);
            ctx.lineTo(particles[j].x,particles[j].y);
            ctx.stroke();
          }
        }
        var p=particles[i];
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(72,245,255,"+p.a+")"; ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
      }
      requestAnimationFrame(draw);
    }
    init(); draw();
    window.addEventListener("resize", resize, {passive:true});
  })();


  /* ── Custom cursor ───────────────────────────────────────── */
  (function initCursor() {
    var cursor = document.querySelector("[data-cursor]");
    if (!cursor || window.matchMedia("(hover:none)").matches) return;
    var mx=-200,my=-200,cx=-200,cy=-200;
    document.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;});
    document.addEventListener("mouseover",function(e){
      if(e.target.closest("a,button,input,[role='tab']")) cursor.classList.add("is-active");
    });
    document.addEventListener("mouseout",function(e){
      if(e.target.closest("a,button,input,[role='tab']")) cursor.classList.remove("is-active");
    });
    (function loop(){
      cx+=(mx-cx)*0.14; cy+=(my-cy)*0.14;
      cursor.style.transform="translate3d("+cx+"px,"+cy+"px,0) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  })();


  /* ── Sticky header ───────────────────────────────────────── */
  (function(){
    var h=document.querySelector("[data-header]");
    if(!h) return;
    window.addEventListener("scroll",function(){h.classList.toggle("is-scrolled",window.scrollY>30);},{passive:true});
  })();


  /* ── Mobile nav ──────────────────────────────────────────── */
  (function(){
    var toggle=document.querySelector("[data-nav-toggle]");
    var nav=document.querySelector(".main-nav");
    if(!toggle||!nav) return;
    toggle.addEventListener("click",function(){nav.classList.toggle("is-open");});
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click",function(){nav.classList.remove("is-open");});
    });
  })();


  /* ── Active nav ──────────────────────────────────────────── */
  (function(){
    var links=Array.from(document.querySelectorAll(".main-nav a[href^='#']"));
    var sections=links.map(function(a){return document.querySelector(a.getAttribute("href"));}).filter(Boolean);
    if(!sections.length) return;
    function update(){
      var y=window.scrollY+130, cur=sections[0];
      sections.forEach(function(s){if(s&&s.offsetTop<=y) cur=s;});
      links.forEach(function(a){a.classList.toggle("is-active",a.getAttribute("href")==="#"+(cur&&cur.id));});
    }
    window.addEventListener("scroll",update,{passive:true}); update();
  })();


  /* ── Scroll reveal ───────────────────────────────────────── */
  (function(){
    var els=document.querySelectorAll(".reveal");
    if(!els.length) return;
    if("IntersectionObserver" in window){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}});
      },{threshold:0.07,rootMargin:"0px 0px -30px 0px"});
      els.forEach(function(el){io.observe(el);});
    } else {
      els.forEach(function(el){el.classList.add("is-visible");});
    }
  })();


  /* ── Animated counters ───────────────────────────────────── */
  (function(){
    var els=document.querySelectorAll("[data-count-to]");
    if(!els.length||!("IntersectionObserver" in window)) return;
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var el=entry.target, target=parseInt(el.dataset.countTo,10), start=performance.now(), dur=1200;
        (function step(now){
          var t=Math.min(1,(now-start)/dur), ease=1-Math.pow(1-t,3);
          el.textContent=Math.round(ease*target);
          if(t<1) requestAnimationFrame(step);
        })(start);
        io.unobserve(el);
      });
    },{threshold:0.5});
    els.forEach(function(el){io.observe(el);});
  })();


  /* ── Skill filter ────────────────────────────────────────── */
  (function(){
    var btns=document.querySelectorAll("[data-filter]");
    var grid=document.querySelector("[data-skill-grid]");
    if(!btns.length||!grid) return;
    btns.forEach(function(btn){
      btn.addEventListener("click",function(){
        var f=btn.dataset.filter;
        btns.forEach(function(b){b.classList.remove("is-active");});
        btn.classList.add("is-active");
        grid.querySelectorAll("[data-category]").forEach(function(node){
          node.classList.toggle("is-hidden",f!=="all"&&node.dataset.category!==f);
        });
      });
    });
  })();


  /* ── Case study tabs ─────────────────────────────────────── */
  (function(){
    var btns=document.querySelectorAll("[data-case]");
    var panels=document.querySelectorAll("[data-case-panel]");
    if(!btns.length||!panels.length) return;
    btns.forEach(function(btn){
      btn.addEventListener("click",function(){
        var key=btn.dataset.case;
        btns.forEach(function(b){b.classList.remove("is-active");b.setAttribute("aria-selected","false");});
        panels.forEach(function(p){p.classList.remove("is-active");});
        btn.classList.add("is-active"); btn.setAttribute("aria-selected","true");
        var panel=document.querySelector('[data-case-panel="'+key+'"]');
        if(panel) panel.classList.add("is-active");
      });
    });
  })();


  /* ── Tilt cards ──────────────────────────────────────────── */
  (function(){
    if(window.matchMedia("(hover:none)").matches) return;
    document.querySelectorAll(".tilt-card").forEach(function(card){
      card.addEventListener("mousemove",function(e){
        var r=card.getBoundingClientRect();
        var dx=(e.clientX-(r.left+r.width/2))/(r.width/2);
        var dy=(e.clientY-(r.top+r.height/2))/(r.height/2);
        card.style.transform="perspective(700px) rotateY("+(dx*5)+"deg) rotateX("+(-dy*5)+"deg) scale(1.018)";
      });
      card.addEventListener("mouseleave",function(){card.style.transform="";});
    });
  })();


  /* ── Terminal ────────────────────────────────────────────── */
  (function(){
    var form=document.querySelector("[data-terminal-form]");
    var inp=document.querySelector("[data-terminal-input]");
    var out=document.querySelector("[data-terminal-output]");
    if(!form||!inp||!out) return;

    var CMDS={
      help:    "Available commands:\n  whoami   — operator profile\n  skills   — technical stack\n  labs     — completed rooms\n  certs    — certification roadmap\n  contact  — reach Yashwanth\n  status   — internship availability\n  clear    — clear terminal",
      whoami:  "Yashwanth Kumar S\nB.E. Cybersecurity · Cambridge Institute of Technology, Bengaluru\nAspiring Red Team Operator | TryHackMe Active | Web Security Auditor",
      skills:  "OFFENSE:  Penetration Testing · Web Security (IDOR, headers, TLS) · OSINT · CTF\nDEFENSE:  SIEM · Splunk · Log Analysis · Threat Hunting\nCORE:     Linux · Networking · Python · C/C++ · Burp Suite",
      labs:    "LAB-001  IDOR - Access Control Testing      [TryHackMe]\nLAB-002  Splunk Fundamentals                [TryHackMe]\nLAB-003  Phishing Awareness Simulation      [TryHackMe]\nLAB-004  HTTP Security Fundamentals         [TryHackMe]\nLAB-005  Advent of Cyber 2024 (25/25)       [TryHackMe]\nLAB-006  Kali + Metasploitable 2 Home Lab   [VirtualBox]",
      certs:   "[DONE]     Advent of Cyber 2024      — TryHackMe\n[DONE]     Linux Fundamentals (1-3)   — TryHackMe\n[DONE]     Splunk Basics              — TryHackMe\n[PROGRESS] CompTIA Security+          — Target: 2026\n[PLANNED]  eJPT                       — Target: 2028",
      contact: "LinkedIn:  linkedin.com/in/yashwanthkumar-sec\nTryHackMe: tryhackme.com/p/yashwanthkumar067\nGitHub:    github.com/yashwanthkumar-sec\nFiverr:    fiverr.com/yeshwanthkumar9",
      status:  "STATUS: OPEN TO OPPORTUNITIES\nSeeking: Red Team · SOC · VAPT · Network Engineering internships\nAlso open to: CTF teams · mentorship · collaboration\nDM via LinkedIn for fastest response.",
    };

    function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

    function appendLine(html){
      var p=document.createElement("p");
      p.style.whiteSpace="pre-wrap"; p.innerHTML=html;
      out.appendChild(p); out.scrollTop=out.scrollHeight;
    }

    function run(raw){
      var cmd=raw.trim().toLowerCase();
      appendLine("<span>redteam@portfolio:~$</span> "+esc(raw));
      if(!cmd) return;
      if(cmd==="clear"){ out.innerHTML=""; return; }
      var resp=CMDS[cmd];
      appendLine(resp ? esc(resp) : "bash: "+esc(cmd)+": command not found &mdash; type <span>help</span>");
    }

    form.addEventListener("submit",function(e){ e.preventDefault(); var v=inp.value; inp.value=""; run(v); });
    setTimeout(function(){ run("help"); inp.value=""; }, 200);
  })();


  /* ── Copy button ─────────────────────────────────────────── */
  (function(){
    var btn=document.querySelector("[data-copy]");
    var toast=document.querySelector("[data-copy-toast]");
    if(!btn||!toast) return;
    btn.addEventListener("click",function(){
      var text=btn.dataset.copy||"";
      navigator.clipboard.writeText(text).then(function(){
        toast.textContent="✓ Profile link copied to clipboard";
        setTimeout(function(){toast.textContent="";},2600);
      }).catch(function(){
        toast.textContent="Copy not supported — use the link above";
        setTimeout(function(){toast.textContent="";},2600);
      });
    });
  })();

}); /* end DOMContentLoaded */
