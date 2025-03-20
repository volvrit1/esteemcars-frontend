import { getBlogData } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const LatestBlogs = async () => {
  const { data } = await getBlogData();

  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4 lg:pt-16">
      <div className="m-auto lg:w-full text-center lg:px-24 py-10 lg:mb-4 ">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center font-[poppins] text-gray-800 leading-7">
          {"Latest Blogs "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array(4)
          .fill(null)
          ?.map((data: any, index: number) => (
            <div key={index} className="container overflow-hidden">
              <div className="text-gray-900  py-4 flex justify-start w-full ">
                <div className="flex items-center justify-start text-gray-400 text-xs">
                  {"02 MARCH 2025"}
                </div>
              </div>
              <div className="">
                <h2 className="text-lg sm:text-lg md:text-lg lg:text-base xl:text-base font-bold text-gray-800 leading-7 mb-4">
                  {"Car Loans for Bad Credit: Options and Strategies?"}
                </h2>
                <p className="text-sm text-gray-600">
                  {
                    "Addresses the challenges of bad credit and explores available loan options..."
                  }
                </p>
              </div>
              {/* Text Section */}
              
              <div className="w-full mt-8 lg:mt-4 lg:text-center border-t-2 flex items-center gap-4 py-4">
                <Image
                  src={"/assets/profile.png"}
                  alt={"image"}
                  width={30}
                  height={30}
                  className=""
                />
                <div>
                  <h2 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-normal tracking-widest line-clamp-4 text-gray-800  leading-7">
                    {"BY JOHN WICK"}
                  </h2>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// Revalidate every 3 minutes (180 seconds)
export const revalidate = 180; // 3 minutes revalidation time

export default LatestBlogs;
