import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookLawyerDay1Page.css";

const LAWYER_POOL = [
  "Adv. K. Rao — Criminal Defence, Day-1 Response Team",
  "Adv. M. Sinha — Criminal Defence, Day-1 Response Team",
  "Adv. T. Bose — Criminal Defence, Day-1 Response Team",
  "Adv. D. Chauhan — Criminal Defence, Day-1 Response Team",
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function BookLawyerDay1Page() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [caseDesc, setCaseDesc] = useState("");
  const [match, setMatch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // DEMO ONLY — replace with a real matching API call.
    const seed = hashString(name + contact + caseDesc);
    setMatch({
      lawyer: LAWYER_POOL[seed % LAWYER_POOL.length],
      etaHours: 1 + (seed % 4),
      bookingId: "NS-D1-" + String(seed % 100000).padStart(5, "0"),
    });
  };

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
          <div className="eyebrow">Lawyer · Day 1</div>
          <h1>Get a lawyer assigned <em>the same day you report.</em></h1>
          <p>Tell us the basics and a criminal defence lawyer from our Day-1 response team is matched to your case immediately.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap booking-grid">
          <form className="report-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="d1name">Your Name</label>
              <input id="d1name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
            </div>
            <div className="field">
              <label htmlFor="d1contact">Phone / Email</label>
              <input id="d1contact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="How can we reach you?" />
            </div>
            <div className="field">
              <label htmlFor="d1desc">Briefly Describe the Case</label>
              <textarea id="d1desc" value={caseDesc} onChange={(e) => setCaseDesc(e.target.value)} placeholder="What happened, and when?" />
            </div>
            <button type="submit" className="submit-btn gold">Assign a Lawyer Now</button>
            <p className="form-note">🔒 Confidential. Free, demo booking flow — no charges, no obligation.</p>
          </form>

          <div className="detail-panel">
            {!match && (
              <div className="detail-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
                <p>Fill the form — your assigned lawyer and booking ID will appear here right away.</p>
              </div>
            )}
            {match && (
              <div className="detail-content">
                <span className="detail-badge sev-medium">Lawyer Assigned</span>
                <h3>{match.lawyer}</h3>
                <p className="detail-desc">
                  They'll reach out within approximately <b style={{ color: "var(--text)" }}>{match.etaHours} hour(s)</b> to
                  begin building your defence while the case is still fresh.
                </p>
                <div className="links-label">
                  <span>Booking Details</span>
                </div>
                <div className="link-list">
                  <div className="link-item" style={{ cursor: "default" }}>
                    <span className="l-left">
                      <span className="l-dot" />
                      <span className="l-text">
                        <div className="l-title">Booking ID</div>
                        <div className="l-url">{match.bookingId}</div>
                      </span>
                    </span>
                  </div>
                </div>
                <p className="form-note" style={{ marginTop: 18 }}>⚠️ Demo flow — not yet connected to a live lawyer network.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
