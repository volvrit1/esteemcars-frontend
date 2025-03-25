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
    <div className="relative w-full lg:h-[85vh] 2xl:h-screen mt-[5.7rem] lg:mt-[8.5rem] bg-cover  md:bg-cover font-[poppins]">
      <Image
        priority
        width={100}
        height={100}
        unoptimized
        alt={"banner"}
        src={`${
          data ? process.env.NEXT_PUBLIC_BASE_URL + data[0]?.image : image
        }`}
        className="object-cover max-h-[100vh] md:h-auto w-full sm:block"
        // style={{
        //   clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
        //   overflow: "hidden",
        // }}
      />
  
    </div>
  );
};

export default HeroSection;
