import ContactSection from "@/components/home/ContactSection";
import Faq from "@/components/support/Faq";
import { lexendDeca } from "@/data/font";
import React from "react";
import LoanSolution from "../../components/whyUs/LoanSolution";
import LoanApproval from "@/components/whyUs/LoanApproval";
import WhyChoose from "@/components/home/WhyChoose";
import SolutionHeroSection from "./components/SolutionHeroSection";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";
import LatestBlogs from "@/components/home/LatestBlogs";

const page = async () => {
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
