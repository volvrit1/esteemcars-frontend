// app/page.tsx
import CarSearchBanner from "@/components/home/CarSearchBanner";
import Challenges from "@/components/home/Challenges";
import ContactSectionLanding from "@/components/home/ContactSectionLanding";
import EmiCalculator from "@/components/home/EmiCalculator";
import FAQLanding from "@/components/home/FAQsLanding";
import LatestBlogsLanding from "@/components/home/LatestBlogsLanding";
import LoanBanner from "@/components/home/LoanBanner";
import OurPartners from "@/components/home/OurPartners";
import SearchCars from "@/components/home/SearchCars";
import Testimonials2 from "@/components/home/Testimonials2";
import LandingHeroSection from "@/components/landingpage/LandingHeroSection";
import OurSimpleProcess from "@/components/landingpage/OurSimpleProcess";
import OverComesLanding from "@/components/landingpage/OverComesLanding";
import WhyEsteeemLanding from "@/components/landingpage/WhyEsteeemLanding";

export const metadata = {
  title: "Car Finance NZ | Fast & Easy Loans - Esteem Finance",
  description:
    "Secure your dream car with Esteem Finance. Enjoy quick approvals, flexible terms, and a hassle-free process tailored for New Zealanders.",
  keywords:
    "car finance NZ, vehicle loans, fast car loans, Esteem Finance, New Zealand car financing",
  metadataBase: new URL("https://esteemfinance.co.nz"),
};

const HomePage = () => {
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

export default HomePage;
