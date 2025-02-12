import CTASection from "@/components/homepage/CTASection";
import Feature from "@/components/homepage/Feature";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <main className="flex-1 pt-16">
        <Hero />
        <Feature />
        <HowItWorks />
        <CTASection />
      </main>
    </>
  );
};

export default Homepage;
