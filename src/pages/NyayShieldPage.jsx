import { useState } from "react";
import { Link } from "react-router-dom";
import { Siren, Scale, ClipboardList, Info } from "lucide-react";
import "./NyayShieldPage.css";

/* ══════════════════════════════════════════════════════════════════
   NYAYSHIELD — HOME PAGE
   Converted from the original static index.html into a React component.
   Three primary action buttons live in the Quick Actions bar below the
   nav — Report a Crime / Book a Lawyer / Case Information — each routes
   to its own page via react-router-dom's <Link>.
══════════════════════════════════════════════════════════════════ */

const CRIME_DATA = {
  cyber: {
    label: "Cybercrime / Online Fraud",
    severity: "cyber",
    sevLabel: "Cyber",
    description:
      "Cybercrime covers online fraud, hacking, phishing, UPI/banking scams, fake job or loan offers, identity theft, and unauthorized access to your accounts or devices. Evidence such as screenshots, transaction IDs, and message logs should be preserved immediately, as digital trails can be altered or deleted quickly. Reports are routed to the Indian Cyber Crime Coordination Centre (I4C), and financial-fraud complaints can trigger an immediate transaction freeze if filed within the golden hour.",
    links: [
      { title: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in/" },
      { title: "Cyber Crime Helpline — 1930 (Financial Fraud)", url: "https://cybercrime.gov.in/Webform/Helpline.aspx" },
      { title: "RBI Sachet — Report Financial Fraud", url: "https://sachet.rbi.org.in/" },
    ],
  },
  theft: {
    label: "Theft / Burglary",
    severity: "high",
    sevLabel: "High Priority",
    description:
      "Theft and burglary involve unlawful taking of property, vehicles, or valuables from a person, home, or business. File an FIR at your local police station as soon as possible — most states now allow an e-FIR for theft below a certain value, which speeds up insurance claims and recovery efforts. Keep an itemized list with approximate values, purchase bills, and photos where available.",
    links: [
      { title: "Digital Police Citizen Services (e-FIR)", url: "https://digitalpolicecitizenservices.gov.in/" },
      { title: "National Emergency Number — 112", url: "https://www.112.gov.in/" },
    ],
  },
  assault: {
    label: "Assault / Physical Violence",
    severity: "high",
    sevLabel: "Urgent",
    description:
      "Assault covers any act causing physical harm or credible threat of harm to a person. If you or someone else is in immediate danger, contact emergency services before filing any report. Medical documentation (a medico-legal certificate from a government hospital) strengthens the case significantly and should be obtained within 24–48 hours of the incident wherever possible.",
    links: [
      { title: "National Emergency Number — 112", url: "https://www.112.gov.in/" },
      { title: "National Human Rights Commission", url: "https://nhrc.nic.in/" },
    ],
  },
  domestic: {
    label: "Domestic Violence",
    severity: "high",
    sevLabel: "Confidential & Urgent",
    description:
      "Domestic violence includes physical, emotional, sexual, or economic abuse by a family member or partner. Protection orders can be obtained under the Protection of Women from Domestic Violence Act, and complaints can be filed confidentially through a Protection Officer. You do not need to involve the accused's family to seek help — support and shelter services are available independently.",
    links: [
      { title: "National Commission for Women — Online Complaint", url: "https://ncwapps.nic.in/onlinecomplaintsv2/" },
      { title: "Women Helpline — 181", url: "https://wcd.nic.in/schemes/women-helpline-scheme" },
      { title: "National Commission for Women", url: "https://ncw.nic.in/" },
    ],
  },
  missing: {
    label: "Missing Person / Child",
    severity: "high",
    sevLabel: "Time-Critical",
    description:
      "Every hour matters in a missing person case. File a complaint at the nearest police station immediately — there is no mandatory waiting period before filing. For a missing child, cases are automatically treated as a possible kidnapping until found, and details are shared across state databases through dedicated tracking portals.",
    links: [
      { title: "Track the Missing Child Portal", url: "https://www.trackthemissingchild.gov.in/" },
      { title: "Digital Police Citizen Services", url: "https://digitalpolicecitizenservices.gov.in/" },
      { title: "National Emergency Number — 112", url: "https://www.112.gov.in/" },
    ],
  },
  harassment: {
    label: "Harassment / Cyberbullying",
    severity: "cyber",
    sevLabel: "Cyber",
    description:
      "Harassment includes stalking, threatening messages, non-consensual sharing of images, and online bullying across social media or messaging apps. Do not delete the offending messages or posts — preserve them as screenshots with visible timestamps and profile details before reporting, as platforms may remove content after a complaint is filed.",
    links: [
      { title: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in/" },
      { title: "National Commission for Women — Online Complaint", url: "https://ncwapps.nic.in/onlinecomplaintsv2/" },
    ],
  },
  financial: {
    label: "Financial Fraud / Cheating",
    severity: "medium",
    sevLabel: "Financial",
    description:
      "Financial fraud includes cheating in investments, fake loan apps, Ponzi schemes, and forged documents. If money was transferred digitally, report within the first hour to the 1930 helpline for the best chance of a transaction freeze. Keep all payment receipts, chat records, and the accused's contact or account details ready before filing.",
    links: [
      { title: "RBI Sachet — Report Financial Fraud", url: "https://sachet.rbi.org.in/" },
      { title: "Cyber Crime Helpline — 1930", url: "https://cybercrime.gov.in/Webform/Helpline.aspx" },
      { title: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in/" },
    ],
  },
  drugs: {
    label: "Drug-Related Crime",
    severity: "high",
    sevLabel: "High Priority",
    description:
      "This covers possession, sale, or trafficking of narcotic substances. Reports can be made confidentially, and identities of informants are protected under law. If you or someone close to you needs help with substance dependence rather than reporting a crime, dedicated de-addiction and counselling helplines are also available.",
    links: [
      { title: "Narcotics Control Bureau", url: "https://narcoticsindia.nic.in/" },
      { title: "National Emergency Number — 112", url: "https://www.112.gov.in/" },
    ],
  },
};

const SPECIALIST_POOL = [
  "Adv. R. Mehta — Case Registration Specialist",
  "Adv. S. Kapoor — Case Registration Specialist",
  "Adv. N. Sharma — Case Registration Specialist",
  "Adv. P. Iyer — Case Registration Specialist",
  "Adv. A. Verma — Case Registration Specialist",
];

// Demo-only deterministic hash so the same inputs always produce the same demo match.
function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function NyayShieldPage() {
  const [crimeType, setCrimeType] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [incidentDesc, setIncidentDesc] = useState("");
  const [activeBooking, setActiveBooking] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!crimeType) return;
    // DEMO ONLY — replace with a real API call to your specialist-matching backend.
    const seed = hashString(name + contact + crimeType);
    setActiveBooking({
      specialist: SPECIALIST_POOL[seed % SPECIALIST_POOL.length],
      etaHours: 2 + (seed % 10),
      bookingId: "NS-" + String(seed % 100000).padStart(5, "0"),
      crimeLabel: CRIME_DATA[crimeType].label,
    });
    document.getElementById("detailPanel")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="home-root">
      {/* ---------- NAV ---------- */}
      <nav className="topbar">
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div className="brand">
            <svg className="brand-mark" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L6 12v10c0 11 7.6 19.6 18 22 10.4-2.4 18-11 18-22V12L24 4z" stroke="#c9a227" strokeWidth="2" fill="rgba(201,162,39,0.08)" />
              <path d="M24 14v20M17 20l7-4 7 4M17 20c0 3-2 6-4 6h8c-2 0-4-3-4-6M31 20c0 3-2 6-4 6h8c-2 0-4-3-4-6" stroke="#c9a227" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="brand-name">Nyay<span>Shield</span></div>
          </div>
          <div className="nav-links">
            <Link to="/">← Forfra Solutions</Link>
            <a href="#report">Report a Crime</a>
            <a href="#lawyer">Lawyer, Day 1</a>
            <a href="#forensic">Forensic Services</a>
          </div>
          <Link className="nav-cta" to="/case-status" style={{ textDecoration: "none" }}>
            Check Case Status
          </Link>
        </div>
      </nav>

      {/* ---------- QUICK ACTIONS (the 3 requested buttons) ---------- */}
      <section className="quick-actions">
        <div className="wrap quick-actions-inner">
          <Link className="qa-btn qa-report" to="/report-crime">
            <span className="qa-icon"><Siren size={22} /></span>
            <span>
              <div className="qa-text-title">Report a Crime</div>
              <div className="qa-text-sub">File details, get routed instantly</div>
            </span>
          </Link>

          <Link className="qa-btn qa-lawyer" to="/book-lawyer">
            <span className="qa-icon"><Scale size={22} /></span>
            <span>
              <div className="qa-text-title">Book a Lawyer</div>
              <div className="qa-text-sub">Verified criminal lawyer, Day 1</div>
            </span>
          </Link>

          <Link className="qa-btn qa-info" to="/case-status">
            <span className="qa-icon"><ClipboardList size={22} /></span>
            <span>
              <div className="qa-text-title">Check Your Case Status</div>
              <div className="qa-text-sub">Track progress & next hearing date</div>
            </span>
          </Link>
        </div>
      </section>

      {/* ---------- USP PORTAL ---------- */}
      <section className="usp-section" id="lawyer">
        <div className="wrap">
          <div className="usp-head">
            <div className="eyebrow">Why NyayShield</div>
            <h2>You're never alone after a crime — <em>from the very first hour.</em></h2>
            <p>Most platforms let you file a complaint and stop there. We stay with you: legal defence, evidence protection, and a lawyer on your case starting Day 1 — not after the FIR clears.</p>
          </div>

          <div className="usp-banner">
            <div className="usp-banner-text">
              <span className="tag">Our Flagship USP</span>
              <h3>Get a Lawyer from Day 1 of Your Crime</h3>
              <p>The moment you report, a verified criminal lawyer is assigned to your case — no waiting for court dates, no searching for representation while evidence goes cold.</p>
            </div>
            <Link to="/book-lawyer" className="usp-banner-cta">Book a Lawyer Now →</Link>
          </div>

          <div className="pillars">
            <div className="pillar p1">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7v3a4 4 0 0 1-1.2 2.86A1 1 0 0 0 4.5 16.5h15a1 1 0 0 0 .7-1.64A4 4 0 0 1 19 12V9a7 7 0 0 0-7-7Z" /><path d="M9 19a3 3 0 0 0 6 0" /></svg>
              </div>
              <div className="num">01 · Report</div>
              <h4>Report a Crime</h4>
              <p>File a detailed report in minutes. Every entry is routed to the right authority instantly, with a full guidance panel for exactly your situation.</p>
            </div>

            <div className="pillar p2">
              <div className="badge">Signature Service</div>
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3 7l9 4 9-4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></svg>
              </div>
              <h4>Book a Lawyer from Day 1</h4>
              <p>A licensed criminal lawyer is matched to your case the day you report — building your defence while the trail is still fresh, not after it goes cold.</p>
            </div>

            <div className="pillar p3">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              </div>
              <div className="num">03 · Evidence</div>
              <h4>Forensic Services</h4>
              <p>Certified forensic experts secure digital and physical evidence early, so it holds up in court when it matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOK A SPECIALIST TO REGISTER CRIME ---------- */}
      <section className="report-section" id="report">
        <div className="wrap">
          <div className="eyebrow">Guided Filing</div>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,38px)", fontWeight: 700, marginBottom: 10 }}>Book a Specialist to Register Crime</h2>
          <p style={{ color: "var(--text-dim)", maxWidth: 600, marginBottom: 40 }}>
            Don't file alone. Tell us what happened and a case-registration specialist is matched to you —
            they help you draft, file, and follow up on your complaint with the right authority.
            For the full step-by-step flow instead, use the dedicated <Link to="/report-crime" style={{ color: "var(--gold-soft)" }}>Report a Crime</Link> page.
          </p>

          <div className="report-grid">
            <form className="report-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="crimeType">Type of Crime</label>
                <select id="crimeType" required value={crimeType} onChange={(e) => setCrimeType(e.target.value)}>
                  <option value="" disabled>Select the crime you want to register</option>
                  {Object.entries(CRIME_DATA).map(([key, d]) => (
                    <option key={key} value={key}>{d.label}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="fullName">Your Name</label>
                <input type="text" id="fullName" placeholder="Full name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="contact">Phone / Email</label>
                <input type="text" id="contact" placeholder="How can we reach you?" required value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="incidentDesc">Describe What Happened</label>
                <textarea id="incidentDesc" placeholder="Share as much detail as you're comfortable with — date, place, people involved..." value={incidentDesc} onChange={(e) => setIncidentDesc(e.target.value)} />
              </div>
              <button type="submit" className="submit-btn">Book a Specialist</button>
              <p className="form-note">🔒 Your details are confidential. This is a free, demo booking flow.</p>
            </form>

            <div className="detail-panel" id="detailPanel">
              {!activeBooking && (
                <div className="detail-empty">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
                  <p>Fill the form on the left — your matched specialist and booking details will appear here instantly.</p>
                </div>
              )}

              {activeBooking && (
                <div className="detail-content">
                  <span className="detail-badge sev-medium">Specialist Matched</span>
                  <h3>{activeBooking.specialist}</h3>
                  <p className="detail-desc">
                    Matched for <b style={{ color: "var(--text)" }}>{activeBooking.crimeLabel}</b> cases.
                    They'll reach out within approximately <b style={{ color: "var(--text)" }}>{activeBooking.etaHours} hours</b> to
                    help you draft and file your complaint with the right authority.
                  </p>
                  <div className="links-label" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span>Booking Details</span>
                    <span className="live-tag">
                      <span className="l-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#2fbfa6", display: "inline-block" }} />
                      Demo booking
                    </span>
                  </div>
                  <div className="link-list">
                    <div className="link-item" style={{ cursor: "default" }}>
                      <span className="l-left">
                        <span className="l-dot" />
                        <span className="l-text">
                          <div className="l-title">Booking ID</div>
                          <div className="l-url">{activeBooking.bookingId}</div>
                        </span>
                      </span>
                    </div>
                    <div className="link-item" style={{ cursor: "default" }}>
                      <span className="l-left">
                        <span className="l-dot" />
                        <span className="l-text">
                          <div className="l-title">Contact on File</div>
                          <div className="l-url">{contact}</div>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="form-note" style={{ marginTop: 18 }}>
                    ⚠️ Demo flow — not yet connected to a live specialist network. Free, no penalty, no charges.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
