// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function CabTaleHero() {
//   const [loaded, setLoaded] = useState(false);
//   const roadRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const t = setTimeout(() => setLoaded(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         background: "#0A0A0A",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         overflow: "hidden",
//         fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//       }}
//     >
//       {/* Ambient yellow glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: "30%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "700px",
//           height: "400px",
//           background:
//             "radial-gradient(ellipse, rgba(255,193,7,0.12) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       {/* Moving road dashes */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "80px",
//           left: 0,
//           right: 0,
//           height: "2px",
//           display: "flex",
//           gap: "32px",
//           overflow: "hidden",
//         }}
//       >
//         {Array.from({ length: 20 }).map((_, i) => (
//           <div
//             key={i}
//             style={{
//               flexShrink: 0,
//               width: "60px",
//               height: "2px",
//               background: "rgba(255,193,7,0.35)",
//               animation: `dashMove 2s linear infinite`,
//               animationDelay: `${i * -0.2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "0px",
//           zIndex: 1,
//           padding: "0 24px",
//           textAlign: "center",
//         }}
//       >
//         {/* Eyebrow */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "8px",
//             background: "rgba(255,193,7,0.1)",
//             border: "1px solid rgba(255,193,7,0.3)",
//             borderRadius: "100px",
//             padding: "6px 16px",
//             marginBottom: "28px",
//             opacity: loaded ? 1 : 0,
//             transform: loaded ? "translateY(0)" : "translateY(12px)",
//             transition: "opacity 0.6s ease, transform 0.6s ease",
//           }}
//         >
//           <span
//             style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FFC107", display: "inline-block" }}
//           />
//           <span
//             style={{
//               color: "#FFC107",
//               fontSize: "12px",
//               fontWeight: 600,
//               letterSpacing: "0.12em",
//               textTransform: "uppercase",
//             }}
//           >
//             Now available in your city
//           </span>
//         </div>

//         {/* Logo */}
//         <div
//           style={{
//             marginBottom: "36px",
//             opacity: loaded ? 1 : 0,
//             transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
//             transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
//           }}
//         >
//           {/* Inline SVG recreation of the CabTale wordmark */}
//           <svg
//             viewBox="0 0 420 120"
//             width="320"
//             height="96"
//             style={{ overflow: "visible" }}
//           >
//             {/* Taxi roof light */}
//             <rect x="170" y="4" width="80" height="22" rx="4" fill="#FFC107" />
//             {/* Checkerboard pattern on roof */}
//             {Array.from({ length: 8 }).map((_, i) => (
//               <rect
//                 key={i}
//                 x={170 + i * 10}
//                 y={i % 2 === 0 ? 4 : 14}
//                 width="10"
//                 height="10"
//                 fill={i % 2 === 0 ? "#1A1A1A" : "#FFC107"}
//               />
//             ))}

//             {/* Car body */}
//             <path
//               d="M40 80 Q30 80 26 70 L38 40 Q44 26 60 26 L360 26 Q376 26 382 40 L394 70 Q390 80 380 80 Z"
//               fill="#FFC107"
//             />

//             {/* CAB text (white) */}
//             <text
//               x="80"
//               y="72"
//               fontFamily="'Arial Black', 'Impact', sans-serif"
//               fontWeight="900"
//               fontSize="56"
//               fill="white"
//               letterSpacing="-2"
//             >
//               CAB
//             </text>

//             {/* TALE text (black) */}
//             <text
//               x="222"
//               y="72"
//               fontFamily="'Arial Black', 'Impact', sans-serif"
//               fontWeight="900"
//               fontSize="56"
//               fill="#1A1A1A"
//               letterSpacing="-2"
//             >
//               TALE
//             </text>

//             {/* Wheels */}
//             <circle cx="100" cy="90" r="20" fill="#1A1A1A" />
//             <circle cx="100" cy="90" r="10" fill="#555" />
//             <circle cx="320" cy="90" r="20" fill="#1A1A1A" />
//             <circle cx="320" cy="90" r="10" fill="#555" />

//             {/* Road line under car */}
//             <line x1="20" y1="110" x2="400" y2="110" stroke="#333" strokeWidth="2" />
//             {Array.from({ length: 6 }).map((_, i) => (
//               <line
//                 key={i}
//                 x1={60 + i * 60}
//                 y1="110"
//                 x2={90 + i * 60}
//                 y2="110"
//                 stroke="#FFC107"
//                 strokeWidth="2"
//                 opacity="0.5"
//               />
//             ))}
//           </svg>
//         </div>

//         {/* Tagline */}
//         <p
//           style={{
//             fontSize: "13px",
//             fontWeight: 500,
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             color: "rgba(255,193,7,0.7)",
//             marginBottom: "48px",
//             opacity: loaded ? 1 : 0,
//             transition: "opacity 0.7s ease 0.2s",
//           }}
//         >
//           Every journey has a Tale
//         </p>

//         {/* Headline */}
//         <h1
//           style={{
//             fontSize: "clamp(36px, 5vw, 64px)",
//             fontWeight: 800,
//             lineHeight: 1.05,
//             color: "#FFFFFF",
//             margin: "0 0 20px",
//             maxWidth: "700px",
//             opacity: loaded ? 1 : 0,
//             transform: loaded ? "translateY(0)" : "translateY(16px)",
//             transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
//           }}
//         >
//           Rides you can{" "}
//           <span
//             style={{
//               color: "#FFC107",
//               position: "relative",
//               display: "inline-block",
//             }}
//           >
//             trust.
//             <svg
//               viewBox="0 0 120 8"
//               width="100%"
//               style={{
//                 position: "absolute",
//                 bottom: "-4px",
//                 left: 0,
//                 opacity: 0.6,
//               }}
//             >
//               <path
//                 d="M2 6 Q30 2 60 5 Q90 8 118 4"
//                 stroke="#FFC107"
//                 strokeWidth="2.5"
//                 fill="none"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>{" "}
//           Stories worth telling.
//         </h1>

//         {/* Sub copy */}
//         <p
//           style={{
//             fontSize: "17px",
//             color: "rgba(255,255,255,0.5)",
//             maxWidth: "480px",
//             lineHeight: 1.65,
//             marginBottom: "44px",
//             opacity: loaded ? 1 : 0,
//             transition: "opacity 0.7s ease 0.35s",
//           }}
//         >
//           Book a cab in seconds — safe drivers, transparent fares, and a
//           journey that's more than just getting from A to B.
//         </p>

//         {/* CTAs */}
//         <div
//           style={{
//             display: "flex",
//             gap: "16px",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             opacity: loaded ? 1 : 0,
//             transform: loaded ? "translateY(0)" : "translateY(12px)",
//             transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
//           }}
//         >
//           <button
//             style={{
//               background: "#FFC107",
//               color: "#0A0A0A",
//               border: "none",
//               borderRadius: "100px",
//               padding: "16px 36px",
//               fontSize: "15px",
//               fontWeight: 700,
//               cursor: "pointer",
//               letterSpacing: "0.02em",
//               boxShadow: "0 0 32px rgba(255,193,7,0.35)",
//               transition: "transform 0.15s ease, box-shadow 0.15s ease",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
//               (e.currentTarget as HTMLButtonElement).style.boxShadow =
//                 "0 0 48px rgba(255,193,7,0.55)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLButtonElement).style.boxShadow =
//                 "0 0 32px rgba(255,193,7,0.35)";
//             }}
//           >
//             Book a Ride →
//           </button>
//           <button
//             style={{
//               background: "transparent",
//               color: "rgba(255,255,255,0.75)",
//               border: "1px solid rgba(255,255,255,0.15)",
//               borderRadius: "100px",
//               padding: "16px 32px",
//               fontSize: "15px",
//               fontWeight: 500,
//               cursor: "pointer",
//               transition: "border-color 0.15s ease, color 0.15s ease",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.borderColor =
//                 "rgba(255,193,7,0.4)";
//               (e.currentTarget as HTMLButtonElement).style.color = "#FFC107";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.borderColor =
//                 "rgba(255,255,255,0.15)";
//               (e.currentTarget as HTMLButtonElement).style.color =
//                 "rgba(255,255,255,0.75)";
//             }}
//           >
//             Become a Driver
//           </button>
//         </div>

//         {/* Trust bar */}
//         <div
//           style={{
//             marginTop: "64px",
//             display: "flex",
//             gap: "48px",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             opacity: loaded ? 0.6 : 0,
//             transition: "opacity 0.7s ease 0.55s",
//           }}
//         >
//           {[
//             { value: "50K+", label: "Happy Riders" },
//             { value: "4.9★", label: "Avg Rating" },
//             { value: "200+", label: "Cities" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               style={{ textAlign: "center" }}
//             >
//               <div
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: 800,
//                   color: "#FFC107",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div
//                 style={{
//                   fontSize: "12px",
//                   color: "rgba(255,255,255,0.4)",
//                   marginTop: "2px",
//                   letterSpacing: "0.06em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll hint */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "28px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "6px",
//           opacity: 0.35,
//           animation: "fadeUpDown 2s ease-in-out infinite",
//         }}
//       >
//         <span style={{ fontSize: "11px", color: "white", letterSpacing: "0.1em", textTransform: "uppercase" }}>
//           Scroll
//         </span>
//         <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
//           <path d="M8 1v14M2 10l6 7 6-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>

//       <style>{`
//         @keyframes dashMove {
//           from { transform: translateX(0); }
//           to { transform: translateX(-92px); }
//         }
//         @keyframes fadeUpDown {
//           0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.35; }
//           50% { transform: translateX(-50%) translateY(5px); opacity: 0.6; }
//         }
//       `}</style>
//     </section>
//   );
// }














// "use client";

// import React, { useState, useEffect } from "react";

// export default function CabTaleHeroModern() {
//   const [scene, setScene] = useState("booking"); 
//   // scenes: 'booking' -> 'arriving' -> 'boarding' -> 'departing'

//   useEffect(() => {
//     const runAnimation = () => {
//       setScene("booking");
      
//       // Sequence timing
//       setTimeout(() => setScene("arriving"), 3000);  // Phone disappears, car enters
//       setTimeout(() => setScene("boarding"), 5500);  // Car stops, passenger appears & enters
//       setTimeout(() => setScene("departing"), 7500); // Car drives away
//     };

//     runAnimation();
//     const interval = setInterval(runAnimation, 10000); // Loop every 10 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#F9FAFB", // Light background from the reference image
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "0 5%",
//         fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           maxWidth: "1280px",
//           width: "100%",
//           gap: "40px",
//           flexWrap: "wrap",
//           zIndex: 2,
//         }}
//       >
//         {/* Left Column: Typography & CTAs */}
//         <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          
//           {/* Trust Badge */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               background: "#FFFFFF",
//               border: "1px solid #E5E7EB",
//               borderRadius: "100px",
//               padding: "8px 16px",
//               marginBottom: "24px",
//               boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
//             }}
//           >
//             <span role="img" aria-label="taxi" style={{ fontSize: "14px" }}>🚕</span>
//             <span
//               style={{
//                 color: "#10B981", // Green text as seen in the top badge of reference
//                 fontSize: "13px",
//                 fontWeight: 600,
//                 letterSpacing: "0.02em",
//               }}
//             >
//               Reliable. Safe. Always On Time.
//             </span>
//           </div>

//           {/* Headline */}
//           <h1
//             style={{
//               fontSize: "clamp(48px, 6vw, 72px)",
//               fontWeight: 800,
//               lineHeight: 1.1,
//               color: "#111827", // Dark gray almost black
//               margin: "0 0 24px",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             Your Ride, <br />
//             Your <span style={{ color: "#FFC107" }}>Story</span>
//           </h1>

//           {/* Subcopy */}
//           <p
//             style={{
//               fontSize: "18px",
//               color: "#4B5563", // Medium gray
//               lineHeight: 1.6,
//               marginBottom: "40px",
//               maxWidth: "480px",
//             }}
//           >
//             CabTale is your everyday travel partner. Book rides easily, track in real-time, and reach your destination safely.
//           </p>

//           {/* Buttons */}
//           <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
//             <button
//               style={{
//                 background: "#FFC107",
//                 color: "#111827",
//                 border: "none",
//                 borderRadius: "12px",
//                 padding: "16px 32px",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 boxShadow: "0 10px 15px -3px rgba(255, 193, 7, 0.3)",
//                 transition: "transform 0.2s, box-shadow 0.2s",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 15px 20px -3px rgba(255, 193, 7, 0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(255, 193, 7, 0.3)";
//               }}
//             >
//               Book a Ride
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </button>

//             <button
//               style={{
//                 background: "#FFFFFF",
//                 color: "#111827",
//                 border: "1px solid #E5E7EB",
//                 borderRadius: "12px",
//                 padding: "16px 32px",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 cursor: "pointer",
//                 transition: "background 0.2s",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.background = "#F3F4F6")}
//               onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
//             >
//               Explore Services
//             </button>
//           </div>
//         </div>

//         {/* Right Column: Interactive Story Animation */}
//         <div
//           style={{
//             flex: "1 1 500px",
//             position: "relative",
//             height: "500px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             perspective: "1000px",
//           }}
//         >
//           {/* Decorative Background Elements */}
//           <div
//             style={{
//               position: "absolute",
//               width: "400px",
//               height: "400px",
//               background: "linear-gradient(135deg, #E0F2FE 0%, #EFF6FF 100%)",
//               borderRadius: "50%",
//               zIndex: 0,
//             }}
//           />
          
//           {/* Buildings Backdrop */}
//           <svg
//             style={{ position: "absolute", bottom: "120px", zIndex: 1, opacity: 0.6 }}
//             width="400"
//             height="200"
//             viewBox="0 0 400 200"
//             fill="none"
//           >
//             <rect x="50" y="80" width="60" height="120" rx="4" fill="#D1D5DB" />
//             <rect x="130" y="40" width="80" height="160" rx="4" fill="#9CA3AF" />
//             <rect x="230" y="100" width="50" height="100" rx="4" fill="#D1D5DB" />
//             <rect x="300" y="60" width="70" height="140" rx="4" fill="#E5E7EB" />
//           </svg>

//           {/* Road */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "80px",
//               width: "120%",
//               height: "80px",
//               background: "#4B5563",
//               borderRadius: "50% / 100% 100% 0 0",
//               zIndex: 1,
//               transform: "rotateX(60deg)",
//               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//              {/* Road Line */}
//              <div style={{
//                  position: "absolute", top: "50%", left: "0", width: "100%", height: "4px",
//                  borderTop: "4px dashed #FFC107", opacity: 0.8
//              }} />
//           </div>

//           {/* Scene 1: Booking via Phone */}
//           <div
//             style={{
//               position: "absolute",
//               zIndex: 3,
//               transition: "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//               transform: scene === "booking" ? "scale(1) translateY(0)" : "scale(0) translateY(100px)",
//               opacity: scene === "booking" ? 1 : 0,
//             }}
//           >
//             <div
//               style={{
//                 width: "160px",
//                 height: "320px",
//                 background: "#FFFFFF",
//                 borderRadius: "24px",
//                 border: "8px solid #111827",
//                 boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 padding: "20px 16px",
//                 position: "relative",
//               }}
//             >
//               <div style={{ width: "40px", height: "4px", background: "#E5E7EB", borderRadius: "4px", marginBottom: "30px" }} />
//               {/* Map UI fake */}
//               <div style={{ width: "100%", height: "120px", background: "#E0F2FE", borderRadius: "12px", marginBottom: "16px", position: "relative" }}>
//                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "24px" }}>📍</div>
//               </div>
//               {/* Confirm Button animates */}
//               <div className="phone-btn" style={{ width: "100%", padding: "12px 0", background: "#FFC107", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "14px", color: "#111827", marginTop: "auto" }}>
//                 Confirm Ride
//               </div>
//               {/* Tapping finger indicator */}
//               <div className="tap-indicator" style={{ position: "absolute", bottom: "35px", right: "30px", width: "20px", height: "20px", background: "rgba(17, 24, 39, 0.2)", borderRadius: "50%" }} />
//             </div>
//           </div>

//           {/* Scene 2, 3, 4: Car Arrives, Boards, Departs */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "100px",
//               zIndex: 4,
//               transition: "transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
//               transform: 
//                 scene === "booking" ? "translateX(-400px)" : 
//                 (scene === "arriving" || scene === "boarding") ? "translateX(0px)" : 
//                 "translateX(400px)",
//             }}
//           >
//             {/* The Cab */}
//             <svg width="240" height="100" viewBox="0 0 240 100" fill="none" style={{ filter: "drop-shadow(0 10px 8px rgba(0,0,0,0.1))" }}>
//               {/* Car Body shadow */}
//               <ellipse cx="120" cy="90" rx="100" ry="10" fill="rgba(0,0,0,0.2)" />
//               {/* Top part / Windows */}
//               <path d="M60 50 L80 20 L160 20 L190 50 Z" fill="#E5E7EB" />
//               <path d="M65 50 L83 25 L120 25 L120 50 Z" fill="#9CA3AF" />
//               <path d="M125 50 L125 25 L157 25 L182 50 Z" fill="#9CA3AF" />
//               {/* Taxi Sign */}
//               <rect x="105" y="10" width="30" height="10" rx="3" fill="#FFC107" />
//               <text x="110" y="18" fontSize="6" fontWeight="bold" fill="#111827">TAXI</text>
//               {/* Main Body */}
//               <path d="M30 50 L210 50 Q230 50 230 65 L230 75 Q230 85 210 85 L30 85 Q10 85 10 75 L10 65 Q10 50 30 50 Z" fill="#FFFFFF" />
//               {/* Yellow branding stripe like reference */}
//               <path d="M120 50 L230 50 Q230 65 230 75 Q230 85 210 85 L150 85 Z" fill="#FFC107" />
//               {/* Wheels */}
//               <circle cx="60" cy="85" r="14" fill="#111827" />
//               <circle cx="60" cy="85" r="6" fill="#D1D5DB" />
//               <circle cx="180" cy="85" r="14" fill="#111827" />
//               <circle cx="180" cy="85" r="6" fill="#D1D5DB" />
//             </svg>

//             {/* Passenger Boarding Animation */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "10px",
//                 left: "-40px",
//                 fontSize: "40px",
//                 transition: "all 0.5s ease",
//                 opacity: scene === "boarding" ? 1 : 0,
//                 transform: scene === "boarding" ? "translateX(60px) scale(0)" : "translateX(0px) scale(1)",
//                 transitionDelay: scene === "boarding" ? "0.5s" : "0s",
//               }}
//             >
//               🧍
//             </div>
//           </div>
          
//           {/* Status Text under animation */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "20px",
//               background: "#111827",
//               color: "#FFF",
//               padding: "8px 16px",
//               borderRadius: "20px",
//               fontSize: "14px",
//               fontWeight: 500,
//               zIndex: 5,
//               opacity: 0.9,
//               transition: "opacity 0.3s",
//             }}
//           >
//             {scene === "booking" && "Searching for a driver..."}
//             {scene === "arriving" && "Your ride is arriving"}
//             {scene === "boarding" && "Driver has arrived"}
//             {scene === "departing" && "On route to destination"}
//           </div>

//         </div>
//       </div>

//       <style>{`
//         @keyframes pulseTap {
//           0% { transform: scale(1); opacity: 0; }
//           50% { transform: scale(1.5); opacity: 1; }
//           100% { transform: scale(2); opacity: 0; }
//         }
//         .tap-indicator {
//           animation: pulseTap 1.5s infinite;
//         }
//         @keyframes buttonPress {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(0.95); background: #EAB308; }
//         }
//         .phone-btn {
//           animation: buttonPress 1.5s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }









// "use client";

// import React, { useState, useEffect } from "react";

// export default function CabTalePremiumHero() {
//   const [scene, setScene] = useState("booking");
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const runAnimation = () => {
//       setScene("booking");
//       setTimeout(() => setScene("arriving"), 3000);
//       setTimeout(() => setScene("boarding"), 5500);
//       setTimeout(() => setScene("departing"), 7500);
//     };

//     runAnimation();
//     const interval = setInterval(runAnimation, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   // Wheel rotation animation
//   useEffect(() => {
//     if (scene !== "booking") {
//       const timer = setInterval(() => setRotation((prev) => (prev + 12) % 360), 30);
//       return () => clearInterval(timer);
//     }
//   }, [scene]);

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #F8FAFC 0%, #E8F4FD 50%, #F0F9FF 100%)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "60px 5%",
//         fontFamily: "'Poppins', 'Inter', sans-serif",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* Animated Background Gradient Orbs */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-100px",
//           right: "-100px",
//           width: "400px",
//           height: "400px",
//           background: "radial-gradient(circle, rgba(0, 168, 232, 0.15) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: "float 8s ease-in-out infinite",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-150px",
//           left: "-150px",
//           width: "500px",
//           height: "500px",
//           background: "radial-gradient(circle, rgba(11, 91, 163, 0.12) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: "float 10s ease-in-out infinite reverse",
//         }}
//       />

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "80px",
//           maxWidth: "1400px",
//           width: "100%",
//           alignItems: "center",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {/* LEFT COLUMN: Typography & CTAs */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          
//           {/* Premium Trust Badge */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "10px",
//               background: "linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)",
//               border: "2px solid #00A8E8",
//               borderRadius: "50px",
//               padding: "12px 20px",
//               width: "fit-content",
//               boxShadow: "0 8px 20px rgba(0, 168, 232, 0.15)",
//               backdropFilter: "blur(10px)",
//             }}
//           >
//             <span style={{ fontSize: "18px" }}>✨</span>
//             <span
//               style={{
//                 background: "linear-gradient(135deg, #0B5BA3 0%, #00A8E8 100%)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontSize: "14px",
//                 fontWeight: 700,
//                 letterSpacing: "0.5px",
//               }}
//             >
//               Smart Rides • Safe Journey
//             </span>
//           </div>

//           {/* Main Headline */}
//           <div>
//             <h1
//               style={{
//                 fontSize: "clamp(42px, 7vw, 72px)",
//                 fontWeight: 800,
//                 lineHeight: 1.15,
//                 color: "#0B2847",
//                 margin: 0,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Your Ride,
//               <br />
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #0B5BA3 0%, #00A8E8 50%, #FFD700 100%)",
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Your Freedom
//               </span>
//             </h1>
//           </div>

//           {/* Subheading */}
//           <p
//             style={{
//               fontSize: "18px",
//               color: "#475569",
//               lineHeight: 1.7,
//               maxWidth: "520px",
//               margin: 0,
//               fontWeight: 500,
//             }}
//           >
//             CabTale brings premium ride-sharing to your doorstep. Book instantly, track in real-time, and experience the journey with confidence.
//           </p>

//           {/* Stats Row */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "24px",
//               marginTop: "16px",
//             }}
//           >
//             {[
//               { number: "120K+", label: "Happy Riders" },
//               { number: "4.9★", label: "Rating" },
//               { number: "2min", label: "Avg Pickup" },
//             ].map((stat, idx) => (
//               <div key={idx} style={{ textAlign: "center" }}>
//                 <div
//                   style={{
//                     fontSize: "28px",
//                     fontWeight: 800,
//                     background: "linear-gradient(135deg, #0B5BA3 0%, #00A8E8 100%)",
//                     backgroundClip: "text",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {stat.number}
//                 </div>
//                 <div style={{ fontSize: "13px", color: "#78909C", fontWeight: 600 }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
//             <button
//               style={{
//                 background: "linear-gradient(135deg, #FFD700 0%, #FFC107 100%)",
//                 color: "#0B2847",
//                 border: "none",
//                 borderRadius: "16px",
//                 padding: "18px 40px",
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 boxShadow: "0 12px 24px rgba(255, 215, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.1)",
//                 transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 20px 32px rgba(255, 215, 0, 0.4), 0 0 0 1px rgba(255, 215, 0, 0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 12px 24px rgba(255, 215, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.1)";
//               }}
//             >
//               <span>Book Your Ride</span>
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </button>

//             <button
//               style={{
//                 background: "#FFFFFF",
//                 color: "#0B5BA3",
//                 border: "2px solid #00A8E8",
//                 borderRadius: "16px",
//                 padding: "16px 36px",
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#F0F9FF";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "#FFFFFF";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Premium Animation */}
//         <div
//           style={{
//             position: "relative",
//             height: "580px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             perspective: "1200px",
//           }}
//         >
//           {/* Premium Gradient Background Card */}
//           <div
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               background: "linear-gradient(135deg, rgba(0, 168, 232, 0.08) 0%, rgba(11, 91, 163, 0.08) 100%)",
//               borderRadius: "32px",
//               border: "1px solid rgba(0, 168, 232, 0.2)",
//               backdropFilter: "blur(10px)",
//               zIndex: 1,
//             }}
//           />

//           {/* Cityscape Silhouette */}
//           <svg
//             style={{
//               position: "absolute",
//               bottom: "180px",
//               zIndex: 2,
//               opacity: 0.8,
//               filter: "drop-shadow(0 10px 20px rgba(11, 91, 163, 0.1))",
//             }}
//             width="480"
//             height="220"
//             viewBox="0 0 480 220"
//             fill="none"
//           >
//             <rect x="40" y="100" width="55" height="120" rx="4" fill="#0B5BA3" opacity="0.4" />
//             <rect x="110" y="50" width="75" height="170" rx="4" fill="#00A8E8" opacity="0.3" />
//             <rect x="200" y="110" width="50" height="110" rx="4" fill="#0B5BA3" opacity="0.35" />
//             <rect x="270" y="70" width="65" height="150" rx="4" fill="#00A8E8" opacity="0.3" />
//             <rect x="360" y="90" width="70" height="130" rx="4" fill="#0B5BA3" opacity="0.4" />
//           </svg>

//           {/* Premium Road */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "140px",
//               width: "115%",
//               height: "90px",
//               background: "linear-gradient(180deg, #1E3A5F 0%, #0B2847 100%)",
//               borderRadius: "50% / 100% 100% 0 0",
//               zIndex: 3,
//               boxShadow: "0 30px 40px rgba(11, 91, 163, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)",
//               transform: "rotateX(65deg)",
//             }}
//           >
//             {/* Road Markings */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "0",
//                 width: "100%",
//                 height: "2px",
//                 borderTop: "2px dashed #FFD700",
//                 opacity: 0.7,
//               }}
//             />
//           </div>

//           {/* SCENE 1: Phone Booking */}
//           <div
//             style={{
//               position: "absolute",
//               zIndex: 5,
//               transition: "all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//               transform:
//                 scene === "booking"
//                   ? "scale(1) translateY(0) rotateZ(0)"
//                   : "scale(0.6) translateY(80px) rotateZ(-15deg)",
//               opacity: scene === "booking" ? 1 : 0.4,
//             }}
//           >
//             {/* Premium Phone */}
//             <div
//               style={{
//                 width: "180px",
//                 height: "360px",
//                 background: "linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)",
//                 borderRadius: "36px",
//                 border: "12px solid #0B2847",
//                 boxShadow:
//                   "0 30px 60px rgba(11, 91, 163, 0.25), 0 0 0 1px rgba(0, 168, 232, 0.1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "16px",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Notch */}
//               <div
//                 style={{
//                   width: "110px",
//                   height: "26px",
//                   background: "#0B2847",
//                   borderRadius: "0 0 24px 24px",
//                   margin: "0 auto 16px",
//                   position: "relative",
//                   zIndex: 10,
//                 }}
//               />

//               {/* Screen Content */}
//               <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
//                 {/* Map Area */}
//                 <div
//                   style={{
//                     flex: 1,
//                     background: "linear-gradient(135deg, #00A8E8 0%, #0B5BA3 100%)",
//                     borderRadius: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     position: "relative",
//                     overflow: "hidden",
//                     boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   <div style={{ fontSize: "32px", animation: "pulse 2s ease-in-out infinite" }}>
//                     📍
//                   </div>
//                   {/* Pulse Ring */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       width: "60px",
//                       height: "60px",
//                       border: "2px solid #FFD700",
//                       borderRadius: "50%",
//                       animation: "expandPulse 2s ease-out infinite",
//                     }}
//                   />
//                 </div>

//                 {/* Ride Details Card */}
//                 <div
//                   style={{
//                     background: "#F0F9FF",
//                     padding: "12px",
//                     borderRadius: "14px",
//                     border: "1px solid rgba(0, 168, 232, 0.3)",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "11px",
//                       color: "#475569",
//                       fontWeight: 600,
//                       marginBottom: "4px",
//                     }}
//                   >
//                     2 MINS AWAY
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "12px",
//                       color: "#0B5BA3",
//                       fontWeight: 700,
//                     }}
//                   >
//                     CabTale Premium
//                   </div>
//                 </div>

//                 {/* Confirm Button */}
//                 <button
//                   className="phone-btn"
//                   style={{
//                     width: "100%",
//                     padding: "14px",
//                     background: "linear-gradient(135deg, #FFD700 0%, #FFC107 100%)",
//                     border: "none",
//                     borderRadius: "12px",
//                     fontWeight: 700,
//                     fontSize: "13px",
//                     color: "#0B2847",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   Confirm Ride
//                 </button>
//               </div>

//               {/* Tap Indicator */}
//               <div
//                 className="tap-pulse"
//                 style={{
//                   position: "absolute",
//                   bottom: "50px",
//                   right: "35px",
//                   width: "24px",
//                   height: "24px",
//                   background: "rgba(255, 215, 0, 0.3)",
//                   borderRadius: "50%",
//                   animation: "tappulse 1.5s ease-out infinite",
//                 }}
//               />
//             </div>
//           </div>

//           {/* GIRL CHARACTER */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "150px",
//               left: "15%",
//               zIndex: 6,
//               opacity: scene === "booking" ? 1 : scene === "arriving" ? 0.8 : 0,
//               transition: "opacity 0.5s ease, transform 0.6s ease",
//               transform: scene === "boarding" ? "translateX(100px) scale(0.8)" : "translateX(0)",
//             }}
//           >
//             {/* Girl SVG - Premium Style */}
//             <svg width="160" height="240" viewBox="0 0 160 240" fill="none">
//               {/* Hair */}
//               <ellipse cx="80" cy="45" rx="35" ry="40" fill="#3D2817" />
//               {/* Head */}
//               <circle cx="80" cy="65" r="32" fill="#F4C2A0" />
//               {/* Eyes */}
//               <circle cx="70" cy="60" r="4" fill="#000" />
//               <circle cx="90" cy="60" r="4" fill="#000" />
//               {/* Smile */}
//               <path d="M 70 75 Q 80 82 90 75" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
//               {/* Body */}
//               <rect x="60" y="100" width="40" height="60" rx="10" fill="#00A8E8" />
//               {/* Arms */}
//               <rect x="20" y="110" width="40" height="12" rx="6" fill="#F4C2A0" />
//               <rect x="100" y="110" width="40" height="12" rx="6" fill="#F4C2A0" />
//               {/* Hand holding phone */}
//               <circle cx="142" cy="115" r="8" fill="#F4C2A0" />
//               {/* Legs */}
//               <rect x="68" y="162" width="10" height="50" rx="5" fill="#1A1A1A" />
//               <rect x="82" y="162" width="10" height="50" rx="5" fill="#1A1A1A" />
//               {/* Shoes */}
//               <ellipse cx="73" cy="215" rx="12" ry="8" fill="#1A1A1A" />
//               <ellipse cx="87" cy="215" rx="12" ry="8" fill="#1A1A1A" />
//               {/* Shine Effect on Hair */}
//               <ellipse cx="65" cy="30" rx="12" ry="18" fill="#FFFFFF" opacity="0.3" />
//             </svg>
//           </div>

//           {/* PREMIUM CAR ANIMATION */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "140px",
//               zIndex: 7,
//               transition: "transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
//               transform:
//                 scene === "booking"
//                   ? "translateX(-500px) scale(0.8)"
//                   : scene === "arriving" || scene === "boarding"
//                   ? "translateX(0px) scale(1)"
//                   : "translateX(500px) scale(0.8)",
//             }}
//           >
//             {/* Car Container with 3D Effect */}
//             <div style={{ position: "relative", width: "280px", height: "140px" }}>
//               {/* Speed Lines - appears when moving */}
//               {scene !== "booking" && (
//                 <>
//                   <div
//                     style={{
//                       position: "absolute",
//                       left: "-100px",
//                       top: "30%",
//                       width: "80px",
//                       height: "4px",
//                       background: "linear-gradient(90deg, rgba(255, 215, 0, 0.6) 0%, transparent 100%)",
//                       borderRadius: "2px",
//                       animation: "speedLine 0.8s ease-in infinite",
//                     }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       left: "-90px",
//                       top: "50%",
//                       width: "70px",
//                       height: "3px",
//                       background: "linear-gradient(90deg, rgba(0, 168, 232, 0.5) 0%, transparent 100%)",
//                       borderRadius: "2px",
//                       animation: "speedLine 1s ease-in 0.2s infinite",
//                     }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       left: "-95px",
//                       top: "70%",
//                       width: "75px",
//                       height: "3px",
//                       background: "linear-gradient(90deg, rgba(255, 215, 0, 0.4) 0%, transparent 100%)",
//                       borderRadius: "2px",
//                       animation: "speedLine 0.9s ease-in 0.4s infinite",
//                     }}
//                   />
//                 </>
//               )}

//               {/* Main Car SVG */}
//               <svg
//                 width="280"
//                 height="140"
//                 viewBox="0 0 280 140"
//                 fill="none"
//                 style={{
//                   filter: "drop-shadow(0 20px 40px rgba(11, 91, 163, 0.2))",
//                   position: "relative",
//                   zIndex: 10,
//                 }}
//               >
//                 {/* Car Shadow */}
//                 <ellipse cx="140" cy="125" rx="120" ry="12" fill="rgba(11, 91, 163, 0.15)" />

//                 {/* Car Body - Premium Blue */}
//                 <path
//                   d="M 50 90 L 80 30 L 200 30 L 230 90 Q 230 110 210 115 L 70 115 Q 50 110 50 90 Z"
//                   fill="#00A8E8"
//                   stroke="#0B5BA3"
//                   strokeWidth="2"
//                 />

//                 {/* Car Top/Cabin */}
//                 <path d="M 85 30 L 100 50 L 180 50 L 195 30 Z" fill="#0076A8" />

//                 {/* Windows - Gradient for premium look */}
//                 <rect x="88" y="32" width="50" height="18" rx="2" fill="#4FC3F7" opacity="0.8" />
//                 <rect x="142" y="32" width="54" height="18" rx="2" fill="#4FC3F7" opacity="0.8" />

//                 {/* Taxi Sign */}
//                 <rect x="120" y="18" width="40" height="12" rx="2" fill="#FFD700" stroke="#FFC107" strokeWidth="1.5" />
//                 <text x="140" y="26" fontSize="8" fontWeight="bold" fill="#0B2847" textAnchor="middle">
//                   CABTALE
//                 </text>

//                 {/* Door Line */}
//                 <line x1="140" y1="35" x2="140" y2="115" stroke="#0B5BA3" strokeWidth="1.5" opacity="0.6" />

//                 {/* Headlights */}
//                 <circle cx="60" cy="85" r="6" fill="#FFD700" opacity="0.9" />
//                 <circle cx="70" cy="85" r="6" fill="#FFD700" opacity="0.9" />

//                 {/* Front Bumper Accent */}
//                 <rect x="45" y="95" width="45" height="8" fill="#FFD700" opacity="0.6" />

//                 {/* Taillights */}
//                 <circle cx="220" cy="88" r="5" fill="#FF4444" opacity="0.8" />
//                 <circle cx="230" cy="88" r="5" fill="#FF4444" opacity="0.8" />

//                 {/* LEFT WHEEL with rotation */}
//                 <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "70px 120px" }}>
//                   <circle cx="70" cy="120" r="16" fill="#1A1A1A" />
//                   <circle cx="70" cy="120" r="13" fill="#333" />
//                   {[0, 90, 180, 270].map((angle) => (
//                     <line
//                       key={`spoke-l-${angle}`}
//                       x1="70"
//                       y1="120"
//                       x2={70 + 11 * Math.cos((angle * Math.PI) / 180)}
//                       y2={120 + 11 * Math.sin((angle * Math.PI) / 180)}
//                       stroke="#FFD700"
//                       strokeWidth="2"
//                     />
//                   ))}
//                   <circle cx="70" cy="120" r="6" fill="#FFD700" />
//                 </g>

//                 {/* RIGHT WHEEL with rotation */}
//                 <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "210px 120px" }}>
//                   <circle cx="210" cy="120" r="16" fill="#1A1A1A" />
//                   <circle cx="210" cy="120" r="13" fill="#333" />
//                   {[0, 90, 180, 270].map((angle) => (
//                     <line
//                       key={`spoke-r-${angle}`}
//                       x1="210"
//                       y1="120"
//                       x2={210 + 11 * Math.cos((angle * Math.PI) / 180)}
//                       y2={120 + 11 * Math.sin((angle * Math.PI) / 180)}
//                       stroke="#FFD700"
//                       strokeWidth="2"
//                     />
//                   ))}
//                   <circle cx="210" cy="120" r="6" fill="#FFD700" />
//                 </g>
//               </svg>

//               {/* Arrival Ring Effect */}
//               {scene === "arriving" && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "50%",
//                     border: "3px solid #FFD700",
//                     transform: "translate(-50%, -50%)",
//                     animation: "arrivalRing 0.6s ease-out",
//                     opacity: 0,
//                   }}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Live Status Badge */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "50px",
//               background: "linear-gradient(135deg, #0B5BA3 0%, #00A8E8 100%)",
//               color: "#FFF",
//               padding: "14px 24px",
//               borderRadius: "24px",
//               fontSize: "15px",
//               fontWeight: 700,
//               zIndex: 8,
//               boxShadow: "0 12px 24px rgba(11, 91, 163, 0.2)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255, 255, 255, 0.1)",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               animation: "slideUp 0.6s ease-out",
//             }}
//           >
//             <span
//               style={{
//                 width: "8px",
//                 height: "8px",
//                 background: "#FFD700",
//                 borderRadius: "50%",
//                 animation: "blink 1.5s ease-in-out infinite",
//               }}
//             />
//             {scene === "booking" && "Searching for your driver..."}
//             {scene === "arriving" && "🚗 Your ride is arriving"}
//             {scene === "boarding" && "✓ Driver arrived!"}
//             {scene === "departing" && "On route to destination"}
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(30px); }
//         }
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }
//         @keyframes expandPulse {
//           0% { 
//             width: 20px; 
//             height: 20px; 
//             opacity: 1; 
//             transform: translate(-50%, -50%);
//           }
//           100% { 
//             width: 100px; 
//             height: 100px; 
//             opacity: 0; 
//             transform: translate(-50%, -50%);
//           }
//         }
//         @keyframes tappulse {
//           0% { 
//             transform: scale(0.8); 
//             opacity: 1; 
//           }
//           100% { 
//             transform: scale(1.8); 
//             opacity: 0; 
//           }
//         }
//         @keyframes speedLine {
//           0% {
//             left: -100px;
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             left: 0;
//             opacity: 0;
//           }
//         }
//         @keyframes arrivalRing {
//           0% {
//             transform: translate(-50%, -50%) scale(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1.5);
//             opacity: 0;
//           }
//         }
//         @keyframes slideUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.4; }
//         }
//         .phone-btn {
//           animation: buttonPulse 2s ease-in-out infinite;
//         }
//         @keyframes buttonPulse {
//           0%, 100% { 
//             transform: scale(1);
//             box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
//           }
//           50% { 
//             transform: scale(1.05);
//             box-shadow: 0 6px 16px rgba(255, 215, 0, 0.35);
//           }
//         }
//         @media (max-width: 1024px) {
//           [style*="gridTemplateColumns: 1fr 1fr"] {
//             grid-template-columns: 1fr !important;
//             gap: 40px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



















// "use client";

// import React, { useState, useEffect } from "react";

// export default function CabTalePremiumHero() {
//   const [scene, setScene] = useState("booking");
//   const [rotation, setRotation] = useState(0);

//   // Main Story Sequence Animation
//   useEffect(() => {
//     const runAnimation = () => {
//       setScene("booking");
//       setTimeout(() => setScene("arriving"), 3000);
//       setTimeout(() => setScene("boarding"), 5500);
//       setTimeout(() => setScene("departing"), 7500);
//     };

//     runAnimation();
//     const interval = setInterval(runAnimation, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   // Wheel rotation animation
//   useEffect(() => {
//     if (scene !== "booking") {
//       const timer = setInterval(() => setRotation((prev) => (prev + 12) % 360), 30);
//       return () => clearInterval(timer);
//     }
//   }, [scene]);

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         // Premium Indian Heritage Background with Frosted Overlay
//         background: `
//           linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(232, 244, 253, 0.85) 50%, rgba(240, 249, 255, 0.95) 100%),
//           url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat fixed
//         `,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "80px 5%",
//         fontFamily: "'Poppins', 'Inter', sans-serif",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* Animated Background Gradient Orbs for modern feel */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-100px",
//           right: "-100px",
//           width: "500px",
//           height: "500px",
//           background: "radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: "float 8s ease-in-out infinite",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-150px",
//           left: "-150px",
//           width: "600px",
//           height: "600px",
//           background: "radial-gradient(circle, rgba(11, 91, 163, 0.12) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: "float 10s ease-in-out infinite reverse",
//         }}
//       />

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "80px",
//           maxWidth: "1400px",
//           width: "100%",
//           alignItems: "center",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         {/* LEFT COLUMN: Typography & CTAs */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          
//           {/* Premium Trust Badge */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "10px",
//               background: "rgba(255, 255, 255, 0.7)",
//               border: "1px solid rgba(255, 193, 7, 0.5)",
//               borderRadius: "50px",
//               padding: "10px 20px",
//               width: "fit-content",
//               boxShadow: "0 8px 20px rgba(255, 193, 7, 0.1)",
//               backdropFilter: "blur(12px)",
//             }}
//           >
//             <span style={{ fontSize: "16px" }}>🛕</span>
//             <span
//               style={{
//                 color: "#0B5BA3",
//                 fontSize: "13px",
//                 fontWeight: 700,
//                 letterSpacing: "0.5px",
//                 textTransform: "uppercase",
//               }}
//             >
//               India's Premier Ride Experience
//             </span>
//           </div>

//           {/* Main Headline */}
//           <div>
//             <h1
//               style={{
//                 fontSize: "clamp(46px, 7vw, 76px)",
//                 fontWeight: 800,
//                 lineHeight: 1.1,
//                 color: "#0B2847",
//                 margin: 0,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Your Ride,
//               <br />
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #FFC107 0%, #D97706 100%)",
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Your Story
//               </span>
//             </h1>
//           </div>

//           {/* Subheading */}
//           <p
//             style={{
//               fontSize: "18px",
//               color: "#334155",
//               lineHeight: 1.7,
//               maxWidth: "520px",
//               margin: 0,
//               fontWeight: 500,
//             }}
//           >
//             CabTale brings premium ride-sharing to your doorstep. From local commutes to intercity heritage tours, travel with complete peace of mind.
//           </p>

//           {/* Stats Row */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "24px",
//               marginTop: "8px",
//               padding: "24px 0",
//               borderTop: "1px solid rgba(0,0,0,0.05)",
//               borderBottom: "1px solid rgba(0,0,0,0.05)",
//             }}
//           >
//             {[
//               { number: "200+", label: "Cities Covered" },
//               { number: "4.9★", label: "Avg Rating" },
//               { number: "100% ", label: "Verified Drivers" },
//             ].map((stat, idx) => (
//               <div key={idx}>
//                 <div
//                   style={{
//                     fontSize: "26px",
//                     fontWeight: 800,
//                     color: "#0B5BA3",
//                     letterSpacing: "-0.02em",
//                   }}
//                 >
//                   {stat.number}
//                 </div>
//                 <div style={{ fontSize: "13px", color: "#64748B", fontWeight: 600 }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
//             <button
//               style={{
//                 background: "linear-gradient(135deg, #FFD700 0%, #FFC107 100%)",
//                 color: "#0B2847",
//                 border: "none",
//                 borderRadius: "16px",
//                 padding: "18px 40px",
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 boxShadow: "0 12px 24px rgba(255, 215, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.1)",
//                 transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow = "0 20px 32px rgba(255, 215, 0, 0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 215, 0, 0.3)";
//               }}
//             >
//               <span>Book a Ride</span>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </button>

//             <button
//               style={{
//                 background: "rgba(255, 255, 255, 0.8)",
//                 color: "#0B5BA3",
//                 border: "2px solid #00A8E8",
//                 borderRadius: "16px",
//                 padding: "16px 36px",
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 backdropFilter: "blur(8px)",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#FFFFFF";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               Explore Services
//             </button>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Premium Animation Stage */}
//         <div
//           style={{
//             position: "relative",
//             height: "600px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             perspective: "1200px",
//           }}
//         >
//           {/* Glassmorphism Backdrop Stage */}
//           <div
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)",
//               borderRadius: "40px",
//               border: "1px solid rgba(255, 255, 255, 0.5)",
//               backdropFilter: "blur(16px)",
//               WebkitBackdropFilter: "blur(16px)",
//               boxShadow: "0 30px 60px rgba(0, 0, 0, 0.05)",
//               zIndex: 1,
//             }}
//           />

//           {/* Indian Heritage Skyline Silhouette */}
//           <svg
//             style={{
//               position: "absolute",
//               bottom: "160px",
//               zIndex: 2,
//               opacity: 0.85,
//               filter: "drop-shadow(0 10px 15px rgba(11, 91, 163, 0.15))",
//             }}
//             width="480"
//             height="220"
//             viewBox="0 0 480 220"
//             fill="none"
//           >
//             {/* Taj/Palace Style Onion Dome */}
//             <path d="M 190 140 C 190 90, 230 70, 240 30 C 250 70, 290 90, 290 140 L 290 220 L 190 220 Z" fill="#00A8E8" opacity="0.25" />
//             <path d="M 235 30 L 245 30 L 240 10 Z" fill="#00A8E8" opacity="0.4" />
            
//             {/* Minarets / Pillars */}
//             <path d="M 150 220 L 150 90 A 10 10 0 0 1 170 90 L 170 220 Z" fill="#0B5BA3" opacity="0.3" />
//             <path d="M 155 90 L 165 90 L 160 70 Z" fill="#0B5BA3" opacity="0.5" />
            
//             <path d="M 310 220 L 310 90 A 10 10 0 0 1 330 90 L 330 220 Z" fill="#0B5BA3" opacity="0.3" />
//             <path d="M 315 90 L 325 90 L 320 70 Z" fill="#0B5BA3" opacity="0.5" />

//             {/* Rajasthani Style Arched Palaces */}
//             <path d="M 50 220 L 50 140 A 30 30 0 0 1 110 140 L 110 220 Z" fill="#00A8E8" opacity="0.35" />
//             <rect x="65" y="150" width="30" height="70" rx="15" fill="#F8FAFC" opacity="0.4" />

//             <path d="M 370 220 L 370 120 A 40 40 0 0 1 450 120 L 450 220 Z" fill="#00A8E8" opacity="0.35" />
//             <rect x="390" y="140" width="40" height="80" rx="20" fill="#F8FAFC" opacity="0.4" />
//           </svg>

//           {/* Premium Road */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "120px",
//               width: "115%",
//               height: "90px",
//               background: "linear-gradient(180deg, #1E3A5F 0%, #0B2847 100%)",
//               borderRadius: "50% / 100% 100% 0 0",
//               zIndex: 3,
//               boxShadow: "0 30px 40px rgba(11, 91, 163, 0.2)",
//               transform: "rotateX(65deg)",
//             }}
//           >
//             {/* Glowing Road Markings */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "0",
//                 width: "100%",
//                 height: "3px",
//                 background: "repeating-linear-gradient(90deg, #FFD700 0, #FFD700 30px, transparent 30px, transparent 60px)",
//                 opacity: 0.8,
//                 filter: "drop-shadow(0 0 4px #FFD700)",
//               }}
//             />
//           </div>

//           {/* SCENE 1: Phone Booking */}
//           <div
//             style={{
//               position: "absolute",
//               zIndex: 5,
//               transition: "all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
//               transform: scene === "booking" ? "scale(1) translateY(0) rotateZ(0)" : "scale(0.6) translateY(80px) rotateZ(-15deg)",
//               opacity: scene === "booking" ? 1 : 0.4,
//             }}
//           >
//             {/* Premium App Mockup */}
//             <div
//               style={{
//                 width: "190px",
//                 height: "380px",
//                 background: "#FFFFFF",
//                 borderRadius: "36px",
//                 border: "10px solid #0B2847",
//                 boxShadow: "0 30px 60px rgba(11, 91, 163, 0.25), inset 0 4px 10px rgba(0,0,0,0.05)",
//                 display: "flex",
//                 flexDirection: "column",
//                 padding: "16px",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Dynamic Notch */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "70px",
//                   height: "22px",
//                   background: "#0B2847",
//                   borderRadius: "100px",
//                   zIndex: 10,
//                 }}
//               />

//               {/* Map App Area */}
//               <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
//                 <div
//                   style={{
//                     flex: 1,
//                     background: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
//                     borderRadius: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div style={{ fontSize: "32px", animation: "pulse 2s ease-in-out infinite", zIndex: 2 }}>📍</div>
//                   {/* Radar Pulse */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       width: "60px",
//                       height: "60px",
//                       border: "2px solid #00A8E8",
//                       borderRadius: "50%",
//                       animation: "expandPulse 2s ease-out infinite",
//                       zIndex: 1,
//                     }}
//                   />
//                 </div>

//                 {/* Ride Context Card */}
//                 <div style={{ background: "#F8FAFC", padding: "12px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
//                   <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700, marginBottom: "4px" }}>
//                     DROPOFF
//                   </div>
//                   <div style={{ fontSize: "13px", color: "#0F172A", fontWeight: 800 }}>
//                     Indore Central
//                   </div>
//                 </div>

//                 {/* Confirm Action */}
//                 <button
//                   className="phone-btn"
//                   style={{
//                     width: "100%",
//                     padding: "14px",
//                     background: "#FFC107",
//                     border: "none",
//                     borderRadius: "12px",
//                     fontWeight: 800,
//                     fontSize: "14px",
//                     color: "#0B2847",
//                   }}
//                 >
//                   Confirm Ride
//                 </button>
//               </div>

//               {/* Tapping Finger Animation */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "45px",
//                   right: "40px",
//                   width: "28px",
//                   height: "28px",
//                   background: "rgba(0, 168, 232, 0.4)",
//                   borderRadius: "50%",
//                   animation: "tappulse 1.5s ease-out infinite",
//                 }}
//               />
//             </div>
//           </div>

//           {/* SCENE 2 & 3: GIRL CHARACTER */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "130px",
//               left: "15%",
//               zIndex: 6,
//               opacity: scene === "booking" ? 1 : scene === "arriving" ? 0.8 : 0,
//               transition: "opacity 0.5s ease, transform 0.6s ease",
//               transform: scene === "boarding" ? "translateX(100px) scale(0.8)" : "translateX(0)",
//             }}
//           >
//             {/* Highly detailed modern vector girl */}
//             <svg width="180" height="260" viewBox="0 0 160 240" fill="none" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))" }}>
//               <ellipse cx="80" cy="45" rx="35" ry="40" fill="#1F2937" />
//               <circle cx="80" cy="65" r="32" fill="#FDBA74" />
//               <path d="M 65 60 Q 70 55 75 60" stroke="#000" strokeWidth="2" strokeLinecap="round" />
//               <path d="M 85 60 Q 90 55 95 60" stroke="#000" strokeWidth="2" strokeLinecap="round" />
//               <path d="M 72 75 Q 80 82 88 75" stroke="#EF4444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//               <rect x="60" y="100" width="40" height="60" rx="10" fill="#0284C7" />
//               <rect x="68" y="160" width="10" height="55" rx="5" fill="#0F172A" />
//               <rect x="82" y="160" width="10" height="55" rx="5" fill="#0F172A" />
//               <rect x="25" y="110" width="35" height="12" rx="6" fill="#FDBA74" />
//               <rect x="100" y="110" width="35" height="12" rx="6" fill="#FDBA74" />
//               <circle cx="140" cy="116" r="8" fill="#FDBA74" />
//               <rect x="142" y="105" width="8" height="14" rx="2" fill="#334155" />
//               <ellipse cx="73" cy="215" rx="12" ry="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
//               <ellipse cx="87" cy="215" rx="12" ry="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
//             </svg>
//           </div>

//           {/* SCENE 2, 3, 4: PREMIUM CAR ANIMATION */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "120px",
//               zIndex: 7,
//               transition: "transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
//               transform:
//                 scene === "booking"
//                   ? "translateX(-500px) scale(0.85)"
//                   : scene === "arriving" || scene === "boarding"
//                   ? "translateX(0px) scale(1)"
//                   : "translateX(500px) scale(0.85)",
//             }}
//           >
//             <div style={{ position: "relative", width: "300px", height: "150px" }}>
//               {/* Dynamic Speed Lines */}
//               {scene !== "booking" && (
//                 <>
//                   <div style={{ position: "absolute", left: "-120px", top: "40%", width: "100px", height: "4px", background: "linear-gradient(90deg, #FFC107 0%, transparent 100%)", borderRadius: "2px", animation: "speedLine 0.6s ease-in infinite" }} />
//                   <div style={{ position: "absolute", left: "-100px", top: "60%", width: "80px", height: "3px", background: "linear-gradient(90deg, #00A8E8 0%, transparent 100%)", borderRadius: "2px", animation: "speedLine 0.8s ease-in 0.2s infinite" }} />
//                 </>
//               )}

//               {/* Photorealistic Vector Car (Matching Uploaded Logo Theme) */}
//               <svg width="300" height="150" viewBox="0 0 300 150" fill="none" style={{ filter: "drop-shadow(0 25px 45px rgba(11, 91, 163, 0.25))", position: "relative", zIndex: 10 }}>
//                 {/* Underglow Shadow */}
//                 <ellipse cx="150" cy="135" rx="130" ry="12" fill="rgba(0,0,0,0.2)" />
                
//                 {/* Cab Body */}
//                 <path d="M 50 100 L 80 40 L 220 40 L 250 100 Q 250 120 230 125 L 70 125 Q 50 120 50 100 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
//                 <path d="M 85 40 L 105 65 L 195 65 L 215 40 Z" fill="#0F172A" />
                
//                 {/* Yellow Branding Stripe */}
//                 <path d="M 50 100 L 250 100 L 250 115 L 50 115 Z" fill="#FFC107" />
                
//                 {/* Windows with Glare */}
//                 <rect x="90" y="42" width="55" height="20" rx="3" fill="#38BDF8" opacity="0.9" />
//                 <rect x="155" y="42" width="55" height="20" rx="3" fill="#38BDF8" opacity="0.9" />
//                 <path d="M 95 42 L 115 62 L 105 62 L 85 42 Z" fill="#FFFFFF" opacity="0.3" />

//                 {/* CabTale Roof Sign */}
//                 <rect x="130" y="25" width="40" height="15" rx="3" fill="#FFC107" />
//                 <text x="150" y="36" fontSize="10" fontWeight="900" fill="#111827" textAnchor="middle">TAXI</text>

//                 {/* Details (Lights) */}
//                 <circle cx="65" cy="95" r="7" fill="#FEF08A" filter="drop-shadow(0 0 6px #FEF08A)" />
//                 <circle cx="235" cy="95" r="6" fill="#EF4444" />

//                 {/* Left Wheel */}
//                 <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "80px 125px" }}>
//                   <circle cx="80" cy="125" r="18" fill="#111827" />
//                   <circle cx="80" cy="125" r="12" fill="#E5E7EB" />
//                   <circle cx="80" cy="125" r="4" fill="#111827" />
//                   {[0, 45, 90, 135].map((angle) => (
//                     <line key={angle} x1="80" y1="113" x2={80 + 12 * Math.cos(angle * Math.PI / 180)} y2={125 + 12 * Math.sin(angle * Math.PI / 180)} stroke="#9CA3AF" strokeWidth="2" />
//                   ))}
//                 </g>

//                 {/* Right Wheel */}
//                 <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "220px 125px" }}>
//                   <circle cx="220" cy="125" r="18" fill="#111827" />
//                   <circle cx="220" cy="125" r="12" fill="#E5E7EB" />
//                   <circle cx="220" cy="125" r="4" fill="#111827" />
//                   {[0, 45, 90, 135].map((angle) => (
//                     <line key={angle} x1="220" y1="113" x2={220 + 12 * Math.cos(angle * Math.PI / 180)} y2={125 + 12 * Math.sin(angle * Math.PI / 180)} stroke="#9CA3AF" strokeWidth="2" />
//                   ))}
//                 </g>
//               </svg>

//               {/* Arrival Shockwave */}
//               {scene === "arriving" && (
//                 <div style={{ position: "absolute", top: "50%", left: "50%", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FFC107", transform: "translate(-50%, -50%)", animation: "arrivalRing 0.8s ease-out", opacity: 0, zIndex: 1 }} />
//               )}
//             </div>
//           </div>

//           {/* Dynamic Floating Live Status Badge */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "40px",
//               background: "#FFFFFF",
//               color: "#0B2847",
//               padding: "16px 28px",
//               borderRadius: "100px",
//               fontSize: "16px",
//               fontWeight: 800,
//               zIndex: 8,
//               boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05)",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               animation: "slideUp 0.6s ease-out",
//             }}
//           >
//             {/* Blinking Live Indicator */}
//             <span style={{ width: "10px", height: "10px", background: "#10B981", borderRadius: "50%", animation: "blink 1.5s ease-in-out infinite", boxShadow: "0 0 8px #10B981" }} />
            
//             {scene === "booking" && "Finding nearby drivers..."}
//             {scene === "arriving" && "Your CabTale is arriving!"}
//             {scene === "boarding" && "Heading to Indore Central"}
//             {scene === "departing" && "Enjoy the ride!"}
//           </div>
//         </div>
//       </div>

//       {/* Embedded CSS Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(30px) scale(1.05); }
//         }
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.15); }
//         }
//         @keyframes expandPulse {
//           0% { width: 20px; height: 20px; opacity: 1; transform: translate(-50%, -50%); }
//           100% { width: 120px; height: 120px; opacity: 0; transform: translate(-50%, -50%); }
//         }
//         @keyframes tappulse {
//           0% { transform: scale(0.5); opacity: 1; }
//           100% { transform: scale(2.5); opacity: 0; }
//         }
//         @keyframes speedLine {
//           0% { left: -150px; opacity: 0; }
//           20% { opacity: 1; }
//           80% { opacity: 1; }
//           100% { left: 50px; opacity: 0; }
//         }
//         @keyframes arrivalRing {
//           0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
//           100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
//         }
//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(30px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.3; }
//         }
//         .phone-btn {
//           animation: buttonPulse 2s ease-in-out infinite;
//         }
//         @keyframes buttonPulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.03); box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4); }
//         }
//         @media (max-width: 1024px) {
//           [style*="gridTemplateColumns: 1fr 1fr"] {
//             grid-template-columns: 1fr !important;
//             gap: 60px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }




















"use client";

import React, { useState, useEffect } from "react";

// --- 7 Premium Indian Heritage SVG Icons ---
const MONUMENTS = [
  {
    name: "Taj Mahal",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M50 20 C50 20 65 40 65 55 C65 70 35 70 35 55 C35 40 50 20 50 20 Z" fill="url(#goldGrad)" />
        <rect x="25" y="55" width="50" height="25" fill="#0B5BA3" />
        <path d="M40 80 Q50 60 60 80" fill="#F8FAFC" />
        <rect x="15" y="30" width="6" height="50" rx="3" fill="#00A8E8" />
        <rect x="79" y="30" width="6" height="50" rx="3" fill="#00A8E8" />
      </svg>
    ),
  },
  {
    name: "India Gate",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="20" y="30" width="60" height="50" fill="#0B5BA3" />
        <path d="M35 80 L35 50 A15 15 0 0 1 65 50 L65 80" fill="#F8FAFC" />
        <rect x="30" y="20" width="40" height="10" fill="url(#goldGrad)" />
        <rect x="40" y="10" width="20" height="10" fill="#00A8E8" />
      </svg>
    ),
  },
  {
    name: "Charminar",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="30" y="40" width="40" height="40" fill="#0B5BA3" />
        <path d="M40 80 L40 60 A10 10 0 0 1 60 60 L60 80" fill="#F8FAFC" />
        <rect x="20" y="20" width="10" height="60" rx="2" fill="url(#goldGrad)" />
        <rect x="70" y="20" width="10" height="60" rx="2" fill="url(#goldGrad)" />
        <path d="M30 40 L70 40 L50 20 Z" fill="#00A8E8" />
      </svg>
    ),
  },
  {
    name: "Hawa Mahal",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M10 80 L50 10 L90 80 Z" fill="#0B5BA3" />
        <circle cx="50" cy="35" r="3" fill="url(#goldGrad)" />
        <circle cx="40" cy="50" r="3" fill="url(#goldGrad)" />
        <circle cx="60" cy="50" r="3" fill="url(#goldGrad)" />
        <circle cx="30" cy="65" r="3" fill="url(#goldGrad)" />
        <circle cx="50" cy="65" r="3" fill="url(#goldGrad)" />
        <circle cx="70" cy="65" r="3" fill="url(#goldGrad)" />
      </svg>
    ),
  },
  {
    name: "Gateway of India",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="15" y="40" width="70" height="40" fill="#0B5BA3" />
        <path d="M35 80 L35 55 A15 15 0 0 1 65 55 L65 80" fill="#F8FAFC" />
        <rect x="10" y="30" width="15" height="50" fill="url(#goldGrad)" />
        <rect x="75" y="30" width="15" height="50" fill="url(#goldGrad)" />
        <path d="M10 30 L90 30 L50 15 Z" fill="#00A8E8" />
      </svg>
    ),
  },
  {
    name: "Lotus Temple",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M50 80 C20 80 10 40 50 20 C90 40 80 80 50 80 Z" fill="url(#goldGrad)" />
        <path d="M50 80 C30 80 25 50 50 30 C75 50 70 80 50 80 Z" fill="#0B5BA3" />
        <path d="M50 80 C40 80 38 60 50 40 C62 60 60 80 50 80 Z" fill="#00A8E8" />
      </svg>
    ),
  },
  {
    name: "Golden Temple",
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="20" y="50" width="60" height="30" fill="#0B5BA3" />
        <path d="M25 50 C25 30 75 30 75 50 Z" fill="url(#goldGrad)" />
        <rect x="45" y="60" width="10" height="20" fill="#F8FAFC" />
        <rect x="10" y="80" width="80" height="5" fill="#00A8E8" />
      </svg>
    ),
  },
];

export default function CabTalePremiumHero() {
  const [scene, setScene] = useState("booking");
  const [rotation, setRotation] = useState(0);

  // Main Story Sequence Animation
  useEffect(() => {
    const runAnimation = () => {
      setScene("booking");
      setTimeout(() => setScene("arriving"), 3500);
      setTimeout(() => setScene("boarding"), 6000);
      setTimeout(() => setScene("departing"), 8000);
    };

    runAnimation();
    const interval = setInterval(runAnimation, 11000);
    return () => clearInterval(interval);
  }, []);

  // Wheel rotation animation
  useEffect(() => {
    if (scene !== "booking") {
      const timer = setInterval(() => setRotation((prev) => (prev + 15) % 360), 30);
      return () => clearInterval(timer);
    }
  }, [scene]);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(232, 244, 253, 0.85) 50%, rgba(240, 249, 255, 0.95) 100%),
          url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat fixed
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 5%",
        fontFamily: "'Poppins', 'Inter', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* SVG Definitions for Gradients used in models */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="metallicBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A8E8" />
            <stop offset="100%" stopColor="#0B5BA3" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Glowing Orbs */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, transparent 70%)", borderRadius: "50%", animation: "float 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "-150px", left: "-150px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(11, 91, 163, 0.12) 0%, transparent 70%)", borderRadius: "50%", animation: "float 10s ease-in-out infinite reverse" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          maxWidth: "1400px",
          width: "100%",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT COLUMN: Typography & CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(255, 193, 7, 0.5)", borderRadius: "50px", padding: "10px 20px", width: "fit-content", boxShadow: "0 8px 20px rgba(255, 193, 7, 0.1)", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "16px" }}>🛕</span>
            <span style={{ color: "#0B5BA3", fontSize: "13px", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase" }}>
              India's Premier Ride Experience
            </span>
          </div>

          <div>
            <h1 style={{ fontSize: "clamp(46px, 7vw, 76px)", fontWeight: 800, lineHeight: 1.1, color: "#0B2847", margin: 0, letterSpacing: "-0.02em" }}>
              Discover India,<br />
              <span style={{ background: "linear-gradient(135deg, #FFC107 0%, #D97706 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                One Tale at a time.
              </span>
            </h1>
          </div>

          <p style={{ fontSize: "18px", color: "#334155", lineHeight: 1.7, maxWidth: "520px", margin: 0, fontWeight: 500 }}>
            CabTale brings premium ride-sharing to your doorstep. From local commutes to intercity heritage tours, travel with complete peace of mind.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "24px 0", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            {[
              { number: "200+", label: "Cities Covered" },
              { number: "4.9★", label: "Avg Rating" },
              { number: "100% ", label: "Verified Drivers" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "26px", fontWeight: 800, color: "#0B5BA3", letterSpacing: "-0.02em" }}>{stat.number}</div>
                <div style={{ fontSize: "13px", color: "#64748B", fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
            <button className="cta-btn primary-btn">
              <span>Book a Ride</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="cta-btn secondary-btn">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Animation Stage */}
        <div style={{ position: "relative", height: "640px", display: "flex", alignItems: "center", justifyContent: "center", perspective: "1200px" }}>
          
          {/* Glassmorphism Backdrop Stage */}
          <div style={{ position: "absolute", width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", borderRadius: "40px", border: "1px solid rgba(255, 255, 255, 0.6)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 40px 80px rgba(0, 0, 0, 0.08)", zIndex: 1, overflow: "hidden" }}>
            
            {/* INFINITE LOOPING INDIAN MONUMENTS */}
            <div className="monument-marquee" style={{ position: "absolute", top: "40px", left: 0, display: "flex", width: "200%", zIndex: 0, opacity: 0.8 }}>
              {/* Render twice for seamless infinite scroll */}
              {[...MONUMENTS, ...MONUMENTS].map((monument, i) => (
                <div key={i} style={{ width: "160px", display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "80px", height: "80px", background: "rgba(255,255,255,0.5)", borderRadius: "20px", padding: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(255,255,255,0.8)", marginBottom: "8px" }}>
                    {monument.icon}
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#0B5BA3", textTransform: "uppercase", letterSpacing: "1px" }}>{monument.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium 3D Road */}
          <div style={{ position: "absolute", bottom: "120px", width: "115%", height: "100px", background: "linear-gradient(180deg, #1E3A5F 0%, #0B2847 100%)", borderRadius: "50% / 100% 100% 0 0", zIndex: 3, boxShadow: "0 30px 50px rgba(11, 91, 163, 0.3)", transform: "rotateX(65deg)" }}>
            <div className="road-lines" style={{ position: "absolute", top: "50%", left: "0", width: "200%", height: "3px", background: "repeating-linear-gradient(90deg, #FFD700 0, #FFD700 40px, transparent 40px, transparent 80px)", opacity: 0.9, filter: "drop-shadow(0 0 6px #FFD700)" }} />
          </div>

          {/* SCENE 1: Phone Booking Hologram */}
          <div style={{ position: "absolute", zIndex: 5, transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)", transform: scene === "booking" ? "scale(1) translateY(-20px) rotateZ(0)" : "scale(0.5) translateY(120px) rotateZ(-20deg)", opacity: scene === "booking" ? 1 : 0 }}>
            <div style={{ width: "200px", height: "400px", background: "#FFFFFF", borderRadius: "36px", border: "12px solid #0B2847", boxShadow: "0 30px 60px rgba(11, 91, 163, 0.3), inset 0 4px 10px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", padding: "16px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", width: "70px", height: "22px", background: "#0B2847", borderRadius: "100px", zIndex: 10 }} />
              
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <div style={{ flex: 1, background: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontSize: "36px", animation: "pulse 2s ease-in-out infinite", zIndex: 2 }}>📍</div>
                  <div style={{ position: "absolute", width: "60px", height: "60px", border: "2px solid #00A8E8", borderRadius: "50%", animation: "expandPulse 2s ease-out infinite", zIndex: 1 }} />
                </div>
                
                <div style={{ background: "#F8FAFC", padding: "14px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700, marginBottom: "4px" }}>DESTINATION</div>
                  <div style={{ fontSize: "14px", color: "#0F172A", fontWeight: 800 }}>Taj Mahal, Agra</div>
                </div>
                <button className="phone-btn" style={{ width: "100%", padding: "16px", background: "url(#goldGrad), #FFC107", border: "none", borderRadius: "12px", fontWeight: 800, fontSize: "14px", color: "#0B2847" }}>
                  Confirm Ride
                </button>
              </div>
              <div style={{ position: "absolute", bottom: "50px", right: "40px", width: "32px", height: "32px", background: "rgba(0, 168, 232, 0.4)", borderRadius: "50%", animation: "tappulse 1.5s ease-out infinite" }} />
            </div>
          </div>

          {/* SCENE 2 & 3: 3D-STYLED GIRL CHARACTER */}
          <div style={{ position: "absolute", bottom: "135px", left: "20%", zIndex: 6, opacity: scene === "booking" ? 1 : scene === "arriving" ? 0.9 : 0, transition: "opacity 0.6s ease, transform 0.8s ease", transform: scene === "boarding" ? "translateX(120px) scale(0.7)" : "translateX(0)" }}>
            
            {/* Floating Booking Bubble */}
            {scene === "booking" && (
              <div style={{ position: "absolute", top: "-40px", right: "-40px", background: "#FFFFFF", padding: "8px 12px", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", fontSize: "12px", fontWeight: 700, color: "#0B5BA3", animation: "float 3s ease-in-out infinite" }}>
                Finding Cab... <span className="loading-dots"></span>
              </div>
            )}

            {/* Highly detailed modern vector girl with 3D shading */}
            <svg width="200" height="280" viewBox="0 0 160 240" fill="none" style={{ filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.25))" }}>
              {/* Hair Shadow & Base */}
              <ellipse cx="80" cy="45" rx="38" ry="45" fill="#111827" />
              {/* Face/Head (Gradient) */}
              <circle cx="80" cy="65" r="32" fill="url(#skinGrad)" />
              {/* Trendy Sunglasses */}
              <rect x="58" y="55" width="20" height="12" rx="4" fill="#1F2937" />
              <rect x="82" y="55" width="20" height="12" rx="4" fill="#1F2937" />
              <path d="M 78 60 L 82 60" stroke="#1F2937" strokeWidth="2" />
              {/* Lips */}
              <path d="M 74 78 Q 80 84 86 78" stroke="#9F1239" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              
              {/* Body/Jacket (Gradient Blue) */}
              <rect x="55" y="100" width="50" height="65" rx="12" fill="url(#metallicBlue)" />
              {/* Handbag */}
              <rect x="105" y="140" width="25" height="25" rx="6" fill="#D97706" />
              <path d="M 110 140 C 110 125, 125 125, 125 140" stroke="#D97706" strokeWidth="3" fill="none" />

              {/* Legs */}
              <rect x="66" y="160" width="12" height="60" rx="6" fill="#1F2937" />
              <rect x="82" y="160" width="12" height="60" rx="6" fill="#1F2937" />
              
              {/* Arms (Skin Gradient) */}
              <rect x="20" y="110" width="40" height="14" rx="7" fill="url(#skinGrad)" />
              <rect x="100" y="110" width="35" height="14" rx="7" fill="url(#skinGrad)" />
              
              {/* Phone and Hand */}
              <circle cx="140" cy="117" r="9" fill="url(#skinGrad)" />
              <rect x="142" y="105" width="10" height="16" rx="2" fill="#F8FAFC" stroke="#334155" strokeWidth="1" />
              
              {/* Shoes */}
              <ellipse cx="72" cy="218" rx="14" ry="10" fill="#FFFFFF" />
              <ellipse cx="88" cy="218" rx="14" ry="10" fill="#FFFFFF" />
              <rect x="60" y="224" width="24" height="4" fill="#00A8E8" />
              <rect x="76" y="224" width="24" height="4" fill="#00A8E8" />
            </svg>
          </div>

          {/* SCENE 2, 3, 4: PREMIUM CAR ANIMATION */}
          <div
            style={{
              position: "absolute",
              bottom: "105px",
              zIndex: 7,
              transition: "transform 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform:
                scene === "booking"
                  ? "translateX(-600px) scale(0.9)"
                  : scene === "arriving" || scene === "boarding"
                  ? "translateX(0px) scale(1)"
                  : "translateX(600px) scale(0.9)",
            }}
          >
            <div style={{ position: "relative", width: "340px", height: "170px" }}>
              
              {/* Hyper-Drive Speed Lines when moving */}
              {scene !== "booking" && scene !== "boarding" && (
                <>
                  <div className="hyper-line" style={{ top: "30%", background: "linear-gradient(90deg, #FFC107, transparent)", animationDelay: "0s" }} />
                  <div className="hyper-line" style={{ top: "50%", background: "linear-gradient(90deg, #00A8E8, transparent)", animationDelay: "0.2s" }} />
                  <div className="hyper-line" style={{ top: "70%", background: "linear-gradient(90deg, #FFD700, transparent)", animationDelay: "0.4s" }} />
                </>
              )}

              {/* Photorealistic Vector Car with Gradients */}
              <svg width="340" height="170" viewBox="0 0 340 170" fill="none" style={{ filter: "drop-shadow(0 30px 40px rgba(11, 91, 163, 0.35))", position: "relative", zIndex: 10 }}>
                {/* Underglow Shadow */}
                <ellipse cx="170" cy="155" rx="140" ry="14" fill="rgba(0,0,0,0.3)" />
                
                {/* Cab Body */}
                <path d="M 50 115 L 80 45 L 250 45 L 280 115 Q 280 140 260 145 L 70 145 Q 50 140 50 115 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                <path d="M 85 45 L 110 75 L 220 75 L 245 45 Z" fill="#0F172A" />
                
                {/* Yellow Branding Stripe */}
                <path d="M 50 115 L 280 115 L 280 130 L 50 130 Z" fill="url(#goldGrad)" />
                
                {/* Windows with Glare */}
                <rect x="95" y="48" width="60" height="24" rx="4" fill="#38BDF8" opacity="0.8" />
                <rect x="170" y="48" width="60" height="24" rx="4" fill="#38BDF8" opacity="0.8" />
                <path d="M 100 48 L 120 72 L 110 72 L 90 48 Z" fill="#FFFFFF" opacity="0.4" />

                {/* CabTale Roof Sign */}
                <rect x="145" y="25" width="50" height="20" rx="4" fill="url(#goldGrad)" />
                <text x="170" y="40" fontSize="12" fontWeight="900" fill="#111827" textAnchor="middle">TAXI</text>

                {/* Glowing Lights */}
                <ellipse cx="65" cy="110" rx="8" ry="12" fill="#FEF08A" filter="drop-shadow(0 0 12px #FFD700)" />
                <ellipse cx="265" cy="110" rx="8" ry="12" fill="#EF4444" filter="drop-shadow(0 0 10px #EF4444)" />

                {/* Detailed Rims & Wheels */}
                {[
                  { cx: 90, cy: 145 },
                  { cx: 240, cy: 145 }
                ].map((wheel, index) => (
                  <g key={index} style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${wheel.cx}px ${wheel.cy}px` }}>
                    <circle cx={wheel.cx} cy={wheel.cy} r="22" fill="#111827" />
                    <circle cx={wheel.cx} cy={wheel.cy} r="14" fill="#E5E7EB" />
                    <circle cx={wheel.cx} cy={wheel.cy} r="5" fill="#111827" />
                    {[0, 45, 90, 135].map((angle) => (
                      <line 
                        key={angle} 
                        x1={wheel.cx} 
                        y1={wheel.cy - 14} 
                        x2={wheel.cx + 14 * Math.cos(angle * Math.PI / 180)} 
                        y2={wheel.cy + 14 * Math.sin(angle * Math.PI / 180)} 
                        stroke="#9CA3AF" 
                        strokeWidth="3" 
                      />
                    ))}
                  </g>
                ))}
              </svg>

              {/* Arrival Shockwave */}
              {scene === "arriving" && (
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "150px", height: "150px", borderRadius: "50%", border: "6px solid #FFC107", transform: "translate(-50%, -50%)", animation: "arrivalRing 0.8s ease-out forwards", zIndex: 1 }} />
              )}
            </div>
          </div>

          {/* Dynamic Floating Live Status Badge */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              background: "#FFFFFF",
              color: "#0B2847",
              padding: "16px 32px",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: 800,
              zIndex: 8,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              animation: "slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Blinking Live Indicator */}
            <span style={{ width: "12px", height: "12px", background: "#10B981", borderRadius: "50%", animation: "blink 1.5s ease-in-out infinite", boxShadow: "0 0 12px #10B981" }} />
            
            {scene === "booking" && "Finding nearby drivers..."}
            {scene === "arriving" && "Your CabTale has arrived!"}
            {scene === "boarding" && "Heading to the Taj Mahal"}
            {scene === "departing" && "Enjoy the royal journey!"}
          </div>
        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style>{`
        /* General Keyframes */
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(30px) scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes expandPulse {
          0% { width: 20px; height: 20px; opacity: 1; transform: translate(-50%, -50%); }
          100% { width: 120px; height: 120px; opacity: 0; transform: translate(-50%, -50%); }
        }
        @keyframes tappulse {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        /* New Animations */
        .loading-dots::after {
          content: '.';
          animation: dots 1.5s steps(5, end) infinite;
        }
        @keyframes dots {
          0%, 20% { color: rgba(0,0,0,0); text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0); }
          40% { color: #0B5BA3; text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0); }
          60% { text-shadow: .25em 0 0 #0B5BA3, .5em 0 0 rgba(0,0,0,0); }
          80%, 100% { text-shadow: .25em 0 0 #0B5BA3, .5em 0 0 #0B5BA3; }
        }

        .monument-marquee {
          animation: scrollLeft 40s linear infinite;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .road-lines {
          animation: moveRoad 1s linear infinite;
        }
        @keyframes moveRoad {
          0% { transform: translateX(0); }
          100% { transform: translateX(-80px); }
        }

        .hyper-line {
          position: absolute;
          left: -150px;
          width: 120px;
          height: 4px;
          border-radius: 2px;
          animation: hyperDrive 0.6s ease-in infinite;
        }
        @keyframes hyperDrive {
          0% { left: -200px; opacity: 0; transform: scaleX(1); }
          20% { opacity: 1; }
          80% { opacity: 1; transform: scaleX(2); }
          100% { left: 100px; opacity: 0; transform: scaleX(0.5); }
        }

        @keyframes arrivalRing {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }

        /* Buttons */
        .cta-btn {
          border-radius: 16px;
          padding: 18px 40px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .primary-btn {
          background: linear-gradient(135deg, #FFD700 0%, #FFC107 100%);
          color: #0B2847;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 12px 24px rgba(255, 215, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.1);
        }
        .primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 32px rgba(255, 215, 0, 0.4);
        }
        .secondary-btn {
          background: rgba(255, 255, 255, 0.8);
          color: #0B5BA3;
          border: 2px solid #00A8E8;
          backdrop-filter: blur(8px);
        }
        .secondary-btn:hover {
          background: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 168, 232, 0.15);
        }

        @media (max-width: 1024px) {
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}