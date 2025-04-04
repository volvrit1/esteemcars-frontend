import CarSearchBanner from "@/components/home/CarSearchBanner";
import Challenges from "@/components/home/Challenges";
import ContactSection from "@/components/home/ContactSection";
import ContactSectionLanding from "@/components/home/ContactSectionLanding";
import EmiCalculator from "@/components/home/EmiCalculator";
import FAQLanding from "@/components/home/FAQsLanding";
import LatestBlogs from "@/components/home/LatestBlogs";
import LatestBlogsLanding from "@/components/home/LatestBlogsLanding";
import LoanBanner from "@/components/home/LoanBanner";
import OurPartners from "@/components/home/OurPartners";
import SearchCars from "@/components/home/SearchCars";
import Testimonials2 from "@/components/home/Testimonials2";
import LandingHeroSection from "@/components/landingpage/LandingHeroSection";
import OurSimpleProcess from "@/components/landingpage/OurSimpleProcess";
import OverComesLanding from "@/components/landingpage/OverComesLanding";
import WhyEsteeemLanding from "@/components/landingpage/WhyEsteeemLanding";
import Faq from "@/components/support/Faq";

const Home = () => {
  return (
    <div>
      <LandingHeroSection />
      <OurPartners />
      <OurSimpleProcess />
      <OverComesLanding />
      <EmiCalculator />
      <WhyEsteeemLanding />
      <SearchCars />
      <FAQLanding />
      <Testimonials2 />
      <LatestBlogsLanding />
      <ContactSectionLanding />
    </div>
  );
};

export default Home;

export const revalidate = 60;
