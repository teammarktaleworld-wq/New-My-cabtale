"use client";

import Link from "next/link";

const LINKS = {
  Company: ["About us", "Careers", "Press", "Blog", "Contact"],
  Riders: ["Book a ride", "Ride types", "Safety", "App download", "Help center"],
  Drivers: ["Drive with us", "Earnings", "Insurance", "Driver app", "Support"],
  Legal: ["Privacy policy", "Terms of service", "Cookie policy", "Accessibility"],
};

const SOCIALS = [
  {
    label: "Twitter / X",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 2 L8.5 8.5 M14 2 L2 14 M8.5 8.5 L14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 6.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="4" cy="4.5" r="0.8" fill="currentColor" />
        <path d="M7.5 12V9C7.5 7.5 8.5 6.5 10 6.5C11.5 6.5 12 7.5 12 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 6.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#050505",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "80px 40px 40px",
      fontFamily: "'Inter','Helvetica Neue',sans-serif",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "64px",
        }} className="ct-footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                background: "#FFC107",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg viewBox="0 0 24 18" width="18" height="14" fill="none">
                  <path d="M3 13 L4.5 7 Q5.5 4 8 4 L16 4 Q18.5 4 19.5 7 L21 13 Q21 15 19 15 L5 15 Q3 15 3 13Z" fill="#0A0A0A" />
                  <circle cx="7.5" cy="15.5" r="2.5" fill="#0A0A0A" stroke="#FFC107" strokeWidth="1" />
                  <circle cx="16.5" cy="15.5" r="2.5" fill="#0A0A0A" stroke="#FFC107" strokeWidth="1" />
                  <rect x="9" y="1" width="6" height="4" rx="1" fill="#0A0A0A" />
                </svg>
              </div>
              <span style={{ color: "white", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.03em" }}>
                Cab<span style={{ color: "#FFC107" }}>Tale</span>
              </span>
            </div>

            <p style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "14px",
              lineHeight: 1.7,
              margin: "0 0 24px",
              maxWidth: "260px",
            }}>
              Every journey has a Tale. Safe, transparent cab rides across 200+ cities in India.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIALS.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.45)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,193,7,0.1)";
                    el.style.borderColor = "rgba(255,193,7,0.3)";
                    el.style.color = "#FFC107";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFC107")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "28px" }} />

        {/* Bottom row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px", margin: 0 }}>
            © 2026 CabTale Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>All systems operational</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ct-footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .ct-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}