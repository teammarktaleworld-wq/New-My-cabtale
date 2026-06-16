"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    avatar: "PS",
    color: "#FFC107",
    title: "The driver told me about the best chai spot in the city",
    body: "I was visiting for work and my CabTale driver ended up giving me a full local guide. Clean car, on-time, and a genuine conversation. That's a tale I'll tell.",
    trip: "BKC → Andheri",
  },
  {
    name: "Rohan Mehta",
    city: "Bangalore",
    rating: 5,
    avatar: "RM",
    color: "#4ADE80",
    title: "Used it every day for 3 months — never a bad ride",
    body: "I commute from Whitefield to Koramangala daily. CabTale is the only app that's consistently on-time and the fare estimate is always spot on. No drama.",
    trip: "Whitefield → Koramangala",
  },
  {
    name: "Ananya Iyer",
    city: "Chennai",
    rating: 5,
    avatar: "AI",
    color: "#A78BFA",
    title: "The SOS feature gave my mum peace of mind",
    body: "Late night ride back from a concert. My mother could see exactly where I was on the map. The driver was brilliant. I felt completely safe.",
    trip: "T Nagar → Adyar",
  },
  {
    name: "Vikram Nair",
    city: "Hyderabad",
    rating: 5,
    avatar: "VN",
    color: "#FB923C",
    title: "Booked an SUV for the family trip — flawless",
    body: "Six of us, luggage, and a 200km road trip. The SUV was spotless, the driver was knowledgeable about stops along the route. Highly recommended for family travel.",
    trip: "Hyderabad → Warangal",
  },
  {
    name: "Deepika Rao",
    city: "Pune",
    rating: 5,
    avatar: "DR",
    color: "#38BDF8",
    title: "Transparent pricing — exactly what I was quoted",
    body: "Other apps always pull a surprise at the end. CabTale showed ₹142 when I booked and I paid ₹142. That kind of honesty keeps me coming back.",
    trip: "Koregaon Park → Hinjewadi",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  return (
    <section
      id="stories"
      style={{
        background: "#080808",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
            Rider Tales
          </span>
          <h2 style={{
            color: "white",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
          }}>
            Every journey has a story
          </h2>
        </div>

        {/* Main card */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "24px",
          padding: "48px",
          position: "relative",
          minHeight: "280px",
        }}>
          {/* Quote mark */}
          <div style={{
            position: "absolute",
            top: "28px",
            right: "36px",
            fontSize: "96px",
            lineHeight: 1,
            color: "rgba(255,193,7,0.08)",
            fontFamily: "Georgia, serif",
            userSelect: "none",
          }}>
            "
          </div>

          {/* Stars */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} style={{ color: "#FFC107", fontSize: "16px" }}>★</span>
            ))}
          </div>

          {/* Title */}
          <h3 style={{
            color: "white",
            fontSize: "22px",
            fontWeight: 700,
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
            maxWidth: "580px",
          }}>
            "{t.title}"
          </h3>

          {/* Body */}
          <p style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "16px",
            lineHeight: 1.7,
            margin: "0 0 36px",
            maxWidth: "600px",
          }}>
            {t.body}
          </p>

          {/* Author row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: `${t.color}22`,
                border: `2px solid ${t.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 800,
                color: t.color,
              }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "15px" }}>{t.name}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>{t.city}</div>
              </div>
            </div>

            {/* Trip badge */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              padding: "6px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80" }} />
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>{t.trip}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "32px" }}>
          {/* Dots */}
          <div style={{ display: "flex", gap: "8px" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "100px",
                  background: i === active ? "#FFC107" : "rgba(255,255,255,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,193,7,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,193,7,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {i === 0 ? (
                    <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}