"use client";

import { useState } from "react";

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

export default function CityGrid() {
  const [search, setSearch] = useState("");

  const filtered = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="cities"
      style={{
        background: "#0A0A0A",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            Our cities
          </span>
          <h2 style={{
            color: "white",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
          }}>
            Available in 200+ cities
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", margin: "0 0 32px" }}>
            And growing every month. Find your city below.
          </p>

          {/* Search */}
          <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
            <svg
              style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search city or state..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px",
                padding: "14px 16px 14px 44px",
                color: "white",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "'Inter','Helvetica Neue',sans-serif",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "14px",
        }}>
          {filtered.map((city) => (
            <div
              key={city.name}
              style={{
                background: city.active ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "20px",
                cursor: city.active ? "pointer" : "default",
                transition: "all 0.2s",
                opacity: city.active ? 1 : 0.5,
              }}
              onMouseEnter={(e) => {
                if (!city.active) return;
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,193,7,0.3)";
                el.style.background = "rgba(255,193,7,0.06)";
              }}
              onMouseLeave={(e) => {
                if (!city.active) return;
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>{city.name}</span>
                {city.active ? (
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
                ) : (
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                )}
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginBottom: "6px" }}>{city.state}</div>
              {city.active && (
                <div style={{ color: "#FFC107", fontSize: "12px", fontWeight: 600 }}>{city.rides} rides/month</div>
              )}
              {!city.active && (
                <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>Coming soon</div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px", color: "rgba(255,255,255,0.3)", fontSize: "16px" }}>
            No cities match "{search}" yet — but we're expanding fast.
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px", marginBottom: "16px" }}>
            Don't see your city? Request it and we'll prioritize expansion there.
          </p>
          <button style={{
            background: "transparent",
            border: "1px solid rgba(255,193,7,0.3)",
            borderRadius: "100px",
            padding: "12px 28px",
            color: "#FFC107",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,193,7,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Request your city →
          </button>
        </div>
      </div>
    </section>
  );
}