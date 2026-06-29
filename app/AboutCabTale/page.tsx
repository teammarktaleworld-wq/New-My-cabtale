"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── tiny hook: fires once when element enters viewport ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = to / 60;
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [visible, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── palette (derived from WhyChooseUs light theme + amber accent) ─── */
const C = {
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  border: "#E5E7EB",
  text: "#111827",
  muted: "#4B5563",
  faint: "#6B7280",
  amber: "#FFC107",
  amberLight: "#FFFBEB",
  amberBorder: "#FEF08A",
  amberDark: "#D97706",
  amberHover: "#FCD34D",
  green: "#10B981",
};

/* ─── SVG icons (inline, matching WhyChooseUs style) ─── */
const icons = {
  mission: (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
      <circle cx="16" cy="16" r="12" strokeWidth="2" />
      <path d="M16 8 L18.5 13.5 L24 14.5 L20 18.5 L21 24 L16 21.5 L11 24 L12 18.5 L8 14.5 L13.5 13.5Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
      <ellipse cx="16" cy="16" rx="12" ry="7" strokeWidth="2" />
      <circle cx="16" cy="16" r="3.5" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
      <path d="M4 16 Q10 6 16 6 Q22 6 28 16" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),
  dashcam: (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
      <rect x="4" y="9" width="18" height="14" rx="3" strokeWidth="2" />
      <path d="M22 13 L28 10 L28 22 L22 19Z" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
      <circle cx="13" cy="16" r="3" strokeWidth="2" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
      <path d="M4 14 Q16 4 28 14" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 19 Q16 12 24 19" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 24 Q16 20 20 24" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="27" r="1.5" fill="currentColor" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
      <rect x="7" y="7" width="18" height="18" rx="4" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="16" cy="16" r="4" strokeWidth="2" />
      <path d="M16 4 L16 7M16 25 L16 28M4 16 L7 16M25 16 L28 16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  driver: (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
      <circle cx="16" cy="12" r="5" strokeWidth="2" />
      <path d="M16 17 C10 17 5 20.5 5 25 L27 25 C27 20.5 22 17 16 17Z" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 5 L26 7 L30 3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ─── STATS ─── */
const STATS = [
  { value: 500, suffix: "+", label: "Premium Cabs" },
  { value: 50000, suffix: "+", label: "Happy Customers" },
  { value: 1000000, suffix: "+", label: "Safe Trips" },
  { value: 4.8, suffix: "/5", label: "Average Rating", isFloat: true },
];

/* ─── VALUES (for the story section) ─── */
const VALUES = [
  { icon: icons.dashcam, title: "AI Dashcam Alerts", desc: "Cabs detect loud noises or unusual vibrations and instantly alert your trusted contacts." },
  { icon: icons.wifi,    title: "Wi-Fi + Live CCTV Link", desc: "Stay connected and share live footage with family from the moment you board." },
  { icon: icons.ai,      title: "AI Security Engine", desc: "Smart monitoring flags unusual situations and pushes real-time notifications without delay." },
  { icon: icons.driver,  title: "Verified Captains", desc: "Every driver is thoroughly background-checked, licensed, and professionally trained." },
];

/* ─── PILLARS (Mission / Vision) ─── */
const PILLARS = [
  {
    icon: icons.mission,
    eyebrow: "Our Mission",
    heading: "Safe mobility for every Indian.",
    body: "To revolutionize cab services across India by integrating cutting-edge AI technology with traditional transportation — so every passenger travels with complete peace of mind.",
  },
  {
    icon: icons.vision,
    eyebrow: "Our Vision",
    heading: "India's most trusted cab network.",
    body: "To set new standards for passenger safety and comfort while expanding across every major city and route in India — one verified, insured, smart-safe ride at a time.",
  },
];

/* ════════════════════════════════════════════════════════ */
export default function AboutCabTale() {
  /* hero entrance */
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroIn(true), 80); return () => clearTimeout(t); }, []);

  const storyReveal    = useReveal();
  const statsReveal    = useReveal();
  const pillarsReveal  = useReveal();
  const valuesReveal   = useReveal();
  const ctaReveal      = useReveal();

  return (
    <main style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: C.bg, color: C.text, overflowX: "hidden" }}>

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 5% 80px",
          position: "relative",
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, #FFFBEB 0%, #FFFFFF 65%)`,
        }}
      >
        {/* Ambient ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(700px, 90vw)",
            height: "min(700px, 90vw)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,193,7,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Eyebrow */}
        <span
          style={{
            display: "inline-block",
            background: C.amberLight,
            border: `1px solid ${C.amberBorder}`,
            borderRadius: 100,
            padding: "6px 18px",
            color: C.amberDark,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 28,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.55s cubic-bezier(0.4,0,0.2,1) 0ms",
          }}
        >
          About CabTale
        </span>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 28px",
            maxWidth: 780,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 80ms",
          }}
        >
          India's First{" "}
          <span
            style={{
              color: C.amber,
              position: "relative",
              display: "inline-block",
            }}
          >
            Smart-Safe
            {/* underline squiggle */}
            <svg
              viewBox="0 0 220 12"
              width="100%"
              height="12"
              style={{ position: "absolute", bottom: -6, left: 0 }}
              preserveAspectRatio="none"
            >
              <path d="M2 9 Q30 2 55 9 Q80 16 110 9 Q140 2 165 9 Q190 16 218 9" stroke={C.amber} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>{" "}
          Cab Service
        </h1>

        {/* Sub */}
        <p
          style={{
            color: C.muted,
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            maxWidth: 560,
            margin: "0 0 48px",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 160ms",
          }}
        >
          Revolutionizing cab services with cutting-edge AI technology, real-time safety features,
          and unmatched comfort across Delhi NCR and beyond.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 240ms",
          }}
        >
          <a
            href="https://www.cabtale.com/booking"
            style={{
              background: C.amber,
              color: "#111827",
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 32px",
              borderRadius: 100,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(255,193,7,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(255,193,7,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(255,193,7,0.35)"; }}
          >
            Book a Ride
          </a>
          <a
            href="https://www.cabtale.com/driver-onboarding"
            style={{
              background: "transparent",
              color: C.text,
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 32px",
              borderRadius: 100,
              textDecoration: "none",
              border: `2px solid ${C.border}`,
              transition: "border-color 0.2s, background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.amberHover; (e.currentTarget as HTMLElement).style.background = C.amberLight; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            Become a Driver
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: heroIn ? 0.45 : 0,
            transition: "opacity 0.8s 0.8s",
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.faint }}>Scroll</span>
          <div style={{ width: 1.5, height: 36, background: `linear-gradient(to bottom, ${C.amber}, transparent)`, borderRadius: 2, animation: "scrollPulse 1.8s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ══ 2. STATS BAR ══════════════════════════════════════════ */}
      <div
        ref={statsReveal.ref}
        style={{
          background: C.text,
          padding: "64px 5%",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                opacity: statsReveal.visible ? 1 : 0,
                transform: statsReveal.visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 90}ms`,
              }}
            >
              <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color: C.amber, letterSpacing: "-0.02em", lineHeight: 1 }}>
                {s.isFloat
                  ? <span ref={useReveal(0.3).ref}>{statsReveal.visible ? s.value : 0}{s.suffix}</span>
                  : <Counter to={s.value} suffix={s.suffix} />
                }
              </div>
              <div style={{ color: "#9CA3AF", fontSize: 14, fontWeight: 600, marginTop: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ 3. OUR STORY ══════════════════════════════════════════ */}
      <section
        ref={storyReveal.ref}
        style={{ padding: "110px 5%", maxWidth: 1280, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            opacity: storyReveal.visible ? 1 : 0,
            transform: storyReveal.visible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Left: text */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: C.amberLight,
                border: `1px solid ${C.amberBorder}`,
                borderRadius: 100,
                padding: "6px 16px",
                color: C.amberDark,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Our Story
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                margin: "0 0 24px",
              }}
            >
              Built on one belief —<br />
              <span style={{ color: C.amber }}>every ride should feel safe.</span>
            </h2>
            <p style={{ color: C.muted, fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>
              At CabTale, your safety is our priority. Our cabs come equipped with advanced dashcams that detect loud noises or unusual vibrations and instantly alert the trusted contacts you've chosen.
            </p>
            <p style={{ color: C.muted, fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
              This ensures that in any disturbance or emergency, help is swiftly informed — making every journey safer, more secure, and genuinely worry-free. We're committed to setting new standards in passenger safety across India.
            </p>

            {/* Highlight pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: C.amberLight,
                border: `1px solid ${C.amberBorder}`,
                borderRadius: 12,
                padding: "14px 20px",
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, flexShrink: 0 }} />
              <span style={{ color: C.amberDark, fontSize: 14, fontWeight: 700 }}>
                Customer-first approach — your safety drives everything we do
              </span>
            </div>
          </div>

          {/* Right: 2×2 mini-cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="story-card"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  padding: "28px 24px",
                  cursor: "default",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  opacity: storyReveal.visible ? 1 : 0,
                  transform: storyReveal.visible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${i * 80}ms`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px) scale(1.02)";
                  el.style.background = "#FFF";
                  el.style.borderColor = C.amberHover;
                  el.style.boxShadow = "0 16px 40px -8px rgba(0,0,0,0.08)";
                  const ic = el.querySelector(".sc-icon") as HTMLElement;
                  if (ic) { ic.style.background = C.amber; ic.style.color = "#FFF"; }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.background = C.surface;
                  el.style.borderColor = C.border;
                  el.style.boxShadow = "none";
                  const ic = el.querySelector(".sc-icon") as HTMLElement;
                  if (ic) { ic.style.background = C.amberLight; ic.style.color = C.amberDark; }
                }}
              >
                <div
                  className="sc-icon"
                  style={{
                    width: 52,
                    height: 52,
                    background: C.amberLight,
                    color: C.amberDark,
                    borderRadius: 13,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    transition: "all 0.3s ease",
                  }}
                >
                  {v.icon}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 800, color: C.text, margin: "0 0 8px" }}>{v.title}</h4>
                <p style={{ fontSize: 13, color: C.faint, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. MISSION + VISION ═══════════════════════════════════ */}
      <section
        ref={pillarsReveal.ref}
        style={{ background: C.text, padding: "110px 5%" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 28,
            }}
          >
            {PILLARS.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 28,
                  padding: "56px 48px",
                  opacity: pillarsReveal.visible ? 1 : 0,
                  transform: pillarsReveal.visible ? "translateY(0)" : "translateY(36px)",
                  transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 120}ms`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Amber glow top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,193,7,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(255,193,7,0.12)",
                    color: C.amber,
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 32,
                  }}
                >
                  {p.icon}
                </div>

                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(255,193,7,0.12)",
                    color: C.amber,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 100,
                    marginBottom: 20,
                  }}
                >
                  {p.eyebrow}
                </span>
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    margin: "0 0 18px",
                  }}
                >
                  {p.heading}
                </h3>
                <p style={{ color: "#9CA3AF", fontSize: 16, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. ADVANCED SAFETY FEATURE BLOCK ═════════════════════ */}
      <section
        ref={valuesReveal.ref}
        style={{ padding: "110px 5%" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Section header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 72,
              flexWrap: "wrap",
              gap: 32,
              opacity: valuesReveal.visible ? 1 : 0,
              transform: valuesReveal.visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div style={{ flex: "1 1 480px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: C.amberLight,
                  border: `1px solid ${C.amberBorder}`,
                  borderRadius: 100,
                  padding: "6px 16px",
                  color: C.amberDark,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Advanced Safety
              </span>
              <h2
                style={{
                  color: C.text,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                AI-powered protection,<br />
                <span style={{ color: C.amber }}>active on every trip.</span>
              </h2>
            </div>
            <p
              style={{
                color: C.muted,
                fontSize: 17,
                lineHeight: 1.65,
                maxWidth: 420,
                margin: 0,
                flexShrink: 0,
              }}
            >
              Our AI safety systems — real-time monitoring, emergency alerts, and live CCTV feeds accessible to your trusted contacts — ensure help is always just a tap away.
            </p>
          </div>

          {/* Two big highlight cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                accent: C.amber,
                eyebrow: "Real-Time Monitoring",
                heading: "A safety net that never sleeps.",
                body: "CabTale's AI engine watches for anomalies the moment you board. Unusual sounds, sudden stops, or irregular routes trigger instant alerts — keeping you safe without you lifting a finger.",
                extra: (
                  <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                    {["Live dashcam feed", "Noise detection", "Route deviation alert"].map(t => (
                      <span key={t} style={{ background: C.amberLight, border: `1px solid ${C.amberBorder}`, color: C.amberDark, fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 100 }}>{t}</span>
                    ))}
                  </div>
                ),
              },
              {
                accent: C.green,
                eyebrow: "Peace of Mind",
                heading: "Your people stay in the loop.",
                body: "Share a live trip link with family or friends — they see your real-time location, driver details, and CCTV feed. With CabTale, every journey is a shared experience in safety.",
                extra: (
                  <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                    {["Live location share", "Trusted contacts", "Instant SOS"].map(t => (
                      <span key={t} style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", color: "#065F46", fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 100 }}>{t}</span>
                    ))}
                  </div>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 28,
                  padding: "48px 40px",
                  position: "relative",
                  overflow: "hidden",
                  opacity: valuesReveal.visible ? 1 : 0,
                  transform: valuesReveal.visible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 120}ms`,
                }}
              >
                {/* Top accent stripe */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: card.accent,
                    borderRadius: "28px 28px 0 0",
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: card.accent,
                    marginBottom: 18,
                  }}
                >
                  {card.eyebrow}
                </span>
                <h3 style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 16px", color: C.text }}>{card.heading}</h3>
                <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.75, margin: 0 }}>{card.body}</p>
                {card.extra}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. CTA ════════════════════════════════════════════════ */}
      <section
        ref={ctaReveal.ref}
        style={{
          padding: "100px 5%",
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, #FFFBEB 0%, #FFFFFF 70%)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            opacity: ctaReveal.visible ? 1 : 0,
            transform: ctaReveal.visible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.65s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: C.amberLight,
              border: `1px solid ${C.amberBorder}`,
              borderRadius: 100,
              padding: "6px 16px",
              color: C.amberDark,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Get Started
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Experience Smart-Safe<br />
            <span style={{ color: C.amber }}>Travel Today</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 18, lineHeight: 1.7, marginBottom: 44 }}>
            Join thousands who trust CabTale for their daily commute and outstation journeys — India's safest, smartest cab service.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.cabtale.com/booking"
              style={{
                background: C.amber,
                color: "#111827",
                fontWeight: 800,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 100,
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(255,193,7,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px rgba(255,193,7,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(255,193,7,0.35)"; }}
            >
              Book Your Ride
            </a>
            <a
              href="https://www.cabtale.com/driver-onboarding"
              style={{
                background: "transparent",
                color: C.text,
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 100,
                textDecoration: "none",
                border: `2px solid ${C.border}`,
                transition: "border-color 0.2s, background 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.amberHover; (e.currentTarget as HTMLElement).style.background = C.amberLight; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Become a Driver
            </a>
          </div>
        </div>
      </section>

      {/* ══ Keyframe for scroll pulse ═══════════════════════════ */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(0.9); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
        @media (max-width: 768px) {
          /* story grid collapses to 1 col on mobile */
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}