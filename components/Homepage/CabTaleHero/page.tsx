









"use client";

import React, { useState, useEffect } from "react";

// --- 7 Premium Indian Heritage SVG Icons ---
const MONUMENTS = [
  {
    name: "Taj Mahal",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        {/* Sky glow backdrop inside icon */}
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Main Platform base */}
        <rect x="18" y="76" width="64" height="6" fill="#D1D5DB" />
        <rect x="20" y="72" width="60" height="4" fill="#E5E7EB" />
        {/* Main Building Block */}
        <rect x="28" y="46" width="44" height="26" fill="#F8FAFC" rx="1" />
        <rect x="32" y="48" width="36" height="24" fill="#E2E8F0" rx="1" />
        {/* Center Grand Archway */}
        <path d="M 40 72 L 40 54 C 40 50, 60 50, 60 54 L 60 72 Z" fill="#1E293B" />
        <path d="M 43 72 L 43 56 C 43 53, 57 53, 57 56 L 57 72 Z" fill="#0F172A" />
        {/* Side Arches (Left & Right) */}
        <path d="M 31 58 L 31 50 C 31 48, 37 48, 37 50 L 37 58 Z" fill="#334155" />
        <path d="M 31 70 L 31 62 C 31 60, 37 60, 37 62 L 37 70 Z" fill="#334155" />
        <path d="M 63 58 L 63 50 C 63 48, 69 48, 69 50 L 69 58 Z" fill="#334155" />
        <path d="M 63 70 L 63 62 C 63 60, 69 60, 69 62 L 69 70 Z" fill="#334155" />
        {/* Main Center Dome */}
        <path d="M 38 46 C 38 24, 62 24, 62 46 Z" fill="url(#goldGrad)" />
        <path d="M 42 46 C 42 28, 58 28, 58 46 Z" fill="#FFFBEB" opacity="0.8" />
        <path d="M 50 25 L 50 16" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="15" r="1.5" fill="#FFD700" />
        {/* Side Small Domes */}
        <path d="M 31 46 C 31 38, 37 38, 37 46 Z" fill="url(#goldGrad)" />
        <path d="M 63 46 C 63 38, 69 38, 69 46 Z" fill="url(#goldGrad)" />
        {/* 4 Corner Minarets */}
        <g fill="#F1F5F9">
          {/* Outer Left Minaret */}
          <rect x="12" y="32" width="4" height="44" />
          <rect x="11" y="72" width="6" height="4" fill="#CBD5E1" />
          <path d="M 11 32 C 11 26, 17 26, 17 32 Z" fill="url(#goldGrad)" />
          {/* Inner Left Minaret */}
          <rect x="22" y="38" width="3" height="34" />
          <path d="M 21 38 C 21 33, 26 33, 26 38 Z" fill="url(#goldGrad)" />
          {/* Inner Right Minaret */}
          <rect x="75" y="38" width="3" height="34" />
          <path d="M 74 38 C 74 33, 79 33, 79 38 Z" fill="url(#goldGrad)" />
          {/* Outer Right Minaret */}
          <rect x="84" y="32" width="4" height="44" />
          <rect x="83" y="72" width="6" height="4" fill="#CBD5E1" />
          <path d="M 83 32 C 83 26, 89 26, 89 32 Z" fill="url(#goldGrad)" />
        </g>
      </svg>
    ),
  },
  {
    name: "India Gate",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Heavy Base steps */}
        <rect x="15" y="80" width="70" height="5" fill="#94A3B8" />
        <rect x="20" y="76" width="60" height="4" fill="#CBD5E1" />
        {/* Side Main Pylons */}
        <path d="M 25 76 L 30 28 L 42 28 L 42 76 Z" fill="#E2E8F0" />
        <path d="M 75 76 L 70 28 L 58 28 L 58 76 Z" fill="#E2E8F0" />
        {/* Inner Arch shadows */}
        <path d="M 30 76 L 33 32 L 42 32 L 42 76 Z" fill="#CBD5E1" opacity="0.7" />
        <path d="M 70 76 L 67 32 L 58 32 L 58 76 Z" fill="#CBD5E1" opacity="0.7" />
        {/* Central Arch Gate */}
        <path d="M 42 76 L 42 46 C 42 38, 58 38, 58 46 L 58 76 Z" fill="#0F172A" />
        <path d="M 42 46 A 8 8 0 0 1 58 46" stroke="#94A3B8" strokeWidth="2" fill="none" />
        {/* Top Cornice & Attic Structure */}
        <rect x="26" y="24" width="48" height="4" fill="url(#goldGrad)" />
        <rect x="28" y="18" width="44" height="6" fill="#F1F5F9" />
        <rect x="32" y="14" width="36" height="4" fill="url(#goldGrad)" />
        {/* Architectural relief molding lines */}
        <line x1="29" y1="36" x2="42" y2="36" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="58" y1="36" x2="71" y2="36" stroke="#94A3B8" strokeWidth="1.5" />
        {/* Eternal Flame / Amar Jawan Jyoti Silhouette base */}
        <rect x="47" y="70" width="6" height="6" fill="#64748B" />
        <circle cx="50" cy="67" r="2" fill="#F59E0B" className="animate-pulse" />
      </svg>
    ),
  },
  {
    name: "Charminar",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Foundation Base */}
        <rect x="24" y="78" width="52" height="4" fill="#475569" />
        {/* Central Complex Structure */}
        <rect x="28" y="42" width="44" height="36" fill="#F1F5F9" />
        {/* Main Central Arches (Crossroad passages) */}
        <path d="M 36 78 L 36 54 C 36 44, 64 44, 64 54 L 64 78 Z" fill="#0F172A" />
        <path d="M 40 78 L 40 56 C 40 48, 60 48, 60 56 L 60 78 Z" fill="#1E293B" />
        {/* Upper Floor Balconies & Windows */}
        <rect x="26" y="38" width="48" height="4" fill="url(#goldGrad)" />
        <rect x="28" y="32" width="44" height="6" fill="#E2E8F0" />
        {/* Small decorative upper arcade slots */}
        <circle cx="35" cy="35" r="1.5" fill="#334155" />
        <circle cx="42" cy="35" r="1.5" fill="#334155" />
        <circle cx="50" cy="35" r="1.5" fill="#334155" />
        <circle cx="58" cy="35" r="1.5" fill="#334155" />
        <circle cx="65" cy="35" r="1.5" fill="#334155" />
        {/* Four Grand Minarets */}
        {/* Left Minaret */}
        <rect x="20" y="24" width="6" height="54" fill="#E2E8F0" />
        <rect x="19" y="48" width="8" height="2" fill="url(#goldGrad)" />
        <rect x="19" y="32" width="8" height="2" fill="url(#goldGrad)" />
        <path d="M 19 24 C 19 16, 27 16, 27 24 Z" fill="url(#goldGrad)" />
        {/* Right Minaret */}
        <rect x="74" y="24" width="6" height="54" fill="#E2E8F0" />
        <rect x="73" y="48" width="8" height="2" fill="url(#goldGrad)" />
        <rect x="73" y="32" width="8" height="2" fill="url(#goldGrad)" />
        <path d="M 73 24 C 73 16, 81 16, 81 24 Z" fill="url(#goldGrad)" />
        {/* Delicate Top Spires */}
        <line x1="23" y1="16" x2="23" y2="10" stroke="#D97706" strokeWidth="1" />
        <line x1="77" y1="16" x2="77" y2="10" stroke="#D97706" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Hawa Mahal",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Solid Base Platform */}
        <rect x="10" y="82" width="80" height="4" fill="#334155" />
        {/* Multi-Tiered Honeycomb Grid Matrix */}
        {/* Tier 1 (Bottom) */}
        <g fill="url(#goldGrad)" stroke="#B45309" strokeWidth="0.5">
          <path d="M 16 82 L 16 66 C 16 62, 26 62, 26 66 L 26 82 Z" />
          <path d="M 30 82 L 30 64 C 30 58, 42 58, 42 64 L 42 82 Z" />
          <path d="M 44 82 L 44 62 C 44 54, 56 54, 56 62 L 56 82 Z" />
          <path d="M 58 82 L 58 64 C 58 58, 70 58, 70 64 L 70 82 Z" />
          <path d="M 74 82 L 74 66 C 74 62, 84 62, 84 66 L 84 82 Z" />
        </g>
        {/* Tier 2 (Middle) */}
        <g fill="url(#goldGrad)" stroke="#B45309" strokeWidth="0.5">
          <path d="M 22 62 L 22 46 C 22 42, 34 42, 34 46 L 34 62 Z" />
          <path d="M 37 62 L 37 42 C 37 36, 49 36, 49 42 L 49 62 Z" />
          <path d="M 51 62 L 51 42 C 51 36, 63 36, 63 42 L 63 62 Z" />
          <path d="M 66 62 L 66 46 C 66 42, 78 42, 78 46 L 78 62 Z" />
        </g>
        {/* Tier 3 (Top Premium Crown Windows) */}
        <g fill="url(#goldGrad)" stroke="#B45309" strokeWidth="0.5">
          <path d="M 30 42 L 30 28 C 30 24, 42 24, 42 28 L 42 42 Z" />
          <path d="M 44 42 L 44 22 C 44 14, 56 14, 56 22 L 56 42 Z" />
          <path d="M 58 42 L 58 28 C 58 24, 70 24, 70 28 L 70 42 Z" />
        </g>
        {/* Intricate Window Jharokha Cutouts (Dark filigree windows) */}
        <g fill="#1E293B">
          <rect x="49" y="26" width="2" height="4" rx="0.5" />
          <rect x="35" y="32" width="2" height="4" rx="0.5" />
          <rect x="63" y="32" width="2" height="4" rx="0.5" />
          <rect x="42" y="48" width="2.5" height="5" rx="0.5" />
          <rect x="55.5" y="48" width="2.5" height="5" rx="0.5" />
          <rect x="27" y="50" width="2" height="4" rx="0.5" />
          <rect x="71" y="50" width="2" height="4" rx="0.5" />
        </g>
        {/* Top Kalash/Spires */}
        <path d="M 50 14 L 50 8" stroke="#D97706" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Gateway of India",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Sea Wall Harbor Steps */}
        <rect x="10" y="80" width="80" height="6" fill="#475569" />
        <rect x="14" y="76" width="72" height="4" fill="#64748B" />
        {/* Main Basalt Arch Frame */}
        <rect x="20" y="32" width="60" height="44" fill="#CBD5E1" />
        {/* Iconic Massive Indo-Saracenic Central Vault */}
        <path d="M 34 76 L 34 48 C 34 36, 66 36, 66 48 L 66 76 Z" fill="#0F172A" />
        <path d="M 37 76 L 37 50 C 37 40, 63 40, 63 50 L 63 76 Z" fill="#1E293B" />
        {/* Side Lateral Wings with perforated window slots */}
        <g fill="#475569">
          <path d="M 24 68 L 24 44 C 24 40, 30 40, 30 44 L 30 68 Z" />
          <path d="M 70 68 L 70 44 C 70 40, 76 40, 76 44 L 76 68 Z" />
        </g>
        {/* Four Distinct End Turrets / Minarets flanking the structure */}
        <rect x="17" y="24" width="4" height="52" fill="#94A3B8" />
        <path d="M 16 24 L 22 24 L 19 18 Z" fill="url(#goldGrad)" />
        <rect x="30" y="20" width="4" height="12" fill="#94A3B8" />
        <path d="M 29 20 L 35 20 L 32 15 Z" fill="url(#goldGrad)" />
        <rect x="66" y="20" width="4" height="12" fill="#94A3B8" />
        <path d="M 65 20 L 71 20 L 68 15 Z" fill="url(#goldGrad)" />
        <rect x="79" y="24" width="4" height="52" fill="#94A3B8" />
        <path d="M 78 24 L 84 24 L 81 18 Z" fill="url(#goldGrad)" />
        {/* Upper Frieze Panel Layout */}
        <rect x="20" y="28" width="60" height="4" fill="url(#goldGrad)" />
      </svg>
    ),
  },
  {
    name: "Lotus Temple",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Surrounding Pool Base Ring */}
        <ellipse cx="50" cy="78" rx="38" ry="10" fill="#0284C7" opacity="0.6" />
        <ellipse cx="50" cy="76" rx="34" ry="8" fill="#38BDF8" />
        {/* Outer Ring of Petals */}
        <path d="M 18 70 C 25 74, 38 50, 50 42 C 62 50, 75 74, 82 70 C 70 82, 30 82, 18 70 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.5" />
        {/* Intermediate Ring of Petals */}
        <path d="M 26 64 C 32 60, 42 40, 50 30 C 58 40, 68 60, 74 64 C 64 74, 36 74, 26 64 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" />
        {/* Inner Premium Sacred Lotus Core Petals */}
        <path d="M 34 58 C 38 45, 45 25, 50 16 C 55 25, 62 45, 66 58 C 58 66, 42 66, 34 58 Z" fill="url(#goldGrad)" />
        {/* Shell Shading Crest lines to build realistic 3D depth */}
        <path d="M 50 16 C 46 32, 44 50, 46 62" stroke="#FFFBEB" strokeWidth="0.75" opacity="0.7" strokeLinecap="round" />
        <path d="M 50 16 C 54 32, 56 50, 54 62" stroke="#B45309" strokeWidth="0.75" opacity="0.4" strokeLinecap="round" />
        {/* Basement Entrance Platform */}
        <polygon points="40,76 50,66 60,76" fill="#475569" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Golden Temple",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
        <circle cx="50" cy="50" r="45" fill="url(#metallicBlue)" opacity="0.05" />
        {/* Amrit Sarovar (Holy Tank Basin Water) */}
        <rect x="8" y="76" width="84" height="12" fill="#0284C7" rx="2" />
        <line x1="12" y1="82" x2="88" y2="82" stroke="#38BDF8" strokeWidth="1" strokeDasharray="8 4" />
        {/* White Marble Lower Level Platform */}
        <rect x="22" y="56" width="56" height="20" fill="#F8FAFC" rx="1" />
        {/* Lower floor arcades */}
        <g fill="#334155">
          <rect x="28" y="64" width="6" height="12" rx="2" />
          <rect x="38" y="64" width="6" height="12" rx="2" />
          <rect x="47" y="62" width="6" height="14" rx="2" fill="#0F172A" /> {/* Center main door */}
          <rect x="56" y="64" width="6" height="12" rx="2" />
          <rect x="66" y="64" width="6" height="12" rx="2" />
        </g>
        {/* Premium Gold Plated Upper Sanctuary Tiers */}
        <rect x="20" y="52" width="60" height="4" fill="url(#goldGrad)" rx="0.5" />
        <rect x="24" y="36" width="52" height="16" fill="url(#goldGrad)" />
        {/* Royal Window Grids on Gold Foil */}
        <g fill="#B45309" opacity="0.8">
          <circle cx="30" cy="44" r="2" />
          <circle cx="38" cy="44" r="2" />
          <circle cx="50" cy="44" r="2.5" />
          <circle cx="62" cy="44" r="2" />
          <circle cx="70" cy="44" r="2" />
        </g>
        {/* Signature Central Golden Fluted Dome */}
        <path d="M 36 36 C 36 18, 64 18, 64 36 Z" fill="url(#goldGrad)" />
        {/* Side Chhatri Domes */}
        <path d="M 24 36 C 24 30, 30 30, 30 36 Z" fill="url(#goldGrad)" />
        <path d="M 70 36 C 70 30, 76 30, 76 36 Z" fill="url(#goldGrad)" />
        {/* Holy Chhatri Top Spire / Kalash flag emblem */}
        <line x1="50" y1="20" x2="50" y2="10" stroke="#FFD700" strokeWidth="1.5" />
        <polygon points="50,10 56,13 50,16" fill="#D97706" />
      </svg>
    ),
  },
];

// --- Hand-drawn Rajasthan dusk skyline used as the full-hero background ---
// Original silhouette artwork (domes + chhatris + minarets), not a photo —
// keeps the hero copyright-safe and matches the existing gold/icon brand system.
function HeritageSkylineLayer({ tone = "far" }) {
  const isNear = tone === "near";

  const minarets = [50, 280, 470, 650, 880, 1080];

  const Skyline = () => (
    <svg
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      className={isNear ? "text-amber-900/80" : "text-rose-300/70"}
      style={{ width: "600px", height: "240px", flexShrink: 0 }}
    >
      {/* rolling dome / chhatri skyline */}
      <path
        d="M0,240 L0,180 Q15,160 30,160 L60,160 q20,-90 40,-90 q20,0 40,90 L160,160 L200,160 q10,-35 20,-35 q10,0 20,35 L260,160 L320,160 q20,-90 40,-90 q20,0 40,90 L420,160 L460,160 q10,-35 20,-35 q10,0 20,35 L520,160 L580,160 q25,-110 50,-110 q25,0 50,110 L700,160 L740,160 q10,-35 20,-35 q10,0 20,35 L800,160 L860,160 q20,-90 40,-90 q20,0 40,90 L960,160 L1000,160 q10,-35 20,-35 q10,0 20,35 L1060,160 L1120,160 q15,-70 30,-70 q15,0 30,70 L1200,160 L1200,240 Z"
        fill="currentColor"
      />
      {/* slender minarets rising above the skyline */}
      {minarets.map((x, i) => {
        const h = 80 + (i % 3) * 25;
        const baseY = 160;
        return (
          <g key={x}>
            <rect x={x - 3.5} y={baseY - h} width="7" height={h} fill="currentColor" />
            <path
              d={`M${x - 8},${baseY - h} Q${x},${baseY - h - 16} ${x + 8},${baseY - h} Z`}
              fill="currentColor"
            />
            {isNear && (
              <circle cx={x} cy={baseY - h - 16} r="2" fill="#FFD700" opacity="0.7" />
            )}
          </g>
        );
      })}
    </svg>
  );

  return (
    <div className="flex w-[200%]">
      <Skyline />
      <Skyline />
    </div>
  );
}

// --- Premium realistic sedan illustration ---
// Side-profile sedan with smooth body curves, tinted glass, alloy wheels,
// LED-style lighting and a glowing roof taxi sign. `scene` controls whether
// the lights read as "parked" or "in motion" (brighter brake glow, headlight beam).
function PremiumSedan({ rotation = 0, scene = "booking" }) {
  const isMoving = scene === "arriving" || scene === "departing" || scene === "boarding";
  const wheels = [
    { cx: 112, cy: 160 },
    { cx: 308, cy: 160 },
  ];

  return (
    <svg
      width="420"
      height="200"
      viewBox="0 0 420 200"
      fill="none"
      className="relative z-10 filter drop-shadow-[0_35px_30px_rgba(11,91,163,0.3)]"
    >
      {/* ground contact shadow */}
      <ellipse cx="210" cy="186" rx="168" ry="13" fill="#0F172A" opacity="0.22" />

      {/* wheels (drawn first so the body's fenders tuck over the top of them) */}
      {wheels.map((w) => (
        <g key={w.cx}>
          <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${w.cx}px ${w.cy}px` }}>
            <circle cx={w.cx} cy={w.cy} r="32" fill="#15181F" />
            <circle cx={w.cx} cy={w.cy} r="21" fill="url(#chromeRim)" />
            <circle cx={w.cx} cy={w.cy} r="14" fill="#1E293B" />
            {/* brake caliper glimpsed behind the spokes */}
            <rect x={w.cx - 4} y={w.cy - 9} width="8" height="10" rx="2" fill="#DC2626" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1={w.cx}
                y1={w.cy}
                x2={w.cx + 18 * Math.cos((angle * Math.PI) / 180)}
                y2={w.cy + 18 * Math.sin((angle * Math.PI) / 180)}
                stroke="#CBD5E1"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            ))}
            <circle cx={w.cx} cy={w.cy} r="5" fill="#0F172A" />
          </g>
          {/* fixed chrome glint, stays put regardless of wheel spin */}
          <path
            d={`M${w.cx - 16},${w.cy - 12} A 20 20 0 0 1 ${w.cx + 4},${w.cy - 22}`}
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
            fill="none"
          />
        </g>
      ))}

      {/* main body shell */}
      <path
        d="M40,152 C40,138 46,124 56,116 C66,108 80,102 96,100 L128,98 C140,80 156,68 180,64 C202,60 234,60 256,64 C278,68 292,80 300,98 L334,100 C350,102 362,112 368,128 C372,138 372,146 368,152 L368,153 L40,153 Z"
        fill="url(#carPaint)"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      {/* roofline gloss highlight */}
      <path
        d="M150,66 C190,58 248,58 282,68 C260,64 196,64 150,70 Z"
        fill="url(#carPaintShine)"
        opacity="0.8"
      />

      {/* lower two-tone rocker panel + gold pinstripe (brand livery) */}
      <path d="M44,136 L364,136 L368,152 L40,152 Z" fill="#0F172A" />
      <rect x="42" y="135" width="324" height="3" fill="url(#goldGrad)" />

      {/* glass: windshield, cabin, rear windshield */}
      <path d="M130,96 L180,68 L188,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
      <path d="M194,98 L189,68 L268,66 L274,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
      <path d="M280,98 L272,68 L298,76 L302,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
      {/* B-pillar accent */}
      <rect x="229" y="66" width="4" height="32" fill="#0F172A" />
      {/* glass reflection streak */}
      <path d="M196,96 L206,70 L214,70 L206,96 Z" fill="#FFFFFF" opacity="0.35" />

      {/* door seams */}
      <path d="M196,100 L192,150" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7" />
      <path d="M276,100 L280,150" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7" />

      {/* side mirror */}
      <path d="M270,92 C278,90 282,94 280,99 C276,101 270,99 268,95 Z" fill="#0F172A" />

      {/* door handles */}
      <rect x="214" y="106" width="16" height="4" rx="2" fill="#94A3B8" />
      <rect x="294" y="108" width="14" height="4" rx="2" fill="#94A3B8" />

      {/* taillight cluster + glow — trailing end (left), brighter while in motion */}
      <path d="M42,118 C47,112 56,112 60,118 C56,124 47,124 42,119 Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.5" />
      <circle cx="36" cy="119" r={isMoving ? 16 : 9} fill="url(#taillightGlow)" opacity={isMoving ? 0.9 : 0.45} className="transition-all duration-500" />

      {/* headlight cluster + beam — leading end (right), beam only while in motion */}
      <path d="M366,118 C360,113 350,112 346,118 C350,124 360,125 366,121 Z" fill="#FDFDF8" stroke="#CBD5E1" strokeWidth="0.5" />
      <rect x="352" y="123" width="12" height="3" rx="1.5" fill="#FBBF24" />
      {isMoving && (
        <path d="M368,118 L416,104 L416,134 L368,122 Z" fill="url(#headlightGlow)" opacity="0.8" />
      )}

      {/* roof-mounted glowing taxi sign */}
      <circle cx="218" cy="46" r="22" fill="url(#signGlowGrad)" opacity="0.7" className="animate-[signGlow_2.6s_ease-in-out_infinite]" />
      <rect x="198" y="38" width="40" height="16" rx="4" fill="url(#goldGrad)" stroke="#92400E" strokeWidth="1" />
      <text x="218" y="49" fontSize="9" fontWeight="900" fill="#1F2937" textAnchor="middle" letterSpacing="0.5">
        TAXI
      </text>
      <rect x="214" y="54" width="8" height="10" fill="#94A3B8" />
    </svg>
  );
}

export default function CabTalePremiumHero() {
  const [scene, setScene] = useState("booking");
  const [rotation, setRotation] = useState(0);

  // Main Story Sequence Animation
  useEffect(() => {
    const runAnimation = () => {
      setScene("booking");
      setTimeout(() => setScene("arriving"), 3500);
      setTimeout(() => setScene("boarding"), 6000);
      setTimeout(() => setScene("departing"), 8000);
    };

    runAnimation();
    const interval = setInterval(runAnimation, 11000);
    return () => clearInterval(interval);
  }, []);

  // Wheel rotation animation
  useEffect(() => {
    if (scene !== "booking") {
      const timer = setInterval(() => setRotation((prev) => (prev + 15) % 360), 30);
      return () => clearInterval(timer);
    }
  }, [scene]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-[5%] overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-amber-50/40"
      style={{
        fontFamily: "'Poppins', 'Inter', sans-serif",
      }}
    >
      {/* SVG Definitions for Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="metallicBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A8E8" />
            <stop offset="100%" stopColor="#0B5BA3" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
          {/* Premium sedan paint, glass, chrome & light gradients */}
          <linearGradient id="carPaint" x1="10%" y1="0%" x2="65%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#D9E2EC" />
          </linearGradient>
          <linearGradient id="carPaintShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="windowTint" x1="0%" y1="0%" x2="60%" y2="100%">
            <stop offset="0%" stopColor="#CFEAFB" />
            <stop offset="45%" stopColor="#7DB7DE" />
            <stop offset="100%" stopColor="#1E2A3D" />
          </linearGradient>
          <linearGradient id="chromeRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="45%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <radialGradient id="headlightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFDE7" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="taillightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="signGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFC93C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFC93C" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* --- FULL-HERO HERITAGE DUSK BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Rajasthan dusk sky wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-rose-50 to-amber-100/70" />
        {/* low sun glow near the horizon */}
        <div className="absolute bottom-[8%] right-[18%] w-[440px] h-[440px] bg-[radial-gradient(circle,rgba(255,176,55,0.35)_0%,transparent_70%)] blur-2xl" />
        {/* far skyline — hazy, slow drift */}
        <div
          className="absolute bottom-0 left-0 opacity-[0.22] blur-[1px]"
          style={{ animation: "skylineDriftSlow 90s linear infinite" }}
        >
          <HeritageSkylineLayer tone="far" />
        </div>
        {/* near skyline — crisper, gold sunset glints on minaret tips */}
        <div
          className="absolute bottom-0 left-0 opacity-[0.32]"
          style={{ animation: "skylineDrift 55s linear infinite" }}
        >
          <HeritageSkylineLayer tone="near" />
        </div>
        {/* fade so the headline stays readable up top */}
        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-slate-50 via-slate-50/40 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes skylineDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes skylineDriftSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes carIdleBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes carSettle {
          0% { transform: scaleY(0.9) scaleX(1.04); }
          40% { transform: scaleY(1.07) scaleX(0.97); }
          70% { transform: scaleY(0.98) scaleX(1.01); }
          100% { transform: scaleY(1) scaleX(1); }
        }
        @keyframes radarPing {
          0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        @keyframes motionStreak {
          0% { transform: translateX(0); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateX(520px); opacity: 0; }
        }
        @keyframes dustPuff {
          0% { transform: translate(0, 0) scale(0.4); opacity: 0.6; }
          100% { transform: translate(-26px, -6px) scale(1.3); opacity: 0; }
        }
        @keyframes signGlow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.85; }
        }
      `}</style>

      {/* --- Animated Floating Monument Icon Accents --- */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 animate-[floatIcon_12s_ease-in-out_infinite]">
          {MONUMENTS[0].icon}
        </div>
        <div className="absolute top-[15%] right-[8%] w-20 h-20 animate-[floatIcon_16s_ease-in-out_infinite_reverse]">
          {MONUMENTS[1].icon}
        </div>
        <div className="absolute bottom-[20%] left-[8%] w-24 h-24 animate-[floatIcon_14s_ease-in-out_infinite_1s]">
          {MONUMENTS[2].icon}
        </div>
        <div className="absolute bottom-[25%] right-[5%] w-[88px] h-[88px] animate-[floatIcon_18s_ease-in-out_infinite_2s]">
          {MONUMENTS[3].icon}
        </div>
        <div className="absolute top-[45%] left-[45%] w-16 h-16 opacity-50 animate-[floatIcon_20s_ease-in-out_infinite_0.5s]">
          {MONUMENTS[5].icon}
        </div>
      </div>

      {/* Background Glowing Orbs */}
      <div className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,193,7,0.15)_0%,transparent_70%)] rounded-full z-[1]" />
      <div className="absolute -bottom-[150px] -left-[150px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(11,91,163,0.12)_0%,transparent_70%)] rounded-full z-[1]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1400px] w-full items-center">
        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2.5 bg-white/70 border border-amber-500/50 rounded-full px-5 py-2.5 w-fit shadow-[0_8px_20px_rgba(255,193,7,0.1)] backdrop-blur-md">
            {/* Animated Location Pin Icon */}
            <svg className="w-5 h-5 text-amber-500 animate-[bounce_2s_infinite]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sky-700 text-xs font-bold tracking-wider uppercase">
              India's Premier Ride Experience
            </span>
          </div>

          <div>
            <h1 className="text-[46px] md:text-[60px] lg:text-[76px] font-extrabold leading-[1.1] text-slate-900 m-0 tracking-tight">
              Discover India,<br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                One Tale at a time.
              </span>
            </h1>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed max-w-[520px] m-0 font-medium">
            CabTale brings premium ride-sharing to your doorstep. From local commutes to intercity heritage tours, travel with complete peace of mind.
          </p>

          <div className="grid grid-cols-3 gap-6 py-6 border-y border-black/5">
            {[
              { number: "200+", label: "Cities Covered" },
              { number: "4.9★", label: "Avg Rating" },
              { number: "100%", label: "Verified Drivers" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl font-extrabold text-sky-700 tracking-tight">{stat.number}</div>
                <div className="text-xs text-slate-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap mt-4">
            <button className="rounded-2xl px-10 py-4 text-base font-bold cursor-pointer transition-all duration-300 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 flex items-center gap-2.5 shadow-[0_12px_24px_rgba(255,215,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_32px_rgba(255,215,0,0.4)] group">
              <span>Book a Ride</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="rounded-2xl px-10 py-4 text-base font-bold cursor-pointer transition-all duration-300 bg-white/80 text-sky-700 border-2 border-sky-400 backdrop-blur-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,168,232,0.15)] flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.5M14 22c0-5.523-4.477-10-10-10z" />
              </svg>
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Animation Stage */}
        <div className="relative h-[640px] flex items-center justify-center [perspective:1200px]">
          {/* Glassmorphism Backdrop Stage */}
          <div className="absolute w-full h-full bg-gradient-to-br from-white/70 to-white/30 rounded-[40px] border border-white/60 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.08)] z-[1] overflow-hidden">
            {/* INFINITE LOOPING INDIAN MONUMENTS */}
            <div className="monument-marquee absolute top-10 left-0 flex w-[200%] z-0 opacity-80">
              {[...MONUMENTS, ...MONUMENTS].map((monument, i) => (
                <div key={i} className="w-[160px] flex flex-col items-center shrink-0">
                  <div className="w-20 h-20 bg-white/50 rounded-2xl p-3 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-white/80 mb-2 transition-transform duration-300 hover:scale-110">
                    {monument.icon}
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 uppercase tracking-widest">{monument.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium 3D Road */}
          <div className="absolute bottom-[120px] w-[115%] h-[100px] bg-gradient-to-b from-slate-800 to-slate-950 rounded-t-[50%/100%] z-[3] shadow-[0_30px_50px_rgba(11,91,163,0.3)] [transform:rotateX(65deg)]">
            <div className="road-lines absolute top-1/2 left-0 w-[200%] h-[3px] bg-[repeating-linear-gradient(90deg,#FFD700_0,#FFD700_40px,transparent_40px,transparent_80px)] opacity-90 filter drop-shadow-[0_0_6px_#FFD700]" />
          </div>

          {/* SCENE 1: Phone Booking Hologram */}
          <div
            className="absolute z-[5] transition-all duration-[800ms] cubic-bezier-[0.68,-0.55,0.265,1.55]"
            style={{
              transform: scene === "booking" ? "scale(1) translateY(-20px) rotate(0deg)" : "scale(0.5) translateY(120px) rotate(-20deg)",
              opacity: scene === "booking" ? 1 : 0
            }}
          >
            <div className="w-[200px] h-[400px] bg-white rounded-[36px] border-[12px] border-slate-900 shadow-[0_30px_60px_rgba(11,91,163,0.3),_inset_0_4px_10px_rgba(0,0,0,0.05)] flex flex-col p-4 relative overflow-hidden">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-slate-900 rounded-full z-10" />

              <div className="flex-1 flex flex-col gap-3 mt-3">
                <div className="flex-1 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="w-10 h-10 text-sky-600 animate-[pulse_2s_ease-in-out_infinite] z-10">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="absolute w-[60px] h-[60px] border-2 border-sky-400 rounded-full animate-[expandPulse_2s_ease-out_infinite] z-0" />
                </div>

                <div className="bg-slate-50 p-3 models-card rounded-xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-bold mb-1">DESTINATION</div>
                  <div className="text-sm text-slate-900 font-extrabold">Taj Mahal, Agra</div>
                </div>
                <button className="w-full p-4 bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-xl font-extrabold text-sm text-slate-900 flex items-center justify-center gap-1">
                  <span>Confirm Ride</span>
                </button>
              </div>
              <div className="absolute bottom-[50px] right-10 w-8 h-8 bg-sky-400/40 rounded-full animate-[tappulse_1.5s_ease-out_infinite]" />
            </div>
          </div>

          {/* SCENE 2 & 3: 3D-STYLED GIRL CHARACTER */}
          <div
            className="absolute bottom-[135px] left-[20%] z-[6] transition-all duration-[800ms]"
            style={{
              opacity: scene === "booking" ? 1 : scene === "arriving" ? 0.9 : 0,
              transform: scene === "boarding" ? "translateX(120px) scale(0.7)" : "translateX(0px)"
            }}
          >
            {scene === "booking" && (
              <div className="absolute -top-10 -right-10 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-bold text-sky-700 flex items-center gap-1.5 animate-[float_3s_ease-in-out_infinite]">
                <svg className="w-4 h-4 animate-spin text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
                </svg>
                Finding Cab... <span className="loading-dots"></span>
              </div>
            )}

            <svg width="200" height="280" viewBox="0 0 160 240" fill="none" className="filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]">
              <ellipse cx="80" cy="45" rx="38" ry="45" fill="#111827" />
              <circle cx="80" cy="65" r="32" fill="url(#skinGrad)" />
              <rect x="58" y="55" width="20" height="12" rx="4" fill="#1F2937" />
              <rect x="82" y="55" width="20" height="12" rx="4" fill="#1F2937" />
              <path d="M 78 60 L 82 60" stroke="#1F2937" strokeWidth="2" />
              <path d="M 74 78 Q 80 84 86 78" stroke="#9F1239" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <rect x="55" y="100" width="50" height="65" rx="12" fill="url(#metallicBlue)" />
              <rect x="105" y="140" width="25" height="25" rx="6" fill="#D97706" />
              <path d="M 110 140 C 110 125, 125 125, 125 140" stroke="#D97706" strokeWidth="3" fill="none" />
              <rect x="66" y="160" width="12" height="60" rx="6" fill="#1F2937" />
              <rect x="82" y="160" width="12" height="60" rx="6" fill="#1F2937" />
              <rect x="20" y="110" width="40" height="14" rx="7" fill="url(#skinGrad)" />
              <rect x="100" y="110" width="35" height="14" rx="7" fill="url(#skinGrad)" />
              <circle cx="140" cy="117" r="9" fill="url(#skinGrad)" />
              <rect x="142" y="105" width="10" height="16" rx="2" fill="#F8FAFC" stroke="#334155" strokeWidth="1" />
              <ellipse cx="72" cy="218" rx="14" ry="10" fill="#FFFFFF" />
              <ellipse cx="88" cy="218" rx="14" ry="10" fill="#FFFFFF" />
              <rect x="60" y="224" width="24" height="4" fill="#00A8E8" />
              <rect x="76" y="224" width="24" height="4" fill="#00A8E8" />
            </svg>
          </div>

          {/* SCENE 2, 3, 4: PREMIUM SEDAN CAR ANIMATION — parked on stage from the first frame */}
          <div
            className="absolute bottom-[105px] z-[7] transition-transform duration-[2500ms] cubic-bezier-[0.34,1.56,0.64,1]"
            style={{
              transform:
                scene === "booking"
                  ? "translateX(-170px) scale(0.92)"
                  : scene === "arriving" || scene === "boarding"
                  ? "translateX(0px) scale(1)"
                  : "translateX(600px) scale(0.9)",
            }}
          >
            <div className="relative w-[420px] h-[200px]">
              {/* motion streaks — only while actually driving in/out */}
              {scene !== "booking" && scene !== "boarding" && (
                <>
                  <div className="absolute left-[-170px] w-[140px] h-[3px] rounded-full blur-[1px] animate-[motionStreak_0.55s_ease-in_infinite] top-[42%] bg-gradient-to-r from-amber-400 to-transparent" />
                  <div className="absolute left-[-170px] w-[110px] h-[3px] rounded-full blur-[1px] animate-[motionStreak_0.55s_ease-in_infinite] [animation-delay:0.15s] top-[58%] bg-gradient-to-r from-sky-400 to-transparent" />
                  <div className="absolute left-[-170px] w-[150px] h-[2px] rounded-full blur-[1px] animate-[motionStreak_0.55s_ease-in_infinite] [animation-delay:0.3s] top-[70%] bg-gradient-to-r from-yellow-300 to-transparent" />
                </>
              )}

              {/* dust kicked up from the rear wheel as it pulls away */}
              {scene === "departing" && (
                <div className="absolute left-[60px] bottom-[18px] w-10 h-10 rounded-full bg-[radial-gradient(circle,rgba(180,160,130,0.45)_0%,transparent_70%)] animate-[dustPuff_0.9s_ease-out_infinite]" />
              )}

              {/* idle float while parked, suspension settle the moment it arrives */}
              <div
                key={scene}
                className={
                  scene === "booking"
                    ? "animate-[carIdleBob_3.4s_ease-in-out_infinite]"
                    : scene === "arriving"
                    ? "animate-[carSettle_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]"
                    : ""
                }
                style={{ transformOrigin: "50% 100%" }}
              >
                <PremiumSedan rotation={rotation} scene={scene} />
              </div>

              {/* radar-style arrival pulse */}
              {scene === "arriving" && (
                <>
                  <div className="absolute top-[78%] left-1/2 w-[170px] h-[170px] rounded-full border-2 border-amber-400/70 -translate-x-1/2 -translate-y-1/2 animate-[radarPing_1.1s_ease-out_infinite] z-0" />
                  <div className="absolute top-[78%] left-1/2 w-[170px] h-[170px] rounded-full border-2 border-amber-400/70 -translate-x-1/2 -translate-y-1/2 animate-[radarPing_1.1s_ease-out_infinite] [animation-delay:0.35s] z-0" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
