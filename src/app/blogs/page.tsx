import HeroSection from "@/components/home/HeroSection";
import LatestNews from "@/components/home/LatestNews";
import React from "react";

// This is the page function where the static props will be fetched and revalidated
export default function Page() {
  const data = {
    title: "Our Latest Blogs",
    description:
      "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile.",
    image: "/images/heroCar.png",
    link: "/",
  };

  return (
    <div>
      <HeroSection
        title={data?.title}
        description={data?.description}
        link={data?.link}
        image={data?.image}
        textShow={true}
        slug="blog"
      />
      <LatestNews />
    </div>
  );
}

export const revalidate = 60; 