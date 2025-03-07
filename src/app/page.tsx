import CarLoanWizard from "@/components/common/CarLoanWizard";
import ContactUsForm from "@/components/contact/ContactUsForm";
import CarSearchBanner from "@/components/home/CarSearchBanner";
import ContactSection from "@/components/home/ContactSection";
import EmiCalculator from "@/components/home/EmiCalculator";
import Follow from "@/components/home/Follow";
import HeroSection from "@/components/home/HeroSection";
import HowDifferent from "@/components/home/HowDifferent";
import LatestNews from "@/components/home/LatestNews";
import LoanApplication from "@/components/home/LoanApplication";
import OurPartners from "@/components/home/OurPartners";
import OverComes from "@/components/home/OverComes";
import Testimonials from "@/components/home/Tesomonials";
import Why from "@/components/home/Why";
import Faq from "@/components/support/Faq";

const Home = async () => {
  // const {
  //   loading,
  //   title,
  //   description,
  //   section1,
  //   section2,
  //   section3,
  //   section4,
  //   section5,
  //   section6,
  //   section7,
  // } = await getHomeData();
  // if (!loading) return null;
  const data = {
    title: "Your All In One Solution For Unmanned System Force",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    image: "/images/bgHeroImage.png",
    link: "/",
  };
  return (
    <div>
      <HeroSection
        title={data?.title}
        description={data?.description}
        image={data?.image}
        link={"/contact"}
        textShow={false}
      />
      <OurPartners />
      <HowDifferent />
      <CarSearchBanner />
      <OverComes />
      <Why />
      <EmiCalculator />
      <Follow />
      <LoanApplication />
      <LatestNews />
      <Testimonials />
      <Faq />
      <ContactSection />
      {/* <CarLoanWizard /> */}
      {/* <WeBestSection /> */}
      {/*
      {section2 && <Service sectionData={section2} />}
      {section7 && <LatestNews sectionData={section7} />} */}
    </div>
  );
};

export default Home;
