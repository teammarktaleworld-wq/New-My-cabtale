"use client";

const PILLARS = [
  {
    number: "01",
    title: "Driver background checks",
    desc: "Every driver undergoes a police verification, license authenticity check, and vehicle fitness inspection before their first CabTale ride.",
    color: "#FFC107",
  },
  {
    number: "02",
    title: "Live GPS sharing",
    desc: "Share a live tracking link with anyone. They see your driver's name, vehicle plate, current location, and ETA — updated every 10 seconds.",
    color: "#4ADE80",
  },
  {
    number: "03",
    title: "One-tap SOS",
    desc: "Press SOS to instantly alert our safety team and ping your emergency contacts with your GPS location, trip ID, and driver details.",
    color: "#FB923C",
  },
  {
    number: "04",
    title: "Ride insurance",
    desc: "All passengers are covered by a third-party liability insurance policy from pickup to drop at no extra cost.",
    color: "#A78BFA",
  },
];

export default function SafetySection() {
  return (
    <section
      id="safety"
      style={{
        background: "#0D0D0D",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large background text */}
      <div style={{
        position: "absolute",
        bottom: "-40px",
        right: "-20px",
        fontSize: "200px",
        fontWeight: 900,
        color: "rgba(255,193,7,0.03)",
        letterSpacing: "-0.06em",
        userSelect: "none",
        lineHeight: 1,
        pointerEvents: "none",
      }}>
        SAFE
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
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
            marginBottom: "20px",
          }}>
            Your safety
          </span>
          <h2 style={{
            color: "white",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            margin: "0 0 20px",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            maxWidth: "600px",
          }}>
            We take safety<br />
            <span style={{ color: "#FFC107" }}>seriously.</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "17px",
            lineHeight: 1.65,
            maxWidth: "480px",
            margin: 0,
          }}>
            Four layers of protection on every single ride. Not just on paper — built into the product.
          </p>
        </div>

        {/* Pillars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}>
          {PILLARS.map((p) => (
            <div
              key={p.number}
              style={{
                borderLeft: `3px solid ${p.color}`,
                padding: "32px 28px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "0 16px 16px 0",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)")}
            >
              <div style={{
                fontSize: "48px",
                fontWeight: 900,
                color: `${p.color}20`,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "16px",
              }}>
                {p.number}
              </div>
              <h3 style={{
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}>
                {p.title}
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop: "64px",
          background: "rgba(255,193,7,0.06)",
          border: "1px solid rgba(255,193,7,0.15)",
          borderRadius: "16px",
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(255,193,7,0.1)",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2L19 6V12C19 16.4 15.5 20.4 11 21C6.5 20.4 3 16.4 3 12V6L11 2Z" stroke="#FFC107" strokeWidth="1.8" fill="none" />
              <path d="M7 11L10 14L15 9" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ color: "white", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>
              Safety helpline: 1800-XXX-XXXX
            </div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
              Available 24/7. Average response time: 90 seconds.
            </div>
          </div>
          <button style={{
            background: "#FFC107",
            color: "#0A0A0A",
            border: "none",
            borderRadius: "100px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}>
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}