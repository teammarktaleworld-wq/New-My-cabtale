"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Cities", href: "#cities" },
  { label: "Safety", href: "#safety" },
  { label: "Drive With Us", href: "#drive" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 40px" : "20px 40px",
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,193,7,0.1)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          fontFamily: "'Inter','Helvetica Neue',sans-serif",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            background: "#FFC107",
            borderRadius: "8px",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg viewBox="0 0 24 18" width="22" height="16" fill="none">
              <path d="M3 13 L4.5 7 Q5.5 4 8 4 L16 4 Q18.5 4 19.5 7 L21 13 Q21 15 19 15 L5 15 Q3 15 3 13Z" fill="#0A0A0A" />
              <circle cx="7.5" cy="15.5" r="2.5" fill="#0A0A0A" stroke="#FFC107" strokeWidth="1" />
              <circle cx="16.5" cy="15.5" r="2.5" fill="#0A0A0A" stroke="#FFC107" strokeWidth="1" />
              <rect x="9" y="1" width="6" height="4" rx="1" fill="#0A0A0A" />
            </svg>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.03em" }}>
            Cab<span style={{ color: "#FFC107" }}>Tale</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="ct-desktop-nav">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFC107")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="#booking"
            style={{
              background: "#FFC107",
              color: "#0A0A0A",
              borderRadius: "100px",
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(255,193,7,0.3)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(255,193,7,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255,193,7,0.3)";
            }}
          >
            Book a Ride
          </Link>

          {/* Hamburger — shown on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "8px",
              cursor: "pointer",
              display: "none",
            }}
            className="ct-hamburger"
            aria-label="Toggle menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              {menuOpen ? (
                <path d="M1 1L17 13M17 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="0" y1="1" x2="18" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="7" x2="18" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="13" x2="18" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,193,7,0.15)",
          zIndex: 99,
          padding: "24px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontFamily: "'Inter','Helvetica Neue',sans-serif",
        }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingBottom: "16px",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#booking"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#FFC107",
              color: "#0A0A0A",
              borderRadius: "100px",
              padding: "14px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              marginTop: "4px",
            }}
          >
            Book a Ride →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .ct-desktop-nav { display: none !important; }
          .ct-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}