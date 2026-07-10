import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, User, Phone, Mail, MapPin, FileText, Send, CheckCircle2, Info } from "lucide-react";
import "./BookLawyerPage.css";

/* ══════════════════════════════════════════════════════════════════
   NYAYSHIELD — BOOK A LAWYER
   Demo booking form. No live lawyer network is connected yet — this
   collects details and shows a confirmation screen. Wire the onSubmit
   handler up to your real backend/API when ready.
══════════════════════════════════════════════════════════════════ */

const CASE_TYPES = [
  "Cybercrime / Online Fraud",
  "Theft / Burglary",
  "Assault / Physical Violence",
  "Domestic Violence",
  "Missing Person / Child",
  "Harassment / Cyberbullying",
  "Financial Fraud / Cheating",
  "Drug-Related Crime",
  "Other",
];

const EMPTY_FORM = { name: "", phone: "", email: "", city: "", caseType: "", notes: "" };

// Demo lawyer directory — each entry includes a Gmail contact so the person
// knows who to reach out to. Replace with a real lawyer-network lookup later.
const LAWYER_POOL = [
  { name: "Adv. R. Mehta", gmail: "advocate.rmehta@gmail.com" },
  { name: "Adv. S. Kapoor", gmail: "advocate.skapoor@gmail.com" },
  { name: "Adv. N. Sharma", gmail: "advocate.nsharma@gmail.com" },
  { name: "Adv. P. Iyer", gmail: "advocate.piyer@gmail.com" },
  { name: "Adv. A. Verma", gmail: "advocate.averma@gmail.com" },
];

// Demo-only deterministic hash so the same details always match the same demo lawyer.
function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function BookLawyerPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [assignedLawyer, setAssignedLawyer] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) er.phone = "Please enter a valid phone number.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = "Please enter a valid email.";
    if (!form.city.trim()) er.city = "Please enter your city.";
    if (!form.caseType) er.caseType = "Please select a case type.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: replace with a real API call to your lawyer-matching backend.
    const seed = hashString(form.name + form.phone + form.caseType);
    setAssignedLawyer(LAWYER_POOL[seed % LAWYER_POOL.length]);
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
    setAssignedLawyer(null);
  };

  return (
    <div className="bl-root">
      <div className="bl-topbar">
        <Link className="bl-back" to="/">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="bl-wrap">
        {!submitted && (
          <>
            <div className="bl-hero">
              <div className="bl-eyebrow">Signature Service</div>
              <h1>Book a Lawyer, <em>starting Day 1.</em></h1>
              <p>Tell us a little about your case. A verified criminal lawyer is matched to it — no waiting for court dates, no searching while evidence goes cold.</p>
            </div>

            <div className="bl-disclaimer">
              <Info size={18} />
              <span>
                <b>This is a demo booking form.</b> Submitting it does not contact a real lawyer yet —
                it's a UI preview. No payment, fee, or penalty is involved. Connect this form to your
                actual lawyer network/backend before going live.
              </span>
            </div>

            <form className="bl-form-card" onSubmit={handleSubmit}>
              <div className="bl-grid">
                <div className="bl-field">
                  <label><User size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Full Name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={handleChange("name")} />
                  {errors.name && <div className="bl-error"><Info size={12} /> {errors.name}</div>}
                </div>

                <div className="bl-field">
                  <label><Phone size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Phone</label>
                  <input type="text" placeholder="e.g. +91 98765 43210" value={form.phone} onChange={handleChange("phone")} />
                  {errors.phone && <div className="bl-error"><Info size={12} /> {errors.phone}</div>}
                </div>

                <div className="bl-field">
                  <label><Mail size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Email (optional)</label>
                  <input type="email" placeholder="you@example.com" value={form.email} onChange={handleChange("email")} />
                  {errors.email && <div className="bl-error"><Info size={12} /> {errors.email}</div>}
                </div>

                <div className="bl-field">
                  <label><MapPin size={14} style={{ verticalAlign: -2, marginRight: 6 }} />City</label>
                  <input type="text" placeholder="Your city" value={form.city} onChange={handleChange("city")} />
                  {errors.city && <div className="bl-error"><Info size={12} /> {errors.city}</div>}
                </div>

                <div className="bl-field full">
                  <label><Scale size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Type of Case</label>
                  <select value={form.caseType} onChange={handleChange("caseType")}>
                    <option value="">Select a case type</option>
                    {CASE_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                  </select>
                  {errors.caseType && <div className="bl-error"><Info size={12} /> {errors.caseType}</div>}
                </div>

                <div className="bl-field full">
                  <label><FileText size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Anything the lawyer should know? (optional)</label>
                  <textarea placeholder="Brief context about your case..." value={form.notes} onChange={handleChange("notes")} />
                </div>
              </div>

              <button type="submit" className="bl-submit"><Send size={16} /> Request a Lawyer</button>
              <p className="bl-form-note">🔒 Your details stay confidential. This service is free — no hidden charges.</p>
            </form>
          </>
        )}

        {submitted && (
          <div className="bl-confirm">
            <div className="bl-confirm-icon"><CheckCircle2 size={30} /></div>
            <h2>Request Received{form.name ? `, ${form.name}` : ""}.</h2>
            <p>
              {assignedLawyer ? assignedLawyer.name : "A verified criminal lawyer"} for <b>{form.caseType}</b> cases in {form.city} has been
              matched to your request. (This is a demo confirmation — connect a real backend to actually notify a lawyer.)
            </p>
            <div className="bl-confirm-detail">
              <div><b>Case Type:</b> {form.caseType}</div>
              <div><b>City:</b> {form.city}</div>
              <div><b>Contact:</b> {form.phone}{form.email ? ` · ${form.email}` : ""}</div>
              {assignedLawyer && (
                <>
                  <div><b>Assigned Lawyer:</b> {assignedLawyer.name}</div>
                  <div><b>Lawyer's Gmail:</b> {assignedLawyer.gmail}</div>
                </>
              )}
            </div>
            <div className="bl-confirm-actions">
              <button className="bl-ghost-btn" onClick={resetForm}>Submit Another Request</button>
              <Link className="bl-gold-btn" to="/">Back to Home</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
