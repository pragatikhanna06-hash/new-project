import { useState } from "react";
import { Link } from "react-router-dom";
import { FilePenLine, FileSearch2, FileCheck2 } from "lucide-react";
import "./LegalDraftingPage.css";

const DRAFTER_POOL = [
  "Adv. N. Iyer — Corporate & Legal Drafting",
  "Adv. R. Kapoor — Corporate & Legal Drafting",
  "Adv. S. Varma — Corporate & Legal Drafting",
  "Adv. A. Mehta — Corporate & Legal Drafting",
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function LegalDraftingPage() {
  const [docType, setDocType] = useState("");
  const [orgName, setOrgName] = useState("");
  const [contact, setContact] = useState("");
  const [requirements, setRequirements] = useState("");
  const [match, setMatch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!docType) return;
    // DEMO ONLY — replace with a real matching API call.
    const seed = hashString(orgName + contact + docType);
    setMatch({
      drafter: DRAFTER_POOL[seed % DRAFTER_POOL.length],
      etaHours: 4 + (seed % 20),
      bookingId: "NS-LD-" + String(seed % 100000).padStart(5, "0"),
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
          <div className="eyebrow">Legal &amp; Corporate Drafting</div>
          <h1>Notices, contracts, policies — <em>drafted right, drafted fast.</em></h1>
          <p>Get legal notices, agreements, compliance reports, and corporate policy documents drafted by a qualified legal professional, ready for review or filing.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="drafting-timeline">
            <div className="dt-track">
              <div className="dt-write" />
              <div className="dt-stop">
                <div className="dt-dot"><FilePenLine size={20} /></div>
                <h4>Brief</h4>
                <p>Tell us the document type and what it needs to cover.</p>
              </div>
              <div className="dt-stop">
                <div className="dt-dot"><FileSearch2 size={20} /></div>
                <h4>Draft &amp; Review</h4>
                <p>A qualified drafter prepares the document and checks it against applicable law.</p>
              </div>
              <div className="dt-stop">
                <div className="dt-dot"><FileCheck2 size={20} /></div>
                <h4>Ready to Use</h4>
                <p>Delivered in a format ready for signature, filing, or internal circulation.</p>
              </div>
            </div>
          </div>

          <div className="booking-grid">
            <form className="report-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="ldType">Type of Document</label>
                <select id="ldType" required value={docType} onChange={(e) => setDocType(e.target.value)}>
                  <option value="" disabled>Select what needs to be drafted</option>
                  <option value="notice">Legal Notice</option>
                  <option value="contract">Contract / Agreement</option>
                  <option value="compliance">Compliance Report</option>
                  <option value="policy">Corporate Policy Document</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="ldorg">Your Name / Organization</label>
                <input id="ldorg" type="text" required value={orgName} onChange={(e) => setOrgName(e.target.value)} placeholder="Full name or company name" />
              </div>
              <div className="field">
                <label htmlFor="ldcontact">Phone / Email</label>
                <input id="ldcontact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="How can we reach you?" />
              </div>
              <div className="field">
                <label htmlFor="ldreq">What Should the Document Cover?</label>
                <textarea id="ldreq" value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Key terms, parties involved, purpose, deadlines, etc." />
              </div>
              <button type="submit" className="submit-btn">Request a Draft</button>
              <p className="form-note">🔒 Confidential. Free, demo booking flow — no charges, no obligation.</p>
            </form>

            <div className="detail-panel" aria-live="polite">
              {!match && (
                <div className="detail-empty">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
                  <p>Fill the form — your matched drafter and booking ID will appear here right away.</p>
                </div>
              )}
              {match && (
                <div className="detail-content">
                  <span className="detail-badge sev-drafting">Drafter Matched</span>
                  <h3>{match.drafter}</h3>
                  <p className="detail-desc">
                    Your document will be ready within approximately <b style={{ color: "var(--text)" }}>{match.etaHours} hours</b> for
                    your review before it's finalized.
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
                  <p className="form-note" style={{ marginTop: 18 }}>⚠️ Demo flow — not yet connected to a live drafting network.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
