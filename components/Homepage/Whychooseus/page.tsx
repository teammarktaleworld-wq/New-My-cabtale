"use client";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 3 L28 8 L28 18 C28 24 22 29 16 31 C10 29 4 24 4 18 L4 8 Z" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
        <path d="M10 16 L14 20 L22 12" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Verified drivers only",
    desc: "Every CabTale driver goes through background checks, license verification, and a rated onboarding test.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#FFC107" strokeWidth="1.8" />
        <path d="M16 8 L18.5 13.5 L24 14.5 L20 18.5 L21 24 L16 21.5 L11 24 L12 18.5 L8 14.5 L13.5 13.5Z" stroke="#FFC107" strokeWidth="1.5" fill="rgba(255,193,7,0.08)" />
      </svg>
    ),
    title: "Transparent pricing",
    desc: "See the full fare before you tap confirm. No surge surprises, no hidden fees at journey's end.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="13" r="5" stroke="#FFC107" strokeWidth="1.8" />
        <path d="M16 18 C10 18 5 21.5 5 26 L27 26 C27 21.5 22 18 16 18Z" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
        <path d="M24 6 L26 8 L30 4" stroke="#FFC107" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-time tracking",
    desc: "Share your live location with family while you ride. They see every turn; you ride in peace.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect x="5" y="8" width="22" height="16" rx="3" stroke="#FFC107" strokeWidth="1.8" />
        <path d="M10 16 L22 16M10 12 L18 12M10 20 L15 20" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="25" cy="7" r="4" fill="#4ADE80" />
      </svg>
    ),
    title: "24 / 7 support",
    desc: "Stuck, lost, or just have a question? Our support team picks up in under 90 seconds, any hour.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M6 24 L8 12 Q9.5 7 14 7 L18 7 Q22.5 7 24 12 L26 24" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
        <circle cx="11" cy="24" r="3.5" stroke="#FFC107" strokeWidth="1.8" />
        <circle cx="21" cy="24" r="3.5" stroke="#FFC107" strokeWidth="1.8" />
        <path d="M6 18 L4 14" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "SOS button",
    desc: "One tap sends your GPS, driver details, and trip info to your emergency contacts and our safety team.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 4 C10 4 5 9 5 15 C5 21 10 27 16 28 C22 27 27 21 27 15 C27 9 22 4 16 4Z" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
        <path d="M11 15 L15 19 L21 11" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Insured every ride",
    desc: "All rides come with passenger insurance coverage — from pickup to drop, you're protected.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      style={{
        background: "#0D0D0D",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <span style={{
              display: "inline-block",
              background: "rgba(255,193,7,0.1)",
              border: "1px solid rgba(255,193,7,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              color: "#FFC107",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              Why CabTale
            </span>
            <h2 style={{
              color: "white",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "480px",
            }}>
              Safety and trust,<br />built into every ride
            </h2>
          </div>
          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "16px",
            lineHeight: 1.65,
            maxWidth: "360px",
            margin: 0,
          }}>
            We don't just move you from A to B. We do it in a way where you — and the people who care about you — feel completely at ease.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "28px 24px",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,193,7,0.25)";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div style={{
                flexShrink: 0,
                width: "52px",
                height: "52px",
                background: "rgba(255,193,7,0.08)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ color: "white", fontSize: "16px", fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}