import { getBanners } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = async ({
  title,
  description,
  textShow,
  image,
  slug,
}: {
  title: string;
  description: string;
  link?: string;
  image: string;
  textShow?: boolean;
  slug?: string;
}) => {
  const { data } = await getBanners(slug);
  return (
    <div className="relative w-full h-[80vh] mt-[7rem] lg:mt-[10rem] md:h-screen 2xl:h-screen bg-cover  md:bg-cover font-[poppins]">
      <Image
        priority
        width={100}
        height={100}
        unoptimized
        alt={"banner"}
        src={`${
          data?.image ? process.env.NEXT_PUBLIC_BASE_URL + data?.image : image
        }`}
        className="object-cover max-h-[100vh] md:h-auto w-full hidden sm:block"
        // style={{
        //   clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
        //   overflow: "hidden",
        // }}
      />
      {textShow && <div className="absolute inset-0 bg-black/60"></div>}
    </div>
  );
};

export default HeroSection;
