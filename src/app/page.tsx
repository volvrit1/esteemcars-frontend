import CarSearchBanner from "@/components/home/CarSearchBanner";
import Challenges from "@/components/home/Challenges";
import ContactSection from "@/components/home/ContactSection";
import EmiCalculator from "@/components/home/EmiCalculator";
import HeroSectionSlider from "@/components/home/HeroSectionSlider";
import LatestBlogs from "@/components/home/LatestBlogs";
import LoanBanner from "@/components/home/LoanBanner";
import OurPartners from "@/components/home/OurPartners";
import OurSimple from "@/components/home/OurSimple";
import OverComes from "@/components/home/OverComes";;
import Testimonials2 from "@/components/home/Testimonials2";
import WhyChooseUs from "@/components/home/WhyChooseUS";
import Faq from "@/components/support/Faq";

const Home = () => {

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
