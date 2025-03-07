import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = ({ sectionData }: { sectionData: ISection | undefined }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-12 text-center">
      <div className=" lg:w-4/6 m-auto mb-8">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData?.subtitle || "Our Story"}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "Story"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-100 mt-4 leading-8">
          {sectionData?.description || " This is a description of our story."}
        </p>
      </div>
      <div className="flex-col lg:flex lg:flex-row justify-center items-center">
        {/* Left Column - Image */}
        <div className="lg:w-2/5 w-full h-[50vh] lg:h-[80vh] 2xl:h-[30vh] flex justify-center">
          <Image
            src="/images/handShake.png" // Ensure this image exists in the public folder
            alt="Explore Image"
            width={800}
            height={630}
            className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div
          className={`lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left  `}
        >
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
            Who We Are{" "}
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
            We Take The Best Footage{" "}
          </h2> */}
          <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 leading-8">
            {sectionData?.subContents[0].description ||
              " This is a description of our story."}
          </p>

          {/* <p className="text-base sm:text-lg md:text-xl lg:text-[16px] line-clamp-4 md:line-clamp-none xl:text-[16px] text-gray-100 mt-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
          <Link
            href={"/about-us"}
            className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
