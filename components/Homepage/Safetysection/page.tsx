// "use client";

// const PILLARS = [
//   {
//     number: "01",
//     title: "Driver background checks",
//     desc: "Every driver undergoes a police verification, license authenticity check, and vehicle fitness inspection before their first CabTale ride.",
//     color: "#FFC107",
//   },
//   {
//     number: "02",
//     title: "Live GPS sharing",
//     desc: "Share a live tracking link with anyone. They see your driver's name, vehicle plate, current location, and ETA — updated every 10 seconds.",
//     color: "#4ADE80",
//   },
//   {
//     number: "03",
//     title: "One-tap SOS",
//     desc: "Press SOS to instantly alert our safety team and ping your emergency contacts with your GPS location, trip ID, and driver details.",
//     color: "#FB923C",
//   },
//   {
//     number: "04",
//     title: "Ride insurance",
//     desc: "All passengers are covered by a third-party liability insurance policy from pickup to drop at no extra cost.",
//     color: "#A78BFA",
//   },
// ];

// export default function SafetySection() {
//   return (
//     <section
//       id="safety"
//       style={{
//         background: "#0D0D0D",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Large background text */}
//       <div style={{
//         position: "absolute",
//         bottom: "-40px",
//         right: "-20px",
//         fontSize: "200px",
//         fontWeight: 900,
//         color: "rgba(255,193,7,0.03)",
//         letterSpacing: "-0.06em",
//         userSelect: "none",
//         lineHeight: 1,
//         pointerEvents: "none",
//       }}>
//         SAFE
//       </div>

//       <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
//         {/* Header */}
//         <div style={{ marginBottom: "72px" }}>
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
//             marginBottom: "20px",
//           }}>
//             Your safety
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(32px, 5vw, 56px)",
//             fontWeight: 800,
//             margin: "0 0 20px",
//             letterSpacing: "-0.04em",
//             lineHeight: 1.05,
//             maxWidth: "600px",
//           }}>
//             We take safety<br />
//             <span style={{ color: "#FFC107" }}>seriously.</span>
//           </h2>
//           <p style={{
//             color: "rgba(255,255,255,0.45)",
//             fontSize: "17px",
//             lineHeight: 1.65,
//             maxWidth: "480px",
//             margin: 0,
//           }}>
//             Four layers of protection on every single ride. Not just on paper — built into the product.
//           </p>
//         </div>

//         {/* Pillars */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//           gap: "24px",
//         }}>
//           {PILLARS.map((p) => (
//             <div
//               key={p.number}
//               style={{
//                 borderLeft: `3px solid ${p.color}`,
//                 padding: "32px 28px",
//                 background: "rgba(255,255,255,0.03)",
//                 borderRadius: "0 16px 16px 0",
//                 transition: "background 0.2s",
//               }}
//               onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
//               onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)")}
//             >
//               <div style={{
//                 fontSize: "48px",
//                 fontWeight: 900,
//                 color: `${p.color}20`,
//                 letterSpacing: "-0.04em",
//                 lineHeight: 1,
//                 marginBottom: "16px",
//               }}>
//                 {p.number}
//               </div>
//               <h3 style={{
//                 color: "white",
//                 fontSize: "18px",
//                 fontWeight: 700,
//                 margin: "0 0 12px",
//                 letterSpacing: "-0.02em",
//               }}>
//                 {p.title}
//               </h3>
//               <p style={{
//                 color: "rgba(255,255,255,0.45)",
//                 fontSize: "14px",
//                 lineHeight: 1.65,
//                 margin: 0,
//               }}>
//                 {p.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom strip */}
//         <div style={{
//           marginTop: "64px",
//           background: "rgba(255,193,7,0.06)",
//           border: "1px solid rgba(255,193,7,0.15)",
//           borderRadius: "16px",
//           padding: "28px 32px",
//           display: "flex",
//           alignItems: "center",
//           gap: "24px",
//           flexWrap: "wrap",
//         }}>
//           <div style={{
//             width: "48px",
//             height: "48px",
//             borderRadius: "50%",
//             background: "rgba(255,193,7,0.1)",
//             flexShrink: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}>
//             <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//               <path d="M11 2L19 6V12C19 16.4 15.5 20.4 11 21C6.5 20.4 3 16.4 3 12V6L11 2Z" stroke="#FFC107" strokeWidth="1.8" fill="none" />
//               <path d="M7 11L10 14L15 9" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//           <div style={{ flex: 1, minWidth: "200px" }}>
//             <div style={{ color: "white", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>
//               Safety helpline: 1800-XXX-XXXX
//             </div>
//             <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
//               Available 24/7. Average response time: 90 seconds.
//             </div>
//           </div>
//           <button style={{
//             background: "#FFC107",
//             color: "#0A0A0A",
//             border: "none",
//             borderRadius: "100px",
//             padding: "12px 24px",
//             fontSize: "14px",
//             fontWeight: 700,
//             cursor: "pointer",
//             whiteSpace: "nowrap",
//           }}>
//             Learn more →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


















"use client";

import React, { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    number: "01",
    title: "Driver background checks",
    desc: "Every driver undergoes a strict police verification, license authenticity check, and vehicle fitness inspection before their first CabTale ride.",
    color: "#F59E0B", // Amber
    bgLight: "#FFFBEB",
  },
  {
    number: "02",
    title: "Live GPS sharing",
    desc: "Share a live tracking link with anyone. They see your driver's name, vehicle plate, current location, and ETA — updated every 10 seconds.",
    color: "#10B981", // Emerald
    bgLight: "#ECFDF5",
  },
  {
    number: "03",
    title: "One-tap SOS",
    desc: "Press SOS to instantly alert our safety team and ping your emergency contacts with your precise GPS location, trip ID, and driver details.",
    color: "#EF4444", // Red
    bgLight: "#FEF2F2",
  },
  {
    number: "04",
    title: "Comprehensive Insurance",
    desc: "All passengers are covered by a premium third-party liability insurance policy from pickup to drop at absolutely no extra cost.",
    color: "#8B5CF6", // Purple
    bgLight: "#F5F3FF",
  },
];

export default function SafetySectionModern() {
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
      id="safety"
      style={{
        backgroundColor: "#F9FAFB", // Light premium grey
        padding: "120px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Large Background Text */}
      <div 
        className="bg-text-animate"
        style={{
          position: "absolute",
          top: "10%",
          left: "0",
          fontSize: "clamp(150px, 20vw, 300px)",
          fontWeight: 900,
          color: "#F3F4F6", // Just slightly darker than bg
          letterSpacing: "-0.05em",
          userSelect: "none",
          lineHeight: 0.8,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          zIndex: 0,
        }}
      >
        PROTECTION
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div 
          style={{ 
            marginBottom: "80px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
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
              marginBottom: "24px",
              boxShadow: "0 2px 10px rgba(245, 158, 11, 0.05)"
            }}
          >
            Your Safety First
          </span>
          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "700px",
            }}
          >
            We take your safety <br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1 }}>seriously.</span>
              {/* Highlight stroke behind text */}
              <svg style={{ position: "absolute", bottom: "4px", left: 0, width: "100%", height: "12px", zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 100 12" fill="none">
                <path d="M0 6 Q 50 12 100 6" stroke="#FFC107" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p
            style={{
              color: "#4B5563",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "500px",
              margin: 0,
            }}
          >
            Four layers of protection on every single ride. Not just on paper — built directly into the core of our product.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {PILLARS.map((p, index) => (
            <div
              key={p.number}
              className="safety-card"
              style={{
                position: "relative",
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "40px 32px",
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.03)",
                border: "1px solid #E5E7EB",
                overflow: "hidden",
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.1)";
                
                const accent = el.querySelector('.accent-bar') as HTMLElement;
                if(accent) accent.style.height = "100%";
                
                const num = el.querySelector('.pillar-num') as HTMLElement;
                if(num) num.style.color = p.color;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px -2px rgba(0, 0, 0, 0.03)";
                
                const accent = el.querySelector('.accent-bar') as HTMLElement;
                if(accent) accent.style.height = "0%";
                
                const num = el.querySelector('.pillar-num') as HTMLElement;
                if(num) num.style.color = "#F3F4F6";
              }}
            >
              {/* Dynamic Accent Bar */}
              <div 
                className="accent-bar"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  background: p.color,
                  height: "0%",
                  transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
              
              {/* Giant Number behind text */}
              <div 
                className="pillar-num"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  fontSize: "80px",
                  fontWeight: 900,
                  color: "#F3F4F6", // Very faint grey initially
                  lineHeight: 0.8,
                  transition: "color 0.4s ease",
                  zIndex: 0,
                }}
              >
                {p.number}
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    color: "#111827",
                    fontSize: "20px",
                    fontWeight: 800,
                    margin: "0 0 16px",
                    letterSpacing: "-0.01em",
                    marginTop: "40px", // Push down below the giant number
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "15px",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Bottom Strip */}
        <div
          style={{
            marginTop: "64px",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "20px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 600ms",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            {/* Pulsing Icon */}
            <div
              className="pulse-icon"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "#FFFBEB",
                color: "#F59E0B",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {/* Outer Pulse Ring */}
              <div 
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  borderRadius: "50%",
                  border: "2px solid #F59E0B",
                  animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
            </div>
            
            <div style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ color: "#111827", fontWeight: 800, fontSize: "18px", marginBottom: "4px" }}>
                24/7 Safety Helpline: <span style={{ color: "#F59E0B" }}>1800-CAB-SAFE</span>
              </div>
              <div style={{ color: "#6B7280", fontSize: "14px", fontWeight: 500 }}>
                Always available. Average human response time: 90 seconds.
              </div>
            </div>
          </div>

          <button
            style={{
              background: "#FFC107",
              color: "#111827",
              border: "none",
              borderRadius: "12px",
              padding: "16px 32px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 10px rgba(255,193,7,0.3)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(255,193,7,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(255,193,7,0.3)";
            }}
          >
            Read Safety Guide →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes panBackground {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bg-text-animate {
          animation: panBackground 60s linear infinite alternate;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}