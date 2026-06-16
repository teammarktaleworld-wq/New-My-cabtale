

// app/page.tsx
// Assemble the full CabTale marketing page

import AppDownloadBanner from "@/components/Homepage/Appdownloadbanner/page";
import BlogTeaser from "@/components/Homepage/Blogteaser/page";
import BookingWidget from "@/components/Homepage/Bookingwidget/page";
import CabTaleHero from "@/components/Homepage/CabTaleHero/page";
import CityGrid from "@/components/Homepage/Citygrid/page";
import DriveWithUs from "@/components/Homepage/Drivewithus/page";
import Footer from "@/components/Homepage/Footer/page";
import HowItWorks from "@/components/Homepage/Howitworks/page";
import Navbar from "@/components/Homepage/Navbar/page";
import RideTypes from "@/components/Homepage/Ridetypes/page";
import SafetySection from "@/components/Homepage/Safetysection/page";
import StatsBar from "@/components/Homepage/Statsbar/page";
import TestimonialsCarousel from "@/components/Homepage/Testimonialscarousel/page";
import WhyChooseUs from "@/components/Homepage/Whychooseus/page";

export default function Home() {
  return (
    <main style={{ background: "#0A0A0A" }}>
      <Navbar/>
      <CabTaleHero />
      <StatsBar/>
      <HowItWorks />
      <BookingWidget />
      <RideTypes />
      <WhyChooseUs />
      <SafetySection />
      <TestimonialsCarousel />
      <CityGrid />
      <AppDownloadBanner />
      <DriveWithUs />
      <BlogTeaser />
      <Footer />
    </main>
  );
}