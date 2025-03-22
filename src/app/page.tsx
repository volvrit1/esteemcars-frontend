import CarSearchBanner from "@/components/home/CarSearchBanner";
import Challenges from "@/components/home/Challenges";
import ContactSection from "@/components/home/ContactSection";
import EmiCalculator from "@/components/home/EmiCalculator";
import Follow from "@/components/home/Follow";
import HeroSection from "@/components/home/HeroSection";
import HeroSectionSlider from "@/components/home/HeroSectionSlider";
import HowDifferent from "@/components/home/HowDifferent";
import LatestBlogs from "@/components/home/LatestBlogs";
import LatestNews from "@/components/home/LatestNews";
import LoanApplication from "@/components/home/LoanApplication";
import LoanBanner from "@/components/home/LoanBanner";
import OurPartners from "@/components/home/OurPartners";
import OurSimple from "@/components/home/OurSimple";
import OverComes from "@/components/home/OverComes";
import Testimonials from "@/components/home/Tesomonials";
import Testimonials2 from "@/components/home/Testimonials2";
import Why from "@/components/home/Why";
import WhyChooseUs from "@/components/home/WhyChooseUS";
import Faq from "@/components/support/Faq";

const Home = () => {
  const data = {
    title: "Your All In One Solution For Unmanned System Force",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS capabilities.",
    image: "/images/bgHeroImage.png",
    link: "/",
  };

  return (
    <div>
      <HeroSectionSlider slug="home" />
      <OurPartners />
      <OurSimple />
      <Challenges />
      <CarSearchBanner />
      <OverComes />
      <WhyChooseUs />
      <EmiCalculator />
      <LoanBanner />
      <Testimonials2 />
      <LatestBlogs />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default Home;

export const revalidate = 60;
