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

/* ─── WHY DRIVE ─── */
const WHY = [
  {
    emoji: "💰",
    title: "Higher Earnings",
    desc: "Earn up to ₹50,000/month with competitive per-km rates and zero commission on airport rides.",
  },
  {
    emoji: "⏰",
    title: "Flexible Schedule",
    desc: "Choose your own hours. Drive mornings, evenings, weekends — whenever works for you.",
  },
  {
    emoji: "🛡️",
    title: "Safety & Security",
    desc: "Comprehensive insurance coverage and 24/7 emergency support on every trip.",
  },
  {
    emoji: "🤝",
    title: "Growing Community",
    desc: "500+ active drivers earning consistently across Delhi NCR and growing every week.",
  },
];

/* ─── STEPS ─── */
const STEPS = [
  {
    num: "01",
    title: "Submit Documents",
    desc: "Upload required documents online — driving licence, Aadhaar, PAN, and vehicle papers.",
    icon: "📄",
  },
  {
    num: "02",
    title: "Verification",
    desc: "Our team verifies your documents and vehicle within 24–48 hours.",
    icon: "✅",
  },
  {
    num: "03",
    title: "Training",
    desc: "Complete a short online orientation and safety training at your own pace.",
    icon: "🎓",
  },
  {
    num: "04",
    title: "Start Earning",
    desc: "Get approved and start accepting rides immediately — your first earning, same day.",
    icon: "🚗",
  },
];

/* ─── DOCS ─── */
const DOCS = [
  {
    category: "Driver Documents",
    color: "#6366F1",
    colorLight: "#EEF2FF",
    colorBorder: "#C7D2FE",
    items: ["Driving Licence (valid)", "Recent passport-size photo", "Police verification (if state rules require)"],
  },
  {
    category: "Owner Documents",
    color: C.amberDark,
    colorLight: C.amberLight,
    colorBorder: C.amberBorder,
    items: ["Aadhaar Card / PAN Card", "Address proof", "Cancelled cheque / Bank passbook"],
  },
  {
    category: "Vehicle Documents",
    color: C.green,
    colorLight: "#ECFDF5",
    colorBorder: "#A7F3D0",
    items: ["Registration Certificate (RC)", "Valid Insurance", "Fitness Certificate / Permit (as per RTO)", "PUC Certificate", "Vehicle photos (front / side / interior)"],
  },
];

/* ─── ZONES ─── */
const ZONES = [
  {
    num: "1",
    title: "Airport Transfers",
    desc: "Most major North Indian airports covered — priority hubs: IGI Delhi & Hindon (Ghaziabad). Fixed pickup points, flight-synced ETAs, smooth dispatch. Long routes = better earnings.",
  },
  {
    num: "2",
    title: "Railway Station & Transport Hubs",
    desc: "Railway stations, ISBTs, metro/bus hubs se planned pickups. Intercity demand steady — seedha fayda.",
  },
  {
    num: "3",
    title: "Outstation / City-to-City",
    desc: "Delhi → Jaipur / Haridwar / Agra / Meerut jaise long routes. Distance & timing aap set karo, total earning predictable.",
  },
  {
    num: "4",
    title: "Family Trips & Custom Routes",
    desc: "Shaadi, vacations, luggage-friendly rides. Apne favourite corridors save karo — sirf matching requests accept karo.",
  },
];

/* ─── FAQs ─── */
const FAQS = [
  {
    q: "Kya meri car commercial honi chahiye?",
    a: "Haan, vehicle ka commercial registration hona zaroori hai. Private cars ke liye tourist permit bhi acceptable hai kuch routes pe — verification ke waqt hamare team se confirm karein.",
  },
  {
    q: "Earning kaise hoti hai? Surge hota hai?",
    a: "Per-km rate fixed hai aur airport rides pe zero commission. Outstation aur long routes pe additional earnings milti hain. Surge pricing currently nahi hai — transparent rates, guaranteed.",
  },
  {
    q: "Kya main sirf airport ya sirf outstation rides choose kar sakta hoon?",
    a: "Bilkul. Aap apne preferred zone set kar sakte hain — sirf airport, sirf outstation, ya dono. Flexibility tumhare haath mein hai.",
  },
  {
    q: "Payout kab milta hai?",
    a: "Weekly payouts directly aapke bank account mein. Minimum payout threshold ₹500 hai. Koi delay nahi — transparent earning dashboard available hai.",
  },
  {
    q: "Cancel/Wait time ka kya? Support milega?",
    a: "Cancellation fee rider se recover hoti hai. Wait time (15 min se zyada) ke liye compensation milta hai. 24/7 driver support helpline available hai — kabhi akela nahi chodenge.",
  },
];

export default function DriverOnboardingPage() {
  const [heroIn, setHeroIn] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  const whyReveal   = useReveal();
  const stepsReveal = useReveal();
  const docsReveal  = useReveal();
  const zonesReveal = useReveal();
  const faqReveal   = useReveal();
  const ctaReveal   = useReveal();

  return (
    <div style={{ fontFamily: "'Inter','Helvetica Neue',sans-serif", background: C.bg, color: C.text, overflowX: "hidden" }}>

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "130px 5% 90px",
          position: "relative",
          background: `radial-gradient(ellipse 85% 60% at 50% 0%, #FFFBEB 0%, #FFFFFF 65%)`,
        }}
      >
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"min(700px,90vw)", height:"min(700px,90vw)", borderRadius:"50%", background:"radial-gradient(circle,rgba(255,193,7,0.08) 0%,transparent 70%)", pointerEvents:"none" }}/>

        <span style={{ ...eyebrow, display:"inline-block", marginBottom:24, opacity:heroIn?1:0, transform:heroIn?"translateY(0)":"translateY(12px)", transition:"all 0.55s cubic-bezier(0.4,0,0.2,1) 0ms" }}>
          Drive with CabTale
        </span>

        <h1
          style={{
            fontSize: "clamp(38px,6vw,72px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 22px",
            maxWidth: 820,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 80ms",
          }}
        >
          Earn better.
          <br />
          <span style={{ color: C.amber, position:"relative", display:"inline-block" }}>
            Be your own boss.
            <svg viewBox="0 0 280 12" width="100%" height="12" style={{ position:"absolute", bottom:-6, left:0 }} preserveAspectRatio="none">
              <path d="M2 9 Q40 2 70 9 Q100 16 140 9 Q180 2 210 9 Q240 16 278 9" stroke={C.amber} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55"/>
            </svg>
          </span>
        </h1>

        <p
          style={{
            color: C.muted,
            fontSize: "clamp(15px,2vw,19px)",
            lineHeight: 1.7,
            maxWidth: 540,
            margin: "0 0 48px",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1) 160ms",
          }}
        >
          Join Delhi NCR's most trusted cab service. Earn more, choose your hours, and get full support every step of the way.
        </p>

        {/* hero badges */}
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", marginBottom:48, opacity:heroIn?1:0, transform:heroIn?"translateY(0)":"translateY(20px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1) 220ms" }}>
          {["💰 High Earnings", "⏰ Flexible Hours", "🛡️ Full Support"].map(b => (
            <span key={b} style={{ background:C.amberLight, border:`1px solid ${C.amberBorder}`, color:C.amberDark, fontSize:13, fontWeight:700, padding:"8px 20px", borderRadius:100 }}>
              {b}
            </span>
          ))}
        </div>

        <a
          href="https://www.cabtale.com/apply-now"
          style={{
            display:"inline-flex",
            alignItems:"center",
            gap:10,
            background:C.amber,
            color:"#111827",
            fontWeight:800,
            fontSize:17,
            padding:"18px 48px",
            borderRadius:100,
            textDecoration:"none",
            boxShadow:"0 10px 30px rgba(255,193,7,0.4)",
            transition:"transform 0.2s, box-shadow 0.2s",
            opacity:heroIn?1:0,
            transform: heroIn ? "translateY(0)" : "translateY(20px)",
            ...(heroIn ? { transition:"opacity 0.6s 0.28s, transform 0.6s 0.28s" } : {}),
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 14px 36px rgba(255,193,7,0.5)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 10px 30px rgba(255,193,7,0.4)"; }}
        >
          Start Your Journey →
        </a>

        {/* scroll hint */}
        <div style={{ position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:heroIn?0.4:0, transition:"opacity 0.8s 0.8s" }}>
          <span style={{ fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:C.faint }}>Scroll</span>
          <div style={{ width:1.5, height:36, background:`linear-gradient(to bottom,${C.amber},transparent)`, borderRadius:2, animation:"scrollPulse 1.8s ease-in-out infinite" }}/>
        </div>
      </section>

      {/* ══ 2. WHY DRIVE ══════════════════════════════════════════ */}
      <section ref={whyReveal.ref} style={{ padding:"110px 5%", background:C.surface }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64, opacity:whyReveal.visible?1:0, transform:whyReveal.visible?"translateY(0)":"translateY(24px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
            <span style={{ ...eyebrow, display:"inline-block", marginBottom:20 }}>Why Drive with CabTale?</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:0 }}>
              Join thousands earning<br />
              <span style={{ color:C.amber }}>on their own terms.</span>
            </h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:24 }}>
            {WHY.map((w, i) => (
              <div
                key={i}
                style={{
                  background:C.bg,
                  border:`1px solid ${C.border}`,
                  borderRadius:24,
                  padding:"40px 32px",
                  cursor:"default",
                  opacity:whyReveal.visible?1:0,
                  transform:whyReveal.visible?"translateY(0)":"translateY(36px)",
                  transition:`all 0.5s cubic-bezier(0.4,0,0.2,1) ${i*90}ms`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform="translateY(-8px) scale(1.02)";
                  el.style.background="#FFF";
                  el.style.boxShadow="0 25px 50px -12px rgba(0,0,0,0.09)";
                  el.style.borderColor=C.amberHover;
                  const ic = el.querySelector(".w-icon") as HTMLElement;
                  if(ic){ ic.style.background=C.amber; }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform="translateY(0) scale(1)";
                  el.style.background=C.surface;
                  el.style.boxShadow="none";
                  el.style.borderColor=C.border;
                  const ic = el.querySelector(".w-icon") as HTMLElement;
                  if(ic){ ic.style.background=C.amberLight; }
                }}
              >
                <div className="w-icon" style={{ width:64, height:64, background:C.amberLight, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:30, marginBottom:28, transition:"background 0.3s ease" }}>
                  {w.emoji}
                </div>
                <h3 style={{ fontSize:20, fontWeight:800, color:C.text, margin:"0 0 10px", letterSpacing:"-0.01em" }}>{w.title}</h3>
                <p style={{ fontSize:15, color:C.faint, lineHeight:1.7, margin:0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. HOW IT WORKS (dark) ═══════════════════════════════ */}
      <section ref={stepsReveal.ref} style={{ background:C.dark, padding:"110px 5%" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:72, opacity:stepsReveal.visible?1:0, transform:stepsReveal.visible?"translateY(0)":"translateY(24px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
            <span style={{ display:"inline-block", background:"rgba(255,193,7,0.12)", color:C.amber, fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"6px 18px", borderRadius:100, marginBottom:20 }}>How Onboarding Works</span>
            <h2 style={{ color:"#FFFFFF", fontSize:"clamp(28px,4vw,50px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:0 }}>
              Simple 4-step process<br />
              <span style={{ color:C.amber }}>to start earning.</span>
            </h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:20 }}>
            {STEPS.map((s, i) => (
              <div
                key={i}
                style={{
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius:24,
                  padding:"40px 30px",
                  position:"relative",
                  overflow:"hidden",
                  opacity:stepsReveal.visible?1:0,
                  transform:stepsReveal.visible?"translateY(0)":"translateY(36px)",
                  transition:`all 0.55s cubic-bezier(0.4,0,0.2,1) ${i*100}ms`,
                }}
              >
                {/* glow */}
                <div style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,193,7,0.1) 0%,transparent 70%)", pointerEvents:"none" }}/>
                {/* step number */}
                <div style={{ fontSize:48, fontWeight:900, color:"rgba(255,193,7,0.15)", lineHeight:1, marginBottom:16, letterSpacing:"-0.04em" }}>{s.num}</div>
                <div style={{ fontSize:32, marginBottom:16 }}>{s.icon}</div>
                <h3 style={{ color:"#FFFFFF", fontSize:18, fontWeight:800, letterSpacing:"-0.01em", margin:"0 0 10px" }}>{s.title}</h3>
                <p style={{ color:"#9CA3AF", fontSize:14, lineHeight:1.7, margin:0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. DOCUMENTS ══════════════════════════════════════════ */}
      <section ref={docsReveal.ref} style={{ padding:"110px 5%" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:32, marginBottom:64, opacity:docsReveal.visible?1:0, transform:docsReveal.visible?"translateY(0)":"translateY(24px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
            <div style={{ flex:"1 1 440px" }}>
              <span style={{ ...eyebrow, display:"inline-block", marginBottom:20 }}>Documents You'll Need</span>
              <h2 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:0 }}>
                Keep these handy<br />
                <span style={{ color:C.amber }}>for quick onboarding.</span>
              </h2>
            </div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:C.amberLight, border:`1px solid ${C.amberBorder}`, borderRadius:14, padding:"14px 20px", maxWidth:360 }}>
              <span style={{ fontSize:20 }}>💡</span>
              <span style={{ color:C.amberDark, fontSize:14, fontWeight:600, lineHeight:1.5 }}>
                Clear photos with all corners visible. Names should match across all documents.
              </span>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {DOCS.map((d, i) => (
              <div
                key={i}
                style={{
                  background:C.surface,
                  border:`1.5px solid ${C.border}`,
                  borderRadius:24,
                  padding:"36px 32px",
                  position:"relative",
                  overflow:"hidden",
                  opacity:docsReveal.visible?1:0,
                  transform:docsReveal.visible?"translateY(0)":"translateY(36px)",
                  transition:`all 0.55s cubic-bezier(0.4,0,0.2,1) ${i*100}ms`,
                }}
              >
                {/* top stripe */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:d.color, borderRadius:"24px 24px 0 0" }}/>
                <span style={{ display:"inline-block", background:d.colorLight, border:`1px solid ${d.colorBorder}`, color:d.color, fontSize:12, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", padding:"5px 14px", borderRadius:100, marginBottom:20 }}>{d.category}</span>
                <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
                  {d.items.map(item => (
                    <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:14, color:C.muted, fontWeight:500, lineHeight:1.5 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink:0, marginTop:2 }}>
                        <circle cx="8" cy="8" r="8" fill={d.color} fillOpacity="0.12"/>
                        <path d="M4.5 8 L6.5 10 L11.5 5.5" stroke={d.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHERE WE OPERATE ════════════════════════════════════ */}
      <section ref={zonesReveal.ref} style={{ background:C.surface, padding:"110px 5%" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64, opacity:zonesReveal.visible?1:0, transform:zonesReveal.visible?"translateY(0)":"translateY(24px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
            <span style={{ ...eyebrow, display:"inline-block", marginBottom:20 }}>Where CabTale Is Available</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:0 }}>
              More zones. <span style={{ color:C.amber }}>More earnings.</span>
            </h2>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {ZONES.map((z, i) => (
              <div
                key={i}
                style={{
                  background:C.bg,
                  border:`1px solid ${C.border}`,
                  borderRadius:20,
                  padding:"28px 32px",
                  display:"flex",
                  alignItems:"flex-start",
                  gap:24,
                  opacity:zonesReveal.visible?1:0,
                  transform:zonesReveal.visible?"translateY(0)":"translateY(24px)",
                  transition:`all 0.5s cubic-bezier(0.4,0,0.2,1) ${i*80}ms`,
                  cursor:"default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor=C.amberHover;
                  el.style.boxShadow="0 12px 32px -8px rgba(0,0,0,0.07)";
                  el.style.transform="translateX(4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor=C.border;
                  el.style.boxShadow="none";
                  el.style.transform="translateX(0)";
                }}
              >
                <div style={{ width:44, height:44, background:C.amberLight, border:`1px solid ${C.amberBorder}`, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontWeight:900, fontSize:16, color:C.amberDark }}>
                  {z.num}
                </div>
                <div>
                  <h3 style={{ fontSize:17, fontWeight:800, color:C.text, margin:"0 0 6px", letterSpacing:"-0.01em" }}>{z.title}</h3>
                  <p style={{ fontSize:14, color:C.faint, lineHeight:1.7, margin:0 }}>{z.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. FAQ ════════════════════════════════════════════════ */}
      <section ref={faqReveal.ref} style={{ padding:"110px 5%" }}>
        <div style={{ maxWidth:820, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56, opacity:faqReveal.visible?1:0, transform:faqReveal.visible?"translateY(0)":"translateY(24px)", transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)" }}>
            <span style={{ ...eyebrow, display:"inline-block", marginBottom:20 }}>FAQ</span>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:0 }}>
              Frequently asked <span style={{ color:C.amber }}>questions.</span>
            </h2>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    background: isOpen ? C.amberLight : C.surface,
                    border: `1.5px solid ${isOpen ? C.amberBorder : C.border}`,
                    borderRadius: 18,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    opacity: faqReveal.visible ? 1 : 0,
                    transform: faqReveal.visible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 700, color: C.text, lineHeight: 1.4 }}>{f.q}</span>
                    <span
                      style={{
                        fontSize: 20,
                        color: C.amberDark,
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        display: "inline-block",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 28px 22px" }}>
                      <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, margin: 0 }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 7. CTA ════════════════════════════════════════════════ */}
      <section
        ref={ctaReveal.ref}
        style={{ background:C.dark, padding:"110px 5%", textAlign:"center" }}
      >
        <div style={{ maxWidth:640, margin:"0 auto", opacity:ctaReveal.visible?1:0, transform:ctaReveal.visible?"translateY(0)":"translateY(28px)", transition:"all 0.65s cubic-bezier(0.4,0,0.2,1)" }}>
          <div style={{ fontSize:52, marginBottom:24 }}>🚗</div>
          <span style={{ display:"inline-block", background:"rgba(255,193,7,0.12)", color:C.amber, fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"6px 18px", borderRadius:100, marginBottom:20 }}>Ready to Start?</span>
          <h2 style={{ color:"#FFFFFF", fontSize:"clamp(28px,4vw,50px)", fontWeight:900, letterSpacing:"-0.025em", lineHeight:1.1, margin:"0 0 16px" }}>
            Ready to Start Earning?
          </h2>
          <p style={{ color:"#9CA3AF", fontSize:17, lineHeight:1.7, marginBottom:44 }}>
            Join CabTale today and be part of Delhi NCR's fastest-growing driver community.
          </p>
          <a
            href="https://www.cabtale.com/apply-now"
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
            Apply Now →
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