import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookLawyerInBetweenPage.css";

const LAWYER_POOL = [
  "Adv. R. Menon — Mid-Case Transition Specialist",
  "Adv. S. Ghosh — Mid-Case Transition Specialist",
  "Adv. V. Nair — Mid-Case Transition Specialist",
  "Adv. J. Thakur — Mid-Case Transition Specialist",
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function BookLawyerInBetweenPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [stage, setStage] = useState("");
  const [caseDesc, setCaseDesc] = useState("");
  const [match, setMatch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // DEMO ONLY — replace with a real matching API call.
    const seed = hashString(name + contact + caseDesc + stage);
    setMatch({
      lawyer: LAWYER_POOL[seed % LAWYER_POOL.length],
      etaHours: 3 + (seed % 12),
      bookingId: "NS-MC-" + String(seed % 100000).padStart(5, "0"),
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
          <div className="eyebrow">Lawyer · In Between the Case</div>
          <h1>Bring in a lawyer <em>wherever your case currently stands.</em></h1>
          <p>Whether you're mid-investigation, awaiting a hearing, or switching representation, tell us the current stage and we'll match someone who can step in without losing time.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap booking-grid">
          <form className="report-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="mcname">Your Name</label>
              <input id="mcname" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
            </div>
            <div className="field">
              <label htmlFor="mccontact">Phone / Email</label>
              <input id="mccontact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="How can we reach you?" />
            </div>
            <div className="field">
              <label htmlFor="mcstage">Current Stage of the Case</label>
              <select id="mcstage" required value={stage} onChange={(e) => setStage(e.target.value)}>
                <option value="" disabled>Select the current stage</option>
                <option value="investigation">Under Police Investigation</option>
                <option value="chargesheet">Chargesheet Filed</option>
                <option value="trial">Trial in Progress</option>
                <option value="switching">Switching from Current Lawyer</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="mcdesc">Briefly Describe the Case</label>
              <textarea id="mcdesc" value={caseDesc} onChange={(e) => setCaseDesc(e.target.value)} placeholder="What's the case about, and where does it stand?" />
            </div>
            <button type="submit" className="submit-btn gold">Find a Lawyer for My Stage</button>
            <p className="form-note">🔒 Confidential. Free, demo booking flow — no charges, no obligation.</p>
          </form>

          <div className="detail-panel">
            {!match && (
              <div className="detail-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
                <p>Fill the form — your matched lawyer and booking ID will appear here right away.</p>
              </div>
            )}
            {match && (
              <div className="detail-content">
                <span className="detail-badge sev-cyber">Lawyer Matched</span>
                <h3>{match.lawyer}</h3>
                <p className="detail-desc">
                  They'll review your case stage and reach out within approximately <b style={{ color: "var(--text)" }}>{match.etaHours} hours</b> to
                  discuss next steps.
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
