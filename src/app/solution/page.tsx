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
import WhyUsHeroSection from "@/components/whyUs/WhyUsHeroSection";
import SolutionHeroSection from "./components/SolutionHeroSection";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";
import LatestBlogs from "@/components/home/LatestBlogs";

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
      <SolutionHeroSection />
      <LoanApproval />
      <LoanSolution />
      <LoanBanner />
      <WhyChoose />
      <Testimonials2 />
      <LatestBlogs />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default page;

export const revalidate = 60;
