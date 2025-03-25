import { getBlogData } from "@/utils/server";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestNews = async () => {
  const { data } = await getBlogData();
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto lg:w-full text-center lg:px-24 lg:mb-4">
        <h2 className="lg:w-3/5 m-auto text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-center text-[#252525] font-[poppins]">
          {"Our Latest Updates For"}
          {" You Here! "}
        </h2>
        <p className=" text-base sm:text-base md:text-base lg:text-base xl:text-base line-clamp-4 md:line-clamp-none text-[#252525] py-4 font-[cabin] text-center mb-4">
          Whats happening around the World.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data &&
          data?.map((data: any, index: number) => (
            <Link key={index} href={`/blogs/${data?.slug}`}>
              <div className="container overflow-hidden font-[poppins]">
                <div className="text-gray-900  py-4 flex justify-start w-full ">
                  <div className="flex items-center justify-start text-gray-400 text-xs">
                    {dayjs(data?.date).format("DD MMMM YYYY") ||
                      "02 MARCH 2025"}
                  </div>
                </div>
                <div className="">
                  <h2 className="text-lg sm:text-lg md:text-lg lg:text-base xl:text-base font-bold text-[#252525] min-h-12  line-clamp-2 leading-7 mb-4">
                    {data?.title ||
                      "Car Loans for Bad Credit: Options and Strategies?"}
                  </h2>
                  <p className="text-base text-[#7d7d7d] font-[cabin] max-h-12 min-h-12 overflow-hidden line-clamp-2">
                    {data?.description ||
                      "Addresses the challenges of bad credit and explores available loan options..."}
                  </p>
                </div>
                {/* Text Section */}

                <div className="w-full mt-8 lg:mt-4 lg:text-center border-t-2 flex items-center gap-4 py-4">
                  <Image
                    src={`${
                      data?.coverImage
                        ? process.env.NEXT_PUBLIC_BASE_URL + data?.coverImage
                        : "/assets/profile.png"
                    }`}
                    alt={"image"}
                    width={30}
                    height={30}
                    className="rounded-full min-h-12 max-h-12 max-w-12 min-w-12 object-cover border border-gray-100   "
                  />
                  <div>
                    <h2 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-normal  line-clamp-4 text-[#252525]  leading-7 uppercase">
                      {data?.author || "BY JOHN WICK"}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

// Revalidate every 3 minutes (180 seconds)
export const revalidate = 180; // 3 minutes revalidation time

export default LatestNews;
