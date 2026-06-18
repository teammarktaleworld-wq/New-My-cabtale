// "use client";

// import { useState } from "react";

// const CITIES = [
//   { name: "Mumbai", state: "Maharashtra", rides: "12K+", active: true },
//   { name: "Delhi", state: "Delhi NCR", rides: "18K+", active: true },
//   { name: "Bangalore", state: "Karnataka", rides: "15K+", active: true },
//   { name: "Hyderabad", state: "Telangana", rides: "9K+", active: true },
//   { name: "Chennai", state: "Tamil Nadu", rides: "8K+", active: true },
//   { name: "Pune", state: "Maharashtra", rides: "7K+", active: true },
//   { name: "Kolkata", state: "West Bengal", rides: "6K+", active: true },
//   { name: "Ahmedabad", state: "Gujarat", rides: "5K+", active: true },
//   { name: "Jaipur", state: "Rajasthan", rides: "4K+", active: true },
//   { name: "Indore", state: "Madhya Pradesh", rides: "3K+", active: true },
//   { name: "Surat", state: "Gujarat", rides: "2K+", active: true },
//   { name: "Kochi", state: "Kerala", rides: "2K+", active: true },
//   { name: "Nagpur", state: "Maharashtra", rides: "1K+", active: false },
//   { name: "Bhopal", state: "Madhya Pradesh", rides: "1K+", active: false },
//   { name: "Lucknow", state: "Uttar Pradesh", rides: "1K+", active: false },
//   { name: "Chandigarh", state: "Punjab", rides: "900+", active: false },
// ];

// export default function CityGrid() {
//   const [search, setSearch] = useState("");

//   const filtered = CITIES.filter(
//     (c) =>
//       c.name.toLowerCase().includes(search.toLowerCase()) ||
//       c.state.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <section
//       id="cities"
//       style={{
//         background: "#0A0A0A",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
//             Our cities
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 48px)",
//             fontWeight: 800,
//             margin: "0 0 16px",
//             letterSpacing: "-0.03em",
//           }}>
//             Available in 200+ cities
//           </h2>
//           <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", margin: "0 0 32px" }}>
//             And growing every month. Find your city below.
//           </p>

//           {/* Search */}
//           <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
//             <svg
//               style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}
//               width="16" height="16" viewBox="0 0 16 16" fill="none"
//             >
//               <circle cx="6.5" cy="6.5" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
//               <path d="M10.5 10.5L14 14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search city or state..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{
//                 width: "100%",
//                 background: "rgba(255,255,255,0.06)",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 borderRadius: "100px",
//                 padding: "14px 16px 14px 44px",
//                 color: "white",
//                 fontSize: "15px",
//                 outline: "none",
//                 boxSizing: "border-box",
//                 fontFamily: "'Inter','Helvetica Neue',sans-serif",
//                 transition: "border-color 0.2s",
//               }}
//               onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.4)")}
//               onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//             />
//           </div>
//         </div>

//         {/* Grid */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//           gap: "14px",
//         }}>
//           {filtered.map((city) => (
//             <div
//               key={city.name}
//               style={{
//                 background: city.active ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 borderRadius: "14px",
//                 padding: "20px",
//                 cursor: city.active ? "pointer" : "default",
//                 transition: "all 0.2s",
//                 opacity: city.active ? 1 : 0.5,
//               }}
//               onMouseEnter={(e) => {
//                 if (!city.active) return;
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(255,193,7,0.3)";
//                 el.style.background = "rgba(255,193,7,0.06)";
//               }}
//               onMouseLeave={(e) => {
//                 if (!city.active) return;
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(255,255,255,0.07)";
//                 el.style.background = "rgba(255,255,255,0.04)";
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
//                 <span style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>{city.name}</span>
//                 {city.active ? (
//                   <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
//                 ) : (
//                   <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
//                 )}
//               </div>
//               <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginBottom: "6px" }}>{city.state}</div>
//               {city.active && (
//                 <div style={{ color: "#FFC107", fontSize: "12px", fontWeight: 600 }}>{city.rides} rides/month</div>
//               )}
//               {!city.active && (
//                 <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>Coming soon</div>
//               )}
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div style={{ textAlign: "center", padding: "48px", color: "rgba(255,255,255,0.3)", fontSize: "16px" }}>
//             No cities match "{search}" yet — but we're expanding fast.
//           </div>
//         )}

//         {/* CTA */}
//         <div style={{ textAlign: "center", marginTop: "48px" }}>
//           <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px", marginBottom: "16px" }}>
//             Don't see your city? Request it and we'll prioritize expansion there.
//           </p>
//           <button style={{
//             background: "transparent",
//             border: "1px solid rgba(255,193,7,0.3)",
//             borderRadius: "100px",
//             padding: "12px 28px",
//             color: "#FFC107",
//             fontSize: "14px",
//             fontWeight: 600,
//             cursor: "pointer",
//             transition: "all 0.2s",
//           }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.background = "rgba(255,193,7,0.1)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.background = "transparent";
//             }}
//           >
//             Request your city →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }























"use client";

import React, { useState, useEffect, useRef } from "react";

const CITIES = [
  { name: "Mumbai", state: "Maharashtra", rides: "12K+", active: true },
  { name: "Delhi", state: "Delhi NCR", rides: "18K+", active: true },
  { name: "Bangalore", state: "Karnataka", rides: "15K+", active: true },
  { name: "Hyderabad", state: "Telangana", rides: "9K+", active: true },
  { name: "Chennai", state: "Tamil Nadu", rides: "8K+", active: true },
  { name: "Pune", state: "Maharashtra", rides: "7K+", active: true },
  { name: "Kolkata", state: "West Bengal", rides: "6K+", active: true },
  { name: "Ahmedabad", state: "Gujarat", rides: "5K+", active: true },
  { name: "Jaipur", state: "Rajasthan", rides: "4K+", active: true },
  { name: "Indore", state: "Madhya Pradesh", rides: "3K+", active: true },
  { name: "Surat", state: "Gujarat", rides: "2K+", active: true },
  { name: "Kochi", state: "Kerala", rides: "2K+", active: true },
  { name: "Nagpur", state: "Maharashtra", rides: "1K+", active: false },
  { name: "Bhopal", state: "Madhya Pradesh", rides: "1K+", active: false },
  { name: "Lucknow", state: "Uttar Pradesh", rides: "1K+", active: false },
  { name: "Chandigarh", state: "Punjab", rides: "900+", active: false },
];

// Use context location
const CURRENT_LOCATION = "Indore"; 

export default function CityGridModern() {
  const [search, setSearch] = useState("");
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      ref={sectionRef}
      id="cities"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div 
          style={{ 
            textAlign: "center", 
            marginBottom: "56px",
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
            Our Footprint
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
            Available in <span style={{ color: "#FFC107" }}>200+ cities</span>
          </h2>
          <p style={{ color: "#6B7280", fontSize: "18px", margin: "0 0 40px" }}>
            And growing every month. Find your city below.
          </p>

          {/* Premium Search Bar */}
          <div style={{ position: "relative", maxWidth: "480px", margin: "0 auto" }}>
            <svg
              style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by city or state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "100px",
                padding: "18px 20px 18px 56px",
                color: "#111827",
                fontSize: "16px",
                fontWeight: 500,
                outline: "none",
                boxSizing: "border-box",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#FFC107";
                e.target.style.background = "#FFFFFF";
                e.target.style.boxShadow = "0 10px 25px -5px rgba(255, 193, 7, 0.2)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#E5E7EB";
                e.target.style.background = "#F9FAFB";
                e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
                e.target.style.transform = "translateY(0)";
              }}
            />
          </div>
        </div>

        {/* Dynamic Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((city, index) => {
            const isCurrent = city.name === CURRENT_LOCATION;
            
            return (
              <div
                key={city.name}
                style={{
                  background: city.active ? "#FFFFFF" : "#F9FAFB",
                  border: isCurrent ? "2px solid #FFC107" : `1px solid ${city.active ? "#E5E7EB" : "#F3F4F6"}`,
                  borderRadius: "20px",
                  padding: "24px",
                  cursor: city.active ? "pointer" : "default",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: isCurrent 
                    ? "0 10px 20px -5px rgba(255, 193, 7, 0.15)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
                  // Staggered Entrance Animation based on index
                  opacity: isVisible ? (city.active ? 1 : 0.6) : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${(index % 10) * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  if (!city.active) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 15px 25px -5px rgba(0, 0, 0, 0.08)";
                  el.style.borderColor = isCurrent ? "#FFC107" : "#D1D5DB";
                }}
                onMouseLeave={(e) => {
                  if (!city.active) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = isCurrent 
                    ? "0 10px 20px -5px rgba(255, 193, 7, 0.15)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.02)";
                  el.style.borderColor = isCurrent ? "#FFC107" : "#E5E7EB";
                }}
              >
                {/* Context-aware Current Location Badge */}
                {isCurrent && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "#FFFBEB",
                    color: "#D97706",
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderBottomLeftRadius: "12px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>
                    📍 You are here
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#111827", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.01em" }}>
                    {city.name}
                  </span>
                  
                  {/* Status Indicator */}
                  {city.active ? (
                    <div style={{ position: "relative", width: "10px", height: "10px", flexShrink: 0 }}>
                      <div style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: "#10B981" }} />
                      <div style={{ 
                        position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: "#10B981",
                        animation: "pingRadar 2s cubic-bezier(0, 0, 0.2, 1) infinite" 
                      }} />
                    </div>
                  ) : (
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D1D5DB", flexShrink: 0 }} />
                  )}
                </div>
                
                <div style={{ color: "#6B7280", fontSize: "14px", marginBottom: "12px", fontWeight: 500 }}>
                  {city.state}
                </div>
                
                {city.active ? (
                  <div style={{ display: "inline-flex", background: "#F3F4F6", padding: "4px 8px", borderRadius: "6px", color: "#4B5563", fontSize: "12px", fontWeight: 700 }}>
                    🚗 {city.rides} rides/mo
                  </div>
                ) : (
                  <div style={{ color: "#9CA3AF", fontSize: "13px", fontStyle: "italic", fontWeight: 500 }}>
                    Coming soon...
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div 
            style={{ 
              textAlign: "center", 
              padding: "64px 20px", 
              background: "#F9FAFB", 
              borderRadius: "24px", 
              border: "1px dashed #D1D5DB",
              marginTop: "20px"
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌍</div>
            <h3 style={{ color: "#111827", fontSize: "20px", fontWeight: 700, margin: "0 0 8px" }}>City not found</h3>
            <p style={{ color: "#6B7280", fontSize: "16px", margin: 0 }}>
              No cities match "{search}" yet — but we're expanding fast.
            </p>
          </div>
        )}

        {/* CTA Footer */}
        <div 
          style={{ 
            textAlign: "center", 
            marginTop: "64px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 400ms"
          }}
        >
          <p style={{ color: "#4B5563", fontSize: "16px", marginBottom: "20px" }}>
            Don't see your city? Request it and we'll prioritize expansion there.
          </p>
          <button 
            style={{
              background: "#FFFFFF",
              border: "2px solid #E5E7EB",
              borderRadius: "100px",
              padding: "16px 32px",
              color: "#111827",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#FFC107";
              el.style.background = "#FFFBEB";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#E5E7EB";
              el.style.background = "#FFFFFF";
              el.style.transform = "translateY(0)";
            }}
          >
            Request your city →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pingRadar {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}