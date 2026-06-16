"use client";

import { useState } from "react";

const PERKS = [
  { icon: "💰", title: "Earn ₹25K–₹60K/month", desc: "Top drivers in metro cities earn over ₹60,000. Your effort directly determines your income." },
  { icon: "🕐", title: "Work your own hours", desc: "Go online when you want, go offline when you're done. No shifts, no schedules, no boss." },
  { icon: "📈", title: "Weekly payments", desc: "Earnings hit your bank account every Friday. No waiting, no holds, no surprises." },
  { icon: "🛡️", title: "Insurance & support", desc: "You're covered while on a trip. And if anything goes wrong, our driver support team is one call away." },
];

const STEPS = [
  { label: "Sign up", desc: "Fill in your details online — takes 5 minutes." },
  { label: "Upload documents", desc: "License, RC, insurance — we verify within 24 hours." },
  { label: "Complete orientation", desc: "A short online session on the app and safety protocols." },
  { label: "Start earning", desc: "Go online and your first ride request arrives within minutes." },
];

export default function DriveWithUs() {
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "white",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "'Inter','Helvetica Neue',sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="drive"
      style={{
        background: "#080808",
        padding: "100px 40px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            Drive with us
          </span>
          <h2 style={{
            color: "white",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
          }}>
            Turn your car into a career
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "460px", margin: "0 auto", lineHeight: 1.65 }}>
            Join 10,000+ CabTale drivers across India. Set your own hours and earn on your terms.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          {/* Left: perks + steps */}
          <div>
            {/* Perks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
              {PERKS.map((p, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "20px",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,193,7,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <span style={{ fontSize: "28px", flexShrink: 0, lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{p.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Onboarding steps */}
            <div>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Getting started
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                {STEPS.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px" }}>
                    {/* Timeline */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(255,193,7,0.15)",
                        border: "1px solid rgba(255,193,7,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFC107",
                        fontSize: "12px",
                        fontWeight: 800,
                        flexShrink: 0,
                      }}>
                        {i + 1}
                      </div>
                      {i < STEPS.length - 1 && (
                        <div style={{ width: "1px", flex: 1, background: "rgba(255,193,7,0.15)", minHeight: "24px", marginTop: "4px", marginBottom: "4px" }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < STEPS.length - 1 ? "20px" : "0", paddingTop: "4px" }}>
                      <div style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>{s.label}</div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: interest form */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "24px",
            padding: "40px",
            position: "sticky",
            top: "100px",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ color: "white", fontWeight: 800, fontSize: "22px", margin: "0 0 12px" }}>You're on the list!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                  We'll reach out on your number within 24 hours to get you set up.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ color: "white", fontSize: "22px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                  Register your interest
                </h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: "0 0 28px", lineHeight: 1.5 }}>
                  Leave your details and our driver onboarding team will call you within 24 hours.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                      Your city
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (form.name && form.phone && form.city) setSubmitted(true);
                    }}
                    style={{
                      background: "#FFC107",
                      color: "#0A0A0A",
                      border: "none",
                      borderRadius: "12px",
                      padding: "16px",
                      fontSize: "15px",
                      fontWeight: 800,
                      cursor: "pointer",
                      marginTop: "8px",
                      boxShadow: "0 0 24px rgba(255,193,7,0.25)",
                      transition: "transform 0.15s, box-shadow 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255,193,7,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,193,7,0.25)";
                    }}
                  >
                    Start earning with CabTale →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #drive .ct-drive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}