import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, FileSearch, FileCheck2 } from "lucide-react";
import "./ForensicExpertPage.css";

const EXPERT_POOL = [
  "Dr. A. Krishnan — Digital Forensics Examiner",
  "Dr. L. Fernandes — Digital Forensics Examiner",
  "Dr. P. Bhatt — Physical Evidence Examiner",
  "Dr. S. Reddy — Physical Evidence Examiner",
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function ForensicExpertPage() {
  const [evidenceType, setEvidenceType] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [match, setMatch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!evidenceType) return;
    // DEMO ONLY — replace with a real matching API call.
    const seed = hashString(name + contact + evidenceType);
    setMatch({
      expert: EXPERT_POOL[seed % EXPERT_POOL.length],
      etaHours: 2 + (seed % 8),
      bookingId: "NS-FX-" + String(seed % 100000).padStart(5, "0"),
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
          <div className="eyebrow">Forensic Services</div>
          <h1>Evidence fades fast — <em>secure it before it does.</em></h1>
          <p>Certified forensic experts document and preserve digital and physical evidence so it holds up in court, however long the case takes to conclude.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="evidence-timeline">
            <div className="et-track">
              <div className="et-scan" />
              <div className="et-stop">
                <div className="et-dot"><ShieldCheck size={20} /></div>
                <h4>Secure</h4>
                <p>Evidence is collected and sealed before it degrades or gets tampered with.</p>
              </div>
              <div className="et-stop">
                <div className="et-dot"><FileSearch size={20} /></div>
                <h4>Analyze</h4>
                <p>Certified examiners document chain of custody and findings.</p>
              </div>
              <div className="et-stop">
                <div className="et-dot"><FileCheck2 size={20} /></div>
                <h4>Court-Ready Report</h4>
                <p>A formal report your lawyer can submit directly as evidence.</p>
              </div>
            </div>
          </div>

          <div className="booking-grid">
            <form className="report-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="evType">Type of Evidence</label>
                <select id="evType" required value={evidenceType} onChange={(e) => setEvidenceType(e.target.value)}>
                  <option value="" disabled>Select what needs to be examined</option>
                  <option value="digital">Digital (phone, laptop, accounts)</option>
                  <option value="physical">Physical (objects, documents, scene)</option>
                  <option value="medical">Medical / Biological</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="fxname">Your Name</label>
                <input id="fxname" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
              </div>
              <div className="field">
                <label htmlFor="fxcontact">Phone / Email</label>
                <input id="fxcontact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="How can we reach you?" />
              </div>
              <div className="field">
                <label htmlFor="fxnotes">What Needs to Be Preserved?</label>
                <textarea id="fxnotes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Briefly describe the evidence and where it currently is" />
              </div>
              <button type="submit" className="submit-btn">Book a Forensic Expert</button>
              <p className="form-note">🔒 Confidential. Free, demo booking flow — no charges, no obligation.</p>
            </form>

            <div className="detail-panel" aria-live="polite">
              {!match && (
                <div className="detail-empty">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
                  <p>Fill the form — your matched forensic expert and booking ID will appear here right away.</p>
                </div>
              )}
              {match && (
                <div className="detail-content">
                  <span className="detail-badge sev-forensic">Expert Matched</span>
                  <h3>{match.expert}</h3>
                  <p className="detail-desc">
                    They'll reach out within approximately <b style={{ color: "var(--text)" }}>{match.etaHours} hours</b> to
                    begin securing and documenting the evidence.
                  </p>
                  <div className="links-label"><span>Booking Details</span></div>
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
                  <p className="form-note" style={{ marginTop: 18 }}>⚠️ Demo flow — not yet connected to a live forensic network.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
