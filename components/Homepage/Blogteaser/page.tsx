// "use client";

// const POSTS = [
//   {
//     tag: "Road Trip",
//     tagColor: "#FFC107",
//     title: "Mumbai to Goa by cab: what nobody tells you about the coastal route",
//     excerpt: "We rode the NH66 with a CabTale driver who'd done the route 200 times. Here's what he showed us that no travel blog mentions.",
//     readTime: "5 min read",
//     date: "12 Jun 2026",
//   },
//   {
//     tag: "Driver Story",
//     tagColor: "#4ADE80",
//     title: "From 12-hour factory shifts to being his own boss — Suresh's Tale",
//     excerpt: "Suresh Patil quit his job at 38, bought a second-hand Swift, and joined CabTale. Two years later, he earns three times what he did before.",
//     readTime: "7 min read",
//     date: "5 Jun 2026",
//   },
//   {
//     tag: "City Guide",
//     tagColor: "#A78BFA",
//     title: "Navigating Bangalore's traffic: the insider knowledge only drivers have",
//     excerpt: "We asked 50 Bangalore drivers for their honest take on routes, timings, and the shortcuts that GPS will never show you.",
//     readTime: "4 min read",
//     date: "28 May 2026",
//   },
// ];

// export default function BlogTeaser() {
//   return (
//     <section
//       id="blog"
//       style={{
//         background: "#0D0D0D",
//         padding: "100px 40px",
//         fontFamily: "'Inter','Helvetica Neue',sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", flexWrap: "wrap", gap: "20px" }}>
//           <div>
//             <span style={{
//               display: "inline-block",
//               background: "rgba(255,193,7,0.1)",
//               border: "1px solid rgba(255,193,7,0.25)",
//               borderRadius: "100px",
//               padding: "5px 16px",
//               color: "#FFC107",
//               fontSize: "12px",
//               fontWeight: 600,
//               letterSpacing: "0.12em",
//               textTransform: "uppercase",
//               marginBottom: "16px",
//             }}>
//               The Tales Blog
//             </span>
//             <h2 style={{
//               color: "white",
//               fontSize: "clamp(28px, 4vw, 44px)",
//               fontWeight: 800,
//               margin: 0,
//               letterSpacing: "-0.03em",
//             }}>
//               Stories from the road
//             </h2>
//           </div>
//           <button style={{
//             background: "transparent",
//             border: "1px solid rgba(255,255,255,0.15)",
//             borderRadius: "100px",
//             padding: "10px 22px",
//             color: "rgba(255,255,255,0.6)",
//             fontSize: "14px",
//             fontWeight: 500,
//             cursor: "pointer",
//             transition: "all 0.2s",
//           }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,193,7,0.35)";
//               (e.currentTarget as HTMLElement).style.color = "#FFC107";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
//               (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
//             }}
//           >
//             Read all stories →
//           </button>
//         </div>

//         {/* Cards */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "20px",
//         }}>
//           {POSTS.map((post, i) => (
//             <article
//               key={i}
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 borderRadius: "20px",
//                 padding: "32px",
//                 cursor: "pointer",
//                 transition: "all 0.25s ease",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "16px",
//               }}
//               onMouseEnter={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = `${post.tagColor}40`;
//                 el.style.transform = "translateY(-4px)";
//                 el.style.background = "rgba(255,255,255,0.05)";
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(255,255,255,0.08)";
//                 el.style.transform = "translateY(0)";
//                 el.style.background = "rgba(255,255,255,0.03)";
//               }}
//             >
//               {/* Mock thumbnail */}
//               <div style={{
//                 width: "100%",
//                 height: "140px",
//                 background: `linear-gradient(135deg, ${post.tagColor}15 0%, rgba(255,255,255,0.02) 100%)`,
//                 borderRadius: "12px",
//                 border: `1px solid ${post.tagColor}20`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}>
//                 <svg width="48" height="32" viewBox="0 0 48 32" fill="none" opacity="0.3">
//                   <path d="M6 24 L8 10 Q10 4 14 4 L34 4 Q38 4 40 10 L42 24 Q42 28 38 28 L10 28 Q6 28 6 24Z" fill={post.tagColor} />
//                   <circle cx="14" cy="28" r="5" fill={post.tagColor} />
//                   <circle cx="34" cy="28" r="5" fill={post.tagColor} />
//                 </svg>
//               </div>

//               <div>
//                 <span style={{
//                   background: `${post.tagColor}18`,
//                   color: post.tagColor,
//                   border: `1px solid ${post.tagColor}35`,
//                   borderRadius: "100px",
//                   padding: "3px 10px",
//                   fontSize: "11px",
//                   fontWeight: 700,
//                   letterSpacing: "0.06em",
//                 }}>
//                   {post.tag}
//                 </span>
//               </div>

//               <h3 style={{
//                 color: "white",
//                 fontSize: "18px",
//                 fontWeight: 700,
//                 margin: 0,
//                 letterSpacing: "-0.02em",
//                 lineHeight: 1.35,
//               }}>
//                 {post.title}
//               </h3>

//               <p style={{
//                 color: "rgba(255,255,255,0.45)",
//                 fontSize: "14px",
//                 lineHeight: 1.65,
//                 margin: 0,
//                 flex: 1,
//               }}>
//                 {post.excerpt}
//               </p>

//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                 <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>{post.date}</span>
//                 <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>{post.readTime}</span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

















"use client";

import React, { useEffect, useRef, useState } from "react";

const POSTS = [
  {
    tag: "Road Trip",
    tagColor: "#F59E0B", // Amber
    bgLight: "#FFFBEB",
    gradient: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
    title: "Mumbai to Goa by cab: what nobody tells you about the coastal route",
    excerpt: "We rode the NH66 with a CabTale driver who'd done the route 200 times. Here's what he showed us that no travel blog mentions.",
    readTime: "5 min read",
    date: "12 Jun 2026",
    thumbnail: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <circle cx="320" cy="80" r="40" fill="#F59E0B" fillOpacity="0.2" />
        <circle cx="320" cy="80" r="20" fill="#F59E0B" fillOpacity="0.4" />
        <path d="M0 200 Q 150 150 200 200 T 400 150 L 400 200 Z" fill="#FCD34D" fillOpacity="0.5" />
        <path d="M0 200 Q 100 100 250 200 T 400 180 L 400 200 Z" fill="#F59E0B" fillOpacity="0.3" />
        <path d="M-20 220 Q 150 50 420 220" stroke="#FFFFFF" strokeWidth="8" strokeDasharray="12 12" />
      </svg>
    )
  },
  {
    tag: "Driver Story",
    tagColor: "#10B981", // Emerald
    bgLight: "#ECFDF5",
    gradient: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
    title: "From 12-hour factory shifts to being his own boss — Suresh's Tale",
    excerpt: "Suresh Patil quit his job at 38, bought a second-hand Swift, and joined CabTale. Two years later, he earns three times what he did before.",
    readTime: "7 min read",
    date: "5 Jun 2026",
    thumbnail: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <circle cx="200" cy="100" r="60" fill="#10B981" fillOpacity="0.15" />
        <rect x="160" y="70" width="80" height="60" rx="16" fill="#10B981" fillOpacity="0.3" />
        <circle cx="200" cy="100" r="16" fill="#FFFFFF" />
        <path d="M140 180 Q 200 130 260 180" stroke="#10B981" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
        <path d="M100 200 Q 200 80 300 200" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="8 8" />
      </svg>
    )
  },
  {
    tag: "City Guide",
    tagColor: "#8B5CF6", // Purple
    bgLight: "#F5F3FF",
    gradient: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)",
    title: "Navigating Bangalore's traffic: the insider knowledge only drivers have",
    excerpt: "We asked 50 Bangalore drivers for their honest take on routes, timings, and the shortcuts that GPS will never show you.",
    readTime: "4 min read",
    date: "28 May 2026",
    thumbnail: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect x="60" y="80" width="40" height="120" rx="8" fill="#8B5CF6" fillOpacity="0.2" />
        <rect x="120" y="40" width="60" height="160" rx="8" fill="#8B5CF6" fillOpacity="0.3" />
        <rect x="200" y="100" width="50" height="100" rx="8" fill="#8B5CF6" fillOpacity="0.25" />
        <rect x="270" y="60" width="70" height="140" rx="8" fill="#8B5CF6" fillOpacity="0.4" />
        <circle cx="320" cy="60" r="8" fill="#FFFFFF" />
        <circle cx="140" cy="40" r="4" fill="#FFFFFF" opacity="0.6" />
      </svg>
    )
  },
];

export default function BlogTeaserModern() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="blog"
      style={{
        backgroundColor: "#F9FAFB", // Light grey premium background
        padding: "120px 5%",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Header Area */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "flex-end", 
            justifyContent: "space-between", 
            marginBottom: "64px", 
            flexWrap: "wrap", 
            gap: "24px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div>
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
              The Tales Blog
            </span>
            <h2
              style={{
                color: "#111827",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 800,
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Stories from the <span style={{ color: "#FFC107" }}>Road</span>
            </h2>
          </div>
          
          <button 
            className="read-all-btn"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "100px",
              padding: "14px 28px",
              color: "#111827",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#FFC107";
              el.style.background = "#FFFBEB";
              const arrow = el.querySelector('.arrow') as HTMLElement;
              if (arrow) arrow.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#E5E7EB";
              el.style.background = "#FFFFFF";
              const arrow = el.querySelector('.arrow') as HTMLElement;
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            Read all stories 
            <span className="arrow" style={{ transition: "transform 0.3s ease" }}>→</span>
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {POSTS.map((post, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <article
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "24px",
                  padding: "24px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxShadow: isHovered 
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  // Staggered Entrance
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `slideUpFade 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 150}ms forwards` : "none",
                  transition: "box-shadow 0.4s ease, transform 0.4s ease",
                }}
              >
                {/* Image / Thumbnail Area */}
                <div 
                  style={{
                    width: "100%",
                    height: "180px",
                    background: post.gradient,
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    {post.thumbnail}
                  </div>
                </div>

                {/* Tag */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      background: post.bgLight,
                      color: post.tagColor,
                      border: `1px solid ${post.tagColor}40`,
                      borderRadius: "100px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "12px" }}>
                  <h3
                    style={{
                      color: isHovered ? post.tagColor : "#111827",
                      fontSize: "22px",
                      fontWeight: 800,
                      margin: 0,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      color: "#6B7280",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid #F3F4F6",
                    marginTop: "auto"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9CA3AF", fontSize: "13px", fontWeight: 500 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    {post.date}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9CA3AF", fontSize: "13px", fontWeight: 500 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {post.readTime}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}