"use client";

import { useState } from "react";

const RIDE_TYPES = [
  { id: "mini", label: "Mini", desc: "4 seats", price: "₹8/km", icon: "🚗" },
  { id: "sedan", label: "Sedan", desc: "4 seats", price: "₹12/km", icon: "🚙" },
  { id: "suv", label: "SUV", desc: "6 seats", price: "₹18/km", icon: "🚐" },
  { id: "auto", label: "Auto", desc: "3 seats", price: "₹6/km", icon: "🛺" },
];

export default function BookingWidget() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedRide, setSelectedRide] = useState("sedan");

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "14px 16px 14px 44px",
    color: "white",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "'Inter','Helvetica Neue',sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="booking"
      style={{
        background: "#0A0A0A",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(255,193,7,0.1)",
            border: "1px solid rgba(255,193,7,0.25)",
            borderRadius: "100px",
            padding: "5px 16px",
            color: "#FFC107",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Quick Booking
          </span>
          <h2 style={{
            color: "white",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
          }}>
            Where to?
          </h2>
        </div>

        {/* Card */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
        }}>
          {/* Pickup / Drop */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            {/* Pickup */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#4ADE80",
              }} />
              <input
                type="text"
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Swap button */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
              <button
                onClick={() => { const t = pickup; setPickup(drop); setDrop(t); }}
                style={{
                  background: "rgba(255,193,7,0.1)",
                  border: "1px solid rgba(255,193,7,0.25)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M3 4l4-3 4 3M3 10l4 3 4-3" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* Drop */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "10px",
                height: "10px",
                borderRadius: "2px",
                background: "#FFC107",
              }} />
              <input
                type="text"
                placeholder="Drop location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          </div>

          {/* Date & Time */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>
            <div style={{ position: "relative" }}>
              <svg style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="12" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M5 1v4M11 1v4M1 7h14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ ...inputStyle, colorScheme: "dark" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div style={{ position: "relative" }}>
              <svg style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M8 4v4l3 2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ ...inputStyle, colorScheme: "dark" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          </div>

          {/* Ride type selector */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Choose ride type
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
              {RIDE_TYPES.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRide(r.id)}
                  style={{
                    background: selectedRide === r.id ? "rgba(255,193,7,0.15)" : "rgba(255,255,255,0.04)",
                    border: selectedRide === r.id ? "1px solid rgba(255,193,7,0.5)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "14px 8px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>{r.icon}</div>
                  <div style={{ color: selectedRide === r.id ? "#FFC107" : "white", fontSize: "13px", fontWeight: 700, marginBottom: "2px" }}>{r.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{r.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Fare estimate */}
          {pickup && drop && (
            <div style={{
              background: "rgba(255,193,7,0.06)",
              border: "1px solid rgba(255,193,7,0.2)",
              borderRadius: "12px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>Estimated fare</span>
              <span style={{ color: "#FFC107", fontWeight: 800, fontSize: "20px" }}>₹120 – ₹160</span>
            </div>
          )}

          {/* Submit */}
          <button
            style={{
              width: "100%",
              background: "#FFC107",
              color: "#0A0A0A",
              border: "none",
              borderRadius: "14px",
              padding: "18px",
              fontSize: "16px",
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: "0.01em",
              boxShadow: "0 0 32px rgba(255,193,7,0.3)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(255,193,7,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(255,193,7,0.3)";
            }}
          >
            Confirm Booking →
          </button>
        </div>
      </div>
    </section>
  );
}