"use client";

const STEPS = [
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <circle cx="20" cy="16" r="7" stroke="#FFC107" strokeWidth="2" />
        <path d="M20 23 C12 23 6 27 6 32 L34 32 C34 27 28 23 20 23Z" stroke="#FFC107" strokeWidth="2" fill="none" />
        <circle cx="20" cy="16" r="2.5" fill="#FFC107" />
      </svg>
    ),
    step: "01",
    title: "Enter your destination",
    desc: "Type where you're headed. We'll show you the fare before you confirm — no surprises.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect x="6" y="18" width="28" height="14" rx="3" stroke="#FFC107" strokeWidth="2" />
        <path d="M10 18 L12 10 Q13.5 6 17 6 L23 6 Q26.5 6 28 10 L30 18" stroke="#FFC107" strokeWidth="2" fill="none" />
        <circle cx="12" cy="32" r="3" fill="#FFC107" />
        <circle cx="28" cy="32" r="3" fill="#FFC107" />
        <rect x="16" y="8" width="8" height="3" rx="1" fill="#FFC107" opacity="0.5" />
      </svg>
    ),
    step: "02",
    title: "Get matched instantly",
    desc: "A verified driver nearby accepts your ride. Watch them approach on the live map.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <path d="M8 20 L17 29 L32 12" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="16" stroke="#FFC107" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    step: "03",
    title: "Ride & share your Tale",
    desc: "Enjoy the ride. Rate your driver afterward and share the story if it's worth telling.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "#0D0D0D",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        border: "1px solid rgba(255,193,7,0.06)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "900px",
        height: "900px",
        borderRadius: "50%",
        border: "1px solid rgba(255,193,7,0.03)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            How it works
          </span>
          <h2 style={{
            color: "white",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}>
            Three steps to your next ride
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          position: "relative",
        }}>
          {/* Connector line (desktop only) */}
          <div style={{
            position: "absolute",
            top: "68px",
            left: "20%",
            right: "20%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,193,7,0.3), transparent)",
            pointerEvents: "none",
          }} className="ct-connector" />

          {STEPS.map((s, i) => (
            <div
              key={s.step}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "40px 32px",
                position: "relative",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,193,7,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Step number */}
              <div style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                fontSize: "48px",
                fontWeight: 900,
                color: "rgba(255,193,7,0.06)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}>
                {s.step}
              </div>

              {/* Icon */}
              <div style={{
                width: "72px",
                height: "72px",
                background: "rgba(255,193,7,0.08)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}>
                {s.icon}
              </div>

              <h3 style={{
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}>
                {s.title}
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "15px",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}