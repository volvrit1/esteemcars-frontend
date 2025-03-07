import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyUsBanner() {
  return (
    <div className="max-w-7xl m-auto lg:p-4 pt-28 lg:py-28 ">
      <section
        className={`container mx-auto px-4 sm:px-6 lg:px-16  lg:py-12 flex flex-col lg:flex-row items-center justify-between  border-none `}
      >
        {/* Left Column - Image */}

        {/* Right Column - Content */}
        <div
          className={`lg:w-1/2 w-full mt-8 lg:mt-0  text-center lg:text-left relative `}
        >
          <h2 className="text-3xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-4xl text-gray-800 leading-7 font-[jost] font-semibold lg:w-3/4">
            {"Why Choose Esteem"}
            <span className="text-[#F75D34]"> {"Car Loans?"}</span>
          </h2>
          <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8 mb-8 lg:w-3/4">
            {
              "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile"
            }
          </p>
          <Link
            href={"/about-us"}
            className="mt-6 px-6 py-3 sm:px-10 sm:py-3 text-sm sm:text-sm md:text-sm bg-[#1262A1] text-gray-100 border-gray-900 rounded shadow-md border transition"
          >
            Know More
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={"/images/whyCar.png"} // Ensure this image exists in the public folder
            alt="Explore Image"
            width={800}
            height={630}
            className="rounded-none object-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl 2xl:max-w-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
