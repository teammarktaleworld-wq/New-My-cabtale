// "use client";

// const STEPS = [
//   {
//     icon: (
//       <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
//         <circle cx="20" cy="16" r="7" stroke="#FFC107" strokeWidth="2" />
//         <path d="M20 23 C12 23 6 27 6 32 L34 32 C34 27 28 23 20 23Z" stroke="#FFC107" strokeWidth="2" fill="none" />
//         <circle cx="20" cy="16" r="2.5" fill="#FFC107" />
//       </svg>
//     ),
//     step: "01",
//     title: "Enter your destination",
//     desc: "Type where you're headed. We'll show you the fare before you confirm — no surprises.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
//         <rect x="6" y="18" width="28" height="14" rx="3" stroke="#FFC107" strokeWidth="2" />
//         <path d="M10 18 L12 10 Q13.5 6 17 6 L23 6 Q26.5 6 28 10 L30 18" stroke="#FFC107" strokeWidth="2" fill="none" />
//         <circle cx="12" cy="32" r="3" fill="#FFC107" />
//         <circle cx="28" cy="32" r="3" fill="#FFC107" />
//         <rect x="16" y="8" width="8" height="3" rx="1" fill="#FFC107" opacity="0.5" />
//       </svg>
//     ),
//     step: "02",
//     title: "Get matched instantly",
//     desc: "A verified driver nearby accepts your ride. Watch them approach on the live map.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
//         <path d="M8 20 L17 29 L32 12" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//         <circle cx="20" cy="20" r="16" stroke="#FFC107" strokeWidth="1.5" opacity="0.3" />
//       </svg>
//     ),
//     step: "03",
//     title: "Ride & share your Tale",
//     desc: "Enjoy the ride. Rate your driver afterward and share the story if it's worth telling.",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section
//       id="how-it-works"
//       style={{
//         background: "#0D0D0D",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background decoration */}
//       <div style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%,-50%)",
//         width: "600px",
//         height: "600px",
//         borderRadius: "50%",
//         border: "1px solid rgba(255,193,7,0.06)",
//         pointerEvents: "none",
//       }} />
//       <div style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%,-50%)",
//         width: "900px",
//         height: "900px",
//         borderRadius: "50%",
//         border: "1px solid rgba(255,193,7,0.03)",
//         pointerEvents: "none",
//       }} />

//       <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
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
//             marginBottom: "20px",
//           }}>
//             How it works
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 48px)",
//             fontWeight: 800,
//             lineHeight: 1.1,
//             letterSpacing: "-0.03em",
//             margin: 0,
//           }}>
//             Three steps to your next ride
//           </h2>
//         </div>

//         {/* Steps */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//           gap: "24px",
//           position: "relative",
//         }}>
//           {/* Connector line (desktop only) */}
//           <div style={{
//             position: "absolute",
//             top: "68px",
//             left: "20%",
//             right: "20%",
//             height: "1px",
//             background: "linear-gradient(90deg, transparent, rgba(255,193,7,0.3), transparent)",
//             pointerEvents: "none",
//           }} className="ct-connector" />

//           {STEPS.map((s, i) => (
//             <div
//               key={s.step}
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 borderRadius: "20px",
//                 padding: "40px 32px",
//                 position: "relative",
//                 transition: "border-color 0.2s, transform 0.2s",
//               }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,193,7,0.35)";
//                 (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
//                 (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
//               }}
//             >
//               {/* Step number */}
//               <div style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "24px",
//                 fontSize: "48px",
//                 fontWeight: 900,
//                 color: "rgba(255,193,7,0.06)",
//                 lineHeight: 1,
//                 letterSpacing: "-0.04em",
//               }}>
//                 {s.step}
//               </div>

//               {/* Icon */}
//               <div style={{
//                 width: "72px",
//                 height: "72px",
//                 background: "rgba(255,193,7,0.08)",
//                 borderRadius: "16px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginBottom: "24px",
//               }}>
//                 {s.icon}
//               </div>

//               <h3 style={{
//                 color: "white",
//                 fontSize: "20px",
//                 fontWeight: 700,
//                 margin: "0 0 12px",
//                 letterSpacing: "-0.02em",
//               }}>
//                 {s.title}
//               </h3>
//               <p style={{
//                 color: "rgba(255,255,255,0.5)",
//                 fontSize: "15px",
//                 lineHeight: 1.65,
//                 margin: 0,
//               }}>
//                 {s.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

























"use client";

import React, { useState, useEffect, useRef } from "react";

const STEPS = [
  {
    step: "01",
    title: "Enter your destination",
    desc: "Type where you're headed. We'll show you the fare before you confirm — no hidden surprises.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Get matched instantly",
    desc: "A verified driver nearby accepts your ride. Watch them approach on the live map.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Ride & share your Tale",
    desc: "Enjoy the premium ride. Rate your driver afterward and share the story if it's worth telling.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function HowItWorksModern() {
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play the steps every 4.5 seconds
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Handle manual step click
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    startTimer(); // Reset the timer when manually interacted
  };

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              background: "#FFFBEB", // Very light yellow
              border: "1px solid #FEF08A",
              borderRadius: "100px",
              padding: "6px 16px",
              color: "#D97706", // Darker yellow/amber for contrast
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            How It Works
          </span>
          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Three steps to your next <span style={{ color: "#FFC107" }}>Tale</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "48px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Left Column: Interactive Steps */}
          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {STEPS.map((s, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={s.step}
                  onClick={() => handleStepClick(i)}
                  style={{
                    padding: "24px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    background: isActive ? "#FFFFFF" : "transparent",
                    border: `1px solid ${isActive ? "#E5E7EB" : "transparent"}`,
                    boxShadow: isActive ? "0 10px 25px -5px rgba(0, 0, 0, 0.05)" : "none",
                    transform: isActive ? "translateX(8px)" : "translateX(0)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    display: "flex",
                    gap: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Progress Line Indicator */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        background: "#FFC107",
                        borderRadius: "4px 0 0 4px",
                      }}
                    />
                  )}

                  {/* Icon Container */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: isActive ? "#FFC107" : "#F3F4F6",
                      color: isActive ? "#111827" : "#9CA3AF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s",
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* Text Content */}
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: isActive ? "#FFC107" : "#9CA3AF",
                        marginBottom: "4px",
                        transition: "color 0.4s",
                      }}
                    >
                      STEP {s.step}
                    </div>
                    <h3
                      style={{
                        color: "#111827",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 8px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        color: "#4B5563",
                        fontSize: "15px",
                        lineHeight: 1.6,
                        margin: 0,
                        height: isActive ? "auto" : "0px",
                        opacity: isActive ? 1 : 0,
                        overflow: "hidden",
                        transition: "opacity 0.4s",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Story Animation Stage */}
          <div
            style={{
              flex: "1 1 500px",
              height: "400px",
              background: "#F9FAFB",
              borderRadius: "32px",
              border: "1px solid #F3F4F6",
              position: "relative",
              overflow: "hidden",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)",
            }}
          >
            {/* Animated City Background */}
            <svg
              style={{ position: "absolute", bottom: "40px", left: "0", opacity: 0.5, transition: "transform 4s linear" }}
              width="100%"
              height="200"
              preserveAspectRatio="none"
              viewBox="0 0 400 200"
            >
              <rect x="20" y="80" width="40" height="120" rx="4" fill="#E5E7EB" />
              <rect x="80" y="40" width="60" height="160" rx="4" fill="#D1D5DB" />
              <rect x="160" y="100" width="50" height="100" rx="4" fill="#E5E7EB" />
              <rect x="240" y="60" width="70" height="140" rx="4" fill="#9CA3AF" />
              <rect x="330" y="90" width="50" height="110" rx="4" fill="#D1D5DB" />
            </svg>

            {/* Road */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60px",
                background: "#374151",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "repeating-linear-gradient(90deg, #FFC107 0, #FFC107 20px, transparent 20px, transparent 40px)",
                  opacity: 0.7,
                  transform: activeStep === 2 ? "translateX(-40px)" : "translateX(0)",
                  transition: "transform 4s linear",
                }}
              />
            </div>

            {/* Actor: Passenger */}
            <div
              style={{
                position: "absolute",
                bottom: "65px",
                left: "25%",
                fontSize: "48px",
                transition: "all 0.5s ease",
                opacity: activeStep === 2 ? 0 : 1, // Disappears when riding
                transform: activeStep === 0 ? "scale(1)" : "scale(0.95)",
              }}
            >
              🧍‍♂️
              {/* Phone Booking indicator (shows only in Step 0) */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  background: "#111827",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: activeStep === 0 ? 1 : 0,
                  transform: activeStep === 0 ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <span style={{ fontSize: "14px" }}>📱</span>
              </div>
            </div>

            {/* Actor: The Cab */}
            <div
              style={{
                position: "absolute",
                bottom: "50px",
                transition: "all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)", // Nice spring effect
                // Animation states mapping
                left: activeStep === 0 ? "-150%" : activeStep === 1 ? "15%" : "150%",
              }}
            >
              <svg width="200" height="80" viewBox="0 0 240 100" fill="none">
                {/* Shadow */}
                <ellipse cx="120" cy="90" rx="90" ry="8" fill="rgba(0,0,0,0.15)" />
                {/* Cab Top */}
                <path d="M60 50 L80 20 L160 20 L190 50 Z" fill="#E5E7EB" />
                <path d="M65 50 L83 25 L120 25 L120 50 Z" fill="#9CA3AF" />
                <path d="M125 50 L125 25 L157 25 L182 50 Z" fill="#9CA3AF" />
                {/* Taxi Light */}
                <rect x="105" y="10" width="30" height="10" rx="3" fill="#FFC107" />
                {/* Body */}
                <path d="M30 50 L210 50 Q230 50 230 65 L230 75 Q230 85 210 85 L30 85 Q10 85 10 75 L10 65 Q10 50 30 50 Z" fill="#FFFFFF" />
                {/* Yellow Accent */}
                <path d="M120 50 L230 50 Q230 65 230 75 Q230 85 210 85 L150 85 Z" fill="#FFC107" />
                {/* Wheels */}
                <circle cx="60" cy="85" r="14" fill="#111827" />
                <circle cx="60" cy="85" r="6" fill="#E5E7EB" />
                <circle cx="180" cy="85" r="14" fill="#111827" />
                <circle cx="180" cy="85" r="6" fill="#E5E7EB" />
              </svg>
              
              {/* Dust particles when departing */}
              {activeStep === 2 && (
                <div style={{
                  position: "absolute", bottom: "10px", left: "-20px", 
                  fontSize: "24px", animation: "fadeLeft 1s linear forwards"
                }}>
                  💨
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeLeft {
          0% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(-40px) scale(1.5); }
        }
      `}</style>
    </section>
  );
}

