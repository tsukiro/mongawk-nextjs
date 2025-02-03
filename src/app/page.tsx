import CTA from "@/components/Cta";
import FAQ from "@/components/Faq";
import FeaturedTime from "@/components/FeaturedTime";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import MakerIntro from "@/components/MakerIntro";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/pricing";
import TestimonialsPage from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShipFree",
};

export default function Home() {
  return (
    <div className="bg-[#212121]">
      <Navbar />
      <HeroSection />
      <FeaturedTime />
      <MakerIntro />
      <PricingSection />
      <FAQ />
      <TestimonialsPage />
      <CTA />
      <Footer />
    </div>
  );
}
