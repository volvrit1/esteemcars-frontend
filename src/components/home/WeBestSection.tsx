import { ISection, SubContent } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const WeBestSection = ({ sectionData }: { sectionData?: ISection }) => {

  return (
    <div className="max-w-7xl relative lg:max-w-6xl  m-auto p-4">
      <div className="absolute top-44 right-0 inset-0 flex justify-center items-center">
        <div className="w-2/5  h-screen bg-gradient-to-r from-[#737373] via-10% via-[#737373] to-[#ffa7a7] opacity-30 rounded-full blur-3xl -z-40"></div>
      </div>
      <div className="m-auto lg:w-3/5 text-center lg:mb-16">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal  text-gray-50 leading-7 mb-3">
          {sectionData?.subtitle || "Featured Products"}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "We have the best equipment"}{" "}
        </h2>
        <p className="text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 leading-8">
          {sectionData?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
        </p>
      </div>
      <div className="">
        {sectionData?.subContents &&
          sectionData?.subContents?.map((data: SubContent, index: number) => (
            <div
              key={index}
              className="container mx-auto p-0 sm:p-6 lg:p-12 xl:p-20 2xl:p-32 py-12 flex flex-col lg:flex-row items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="lg:w-2/4 h-80  w-full flex justify-center">
                <Image
                  src={"/images/pro1.png"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div
                className={`lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 lg:text-left  `}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal  text-gray-50 leading-7 mb-3">
                  {"#0"}
                  {index + 1}
                </h2>
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-50 leading-7">
                  {data?.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 leading-8">
                  {data?.description}
                </p>
                <Link
                  href={"/contact-us"}
                  className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center"
                >
                  View Products{" "}
                  <GoArrowUpRight width={20} height={20} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeBestSection;
