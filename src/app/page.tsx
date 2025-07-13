import { Metadata } from "next";
import CTA from "@/app/(site)/Cta";
import FAQ from "@/app/(site)/Faq";
/*
import FeaturedTime from "@/app/(site)/FeaturedTime";
*/
import Footer from "@/app/(site)/Footer";
import HeroSection from "@/app/(site)/Hero";
/*
import MakerIntro from "@/app/(site)/MakerIntro";
*/
import Navbar from "@/app/(site)/Navbar";
import PricingSection from "@/app/(site)/pricing";
/*
import TestimonialsPage from "@/app/(site)/Testimonials";
*/
import { createClient } from "@/lib/supabase/server";
import { redirect } from 'next/navigation'

// required by Nextra
export const metadata: Metadata = {
  title: "Mongawk",
};

export default async function Home() {
  const supabase = await createClient();
  const plans = await supabase.from("public_plans").select("*");
  const plan_features = await supabase.from("public_plan_features").select("*");
  const faqs = await supabase.from("public_faq").select("*");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user){
    redirect(`/dashboard`)
  }
    return (
    <div className="bg-[#212121]">
      <Navbar user={user} />
      <HeroSection />
     {/*  <FeaturedTime /> */}
     {/*  <MakerIntro /> */}
      <PricingSection plans={plans} planFeatures={plan_features} />
      <FAQ faqs={faqs} />
     {/*  <TestimonialsPage /> */}
      <CTA />
      <Footer />
    </div>
  );
}
