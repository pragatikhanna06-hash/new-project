import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList, User, Hash, Scale, Send, Info, RotateCcw,
  Gavel, BarChart3, BookOpen, Landmark, ScrollText, ShieldCheck, ExternalLink,
} from "lucide-react";
import "./CaseStatusPage.css";

// Verified Government of India links relevant to tracking a case.
// Official domains only — no redirectors, no embeds, no tracking.
const GOVT_LINKS = [
  {
    title: "eCourts Services",
    desc: "Official case status, cause lists & orders for district/high courts.",
    url: "https://services.ecourts.gov.in",
    icon: Gavel,
  },
  {
    title: "National Judicial Data Grid (NJDG)",
    desc: "Live pendency & disposal data for courts across India.",
    url: "https://njdg.ecourts.gov.in",
    icon: BarChart3,
  },
  {
    title: "NALSA — Free Legal Aid",
    desc: "Apply for free legal aid under the Legal Services Authorities Act.",
    url: "https://nalsa.gov.in",
    icon: BookOpen,
  },
  {
    title: "Digital Police Portal",
    desc: "NCRB / MHA portal for FIR status, verification & citizen services.",
    url: "https://digitalpolice.gov.in",
    icon: Landmark,
  },
  {
    title: "India Code",
    desc: "Official digital repository of all Central & State Acts.",
    url: "https://www.indiacode.nic.in",
    icon: ScrollText,
  },
  {
    title: "National Cyber Crime Reporting Portal",
    desc: "Report cybercrime directly to the Ministry of Home Affairs (I4C).",
    url: "https://cybercrime.gov.in",
    icon: ShieldCheck,
  },
];

/* ══════════════════════════════════════════════════════════════════
   NYAYSHIELD — CASE INFORMATION / STATUS TRACKER
   IMPORTANT: This is a DEMO screen. It is NOT connected to any real
   court or police database (eCourts, CIS, etc). The "progress %" and
   "next hearing date" shown are deterministically generated from the
   case number you type in, purely so the same input always gives the
   same demo result. Wire the fetchCaseStatus() function below to a
   real API (e.g. eCourts) before using this in production.
══════════════════════════════════════════════════════════════════ */

const STAGES = ["FIR Filed", "Investigation", "Chargesheet", "Trial", "Judgment"];

const EMPTY_FORM = { name: "", caseNumber: "", caseType: "", city: "" };

// Simple deterministic hash so the same case number always produces the same demo result.
function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

// DEMO ONLY — replace with a real API call, e.g.:
// const res = await fetch(`/api/case-status?caseNumber=${caseNumber}`);
function fetchCaseStatus({ caseNumber }) {
  const seed = hashString(caseNumber.trim().toUpperCase());
  const progress = 10 + (seed % 86); // 10–95%
  const stageIndex = Math.min(STAGES.length - 1, Math.floor((progress / 100) * STAGES.length));
  const daysAhead = 5 + (seed % 55); // 5–60 days out
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + daysAhead);
  const formattedDate = nextDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  return { progress, stageIndex, nextDate: formattedDate };
}

export default function CaseStatusPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!form.caseNumber.trim()) er.caseNumber = "Please enter your case / FIR number.";
    if (!form.caseType) er.caseType = "Please select a case type.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setResult(fetchCaseStatus(form));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setResult(null);
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

      <div className="cs-wrap">
        {!result && (
          <>
            <div className="page-hero cs-hero">
              <div className="eyebrow" style={{ justifyContent: "center" }}>Case Information</div>
              <h1>Track your <em>case status.</em></h1>
              <p>Enter your details and case number to see how far your case has progressed and your next hearing date.</p>
            </div>

            <div className="cs-disclaimer">
              <Info size={18} />
              <span>
                <b>This is a demo tracker, not a live court database.</b> It is not connected to
                eCourts or any police/judicial system, so the result is illustrative only — 100%
                free, no penalty, no real data is fetched or shared. For your actual case status,
                use the official{" "}
                <a href="https://services.ecourts.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>
                  eCourts India
                </a>{" "}
                portal.
              </span>
            </div>

            <form className="cs-form-card" onSubmit={handleSubmit}>
              <div className="cs-grid">
                <div className="cs-field">
                  <label><User size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Your Name</label>
                  <input type="text" placeholder="Full name" value={form.name} onChange={handleChange("name")} />
                  {errors.name && <div className="cs-error"><Info size={12} /> {errors.name}</div>}
                </div>

                <div className="cs-field">
                  <label><Hash size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Case / FIR Number</label>
                  <input type="text" placeholder="e.g. FIR-2026-00231" value={form.caseNumber} onChange={handleChange("caseNumber")} />
                  {errors.caseNumber && <div className="cs-error"><Info size={12} /> {errors.caseNumber}</div>}
                </div>

                <div className="cs-field full">
                  <label><Scale size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Type of Case</label>
                  <select value={form.caseType} onChange={handleChange("caseType")}>
                    <option value="">Select a case type</option>
                    <option>Cybercrime / Online Fraud</option>
                    <option>Theft / Burglary</option>
                    <option>Assault / Physical Violence</option>
                    <option>Domestic Violence</option>
                    <option>Missing Person / Child</option>
                    <option>Harassment / Cyberbullying</option>
                    <option>Financial Fraud / Cheating</option>
                    <option>Drug-Related Crime</option>
                    <option>Other</option>
                  </select>
                  {errors.caseType && <div className="cs-error"><Info size={12} /> {errors.caseType}</div>}
                </div>

                <div className="cs-field full">
                  <label><ClipboardList size={14} style={{ verticalAlign: -2, marginRight: 6 }} />City / Court (optional)</label>
                  <input type="text" placeholder="e.g. Ludhiana District Court" value={form.city} onChange={handleChange("city")} />
                </div>
              </div>

              <button type="submit" className="cs-submit"><Send size={16} /> Check Case Status</button>
              <p className="form-note">🔒 Free to use. No penalty or fee involved.</p>
            </form>
          </>
        )}

        {result && (
          <div className="cs-result">
            <span className="cs-demo-tag">Demo Result — Not Live Court Data</span>
            <div className="cs-result-head">
              <h2>Case Status{form.name ? ` for ${form.name}` : ""}</h2>
              <span className="cs-case-id">{form.caseNumber}</span>
            </div>

            <div className="cs-progress-wrap">
              <div className="cs-progress-label">
                <span>Progress</span>
                <span>{result.progress}%</span>
              </div>
              <div className="cs-progress-track">
                <div className="cs-progress-fill" style={{ width: `${result.progress}%` }} />
              </div>
              <div className="cs-stage-row">
                {STAGES.map((s, i) => (
                  <div key={s} className={`cs-stage ${i < result.stageIndex ? "done" : i === result.stageIndex ? "current" : ""}`}>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="cs-info-grid">
              <div className="cs-info-card">
                <div className="k">Current Stage</div>
                <div className="v">{STAGES[result.stageIndex]}</div>
              </div>
              <div className="cs-info-card next-date">
                <div className="k">Next Hearing Date</div>
                <div className="v">{result.nextDate}</div>
              </div>
              <div className="cs-info-card">
                <div className="k">Case Type</div>
                <div className="v">{form.caseType}</div>
              </div>
              <div className="cs-info-card">
                <div className="k">City / Court</div>
                <div className="v">{form.city || "Not specified"}</div>
              </div>
            </div>

            <div className="cs-result-actions">
              <button className="cs-ghost-btn" onClick={resetForm}><RotateCcw size={15} style={{ verticalAlign: -2, marginRight: 6 }} />Check Another Case</button>
              <Link className="cs-gold-btn" to="/">Back to Home</Link>
            </div>
          </div>
        )}

        <section className="govt-section">
          <div className="govt-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Official Government Resources</div>
            <h2>Verified links, straight from the source</h2>
            <p>Every link below points to an official Government of India (.gov.in / .nic.in) portal. Nothing is proxied, embedded, or tracked — each opens directly in a new tab.</p>
          </div>
          <div className="govt-grid">
            {GOVT_LINKS.map(({ title, desc, url, icon: Icon }) => (
              <a
                key={url}
                className="govt-card"
                href={url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="govt-icon"><Icon size={20} /></span>
                <span className="govt-text">
                  <span className="govt-title">{title} <ExternalLink size={13} className="govt-ext" /></span>
                  <span className="govt-desc">{desc}</span>
                  <span className="govt-url">{url.replace("https://", "")}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
