import CreditScore from "@/components/whyUs/CreditScore";
import HowWeWork from "@/components/whyUs/HowWeWork";
import WhyWeAreBest from "@/components/whyUs/WhyWeAreBest";
import ContactSection from "@/components/home/ContactSection";
import Faq from "@/components/support/Faq";
import WhyUsHeroSection from "@/components/whyUs/WhyUsHeroSection";
import OurPartners from "@/components/home/OurPartners";
import LoanBanner from "@/components/home/LoanBanner";
import Testimonials2 from "@/components/home/Testimonials2";

const page = async () => {

  return (
    <div >
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

export default page;

export const revalidate = 60;
