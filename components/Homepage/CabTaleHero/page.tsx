"use client";

import { useEffect, useRef, useState } from "react";

export default function CabTaleHero() {
  const [loaded, setLoaded] = useState(false);
  const roadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Ambient yellow glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(255,193,7,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Moving road dashes */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: 0,
          right: 0,
          height: "2px",
          display: "flex",
          gap: "32px",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "60px",
              height: "2px",
              background: "rgba(255,193,7,0.35)",
              animation: `dashMove 2s linear infinite`,
              animationDelay: `${i * -0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
          zIndex: 1,
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,193,7,0.1)",
            border: "1px solid rgba(255,193,7,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "28px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FFC107", display: "inline-block" }}
          />
          <span
            style={{
              color: "#FFC107",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Now available in your city
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            marginBottom: "36px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          {/* Inline SVG recreation of the CabTale wordmark */}
          <svg
            viewBox="0 0 420 120"
            width="320"
            height="96"
            style={{ overflow: "visible" }}
          >
            {/* Taxi roof light */}
            <rect x="170" y="4" width="80" height="22" rx="4" fill="#FFC107" />
            {/* Checkerboard pattern on roof */}
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={i}
                x={170 + i * 10}
                y={i % 2 === 0 ? 4 : 14}
                width="10"
                height="10"
                fill={i % 2 === 0 ? "#1A1A1A" : "#FFC107"}
              />
            ))}

            {/* Car body */}
            <path
              d="M40 80 Q30 80 26 70 L38 40 Q44 26 60 26 L360 26 Q376 26 382 40 L394 70 Q390 80 380 80 Z"
              fill="#FFC107"
            />

            {/* CAB text (white) */}
            <text
              x="80"
              y="72"
              fontFamily="'Arial Black', 'Impact', sans-serif"
              fontWeight="900"
              fontSize="56"
              fill="white"
              letterSpacing="-2"
            >
              CAB
            </text>

            {/* TALE text (black) */}
            <text
              x="222"
              y="72"
              fontFamily="'Arial Black', 'Impact', sans-serif"
              fontWeight="900"
              fontSize="56"
              fill="#1A1A1A"
              letterSpacing="-2"
            >
              TALE
            </text>

            {/* Wheels */}
            <circle cx="100" cy="90" r="20" fill="#1A1A1A" />
            <circle cx="100" cy="90" r="10" fill="#555" />
            <circle cx="320" cy="90" r="20" fill="#1A1A1A" />
            <circle cx="320" cy="90" r="10" fill="#555" />

            {/* Road line under car */}
            <line x1="20" y1="110" x2="400" y2="110" stroke="#333" strokeWidth="2" />
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1={60 + i * 60}
                y1="110"
                x2={90 + i * 60}
                y2="110"
                stroke="#FFC107"
                strokeWidth="2"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,193,7,0.7)",
            marginBottom: "48px",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          Every journey has a Tale
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#FFFFFF",
            margin: "0 0 20px",
            maxWidth: "700px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          Rides you can{" "}
          <span
            style={{
              color: "#FFC107",
              position: "relative",
              display: "inline-block",
            }}
          >
            trust.
            <svg
              viewBox="0 0 120 8"
              width="100%"
              style={{
                position: "absolute",
                bottom: "-4px",
                left: 0,
                opacity: 0.6,
              }}
            >
              <path
                d="M2 6 Q30 2 60 5 Q90 8 118 4"
                stroke="#FFC107"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Stories worth telling.
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "44px",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.7s ease 0.35s",
          }}
        >
          Book a cab in seconds — safe drivers, transparent fares, and a
          journey that's more than just getting from A to B.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
          }}
        >
          <button
            style={{
              background: "#FFC107",
              color: "#0A0A0A",
              border: "none",
              borderRadius: "100px",
              padding: "16px 36px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 0 32px rgba(255,193,7,0.35)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 48px rgba(255,193,7,0.55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 32px rgba(255,193,7,0.35)";
            }}
          >
            Book a Ride →
          </button>
          <button
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "100px",
              padding: "16px 32px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "border-color 0.15s ease, color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,193,7,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color = "#FFC107";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.75)";
            }}
          >
            Become a Driver
          </button>
        </div>

        {/* Trust bar */}
        <div
          style={{
            marginTop: "64px",
            display: "flex",
            gap: "48px",
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: loaded ? 0.6 : 0,
            transition: "opacity 0.7s ease 0.55s",
          }}
        >
          {[
            { value: "50K+", label: "Happy Riders" },
            { value: "4.9★", label: "Avg Rating" },
            { value: "200+", label: "Cities" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#FFC107",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "2px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.35,
          animation: "fadeUpDown 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: "11px", color: "white", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 1v14M2 10l6 7 6-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes dashMove {
          from { transform: translateX(0); }
          to { transform: translateX(-92px); }
        }
        @keyframes fadeUpDown {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.35; }
          50% { transform: translateX(-50%) translateY(5px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}