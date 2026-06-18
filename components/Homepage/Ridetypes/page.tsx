// "use client";

// const RIDES = [
//   {
//     id: "mini",
//     name: "Mini",
//     tagline: "Compact & affordable",
//     seats: 4,
//     basePrice: "₹50",
//     perKm: "₹8/km",
//     eta: "3 min",
//     features: ["AC", "Economic", "City rides"],
//     color: "#4ADE80",
//     icon: (
//       <svg viewBox="0 0 60 36" width="60" height="36" fill="none">
//         <path d="M8 26 L10 14 Q12 8 18 8 L42 8 Q48 8 50 14 L52 26 Q52 29 49 29 L11 29 Q8 29 8 26Z" fill="rgba(74,222,128,0.15)" stroke="#4ADE80" strokeWidth="1.5" />
//         <path d="M18 8 L20 3 L40 3 L42 8" stroke="#4ADE80" strokeWidth="1.5" fill="none" />
//         <circle cx="18" cy="29" r="5" fill="rgba(74,222,128,0.2)" stroke="#4ADE80" strokeWidth="1.5" />
//         <circle cx="42" cy="29" r="5" fill="rgba(74,222,128,0.2)" stroke="#4ADE80" strokeWidth="1.5" />
//         <rect x="21" y="10" width="18" height="8" rx="1.5" fill="rgba(74,222,128,0.15)" stroke="#4ADE80" strokeWidth="1" />
//       </svg>
//     ),
//   },
//   {
//     id: "sedan",
//     name: "Sedan",
//     tagline: "Comfortable everyday ride",
//     seats: 4,
//     basePrice: "₹70",
//     perKm: "₹12/km",
//     eta: "2 min",
//     features: ["AC", "Premium", "City & outstation"],
//     color: "#FFC107",
//     icon: (
//       <svg viewBox="0 0 60 36" width="60" height="36" fill="none">
//         <path d="M5 26 L8 12 Q10 6 17 6 L43 6 Q50 6 52 12 L55 26 Q55 30 51 30 L9 30 Q5 30 5 26Z" fill="rgba(255,193,7,0.15)" stroke="#FFC107" strokeWidth="1.5" />
//         <path d="M17 6 L20 2 L40 2 L43 6" stroke="#FFC107" strokeWidth="1.5" fill="none" />
//         <circle cx="16" cy="30" r="5.5" fill="rgba(255,193,7,0.2)" stroke="#FFC107" strokeWidth="1.5" />
//         <circle cx="44" cy="30" r="5.5" fill="rgba(255,193,7,0.2)" stroke="#FFC107" strokeWidth="1.5" />
//         <rect x="19" y="8" width="22" height="9" rx="1.5" fill="rgba(255,193,7,0.15)" stroke="#FFC107" strokeWidth="1" />
//       </svg>
//     ),
//     popular: true,
//   },
//   {
//     id: "suv",
//     name: "SUV",
//     tagline: "Space for the whole crew",
//     seats: 6,
//     basePrice: "₹100",
//     perKm: "₹18/km",
//     eta: "5 min",
//     features: ["AC", "Spacious", "Luggage space"],
//     color: "#A78BFA",
//     icon: (
//       <svg viewBox="0 0 60 36" width="60" height="36" fill="none">
//         <path d="M4 27 L6 11 Q8 5 15 5 L45 5 Q52 5 54 11 L56 27 Q56 31 52 31 L8 31 Q4 31 4 27Z" fill="rgba(167,139,250,0.15)" stroke="#A78BFA" strokeWidth="1.5" />
//         <path d="M15 5 L17 1 L43 1 L45 5" stroke="#A78BFA" strokeWidth="1.5" fill="none" />
//         <circle cx="15" cy="31" r="5.5" fill="rgba(167,139,250,0.2)" stroke="#A78BFA" strokeWidth="1.5" />
//         <circle cx="45" cy="31" r="5.5" fill="rgba(167,139,250,0.2)" stroke="#A78BFA" strokeWidth="1.5" />
//         <rect x="17" y="7" width="26" height="11" rx="1.5" fill="rgba(167,139,250,0.15)" stroke="#A78BFA" strokeWidth="1" />
//       </svg>
//     ),
//   },
//   {
//     id: "auto",
//     name: "Auto",
//     tagline: "Quick short-distance hops",
//     seats: 3,
//     basePrice: "₹30",
//     perKm: "₹6/km",
//     eta: "1 min",
//     features: ["Open air", "Budget", "Last-mile"],
//     color: "#FB923C",
//     icon: (
//       <svg viewBox="0 0 60 36" width="60" height="36" fill="none">
//         <path d="M20 28 L22 14 Q24 8 30 8 L44 8 Q50 8 52 14 L54 28" stroke="#FB923C" strokeWidth="1.5" fill="rgba(251,146,60,0.1)" />
//         <path d="M30 8 L32 3 L44 3 L44 8" stroke="#FB923C" strokeWidth="1.5" fill="none" />
//         <circle cx="26" cy="28" r="5" fill="rgba(251,146,60,0.2)" stroke="#FB923C" strokeWidth="1.5" />
//         <circle cx="48" cy="28" r="5" fill="rgba(251,146,60,0.2)" stroke="#FB923C" strokeWidth="1.5" />
//         <line x1="20" y1="18" x2="6" y2="22" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
//         <circle cx="6" cy="26" r="3" fill="rgba(251,146,60,0.2)" stroke="#FB923C" strokeWidth="1.5" />
//       </svg>
//     ),
//   },
// ];

// export default function RideTypes() {
//   return (
//     <section
//       id="services"
//       style={{
//         background: "#080808",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
//             Our Fleet
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 48px)",
//             fontWeight: 800,
//             margin: "0 0 16px",
//             letterSpacing: "-0.03em",
//           }}>
//             Pick your ride
//           </h2>
//           <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", margin: 0, maxWidth: "460px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
//             From a quick auto hop to a roomy SUV road trip — we have the right cab for every story.
//           </p>
//         </div>

//         {/* Cards */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//           gap: "20px",
//         }}>
//           {RIDES.map((ride) => (
//             <div
//               key={ride.id}
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 border: `1px solid rgba(255,255,255,0.08)`,
//                 borderRadius: "20px",
//                 padding: "32px 28px",
//                 position: "relative",
//                 cursor: "pointer",
//                 transition: "all 0.25s ease",
//               }}
//               onMouseEnter={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = `${ride.color}55`;
//                 el.style.transform = "translateY(-6px)";
//                 el.style.background = "rgba(255,255,255,0.05)";
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(255,255,255,0.08)";
//                 el.style.transform = "translateY(0)";
//                 el.style.background = "rgba(255,255,255,0.03)";
//               }}
//             >
//               {ride.popular && (
//                 <div style={{
//                   position: "absolute",
//                   top: "-12px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   background: "#FFC107",
//                   color: "#0A0A0A",
//                   fontSize: "11px",
//                   fontWeight: 800,
//                   letterSpacing: "0.08em",
//                   padding: "4px 14px",
//                   borderRadius: "100px",
//                   whiteSpace: "nowrap",
//                 }}>
//                   MOST POPULAR
//                 </div>
//               )}

//               {/* Vehicle icon */}
//               <div style={{ marginBottom: "20px" }}>{ride.icon}</div>

//               {/* Name + tagline */}
//               <div style={{ marginBottom: "20px" }}>
//                 <h3 style={{ color: "white", fontSize: "22px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>{ride.name}</h3>
//                 <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", margin: 0 }}>{ride.tagline}</p>
//               </div>

//               {/* Price */}
//               <div style={{ marginBottom: "20px" }}>
//                 <span style={{ color: ride.color, fontSize: "28px", fontWeight: 900, letterSpacing: "-0.03em" }}>{ride.basePrice}</span>
//                 <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", marginLeft: "6px" }}>base + {ride.perKm}</span>
//               </div>

//               {/* Meta */}
//               <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
//                 <div>
//                   <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Seats</div>
//                   <div style={{ color: "white", fontSize: "15px", fontWeight: 700 }}>{ride.seats}</div>
//                 </div>
//                 <div>
//                   <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>ETA</div>
//                   <div style={{ color: "white", fontSize: "15px", fontWeight: 700 }}>{ride.eta}</div>
//                 </div>
//               </div>

//               {/* Features */}
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//                 {ride.features.map((f) => (
//                   <span key={f} style={{
//                     background: `${ride.color}15`,
//                     border: `1px solid ${ride.color}30`,
//                     color: ride.color,
//                     borderRadius: "100px",
//                     padding: "3px 10px",
//                     fontSize: "11px",
//                     fontWeight: 600,
//                   }}>{f}</span>
//                 ))}
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

const RIDES = [
  {
    id: "mini",
    name: "Mini",
    tagline: "Compact & affordable",
    seats: 4,
    basePrice: "₹50",
    perKm: "₹8/km",
    eta: "3 min",
    features: ["AC", "Economic", "City rides"],
    color: "#10B981", // Emerald Green
    bgLight: "#ECFDF5",
    icon: (
      <svg viewBox="0 0 60 36" width="80" height="48" fill="none">
        <path d="M8 26 L10 14 Q12 8 18 8 L42 8 Q48 8 50 14 L52 26 Q52 29 49 29 L11 29 Q8 29 8 26Z" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <path d="M18 8 L20 3 L40 3 L42 8" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="29" r="6" fill="#111827" />
        <circle cx="18" cy="29" r="2" fill="#E5E7EB" />
        <circle cx="42" cy="29" r="6" fill="#111827" />
        <circle cx="42" cy="29" r="2" fill="#E5E7EB" />
        <rect x="21" y="10" width="18" height="8" rx="2" fill="#A7F3D0" />
      </svg>
    ),
  },
  {
    id: "sedan",
    name: "Sedan",
    tagline: "Comfortable everyday ride",
    seats: 4,
    basePrice: "₹70",
    perKm: "₹12/km",
    eta: "2 min",
    features: ["AC", "Premium", "City & outstation"],
    color: "#F59E0B", // Amber/Yellow
    bgLight: "#FFFBEB",
    icon: (
      <svg viewBox="0 0 60 36" width="80" height="48" fill="none">
        <path d="M5 26 L8 12 Q10 6 17 6 L43 6 Q50 6 52 12 L55 26 Q55 30 51 30 L9 30 Q5 30 5 26Z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
        <path d="M17 6 L20 2 L40 2 L43 6" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="30" r="6" fill="#111827" />
        <circle cx="16" cy="30" r="2" fill="#E5E7EB" />
        <circle cx="44" cy="30" r="6" fill="#111827" />
        <circle cx="44" cy="30" r="2" fill="#E5E7EB" />
        <rect x="19" y="8" width="22" height="9" rx="2" fill="#FDE68A" />
      </svg>
    ),
    popular: true,
  },
  {
    id: "suv",
    name: "SUV",
    tagline: "Space for the whole crew",
    seats: 6,
    basePrice: "₹100",
    perKm: "₹18/km",
    eta: "5 min",
    features: ["AC", "Spacious", "Luggage space"],
    color: "#8B5CF6", // Purple
    bgLight: "#F5F3FF",
    icon: (
      <svg viewBox="0 0 60 36" width="80" height="48" fill="none">
        <path d="M4 27 L6 11 Q8 5 15 5 L45 5 Q52 5 54 11 L56 27 Q56 31 52 31 L8 31 Q4 31 4 27Z" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M15 5 L17 1 L43 1 L45 5" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="15" cy="31" r="6" fill="#111827" />
        <circle cx="15" cy="31" r="2" fill="#E5E7EB" />
        <circle cx="45" cy="31" r="6" fill="#111827" />
        <circle cx="45" cy="31" r="2" fill="#E5E7EB" />
        <rect x="17" y="7" width="26" height="11" rx="2" fill="#DDD6FE" />
      </svg>
    ),
  },
  {
    id: "auto",
    name: "Auto",
    tagline: "Quick short-distance hops",
    seats: 3,
    basePrice: "₹30",
    perKm: "₹6/km",
    eta: "1 min",
    features: ["Open air", "Budget", "Last-mile"],
    color: "#F97316", // Orange
    bgLight: "#FFF7ED",
    icon: (
      <svg viewBox="0 0 60 36" width="80" height="48" fill="none">
        <path d="M20 28 L22 14 Q24 8 30 8 L44 8 Q50 8 52 14 L54 28" fill="#FFEDD5" stroke="#F97316" strokeWidth="2" />
        <path d="M30 8 L32 3 L44 3 L44 8" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="26" cy="28" r="6" fill="#111827" />
        <circle cx="26" cy="28" r="2" fill="#E5E7EB" />
        <circle cx="48" cy="28" r="6" fill="#111827" />
        <circle cx="48" cy="28" r="2" fill="#E5E7EB" />
        <line x1="20" y1="18" x2="6" y2="22" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="26" r="4" fill="#111827" />
      </svg>
    ),
  },
];

export default function RideTypesModern() {
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
      id="services"
      style={{
        backgroundColor: "#F9FAFB", // Light grey background
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              marginBottom: "16px",
            }}
          >
            Our Fleet
          </span>
          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Pick your perfect <span style={{ color: "#FFC107" }}>Ride</span>
          </h2>
          <p
            style={{
              color: "#4B5563",
              fontSize: "18px",
              margin: 0,
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            From a quick auto hop to a roomy SUV road trip — we have the right cab for every story.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {RIDES.map((ride, index) => (
            <div
              key={ride.id}
              className="ride-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "24px",
                padding: "32px 24px",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                // Staggered animation
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(-8px)`;
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.borderColor = ride.color;
                const icon = e.currentTarget.querySelector('.ride-icon') as HTMLElement;
                if(icon) icon.style.transform = "scale(1.1) translateX(10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.borderColor = "#E5E7EB";
                const icon = e.currentTarget.querySelector('.ride-icon') as HTMLElement;
                if(icon) icon.style.transform = "scale(1) translateX(0)";
              }}
            >
              {/* Popular Badge */}
              {ride.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#FFC107",
                    color: "#111827",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    padding: "6px 12px",
                    borderRadius: "100px",
                    boxShadow: "0 4px 6px -1px rgba(255, 193, 7, 0.3)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Top Section: Title & Icon */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <div style={{ zIndex: 2 }}>
                  <h3 style={{ color: "#111827", fontSize: "24px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                    {ride.name}
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "14px", margin: 0 }}>
                    {ride.tagline}
                  </p>
                </div>
              </div>

              {/* Icon Container */}
              <div 
                className="ride-icon"
                style={{ 
                  alignSelf: "center", 
                  marginBottom: "32px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" 
                }}
              >
                {ride.icon}
              </div>

              {/* Price Details */}
              <div style={{ marginBottom: "24px", marginTop: "auto" }}>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span style={{ color: "#111827", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em" }}>
                    {ride.basePrice}
                  </span>
                  <span style={{ color: "#6B7280", fontSize: "14px", marginLeft: "6px", fontWeight: 500 }}>
                    base + {ride.perKm}
                  </span>
                </div>
              </div>

              {/* Specs (Seats / ETA) */}
              <div style={{ display: "flex", gap: "24px", marginBottom: "24px", borderTop: "1px solid #F3F4F6", paddingTop: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: ride.bgLight, padding: "6px", borderRadius: "8px", color: ride.color }}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div>
                    <div style={{ color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", fontWeight: 700 }}>Seats</div>
                    <div style={{ color: "#111827", fontSize: "14px", fontWeight: 700 }}>{ride.seats}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: ride.bgLight, padding: "6px", borderRadius: "8px", color: ride.color }}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", fontWeight: 700 }}>ETA</div>
                    <div style={{ color: "#111827", fontSize: "14px", fontWeight: 700 }}>{ride.eta}</div>
                  </div>
                </div>
              </div>

              {/* Features Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ride.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      background: "#F3F4F6",
                      color: "#4B5563",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}