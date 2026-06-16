// 'use client';

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { 
//   MapPin, 
//   Navigation, 
//   ShieldCheck, 
//   Star, 
//   Clock, 
//   PhoneCall, 
//   CheckCircle2, 
//   Activity,
//   Briefcase,
//   Plane,
//   Camera
// } from 'lucide-react';

// // --- STYLING CONSTANTS ---
// const BRAND_GOLD = "#D97706";
// const BRAND_DARK = "#0F172A";

// // --- DUMMY DATA FOR STORIES ---
// const STORIES = [
//   {
//     id: "nri",
//     title: "Some Journeys Bring You Home",
//     desc: "From international arrivals to your village roots. A seamless transition from the airport gate to your family's embrace.",
//     image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
//     icon: Plane
//   },
//   {
//     id: "tourist",
//     title: "Discover India Safely",
//     desc: "Delhi → Agra → Jaipur. Verified drivers, local expertise, and a dedicated travel companion for your golden triangle tour.",
//     image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop",
//     icon: Camera
//   },
//   {
//     id: "executive",
//     title: "Executive Travel",
//     desc: "Luxury fleet, convoy support, and absolute discretion. For when business requires flawless mobility.",
//     image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop",
//     icon: Briefcase
//   }
// ];

// export default function CabTaleExperience() {
//   // 1. Ref for the main journey sequence (Booking -> Driver -> Ride)
//   const journeyRef = useRef(null);
//   const { scrollYProgress: journeyProgress } = useScroll({
//     target: journeyRef,
//     offset: ["start start", "end end"]
//   });

//   // Animations mapped to scroll progress of the journey section
//   // 0.0 - 0.15: Phone slides up
//   const phoneY = useTransform(journeyProgress, [0, 0.1], ["100vh", "0vh"]);
//   const phoneScale = useTransform(journeyProgress, [0.15, 0.25], [1, 0.9]);
//   const phoneOpacity = useTransform(journeyProgress, [0.25, 0.3], [1, 0]);

//   // 0.15 - 0.25: Driver card slides in
//   const driverX = useTransform(journeyProgress, [0.1, 0.2], ["100vw", "0vw"]);
//   const driverOpacity = useTransform(journeyProgress, [0.25, 0.3], [1, 0]);

//   // 0.3 - 0.5: Car appears and road starts
//   const carOpacity = useTransform(journeyProgress, [0.25, 0.35], [0, 1]);
//   const carScale = useTransform(journeyProgress, [0.25, 0.35], [0.5, 1]);
//   const roadOpacity = useTransform(journeyProgress, [0.35, 0.4], [0, 1]);

//   // 0.5 - 0.7: Safety badges float in
//   const badge1Y = useTransform(journeyProgress, [0.4, 0.5], ["50px", "0px"]);
//   const badge1Op = useTransform(journeyProgress, [0.4, 0.5], [0, 1]);
//   const badge2Y = useTransform(journeyProgress, [0.45, 0.55], ["50px", "0px"]);
//   const badge2Op = useTransform(journeyProgress, [0.45, 0.55], [0, 1]);
//   const badge3Y = useTransform(journeyProgress, [0.5, 0.6], ["50px", "0px"]);
//   const badge3Op = useTransform(journeyProgress, [0.5, 0.6], [0, 1]);

//   // Text transitions for Journey Section
//   const text1Op = useTransform(journeyProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
//   const text2Op = useTransform(journeyProgress, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
//   const text3Op = useTransform(journeyProgress, [0.3, 0.35, 0.5, 0.55], [0, 1, 1, 0]);
//   const text4Op = useTransform(journeyProgress, [0.5, 0.55, 0.8, 0.9], [0, 1, 1, 0]);

//   // 2. Ref for Horizontal Scroll Section (Stories)
//   const storiesRef = useRef(null);
//   const { scrollYProgress: storiesProgress } = useScroll({
//     target: storiesRef,
//     offset: ["start start", "end end"]
//   });
//   const storiesX = useTransform(storiesProgress, [0, 1], ["0%", "-66.66%"]);

//   return (
//     <div className="bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30 overflow-hidden">
      
//       {/* --- GLOBAL CSS FOR ROAD ANIMATION --- */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes dash {
//           to { stroke-dashoffset: -1000; }
//         }
//         .road-line {
//           stroke-dasharray: 40 40;
//           animation: dash 20s linear infinite;
//         }
//         .hide-scroll::-webkit-scrollbar { display: none; }
//       `}} />

//       {/* --- NAVIGATION --- */}
//       <nav className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center text-white">
//         <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
//           <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
//             <Navigation size={16} className="text-white" />
//           </div>
//           CabTale
//         </div>
//         <button className="text-sm font-semibold uppercase tracking-widest hover:text-amber-500 transition-colors">
//           Menu
//         </button>
//       </nav>

//       {/* --- 1. HERO SECTION --- */}
//       <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
//         <motion.div 
//           className="absolute inset-0 z-0"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950 z-10" />
//           <img 
//             src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" 
//             alt="Scenic Highway" 
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
//             className="text-amber-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm"
//           >
//             Premium Long-Distance Travel
//           </motion.p>
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
//             className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight"
//           >
//             Every Journey <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Has A Tale.</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
//             className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light"
//           >
//             India's most trusted intercity travel network. Verified drivers, luxury fleet, and an obsession with your safety.
//           </motion.p>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <button className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-semibold transition-all shadow-[0_0_40px_rgba(217,119,6,0.3)] hover:shadow-[0_0_60px_rgba(217,119,6,0.5)] flex items-center justify-center gap-2">
//               Book Journey <Navigation size={18} />
//             </button>
//             <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-semibold transition-all border border-white/10">
//               Become a Driver
//             </button>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20"
//         >
//           <span className="text-xs tracking-widest uppercase">Scroll to experience</span>
//           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
//         </motion.div>
//       </section>

//       {/* --- THE NARRATIVE SEQUENCE (SCROLL CONTROLLED) --- */}
//       {/* We use a tall container (400vh) to give the user time to scroll through the animation phases */}
//       <section ref={journeyRef} className="relative h-[400vh] bg-slate-950">
        
//         {/* STICKY CANVAS: Holds all the animating elements */}
//         <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
//           {/* Animated Background Road (Visible only in Phase 3/4) */}
//           <motion.div 
//             style={{ opacity: roadOpacity }}
//             className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           >
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 to-slate-950" />
//             <svg width="2" height="100%" className="opacity-30">
//               <line x1="1" y1="0" x2="1" y2="100%" stroke="white" strokeWidth="2" className="road-line" />
//             </svg>
//           </motion.div>

//           {/* LEFT SIDE: Dynamic Text */}
//           <div className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-sm z-30">
//             {/* Text Phase 1 */}
//             <motion.div style={{ opacity: text1Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Book In <br/><span className="text-amber-500">Minutes.</span></h2>
//               <p className="text-slate-400 text-lg mb-6">Enter your destination and experience transparent pricing instantly.</p>
//               <ul className="space-y-3 text-slate-300">
//                 <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={20}/> Transparent pricing</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={20}/> No hidden fees</li>
//               </ul>
//             </motion.div>

//             {/* Text Phase 2 */}
//             <motion.div style={{ opacity: text2Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Trust Before <br/><span className="text-amber-500">Transit.</span></h2>
//               <p className="text-slate-400 text-lg mb-6">Every CabTale driver undergoes a rigorous 5-step verification process.</p>
//               <ul className="space-y-3 text-slate-300">
//                 <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500" size={20}/> Police Verified</li>
//                 <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500" size={20}/> Background Checked</li>
//               </ul>
//             </motion.div>

//             {/* Text Phase 3 */}
//             <motion.div style={{ opacity: text3Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Driver Is <br/><span className="text-amber-500">En Route.</span></h2>
//               <p className="text-slate-400 text-lg mb-6">Live GPS tracking ensures you know exactly when your premium ride arrives.</p>
//             </motion.div>

//             {/* Text Phase 4 */}
//             <motion.div style={{ opacity: text4Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Protected Every <br/><span className="text-amber-500">Kilometer.</span></h2>
//               <p className="text-slate-400 text-lg">Our command center monitors your intercity journey in real-time, 24/7.</p>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDE / CENTER: Visuals */}
//           <div className="absolute right-0 md:right-24 md:left-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center w-full md:w-auto h-[600px] z-20 perspective-[1000px]">
            
//             {/* Phone UI (Phase 1) */}
//             <motion.div 
//               style={{ y: phoneY, scale: phoneScale, opacity: phoneOpacity }}
//               className="absolute w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden flex flex-col"
//             >
//               {/* Phone Header */}
//               <div className="bg-slate-950 p-6 pt-10 text-center border-b border-slate-800">
//                 <h3 className="font-semibold text-lg">Where to?</h3>
//               </div>
//               {/* Phone Body */}
//               <div className="p-6 flex-1 bg-slate-900 flex flex-col gap-4">
//                 <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
//                   <div className="w-3 h-3 bg-blue-500 rounded-full" />
//                   <div>
//                     <p className="text-xs text-slate-400">Pickup</p>
//                     <p className="font-medium">Delhi Airport (DEL)</p>
//                   </div>
//                 </div>
//                 <div className="w-0.5 h-6 bg-slate-700 ml-5" />
//                 <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
//                   <div className="w-3 h-3 bg-amber-500 rounded-sm" />
//                   <div>
//                     <p className="text-xs text-slate-400">Dropoff</p>
//                     <p className="font-medium">Jaipur City Center</p>
//                   </div>
//                 </div>
//                 <div className="mt-auto">
//                   <div className="w-full py-4 bg-amber-600 rounded-xl text-center font-bold text-white relative overflow-hidden">
//                     <motion.div 
//                       animate={{ x: ["-100%", "200%"] }} 
//                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                       className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
//                     />
//                     Finding Premium Driver...
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Driver Card (Phase 2) */}
//             <motion.div
//               style={{ x: driverX, opacity: driverOpacity }}
//               className="absolute z-20 w-[320px] bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl ml-10 mt-20"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 rounded-full bg-slate-600 overflow-hidden border-2 border-amber-500">
//                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Driver" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-white flex items-center gap-2">
//                     Rajesh K. <CheckCircle2 className="text-blue-400" size={16}/>
//                   </h4>
//                   <div className="flex items-center gap-1 text-amber-400 mt-1">
//                     <Star size={14} fill="currentColor" />
//                     <Star size={14} fill="currentColor" />
//                     <Star size={14} fill="currentColor" />
//                     <Star size={14} fill="currentColor" />
//                     <Star size={14} fill="currentColor" />
//                     <span className="text-slate-300 text-xs ml-1">(4.98)</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-3 bg-slate-900/50 p-4 rounded-xl">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-400">Experience</span>
//                   <span className="font-medium">8 Years</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-400">Trips Completed</span>
//                   <span className="font-medium">1,240+</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-400">Vehicle</span>
//                   <span className="font-medium">Toyota Innova Crysta</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* The Car & Safety Badges (Phase 3 & 4) */}
//             <motion.div 
//               style={{ opacity: carOpacity, scale: carScale }}
//               className="absolute z-10 flex items-center justify-center"
//             >
//               {/* Top-down Car Silhouette */}
//               <div className="relative w-32 h-64 bg-slate-800 rounded-[3rem] border border-slate-700 shadow-2xl flex flex-col items-center justify-between py-4">
//                 {/* Windshield */}
//                 <div className="w-24 h-12 bg-slate-950 rounded-t-2xl rounded-b-md opacity-80" />
//                 {/* Sunroof */}
//                 <div className="w-20 h-24 bg-slate-900 rounded-xl border border-slate-800 opacity-50" />
//                 {/* Rear Window */}
//                 <div className="w-24 h-8 bg-slate-950 rounded-b-xl rounded-t-sm opacity-80" />

//                 {/* Headlights (Glow) */}
//                 <div className="absolute top-2 left-4 w-4 h-4 bg-white/80 rounded-full blur-[2px] shadow-[0_-20px_40px_rgba(255,255,255,0.8)]" />
//                 <div className="absolute top-2 right-4 w-4 h-4 bg-white/80 rounded-full blur-[2px] shadow-[0_-20px_40px_rgba(255,255,255,0.8)]" />
                
//                 {/* Taillights */}
//                 <div className="absolute bottom-2 left-3 w-6 h-2 bg-red-600 rounded-full blur-[1px] shadow-[0_20px_30px_rgba(220,38,38,0.8)]" />
//                 <div className="absolute bottom-2 right-3 w-6 h-2 bg-red-600 rounded-full blur-[1px] shadow-[0_20px_30px_rgba(220,38,38,0.8)]" />
//               </div>

//               {/* Floating Badges */}
//               <motion.div style={{ y: badge1Y, opacity: badge1Op }} className="absolute -left-32 top-10">
//                 <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
//                   <div className="p-2 bg-blue-500/20 rounded-full"><Activity size={18} className="text-blue-400"/></div>
//                   <div className="text-sm font-medium">AI Monitored</div>
//                 </div>
//               </motion.div>

//               <motion.div style={{ y: badge2Y, opacity: badge2Op }} className="absolute -right-40 top-32">
//                 <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
//                   <div className="p-2 bg-emerald-500/20 rounded-full"><MapPin size={18} className="text-emerald-400"/></div>
//                   <div className="text-sm font-medium">Live Tracking</div>
//                 </div>
//               </motion.div>

//               <motion.div style={{ y: badge3Y, opacity: badge3Op }} className="absolute -left-20 bottom-10">
//                 <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
//                   <div className="p-2 bg-amber-500/20 rounded-full"><PhoneCall size={18} className="text-amber-400"/></div>
//                   <div className="text-sm font-medium">24/7 SOS Support</div>
//                 </div>
//               </motion.div>

//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* --- 3. HORIZONTAL SCROLL (STORIES/USE CASES) --- */}
//       {/* 300vh container gives room for 3 cards to scroll by */}
//       <section ref={storiesRef} className="relative h-[300vh] bg-slate-900">
//         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
//           {/* Header for this section stays fixed */}
//           <div className="absolute top-24 left-6 md:left-24 z-10">
//             <h2 className="text-3xl md:text-5xl font-bold">Anywhere In <span className="text-amber-500">India.</span></h2>
//             <p className="text-slate-400 mt-2">Tailored experiences for every type of journey.</p>
//           </div>

//           {/* The scrolling track */}
//           <motion.div 
//             style={{ x: storiesX }}
//             className="flex w-[300vw] h-full items-center pt-20"
//           >
//             {STORIES.map((story, index) => {
//               const Icon = story.icon;
//               return (
//                 <div key={story.id} className="w-[100vw] h-full flex items-center justify-center p-6 md:p-24 relative">
//                   <div className="relative w-full max-w-5xl h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group">
//                     <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
//                     <img 
//                       src={story.image} 
//                       alt={story.title} 
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                     />
                    
//                     {/* Content Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-20 flex flex-col justify-end p-8 md:p-16">
//                       <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
//                         <Icon size={28} className="text-slate-950" />
//                       </div>
//                       <h3 className="text-4xl md:text-6xl font-bold mb-4">{story.title}</h3>
//                       <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
//                         {story.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* --- 4. COMMAND CENTER --- */}
//       <section className="relative py-32 md:py-48 px-6 bg-slate-950 border-t border-slate-900 flex items-center justify-center overflow-hidden">
//         {/* Abstract Map Background */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
//           <div className="w-full h-full max-w-6xl mx-auto flex flex-wrap gap-4 opacity-30 justify-center">
//              {/* Simulating a data grid/map with dots */}
//              {Array.from({ length: 400 }).map((_, i) => (
//                <div key={i} className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.9 ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'}`} />
//              ))}
//           </div>
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto text-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <ShieldCheck size={48} className="mx-auto text-amber-500 mb-8" />
//             <h2 className="text-5xl md:text-7xl font-bold mb-8">Behind Every <span className="text-amber-500">Ride.</span></h2>
//             <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
//               Our National Command Center operates 24/7, tracking vehicle health, route deviations, and driver fatigue, ensuring your journey is incident-free.
//             </p>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-16">
//               {[
//                 { label: "Active Rides", value: "2,400+" },
//                 { label: "Cities Connected", value: "150+" },
//                 { label: "Response Time", value: "< 30s" },
//                 { label: "Incident Rate", value: "0.01%" }
//               ].map((stat, i) => (
//                 <div key={i}>
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
//                   <div className="text-sm uppercase tracking-widest text-slate-500">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- 5. CONCLUSION / CTA --- */}
//       <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
//         {/* Sunset Background */}
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#451a03] to-[#78350f] z-0" />
        
//         {/* Abstract Sun */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none z-0 translate-y-1/2" />

//         <div className="relative z-10 text-center max-w-3xl px-6">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">More Than A Ride.</h2>
//             <p className="text-xl md:text-2xl text-amber-100/80 mb-12 font-light">
//               Ready for your next journey? Let's write the tale together.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-2xl">
//                 Book Your Journey
//               </button>
//               <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
//                 Corporate Plans
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Footer Links (Simple) */}
//         <div className="absolute bottom-6 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 z-10">
//           <p>© 2026 CabTale Travel Network. All rights reserved.</p>
//           <div className="flex gap-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms</a>
//             <a href="#" className="hover:text-white transition-colors">Driver Partners</a>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
























'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  ShieldCheck, 
  Star, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Activity,
  Briefcase,
  Plane,
  Camera
} from 'lucide-react';

// --- STYLING CONSTANTS ---
const BRAND_GOLD = "#D97706";
const BRAND_DARK = "#0F172A";

// --- DUMMY DATA FOR STORIES ---
const STORIES = [
  {
    id: "nri",
    title: "Some Journeys Bring You Home",
    desc: "From international arrivals to your village roots. A seamless transition from the airport gate to your family's embrace.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
    icon: Plane
  },
  {
    id: "tourist",
    title: "Discover India Safely",
    desc: "Delhi → Agra → Jaipur. Verified drivers, local expertise, and a dedicated travel companion for your golden triangle tour.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop",
    icon: Camera
  },
  {
    id: "executive",
    title: "Executive Travel",
    desc: "Luxury fleet, convoy support, and absolute discretion. For when business requires flawless mobility.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop",
    icon: Briefcase
  }
];

// --- SEEDED PSEUDO-RANDOM (same sequence every render, no hydration mismatch) ---
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function CabTaleExperience() {
  // Pre-compute dot states once — same on server and client
  const dots = useMemo(
    () => Array.from({ length: 400 }, (_, i) => seededRandom(i) > 0.9),
    []
  );

  // 1. Ref for the main journey sequence (Booking -> Driver -> Ride)
  const journeyRef = useRef(null);
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start start", "end end"]
  });

  // Animations mapped to scroll progress of the journey section
  const phoneY = useTransform(journeyProgress, [0, 0.1], ["100vh", "0vh"]);
  const phoneScale = useTransform(journeyProgress, [0.15, 0.25], [1, 0.9]);
  const phoneOpacity = useTransform(journeyProgress, [0.25, 0.3], [1, 0]);

  const driverX = useTransform(journeyProgress, [0.1, 0.2], ["100vw", "0vw"]);
  const driverOpacity = useTransform(journeyProgress, [0.25, 0.3], [1, 0]);

  const carOpacity = useTransform(journeyProgress, [0.25, 0.35], [0, 1]);
  const carScale = useTransform(journeyProgress, [0.25, 0.35], [0.5, 1]);
  const roadOpacity = useTransform(journeyProgress, [0.35, 0.4], [0, 1]);

  const badge1Y = useTransform(journeyProgress, [0.4, 0.5], ["50px", "0px"]);
  const badge1Op = useTransform(journeyProgress, [0.4, 0.5], [0, 1]);
  const badge2Y = useTransform(journeyProgress, [0.45, 0.55], ["50px", "0px"]);
  const badge2Op = useTransform(journeyProgress, [0.45, 0.55], [0, 1]);
  const badge3Y = useTransform(journeyProgress, [0.5, 0.6], ["50px", "0px"]);
  const badge3Op = useTransform(journeyProgress, [0.5, 0.6], [0, 1]);

  const text1Op = useTransform(journeyProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const text2Op = useTransform(journeyProgress, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
  const text3Op = useTransform(journeyProgress, [0.3, 0.35, 0.5, 0.55], [0, 1, 1, 0]);
  const text4Op = useTransform(journeyProgress, [0.5, 0.55, 0.8, 0.9], [0, 1, 1, 0]);

  // 2. Ref for Horizontal Scroll Section (Stories)
  const storiesRef = useRef(null);
  const { scrollYProgress: storiesProgress } = useScroll({
    target: storiesRef,
    offset: ["start start", "end end"]
  });
  const storiesX = useTransform(storiesProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <div className="bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* --- GLOBAL CSS FOR ROAD ANIMATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        .road-line {
          stroke-dasharray: 40 40;
          animation: dash 20s linear infinite;
        }
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}} />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center text-white">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
            <Navigation size={16} className="text-white" />
          </div>
          CabTale
        </div>
        <button className="text-sm font-semibold uppercase tracking-widest hover:text-amber-500 transition-colors">
          Menu
        </button>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" 
            alt="Scenic Highway" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-amber-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm"
          >
            Premium Long-Distance Travel
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight"
          >
            Every Journey <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Has A Tale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light"
          >
            India's most trusted intercity travel network. Verified drivers, luxury fleet, and an obsession with your safety.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-semibold transition-all shadow-[0_0_40px_rgba(217,119,6,0.3)] hover:shadow-[0_0_60px_rgba(217,119,6,0.5)] flex items-center justify-center gap-2">
              Book Journey <Navigation size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-semibold transition-all border border-white/10">
              Become a Driver
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to experience</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* --- THE NARRATIVE SEQUENCE (SCROLL CONTROLLED) --- */}
      <section ref={journeyRef} className="relative h-[400vh] bg-slate-950">
        
        {/* STICKY CANVAS */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Animated Background Road */}
          <motion.div 
            style={{ opacity: roadOpacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 to-slate-950" />
            <svg width="2" height="100%" className="opacity-30">
              <line x1="1" y1="0" x2="1" y2="100%" stroke="white" strokeWidth="2" className="road-line" />
            </svg>
          </motion.div>

          {/* LEFT SIDE: Dynamic Text */}
          <div className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-sm z-30">
            <motion.div style={{ opacity: text1Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Book In <br/><span className="text-amber-500">Minutes.</span></h2>
              <p className="text-slate-400 text-lg mb-6">Enter your destination and experience transparent pricing instantly.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={20}/> Transparent pricing</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={20}/> No hidden fees</li>
              </ul>
            </motion.div>

            <motion.div style={{ opacity: text2Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Trust Before <br/><span className="text-amber-500">Transit.</span></h2>
              <p className="text-slate-400 text-lg mb-6">Every CabTale driver undergoes a rigorous 5-step verification process.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500" size={20}/> Police Verified</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500" size={20}/> Background Checked</li>
              </ul>
            </motion.div>

            <motion.div style={{ opacity: text3Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Driver Is <br/><span className="text-amber-500">En Route.</span></h2>
              <p className="text-slate-400 text-lg mb-6">Live GPS tracking ensures you know exactly when your premium ride arrives.</p>
            </motion.div>

            <motion.div style={{ opacity: text4Op }} className="absolute top-0 left-0 w-full -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Protected Every <br/><span className="text-amber-500">Kilometer.</span></h2>
              <p className="text-slate-400 text-lg">Our command center monitors your intercity journey in real-time, 24/7.</p>
            </motion.div>
          </div>

          {/* RIGHT SIDE / CENTER: Visuals */}
          <div className="absolute right-0 md:right-24 md:left-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center w-full md:w-auto h-[600px] z-20 perspective-[1000px]">
            
            {/* Phone UI (Phase 1) */}
            <motion.div 
              style={{ y: phoneY, scale: phoneScale, opacity: phoneOpacity }}
              className="absolute w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-slate-950 p-6 pt-10 text-center border-b border-slate-800">
                <h3 className="font-semibold text-lg">Where to?</h3>
              </div>
              <div className="p-6 flex-1 bg-slate-900 flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <div>
                    <p className="text-xs text-slate-400">Pickup</p>
                    <p className="font-medium">Delhi Airport (DEL)</p>
                  </div>
                </div>
                <div className="w-0.5 h-6 bg-slate-700 ml-5" />
                <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
                  <div className="w-3 h-3 bg-amber-500 rounded-sm" />
                  <div>
                    <p className="text-xs text-slate-400">Dropoff</p>
                    <p className="font-medium">Jaipur City Center</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="w-full py-4 bg-amber-600 rounded-xl text-center font-bold text-white relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    Finding Premium Driver...
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Driver Card (Phase 2) */}
            <motion.div
              style={{ x: driverX, opacity: driverOpacity }}
              className="absolute z-20 w-[320px] bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl ml-10 mt-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-600 overflow-hidden border-2 border-amber-500">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Driver" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    Rajesh K. <CheckCircle2 className="text-blue-400" size={16}/>
                  </h4>
                  <div className="flex items-center gap-1 text-amber-400 mt-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-300 text-xs ml-1">(4.98)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 bg-slate-900/50 p-4 rounded-xl">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Experience</span>
                  <span className="font-medium">8 Years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Trips Completed</span>
                  <span className="font-medium">1,240+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Vehicle</span>
                  <span className="font-medium">Toyota Innova Crysta</span>
                </div>
              </div>
            </motion.div>

            {/* The Car & Safety Badges (Phase 3 & 4) */}
            <motion.div 
              style={{ opacity: carOpacity, scale: carScale }}
              className="absolute z-10 flex items-center justify-center"
            >
              <div className="relative w-32 h-64 bg-slate-800 rounded-[3rem] border border-slate-700 shadow-2xl flex flex-col items-center justify-between py-4">
                <div className="w-24 h-12 bg-slate-950 rounded-t-2xl rounded-b-md opacity-80" />
                <div className="w-20 h-24 bg-slate-900 rounded-xl border border-slate-800 opacity-50" />
                <div className="w-24 h-8 bg-slate-950 rounded-b-xl rounded-t-sm opacity-80" />
                <div className="absolute top-2 left-4 w-4 h-4 bg-white/80 rounded-full blur-[2px] shadow-[0_-20px_40px_rgba(255,255,255,0.8)]" />
                <div className="absolute top-2 right-4 w-4 h-4 bg-white/80 rounded-full blur-[2px] shadow-[0_-20px_40px_rgba(255,255,255,0.8)]" />
                <div className="absolute bottom-2 left-3 w-6 h-2 bg-red-600 rounded-full blur-[1px] shadow-[0_20px_30px_rgba(220,38,38,0.8)]" />
                <div className="absolute bottom-2 right-3 w-6 h-2 bg-red-600 rounded-full blur-[1px] shadow-[0_20px_30px_rgba(220,38,38,0.8)]" />
              </div>

              <motion.div style={{ y: badge1Y, opacity: badge1Op }} className="absolute -left-32 top-10">
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                  <div className="p-2 bg-blue-500/20 rounded-full"><Activity size={18} className="text-blue-400"/></div>
                  <div className="text-sm font-medium">AI Monitored</div>
                </div>
              </motion.div>

              <motion.div style={{ y: badge2Y, opacity: badge2Op }} className="absolute -right-40 top-32">
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                  <div className="p-2 bg-emerald-500/20 rounded-full"><MapPin size={18} className="text-emerald-400"/></div>
                  <div className="text-sm font-medium">Live Tracking</div>
                </div>
              </motion.div>

              <motion.div style={{ y: badge3Y, opacity: badge3Op }} className="absolute -left-20 bottom-10">
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                  <div className="p-2 bg-amber-500/20 rounded-full"><PhoneCall size={18} className="text-amber-400"/></div>
                  <div className="text-sm font-medium">24/7 SOS Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. HORIZONTAL SCROLL (STORIES/USE CASES) --- */}
      <section ref={storiesRef} className="relative h-[300vh] bg-slate-900">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <div className="absolute top-24 left-6 md:left-24 z-10">
            <h2 className="text-3xl md:text-5xl font-bold">Anywhere In <span className="text-amber-500">India.</span></h2>
            <p className="text-slate-400 mt-2">Tailored experiences for every type of journey.</p>
          </div>

          <motion.div 
            style={{ x: storiesX }}
            className="flex w-[300vw] h-full items-center pt-20"
          >
            {STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <div key={story.id} className="w-[100vw] h-full flex items-center justify-center p-6 md:p-24 relative">
                  <div className="relative w-full max-w-5xl h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-20 flex flex-col justify-end p-8 md:p-16">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                        <Icon size={28} className="text-slate-950" />
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold mb-4">{story.title}</h3>
                      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
                        {story.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- 4. COMMAND CENTER --- */}
      <section className="relative py-32 md:py-48 px-6 bg-slate-950 border-t border-slate-900 flex items-center justify-center overflow-hidden">
        {/* Abstract Map Background — dots pre-computed, no Math.random() at render time */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl mx-auto flex flex-wrap gap-4 opacity-30 justify-center">
            {dots.map((isActive, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ShieldCheck size={48} className="mx-auto text-amber-500 mb-8" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Behind Every <span className="text-amber-500">Ride.</span></h2>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Our National Command Center operates 24/7, tracking vehicle health, route deviations, and driver fatigue, ensuring your journey is incident-free.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-16">
              {[
                { label: "Active Rides", value: "2,400+" },
                { label: "Cities Connected", value: "150+" },
                { label: "Response Time", value: "< 30s" },
                { label: "Incident Rate", value: "0.01%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 5. CONCLUSION / CTA --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#451a03] to-[#78350f] z-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none z-0 translate-y-1/2" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">More Than A Ride.</h2>
            <p className="text-xl md:text-2xl text-amber-100/80 mb-12 font-light">
              Ready for your next journey? Let's write the tale together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-2xl">
                Book Your Journey
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Corporate Plans
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 z-10">
          <p>© 2026 CabTale Travel Network. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Driver Partners</a>
          </div>
        </div>
      </section>

    </div>
  );
}