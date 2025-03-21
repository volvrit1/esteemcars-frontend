import { getBanners } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import SwiperSlider from "../common/SwiperSlider";

const HeroSectionSlider = async ({
  title,
  description,
  image,
  textShow,
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
    <div className="mt-[7rem] lg:mt-[10rem]">
      <SwiperSlider />
    </div>
  );
};

export default HeroSectionSlider;
