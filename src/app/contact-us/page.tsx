import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import Map from "./components/Map";
import ContactSection2 from "./components/ContactSection2";
import WeAreHere from "./components/WeAreHere";

export default function page() {

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
