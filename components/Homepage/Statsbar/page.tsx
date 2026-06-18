// "use client";

// import { useEffect, useRef, useState } from "react";

// const STATS = [
//   { value: 50000, display: "50K+", label: "Happy Riders", suffix: "" },
//   { value: 4.9, display: "4.9", label: "Average Rating", suffix: "★" },
//   { value: 200, display: "200+", label: "Cities Covered", suffix: "" },
//   { value: 1000000, display: "1M+", label: "Trips Completed", suffix: "" },
//   { value: 99, display: "99%", label: "On-time arrivals", suffix: "" },
// ];

// export default function StatsBar() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.3 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       style={{
//         background: "linear-gradient(135deg, #1A1400 0%, #0A0A0A 50%, #0D0800 100%)",
//         borderTop: "1px solid rgba(255,193,7,0.12)",
//         borderBottom: "1px solid rgba(255,193,7,0.12)",
//         padding: "64px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Glow */}
//       <div style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%,-50%)",
//         width: "800px",
//         height: "200px",
//         background: "radial-gradient(ellipse, rgba(255,193,7,0.07) 0%, transparent 70%)",
//         pointerEvents: "none",
//       }} />

//       <div style={{
//         maxWidth: "1100px",
//         margin: "0 auto",
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
//         gap: "40px",
//         position: "relative",
//       }}>
//         {STATS.map((s, i) => (
//           <div
//             key={s.label}
//             style={{
//               textAlign: "center",
//               opacity: visible ? 1 : 0,
//               transform: visible ? "translateY(0)" : "translateY(16px)",
//               transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
//             }}
//           >
//             <div style={{
//               fontSize: "clamp(32px, 4vw, 48px)",
//               fontWeight: 900,
//               color: "#FFC107",
//               letterSpacing: "-0.04em",
//               lineHeight: 1,
//               marginBottom: "8px",
//             }}>
//               {s.display}{s.suffix}
//             </div>
//             <div style={{
//               fontSize: "13px",
//               color: "rgba(255,255,255,0.45)",
//               fontWeight: 500,
//               letterSpacing: "0.04em",
//               textTransform: "uppercase",
//             }}>
//               {s.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



















// "use client";

// import React, { useEffect, useRef, useState } from "react";

// // Redefined STATS to separate the numeric target from the suffix 
// // so we can mathematically animate the numbers.
// const STATS = [
//   { target: 50, suffix: "K+", label: "Happy Riders", decimals: 0 },
//   { target: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
//   { target: 200, suffix: "+", label: "Cities Covered", decimals: 0 },
//   { target: 1, suffix: "M+", label: "Trips Completed", decimals: 0 },
//   { target: 99, suffix: "%", label: "On-time Arrivals", decimals: 0 },
// ];

// // Easing function for a smooth slow-down effect at the end
// const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

// // Sub-component to handle individual counter logic cleanly
// const AnimatedStat = ({ target, suffix, label, decimals, delay, isVisible }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTime;
//     const duration = 2000; // 2 seconds animation

//     const animate = (currentTime) => {
//       if (!startTime) startTime = currentTime;
//       const progress = Math.min((currentTime - startTime) / duration, 1);
      
//       // Apply easing and delay
//       const easedProgress = easeOutQuart(progress);
//       const currentVal = easedProgress * target;

//       setCount(currentVal);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setCount(target); // Ensure it ends exactly on the target
//       }
//     };

//     // Add staggered delay before starting the animation
//     const timeout = setTimeout(() => {
//       requestAnimationFrame(animate);
//     }, delay);

//     return () => clearTimeout(timeout);
//   }, [isVisible, target, delay]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         padding: "24px",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(20px)",
//         transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "baseline",
//           justifyContent: "center",
//           gap: "2px",
//           color: "#111827", // Dark slate for premium contrast
//           marginBottom: "8px",
//         }}
//       >
//         <span
//           style={{
//             fontSize: "clamp(36px, 4vw, 48px)",
//             fontWeight: 800,
//             letterSpacing: "-0.03em",
//             lineHeight: 1,
//             fontVariantNumeric: "tabular-nums", // Keeps numbers from shifting widths
//           }}
//         >
//           {count.toFixed(decimals)}
//         </span>
//         <span
//           style={{
//             fontSize: "clamp(20px, 2vw, 28px)",
//             fontWeight: 700,
//             color: "#FFC107", // Theme yellow accent for suffixes
//           }}
//         >
//           {suffix}
//         </span>
//       </div>
//       <div
//         style={{
//           fontSize: "14px",
//           color: "#6B7280", // Medium gray
//           fontWeight: 600,
//           letterSpacing: "0.02em",
//         }}
//       >
//         {label}
//       </div>
//     </div>
//   );
// };

// export default function StatsBarModern() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Only animate once
//         }
//       },
//       { threshold: 0.2 }
//     );
    
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       style={{
//         backgroundColor: "#F9FAFB", // Light grey background mapping to theme
//         padding: "80px 5%",
//         fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       {/* Floating Glass Container */}
//       <div
//         style={{
//           maxWidth: "1280px",
//           width: "100%",
//           background: "#FFFFFF",
//           borderRadius: "24px",
//           boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
//           border: "1px solid rgba(229, 231, 235, 0.5)",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Subtle decorative top highlight */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "4px",
//             background: "linear-gradient(90deg, transparent, #FFC107, transparent)",
//             opacity: 0.8,
//           }}
//         />

//         {STATS.map((stat, index) => (
//           <React.Fragment key={stat.label}>
//             <AnimatedStat
//               target={stat.target}
//               suffix={stat.suffix}
//               label={stat.label}
//               decimals={stat.decimals}
//               delay={index * 150} // 150ms stagger effect
//               isVisible={isVisible}
//             />
            
//             {/* Vertical Divider (Hidden on very small screens implicitly by flex wrap) */}
//             {index < STATS.length - 1 && (
//               <div
//                 style={{
//                   width: "1px",
//                   height: "60px",
//                   backgroundColor: "#F3F4F6", // Very subtle line
//                   display: "block", // Will naturally wrap or push down on tight mobile, but looks great on tablet/desktop
//                 }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// }















"use client";

import React, { useEffect, useRef, useState } from "react";

// Redefined STATS to separate the numeric target from the suffix 
// so we can mathematically animate the numbers.
const STATS = [
  { target: 50, suffix: "K+", label: "Happy Riders", decimals: 0 },
  { target: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
  { target: 200, suffix: "+", label: "Cities Covered", decimals: 0 },
  { target: 1, suffix: "M+", label: "Trips Completed", decimals: 0 },
  { target: 99, suffix: "%", label: "On-time Arrivals", decimals: 0 },
];

// Easing function for a smooth slow-down effect at the end
const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

// Sub-component to handle individual counter logic cleanly
interface AnimatedStatProps {
  target: number;
  suffix: string;
  label: string;
  decimals: number;
  delay: number;
  isVisible: boolean;
}

const AnimatedStat = ({ target, suffix, label, decimals, delay, isVisible }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const duration = 2000; // 2 seconds animation

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Apply easing and delay
      const easedProgress = easeOutQuart(progress);
      const currentVal = easedProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure it ends exactly on the target
      }
    };

    // Add staggered delay before starting the animation
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, target, delay]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: "2px",
          color: "#111827", // Dark slate for premium contrast
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontSize: "clamp(36px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums", // Keeps numbers from shifting widths
          }}
        >
          {count.toFixed(decimals)}
        </span>
        <span
          style={{
            fontSize: "clamp(20px, 2vw, 28px)",
            fontWeight: 700,
            color: "#FFC107", // Theme yellow accent for suffixes
          }}
        >
          {suffix}
        </span>
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#6B7280", // Medium gray
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default function StatsBarModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: "#F9FAFB", // Light grey background mapping to theme
        padding: "80px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Floating Glass Container */}
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
          border: "1px solid rgba(229, 231, 235, 0.5)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative top highlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #FFC107, transparent)",
            opacity: 0.8,
          }}
        />

        {STATS.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <AnimatedStat
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              delay={index * 150} // 150ms stagger effect
              isVisible={isVisible}
            />
            
            {/* Vertical Divider (Hidden on very small screens implicitly by flex wrap) */}
            {index < STATS.length - 1 && (
              <div
                style={{
                  width: "1px",
                  height: "60px",
                  backgroundColor: "#F3F4F6", // Very subtle line
                  display: "block", // Will naturally wrap or push down on tight mobile, but looks great on tablet/desktop
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}