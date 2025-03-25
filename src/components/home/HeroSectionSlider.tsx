import { getBanners } from "@/utils/server";
import React from "react";
import SwiperSlider from "../common/SwiperSlider";

const HeroSectionSlider = async ({
  slug,
}: {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
  textShow?: boolean;
  slug?: string;
}) => {
  const { data } = await getBanners(slug);
  return (
    <div className="mt-[5.7rem] lg:mt-[8.5rem]">
      <SwiperSlider data={data} />
    </div>
  );
};

export default HeroSectionSlider;
