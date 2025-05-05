// app/blog/page.tsx

import HeroSection from "@/components/home/HeroSection";
import LatestBlogsLanding from "@/components/home/LatestBlogsLanding";
import React from "react";

// ✅ SEO Metadata
export const metadata = {
  title: "Car Finance Insights | Esteem Finance Blog",
  description:
    "Stay informed with Esteem Finance's blog. Get the latest tips, news, and advice on car financing in New Zealand.",
  keywords:
    "car finance blog, vehicle loan tips, Esteem Finance articles, NZ car financing news",
  metadataBase: new URL("https://esteemfinance.co.nz"),
};

export default function Page() {
  const data = {
    title: "Our Latest Blogs",
    description:
      "At Esteem Finace Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile.",
    image: "/images/heroCar.png",
    link: "/",
  };

  return (
    <div>
      <HeroSection
        title={data.title}
        description={data.description}
        link={data.link}
        image={data.image}
        textShow={true}
        slug="blog"
      />
      {/* <LatestNews /> */}
      <LatestBlogsLanding />
    </div>
  );
}

export const revalidate = 60;
