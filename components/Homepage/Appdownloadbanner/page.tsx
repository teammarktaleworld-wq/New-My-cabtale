// "use client";

// export default function AppDownloadBanner() {
//   return (
//     <section
//       style={{
//         background: "#0A0A0A",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{
//         maxWidth: "1100px",
//         margin: "0 auto",
//         background: "linear-gradient(135deg, #1A1200 0%, #0F0A00 50%, #1A1200 100%)",
//         border: "1px solid rgba(255,193,7,0.18)",
//         borderRadius: "28px",
//         padding: "64px 60px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: "48px",
//         flexWrap: "wrap",
//         position: "relative",
//         overflow: "hidden",
//       }}>
//         {/* Glow */}
//         <div style={{
//           position: "absolute",
//           top: "-100px",
//           right: "200px",
//           width: "400px",
//           height: "400px",
//           background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }} />

//         {/* Text side */}
//         <div style={{ flex: 1, minWidth: "280px", position: "relative" }}>
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
//             Get the app
//           </span>

//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 44px)",
//             fontWeight: 800,
//             margin: "0 0 16px",
//             letterSpacing: "-0.03em",
//             lineHeight: 1.1,
//           }}>
//             Rides at your<br />fingertips
//           </h2>

//           <p style={{
//             color: "rgba(255,255,255,0.5)",
//             fontSize: "16px",
//             lineHeight: 1.65,
//             margin: "0 0 36px",
//             maxWidth: "400px",
//           }}>
//             Book, track, and pay — all from the CabTale app. Available on iOS and Android.
//           </p>

//           {/* App store buttons */}
//           <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
//             {/* App Store */}
//             <button style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               background: "white",
//               color: "#0A0A0A",
//               border: "none",
//               borderRadius: "14px",
//               padding: "14px 22px",
//               cursor: "pointer",
//               transition: "transform 0.15s, box-shadow 0.15s",
//               boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
//             }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
//                 (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//                 (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
//               }}
//             >
//               <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
//                 <path d="M18.5 13.5 C18.5 9 15.5 6.5 11.5 6.5 C9.5 6.5 7.8 7.3 6.7 8.2 C5.6 7.3 4 6.5 2 6.5 L2 8.5 C3.5 8.5 4.8 9.2 5.5 10.2 C4.6 11.3 4 12.8 4 14.5 C4 18.5 6.8 21.5 11.5 21.5 C15.5 21.5 18.5 18.5 18.5 13.5Z" fill="#0A0A0A" />
//                 <path d="M11 2 C11 2 9 0 7 2 C9 2.5 10 4 10 4 C10 4 11 2.5 11 2Z" fill="#0A0A0A" />
//               </svg>
//               <div style={{ textAlign: "left" }}>
//                 <div style={{ fontSize: "10px", fontWeight: 500, opacity: 0.6, lineHeight: 1 }}>Download on the</div>
//                 <div style={{ fontSize: "16px", fontWeight: 800, lineHeight: 1.3 }}>App Store</div>
//               </div>
//             </button>

//             {/* Google Play */}
//             <button style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               background: "white",
//               color: "#0A0A0A",
//               border: "none",
//               borderRadius: "14px",
//               padding: "14px 22px",
//               cursor: "pointer",
//               transition: "transform 0.15s, box-shadow 0.15s",
//               boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
//             }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
//                 (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//                 (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
//               }}
//             >
//               <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
//                 <path d="M2 2 L12 12 L2 22 C1.4 21.6 1 20.9 1 20 L1 4 C1 3.1 1.4 2.4 2 2Z" fill="#4ADE80" />
//                 <path d="M16.5 8 L19.5 10 C20.4 10.6 20.4 11.4 19.5 12 L16.5 14 L13 12 Z" fill="#FFC107" />
//                 <path d="M2 2 L13 12 L16.5 8 L5 1 C4 0.4 2.8 0.6 2 2Z" fill="#38BDF8" />
//                 <path d="M2 22 L13 12 L16.5 16 L5 23 C4 23.6 2.8 23.4 2 22Z" fill="#FB923C" />
//               </svg>
//               <div style={{ textAlign: "left" }}>
//                 <div style={{ fontSize: "10px", fontWeight: 500, opacity: 0.6, lineHeight: 1 }}>Get it on</div>
//                 <div style={{ fontSize: "16px", fontWeight: 800, lineHeight: 1.3 }}>Google Play</div>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Phone mockup */}
//         <div style={{ position: "relative", flexShrink: 0 }}>
//           <div style={{
//             width: "220px",
//             height: "440px",
//             background: "linear-gradient(145deg, #1A1A1A, #0A0A0A)",
//             borderRadius: "36px",
//             border: "6px solid rgba(255,255,255,0.1)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             padding: "24px 16px 16px",
//             gap: "12px",
//             boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
//             position: "relative",
//           }}>
//             {/* Notch */}
//             <div style={{
//               width: "60px",
//               height: "6px",
//               background: "rgba(255,255,255,0.15)",
//               borderRadius: "3px",
//               marginBottom: "8px",
//             }} />

//             {/* App header */}
//             <div style={{ width: "100%", textAlign: "center", marginBottom: "8px" }}>
//               <span style={{ color: "white", fontWeight: 800, fontSize: "16px" }}>
//                 Cab<span style={{ color: "#FFC107" }}>Tale</span>
//               </span>
//             </div>

//             {/* Mock map */}
//             <div style={{
//               width: "100%",
//               flex: 1,
//               background: "linear-gradient(135deg, #1a2a1a 0%, #0d1a0d 50%, #1a2a1a 100%)",
//               borderRadius: "16px",
//               position: "relative",
//               overflow: "hidden",
//             }}>
//               {/* Road lines */}
//               <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 188 280" preserveAspectRatio="none">
//                 <line x1="94" y1="0" x2="94" y2="280" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
//                 <line x1="0" y1="140" x2="188" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
//                 <line x1="94" y1="0" x2="94" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="8 8" />
//               </svg>

//               {/* Driver pin */}
//               <div style={{
//                 position: "absolute",
//                 top: "40%",
//                 left: "45%",
//                 transform: "translate(-50%,-50%)",
//               }}>
//                 <div style={{
//                   width: "32px",
//                   height: "32px",
//                   background: "#FFC107",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 0 16px rgba(255,193,7,0.6)",
//                 }}>
//                   <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
//                     <path d="M1 9 L2 4 Q3 1 5 1 L11 1 Q13 1 14 4 L15 9 Q15 11 13 11 L3 11 Q1 11 1 9Z" fill="#0A0A0A" />
//                     <circle cx="4.5" cy="11" r="2" fill="#0A0A0A" stroke="#FFC107" strokeWidth="0.8" />
//                     <circle cx="11.5" cy="11" r="2" fill="#0A0A0A" stroke="#FFC107" strokeWidth="0.8" />
//                   </svg>
//                 </div>
//                 {/* Pulse ring */}
//                 <div style={{
//                   position: "absolute",
//                   inset: "-8px",
//                   borderRadius: "50%",
//                   border: "2px solid rgba(255,193,7,0.3)",
//                   animation: "pulse 2s ease-in-out infinite",
//                 }} />
//               </div>

//               {/* Destination pin */}
//               <div style={{
//                 position: "absolute",
//                 bottom: "30%",
//                 right: "30%",
//               }}>
//                 <div style={{
//                   width: "24px",
//                   height: "24px",
//                   background: "#4ADE80",
//                   borderRadius: "50% 50% 50% 0",
//                   transform: "rotate(-45deg)",
//                   boxShadow: "0 0 12px rgba(74,222,128,0.5)",
//                 }} />
//               </div>
//             </div>

//             {/* Bottom info card */}
//             <div style={{
//               width: "100%",
//               background: "rgba(255,255,255,0.06)",
//               borderRadius: "12px",
//               padding: "12px",
//             }}>
//               <div style={{ color: "#FFC107", fontSize: "11px", fontWeight: 700, marginBottom: "4px" }}>Driver arriving in 3 min</div>
//               <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px" }}>Rajan K. · ★ 4.9 · White Maruti Swift</div>
//             </div>
//           </div>

//           {/* Glow under phone */}
//           <div style={{
//             position: "absolute",
//             bottom: "-30px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "160px",
//             height: "40px",
//             background: "radial-gradient(ellipse, rgba(255,193,7,0.25) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }} />
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 0.6; }
//           50% { transform: scale(1.4); opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }






















"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AppDownloadBannerModern() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#F9FAFB",
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)",
          border: "1px solid #FEF08A",
          borderRadius: "40px",
          padding: "80px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "64px",
          flexWrap: "wrap",
          position: "relative",
          boxShadow: "0 25px 50px -12px rgba(255, 193, 7, 0.15)",
          overflow: "hidden",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Decorative Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Text Content (Left Side) */}
        <div style={{ flex: "1 1 400px", position: "relative", zIndex: 1 }}>
          <span
            style={{
              display: "inline-block",
              background: "#FFFBEB",
              border: "1px solid #FEF08A",
              borderRadius: "100px",
              padding: "8px 20px",
              color: "#D97706",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
              boxShadow: "0 4px 10px rgba(245, 158, 11, 0.1)",
            }}
          >
            Get the App
          </span>

          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Your next great tale,<br />
            <span style={{ color: "#FFC107" }}>right in your pocket.</span>
          </h2>

          <p
            style={{
              color: "#4B5563",
              fontSize: "18px",
              lineHeight: 1.6,
              margin: "0 0 40px",
              maxWidth: "480px",
            }}
          >
            Book, track, and pay — all from the CabTale app. Experience seamless travel with real-time updates and one-tap SOS features.
          </p>

          {/* App Store Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* Apple App Store */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#111827",
                color: "#FFFFFF",
                border: "1px solid #000000",
                borderRadius: "16px",
                padding: "12px 24px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 10px 20px -5px rgba(17, 24, 39, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(17, 24, 39, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(17, 24, 39, 0.4)";
              }}
            >
              <svg width="28" height="32" viewBox="0 0 22 26" fill="none">
                <path d="M18.5 13.5 C18.5 9 15.5 6.5 11.5 6.5 C9.5 6.5 7.8 7.3 6.7 8.2 C5.6 7.3 4 6.5 2 6.5 L2 8.5 C3.5 8.5 4.8 9.2 5.5 10.2 C4.6 11.3 4 12.8 4 14.5 C4 18.5 6.8 21.5 11.5 21.5 C15.5 21.5 18.5 18.5 18.5 13.5Z" fill="#FFFFFF" />
                <path d="M11 2 C11 2 9 0 7 2 C9 2.5 10 4 10 4 C10 4 11 2.5 11 2Z" fill="#FFFFFF" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "11px", fontWeight: 500, opacity: 0.8, lineHeight: 1 }}>Download on the</div>
                <div style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
              </div>
            </button>

            {/* Google Play Store */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#111827",
                color: "#FFFFFF",
                border: "1px solid #000000",
                borderRadius: "16px",
                padding: "12px 24px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 10px 20px -5px rgba(17, 24, 39, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(17, 24, 39, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(17, 24, 39, 0.4)";
              }}
            >
              <svg width="28" height="30" viewBox="0 0 22 24" fill="none">
                <path d="M2 2 L12 12 L2 22 C1.4 21.6 1 20.9 1 20 L1 4 C1 3.1 1.4 2.4 2 2Z" fill="#4ADE80" />
                <path d="M16.5 8 L19.5 10 C20.4 10.6 20.4 11.4 19.5 12 L16.5 14 L13 12 Z" fill="#FFC107" />
                <path d="M2 2 L13 12 L16.5 8 L5 1 C4 0.4 2.8 0.6 2 2Z" fill="#38BDF8" />
                <path d="M2 22 L13 12 L16.5 16 L5 23 C4 23.6 2.8 23.4 2 22Z" fill="#FB923C" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "11px", fontWeight: 500, opacity: 0.8, lineHeight: 1 }}>GET IT ON</div>
                <div style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Floating Phone Mockup (Right Side) */}
        <div style={{ position: "relative", flexShrink: 0, margin: "0 auto", zIndex: 1, perspective: "1000px" }}>
          
          <div 
            className="levitate-phone"
            style={{
              width: "280px",
              height: "560px",
              background: "#FFFFFF",
              borderRadius: "44px",
              border: "10px solid #E5E7EB", // Silver/White bezel
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.12), inset 0 4px 10px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dynamic Island / Notch */}
            <div style={{
              position: "absolute",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90px",
              height: "28px",
              background: "#111827",
              borderRadius: "100px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 8px",
            }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#1F2937", border: "2px solid #374151" }} />
            </div>

            {/* Premium Animated Map Background */}
            <div 
              className="pan-map"
              style={{
                position: "absolute",
                inset: 0,
                background: "#F0FDF4", // Very light green base
                zIndex: 0,
              }}
            >
              {/* Fake Map Elements (Parks, Water, Roads) */}
              <div style={{ position: "absolute", top: "10%", left: "-10%", width: "200px", height: "150px", background: "#DCFCE7", borderRadius: "40px" }} />
              <div style={{ position: "absolute", bottom: "20%", right: "-20%", width: "180px", height: "200px", background: "#E0F2FE", borderRadius: "40px" }} />
              
              <svg style={{ position: "absolute", inset: 0, width: "200%", height: "200%", transform: "translate(-25%, -25%)" }} viewBox="0 0 400 600" fill="none">
                {/* Thick road */}
                <path d="M50,0 Q100,200 250,300 T400,600" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
                {/* Active Route Line */}
                <path d="M50,0 Q100,200 250,300 T400,600" stroke="#FFC107" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 12" className="dash-move" />
              </svg>
            </div>

            {/* UI Header overlay */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "32px", paddingBottom: "16px" }}>
              <div style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", padding: "8px", borderRadius: "50%" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </div>
              <span style={{ color: "#111827", fontWeight: 900, fontSize: "18px", textShadow: "0 2px 4px rgba(255,255,255,0.5)" }}>
                Cab<span style={{ color: "#D97706" }}>Tale</span>
              </span>
              <div style={{ width: "36px", height: "36px" }}></div>
            </div>

            {/* Live Cab & Destination Pin */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2 }}>
              
              {/* Pulsing Driver Location */}
              <div style={{ position: "relative" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "#FFFFFF",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  position: "relative",
                  zIndex: 2,
                }}>
                  <div style={{ fontSize: "24px" }}>🚕</div>
                </div>
                {/* Ping Animation */}
                <div style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "50%",
                  border: "2px solid #FFC107",
                  animation: "pingRadar 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                  zIndex: 1,
                }} />
              </div>
            </div>

            {/* Bottom Glass UI Card */}
            <div style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              zIndex: 3,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <div style={{ color: "#111827", fontSize: "16px", fontWeight: 800, marginBottom: "4px" }}>Arriving in 3 min</div>
                  <div style={{ color: "#6B7280", fontSize: "12px", fontWeight: 500 }}>Dropoff: Indore Central</div>
                </div>
                <div style={{ background: "#FEF08A", color: "#D97706", padding: "4px 8px", borderRadius: "8px", fontSize: "12px", fontWeight: 700 }}>
                  ON TIME
                </div>
              </div>
              
              <div style={{ height: "1px", background: "#E5E7EB", margin: "12px 0" }} />
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                  👨🏽‍✈️
                </div>
                <div>
                  <div style={{ color: "#111827", fontSize: "14px", fontWeight: 700 }}>Rajan Kumar</div>
                  <div style={{ color: "#6B7280", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ color: "#F59E0B" }}>★ 4.9</span> • White Sedan
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Shadow under floating phone */}
          <div className="levitate-shadow" style={{
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "20px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)",
            filter: "blur(4px)",
            zIndex: 0,
          }} />
        </div>
      </div>

      {/* Embedded Styles for Animations */}
      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-16px) rotate(-1deg); }
        }
        @keyframes shadowScale {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
          50% { transform: translateX(-50%) scale(0.85); opacity: 0.3; }
        }
        @keyframes panMap {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes dashMove {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pingRadar {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .levitate-phone {
          animation: levitate 6s ease-in-out infinite;
        }
        .levitate-shadow {
          animation: shadowScale 6s ease-in-out infinite;
        }
        .pan-map {
          animation: panMap 10s linear infinite alternate;
        }
        .dash-move {
          animation: dashMove 1s linear infinite;
        }
      `}</style>
    </section>
  );
}