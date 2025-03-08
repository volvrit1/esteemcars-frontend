import { getBanners } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = async ({
  title,
  description,
  image,
  textShow,
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
    <div
      className="relative w-full  h-[80vh] mt-[7rem] md:h-screen 2xl:h-[70vh] bg-cover  md:bg-cover"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${data[0]?.image})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {textShow && <div className="absolute inset-0 bg-black/60"></div>}
      {textShow && (
        <div className="absolute top-10 inset-0 p-4 flex flex-col items-center justify-center 2xl:justify-center text-center text-white lg:w-3/5 m-auto mb-10 font-[jost]">
          <h1 className="text-xl md:text-4xl lg:4xl xl:5xl font-bold">
            {title}
          </h1>
          <p className="text-sm line-clamp-4 md:line-clamp-none md:text-sm 2xl:text-fxl mt-4 max-w-2xl left-6 mb-10">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <Link
              href={"/contact-us"}
              className="rounded bg-[#1262A1] px-5 py-2 text-gray-50 flex justify-between items-center"
            >
              Learn More{" "}
              <GoArrowUpRight width={16} height={16} className="ml-2" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
