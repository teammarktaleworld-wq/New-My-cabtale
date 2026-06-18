// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "#services" },
//   { label: "Cities", href: "#cities" },
//   { label: "Safety", href: "#safety" },
//   { label: "Drive With Us", href: "#drive" },
//   { label: "Blog", href: "#blog" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           padding: scrolled ? "12px 40px" : "20px 40px",
//           background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
//           backdropFilter: scrolled ? "blur(12px)" : "none",
//           borderBottom: scrolled ? "1px solid rgba(255,193,7,0.1)" : "none",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           transition: "all 0.3s ease",
//           fontFamily: "'Inter','Helvetica Neue',sans-serif",
//         }}
//       >
//         {/* Logo */}
//         <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
//           <div style={{
//             background: "#FFC107",
//             borderRadius: "8px",
//             width: "36px",
//             height: "36px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}>
//             <svg viewBox="0 0 24 18" width="22" height="16" fill="none">
//               <path d="M3 13 L4.5 7 Q5.5 4 8 4 L16 4 Q18.5 4 19.5 7 L21 13 Q21 15 19 15 L5 15 Q3 15 3 13Z" fill="#0A0A0A" />
//               <circle cx="7.5" cy="15.5" r="2.5" fill="#0A0A0A" stroke="#FFC107" strokeWidth="1" />
//               <circle cx="16.5" cy="15.5" r="2.5" fill="#0A0A0A" stroke="#FFC107" strokeWidth="1" />
//               <rect x="9" y="1" width="6" height="4" rx="1" fill="#0A0A0A" />
//             </svg>
//           </div>
//           <span style={{ color: "white", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.03em" }}>
//             Cab<span style={{ color: "#FFC107" }}>Tale</span>
//           </span>
//         </Link>

//         {/* Desktop links */}
//         <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="ct-desktop-nav">
//           {NAV_LINKS.map((l) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               style={{
//                 color: "rgba(255,255,255,0.65)",
//                 textDecoration: "none",
//                 fontSize: "14px",
//                 fontWeight: 500,
//                 letterSpacing: "0.01em",
//                 transition: "color 0.2s",
//               }}
//               onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFC107")}
//               onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </div>

//         {/* CTA + Hamburger */}
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <Link
//             href="#booking"
//             style={{
//               background: "#FFC107",
//               color: "#0A0A0A",
//               borderRadius: "100px",
//               padding: "10px 22px",
//               fontSize: "14px",
//               fontWeight: 700,
//               textDecoration: "none",
//               boxShadow: "0 0 20px rgba(255,193,7,0.3)",
//               transition: "transform 0.15s ease, box-shadow 0.15s ease",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(255,193,7,0.5)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255,193,7,0.3)";
//             }}
//           >
//             Book a Ride
//           </Link>

//           {/* Hamburger — shown on mobile */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             style={{
//               background: "transparent",
//               border: "1px solid rgba(255,255,255,0.15)",
//               borderRadius: "8px",
//               padding: "8px",
//               cursor: "pointer",
//               display: "none",
//             }}
//             className="ct-hamburger"
//             aria-label="Toggle menu"
//           >
//             <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
//               {menuOpen ? (
//                 <path d="M1 1L17 13M17 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
//               ) : (
//                 <>
//                   <line x1="0" y1="1" x2="18" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
//                   <line x1="0" y1="7" x2="18" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
//                   <line x1="0" y1="13" x2="18" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
//                 </>
//               )}
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile drawer */}
//       {menuOpen && (
//         <div style={{
//           position: "fixed",
//           top: "64px",
//           left: 0,
//           right: 0,
//           background: "rgba(10,10,10,0.98)",
//           backdropFilter: "blur(16px)",
//           borderBottom: "1px solid rgba(255,193,7,0.15)",
//           zIndex: 99,
//           padding: "24px 32px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           fontFamily: "'Inter','Helvetica Neue',sans-serif",
//         }}>
//           {NAV_LINKS.map((l) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 color: "rgba(255,255,255,0.8)",
//                 textDecoration: "none",
//                 fontSize: "16px",
//                 fontWeight: 500,
//                 borderBottom: "1px solid rgba(255,255,255,0.06)",
//                 paddingBottom: "16px",
//               }}
//             >
//               {l.label}
//             </Link>
//           ))}
//           <Link
//             href="#booking"
//             onClick={() => setMenuOpen(false)}
//             style={{
//               background: "#FFC107",
//               color: "#0A0A0A",
//               borderRadius: "100px",
//               padding: "14px",
//               fontSize: "15px",
//               fontWeight: 700,
//               textDecoration: "none",
//               textAlign: "center",
//               marginTop: "4px",
//             }}
//           >
//             Book a Ride →
//           </Link>
//         </div>
//       )}

//       <style>{`
//         @media (max-width: 768px) {
//           .ct-desktop-nav { display: none !important; }
//           .ct-hamburger { display: flex !important; }
//         }
//       `}</style>
//     </>
//   );
// }


















// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "#services" },
//   { label: "Cities", href: "#cities" },
//   { label: "Safety", href: "#safety" },
//   { label: "Drive With Us", href: "#drive" },
//   { label: "Blog", href: "#blog" },
// ];

// export default function NavbarModern() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Smart scroll detection
//   useEffect(() => {
//     let lastScrollY = window.scrollY;
    
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       // Glass effect toggle
//       setScrolled(currentScrollY > 20);
      
//       // Auto-hide logic (Hide on scroll down, show on scroll up)
//       if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
//         setHidden(true);
//       } else {
//         setHidden(false);
//       }
      
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [menuOpen]);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [menuOpen]);

//   return (
//     <>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           padding: "16px 5%",
//           background: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
//           backdropFilter: scrolled ? "blur(16px)" : "none",
//           WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
//           borderBottom: scrolled ? "1px solid rgba(229, 231, 235, 0.5)" : "1px solid transparent",
//           boxShadow: scrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
//           transform: hidden ? "translateY(-100%)" : "translateY(0)",
//           transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
//           fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         }}
//       >
//         <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
//           {/* Logo */}
//           <Link 
//             href="/" 
//             style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", zIndex: 101 }}
//             onClick={() => setMenuOpen(false)}
//           >
//             <div 
//               style={{
//                 background: "#FFC107",
//                 borderRadius: "10px",
//                 width: "40px",
//                 height: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow: "0 4px 10px rgba(255, 193, 7, 0.3)",
//                 transition: "transform 0.3s ease",
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05) rotate(-5deg)"}
//               onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1) rotate(0)"}
//             >
//               <svg viewBox="0 0 24 18" width="22" height="16" fill="none">
//                 <path d="M3 13 L4.5 7 Q5.5 4 8 4 L16 4 Q18.5 4 19.5 7 L21 13 Q21 15 19 15 L5 15 Q3 15 3 13Z" fill="#111827" />
//                 <circle cx="7.5" cy="15.5" r="2.5" fill="#111827" stroke="#FFC107" strokeWidth="1" />
//                 <circle cx="16.5" cy="15.5" r="2.5" fill="#111827" stroke="#FFC107" strokeWidth="1" />
//                 <rect x="9" y="1" width="6" height="4" rx="1" fill="#111827" />
//               </svg>
//             </div>
//             <span style={{ color: "#111827", fontWeight: 900, fontSize: "22px", letterSpacing: "-0.03em" }}>
//               Cab<span style={{ color: "#D97706" }}>Tale</span>
//             </span>
//           </Link>

//           {/* Desktop Links with Pill Hover Effect */}
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="ct-desktop-nav">
//             {NAV_LINKS.map((l) => (
//               <Link
//                 key={l.label}
//                 href={l.href}
//                 className="nav-link"
//                 style={{
//                   color: "#4B5563",
//                   textDecoration: "none",
//                   fontSize: "15px",
//                   fontWeight: 600,
//                   padding: "8px 16px",
//                   borderRadius: "100px",
//                   transition: "all 0.3s ease",
//                   position: "relative",
//                 }}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </div>

//           {/* CTA + Hamburger */}
//           <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 101 }}>
//             <Link
//               href="#booking"
//               className="shine-btn ct-desktop-nav"
//               style={{
//                 background: "#111827",
//                 color: "#FFFFFF",
//                 borderRadius: "100px",
//                 padding: "12px 24px",
//                 fontSize: "14px",
//                 fontWeight: 700,
//                 textDecoration: "none",
//                 boxShadow: "0 4px 12px rgba(17, 24, 39, 0.2)",
//                 transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 8px 20px rgba(17, 24, 39, 0.3)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 4px 12px rgba(17, 24, 39, 0.2)";
//               }}
//             >
//               Book a Ride
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>

//             {/* Hamburger Button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               style={{
//                 background: menuOpen ? "#F3F4F6" : "transparent",
//                 border: "none",
//                 borderRadius: "12px",
//                 width: "44px",
//                 height: "44px",
//                 cursor: "pointer",
//                 display: "none", // Overridden by media query
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "background 0.3s ease",
//               }}
//               className="ct-hamburger"
//               aria-label="Toggle menu"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="3" y1="12" x2="21" y2="12" style={{ transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg)" : "rotate(0)", transformOrigin: "center" }} />
//                 <line x1="3" y1="6" x2="21" y2="6" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center", opacity: menuOpen ? 0 : 1 }} />
//                 <line x1="3" y1="18" x2="21" y2="18" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center" }} />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Full-Screen Mobile Drawer */}
//       <div 
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "rgba(255, 255, 255, 0.95)",
//           backdropFilter: "blur(20px)",
//           WebkitBackdropFilter: "blur(20px)",
//           zIndex: 99,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "5%",
//           opacity: menuOpen ? 1 : 0,
//           pointerEvents: menuOpen ? "auto" : "none",
//           transition: "opacity 0.4s ease",
//           fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//           {NAV_LINKS.map((l, index) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 color: "#111827",
//                 textDecoration: "none",
//                 fontSize: "32px",
//                 fontWeight: 800,
//                 letterSpacing: "-0.02em",
//                 transform: menuOpen ? "translateY(0)" : "translateY(30px)",
//                 opacity: menuOpen ? 1 : 0,
//                 transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 50}ms`,
//               }}
//             >
//               {l.label}
//             </Link>
//           ))}
          
//           <div 
//             style={{ 
//               marginTop: "32px",
//               transform: menuOpen ? "translateY(0)" : "translateY(30px)",
//               opacity: menuOpen ? 1 : 0,
//               transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${NAV_LINKS.length * 50}ms`,
//             }}
//           >
//             <Link
//               href="#booking"
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 background: "#FFC107",
//                 color: "#111827",
//                 borderRadius: "16px",
//                 padding: "20px",
//                 fontSize: "18px",
//                 fontWeight: 800,
//                 textDecoration: "none",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)",
//               }}
//             >
//               Book a Ride
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Global & Hover Animations */}
//       <style>{`
//         @media (max-width: 900px) {
//           .ct-desktop-nav { display: none !important; }
//           .ct-hamburger { display: flex !important; }
//         }

//         /* Hover effect for desktop links */
//         .nav-link:hover {
//           background: #F3F4F6;
//           color: #111827 !important;
//         }

//         /* Shine effect on CTA Button */
//         .shine-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             to right,
//             rgba(255,255,255,0) 0%,
//             rgba(255,255,255,0.15) 50%,
//             rgba(255,255,255,0) 100%
//           );
//           transform: skewX(-20deg);
//           animation: shine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         @keyframes shine {
//           0% { left: -100%; }
//           20% { left: 200%; }
//           100% { left: 200%; }
//         }
//       `}</style>
//     </>
//   );
// }











// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "#services" },
//   { label: "Cities", href: "#cities" },
//   { label: "Safety", href: "#safety" },
//   { label: "Drive With Us", href: "#drive" },
//   { label: "Blog", href: "#blog" },
// ];

// // --- Custom Animated Logo Component ---
// const StoryLogo = () => {
//   return (
//     <div className="logo-stage" style={{ position: "relative", width: "160px", height: "48px", overflow: "hidden", display: "flex", alignItems: "center" }}>
      
//       {/* The Road Line */}
//       <div style={{ position: "absolute", bottom: "4px", left: 0, width: "100%", height: "2px", background: "#E5E7EB", borderRadius: "2px" }} />

//       {/* The Passenger (Girl) */}
//       <div className="passenger" style={{ position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
//         <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
//           {/* Simple premium silhouette */}
//           <circle cx="6" cy="4" r="3" fill="#111827" />
//           <path d="M3 8 Q6 7 9 8 L10 14 L8 14 L8 22 L4 22 L4 14 L2 14 Z" fill="#111827" />
//         </svg>
//       </div>

//       {/* The CabTale Logo (Car) */}
//       <div className="animated-cab" style={{ position: "absolute", bottom: "4px", zIndex: 2 }}>
//         <svg viewBox="0 0 160 40" width="140" height="35" fill="none">
//           {/* Taxi Roof & Checkers */}
//           <path d="M 60 10 L 70 4 L 90 4 L 100 10 Z" fill="#FFC107" />
//           <rect x="65" y="4" width="5" height="4" fill="#111827" />
//           <rect x="75" y="4" width="5" height="4" fill="#111827" />
//           <rect x="85" y="4" width="5" height="4" fill="#111827" />
          
//           {/* CAB Text (White/Dark outline for visibility) */}
//           <text x="15" y="32" fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="28" fontWeight="900" fill="#111827" letterSpacing="-2">
//             CAB
//           </text>
          
//           {/* TALE Text (Yellow) */}
//           <text x="75" y="32" fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="28" fontWeight="900" fill="#FFC107" letterSpacing="-2">
//             TALE
//           </text>

//           {/* Car Body Connectors & Bumpers to make text look like a car */}
//           <path d="M 5 28 L 15 28 L 15 34 L 5 34 Z" fill="#111827" />
//           <path d="M 145 20 L 155 20 L 155 34 L 145 34 Z" fill="#FFC107" />
          
//           {/* Wheels */}
//           <circle cx="35" cy="36" r="6" fill="#111827" />
//           <circle cx="35" cy="36" r="2" fill="#E5E7EB" />
          
//           <circle cx="120" cy="36" r="6" fill="#111827" />
//           <circle cx="120" cy="36" r="2" fill="#E5E7EB" />
//         </svg>
//       </div>

//       <style>{`
//         /* The Story Loop Animation */
//         .animated-cab {
//           animation: driveStory 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .passenger {
//           animation: passengerBoard 8s infinite ease-in-out;
//         }

//         @keyframes driveStory {
//           0%   { transform: translateX(-160px); } /* Offscreen left */
//           20%  { transform: translateX(10px); }  /* Drives in and stops near passenger */
//           40%  { transform: translateX(10px); }  /* Waits for passenger */
//           60%  { transform: translateX(180px); } /* Drives offscreen right */
//           100% { transform: translateX(180px); } /* Stays offscreen until loop restarts */
//         }

//         @keyframes passengerBoard {
//           0%   { opacity: 1; transform: translateX(-50%) scale(1); }
//           20%  { opacity: 1; transform: translateX(-50%) scale(1); } /* Waiting */
//           25%  { opacity: 0; transform: translateX(-50%) scale(0.8); } /* Gets in cab */
//           100% { opacity: 0; transform: translateX(-50%) scale(0.8); } /* Gone */
//         }
//       `}</style>
//     </div>
//   );
// };
// // ------------------------------------------

// export default function NavbarModern() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Smart scroll detection
//   useEffect(() => {
//     let lastScrollY = window.scrollY;
    
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       setScrolled(currentScrollY > 20);
      
//       if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
//         setHidden(true);
//       } else {
//         setHidden(false);
//       }
      
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [menuOpen]);

//   useEffect(() => {
//     if (menuOpen) document.body.style.overflow = 'hidden';
//     else document.body.style.overflow = 'unset';
//   }, [menuOpen]);

//   return (
//     <>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           padding: "16px 5%",
//           background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
//           backdropFilter: scrolled ? "blur(16px)" : "none",
//           WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
//           borderBottom: scrolled ? "1px solid rgba(229, 231, 235, 0.5)" : "1px solid transparent",
//           boxShadow: scrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
//           transform: hidden ? "translateY(-100%)" : "translateY(0)",
//           transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
//           fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         }}
//       >
//         <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
//           {/* Animated Story Logo */}
//           <Link 
//             href="/" 
//             style={{ textDecoration: "none", zIndex: 101 }}
//             onClick={() => setMenuOpen(false)}
//           >
//             <StoryLogo />
//           </Link>

//           {/* Desktop Links */}
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="ct-desktop-nav">
//             {NAV_LINKS.map((l) => (
//               <Link
//                 key={l.label}
//                 href={l.href}
//                 className="nav-link"
//                 style={{
//                   color: "#4B5563",
//                   textDecoration: "none",
//                   fontSize: "15px",
//                   fontWeight: 600,
//                   padding: "8px 16px",
//                   borderRadius: "100px",
//                   transition: "all 0.3s ease",
//                   position: "relative",
//                 }}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </div>

//           {/* CTA + Hamburger */}
//           <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 101 }}>
//             <Link
//               href="#booking"
//               className="shine-btn ct-desktop-nav"
//               style={{
//                 background: "#111827",
//                 color: "#FFFFFF",
//                 borderRadius: "100px",
//                 padding: "12px 24px",
//                 fontSize: "14px",
//                 fontWeight: 700,
//                 textDecoration: "none",
//                 boxShadow: "0 4px 12px rgba(17, 24, 39, 0.2)",
//                 transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 8px 20px rgba(17, 24, 39, 0.3)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 4px 12px rgba(17, 24, 39, 0.2)";
//               }}
//             >
//               Book a Ride
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>

//             {/* Hamburger Button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               style={{
//                 background: menuOpen ? "#F3F4F6" : "transparent",
//                 border: "none",
//                 borderRadius: "12px",
//                 width: "44px",
//                 height: "44px",
//                 cursor: "pointer",
//                 display: "none", 
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "background 0.3s ease",
//               }}
//               className="ct-hamburger"
//               aria-label="Toggle menu"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="3" y1="12" x2="21" y2="12" style={{ transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg)" : "rotate(0)", transformOrigin: "center" }} />
//                 <line x1="3" y1="6" x2="21" y2="6" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center", opacity: menuOpen ? 0 : 1 }} />
//                 <line x1="3" y1="18" x2="21" y2="18" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center" }} />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Full-Screen Mobile Drawer */}
//       <div 
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "rgba(255, 255, 255, 0.98)",
//           backdropFilter: "blur(20px)",
//           WebkitBackdropFilter: "blur(20px)",
//           zIndex: 99,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "5%",
//           opacity: menuOpen ? 1 : 0,
//           pointerEvents: menuOpen ? "auto" : "none",
//           transition: "opacity 0.4s ease",
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//           {NAV_LINKS.map((l, index) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 color: "#111827",
//                 textDecoration: "none",
//                 fontSize: "32px",
//                 fontWeight: 800,
//                 letterSpacing: "-0.02em",
//                 transform: menuOpen ? "translateY(0)" : "translateY(30px)",
//                 opacity: menuOpen ? 1 : 0,
//                 transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 50}ms`,
//               }}
//             >
//               {l.label}
//             </Link>
//           ))}
          
//           <div 
//             style={{ 
//               marginTop: "32px",
//               transform: menuOpen ? "translateY(0)" : "translateY(30px)",
//               opacity: menuOpen ? 1 : 0,
//               transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${NAV_LINKS.length * 50}ms`,
//             }}
//           >
//             <Link
//               href="#booking"
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 background: "#FFC107",
//                 color: "#111827",
//                 borderRadius: "16px",
//                 padding: "20px",
//                 fontSize: "18px",
//                 fontWeight: 800,
//                 textDecoration: "none",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)",
//               }}
//             >
//               Book a Ride
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 900px) {
//           .ct-desktop-nav { display: none !important; }
//           .ct-hamburger { display: flex !important; }
//         }

//         .nav-link:hover {
//           background: #F3F4F6;
//           color: #111827 !important;
//         }

//         .shine-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             to right,
//             rgba(255,255,255,0) 0%,
//             rgba(255,255,255,0.15) 50%,
//             rgba(255,255,255,0) 100%
//           );
//           transform: skewX(-20deg);
//           animation: shine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         @keyframes shine {
//           0% { left: -100%; }
//           20% { left: 200%; }
//           100% { left: 200%; }
//         }
//       `}</style>
//     </>
//   );
// }






















// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "#services" },
//   { label: "Cities", href: "#cities" },
//   { label: "Safety", href: "#safety" },
//   { label: "Drive With Us", href: "#drive" },
//   { label: "Blog", href: "#blog" },
// ];

// // --- Custom Premium Animated Story Logo ---
// const StoryLogo = () => {
//   return (
//     <div 
//       className="logo-stage" 
//       style={{ 
//         position: "relative", 
//         width: "180px", 
//         height: "56px", 
//         overflow: "hidden", 
//         display: "flex", 
//         alignItems: "flex-end",
//         paddingBottom: "8px"
//       }}
//     >
//       {/* Background Glow to make the scene pop */}
//       <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100px", height: "30px", background: "radial-gradient(ellipse, rgba(255,193,7,0.15) 0%, transparent 70%)", zIndex: 0 }} />

//       {/* The Road Line */}
//       <div style={{ position: "absolute", bottom: "8px", left: 0, width: "100%", height: "2px", background: "#E5E7EB", borderRadius: "2px", zIndex: 1 }} />

//       {/* The Passenger (Detailed Girl Silhouette) */}
//       <div className="passenger-girl" style={{ position: "absolute", bottom: "10px", left: "55%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
//         {/* Tiny phone screen glow */}
//         <div className="phone-glow" style={{ position: "absolute", top: "8px", left: "-6px", width: "4px", height: "4px", background: "#60A5FA", borderRadius: "50%", filter: "blur(2px)" }} />
        
//         {/* High-quality vector silhouette of a girl standing with a phone */}
//         <svg width="18" height="32" viewBox="0 0 18 32" fill="none" style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" }}>
//           {/* Head & Hair */}
//           <path d="M9 2 C10.5 2 12 3.5 12 5 C12 6.5 11 8 9.5 8 L8 8 C6.5 8 6 6.5 6 5 C6 3.5 7.5 2 9 2 Z" fill="#111827" />
//           <path d="M11 5 C12.5 6 13 8 12.5 10 C12 11 11 11 11 11 C11 11 12 9 11 7 C10 5 11 5 11 5 Z" fill="#111827" />
//           {/* Torso & Jacket */}
//           <path d="M6 9 C8 8.5 10 8.5 12 9 C13.5 9.5 14 11 14 14 L13 20 L5 20 L4 14 C4 11 4.5 9.5 6 9 Z" fill="#1F2937" />
//           {/* Legs */}
//           <path d="M6 20 L6 30 L8 30 L8 20 Z" fill="#111827" />
//           <path d="M10 20 L10 32 L12 32 L12 20 Z" fill="#111827" />
//           {/* Arm holding phone */}
//           <path d="M10 10 L6 13 L4 11" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           {/* Phone */}
//           <rect x="2" y="9" width="3" height="4" rx="0.5" fill="#4B5563" />
//         </svg>
//       </div>

//       {/* The CabTale Logo (Car) */}
//       {/* Note: In your reference "Cab Tale logo.jpg_2.jpg", "CAB" is white on black. For a light navbar, "CAB" is changed to dark gray (#111827) and "TALE" remains yellow. */}
//       <div className="animated-cabtale-car" style={{ position: "absolute", bottom: "10px", left: "0", zIndex: 3 }}>
//         <svg viewBox="0 0 160 40" width="130" height="32" fill="none" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}>
          
//           {/* Taxi Roof Checkers */}
//           <path d="M 62 10 L 72 3 L 88 3 L 98 10 Z" fill="#FFC107" />
//           <rect x="67" y="3" width="4" height="4" fill="#111827" />
//           <rect x="75" y="3" width="4" height="4" fill="#111827" />
//           <rect x="83" y="3" width="4" height="4" fill="#111827" />
          
//           {/* CAB Text (Front of Car) */}
//           <text x="15" y="32" fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="28" fontWeight="900" fill="#111827" letterSpacing="-2" fontStyle="italic">
//             CAB
//           </text>
          
//           {/* TALE Text (Back of Car) */}
//           <text x="73" y="32" fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="28" fontWeight="900" fill="#FFC107" letterSpacing="-2" fontStyle="italic">
//             TALE
//           </text>

//           {/* Front Bumper & Headlight */}
//           <path d="M 5 26 L 15 26 L 15 34 L 5 34 C 3 34 2 32 3 29 Z" fill="#111827" />
//           <path d="M 3 28 L 8 28 L 8 31 L 3 31 Z" fill="#FEF08A" />

//           {/* Back Bumper */}
//           <path d="M 140 22 L 152 22 C 155 22 156 25 155 28 L 152 34 L 140 34 Z" fill="#FFC107" />
//           <path d="M 152 24 L 154 24 L 154 28 L 150 28 Z" fill="#EF4444" />
          
//           {/* Premium Wheels */}
//           <g className="car-wheel" style={{ transformOrigin: "35px 36px" }}>
//             <circle cx="35" cy="36" r="6" fill="#1F2937" />
//             <circle cx="35" cy="36" r="3" fill="#E5E7EB" />
//             <circle cx="35" cy="36" r="1.5" fill="#9CA3AF" />
//             <line x1="35" y1="30" x2="35" y2="42" stroke="#D1D5DB" strokeWidth="0.5" />
//             <line x1="29" y1="36" x2="41" y2="36" stroke="#D1D5DB" strokeWidth="0.5" />
//           </g>
          
//           <g className="car-wheel" style={{ transformOrigin: "115px 36px" }}>
//             <circle cx="115" cy="36" r="6" fill="#1F2937" />
//             <circle cx="115" cy="36" r="3" fill="#E5E7EB" />
//             <circle cx="115" cy="36" r="1.5" fill="#9CA3AF" />
//             <line x1="115" y1="30" x2="115" y2="42" stroke="#D1D5DB" strokeWidth="0.5" />
//             <line x1="109" y1="36" x2="121" y2="36" stroke="#D1D5DB" strokeWidth="0.5" />
//           </g>
//         </svg>
//       </div>

//       <style>{`
//         /* Master Timeline: 10 Seconds */
        
//         /* 1. The Car Drives In, Stops, and Drives Away */
//         .animated-cabtale-car {
//           animation: carJourney 10s infinite cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         @keyframes carJourney {
//           0%, 10% { transform: translateX(-180px); }              /* Offscreen left */
//           25%, 50% { transform: translateX(5px); }                /* Brakes and stops in front of girl */
//           65%, 100% { transform: translateX(200px); }             /* Accelerates offscreen right */
//         }

//         /* 2. The Wheels Spin only when the car is moving */
//         .car-wheel {
//           animation: wheelSpin 10s infinite linear;
//         }

//         @keyframes wheelSpin {
//           0%, 10% { transform: rotate(0deg); }
//           25% { transform: rotate(1080deg); }                     /* Spins while driving in */
//           26%, 50% { transform: rotate(1080deg); }                /* Pauses while stopped */
//           65%, 100% { transform: rotate(2160deg); }               /* Spins while driving away */
//         }

//         /* 3. The Girl waits, then boards the cab */
//         .passenger-girl {
//           animation: girlBoards 10s infinite ease-in-out;
//         }

//         @keyframes girlBoards {
//           0%, 30% { opacity: 1; transform: translateX(-50%) scale(1); }    /* Standing and waiting */
//           35%, 85% { opacity: 0; transform: translateX(-50%) scale(0.85); }/* Fades out (enters cab) */
//           95%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }  /* Resets for next loop */
//         }

//         /* 4. Phone Screen Glow blinks while waiting, stops when she boards */
//         .phone-glow {
//           animation: blinkGlow 10s infinite ease-in-out;
//         }

//         @keyframes blinkGlow {
//           0%, 5%, 15%, 25% { opacity: 1; transform: scale(1.2); }
//           10%, 20%, 30% { opacity: 0.4; transform: scale(0.8); }
//           35%, 100% { opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// };
// // ------------------------------------------

// export default function NavbarModern() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Smart scroll detection
//   useEffect(() => {
//     let lastScrollY = window.scrollY;
    
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       // Glass effect toggle
//       setScrolled(currentScrollY > 20);
      
//       // Auto-hide logic (Hide on scroll down, show on scroll up)
//       if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
//         setHidden(true);
//       } else {
//         setHidden(false);
//       }
      
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [menuOpen]);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [menuOpen]);

//   return (
//     <>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           padding: "16px 5%",
//           background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
//           backdropFilter: scrolled ? "blur(16px)" : "none",
//           WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
//           borderBottom: scrolled ? "1px solid rgba(229, 231, 235, 0.6)" : "1px solid transparent",
//           boxShadow: scrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
//           transform: hidden ? "translateY(-100%)" : "translateY(0)",
//           transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
//           fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         }}
//       >
//         <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
//           {/* Animated Story Logo (Girl & Cab) */}
//           <Link 
//             href="/" 
//             style={{ textDecoration: "none", display: "flex", alignItems: "center", zIndex: 101 }}
//             onClick={() => setMenuOpen(false)}
//           >
//             <StoryLogo />
//           </Link>

//           {/* Desktop Links with Pill Hover Effect */}
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="ct-desktop-nav">
//             {NAV_LINKS.map((l) => (
//               <Link
//                 key={l.label}
//                 href={l.href}
//                 className="nav-link"
//                 style={{
//                   color: "#4B5563",
//                   textDecoration: "none",
//                   fontSize: "15px",
//                   fontWeight: 600,
//                   padding: "8px 16px",
//                   borderRadius: "100px",
//                   transition: "all 0.3s ease",
//                   position: "relative",
//                 }}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </div>

//           {/* CTA + Hamburger */}
//           <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 101 }}>
//             <Link
//               href="#booking"
//               className="shine-btn ct-desktop-nav"
//               style={{
//                 background: "#111827",
//                 color: "#FFFFFF",
//                 borderRadius: "100px",
//                 padding: "12px 24px",
//                 fontSize: "14px",
//                 fontWeight: 700,
//                 textDecoration: "none",
//                 boxShadow: "0 4px 12px rgba(17, 24, 39, 0.2)",
//                 transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 8px 20px rgba(17, 24, 39, 0.3)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 4px 12px rgba(17, 24, 39, 0.2)";
//               }}
//             >
//               Book a Ride
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>

//             {/* Hamburger Button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               style={{
//                 background: menuOpen ? "#F3F4F6" : "transparent",
//                 border: "none",
//                 borderRadius: "12px",
//                 width: "44px",
//                 height: "44px",
//                 cursor: "pointer",
//                 display: "none", // Overridden by media query
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "background 0.3s ease",
//               }}
//               className="ct-hamburger"
//               aria-label="Toggle menu"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="3" y1="12" x2="21" y2="12" style={{ transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg)" : "rotate(0)", transformOrigin: "center" }} />
//                 <line x1="3" y1="6" x2="21" y2="6" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center", opacity: menuOpen ? 0 : 1 }} />
//                 <line x1="3" y1="18" x2="21" y2="18" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center" }} />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Full-Screen Mobile Drawer */}
//       <div 
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "rgba(255, 255, 255, 0.95)",
//           backdropFilter: "blur(20px)",
//           WebkitBackdropFilter: "blur(20px)",
//           zIndex: 99,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "5%",
//           opacity: menuOpen ? 1 : 0,
//           pointerEvents: menuOpen ? "auto" : "none",
//           transition: "opacity 0.4s ease",
//           fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//           {NAV_LINKS.map((l, index) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 color: "#111827",
//                 textDecoration: "none",
//                 fontSize: "32px",
//                 fontWeight: 800,
//                 letterSpacing: "-0.02em",
//                 transform: menuOpen ? "translateY(0)" : "translateY(30px)",
//                 opacity: menuOpen ? 1 : 0,
//                 transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 50}ms`,
//               }}
//             >
//               {l.label}
//             </Link>
//           ))}
          
//           <div 
//             style={{ 
//               marginTop: "32px",
//               transform: menuOpen ? "translateY(0)" : "translateY(30px)",
//               opacity: menuOpen ? 1 : 0,
//               transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${NAV_LINKS.length * 50}ms`,
//             }}
//           >
//             <Link
//               href="#booking"
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 background: "#FFC107",
//                 color: "#111827",
//                 borderRadius: "16px",
//                 padding: "20px",
//                 fontSize: "18px",
//                 fontWeight: 800,
//                 textDecoration: "none",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)",
//               }}
//             >
//               Book a Ride
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Global & Hover Animations */}
//       <style>{`
//         @media (max-width: 900px) {
//           .ct-desktop-nav { display: none !important; }
//           .ct-hamburger { display: flex !important; }
//         }

//         /* Hover effect for desktop links */
//         .nav-link:hover {
//           background: #F3F4F6;
//           color: #111827 !important;
//         }

//         /* Shine effect on CTA Button */
//         .shine-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             to right,
//             rgba(255,255,255,0) 0%,
//             rgba(255,255,255,0.15) 50%,
//             rgba(255,255,255,0) 100%
//           );
//           transform: skewX(-20deg);
//           animation: shine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         @keyframes shine {
//           0% { left: -100%; }
//           20% { left: 200%; }
//           100% { left: 200%; }
//         }
//       `}</style>
//     </>
//   );
// }















"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Cities", href: "#cities" },
  { label: "Safety", href: "#safety" },
  { label: "Drive With Us", href: "#drive" },
  { label: "Blog", href: "#blog" },
];

// --- Custom Premium Animated Story Logo ---
const StoryLogo = () => {
  return (
    <div 
      className="logo-stage" 
      style={{ 
        position: "relative", 
        width: "240px", 
        height: "64px", 
        overflow: "hidden", 
        display: "flex", 
        alignItems: "flex-end",
        paddingBottom: "8px"
      }}
    >
      {/* Background Glow */}
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "120px", height: "30px", background: "radial-gradient(ellipse, rgba(255,193,7,0.15) 0%, transparent 70%)", zIndex: 0 }} />

      {/* The Road Line */}
      <div style={{ position: "absolute", bottom: "8px", left: 0, width: "100%", height: "2px", background: "#E5E7EB", borderRadius: "2px", zIndex: 1 }} />

      {/* The Passenger (Detailed Girl Silhouette) */}
      <div className="passenger-girl" style={{ position: "absolute", bottom: "10px", left: "55%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Tiny phone screen glow */}
        <div className="phone-glow" style={{ position: "absolute", top: "8px", left: "-6px", width: "4px", height: "4px", background: "#60A5FA", borderRadius: "50%", filter: "blur(2px)" }} />
        
        {/* High-quality vector silhouette of a girl standing with a phone */}
        <svg width="20" height="36" viewBox="0 0 18 32" fill="none" style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" }}>
          {/* Head & Hair */}
          <path d="M9 2 C10.5 2 12 3.5 12 5 C12 6.5 11 8 9.5 8 L8 8 C6.5 8 6 6.5 6 5 C6 3.5 7.5 2 9 2 Z" fill="#111827" />
          <path d="M11 5 C12.5 6 13 8 12.5 10 C12 11 11 11 11 11 C11 11 12 9 11 7 C10 5 11 5 11 5 Z" fill="#111827" />
          {/* Torso & Jacket */}
          <path d="M6 9 C8 8.5 10 8.5 12 9 C13.5 9.5 14 11 14 14 L13 20 L5 20 L4 14 C4 11 4.5 9.5 6 9 Z" fill="#1F2937" />
          {/* Legs */}
          <path d="M6 20 L6 30 L8 30 L8 20 Z" fill="#111827" />
          <path d="M10 20 L10 32 L12 32 L12 20 Z" fill="#111827" />
          {/* Arm holding phone */}
          <path d="M10 10 L6 13 L4 11" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Phone */}
          <rect x="2" y="9" width="3" height="4" rx="0.5" fill="#4B5563" />
        </svg>
      </div>

      {/* The CabTale Logo (Exact Replica of your uploaded image) */}
      <div className="animated-cabtale-car" style={{ position: "absolute", bottom: "7px", left: "0", zIndex: 3 }}>
        <svg viewBox="0 0 500 160" width="160" height="51" fill="none" style={{ filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.15))" }}>
          
          {/* Roof Swoop */}
          <path d="M 70 65 Q 250 10 440 70 L 430 80 Q 250 30 85 75 Z" fill="#FFC107" />
          
          {/* Taxi Roof Checkers */}
          <path d="M 230 35 L 240 15 L 270 15 L 280 35 Z" fill="#FFC107" />
          <rect x="242" y="15" width="8" height="10" fill="#111827" />
          <rect x="258" y="15" width="8" height="10" fill="#111827" />
          <rect x="250" y="25" width="8" height="10" fill="#111827" />
          <rect x="266" y="25" width="8" height="10" fill="#111827" />

          {/* Front Bumper & Headlight */}
          <path d="M 20 85 Q 10 100 15 120 L 60 120 L 70 85 Z" fill="#FFC107" />
          <path d="M 22 90 L 45 90 L 40 100 L 18 100 Z" fill="#FFFFFF" />

          {/* Back Bumper */}
          <path d="M 430 80 L 470 85 Q 485 100 465 120 L 440 120 Z" fill="#FFC107" />

          {/* Text (Adapted dark "CAB" for the light navbar) */}
          <text x="60" y="120" fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="88" fontWeight="900" fontStyle="italic" letterSpacing="-4">
            <tspan fill="#111827">CAB</tspan><tspan fill="#FFC107">TALE</tspan>
          </text>

          {/* Wheels (White borders cut into the text exactly like the real logo) */}
          <g className="car-wheel" style={{ transformOrigin: "155px 120px" }}>
            <circle cx="155" cy="120" r="26" fill="#FFFFFF" /> 
            <circle cx="155" cy="120" r="18" fill="#111827" />
            <circle cx="155" cy="120" r="8" fill="#E5E7EB" />
            <circle cx="155" cy="120" r="4" fill="#111827" />
            {/* Spokes for spin animation */}
            <line x1="155" y1="102" x2="155" y2="138" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="137" y1="120" x2="173" y2="120" stroke="#D1D5DB" strokeWidth="2" />
          </g>
          
          <g className="car-wheel" style={{ transformOrigin: "385px 120px" }}>
            <circle cx="385" cy="120" r="26" fill="#FFFFFF" />
            <circle cx="385" cy="120" r="18" fill="#111827" />
            <circle cx="385" cy="120" r="8" fill="#E5E7EB" />
            <circle cx="385" cy="120" r="4" fill="#111827" />
            {/* Spokes for spin animation */}
            <line x1="385" y1="102" x2="385" y2="138" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="367" y1="120" x2="403" y2="120" stroke="#D1D5DB" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <style>{`
        .animated-cabtale-car {
          animation: carJourney 10s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes carJourney {
          0%, 10% { transform: translateX(-200px); }              
          25%, 50% { transform: translateX(10px); }                
          65%, 100% { transform: translateX(250px); }             
        }

        .car-wheel {
          animation: wheelSpin 10s infinite linear;
        }

        @keyframes wheelSpin {
          0%, 10% { transform: rotate(0deg); }
          25% { transform: rotate(1080deg); }                     
          26%, 50% { transform: rotate(1080deg); }                
          65%, 100% { transform: rotate(2160deg); }               
        }

        .passenger-girl {
          animation: girlBoards 10s infinite ease-in-out;
        }

        @keyframes girlBoards {
          0%, 30% { opacity: 1; transform: translateX(-50%) scale(1); }    
          35%, 85% { opacity: 0; transform: translateX(-50%) scale(0.85); }
          95%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }  
        }

        .phone-glow {
          animation: blinkGlow 10s infinite ease-in-out;
        }

        @keyframes blinkGlow {
          0%, 5%, 15%, 25% { opacity: 1; transform: scale(1.2); }
          10%, 20%, 30% { opacity: 0.4; transform: scale(0.8); }
          35%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
// ------------------------------------------

export default function NavbarModern() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 5%",
          background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(229, 231, 235, 0.5)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Animated Story Logo (Girl & Cab) */}
          <Link 
            href="/" 
            style={{ textDecoration: "none", display: "flex", alignItems: "center", zIndex: 101 }}
            onClick={() => setMenuOpen(false)}
          >
            <StoryLogo />
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="ct-desktop-nav">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{
                  color: "#4B5563",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "8px 16px",
                  borderRadius: "100px",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 101 }}>
            <Link
              href="#booking"
              className="shine-btn ct-desktop-nav"
              style={{
                background: "#111827",
                color: "#FFFFFF",
                borderRadius: "100px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(17, 24, 39, 0.2)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(17, 24, 39, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(17, 24, 39, 0.2)";
              }}
            >
              Book a Ride
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: menuOpen ? "#F3F4F6" : "transparent",
                border: "none",
                borderRadius: "12px",
                width: "44px",
                height: "44px",
                cursor: "pointer",
                display: "none", 
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s ease",
              }}
              className="ct-hamburger"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" style={{ transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg)" : "rotate(0)", transformOrigin: "center" }} />
                <line x1="3" y1="6" x2="21" y2="6" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center", opacity: menuOpen ? 0 : 1 }} />
                <line x1="3" y1="18" x2="21" y2="18" style={{ transition: "all 0.3s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "rotate(0)", transformOrigin: "center" }} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      <div 
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5%",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {NAV_LINKS.map((l, index) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#111827",
                textDecoration: "none",
                fontSize: "32px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 50}ms`,
              }}
            >
              {l.label}
            </Link>
          ))}
          
          <div 
            style={{ 
              marginTop: "32px",
              transform: menuOpen ? "translateY(0)" : "translateY(30px)",
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${NAV_LINKS.length * 50}ms`,
            }}
          >
            <Link
              href="#booking"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "#FFC107",
                color: "#111827",
                borderRadius: "16px",
                padding: "20px",
                fontSize: "18px",
                fontWeight: 800,
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)",
              }}
            >
              Book a Ride
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ct-desktop-nav { display: none !important; }
          .ct-hamburger { display: flex !important; }
        }

        .nav-link:hover {
          background: #F3F4F6;
          color: #111827 !important;
        }

        .shine-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.15) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-20deg);
          animation: shine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>
    </>
  );
}