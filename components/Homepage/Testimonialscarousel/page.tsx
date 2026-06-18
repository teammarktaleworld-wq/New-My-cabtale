// "use client";

// import { useState } from "react";

// const TESTIMONIALS = [
//   {
//     name: "Priya Sharma",
//     city: "Mumbai",
//     rating: 5,
//     avatar: "PS",
//     color: "#FFC107",
//     title: "The driver told me about the best chai spot in the city",
//     body: "I was visiting for work and my CabTale driver ended up giving me a full local guide. Clean car, on-time, and a genuine conversation. That's a tale I'll tell.",
//     trip: "BKC → Andheri",
//   },
//   {
//     name: "Rohan Mehta",
//     city: "Bangalore",
//     rating: 5,
//     avatar: "RM",
//     color: "#4ADE80",
//     title: "Used it every day for 3 months — never a bad ride",
//     body: "I commute from Whitefield to Koramangala daily. CabTale is the only app that's consistently on-time and the fare estimate is always spot on. No drama.",
//     trip: "Whitefield → Koramangala",
//   },
//   {
//     name: "Ananya Iyer",
//     city: "Chennai",
//     rating: 5,
//     avatar: "AI",
//     color: "#A78BFA",
//     title: "The SOS feature gave my mum peace of mind",
//     body: "Late night ride back from a concert. My mother could see exactly where I was on the map. The driver was brilliant. I felt completely safe.",
//     trip: "T Nagar → Adyar",
//   },
//   {
//     name: "Vikram Nair",
//     city: "Hyderabad",
//     rating: 5,
//     avatar: "VN",
//     color: "#FB923C",
//     title: "Booked an SUV for the family trip — flawless",
//     body: "Six of us, luggage, and a 200km road trip. The SUV was spotless, the driver was knowledgeable about stops along the route. Highly recommended for family travel.",
//     trip: "Hyderabad → Warangal",
//   },
//   {
//     name: "Deepika Rao",
//     city: "Pune",
//     rating: 5,
//     avatar: "DR",
//     color: "#38BDF8",
//     title: "Transparent pricing — exactly what I was quoted",
//     body: "Other apps always pull a surprise at the end. CabTale showed ₹142 when I booked and I paid ₹142. That kind of honesty keeps me coming back.",
//     trip: "Koregaon Park → Hinjewadi",
//   },
// ];

// export default function TestimonialsCarousel() {
//   const [active, setActive] = useState(0);

//   const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
//   const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

//   const t = TESTIMONIALS[active];

//   return (
//     <section
//       id="stories"
//       style={{
//         background: "#080808",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ maxWidth: "900px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           <span style={{
//             display: "inline-block",
//             background: "rgba(255,193,7,0.1)",
//             border: "1px solid rgba(255,193,7,0.25)",
//             borderRadius: "100px",
//             padding: "5px 16px",
//             color: "#FFC107",
//             fontSize: "12px",
//             fontWeight: 600,
//             letterSpacing: "0.12em",
//             textTransform: "uppercase",
//             marginBottom: "16px",
//           }}>
//             Rider Tales
//           </span>
//           <h2 style={{
//             color: "white",
//             fontSize: "clamp(28px, 4vw, 48px)",
//             fontWeight: 800,
//             margin: 0,
//             letterSpacing: "-0.03em",
//           }}>
//             Every journey has a story
//           </h2>
//         </div>

//         {/* Main card */}
//         <div style={{
//           background: "rgba(255,255,255,0.04)",
//           border: "1px solid rgba(255,255,255,0.09)",
//           borderRadius: "24px",
//           padding: "48px",
//           position: "relative",
//           minHeight: "280px",
//         }}>
//           {/* Quote mark */}
//           <div style={{
//             position: "absolute",
//             top: "28px",
//             right: "36px",
//             fontSize: "96px",
//             lineHeight: 1,
//             color: "rgba(255,193,7,0.08)",
//             fontFamily: "Georgia, serif",
//             userSelect: "none",
//           }}>
//             "
//           </div>

//           {/* Stars */}
//           <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
//             {Array.from({ length: t.rating }).map((_, i) => (
//               <span key={i} style={{ color: "#FFC107", fontSize: "16px" }}>★</span>
//             ))}
//           </div>

//           {/* Title */}
//           <h3 style={{
//             color: "white",
//             fontSize: "22px",
//             fontWeight: 700,
//             margin: "0 0 16px",
//             letterSpacing: "-0.02em",
//             maxWidth: "580px",
//           }}>
//             "{t.title}"
//           </h3>

//           {/* Body */}
//           <p style={{
//             color: "rgba(255,255,255,0.55)",
//             fontSize: "16px",
//             lineHeight: 1.7,
//             margin: "0 0 36px",
//             maxWidth: "600px",
//           }}>
//             {t.body}
//           </p>

//           {/* Author row */}
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//               <div style={{
//                 width: "44px",
//                 height: "44px",
//                 borderRadius: "50%",
//                 background: `${t.color}22`,
//                 border: `2px solid ${t.color}55`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "14px",
//                 fontWeight: 800,
//                 color: t.color,
//               }}>
//                 {t.avatar}
//               </div>
//               <div>
//                 <div style={{ color: "white", fontWeight: 700, fontSize: "15px" }}>{t.name}</div>
//                 <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>{t.city}</div>
//               </div>
//             </div>

//             {/* Trip badge */}
//             <div style={{
//               background: "rgba(255,255,255,0.05)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: "100px",
//               padding: "6px 14px",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}>
//               <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80" }} />
//               <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>{t.trip}</span>
//             </div>
//           </div>
//         </div>

//         {/* Controls */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "32px" }}>
//           {/* Dots */}
//           <div style={{ display: "flex", gap: "8px" }}>
//             {TESTIMONIALS.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 style={{
//                   width: i === active ? "28px" : "8px",
//                   height: "8px",
//                   borderRadius: "100px",
//                   background: i === active ? "#FFC107" : "rgba(255,255,255,0.15)",
//                   border: "none",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   padding: 0,
//                 }}
//               />
//             ))}
//           </div>

//           {/* Arrows */}
//           <div style={{ display: "flex", gap: "10px" }}>
//             {[prev, next].map((fn, i) => (
//               <button
//                 key={i}
//                 onClick={fn}
//                 style={{
//                   width: "44px",
//                   height: "44px",
//                   borderRadius: "50%",
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   transition: "all 0.2s",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.background = "rgba(255,193,7,0.15)";
//                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,193,7,0.4)";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
//                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
//                 }}
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   {i === 0 ? (
//                     <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                   ) : (
//                     <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                   )}
//                 </svg>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






















"use client";

import React, { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    avatar: "PS",
    color: "#F59E0B", // Amber
    bgLight: "#FFFBEB",
    title: "The driver told me about the best chai spot in the city.",
    body: "I was visiting for work and my CabTale driver ended up giving me a full local guide. Clean car, on-time, and a genuine conversation. That's a tale I'll tell.",
    trip: "BKC → Andheri",
  },
  {
    name: "Rohan Mehta",
    city: "Bangalore",
    rating: 5,
    avatar: "RM",
    color: "#10B981", // Emerald
    bgLight: "#ECFDF5",
    title: "Used it every day for 3 months — never a bad ride.",
    body: "I commute from Whitefield to Koramangala daily. CabTale is the only app that's consistently on-time and the fare estimate is always spot on. No drama.",
    trip: "Whitefield → Koramangala",
  },
  {
    name: "Ananya Iyer",
    city: "Chennai",
    rating: 5,
    avatar: "AI",
    color: "#8B5CF6", // Purple
    bgLight: "#F5F3FF",
    title: "The SOS feature gave my mum peace of mind.",
    body: "Late night ride back from a concert. My mother could see exactly where I was on the map. The driver was brilliant. I felt completely safe.",
    trip: "T Nagar → Adyar",
  },
  {
    name: "Vikram Nair",
    city: "Hyderabad",
    rating: 5,
    avatar: "VN",
    color: "#F97316", // Orange
    bgLight: "#FFF7ED",
    title: "Booked an SUV for the family trip — flawless.",
    body: "Six of us, luggage, and a 200km road trip. The SUV was spotless, the driver was knowledgeable about stops along the route. Highly recommended for family travel.",
    trip: "Hyderabad → Warangal",
  },
  {
    name: "Deepika Rao",
    city: "Pune",
    rating: 5,
    avatar: "DR",
    color: "#0EA5E9", // Sky Blue
    bgLight: "#F0F9FF",
    title: "Transparent pricing — exactly what I was quoted.",
    body: "Other apps always pull a surprise at the end. CabTale showed ₹142 when I booked and I paid ₹142. That kind of honesty keeps me coming back.",
    trip: "Koregaon Park → Hinjewadi",
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds

export default function TestimonialsCarouselModern() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay Logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [active, isPaused]);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section
      ref={sectionRef}
      id="stories"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "100px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <div 
          style={{ 
            textAlign: "center", 
            marginBottom: "64px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#FFFBEB",
              border: "1px solid #FEF08A",
              borderRadius: "100px",
              padding: "6px 16px",
              color: "#D97706",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Rider Tales
          </span>
          <h2
            style={{
              color: "#111827",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Every journey has a <span style={{ color: "#FFC107" }}>Story</span>
          </h2>
        </div>

        {/* Main Interactive Carousel Area */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 150ms",
          }}
        >
          {/* Card Container */}
          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "32px",
              padding: "clamp(32px, 5vw, 64px)",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Giant Decorative Quote */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "40px",
                fontSize: "140px",
                lineHeight: 1,
                color: "#F3F4F6", // Very subtle
                fontFamily: "Georgia, serif",
                userSelect: "none",
                zIndex: 0,
              }}
            >
              "
            </div>

            {/* Content Stacking via CSS Grid to prevent height jumps */}
            <div style={{ display: "grid", gridTemplateAreas: "'stack'", position: "relative", zIndex: 1 }}>
              {TESTIMONIALS.map((t, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={i}
                    style={{
                      gridArea: "stack",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
                      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      pointerEvents: isActive ? "auto" : "none",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Stars */}
                    <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <svg key={starIdx} width="20" height="20" viewBox="0 0 24 24" fill={starIdx < t.rating ? "#FFC107" : "#E5E7EB"}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        color: "#111827",
                        fontSize: "clamp(24px, 3vw, 32px)",
                        fontWeight: 800,
                        margin: "0 0 20px",
                        letterSpacing: "-0.02em",
                        maxWidth: "700px",
                        lineHeight: 1.2,
                      }}
                    >
                      "{t.title}"
                    </h3>

                    {/* Body */}
                    <p
                      style={{
                        color: "#4B5563",
                        fontSize: "18px",
                        lineHeight: 1.7,
                        margin: "0 0 40px",
                        maxWidth: "700px",
                      }}
                    >
                      {t.body}
                    </p>

                    {/* Author Row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginTop: "auto" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        {/* Avatar */}
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            background: t.bgLight,
                            border: `2px solid ${t.color}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "16px",
                            fontWeight: 800,
                            color: t.color,
                            boxShadow: `0 4px 10px ${t.color}20`,
                          }}
                        >
                          {t.avatar}
                        </div>
                        <div>
                          <div style={{ color: "#111827", fontWeight: 800, fontSize: "16px" }}>{t.name}</div>
                          <div style={{ color: "#6B7280", fontSize: "14px", fontWeight: 500 }}>{t.city}</div>
                        </div>
                      </div>

                      {/* Trip Badge */}
                      <div
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #E5E7EB",
                          borderRadius: "100px",
                          padding: "8px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.02)",
                        }}
                      >
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: t.color }} />
                        <span style={{ color: "#4B5563", fontSize: "14px", fontWeight: 600 }}>{t.trip}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "32px", padding: "0 16px" }}>
            
            {/* Animated Progress Dots */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setIsPaused(true); // Temporarily pause if manually clicked
                    setTimeout(() => setIsPaused(false), AUTOPLAY_INTERVAL);
                  }}
                  style={{
                    position: "relative",
                    width: i === active ? "48px" : "10px",
                    height: "10px",
                    borderRadius: "10px",
                    background: "#E5E7EB",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    overflow: "hidden",
                    transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {/* Fill Animation for Active Dot */}
                  {i === active && (
                    <div
                      key={active} // Re-mounts animation on slide change
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        background: "#FFC107",
                        width: "100%",
                        animation: isPaused ? "none" : `fillProgress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                        transformOrigin: "left",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Arrow Controls */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[prev, next].map((fn, i) => (
                <button
                  key={i}
                  onClick={fn}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                    color: "#4B5563"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFC107";
                    e.currentTarget.style.borderColor = "#FFC107";
                    e.currentTarget.style.color = "#111827";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.color = "#4B5563";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  aria-label={i === 0 ? "Previous testimonial" : "Next testimonial"}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 ? (
                      <polyline points="15 18 9 12 15 6" />
                    ) : (
                      <polyline points="9 18 15 12 9 6" />
                    )}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillProgress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}