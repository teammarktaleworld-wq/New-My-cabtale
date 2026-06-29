"use client";

import React, { useEffect, useState } from "react";

const C = {
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  border: "#E5E7EB",
  text: "#111827",
  muted: "#4B5563",
  faint: "#6B7280",
  dark: "#111827",
  amber: "#FFC107",
  amberLight: "#FFFBEB",
  amberBorder: "#FEF08A",
  amberDark: "#D97706",
  green: "#10B981",
};

const eyebrow: React.CSSProperties = {
  background: C.amberLight,
  border: `1px solid ${C.amberBorder}`,
  borderRadius: 100,
  padding: "6px 18px",
  color: C.amberDark,
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

export default function BookingPage() {
  const [heroIn, setHeroIn] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* simple float animation counter for the decorative dots */
  const features = [
    { icon: "📞", label: "24/7 Available", sub: "We pick up any hour" },
    { icon: "⚡", label: "Instant Booking", sub: "Confirmed in seconds" },
    { icon: "🛡️", label: "Safe & Verified", sub: "AI safety on every ride" },
    { icon: "📍", label: "Live Tracking", sub: "Share with loved ones" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
        background: C.bg,
        color: C.text,
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* ══ HERO / COMING SOON ══════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 5% 80px",
          position: "relative",
          background: `radial-gradient(ellipse 90% 65% at 50% 0%, #FFFBEB 0%, #FFFFFF 60%)`,
        }}
      >
        {/* ambient ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "min(720px,90vw)",
            height: "min(720px,90vw)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(255,193,7,0.08) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Rocket icon */}
        <div
          style={{
            fontSize: 72,
            marginBottom: 32,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
            transition: "all 0.7s cubic-bezier(0.34,1.56,0.64,1) 0ms",
            animation: heroIn ? "float 3s ease-in-out infinite" : "none",
          }}
        >
          🚀
        </div>

        {/* Eyebrow */}
        <span
          style={{
            ...eyebrow,
            display: "inline-block",
            marginBottom: 24,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.55s cubic-bezier(0.4,0,0.2,1) 80ms",
          }}
        >
          Coming Soon
        </span>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(36px,6vw,72px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 20px",
            maxWidth: 780,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 140ms",
          }}
        >
          CabTale Booking App
          <br />
          <span
            style={{
              color: C.amber,
              position: "relative",
              display: "inline-block",
            }}
          >
            is on its way.
            <svg
              viewBox="0 0 200 12"
              width="100%"
              height="12"
              style={{ position: "absolute", bottom: -6, left: 0 }}
              preserveAspectRatio="none"
            >
              <path
                d="M2 9 Q30 2 55 9 Q80 16 100 9 Q120 2 148 9 Q170 16 198 9"
                stroke={C.amber}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
        </h1>

        {/* Sub */}
        <p
          style={{
            color: C.muted,
            fontSize: "clamp(15px,2vw,19px)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 0 52px",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 200ms",
          }}
        >
          Our mobile app is launching soon on Android and iOS. Until then, book your ride instantly by calling us — we're available 24/7.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 72,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 260ms",
          }}
        >
          <a
            href="tel:01169656817"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: C.amber,
              color: "#111827",
              fontWeight: 800,
              fontSize: 17,
              padding: "18px 40px",
              borderRadius: 100,
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(255,193,7,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px rgba(255,193,7,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(255,193,7,0.4)";
            }}
          >
            <span style={{ fontSize: 20 }}>📞</span>
            Call us — +91 85376 64228
          </a>

          <a
            href="tel:01169656817"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "transparent",
              color: C.text,
              fontWeight: 700,
              fontSize: 16,
              padding: "18px 36px",
              borderRadius: 100,
              textDecoration: "none",
              border: `2px solid ${C.border}`,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = C.amberBorder;
              (e.currentTarget as HTMLElement).style.background = C.amberLight;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = C.border;
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            01169656817
          </a>
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 16,
            maxWidth: 820,
            width: "100%",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 320ms",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 20,
                padding: "22px 20px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.amberBorder;
                el.style.background = C.amberLight;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.border;
                el.style.background = C.surface;
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 15, color: C.text, marginBottom: 4 }}>
                {f.label}
              </div>
              <div style={{ fontSize: 12, color: C.faint }}>{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ NOTIFY ME STRIP ════════════════════════════════════ */}
      <section style={{ background: C.dark, padding: "80px 5%" }}>
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,193,7,0.12)",
              color: C.amber,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            Get Notified
          </span>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(24px,3.5vw,40px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: "0 0 14px",
            }}
          >
            Be first when the app drops.
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            Get exclusive launch offers and early access — drop your email and we'll ping you the moment we go live.
          </p>

          {submitted ? (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: C.green,
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 32px",
                borderRadius: 100,
              }}
            >
              ✅ You're on the list!
            </div>
          ) : (
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: "1 1 260px",
                  maxWidth: 340,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 100,
                  padding: "14px 24px",
                  color: "#FFFFFF",
                  fontSize: 15,
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={() => { if (email) setSubmitted(true); }}
                style={{
                  background: C.amber,
                  color: "#111827",
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "14px 32px",
                  borderRadius: 100,
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Notify Me
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        input::placeholder { color: #6B7280; }
      `}</style>
    </div>
  );
}