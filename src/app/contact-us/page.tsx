import React from "react";
import HeroSection from "../../components/home/HeroSection";
import ContactUsForm from "@/components/contact/ContactUsForm";
import Faq from "@/components/support/Faq";
import ContactSection from "@/components/home/ContactSection";
import ContactHeroSection from "./components/ContactHeroSection";
import Map from "./components/Map";
import ContactSection2 from "./components/ContactSection2";
import WeAreHere from "./components/WeAreHere";

export default function page() {
  const data = {
    title: "Contact Us",
    description:
      "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile",
    image: "/images/heroCar2.png",
    link: "/",
  };
  return (
    <div>
      <ContactHeroSection />
      <WeAreHere />
      <ContactSection2 />
      <Map />
    </div>
  );
}

export const revalidate = 60;
