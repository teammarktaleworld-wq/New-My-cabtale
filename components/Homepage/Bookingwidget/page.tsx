// "use client";

// import { useState } from "react";

// const RIDE_TYPES = [
//   { id: "mini", label: "Mini", desc: "4 seats", price: "₹8/km", icon: "🚗" },
//   { id: "sedan", label: "Sedan", desc: "4 seats", price: "₹12/km", icon: "🚙" },
//   { id: "suv", label: "SUV", desc: "6 seats", price: "₹18/km", icon: "🚐" },
//   { id: "auto", label: "Auto", desc: "3 seats", price: "₹6/km", icon: "🛺" },
// ];

// export default function BookingWidget() {
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [selectedRide, setSelectedRide] = useState("sedan");

//   const inputStyle = {
//     width: "100%",
//     background: "rgba(255,255,255,0.06)",
//     border: "1px solid rgba(255,255,255,0.1)",
//     borderRadius: "12px",
//     padding: "14px 16px 14px 44px",
//     color: "white",
//     fontSize: "15px",
//     outline: "none",
//     boxSizing: "border-box" as const,
//     fontFamily: "'Inter','Helvetica Neue',sans-serif",
//     transition: "border-color 0.2s",
//   };

//   return (
//     <section
//       id="booking"
//       style={{
//         background: "#0A0A0A",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "820px", margin: "0 auto" }}>
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
//             Quick Booking
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 44px)",
//             fontWeight: 800,
//             margin: 0,
//             letterSpacing: "-0.03em",
//           }}>
//             Where to?
//           </h2>
//         </div>

//         {/* Card */}
//         <div style={{
//           background: "rgba(255,255,255,0.04)",
//           border: "1px solid rgba(255,255,255,0.1)",
//           borderRadius: "24px",
//           padding: "40px",
//         }}>
//           {/* Pickup / Drop */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
//             {/* Pickup */}
//             <div style={{ position: "relative" }}>
//               <div style={{
//                 position: "absolute",
//                 left: "14px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 background: "#4ADE80",
//               }} />
//               <input
//                 type="text"
//                 placeholder="Pickup location"
//                 value={pickup}
//                 onChange={(e) => setPickup(e.target.value)}
//                 style={inputStyle}
//                 onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                 onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//               />
//             </div>

//             {/* Swap button */}
//             <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//               <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
//               <button
//                 onClick={() => { const t = pickup; setPickup(drop); setDrop(t); }}
//                 style={{
//                   background: "rgba(255,193,7,0.1)",
//                   border: "1px solid rgba(255,193,7,0.25)",
//                   borderRadius: "50%",
//                   width: "32px",
//                   height: "32px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   flexShrink: 0,
//                 }}
//               >
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <path d="M7 1v12M3 4l4-3 4 3M3 10l4 3 4-3" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//               <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
//             </div>

//             {/* Drop */}
//             <div style={{ position: "relative" }}>
//               <div style={{
//                 position: "absolute",
//                 left: "14px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "2px",
//                 background: "#FFC107",
//               }} />
//               <input
//                 type="text"
//                 placeholder="Drop location"
//                 value={drop}
//                 onChange={(e) => setDrop(e.target.value)}
//                 style={inputStyle}
//                 onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                 onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//               />
//             </div>
//           </div>

//           {/* Date & Time */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>
//             <div style={{ position: "relative" }}>
//               <svg style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <rect x="1" y="3" width="14" height="12" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
//                 <path d="M5 1v4M11 1v4M1 7h14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
//               </svg>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 style={{ ...inputStyle, colorScheme: "dark" }}
//                 onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                 onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//               />
//             </div>
//             <div style={{ position: "relative" }}>
//               <svg style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
//                 <path d="M8 4v4l3 2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
//               </svg>
//               <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 style={{ ...inputStyle, colorScheme: "dark" }}
//                 onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
//                 onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
//               />
//             </div>
//           </div>

//           {/* Ride type selector */}
//           <div style={{ marginBottom: "32px" }}>
//             <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
//               Choose ride type
//             </p>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
//               {RIDE_TYPES.map((r) => (
//                 <button
//                   key={r.id}
//                   onClick={() => setSelectedRide(r.id)}
//                   style={{
//                     background: selectedRide === r.id ? "rgba(255,193,7,0.15)" : "rgba(255,255,255,0.04)",
//                     border: selectedRide === r.id ? "1px solid rgba(255,193,7,0.5)" : "1px solid rgba(255,255,255,0.08)",
//                     borderRadius: "12px",
//                     padding: "14px 8px",
//                     cursor: "pointer",
//                     transition: "all 0.2s",
//                     textAlign: "center",
//                   }}
//                 >
//                   <div style={{ fontSize: "24px", marginBottom: "6px" }}>{r.icon}</div>
//                   <div style={{ color: selectedRide === r.id ? "#FFC107" : "white", fontSize: "13px", fontWeight: 700, marginBottom: "2px" }}>{r.label}</div>
//                   <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{r.price}</div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Fare estimate */}
//           {pickup && drop && (
//             <div style={{
//               background: "rgba(255,193,7,0.06)",
//               border: "1px solid rgba(255,193,7,0.2)",
//               borderRadius: "12px",
//               padding: "14px 18px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginBottom: "24px",
//             }}>
//               <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>Estimated fare</span>
//               <span style={{ color: "#FFC107", fontWeight: 800, fontSize: "20px" }}>₹120 – ₹160</span>
//             </div>
//           )}

//           {/* Submit */}
//           <button
//             style={{
//               width: "100%",
//               background: "#FFC107",
//               color: "#0A0A0A",
//               border: "none",
//               borderRadius: "14px",
//               padding: "18px",
//               fontSize: "16px",
//               fontWeight: 800,
//               cursor: "pointer",
//               letterSpacing: "0.01em",
//               boxShadow: "0 0 32px rgba(255,193,7,0.3)",
//               transition: "transform 0.15s, box-shadow 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(255,193,7,0.5)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(255,193,7,0.3)";
//             }}
//           >
//             Confirm Booking →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



























"use client";

import React, { useState, useEffect } from "react";

const RIDE_TYPES = [
  { id: "mini", label: "Mini", desc: "4 seats", price: "₹120", icon: "🚗" },
  { id: "sedan", label: "Sedan", desc: "4 seats", price: "₹180", icon: "🚙" },
  { id: "suv", label: "SUV", desc: "6 seats", price: "₹250", icon: "🚐" },
  { id: "premium", label: "Premium", desc: "4 seats", price: "₹350", icon: "🏎️" },
];

export default function BookingWidgetModern() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedRide, setSelectedRide] = useState("sedan");

  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [swapRotations, setSwapRotations] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSwap = () => {
    setSwapRotations((prev) => prev + 180);
    setPickup(drop);
    setDrop(pickup);
  };

  const handleBooking = () => {
    const bookingData = {
      pickupLocation: pickup || "Not provided",
      dropLocation: drop || "Not provided",
      date: date || "ASAP",
      time: time || "ASAP",
      rideType: selectedRide,
      estimatedFare: RIDE_TYPES.find(r => r.id === selectedRide)?.price
    };
    
    console.log("🚕 --- NEW CAB BOOKING --- 🚕");
    console.table(bookingData);
    alert("Booking data logged to console!");
  };

  const inputStyle = {
    width: "100%",
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "16px",
    padding: "16px 16px 16px 48px",
    color: "#111827",
    fontSize: "15px",
    fontWeight: 500,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <section
      id="booking"
      style={{
        backgroundColor: "#F3F4F6", // Light gray background matching the theme
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "540px", // A bit narrower for a sleek mobile-app feel on desktop
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", // Spring-like animation
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Where to today?
          </h2>
          <p style={{ color: "#6B7280", marginTop: "8px", fontSize: "15px" }}>
            Book your ride in seconds.
          </p>
        </div>

        {/* Main Card */}
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)",
            borderRadius: "28px",
            padding: "32px",
            border: "1px solid #F3F4F6",
          }}
        >
          {/* Pickup / Drop Section */}
          <div style={{ position: "relative", marginBottom: "32px" }}>
            {/* Connecting Line */}
            <div
              style={{
                position: "absolute",
                left: "22px",
                top: "30px",
                bottom: "30px",
                width: "2px",
                background: "repeating-linear-gradient(to bottom, #E5E7EB 0, #E5E7EB 4px, transparent 4px, transparent 8px)",
                zIndex: 0,
              }}
            />

            {/* Pickup */}
            <div style={{ position: "relative", zIndex: 1, marginBottom: "16px" }}>
              <div
                style={{
                  position: "absolute",
                  left: "18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#10B981", // Green dot
                  boxShadow: "0 0 0 4px #D1FAE5",
                }}
              />
              <input
                type="text"
                placeholder="Current Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#FFC107";
                  e.target.style.background = "#FFFFFF";
                  e.target.style.boxShadow = "0 0 0 4px rgba(255,193,7,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E5E7EB";
                  e.target.style.background = "#F9FAFB";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Swap Button */}
            <div
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <button
                onClick={handleSwap}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `rotate(${swapRotations}deg)`,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16" />
                </svg>
              </button>
            </div>

            {/* Drop */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  position: "absolute",
                  left: "18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "10px",
                  height: "10px",
                  borderRadius: "2px",
                  background: "#EF4444", // Red square
                  boxShadow: "0 0 0 4px #FEE2E2",
                }}
              />
              <input
                type="text"
                placeholder="Where to?"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#FFC107";
                  e.target.style.background = "#FFFFFF";
                  e.target.style.boxShadow = "0 0 0 4px rgba(255,193,7,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E5E7EB";
                  e.target.style.background = "#F9FAFB";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Date & Time */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
            <div style={{ position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ ...inputStyle, color: date ? "#111827" : "#9CA3AF" }}
              />
            </div>
            <div style={{ position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ ...inputStyle, color: time ? "#111827" : "#9CA3AF" }}
              />
            </div>
          </div>

          {/* Ride type selector */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: 0 }}>Select a Ride</h3>
              <span style={{ fontSize: "13px", color: "#FFC107", fontWeight: 600, cursor: "pointer" }}>View all</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {RIDE_TYPES.map((r) => {
                const isSelected = selectedRide === r.id;
                return (
                  <div
                    key={r.id}
                    onClick={() => setSelectedRide(r.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      borderRadius: "16px",
                      background: isSelected ? "#FFFBEB" : "#FFFFFF",
                      border: `2px solid ${isSelected ? "#FFC107" : "#F3F4F6"}`,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      transform: isSelected ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ fontSize: "32px" }}>{r.icon}</div>
                      <div>
                        <div style={{ color: "#111827", fontSize: "15px", fontWeight: 700, marginBottom: "2px" }}>{r.label}</div>
                        <div style={{ color: "#6B7280", fontSize: "13px", display: "flex", alignItems: "center", gap: "4px" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          {r.desc}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#111827" }}>
                      {r.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleBooking}
            style={{
              width: "100%",
              background: "#FFC107",
              color: "#111827",
              border: "none",
              borderRadius: "16px",
              padding: "20px",
              fontSize: "16px",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 10px 20px -5px rgba(255,193,7,0.4)",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 25px -5px rgba(255,193,7,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(255,193,7,0.4)";
            }}
          >
            Confirm Booking
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}