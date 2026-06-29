// import React from "react";
// import { renderToStaticMarkup } from "react-dom/server";

// function PremiumSedan({ rotation = 0, scene = "booking" }) {
//   const isMoving = scene === "arriving" || scene === "departing" || scene === "boarding";
//   const wheels = [
//     { cx: 112, cy: 160 },
//     { cx: 308, cy: 160 },
//   ];

//   return (
//     <svg
//       width="420"
//       height="200"
//       viewBox="0 0 420 200"
//       fill="none"
//     >
//       <ellipse cx="210" cy="186" rx="168" ry="13" fill="#0F172A" opacity="0.22" />

//       {wheels.map((w) => (
//         <g key={w.cx}>
//           <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${w.cx}px ${w.cy}px` }}>
//             <circle cx={w.cx} cy={w.cy} r="32" fill="#15181F" />
//             <circle cx={w.cx} cy={w.cy} r="21" fill="url(#chromeRim)" />
//             <circle cx={w.cx} cy={w.cy} r="14" fill="#1E293B" />
//             <rect x={w.cx - 4} y={w.cy - 9} width="8" height="10" rx="2" fill="#DC2626" />
//             {[0, 60, 120, 180, 240, 300].map((angle) => (
//               <line
//                 key={angle}
//                 x1={w.cx}
//                 y1={w.cy}
//                 x2={w.cx + 18 * Math.cos((angle * Math.PI) / 180)}
//                 y2={w.cy + 18 * Math.sin((angle * Math.PI) / 180)}
//                 stroke="#CBD5E1"
//                 strokeWidth="4.5"
//                 strokeLinecap="round"
//               />
//             ))}
//             <circle cx={w.cx} cy={w.cy} r="5" fill="#0F172A" />
//           </g>
//           <path
//             d={`M${w.cx - 16},${w.cy - 12} A 20 20 0 0 1 ${w.cx + 4},${w.cy - 22}`}
//             stroke="#FFFFFF"
//             strokeWidth="2"
//             strokeLinecap="round"
//             opacity="0.55"
//             fill="none"
//           />
//         </g>
//       ))}

//       <path
//         d="M40,152 C40,138 46,124 56,116 C66,108 80,102 96,100 L128,98 C140,80 156,68 180,64 C202,60 234,60 256,64 C278,68 292,80 300,98 L334,100 C350,102 362,112 368,128 C372,138 372,146 368,152 L368,153 L40,153 Z"
//         fill="url(#carPaint)"
//         stroke="#CBD5E1"
//         strokeWidth="1"
//       />
//       <path
//         d="M150,66 C190,58 248,58 282,68 C260,64 196,64 150,70 Z"
//         fill="url(#carPaintShine)"
//         opacity="0.8"
//       />

//       <path d="M44,136 L364,136 L368,152 L40,152 Z" fill="#0F172A" />
//       <rect x="42" y="135" width="324" height="3" fill="url(#goldGrad)" />

//       <path d="M130,96 L180,68 L188,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
//       <path d="M194,98 L189,68 L268,66 L274,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
//       <path d="M280,98 L272,68 L298,76 L302,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
//       <rect x="229" y="66" width="4" height="32" fill="#0F172A" />
//       <path d="M196,96 L206,70 L214,70 L206,96 Z" fill="#FFFFFF" opacity="0.35" />

//       <path d="M196,100 L192,150" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7" />
//       <path d="M276,100 L280,150" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7" />

//       <path d="M286,99 C293,96 300,99 299,105 C295,108 288,107 285,103 Z" fill="#0F172A" />

//       <rect x="214" y="106" width="16" height="4" rx="2" fill="#94A3B8" />
//       <rect x="294" y="108" width="14" height="4" rx="2" fill="#94A3B8" />

//       <rect x="40" y="113" width="22" height="9" rx="4" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.5" transform="rotate(10 51 117)" />
//       <circle cx="36" cy="119" r={isMoving ? 16 : 9} fill="url(#taillightGlow)" opacity={isMoving ? 0.9 : 0.45} />

//       <rect x="346" y="113" width="22" height="9" rx="4" fill="#FDFDF8" stroke="#CBD5E1" strokeWidth="0.5" transform="rotate(-10 357 117)" />
//       <rect x="350" y="123" width="12" height="3" rx="1.5" fill="#FBBF24" />
//       {isMoving && (
//         <path d="M368,118 L416,104 L416,134 L368,122 Z" fill="url(#headlightGlow)" opacity="0.8" />
//       )}

//       <circle cx="218" cy="46" r="22" fill="url(#signGlowGrad)" opacity="0.7" />
//       <rect x="198" y="38" width="40" height="16" rx="4" fill="url(#goldGrad)" stroke="#92400E" strokeWidth="1" />
//       <text x="218" y="49" fontSize="9" fontWeight="900" fill="#1F2937" textAnchor="middle" letterSpacing="0.5">
//         TAXI
//       </text>
//       <rect x="214" y="52" width="8" height="16" fill="#94A3B8" />
//     </svg>
//   );
// }

// function Defs() {
//   return (
//     <defs>
//       <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#FFD700" />
//         <stop offset="100%" stopColor="#D97706" />
//       </linearGradient>
//       <linearGradient id="carPaint" x1="10%" y1="0%" x2="65%" y2="100%">
//         <stop offset="0%" stopColor="#FFFFFF" />
//         <stop offset="55%" stopColor="#F1F5F9" />
//         <stop offset="100%" stopColor="#D9E2EC" />
//       </linearGradient>
//       <linearGradient id="carPaintShine" x1="0%" y1="0%" x2="0%" y2="100%">
//         <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
//         <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
//       </linearGradient>
//       <linearGradient id="windowTint" x1="0%" y1="0%" x2="60%" y2="100%">
//         <stop offset="0%" stopColor="#CFEAFB" />
//         <stop offset="45%" stopColor="#7DB7DE" />
//         <stop offset="100%" stopColor="#1E2A3D" />
//       </linearGradient>
//       <linearGradient id="chromeRim" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#F8FAFC" />
//         <stop offset="45%" stopColor="#94A3B8" />
//         <stop offset="100%" stopColor="#E2E8F0" />
//       </linearGradient>
//       <radialGradient id="headlightGlow" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.9" />
//         <stop offset="100%" stopColor="#FFFDE7" stopOpacity="0" />
//       </radialGradient>
//       <radialGradient id="taillightGlow" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="#EF4444" stopOpacity="0.85" />
//         <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
//       </radialGradient>
//       <radialGradient id="signGlowGrad" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="#FFC93C" stopOpacity="0.85" />
//         <stop offset="100%" stopColor="#FFC93C" stopOpacity="0" />
//       </radialGradient>
//     </defs>
//   );
// }

// function FullSvg({ scene }) {
//   return (
//     <svg width="440" height="220" viewBox="-10 -10 440 220" xmlns="http://www.w3.org/2000/svg" style={{ background: "#dbeafe" }}>
//       <Defs />
//       <g transform="translate(0,0)">
//         <PremiumSedan rotation={20} scene={scene} />
//       </g>
//     </svg>
//   );
// }

// const parkedSvg = renderToStaticMarkup(<FullSvg scene="booking" />);
// const movingSvg = renderToStaticMarkup(<FullSvg scene="arriving" />);

// import { writeFileSync } from "fs";
// writeFileSync("/home/claude/sedan_parked.svg", parkedSvg);
// writeFileSync("/home/claude/sedan_moving.svg", movingSvg);
// console.log("done");


















import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

type Scene = "booking" | "arriving" | "departing" | "boarding";

interface PremiumSedanProps {
  rotation?: number;
  scene?: Scene;
}

function PremiumSedan({ rotation = 0, scene = "booking" }: PremiumSedanProps) {
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
    >
      <ellipse cx="210" cy="186" rx="168" ry="13" fill="#0F172A" opacity="0.22" />

      {wheels.map((w) => (
        <g key={w.cx}>
          <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${w.cx}px ${w.cy}px` }}>
            <circle cx={w.cx} cy={w.cy} r="32" fill="#15181F" />
            <circle cx={w.cx} cy={w.cy} r="21" fill="url(#chromeRim)" />
            <circle cx={w.cx} cy={w.cy} r="14" fill="#1E293B" />
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

      <path
        d="M40,152 C40,138 46,124 56,116 C66,108 80,102 96,100 L128,98 C140,80 156,68 180,64 C202,60 234,60 256,64 C278,68 292,80 300,98 L334,100 C350,102 362,112 368,128 C372,138 372,146 368,152 L368,153 L40,153 Z"
        fill="url(#carPaint)"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      <path
        d="M150,66 C190,58 248,58 282,68 C260,64 196,64 150,70 Z"
        fill="url(#carPaintShine)"
        opacity="0.8"
      />

      <path d="M44,136 L364,136 L368,152 L40,152 Z" fill="#0F172A" />
      <rect x="42" y="135" width="324" height="3" fill="url(#goldGrad)" />

      <path d="M130,96 L180,68 L188,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
      <path d="M194,98 L189,68 L268,66 L274,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
      <path d="M280,98 L272,68 L298,76 L302,98 Z" fill="url(#windowTint)" stroke="#1E293B" strokeWidth="1" />
      <rect x="229" y="66" width="4" height="32" fill="#0F172A" />
      <path d="M196,96 L206,70 L214,70 L206,96 Z" fill="#FFFFFF" opacity="0.35" />

      <path d="M196,100 L192,150" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7" />
      <path d="M276,100 L280,150" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.7" />

      <path d="M286,99 C293,96 300,99 299,105 C295,108 288,107 285,103 Z" fill="#0F172A" />

      <rect x="214" y="106" width="16" height="4" rx="2" fill="#94A3B8" />
      <rect x="294" y="108" width="14" height="4" rx="2" fill="#94A3B8" />

      <rect x="40" y="113" width="22" height="9" rx="4" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.5" transform="rotate(10 51 117)" />
      <circle cx="36" cy="119" r={isMoving ? 16 : 9} fill="url(#taillightGlow)" opacity={isMoving ? 0.9 : 0.45} />

      <rect x="346" y="113" width="22" height="9" rx="4" fill="#FDFDF8" stroke="#CBD5E1" strokeWidth="0.5" transform="rotate(-10 357 117)" />
      <rect x="350" y="123" width="12" height="3" rx="1.5" fill="#FBBF24" />
      {isMoving && (
        <path d="M368,118 L416,104 L416,134 L368,122 Z" fill="url(#headlightGlow)" opacity="0.8" />
      )}

      <circle cx="218" cy="46" r="22" fill="url(#signGlowGrad)" opacity="0.7" />
      <rect x="198" y="38" width="40" height="16" rx="4" fill="url(#goldGrad)" stroke="#92400E" strokeWidth="1" />
      <text x="218" y="49" fontSize="9" fontWeight="900" fill="#1F2937" textAnchor="middle" letterSpacing="0.5">
        TAXI
      </text>
      <rect x="214" y="52" width="8" height="16" fill="#94A3B8" />
    </svg>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
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
  );
}

interface FullSvgProps {
  scene: Scene;
}

function FullSvg({ scene }: FullSvgProps) {
  return (
    <svg width="440" height="220" viewBox="-10 -10 440 220" xmlns="http://www.w3.org/2000/svg" style={{ background: "#dbeafe" }}>
      <Defs />
      <g transform="translate(0,0)">
        <PremiumSedan rotation={20} scene={scene} />
      </g>
    </svg>
  );
}

const parkedSvg = renderToStaticMarkup(<FullSvg scene="booking" />);
const movingSvg = renderToStaticMarkup(<FullSvg scene="arriving" />);

import { writeFileSync } from "fs";
writeFileSync("/home/claude/sedan_parked.svg", parkedSvg);
writeFileSync("/home/claude/sedan_moving.svg", movingSvg);
console.log("done");