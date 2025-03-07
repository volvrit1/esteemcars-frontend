import { ISection } from "@/utils/server";
import Image from "next/image";
import React from "react";

export default function WhyJoin({
  sectionData,
  section2Data,
}: {
  sectionData: ISection | undefined;
  section2Data: ISection | undefined;
}) {
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4  lg:py-24">
      <div className="mr-auto text-left mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
          {sectionData?.title || "Why Join Our Team"}
        </h2>
        <p className="text-base lg:w-4/6 sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-600 mt-4 leading-8">
          {sectionData?.description ||
            "We are always looking for talented individuals to join our team."}
        </p>
      </div>

      <div className="flex-col lg:flex lg:flex-row justify-center items-center mb-20">
        {/* Left Column - Image */}
        <div className="lg:w-2/4 w-full h-[50vh] lg:h-[80vh] 2xl:h-[30vh] flex justify-center">
          <Image
            src="/images/whyJoin.png" // Ensure this image exists in the public folder
            alt="Explore Image"
            width={800}
            height={630}
            className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div
          className={`lg:w-2/4 w-full mt-8 lg:mt-0 lg:pl-12 text-left md:text-center lg:text-left  `}
        >
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
            Who We Are{" "}
          </h2> */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-80 leading-7">
            {sectionData?.subContents[0]?.title || "Company Culture"}
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8">
            {sectionData?.subContents[0]?.description ||
              " We are a team of passionate individuals who are dedicated to making a difference in the world."}
          </p>
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </div>
      </div>
      <div className="flex-col lg:flex lg:flex-row-reverse  justify-center items-center">
        {/* Left Column - Image */}
        <div className="lg:w-2/4 w-full h-[50vh] lg:h-[80vh] 2xl:h-[30vh] flex justify-center">
          <Image
            src="/images/benifit.png" // Ensure this image exists in the public folder
            alt="Explore Image"
            width={800}
            height={630}
            className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div
          className={`lg:w-2/4 w-full mt-8 lg:mt-0 lg:pr-16 text-left md:text-center lg:text-left  `}
        >
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
            Who We Are{" "}
          </h2> */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-80 leading-7">
            {sectionData?.subContents[1]?.title || "Perks & Benefits"}
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8">
            {sectionData?.subContents[1]?.description ||
              " We offer a range of benefits to support your well-being and career growth."}
          </p>
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </div>
      </div>
    </div>
  );
}
