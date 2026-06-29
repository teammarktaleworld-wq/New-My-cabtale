"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── reveal hook ─── */
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

/* ─── palette (matches WhyChooseUs / About) ─── */
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
  amberHover: "#FCD34D",
  green: "#10B981",
};

/* ─── SERVICE TYPES ─── */
const SERVICES = [
  {
    emoji: "🏙️",
    title: "City Rides",
    subtitle: "Safe and comfortable daily city commutes",
    bullets: ["Instant booking", "Fixed pricing", "Trusted drivers"],
  },
  {
    emoji: "✈️",
    title: "Airport Transfers",
    subtitle: "On-time pickup and drop services",
    bullets: ["Flight tracking", "24/7 available", "Meet & greet"],
  },
  {
    emoji: "🛣️",
    title: "Outstation Trips",
    subtitle: "Long-distance travel with comfort",
    bullets: ["Round trip", "Multi-city", "Flexible timing"],
  },
  {
    emoji: "💼",
    title: "Corporate Travel",
    subtitle: "Professional business transportation",
    bullets: ["Monthly billing", "Priority booking", "Dedicated support"],
  },
];

/* ─── SAFETY FEATURES ─── */
const SAFETY = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
        <rect x="4" y="9" width="18" height="14" rx="3" strokeWidth="2" />
        <path d="M22 13 L28 10 L28 22 L22 19Z" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
        <circle cx="13" cy="16" r="3" strokeWidth="2" />
      </svg>
    ),
    badge: "Wi-Fi + Live CCTV Link",
    heading: "Stay watched over, always.",
    body: "Complimentary in-cab Wi-Fi and live CCTV footage you can share with trusted contacts — so someone you trust always knows you're safe.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
        <rect x="7" y="7" width="18" height="18" rx="4" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <circle cx="16" cy="16" r="4" strokeWidth="2" />
        <path d="M16 4 L16 7M16 25 L16 28M4 16 L7 16M25 16 L28 16" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    badge: "AI-Powered Danger Detection",
    heading: "An AI co-pilot that never blinks.",
    body: "Unusual noises, sudden stops, or route deviations — our AI catches them instantly and alerts your emergency contacts before you even have to ask.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor">
        <circle cx="16" cy="12" r="5" strokeWidth="2" />
        <path d="M16 17 C10 17 5 20.5 5 25 L27 25 C27 20.5 22 17 16 17Z" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M24 5 L26 7 L30 3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "Verified CabTale Captains",
    heading: "Every driver, fully vetted.",
    body: "Background checks, license verification, and regular safety assessments — every captain on CabTale has earned the wheel before they take yours.",
  },
];

/* ─── FLEET ─── */
const FLEET = [
  {
    type: "Hatchback",
    seats: "4 Seater",
    rate: "₹11/km",
    color: "#6366F1",
    colorLight: "#EEF2FF",
    colorBorder: "#C7D2FE",
    perks: ["Great mileage", "Easy city parking", "Low maintenance", "Smooth daily commute"],
    tagline: "Compact, fuel-efficient, and perfect for city driving.",
    svg: (
      <svg viewBox="0 0 160 80" width="160" height="80" fill="none">
        {/* body */}
        <rect x="10" y="38" width="140" height="26" rx="6" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="1.5"/>
        {/* roof */}
        <path d="M40 38 Q50 18 75 16 Q95 14 115 16 Q130 18 140 38Z" fill="#6366F1" fillOpacity="0.25" stroke="#6366F1" strokeWidth="1.5"/>
        {/* windows */}
        <path d="M55 36 Q60 22 75 20 Q88 18 100 20 Q108 22 112 36Z" fill="#6366F1" fillOpacity="0.4"/>
        {/* wheels */}
        <circle cx="40" cy="64" r="12" fill="#374151" stroke="#6366F1" strokeWidth="2"/>
        <circle cx="40" cy="64" r="5" fill="#6B7280"/>
        <circle cx="120" cy="64" r="12" fill="#374151" stroke="#6366F1" strokeWidth="2"/>
        <circle cx="120" cy="64" r="5" fill="#6B7280"/>
        {/* headlight */}
        <ellipse cx="148" cy="48" rx="5" ry="4" fill="#FCD34D" fillOpacity="0.8"/>
        {/* tail */}
        <ellipse cx="12" cy="48" rx="4" ry="3" fill="#EF4444" fillOpacity="0.7"/>
      </svg>
    ),
  },
  {
    type: "Sedan",
    seats: "4 Seater",
    rate: "₹13/km",
    color: "#0EA5E9",
    colorLight: "#E0F2FE",
    colorBorder: "#BAE6FD",
    perks: ["Spacious interiors", "Comfortable ride", "Premium features", "Long travel"],
    tagline: "Stylish, spacious, and perfect for families or executives.",
    svg: (
      <svg viewBox="0 0 160 80" width="160" height="80" fill="none">
        <rect x="8" y="40" width="144" height="24" rx="5" fill="#0EA5E9" fillOpacity="0.15" stroke="#0EA5E9" strokeWidth="1.5"/>
        <path d="M32 40 Q42 20 70 17 Q96 14 118 17 Q132 20 140 40Z" fill="#0EA5E9" fillOpacity="0.22" stroke="#0EA5E9" strokeWidth="1.5"/>
        <path d="M48 38 Q55 22 72 20 Q92 18 110 20 Q120 22 126 38Z" fill="#0EA5E9" fillOpacity="0.4"/>
        <circle cx="38" cy="64" r="12" fill="#374151" stroke="#0EA5E9" strokeWidth="2"/>
        <circle cx="38" cy="64" r="5" fill="#6B7280"/>
        <circle cx="122" cy="64" r="12" fill="#374151" stroke="#0EA5E9" strokeWidth="2"/>
        <circle cx="122" cy="64" r="5" fill="#6B7280"/>
        <ellipse cx="150" cy="49" rx="5" ry="4" fill="#FCD34D" fillOpacity="0.8"/>
        <ellipse cx="10" cy="49" rx="4" ry="3" fill="#EF4444" fillOpacity="0.7"/>
      </svg>
    ),
  },
  {
    type: "SUV",
    seats: "7 Seater",
    rate: "₹15/km",
    color: "#10B981",
    colorLight: "#ECFDF5",
    colorBorder: "#A7F3D0",
    perks: ["All-terrain performance", "Spacious seating", "Advanced safety", "Perfect for road trips"],
    tagline: "Rugged, powerful, and ready for every adventure.",
    svg: (
      <svg viewBox="0 0 160 80" width="160" height="80" fill="none">
        <rect x="6" y="36" width="148" height="28" rx="6" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
        <path d="M28 36 Q35 16 65 14 Q100 12 125 14 Q138 16 148 36Z" fill="#10B981" fillOpacity="0.22" stroke="#10B981" strokeWidth="1.5"/>
        <path d="M42 34 Q48 18 68 16 Q96 14 116 16 Q126 18 130 34Z" fill="#10B981" fillOpacity="0.4"/>
        <circle cx="36" cy="64" r="13" fill="#374151" stroke="#10B981" strokeWidth="2"/>
        <circle cx="36" cy="64" r="5" fill="#6B7280"/>
        <circle cx="124" cy="64" r="13" fill="#374151" stroke="#10B981" strokeWidth="2"/>
        <circle cx="124" cy="64" r="5" fill="#6B7280"/>
        <ellipse cx="152" cy="48" rx="5" ry="5" fill="#FCD34D" fillOpacity="0.8"/>
        <ellipse cx="8" cy="48" rx="4" ry="4" fill="#EF4444" fillOpacity="0.7"/>
        {/* roof rack hint */}
        <rect x="50" y="13" width="60" height="3" rx="1.5" fill="#10B981" fillOpacity="0.4"/>
      </svg>
    ),
  },
  {
    type: "Ride Safe",
    seats: "7 Seater",
    rate: "₹17/km",
    color: C.amberDark,
    colorLight: C.amberLight,
    colorBorder: C.amberBorder,
    perks: ["AI Safety Features", "Live CCTV Link", "Verified Drivers", "Peace of Mind Travel"],
    tagline: "Top-tier safety with AI features for a secure journey.",
    isFeatured: true,
    svg: (
      <svg viewBox="0 0 160 80" width="160" height="80" fill="none">
        <rect x="6" y="36" width="148" height="28" rx="6" fill="#D97706" fillOpacity="0.15" stroke="#D97706" strokeWidth="1.5"/>
        <path d="M28 36 Q35 16 65 14 Q100 12 125 14 Q138 16 148 36Z" fill="#D97706" fillOpacity="0.22" stroke="#D97706" strokeWidth="1.5"/>
        <path d="M42 34 Q48 18 68 16 Q96 14 116 16 Q126 18 130 34Z" fill="#FFC107" fillOpacity="0.35"/>
        <circle cx="36" cy="64" r="13" fill="#374151" stroke="#D97706" strokeWidth="2"/>
        <circle cx="36" cy="64" r="5" fill="#6B7280"/>
        <circle cx="124" cy="64" r="13" fill="#374151" stroke="#D97706" strokeWidth="2"/>
        <circle cx="124" cy="64" r="5" fill="#6B7280"/>
        <ellipse cx="152" cy="48" rx="5" ry="5" fill="#FCD34D" fillOpacity="0.9"/>
        <ellipse cx="8" cy="48" rx="4" ry="4" fill="#EF4444" fillOpacity="0.7"/>
        {/* shield on door */}
        <path d="M78 28 L82 30 L82 36 C82 39 80 41 78 42 C76 41 74 39 74 36 L74 30 Z" fill="#FFC107" fillOpacity="0.9" stroke="#D97706" strokeWidth="1"/>
      </svg>
    ),
  },
];

/* ─── WHY BADGES ─── */
const WHY = [
  { emoji: "🛡️", label: "Safe & Secure" },
  { emoji: "⏱️", label: "On-Time Service" },
  { emoji: "⭐", label: "4.8+ Rating" },
  { emoji: "🗺️", label: "Wide Coverage" },
];

/* ════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroIn(true), 80); return () => clearTimeout(t); }, []);

  const servicesReveal = useReveal();
  const safetyReveal   = useReveal();
  const fleetReveal    = useReveal();
  const whyReveal      = useReveal();
  const ctaReveal      = useReveal();

  /* card hover helpers */
  const cardIn  = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = "translateY(-8px) scale(1.02)";
    el.style.background = "#FFFFFF";
    el.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.09)";
    el.style.borderColor = C.amberHover;
    const ic = el.querySelector(".card-icon") as HTMLElement;
    if (ic) { ic.style.background = C.amber; ic.style.color = "#FFF"; }
  };
  const cardOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = "translateY(0) scale(1)";
    el.style.background = C.surface;
    el.style.boxShadow = "none";
    el.style.borderColor = C.border;
    const ic = el.querySelector(".card-icon") as HTMLElement;
    if (ic) { ic.style.background = C.amberLight; ic.style.color = C.amberDark; }
  };

  return (
    <div style={{ fontFamily: "'Inter','Helvetica Neue',sans-serif", background: C.bg, color: C.text, overflowX: "hidden" }}>

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "130px 5% 90px",
          position: "relative",
          background: `radial-gradient(ellipse 80% 55% at 50% 0%, #FFFBEB 0%, #FFFFFF 65%)`,
        }}
      >
        {/* ambient glow */}
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"min(700px,90vw)", height:"min(700px,90vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(255,193,7,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />

        <span style={{ ...eyebrow, opacity: heroIn ? 1 : 0, transform: heroIn ? "translateY(0)" : "translateY(12px)", transition: "all 0.55s cubic-bezier(0.4,0,0.2,1) 0ms" }}>
          Our Services
        </span>

        <h1
          style={{
            fontSize: "clamp(38px,6vw,72px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 24px",
            maxWidth: 820,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 80ms",
          }}
        >
          Smart &amp; Safe{" "}
          <span style={{ color: C.amber, position: "relative", display: "inline-block" }}>
            Cab Services
            <svg viewBox="0 0 260 12" width="100%" height="12" style={{ position:"absolute", bottom:-6, left:0 }} preserveAspectRatio="none">
              <path d="M2 9 Q35 2 65 9 Q95 16 130 9 Q165 2 195 9 Q225 16 258 9" stroke={C.amber} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55"/>
            </svg>
          </span>
        </h1>

        <p
          style={{
            color: C.muted,
            fontSize: "clamp(15px,2vw,19px)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 0 52px",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 160ms",
          }}
        >
          Experience India's first Wi-Fi + CCTV + AI Safety enabled cab service across Delhi NCR and outstation routes.
        </p>

        {/* hero badge strip */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 240ms",
          }}
        >
          {["📶 Free Wi-Fi", "📷 Live CCTV", "🤖 AI Safety", "✅ Verified Drivers"].map(b => (
            <span key={b} style={{ background: C.amberLight, border: `1px solid ${C.amberBorder}`, color: C.amberDark, fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 100 }}>
              {b}
            </span>
          ))}
        </div>

        {/* scroll hint */}
        <div style={{ position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity: heroIn ? 0.4 : 0, transition:"opacity 0.8s 0.8s" }}>
          <span style={{ fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:C.faint }}>Explore</span>
          <div style={{ width:1.5, height:36, background:`linear-gradient(to bottom,${C.amber},transparent)`, borderRadius:2, animation:"scrollPulse 1.8s ease-in-out infinite" }}/>
        </div>
      </section>

      {/* ══ 2. SERVICE TYPES ══════════════════════════════════════ */}
      <section ref={servicesReveal.ref} style={{ padding:"110px 5%", background: C.surface }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <SectionHeader
            eyebrowText="Choose Your Service"
            heading={<>Premium cab services<br /><span style={{ color:C.amber }}>tailored to your needs.</span></>}
            sub="Whether it's a quick city hop or a multi-day outstation journey, we've got a ride designed for it."
            visible={servicesReveal.visible}
          />

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:24, marginTop:64 }}>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 24,
                  padding: "40px 32px",
                  cursor: "pointer",
                  opacity: servicesReveal.visible ? 1 : 0,
                  transform: servicesReveal.visible ? "translateY(0)" : "translateY(36px)",
                  transition: `all 0.5s cubic-bezier(0.4,0,0.2,1) ${i * 90}ms`,
                }}
                onMouseEnter={cardIn}
                onMouseLeave={cardOut}
              >
                <div className="card-icon" style={{ width:60, height:60, background:C.amberLight, color:C.amberDark, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, marginBottom:28, transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}>
                  {s.emoji}
                </div>
                <h3 style={{ fontSize:20, fontWeight:800, color:C.text, margin:"0 0 8px", letterSpacing:"-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize:14, color:C.faint, marginBottom:24, lineHeight:1.6 }}>{s.subtitle}</p>
                <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:8 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{ display:"flex", alignItems:"center", gap:10, fontSize:14, color:C.muted, fontWeight:500 }}>
                      <span style={{ width:7, height:7, borderRadius:"50%", background:C.amber, flexShrink:0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. SAFETY FEATURES (dark) ════════════════════════════ */}
      <section ref={safetyReveal.ref} style={{ background:C.dark, padding:"110px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          {/* header */}
          <div style={{ textAlign:"center", marginBottom:72, opacity:safetyReveal.visible?1:0, transform:safetyReveal.visible?"translateY(0)":"translateY(24px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
            <span style={{ display:"inline-block", background:"rgba(255,193,7,0.12)", color:C.amber, fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"6px 18px", borderRadius:100, marginBottom:20 }}>
              First Time In India
            </span>
            <h2 style={{ color:"#FFFFFF", fontSize:"clamp(30px,4vw,52px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:"0 0 16px" }}>
              Advanced Safety Features
            </h2>
            <p style={{ color:"#9CA3AF", fontSize:17, maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>
              Industry-leading technology ensuring your safety on every single ride.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {SAFETY.map((s, i) => (
              <div
                key={i}
                style={{
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius:28,
                  padding:"48px 36px",
                  position:"relative",
                  overflow:"hidden",
                  opacity:safetyReveal.visible?1:0,
                  transform:safetyReveal.visible?"translateY(0)":"translateY(36px)",
                  transition:`all 0.55s cubic-bezier(0.4,0,0.2,1) ${i*110}ms`,
                }}
              >
                {/* glow */}
                <div style={{ position:"absolute", top:-50, right:-50, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,193,7,0.1) 0%,transparent 70%)", pointerEvents:"none" }}/>
                {/* top accent */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${C.amber},transparent)`, borderRadius:"28px 28px 0 0" }}/>

                <div style={{ width:60, height:60, background:"rgba(255,193,7,0.12)", color:C.amber, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:28 }}>
                  {s.icon}
                </div>
                <span style={{ display:"inline-block", background:"rgba(255,193,7,0.12)", color:C.amber, fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"5px 14px", borderRadius:100, marginBottom:18 }}>
                  {s.badge}
                </span>
                <h3 style={{ color:"#FFFFFF", fontSize:"clamp(18px,2vw,22px)", fontWeight:800, letterSpacing:"-0.015em", lineHeight:1.25, margin:"0 0 14px" }}>{s.heading}</h3>
                <p style={{ color:"#9CA3AF", fontSize:15, lineHeight:1.75, margin:0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. FLEET ══════════════════════════════════════════════ */}
      <section ref={fleetReveal.ref} style={{ padding:"110px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <SectionHeader
            eyebrowText="Our Premium Fleet"
            heading={<>Choose from our range of<br /><span style={{ color:C.amber }}>well-maintained vehicles.</span></>}
            sub="Every car in our fleet is regularly inspected, sanitised, and fitted with our proprietary safety hardware."
            visible={fleetReveal.visible}
          />

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:24, marginTop:64 }}>
            {FLEET.map((car, i) => (
              <div
                key={i}
                style={{
                  background: car.isFeatured ? C.amberLight : C.surface,
                  border: `1.5px solid ${car.isFeatured ? C.amberBorder : C.border}`,
                  borderRadius:28,
                  padding:"36px 32px 32px",
                  display:"flex",
                  flexDirection:"column",
                  position:"relative",
                  overflow:"hidden",
                  opacity:fleetReveal.visible?1:0,
                  transform:fleetReveal.visible?"translateY(0)":"translateY(40px)",
                  transition:`all 0.55s cubic-bezier(0.4,0,0.2,1) ${i*90}ms`,
                }}
              >
                {/* colour stripe */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:car.color, borderRadius:"28px 28px 0 0" }}/>

                {/* featured badge */}
                {car.isFeatured && (
                  <span style={{ position:"absolute", top:16, right:16, background:C.amber, color:"#111827", fontSize:11, fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase", padding:"4px 12px", borderRadius:100 }}>
                    Most Safe
                  </span>
                )}

                {/* SVG car illustration */}
                <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
                  {car.svg}
                </div>

                {/* type + seats */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:6 }}>
                  <h3 style={{ fontSize:22, fontWeight:900, color:C.text, margin:0, letterSpacing:"-0.02em" }}>{car.type}</h3>
                  <span style={{ background:car.colorLight, border:`1px solid ${car.colorBorder}`, color:car.color, fontSize:12, fontWeight:700, padding:"4px 12px", borderRadius:100 }}>{car.seats}</span>
                </div>

                {/* rate */}
                <p style={{ fontSize:28, fontWeight:900, color:car.color, margin:"0 0 10px", letterSpacing:"-0.02em" }}>
                  {car.rate}
                </p>

                <p style={{ fontSize:14, color:C.faint, lineHeight:1.6, margin:"0 0 20px" }}>{car.tagline}</p>

                {/* perks */}
                <ul style={{ listStyle:"none", padding:0, margin:"0 0 28px", display:"flex", flexDirection:"column", gap:8 }}>
                  {car.perks.map(p => (
                    <li key={p} style={{ display:"flex", alignItems:"center", gap:10, fontSize:13, color:C.muted, fontWeight:500 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={car.color} fillOpacity="0.12"/>
                        <path d="M4 7 L6 9 L10 5" stroke={car.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.cabtale.com/booking"
                  style={{
                    display:"block",
                    textAlign:"center",
                    background: car.isFeatured ? C.amber : car.color,
                    color: car.isFeatured ? "#111827" : "#FFFFFF",
                    fontWeight:800,
                    fontSize:15,
                    padding:"14px 0",
                    borderRadius:100,
                    textDecoration:"none",
                    marginTop:"auto",
                    boxShadow: car.isFeatured ? "0 8px 24px rgba(255,193,7,0.3)" : `0 8px 24px ${car.color}30`,
                    transition:"transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHY BADGES ════════════════════════════════════════ */}
      <div
        ref={whyReveal.ref}
        style={{ background:C.dark, padding:"60px 5%" }}
      >
        <div style={{ maxWidth:900, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:24, textAlign:"center" }}>
          {WHY.map((w, i) => (
            <div
              key={i}
              style={{
                opacity:whyReveal.visible?1:0,
                transform:whyReveal.visible?"translateY(0)":"translateY(24px)",
                transition:`all 0.5s cubic-bezier(0.4,0,0.2,1) ${i*90}ms`,
              }}
            >
              <div style={{ fontSize:36, marginBottom:12 }}>{w.emoji}</div>
              <div style={{ color:"#FFFFFF", fontWeight:800, fontSize:16 }}>{w.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ 6. CTA ════════════════════════════════════════════════ */}
      <section
        ref={ctaReveal.ref}
        style={{ padding:"110px 5%", background:`radial-gradient(ellipse 80% 80% at 50% 50%, #FFFBEB 0%, #FFFFFF 70%)`, textAlign:"center" }}
      >
        <div
          style={{
            maxWidth:640,
            margin:"0 auto",
            opacity:ctaReveal.visible?1:0,
            transform:ctaReveal.visible?"translateY(0)":"translateY(28px)",
            transition:"all 0.65s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span style={{ ...eyebrow, display:"inline-block", marginBottom:24 }}>Ready to Ride?</span>
          <h2 style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:900, letterSpacing:"-0.03em", lineHeight:1.1, margin:"0 0 18px" }}>
            Experience Smart-Safe<br />
            <span style={{ color:C.amber }}>Travel Today</span>
          </h2>
          <p style={{ color:C.muted, fontSize:18, lineHeight:1.7, marginBottom:44 }}>
            Book your ride now and travel with complete peace of mind.
          </p>
          <a
            href="https://www.cabtale.com/booking"
            style={{
              display:"inline-block",
              background:C.amber,
              color:"#111827",
              fontWeight:800,
              fontSize:17,
              padding:"18px 52px",
              borderRadius:100,
              textDecoration:"none",
              boxShadow:"0 10px 30px rgba(255,193,7,0.35)",
              transition:"transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 14px 36px rgba(255,193,7,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 10px 30px rgba(255,193,7,0.35)"; }}
          >
            Book Your Ride
          </a>
        </div>
      </section>

      <style>{`
        @keyframes scrollPulse {
          0%,100%{opacity:0.5;transform:scaleY(0.9);}
          50%{opacity:1;transform:scaleY(1.1);}
        }
      `}</style>
    </div>
  );
}

/* ─── shared eyebrow style ─── */
const eyebrow: React.CSSProperties = {
  background: "#FFFBEB",
  border: "1px solid #FEF08A",
  borderRadius: 100,
  padding: "6px 16px",
  color: "#D97706",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

/* ─── reusable section header ─── */
function SectionHeader({ eyebrowText, heading, sub, visible }: {
  eyebrowText: string;
  heading: React.ReactNode;
  sub: string;
  visible: boolean;
}) {
  return (
    <div
      style={{
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"space-between",
        flexWrap:"wrap",
        gap:32,
        opacity:visible?1:0,
        transform:visible?"translateY(0)":"translateY(24px)",
        transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div style={{ flex:"1 1 460px" }}>
        <span style={{ ...eyebrow, display:"inline-block", marginBottom:20 }}>{eyebrowText}</span>
        <h2 style={{ color:"#111827", fontSize:"clamp(30px,4vw,52px)", fontWeight:900, margin:0, letterSpacing:"-0.025em", lineHeight:1.1 }}>
          {heading}
        </h2>
      </div>
      <p style={{ color:"#4B5563", fontSize:17, lineHeight:1.65, maxWidth:400, margin:0, flexShrink:0 }}>{sub}</p>
    </div>
  );
}