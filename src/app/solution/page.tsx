import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import LatestNews from "@/components/home/LatestNews";
import LoanApplication from "@/components/home/LoanApplication";
import Testimonials from "@/components/home/Tesomonials";
import Faq from "@/components/support/Faq";
import { lexendDeca } from "@/data/font";
import React from "react";
import LoanSolution from "../../components/whyUs/LoanSolution";
import LoanApproval from "@/components/whyUs/LoanApproval";
import WhyChoose from "@/components/home/WhyChoose";

const page = async () => {
  const data = {
    title: "Your Trusted Solution for Hassle-Free Car Loans",
    description:
      "At Esteem Car Loans, we believe that buying a car should be simple, transparent, and stress-free. That’s why we offer the best car loan solutions based on your CIBIL score, ensuring you get the lowest interest rates, flexible repayment options, and instant approvals—all with minimal paperwork!",
    image: "/images/heroCar3.png",
    link: "/",
  };
  return (
    <div className={`${lexendDeca?.className}`}>
      <HeroSection
        title={data?.title}
        description={data?.description}
        link={data?.link}
        image={data?.image}
        textShow={true}
        slug="slution"
      />
      <LoanApproval />
      <LoanSolution />
      <LoanApplication />
      <WhyChoose />
      <Testimonials />
      <LatestNews />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default page;

// Add ISR logic for revalidation every 3 minutes
export async function getStaticProps() {
  return {
    props: {}, // Any required props for the page can be passed here
    revalidate: 180, // Revalidate the page every 3 minutes (180 seconds)
  };
}
