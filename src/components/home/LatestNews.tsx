import { getBlogData } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const LatestNews = async () => {
  const { data } = await getBlogData();

  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto lg:w-full text-center lg:px-24 lg:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-23xl font-bold text-gray-800 leading-7 mb-4 ">
          {"Our Latest Updates For"}
          <span className="text-[#F75D34]"> {"You Here!"}</span>
        </h2>
        <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-light mb-8 text-gray-800 leading-7">
          Whats happening around the World.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data &&
          data?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto mb-4 lg:mb-0 lg:p-2 flex flex-col lg:flex-col items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="h-60 w-full flex justify-center rounded overflow-hidden ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.coverImage}`} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className={`w-full mt-8 lg:mt-4 lg:text-left`}>
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal tracking-widest text-gray-900 leading-7 mb-3">
                  {"Loan"}
                </h2>
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold text-gray-900 leading-7 mb-1">
                  {data?.title}
                </h2>
                <Link
                  href={`/blogs/${data?.slug}`}
                  className="mt-6 w-12 h-12 text-sm sm:text-base md:text-lg bg-transparent text-black rounded border border-[#F75D34] transition flex justify-center items-center"
                >
                  <IoIosArrowForward
                    width={18}
                    height={18}
                    className="font-thin"
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// Revalidate every 3 minutes (180 seconds)
export const revalidate = 180;  // 3 minutes revalidation time

export default LatestNews;
