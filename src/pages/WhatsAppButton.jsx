import { useState } from "react";
import { BUSINESS_WHATSAPP_NUMBER } from "./config";
import "./WhatsAppButton.css";

// ── EDIT THIS in src/config.js, not here ────────────────────────────────────
const WHATSAPP_NUMBER = BUSINESS_WHATSAPP_NUMBER;
const DEFAULT_MESSAGE =
  "Hi NyayShield, I'd like to know more about your services.";
// ─────────────────────────────────────────────────────────────────────────────

const QUICK_OPTIONS = [
  { label: "Book a Lawyer", message: "Hi, I'd like to book a lawyer." },
  { label: "Forensic / Evidence Help", message: "Hi, I need forensic/evidence handling help." },
  { label: "Legal Drafting", message: "Hi, I need a legal document drafted." },
  { label: "Something Else", message: DEFAULT_MESSAGE },
];

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wa-fab-wrap">
      {open && (
        <div className="wa-panel" role="menu">
          <div className="wa-panel-head">
            <div className="wa-panel-avatar">💬</div>
            <div>
              <div className="wa-panel-title">NyayShield Support</div>
              <div className="wa-panel-sub">Typically replies within minutes</div>
            </div>
            <button
              className="wa-panel-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <p className="wa-panel-prompt">What do you need help with?</p>

          <div className="wa-panel-options">
            {QUICK_OPTIONS.map((opt) => (
              <a
                key={opt.label}
                href={waLink(opt.message)}
                target="_blank"
                rel="noreferrer"
                className="wa-option"
                onClick={() => setOpen(false)}
              >
                {opt.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        className={`wa-fab ${open ? "wa-fab--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
      >
        {open ? (
          <span className="wa-fab-icon-close">✕</span>
        ) : (
          <svg viewBox="0 0 32 32" className="wa-fab-icon" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.615 4.66 1.782 6.687L2.7 29.333l6.82-1.789a13.27 13.27 0 0 0 6.48 1.652h.006c7.363 0 13.333-5.97 13.333-13.334 0-3.562-1.388-6.911-3.907-9.43a13.246 13.246 0 0 0-9.431-3.765zm0 24.4h-.005a11.05 11.05 0 0 1-5.63-1.542l-.404-.24-4.049 1.062 1.081-3.947-.263-.406a11.02 11.02 0 0 1-1.69-5.894c0-6.104 4.966-11.07 11.066-11.07a11.02 11.02 0 0 1 7.826 3.24 10.98 10.98 0 0 1 3.238 7.83c0 6.104-4.966 11.07-11.07 11.07zm6.07-8.29c-.332-.166-1.965-.97-2.27-1.08-.305-.112-.527-.166-.75.166-.222.333-.86 1.08-1.054 1.302-.194.222-.388.25-.72.083-.332-.166-1.403-.517-2.673-1.65-.988-.882-1.655-1.97-1.849-2.303-.194-.332-.02-.512.146-.677.15-.15.332-.388.5-.583.166-.194.221-.333.332-.555.111-.222.055-.417-.028-.583-.083-.166-.75-1.808-1.028-2.475-.27-.65-.545-.562-.75-.572l-.638-.012c-.222 0-.583.083-.888.417-.305.332-1.165 1.138-1.165 2.777s1.192 3.223 1.358 3.446c.166.222 2.347 3.584 5.687 5.026.795.343 1.415.548 1.898.702.797.253 1.523.217 2.097.132.64-.095 1.965-.803 2.242-1.58.277-.777.277-1.442.194-1.58-.083-.138-.305-.222-.638-.388z"
            />
          </svg>
        )}
        {!open && <span className="wa-fab-pulse" />}
      </button>
    </div>
  );
}
