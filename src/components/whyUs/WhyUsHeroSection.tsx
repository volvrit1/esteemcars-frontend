import { getBanners } from "@/utils/server";
import React from "react";

const WhyUsHeroSection = async () => {
  const { data } = await getBanners("why");
  return (
    <div className="mt-[7rem] lg:mt-[10rem]">
      <section className="relative w-full h-[20vh] md:h-[60vh] lg:h-screen ">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              data?.length !== 0
                ? process.env.NEXT_PUBLIC_BASE_URL + data[0].image
                : "/assets/why.png"
            })`,
          }}
        ></div>
      </section>
    </div>
  );
};

export default WhyUsHeroSection;
