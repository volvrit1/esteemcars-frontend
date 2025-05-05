// app/solutions/page.tsx (if it's under /solutions route)

import ContactSection from "@/components/home/ContactSection";
import Faq from "@/components/support/Faq";
import { lexendDeca } from "@/data/font";
import React from "react";
import LoanSolution from "@/components/whyUs/LoanSolution";
import LoanApproval from "@/components/whyUs/LoanApproval";
import WhyChoose from "@/components/home/WhyChoose";
import SolutionHeroSection from "./components/SolutionHeroSection";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";
import LatestBlogs from "@/components/home/LatestBlogs";

// ✅ App Router SEO setup
export const metadata = {
  title: "Car Financing Solutions | Tailored Loans by Esteem",
  description:
    "Explore personalized car loan solutions with Esteem Finance. Catering to diverse needs with flexible terms and expert guidance.",
  keywords:
    "car loan solutions, personalized vehicle financing, Esteem Finance services, flexible car loans NZ",
  metadataBase: new URL("https://esteemfinance.co.nz"),
};

const Page = () => {
  return (
    <div className={lexendDeca.className}>
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

export default Page;

export const revalidate = 60;
