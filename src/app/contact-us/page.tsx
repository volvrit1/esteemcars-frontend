// app/contact/page.tsx
import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import Map from "./components/Map";
import ContactSection2 from "./components/ContactSection2";
import WeAreHere from "./components/WeAreHere";

// ✅ Metadata function
export const generateMetadata = () => ({
  title: "Contact Esteem Finance | Get in Touch Today",
  description:
    "Reach out to Esteem Finance for expert car loan advice and support. We're here to assist you with all your vehicle financing needs.",
  keywords:
    "contact Esteem Finance, car loan support, vehicle financing inquiries, NZ car finance contact",
});

export const revalidate = 60; // ISR if needed

export default function Page() {
  return (
    <div>
      <ContactHeroSection />
      <WeAreHere />
      <ContactSection2 />
      <Map />
    </div>
  );
}
