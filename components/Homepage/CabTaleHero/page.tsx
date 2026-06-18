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














"use client";

import React, { useState, useEffect } from "react";

export default function CabTaleHeroModern() {
  const [scene, setScene] = useState("booking"); 
  // scenes: 'booking' -> 'arriving' -> 'boarding' -> 'departing'

  useEffect(() => {
    const runAnimation = () => {
      setScene("booking");
      
      // Sequence timing
      setTimeout(() => setScene("arriving"), 3000);  // Phone disappears, car enters
      setTimeout(() => setScene("boarding"), 5500);  // Car stops, passenger appears & enters
      setTimeout(() => setScene("departing"), 7500); // Car drives away
    };

    runAnimation();
    const interval = setInterval(runAnimation, 10000); // Loop every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9FAFB", // Light background from the reference image
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1280px",
          width: "100%",
          gap: "40px",
          flexWrap: "wrap",
          zIndex: 2,
        }}
      >
        {/* Left Column: Typography & CTAs */}
        <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          
          {/* Trust Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "100px",
              padding: "8px 16px",
              marginBottom: "24px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
            }}
          >
            <span role="img" aria-label="taxi" style={{ fontSize: "14px" }}>🚕</span>
            <span
              style={{
                color: "#10B981", // Green text as seen in the top badge of reference
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Reliable. Safe. Always On Time.
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#111827", // Dark gray almost black
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            Your Ride, <br />
            Your <span style={{ color: "#FFC107" }}>Story</span>
          </h1>

          {/* Subcopy */}
          <p
            style={{
              fontSize: "18px",
              color: "#4B5563", // Medium gray
              lineHeight: 1.6,
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            CabTale is your everyday travel partner. Book rides easily, track in real-time, and reach your destination safely.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              style={{
                background: "#FFC107",
                color: "#111827",
                border: "none",
                borderRadius: "12px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 10px 15px -3px rgba(255, 193, 7, 0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 20px -3px rgba(255, 193, 7, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(255, 193, 7, 0.3)";
              }}
            >
              Book a Ride
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <button
              style={{
                background: "#FFFFFF",
                color: "#111827",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F3F4F6")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Story Animation */}
        <div
          style={{
            flex: "1 1 500px",
            position: "relative",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
          }}
        >
          {/* Decorative Background Elements */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background: "linear-gradient(135deg, #E0F2FE 0%, #EFF6FF 100%)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          
          {/* Buildings Backdrop */}
          <svg
            style={{ position: "absolute", bottom: "120px", zIndex: 1, opacity: 0.6 }}
            width="400"
            height="200"
            viewBox="0 0 400 200"
            fill="none"
          >
            <rect x="50" y="80" width="60" height="120" rx="4" fill="#D1D5DB" />
            <rect x="130" y="40" width="80" height="160" rx="4" fill="#9CA3AF" />
            <rect x="230" y="100" width="50" height="100" rx="4" fill="#D1D5DB" />
            <rect x="300" y="60" width="70" height="140" rx="4" fill="#E5E7EB" />
          </svg>

          {/* Road */}
          <div
            style={{
              position: "absolute",
              bottom: "80px",
              width: "120%",
              height: "80px",
              background: "#4B5563",
              borderRadius: "50% / 100% 100% 0 0",
              zIndex: 1,
              transform: "rotateX(60deg)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
             {/* Road Line */}
             <div style={{
                 position: "absolute", top: "50%", left: "0", width: "100%", height: "4px",
                 borderTop: "4px dashed #FFC107", opacity: 0.8
             }} />
          </div>

          {/* Scene 1: Booking via Phone */}
          <div
            style={{
              position: "absolute",
              zIndex: 3,
              transition: "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              transform: scene === "booking" ? "scale(1) translateY(0)" : "scale(0) translateY(100px)",
              opacity: scene === "booking" ? 1 : 0,
            }}
          >
            <div
              style={{
                width: "160px",
                height: "320px",
                background: "#FFFFFF",
                borderRadius: "24px",
                border: "8px solid #111827",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 16px",
                position: "relative",
              }}
            >
              <div style={{ width: "40px", height: "4px", background: "#E5E7EB", borderRadius: "4px", marginBottom: "30px" }} />
              {/* Map UI fake */}
              <div style={{ width: "100%", height: "120px", background: "#E0F2FE", borderRadius: "12px", marginBottom: "16px", position: "relative" }}>
                 <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "24px" }}>📍</div>
              </div>
              {/* Confirm Button animates */}
              <div className="phone-btn" style={{ width: "100%", padding: "12px 0", background: "#FFC107", borderRadius: "8px", textAlign: "center", fontWeight: "bold", fontSize: "14px", color: "#111827", marginTop: "auto" }}>
                Confirm Ride
              </div>
              {/* Tapping finger indicator */}
              <div className="tap-indicator" style={{ position: "absolute", bottom: "35px", right: "30px", width: "20px", height: "20px", background: "rgba(17, 24, 39, 0.2)", borderRadius: "50%" }} />
            </div>
          </div>

          {/* Scene 2, 3, 4: Car Arrives, Boards, Departs */}
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              zIndex: 4,
              transition: "transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: 
                scene === "booking" ? "translateX(-400px)" : 
                (scene === "arriving" || scene === "boarding") ? "translateX(0px)" : 
                "translateX(400px)",
            }}
          >
            {/* The Cab */}
            <svg width="240" height="100" viewBox="0 0 240 100" fill="none" style={{ filter: "drop-shadow(0 10px 8px rgba(0,0,0,0.1))" }}>
              {/* Car Body shadow */}
              <ellipse cx="120" cy="90" rx="100" ry="10" fill="rgba(0,0,0,0.2)" />
              {/* Top part / Windows */}
              <path d="M60 50 L80 20 L160 20 L190 50 Z" fill="#E5E7EB" />
              <path d="M65 50 L83 25 L120 25 L120 50 Z" fill="#9CA3AF" />
              <path d="M125 50 L125 25 L157 25 L182 50 Z" fill="#9CA3AF" />
              {/* Taxi Sign */}
              <rect x="105" y="10" width="30" height="10" rx="3" fill="#FFC107" />
              <text x="110" y="18" fontSize="6" fontWeight="bold" fill="#111827">TAXI</text>
              {/* Main Body */}
              <path d="M30 50 L210 50 Q230 50 230 65 L230 75 Q230 85 210 85 L30 85 Q10 85 10 75 L10 65 Q10 50 30 50 Z" fill="#FFFFFF" />
              {/* Yellow branding stripe like reference */}
              <path d="M120 50 L230 50 Q230 65 230 75 Q230 85 210 85 L150 85 Z" fill="#FFC107" />
              {/* Wheels */}
              <circle cx="60" cy="85" r="14" fill="#111827" />
              <circle cx="60" cy="85" r="6" fill="#D1D5DB" />
              <circle cx="180" cy="85" r="14" fill="#111827" />
              <circle cx="180" cy="85" r="6" fill="#D1D5DB" />
            </svg>

            {/* Passenger Boarding Animation */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "-40px",
                fontSize: "40px",
                transition: "all 0.5s ease",
                opacity: scene === "boarding" ? 1 : 0,
                transform: scene === "boarding" ? "translateX(60px) scale(0)" : "translateX(0px) scale(1)",
                transitionDelay: scene === "boarding" ? "0.5s" : "0s",
              }}
            >
              🧍
            </div>
          </div>
          
          {/* Status Text under animation */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              background: "#111827",
              color: "#FFF",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 500,
              zIndex: 5,
              opacity: 0.9,
              transition: "opacity 0.3s",
            }}
          >
            {scene === "booking" && "Searching for a driver..."}
            {scene === "arriving" && "Your ride is arriving"}
            {scene === "boarding" && "Driver has arrived"}
            {scene === "departing" && "On route to destination"}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulseTap {
          0% { transform: scale(1); opacity: 0; }
          50% { transform: scale(1.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .tap-indicator {
          animation: pulseTap 1.5s infinite;
        }
        @keyframes buttonPress {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.95); background: #EAB308; }
        }
        .phone-btn {
          animation: buttonPress 1.5s infinite;
        }
      `}</style>
    </section>
  );
}