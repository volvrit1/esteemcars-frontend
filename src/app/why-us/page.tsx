// app/why-us/page.tsx (for example)

import CreditScore from "@/components/whyUs/CreditScore";
import HowWeWork from "@/components/whyUs/HowWeWork";
import WhyWeAreBest from "@/components/whyUs/WhyWeAreBest";
import ContactSection from "@/components/home/ContactSection";
import Faq from "@/components/support/Faq";
import WhyUsHeroSection from "@/components/whyUs/WhyUsHeroSection";
import OurPartners from "@/components/home/OurPartners";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";

export const metadata = {
  title: "Why Choose Esteem Finance | Trusted Car Loan Experts",
  description:
    "Discover why Esteem Finance stands out in NZ. Offering expert advice, competitive rates, and a customer-centric approach to car financing.",
  keywords:
    "Esteem Finance benefits, car loan experts NZ, trusted vehicle financing, customer-focused loans",
    metadataBase: new URL("https://esteemfinance.co.nz"),
};

const Page = () => {
  return (
    <div>
      <WhyUsHeroSection />
      <OurPartners />
      <CreditScore />
      <HowWeWork />
      <WhyWeAreBest />
      <LoanBanner />
      <Testimonials2 />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default Page;

export const revalidate = 60;
