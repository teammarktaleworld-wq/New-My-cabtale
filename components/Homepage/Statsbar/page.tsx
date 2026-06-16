"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 50000, display: "50K+", label: "Happy Riders", suffix: "" },
  { value: 4.9, display: "4.9", label: "Average Rating", suffix: "★" },
  { value: 200, display: "200+", label: "Cities Covered", suffix: "" },
  { value: 1000000, display: "1M+", label: "Trips Completed", suffix: "" },
  { value: 99, display: "99%", label: "On-time arrivals", suffix: "" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1A1400 0%, #0A0A0A 50%, #0D0800 100%)",
        borderTop: "1px solid rgba(255,193,7,0.12)",
        borderBottom: "1px solid rgba(255,193,7,0.12)",
        padding: "64px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "800px",
        height: "200px",
        background: "radial-gradient(ellipse, rgba(255,193,7,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "40px",
        position: "relative",
      }}>
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            }}
          >
            <div style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900,
              color: "#FFC107",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "8px",
            }}>
              {s.display}{s.suffix}
            </div>
            <div style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}