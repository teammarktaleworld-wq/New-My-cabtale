// "use client";

// import { useState } from "react";

// const PERKS = [
//   { icon: "💰", title: "Earn ₹25K–₹60K/month", desc: "Top drivers in metro cities earn over ₹60,000. Your effort directly determines your income." },
//   { icon: "🕐", title: "Work your own hours", desc: "Go online when you want, go offline when you're done. No shifts, no schedules, no boss." },
//   { icon: "📈", title: "Weekly payments", desc: "Earnings hit your bank account every Friday. No waiting, no holds, no surprises." },
//   { icon: "🛡️", title: "Insurance & support", desc: "You're covered while on a trip. And if anything goes wrong, our driver support team is one call away." },
// ];

// const STEPS = [
//   { label: "Sign up", desc: "Fill in your details online — takes 5 minutes." },
//   { label: "Upload documents", desc: "License, RC, insurance — we verify within 24 hours." },
//   { label: "Complete orientation", desc: "A short online session on the app and safety protocols." },
//   { label: "Start earning", desc: "Go online and your first ride request arrives within minutes." },
// ];

// export default function DriveWithUs() {
//   const [form, setForm] = useState({ name: "", phone: "", city: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const inputStyle = {
//     width: "100%",
//     background: "rgba(255,255,255,0.06)",
//     border: "1px solid rgba(255,255,255,0.1)",
//     borderRadius: "12px",
//     padding: "14px 16px",
//     color: "white",
//     fontSize: "15px",
//     outline: "none",
//     boxSizing: "border-box" as const,
//     fontFamily: "'Inter','Helvetica Neue',sans-serif",
//     transition: "border-color 0.2s",
//   };

//   return (
//     <section
//       id="drive"
//       style={{
//         background: "#080808",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "72px" }}>
//           <span style={{
//             display: "inline-block",
//             background: "rgba(255,193,7,0.1)",
//             border: "1px solid rgba(255,193,7,0.25)",
//             borderRadius: "100px",
//             padding: "5px 16px",
//             color: "#FFC107",
//             fontSize: "12px",
//             fontWeight: 600,
//             letterSpacing: "0.12em",
//             textTransform: "uppercase",
//             marginBottom: "16px",
//           }}>
//             Drive with us
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 48px)",
//             fontWeight: 800,
//             margin: "0 0 16px",
//             letterSpacing: "-0.03em",
//           }}>
//             Turn your car into a career
//           </h2>
//           <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "460px", margin: "0 auto", lineHeight: 1.65 }}>
//             Join 10,000+ CabTale drivers across India. Set your own hours and earn on your terms.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
//           {/* Left: perks + steps */}
//           <div>
//             {/* Perks */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
//               {PERKS.map((p, i) => (
//                 <div key={i} style={{
//                   display: "flex",
//                   gap: "16px",
//                   background: "rgba(255,255,255,0.03)",
//                   border: "1px solid rgba(255,255,255,0.07)",
//                   borderRadius: "14px",
//                   padding: "20px",
//                   transition: "background 0.2s, border-color 0.2s",
//                 }}
//                   onMouseEnter={(e) => {
//                     const el = e.currentTarget as HTMLElement;
//                     el.style.background = "rgba(255,255,255,0.05)";
//                     el.style.borderColor = "rgba(255,193,7,0.2)";
//                   }}
//                   onMouseLeave={(e) => {
//                     const el = e.currentTarget as HTMLElement;
//                     el.style.background = "rgba(255,255,255,0.03)";
//                     el.style.borderColor = "rgba(255,255,255,0.07)";
//                   }}
//                 >
//                   <span style={{ fontSize: "28px", flexShrink: 0, lineHeight: 1 }}>{p.icon}</span>
//                   <div>
//                     <div style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{p.title}</div>
//                     <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.5 }}>{p.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Onboarding steps */}
//             <div>
//               <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
//                 Getting started
//               </p>
//               <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
//                 {STEPS.map((s, i) => (
//                   <div key={i} style={{ display: "flex", gap: "16px" }}>
//                     {/* Timeline */}
//                     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
//                       <div style={{
//                         width: "28px",
//                         height: "28px",
//                         borderRadius: "50%",
//                         background: "rgba(255,193,7,0.15)",
//                         border: "1px solid rgba(255,193,7,0.4)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: "#FFC107",
//                         fontSize: "12px",
//                         fontWeight: 800,
//                         flexShrink: 0,
//                       }}>
//                         {i + 1}
//                       </div>
//                       {i < STEPS.length - 1 && (
//                         <div style={{ width: "1px", flex: 1, background: "rgba(255,193,7,0.15)", minHeight: "24px", marginTop: "4px", marginBottom: "4px" }} />
//                       )}
//                     </div>
//                     <div style={{ paddingBottom: i < STEPS.length - 1 ? "20px" : "0", paddingTop: "4px" }}>
//                       <div style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>{s.label}</div>
//                       <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.5 }}>{s.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right: interest form */}
//           <div style={{
//             background: "rgba(255,255,255,0.03)",
//             border: "1px solid rgba(255,255,255,0.09)",
//             borderRadius: "24px",
//             padding: "40px",
//             position: "sticky",
//             top: "100px",
//           }}>
//             {submitted ? (
//               <div style={{ textAlign: "center", padding: "40px 0" }}>
//                 <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
//                 <h3 style={{ color: "white", fontWeight: 800, fontSize: "22px", margin: "0 0 12px" }}>You're on the list!</h3>
//                 <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
//                   We'll reach out on your number within 24 hours to get you set up.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <h3 style={{ color: "white", fontSize: "22px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
//                   Register your interest
//                 </h3>
//                 <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: "0 0 28px", lineHeight: 1.5 }}>
//                   Leave your details and our driver onboarding team will call you within 24 hours.
//                 </p>

//                 <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//                   <div>
//                     <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
//                       Full name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Your full name"
//                       value={form.name}
//                       onChange={(e) => setForm({ ...form, name: e.target.value })}
//                       style={inputStyle}
//                       onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                       onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//                     />
//                   </div>
//                   <div>
//                     <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
//                       Phone number
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="+91 XXXXX XXXXX"
//                       value={form.phone}
//                       onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                       style={inputStyle}
//                       onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                       onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//                     />
//                   </div>
//                   <div>
//                     <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
//                       Your city
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="e.g. Mumbai"
//                       value={form.city}
//                       onChange={(e) => setForm({ ...form, city: e.target.value })}
//                       style={inputStyle}
//                       onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                       onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//                     />
//                   </div>

//                   <button
//                     onClick={() => {
//                       if (form.name && form.phone && form.city) setSubmitted(true);
//                     }}
//                     style={{
//                       background: "#FFC107",
//                       color: "#0A0A0A",
//                       border: "none",
//                       borderRadius: "12px",
//                       padding: "16px",
//                       fontSize: "15px",
//                       fontWeight: 800,
//                       cursor: "pointer",
//                       marginTop: "8px",
//                       boxShadow: "0 0 24px rgba(255,193,7,0.25)",
//                       transition: "transform 0.15s, box-shadow 0.15s",
//                     }}
//                     onMouseEnter={(e) => {
//                       (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
//                       (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255,193,7,0.45)";
//                     }}
//                     onMouseLeave={(e) => {
//                       (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//                       (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,193,7,0.25)";
//                     }}
//                   >
//                     Start earning with CabTale →
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 768px) {
//           #drive .ct-drive-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </section>
//   );
// }


















"use client";

import React, { useState, useEffect, useRef } from "react";

const PERKS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Earn ₹25K–₹60K/month",
    desc: "Top drivers in metro cities earn over ₹60,000. Your effort directly determines your income.",
    color: "#10B981", // Emerald
    bgLight: "#ECFDF5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Work your own hours",
    desc: "Go online when you want, go offline when you're done. No shifts, no schedules, no boss.",
    color: "#F59E0B", // Amber
    bgLight: "#FFFBEB",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Weekly payments",
    desc: "Earnings hit your bank account every Friday. No waiting, no holds, no surprises.",
    color: "#3B82F6", // Blue
    bgLight: "#EFF6FF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Insurance & support",
    desc: "You're covered while on a trip. And if anything goes wrong, our driver support team is one call away.",
    color: "#8B5CF6", // Purple
    bgLight: "#F5F3FF",
  },
];

const STEPS = [
  { label: "Sign up", desc: "Fill in your details online — takes just 5 minutes." },
  { label: "Upload documents", desc: "License, RC, and insurance — we verify within 24 hours." },
  { label: "Complete orientation", desc: "A short, mandatory online session on safety protocols." },
  { label: "Start earning", desc: "Go online and your first ride request arrives within minutes." },
];

export default function DriveWithUsModern() {
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const inputStyle = {
    width: "100%",
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "14px",
    padding: "16px 20px",
    color: "#111827",
    fontSize: "15px",
    fontWeight: 500,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
  };

  return (
    <section
      ref={sectionRef}
      id="drive"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Header */}
        <div 
          style={{ 
            textAlign: "center", 
            marginBottom: "80px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#FFFBEB",
              border: "1px solid #FEF08A",
              borderRadius: "100px",
              padding: "6px 16px",
              color: "#D97706",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Drive with CabTale
          </span>
          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Turn your car into a <span style={{ color: "#FFC107" }}>Career</span>
          </h2>
          <p style={{ color: "#4B5563", fontSize: "18px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
            Join over 10,000 CabTale drivers across India. Set your own hours, be your own boss, and earn on your terms.
          </p>
        </div>

        {/* Main Content Split Layout */}
        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "80px", 
            alignItems: "flex-start",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 200ms"
          }}
        >
          
          {/* Left Column: Perks + Steps */}
          <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "64px" }}>
            
            {/* Perks Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {PERKS.map((p, i) => (
                <div 
                  key={i} 
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "20px",
                    padding: "24px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#FFFFFF";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.05)";
                    el.style.borderColor = p.color;
                    const icon = el.querySelector('.perk-icon') as HTMLElement;
                    if(icon) icon.style.transform = "scale(1.1) rotate(5deg)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#F9FAFB";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#E5E7EB";
                    const icon = el.querySelector('.perk-icon') as HTMLElement;
                    if(icon) icon.style.transform = "scale(1) rotate(0deg)";
                  }}
                >
                  <div 
                    className="perk-icon"
                    style={{ 
                      width: "56px", height: "56px", borderRadius: "16px", background: p.bgLight, color: p.color,
                      display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s ease"
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ color: "#111827", fontWeight: 800, fontSize: "18px", marginBottom: "8px", letterSpacing: "-0.01em" }}>{p.title}</div>
                    <div style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.6 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Onboarding Timeline */}
            <div>
              <h3 style={{ color: "#111827", fontSize: "24px", fontWeight: 800, marginBottom: "32px", letterSpacing: "-0.01em" }}>
                Getting Started
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {STEPS.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "24px" }}>
                    
                    {/* Timeline Graphic */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div 
                        style={{
                          width: "36px", height: "36px", borderRadius: "50%", background: "#FFFBEB", border: "2px solid #FFC107",
                          display: "flex", alignItems: "center", justifyContent: "center", color: "#D97706", fontSize: "14px", fontWeight: 800, zIndex: 2
                        }}
                      >
                        {i + 1}
                      </div>
                      {i < STEPS.length - 1 && (
                        <div 
                          style={{ 
                            width: "2px", flex: 1, minHeight: "40px", marginTop: "8px", marginBottom: "8px", 
                            background: "linear-gradient(to bottom, #FFC107, #E5E7EB)", borderRadius: "2px" 
                          }} 
                        />
                      )}
                    </div>
                    
                    {/* Timeline Content */}
                    <div style={{ paddingBottom: i < STEPS.length - 1 ? "32px" : "0", paddingTop: "6px" }}>
                      <div style={{ color: "#111827", fontWeight: 800, fontSize: "18px", marginBottom: "4px" }}>{s.label}</div>
                      <div style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: Sticky Interest Form */}
          <div style={{ flex: "1 1 400px", position: "relative" }}>
            
            {/* Background Decorative Blur */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "100%", height: "100%", background: "radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 70%)",
              filter: "blur(40px)", zIndex: 0, pointerEvents: "none"
            }} />

            <div 
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "32px",
                padding: "clamp(32px, 5vw, 48px)",
                position: "sticky",
                top: "120px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              {submitted ? (
                // Success State Animation
                <div style={{ textAlign: "center", padding: "40px 0", animation: "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}>
                  <div style={{ 
                    width: "80px", height: "80px", borderRadius: "50%", background: "#10B981", color: "white", 
                    display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
                    boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 style={{ color: "#111827", fontWeight: 800, fontSize: "28px", margin: "0 0 16px", letterSpacing: "-0.02em" }}>
                    You're on the list!
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
                    Thanks for your interest, <strong style={{ color: "#111827" }}>{form.name}</strong>. Our onboarding team will call you at {form.phone} within 24 hours to get you set up.
                  </p>
                </div>
              ) : (
                // Form State
                <div style={{ animation: "fadeIn 0.5s ease" }}>
                  <h3 style={{ color: "#111827", fontSize: "28px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                    Register your interest
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "15px", margin: "0 0 32px", lineHeight: 1.6 }}>
                    Leave your details and our driver onboarding team will call you within 24 hours.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    
                    {/* Full Name */}
                    <div>
                      <label style={{ color: "#4B5563", fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#FFC107";
                          e.target.style.background = "#FFFFFF";
                          e.target.style.boxShadow = "0 0 0 4px rgba(255,193,7,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#E5E7EB";
                          e.target.style.background = "#F9FAFB";
                          e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                        }}
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label style={{ color: "#4B5563", fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#FFC107";
                          e.target.style.background = "#FFFFFF";
                          e.target.style.boxShadow = "0 0 0 4px rgba(255,193,7,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#E5E7EB";
                          e.target.style.background = "#F9FAFB";
                          e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                        }}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label style={{ color: "#4B5563", fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                        Your City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mumbai"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#FFC107";
                          e.target.style.background = "#FFFFFF";
                          e.target.style.boxShadow = "0 0 0 4px rgba(255,193,7,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#E5E7EB";
                          e.target.style.background = "#F9FAFB";
                          e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={() => {
                        if (form.name && form.phone && form.city) setSubmitted(true);
                        else alert("Please fill in all details.");
                      }}
                      style={{
                        background: "#FFC107",
                        color: "#111827",
                        border: "none",
                        borderRadius: "14px",
                        padding: "18px",
                        fontSize: "16px",
                        fontWeight: 800,
                        cursor: "pointer",
                        marginTop: "16px",
                        boxShadow: "0 10px 20px -5px rgba(255, 193, 7, 0.4)",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 15px 25px -5px rgba(255, 193, 7, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(255, 193, 7, 0.4)";
                      }}
                    >
                      Start Earning Today
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                    
                    <div style={{ textAlign: "center", fontSize: "12px", color: "#9CA3AF", marginTop: "8px" }}>
                      By submitting, you agree to our Terms and Conditions.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}