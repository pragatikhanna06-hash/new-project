import { Link } from "react-router-dom";
import { CalendarClock, History, ArrowRight } from "lucide-react";
import "./BookLawyerPage.css";

/* ══════════════════════════════════════════════════════════════════
   BOOK A LAWYER — choice page
   Splits into two dedicated flows: a lawyer from Day 1 of the case,
   or a lawyer joining a case that's already in progress.
══════════════════════════════════════════════════════════════════ */

export default function BookLawyerPage() {
  return (
    <div className="home-root">
      <nav className="topbar">
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div className="brand">
            <svg className="brand-mark" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L6 12v10c0 11 7.6 19.6 18 22 10.4-2.4 18-11 18-22V12L24 4z" stroke="#c9a227" strokeWidth="2" fill="rgba(201,162,39,0.08)" />
              <path d="M24 14v20M17 20l7-4 7 4M17 20c0 3-2 6-4 6h8c-2 0-4-3-4-6M31 20c0 3-2 6-4 6h8c-2 0-4-3-4-6" stroke="#c9a227" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="brand-name">Nyay<span>Shield</span></div>
          </div>
          <Link className="back-link" to="/">← Back to Home Page</Link>
        </div>
      </nav>

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Book a Lawyer</div>
          <h1>When does your case need a lawyer — <em>now, or already underway?</em></h1>
          <p>Pick the path that matches where you are. Both connect you to a verified criminal lawyer — the only difference is where in the case they step in.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="choice-cards">
            <Link to="/book-lawyer/day-1" className="choice-card featured">
              <span className="tag">Flagship</span>
              <div className="icon-box"><CalendarClock size={26} /></div>
              <h3>Lawyer from Day 1 of the Case</h3>
              <p>File your report and get a lawyer assigned the same day — before evidence goes cold and while every detail is still fresh.</p>
              <span className="go">Start this path <ArrowRight size={15} /></span>
            </Link>

            <Link to="/book-lawyer/in-between" className="choice-card alt">
              <span className="tag" style={{ background: "#2fbfa6" }}>Mid-Case</span>
              <div className="icon-box"><History size={26} /></div>
              <h3>Lawyer in Between the Case</h3>
              <p>Already have an ongoing case — with or without a lawyer — and need someone to step in now? Get matched based on where things currently stand.</p>
              <span className="go">Start this path <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
