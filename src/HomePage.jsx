import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Siren, Scale, Microscope, FileText, ShieldCheck, FileCheck2, Fingerprint, Landmark, Building2, Briefcase, Globe, Mail, Phone, MessageCircle, Zap, Clock } from "lucide-react";
import "./HomePage.css";
import "./pages/NyayShieldPage.css"; // adjust this path to wherever NyayShieldPage.css actually sits relative to HomePage.jsx (per your App.jsx, it's in "./pages/")
import { useLanguage } from "./pages/LanguageContext";
import forfraLogo from "./assets/forfra-logo-transparent.png"; // adjust this path to wherever you saved the logo image

// Inline brand icons (not all lucide-react versions ship Instagram/Linkedin,
// so these are hand-drawn to avoid any install-version mismatch).
function InstagramIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

// ── data ──────────────────────────────────────────────────────────────────────
// NAV_LINKS keeps stable English keys (used for #anchors and translation lookup);
// the visible label is pulled from t.nav[key] at render time.
const NAV_LINKS = [
  { key: "about", href: "/about" },
  { key: "services", href: "#services" },
  { key: "clients", href: "#clients" },
  { key: "programs", href: "#programs" },
];

// SERVICES, CAPABILITIES, CLIENTS text now lives in src/i18n/translations.js
// and is read via useLanguage() inside each section component below.

// ── cyber background animation ─────────────────────────────────────────────
// Circuit-trace network with traveling data pulses, a floating particle mesh,
// sparse binary rain, and a slow security-style scan line.

function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const isMobile = window.innerWidth < 640;

    // ── circuit traces (orthogonal paths with traveling data pulses) ──
    const PATH_COUNT = isMobile ? 8 : 16;
    const paths = [];

    function buildPath() {
      const segCount = Math.floor(rand(3, 6));
      let x = rand(0, 1);
      let y = rand(0, 1);
      const points = [{ x, y }];
      for (let i = 0; i < segCount; i++) {
        if (Math.random() > 0.5) x = Math.min(1, Math.max(0, x + rand(-0.25, 0.25)));
        else y = Math.min(1, Math.max(0, y + rand(-0.25, 0.25)));
        points.push({ x, y });
      }
      return {
        points,
        pulses: [
          { t: Math.random(), speed: rand(0.09, 0.18) },
          { t: Math.random(), speed: rand(0.09, 0.18) },
        ],
      };
    }
    for (let i = 0; i < PATH_COUNT; i++) paths.push(buildPath());

    function pointAtT(points, t, w, h) {
      const segLens = [];
      let total = 0;
      for (let i = 1; i < points.length; i++) {
        const dx = (points[i].x - points[i - 1].x) * w;
        const dy = (points[i].y - points[i - 1].y) * h;
        const l = Math.sqrt(dx * dx + dy * dy);
        segLens.push(l);
        total += l;
      }
      let target = t * total;
      for (let i = 0; i < segLens.length; i++) {
        if (target <= segLens[i] || i === segLens.length - 1) {
          const ratio = segLens[i] ? target / segLens[i] : 0;
          const a = points[i], b = points[i + 1];
          return {
            x: (a.x + (b.x - a.x) * ratio) * w,
            y: (a.y + (b.y - a.y) * ratio) * h,
          };
        }
        target -= segLens[i];
      }
      const last = points[points.length - 1];
      return { x: last.x * w, y: last.y * h };
    }

    // ── floating particle network (depth layer) ──
    const PARTICLE_COUNT = isMobile ? 40 : 70;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: rand(0, 1),
        y: rand(0, 1),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.12, 0.12),
        r: rand(1, 2.4),
      });
    }
    const MAX_DIST = 130;

    // ── sparse binary rain columns ──
    const COLS = isMobile ? 5 : 9;
    const rainCols = [];
    for (let i = 0; i < COLS; i++) {
      rainCols.push({
        x: rand(0.04, 0.96),
        y: rand(-1, 0),
        speed: rand(0.03, 0.07),
        chars: Array.from({ length: 12 }, () => pick("01")),
      });
    }

    // ── scanning line ──
    let scanY = 0;

    function draw() {
      const w = W, h = H;
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(245,166,35,0.035)";
      ctx.lineWidth = 1;
      const gridSize = 46;
      for (let gx = 0; gx < w; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }
      for (let gy = 0; gy < h; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();
      }

      paths.forEach((p) => {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(245,166,35,0.12)";
        ctx.lineWidth = 1;
        p.points.forEach((pt, i) => {
          const px = pt.x * w, py = pt.y * h;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();

        p.points.forEach((pt) => {
          ctx.beginPath();
          ctx.fillStyle = "rgba(245,166,35,0.25)";
          ctx.arc(pt.x * w, pt.y * h, 1.6, 0, Math.PI * 2);
          ctx.fill();
        });

        p.pulses.forEach((pulse) => {
          pulse.t += pulse.speed / 100;
          if (pulse.t > 1) pulse.t = 0;
          const pos = pointAtT(p.points, pulse.t, w, h);
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 8);
          grad.addColorStop(0, "rgba(245,166,35,0.9)");
          grad.addColorStop(1, "rgba(245,166,35,0)");
          ctx.beginPath();
          ctx.fillStyle = grad;
          ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,220,150,0.95)";
          ctx.arc(pos.x, pos.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      particles.forEach((pt) => {
        pt.x += pt.vx / w;
        pt.y += pt.vy / h;
        if (pt.x < 0) pt.x = 1;
        if (pt.x > 1) pt.x = 0;
        if (pt.y < 0) pt.y = 1;
        if (pt.y > 1) pt.y = 0;
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = (a.x - b.x) * w, dy = (a.y - b.y) * h;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245,166,35,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      particles.forEach((pt) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(245,166,35,0.6)";
        ctx.arc(pt.x * w, pt.y * h, pt.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.font = "11px monospace";
      rainCols.forEach((col) => {
        col.y += col.speed / 100;
        if (col.y > 1.2) {
          col.y = -0.2;
          col.chars = Array.from({ length: 12 }, () => pick("01"));
        }
        const baseY = col.y * h;
        col.chars.forEach((c, idx) => {
          const yy = baseY - idx * 16;
          if (yy < -20 || yy > h + 20) return;
          const alpha = Math.max(0, 0.5 - idx * 0.045);
          ctx.fillStyle =
            idx === 0 ? `rgba(245,166,35,${alpha + 0.2})` : `rgba(148,163,184,${alpha})`;
          ctx.fillText(c, col.x * w, yy);
        });
      });

      scanY += 0.6;
      if (scanY > h + 100) scanY = -100;
      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      scanGrad.addColorStop(0, "rgba(245,166,35,0)");
      scanGrad.addColorStop(0.5, "rgba(245,166,35,0.05)");
      scanGrad.addColorStop(1, "rgba(245,166,35,0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 60, w, 120);
      ctx.strokeStyle = "rgba(245,166,35,0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

// ── useInView hook ────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── sub-components ────────────────────────────────────────────────────────────

function LanguageToggle({ className = "" }) {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      type="button"
      className={`lang-toggle ${className}`}
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Hindi" : "अंग्रेज़ी में बदलें"}
      title={lang === "en" ? "हिंदी में देखें" : "View in English"}
    >
      <span className={`lang-toggle-opt ${lang === "en" ? "lang-toggle-opt--active" : ""}`}>EN</span>
      <span className="lang-toggle-sep">/</span>
      <span className={`lang-toggle-opt ${lang === "hi" ? "lang-toggle-opt--active" : ""}`}>हिं</span>
    </button>
  );
}

const CONTACT_PLATFORMS = [
  { label: "Email", value: "hello@forfrasolutions.com", href: "mailto:hello@forfrasolutions.com" },
  { label: "Call", value: "+91 97110 15337", href: "tel:+919711015337" },
  { label: "Call", value: "+91 89823 07608", href: "tel:+918982307608" },
  { label: "Instagram", value: "@forfrasolutions", href: "https://instagram.com/forfrasolutions", external: true },
  { label: "LinkedIn", value: "Forfra Solutions", href: "https://www.linkedin.com/company/forfra-solutions/", external: true },
];

function ContactDropdown({ className = "", onItemClick }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div className={`contact-dd-wrap ${className}`} ref={wrapRef}>
      <button
        type="button"
        className="nav-cta contact-dd-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Contact Us
      </button>
      {open && (
        <div className="contact-dd-menu" role="menu">
          {CONTACT_PLATFORMS.map((p, i) => (
            <a
              key={p.label + i}
              href={p.href}
              className="contact-dd-item"
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noopener noreferrer" : undefined}
              role="menuitem"
              onClick={() => { setOpen(false); onItemClick && onItemClick(); }}
            >
              <span className="contact-dd-label">{p.label}</span>
              <span className="contact-dd-value">{p.value}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLinkClick = (e, linkKey) => {
    if (linkKey === "about") {
      e.preventDefault();
      navigate("/about");
    }
    setOpen(false);
  };

  return (
  <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
    <div className="navbar-inner">

      {/* Brand */}
      <a
        href="/"
        className="navbar-brand"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <img
          src={forfraLogo}
          alt="Forfra Solutions"
          className="brand-logo"
        />
        <span className="brand-name">FORFRA</span>
        <span className="brand-sub">SOLUTIONS</span>
      </a>

      {/* Navigation Links */}
      <ul className={`navbar-links ${open ? "navbar-links--open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l.key}>
            <a
              href={l.href}
              onClick={(e) => handleLinkClick(e, l.key)}
            >
              {t.nav[l.key]}
            </a>
          </li>
        ))}

        <li>
          <ContactDropdown onItemClick={() => setOpen(false)} />
        </li>

        <li className="navbar-lang-item">
          <LanguageToggle />
        </li>
      </ul>

      {/* Mobile Controls */}
      <div className="navbar-mobile-controls">
        <LanguageToggle className="lang-toggle--compact" />

        <button
          className={`hamburger ${open ? "hamburger--open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

    </div>
  </nav>
);
}

const HERO_ACTION_META = [
  { to: "/report-crime", icon: Siren, className: "qa-btn qa-report" },
  { to: "/book-lawyer", icon: Scale, className: "qa-btn qa-lawyer" },
  { to: "/forensic-expert", icon: Microscope, className: "qa-btn qa-forensic" },
  { to: "/legal-drafting", icon: FileText, className: "qa-btn qa-drafting" },
];

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero hero--nyay" id="hero">
      <div className="home-root hero-nyay-embed">
        <div className="shield-bg" aria-hidden="true">
          <svg viewBox="0 0 200 220" fill="none">
            <path
              d="M100 6 L20 34 V96 c0 62 34 104 80 118 46-14 80-56 80-118 V34 Z"
              stroke="#c9a227" strokeWidth="3" fill="rgba(201,162,39,0.05)"
            />
            <path
              d="M100 46v128M66 68l34-20 34 20M66 68c0 16-9 30-18 30h72c-9 0-18-14-18-30"
              stroke="#c9a227" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
            />
            <circle cx="100" cy="112" r="10" stroke="#e6c85c" strokeWidth="2" />
          </svg>
        </div>

        <section className="quick-actions">
          <div className="wrap">
            <div className="quick-actions-head">
              <div className="eyebrow" style={{ justifyContent: "center" }}>{t.hero.eyebrow}</div>
              <h1>{t.hero.title}</h1>
              <p>{t.hero.subtitle}</p>
            </div>

            <div className="quick-actions-inner">
              {HERO_ACTION_META.map((meta, i) => {
                const action = t.hero.actions[i];
                const Icon = meta.icon;
                return (
                  <Link className={meta.className} to={meta.to} key={meta.to}>
                    <span className="qa-icon"><Icon size={22} /></span>
                    <span>
                      <div className="qa-text-title">{action.title}</div>
                      <div className="qa-text-sub">{action.sub}</div>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <a href="#about" className="hero-scroll-hint">
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}

function AboutSection() {
  const [ref, inView] = useInView();
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about-inner ${inView ? "reveal" : ""}`}>
        <div className="about-text">
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">
            {t.about.titleLine1}<br />
            <em>{t.about.titleLine2}</em>
          </h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="about-stats">
            {t.about.stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <button className="btn-primary" style={{ marginTop: 28 }} onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
        <div className="about-visual">
          <div className="about-shield">
            <div className="shield-glow" />
            <div className="shield-ring ring-1">
              <span className="orbit-dot dot-a"><ShieldCheck size={15} /></span>
            </div>
            <div className="shield-ring ring-2">
              <span className="orbit-dot dot-b"><Fingerprint size={13} /></span>
            </div>
            <div className="shield-ring ring-3" />
            <div className="shield-center">
              <img src={forfraLogo} alt="Forfra Solutions" className="shield-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [ref, inView] = useInView(0.05);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="services" id="services" ref={ref}>
      <div className={`services-header ${inView ? "reveal" : ""}`}>
        <div className="services-header-top">
          <div>
            <span className="section-eyebrow">{t.services.eyebrow}</span>
            <h2 className="section-title">{t.services.title}</h2>
          </div>
          <button
            className="btn-primary services-learn-more"
            onClick={() => navigate("/services")}
          >
            {t.services.learnMore}
          </button>
        </div>
      </div>
      <div className="services-strip">
        {t.services.items.map((s, i) => {
          const hasFeats = Array.isArray(s.feats) && s.feats.length > 0;
          const isOpen = expandedId === s.id;
          const go = () => {
            if (s.slug) navigate(`/services/${s.slug}`);
            else if (hasFeats) setExpandedId(isOpen ? null : s.id);
          };
          return (
            <div
              className={`service-card ${isOpen ? "service-card--open" : ""}`}
              key={s.id}
              style={{ animationDelay: `${i * 0.07}s`, cursor: "pointer" }}
              onClick={go}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") go(); }}
            >
              <div className="card-id">{s.id}</div>
              <div className="card-icon">{s.icon}</div>
              <div className="card-tag">{s.tag}</div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>

              {hasFeats && (
                <>
                  <button
                    className="card-toggle"
                    aria-expanded={isOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(isOpen ? null : s.id);
                    }}
                  >
                    {isOpen ? "Hide details" : "View key details"}
                    <span className={`card-toggle-icon ${isOpen ? "card-toggle-icon--open" : ""}`}>▾</span>
                  </button>
                  <ul className={`card-feats ${isOpen ? "card-feats--open" : ""}`}>
                    {s.feats.map((f) => (
                      <li key={f}><span className="bullet-dot" />{f}</li>
                    ))}
                  </ul>
                </>
              )}

              {!hasFeats && <div className="card-arrow">→</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const { t } = useLanguage();

  return (
    <section className="capabilities" id="capabilities" ref={ref}>
      <div className={`cap-inner ${inView ? "reveal" : ""}`}>
        <div className="cap-left">
          <span className="section-eyebrow">{t.capabilities.eyebrow}</span>
          <h2 className="section-title">{t.capabilities.title}</h2>
          <div className="cap-tabs">
            {t.capabilities.items.map((c, i) => (
              <button
                key={c.phase}
                className={`cap-tab ${active === i ? "cap-tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-phase">{c.phase}</span>
                <span className="tab-title">{c.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="cap-right">
          {t.capabilities.items.map((c, i) => (
            <div
              key={c.phase}
              className={`cap-panel ${active === i ? "cap-panel--active" : ""}`}
            >
              <div className="panel-phase-badge">{c.phase}</div>
              <h3 className="panel-title">{c.title}</h3>
              <p className="panel-body">{c.body}</p>
              <ul className="panel-bullets">
                {c.bullets.map((b) => (
                  <li key={b}>
                    <span className="bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Position-indexed icons for the differentiator cards (order matches
// t.differentiator.points in both EN and HI translations).
const DIFFERENTIATOR_ICONS = [ShieldCheck, Scale, FileCheck2, Fingerprint];

function DifferentiatorSection() {
  const [ref, inView] = useInView();
  const { t } = useLanguage();
  return (
    <section className="differentiator" id="differentiator" ref={ref}>
      <div className={`diff-inner ${inView ? "reveal" : ""}`}>
        <div className="diff-header">
          <span className="section-eyebrow">{t.differentiator.eyebrow}</span>
          <h2 className="section-title">
            {t.differentiator.titleLine1}<br />
            <em>{t.differentiator.titleLine2}</em>
          </h2>
        </div>
        <div className="diff-grid">
          {t.differentiator.points.map((p, i) => {
            const Icon = DIFFERENTIATOR_ICONS[i];
            return (
              <div
                className="diff-card"
                key={p.title}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="diff-icon"><Icon size={22} /></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Position-indexed icons for the client category pills (order matches
// t.clients.categories in both EN and HI translations).
const CLIENT_CATEGORY_ICONS = [Landmark, Siren, Building2, Briefcase, FileText];

function ClientsSection() {
  const [ref, inView] = useInView();
  const { t } = useLanguage();
  return (
    <section className="clients-section" id="clients" ref={ref}>
      <div className={`clients-header ${inView ? "reveal" : ""}`}>
        <span className="section-eyebrow">{t.clients.eyebrow}</span>
        <h2 className="section-title">{t.clients.title}</h2>
      </div>
      <div className="marquee-outer">
        <div className="marquee-track">
          {[...t.clients.names, ...t.clients.names].map((c, i) => (
            <span key={i} className="marquee-item">{c}</span>
          ))}
        </div>
      </div>
      <div className={`client-categories ${inView ? "reveal" : ""}`}>
        {t.clients.categories.map((cat, i) => {
          const Icon = CLIENT_CATEGORY_ICONS[i];
          return (
            <div key={cat.label} className="cat-pill">
              <span><Icon size={16} /></span> {cat.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const PROGRAM_COLORS = ["var(--gold)", "var(--gold)"];
const PROGRAM_LINKS = ["/corporate-crime-awareness", "/school-crime-awareness"];

function ProgramsSection() {
  const [ref, inView] = useInView();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const programs = t.programs.items.map((p, i) => ({ ...p, color: PROGRAM_COLORS[i], to: PROGRAM_LINKS[i] }));
  return (
    <section className="programs" id="programs" ref={ref}>
      <div className={`programs-inner ${inView ? "reveal" : ""}`}>
        <span className="section-eyebrow">{t.programs.eyebrow}</span>
        <h2 className="section-title">
          {t.programs.titleLine1}<br />
          <em>{t.programs.titleLine2}</em>
        </h2>
        <div className="programs-grid">
          {programs.map((p) => (
            <div
              key={p.title}
              className="program-card"
              role="link"
              tabIndex={0}
              style={{ cursor: p.to ? "pointer" : "default" }}
              onClick={() => p.to && navigate(p.to)}
              onKeyDown={(e) => { if (p.to && (e.key === "Enter" || e.key === " ")) navigate(p.to); }}
            >
              <div className="prog-accent" style={{ background: p.color }} />
              <h3>{p.title}</h3>
              <span className="prog-sub">{p.subtitle}</span>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}><span className="prog-dot" />  {pt}</li>
                ))}
              </ul>
              {p.to && <span className="prog-more">{t.programs.learnMore || "Learn more →"}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView();
  const { t } = useLanguage();

  const links = [
    { icon: Mail, label: "Email", value: "hello@forfrasolutions.com", href: "mailto:hello@forfrasolutions.com" },
    { icon: Phone, label: "Call Us", value: "+91 97110 15337", href: "tel:+919711015337" },
    { icon: Phone, label: "Call Us", value: "+91 89823 07608", href: "tel:+918982307608" },
    { icon: InstagramIcon, label: "Instagram", value: "@forfrasolutions", href: "https://instagram.com/forfrasolutions", external: true },
    { icon: LinkedinIcon, label: "LinkedIn", value: "Forfra Solutions", href: "https://www.linkedin.com/company/forfra-solutions/", external: true },
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className={`contact-inner ${inView ? "reveal" : ""}`}>
        <div className="contact-text">
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title">
            {t.contact.titleLine1}<br />
            {t.contact.titleLine2}
          </h2>
          <p>{t.contact.desc}</p>
          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label + l.value}
                href={l.href}
                className="contact-link"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="contact-link-icon"><l.icon size={19} /></span>
                <span className="contact-link-text">
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-value">{l.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-cta-box">
          <div className="cta-box-title">{t.contact.ctaTitle}</div>
          <a href="mailto:hello@forfrasolutions.com" className="btn-primary btn-primary--large">
            {t.contact.contactUsNow}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-icon"></span>
          <span>FORFRA SOLUTIONS</span>
        </div>
        <p className="footer-tagline">{t.footer.tagline}</p>
        <p className="footer-copy">© {new Date().getFullYear()} Forfra Solutions. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

// ── HomePage ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CapabilitiesSection />
      <DifferentiatorSection />
      <ClientsSection />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}