import { lexendDeca } from "@/data/font";
import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mission = ({ sectionData }: { sectionData: ISection | undefined }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-12 flex flex-col lg:flex-row items-center justify-between border-none ">
      {/* Left Column - Image */}
      <div className="w-4/5  lg:w-2/5 flex justify-center mb-6 lg:mb-0">
        <Image
          src={ "/images/droneArmy.png"} // Ensure this image exists in the public folder
          alt="Explore Image"
          width={800}
          height={630}
          className="rounded-none shadow-lg w-80 2xl:w-full lg:w-96 h-[50vh] lg:h-[85vh] 2xl:h-[30vh] object-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
        />
      </div>

      {/* Right Column - Content */}
      <div
        className={`lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left relative `}
      >
        <h2
          className={`text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold tracking-widest text-gray-500 leading-7 mb-3 absolute top-[-1rem] lg:top-[-4rem] lg:left-5 left-1/2 transform -translate-x-1/2 lg:translate-x-0 -z-10 ${lexendDeca.className}`}
        >
          {sectionData?.title || "Mission"}
        </h2>
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-3xl font-bold text-gray-50 leading-7">
          {sectionData?.subtitle || "Our Mission"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-900 mt-4 leading-8">
          {sectionData?.description || "Our mission is to provide the best possible experience for our customers."}
        </p>
        <Link
          href={"/about-us"}
          className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-gray-900 border-gray-900 rounded-none shadow-md border transition"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Mission;
