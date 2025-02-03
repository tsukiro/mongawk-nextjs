import CTA from "@/app/(site)/Cta";
import FAQ from "@/app/(site)/Faq";
import FeaturedTime from "@/app/(site)/FeaturedTime";
import FeaturesSection from "@/app/(site)/FeaturesSection";
import Footer from "@/app/(site)/Footer";
import HeroSection from "@/app/(site)/Hero";
import MakerIntro from "@/app/(site)/MakerIntro";
import Navbar from "@/app/(site)/Navbar";
import PricingSection from "@/app/(site)/pricing";
import TestimonialsPage from "@/app/(site)/Testimonials";
import Image from "next/image";

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
