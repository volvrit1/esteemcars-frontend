"use client";

import { getBlogData } from "@/utils/server";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LatestBlogs = () => {
  const [data, setData] = useState<any>();
  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBlogData();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4 lg:pt-16">
      <div className="m-auto lg:w-full text-center lg:px-24 py-10 lg:mb-4 ">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold text-center font-[poppins] text-[#252525] leading-7">
          {"Latest Blogs "}
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // Increased spacing between slides for better aesthetics
        slidesPerView={4} // Default to 3 slides per view
        breakpoints={{
          300: {
            slidesPerView: 1, // 1 slide per view on small screens
          },
          950: {
            slidesPerView: 2, // 2 slides per view on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on large screens
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        className="w-full mx-auto rounded-xl h-full"
      >
        {data &&
          data?.map((data: any, index: number) => (
            <SwiperSlide key={index} className="h-full">
              <Link key={index} href={`/blogs/${data?.slug}`}>
                <div key={index} className="container overflow-hidden">
                  <div className="text-gray-900  py-4 flex justify-start w-full ">
                    <div className="flex items-center justify-start text-gray-400 text-xs font-[poppins]">
                      {data?.date
                        ? dayjs(data?.date).format("DD MMMM YYYY")
                        : "02 MARCH 2025"}
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-lg sm:text-lg md:text-lg lg:text-base xl:text-base font-[poppins] font-bold text-[#252525] min-h-12 max-h-12 overflow-hidden line-clamp-2 leading-7 mb-4">
                      {data?.title ||
                        "Car Loans for Bad Credit: Options and Strategies?"}
                    </h2>
                    <p className="text-sm font-[cabin] text-[#7d7d7d]">
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
                      <h2 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-[poppins] font-normal  line-clamp-4 text-[#252525]  leading-7 uppercase">
                        {data?.author || "BY JOHN WICK"}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

// Revalidate every 3 minutes (180 seconds)
export const revalidate = 180; // 3 minutes revalidation time

export default LatestBlogs;
