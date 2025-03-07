import LeaderShips from "@/components/whyUs/Leaderships";
import Mission from "@/components/whyUs/Mission";
import OurStory from "@/components/whyUs/OurStorty";
import Vision from "@/components/whyUs/Vision";
import WeDone from "@/components/whyUs/WeDone";
import HeroSection from "@/components/home/HeroSection";
import { lexendDeca } from "@/data/font";
import { getAboutData } from "@/utils/server";
import Why from "@/components/home/Why";
import WhyUsBanner from "@/components/whyUs/WhyUsBanner";
import CreditScore from "@/components/whyUs/CreditScore";
import HowWeWork from "@/components/whyUs/HowWeWork";
import WhyWeAreBest from "@/components/whyUs/WhyWeAreBest";
import ContactSection from "@/components/home/ContactSection";
import LatestNews from "@/components/home/LatestNews";
import LoanApplication from "@/components/home/LoanApplication";
import Testimonials from "@/components/home/Tesomonials";
import Faq from "@/components/support/Faq";

const page = async () => {
  const data = {
    title: "About Us",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className={`${lexendDeca.className}`}>
      <WhyUsBanner />
      <CreditScore />
      <HowWeWork />
      <WhyWeAreBest />
      <LoanApplication />
      <LatestNews />
      <Testimonials />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default page;
