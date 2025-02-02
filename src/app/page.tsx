import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/pricing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#212121]">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}
