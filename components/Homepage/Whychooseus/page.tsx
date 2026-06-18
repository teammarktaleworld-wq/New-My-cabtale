// "use client";

// const FEATURES = [
//   {
//     icon: (
//       <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
//         <path d="M16 3 L28 8 L28 18 C28 24 22 29 16 31 C10 29 4 24 4 18 L4 8 Z" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
//         <path d="M10 16 L14 20 L22 12" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Verified drivers only",
//     desc: "Every CabTale driver goes through background checks, license verification, and a rated onboarding test.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
//         <circle cx="16" cy="16" r="12" stroke="#FFC107" strokeWidth="1.8" />
//         <path d="M16 8 L18.5 13.5 L24 14.5 L20 18.5 L21 24 L16 21.5 L11 24 L12 18.5 L8 14.5 L13.5 13.5Z" stroke="#FFC107" strokeWidth="1.5" fill="rgba(255,193,7,0.08)" />
//       </svg>
//     ),
//     title: "Transparent pricing",
//     desc: "See the full fare before you tap confirm. No surge surprises, no hidden fees at journey's end.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
//         <circle cx="16" cy="13" r="5" stroke="#FFC107" strokeWidth="1.8" />
//         <path d="M16 18 C10 18 5 21.5 5 26 L27 26 C27 21.5 22 18 16 18Z" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
//         <path d="M24 6 L26 8 L30 4" stroke="#FFC107" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Real-time tracking",
//     desc: "Share your live location with family while you ride. They see every turn; you ride in peace.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
//         <rect x="5" y="8" width="22" height="16" rx="3" stroke="#FFC107" strokeWidth="1.8" />
//         <path d="M10 16 L22 16M10 12 L18 12M10 20 L15 20" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" />
//         <circle cx="25" cy="7" r="4" fill="#4ADE80" />
//       </svg>
//     ),
//     title: "24 / 7 support",
//     desc: "Stuck, lost, or just have a question? Our support team picks up in under 90 seconds, any hour.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
//         <path d="M6 24 L8 12 Q9.5 7 14 7 L18 7 Q22.5 7 24 12 L26 24" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
//         <circle cx="11" cy="24" r="3.5" stroke="#FFC107" strokeWidth="1.8" />
//         <circle cx="21" cy="24" r="3.5" stroke="#FFC107" strokeWidth="1.8" />
//         <path d="M6 18 L4 14" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "SOS button",
//     desc: "One tap sends your GPS, driver details, and trip info to your emergency contacts and our safety team.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
//         <path d="M16 4 C10 4 5 9 5 15 C5 21 10 27 16 28 C22 27 27 21 27 15 C27 9 22 4 16 4Z" stroke="#FFC107" strokeWidth="1.8" fill="rgba(255,193,7,0.08)" />
//         <path d="M11 15 L15 19 L21 11" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Insured every ride",
//     desc: "All rides come with passenger insurance coverage — from pickup to drop, you're protected.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section
//       id="why"
//       style={{
//         background: "#0D0D0D",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
//           <div>
//             <span style={{
//               display: "inline-block",
//               background: "rgba(255,193,7,0.1)",
//               border: "1px solid rgba(255,193,7,0.25)",
//               borderRadius: "100px",
//               padding: "5px 16px",
//               color: "#FFC107",
//               fontSize: "12px",
//               fontWeight: 600,
//               letterSpacing: "0.12em",
//               textTransform: "uppercase",
//               marginBottom: "16px",
//             }}>
//               Why CabTale
//             </span>
//             <h2 style={{
//               color: "white",
//               fontSize: "clamp(28px, 4vw, 48px)",
//               fontWeight: 800,
//               margin: 0,
//               letterSpacing: "-0.03em",
//               lineHeight: 1.1,
//               maxWidth: "480px",
//             }}>
//               Safety and trust,<br />built into every ride
//             </h2>
//           </div>
//           <p style={{
//             color: "rgba(255,255,255,0.45)",
//             fontSize: "16px",
//             lineHeight: 1.65,
//             maxWidth: "360px",
//             margin: 0,
//           }}>
//             We don't just move you from A to B. We do it in a way where you — and the people who care about you — feel completely at ease.
//           </p>
//         </div>

//         {/* Grid */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "20px",
//         }}>
//           {FEATURES.map((f, i) => (
//             <div
//               key={i}
//               style={{
//                 display: "flex",
//                 gap: "20px",
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 borderRadius: "16px",
//                 padding: "28px 24px",
//                 transition: "border-color 0.2s, background 0.2s",
//               }}
//               onMouseEnter={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(255,193,7,0.25)";
//                 el.style.background = "rgba(255,255,255,0.05)";
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(255,255,255,0.07)";
//                 el.style.background = "rgba(255,255,255,0.03)";
//               }}
//             >
//               <div style={{
//                 flexShrink: 0,
//                 width: "52px",
//                 height: "52px",
//                 background: "rgba(255,193,7,0.08)",
//                 borderRadius: "12px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}>
//                 {f.icon}
//               </div>
//               <div>
//                 <h3 style={{ color: "white", fontSize: "16px", fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{f.title}</h3>
//                 <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


















"use client";

import React, { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor">
        <path d="M16 3 L28 8 L28 18 C28 24 22 29 16 31 C10 29 4 24 4 18 L4 8 Z" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M10 16 L14 20 L22 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Verified drivers only",
    desc: "Every CabTale driver goes through strict background checks, license verification, and a rated onboarding test.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor">
        <circle cx="16" cy="16" r="12" strokeWidth="2" />
        <path d="M16 8 L18.5 13.5 L24 14.5 L20 18.5 L21 24 L16 21.5 L11 24 L12 18.5 L8 14.5 L13.5 13.5Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
    title: "Transparent pricing",
    desc: "See the full fare before you tap confirm. No surge surprises, no hidden fees at journey's end.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor">
        <circle cx="16" cy="13" r="5" strokeWidth="2" />
        <path d="M16 18 C10 18 5 21.5 5 26 L27 26 C27 21.5 22 18 16 18Z" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M24 6 L26 8 L30 4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-time tracking",
    desc: "Share your live location with family while you ride. They see every turn; you ride in complete peace.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor">
        <rect x="5" y="8" width="22" height="16" rx="3" strokeWidth="2" />
        <path d="M10 16 L22 16M10 12 L18 12M10 20 L15 20" strokeWidth="2" strokeLinecap="round" />
        <circle cx="25" cy="7" r="4" fill="#10B981" stroke="none" />
      </svg>
    ),
    title: "24/7 Priority support",
    desc: "Stuck, lost, or just have a question? Our support team picks up in under 90 seconds, any hour of the day.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor">
        <path d="M6 24 L8 12 Q9.5 7 14 7 L18 7 Q22.5 7 24 12 L26 24" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="11" cy="24" r="3.5" strokeWidth="2" />
        <circle cx="21" cy="24" r="3.5" strokeWidth="2" />
        <path d="M6 18 L4 14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Instant SOS button",
    desc: "One tap sends your GPS, driver details, and trip info to your emergency contacts and our safety team.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor">
        <path d="M16 4 C10 4 5 9 5 15 C5 21 10 27 16 28 C22 27 27 21 27 15 C27 9 22 4 16 4Z" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M11 15 L15 19 L21 11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Insured every ride",
    desc: "All rides come with comprehensive passenger insurance coverage — from pickup to drop, you're protected.",
  },
];

export default function WhyChooseUsModern() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "flex-end", 
            justifyContent: "space-between", 
            marginBottom: "80px", 
            flexWrap: "wrap", 
            gap: "32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div style={{ flex: "1 1 500px" }}>
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
              Why CabTale
            </span>
            <h2
              style={{
                color: "#111827",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 800,
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Safety and trust,<br />
              <span style={{ color: "#FFC107" }}>built into every ride.</span>
            </h2>
          </div>
          
          <p
            style={{
              color: "#4B5563",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "400px",
              margin: 0,
              flexShrink: 0,
            }}
          >
            We don't just move you from A to B. We do it in a way where you — and the people who care about you — feel completely at ease.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "24px",
                padding: "40px 32px",
                cursor: "pointer",
                position: "relative",
                // Staggered Entrance Animation
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = `translateY(-8px) scale(1.02)`;
                el.style.background = "#FFFFFF";
                el.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.08)";
                el.style.borderColor = "#FCD34D";
                
                const icon = el.querySelector('.feature-icon') as HTMLElement;
                if(icon) {
                  icon.style.transform = "scale(1.15) rotate(5deg)";
                  icon.style.background = "#FFC107";
                  icon.style.color = "#FFFFFF";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.background = "#F9FAFB";
                el.style.boxShadow = "none";
                el.style.borderColor = "#E5E7EB";

                const icon = el.querySelector('.feature-icon') as HTMLElement;
                if(icon) {
                  icon.style.transform = "scale(1) rotate(0deg)";
                  icon.style.background = "#FFFBEB";
                  icon.style.color = "#F59E0B";
                }
              }}
            >
              {/* Animated Icon Container */}
              <div
                className="feature-icon"
                style={{
                  width: "64px",
                  height: "64px",
                  background: "#FFFBEB",
                  color: "#F59E0B",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "32px",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {f.icon}
              </div>
              
              {/* Text Content */}
              <div>
                <h3 
                  style={{ 
                    color: "#111827", 
                    fontSize: "20px", 
                    fontWeight: 800, 
                    margin: "0 0 12px", 
                    letterSpacing: "-0.01em" 
                  }}
                >
                  {f.title}
                </h3>
                <p 
                  style={{ 
                    color: "#6B7280", 
                    fontSize: "15px", 
                    lineHeight: 1.6, 
                    margin: 0 
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}