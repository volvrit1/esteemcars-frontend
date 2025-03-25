"use client";
import { getTestimonials } from "@/utils/server";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";

// React Server Component (No need for async/await here)
const Testimonials2 = () => {
  const [data, setData] = useState();
  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTestimonials();
      setData(data);
    };
    fetchData();
  }, []);

  // If data is still loading or API fails, fallback to static data
  const testimonialsData: any = data;
  console.log(testimonialsData);

  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto lg:w-full text-center lg:px-24 lg:mb-4">
        <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center font-[poppins] text-[#252525] leading-7 mb-8">
          {"See What Our Clients Say"}
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // Increased spacing between slides for better aesthetics
        slidesPerView={2} // Default to 3 slides per view
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
        {testimonialsData &&
          testimonialsData?.map((data: any, index: number) => (
            <SwiperSlide key={index} className="h-full">
              <div className="container border border-gray-100 shadow-lg rounded-lg overflow-hidden">
                <div className="text-gray-900 p-6 flex justify-between w-full ">
                  <div className="flex items-center justify-start">
                    {data?.rating &&
                      Array(data?.rating)
                        .fill(null)
                        .map((data: any, index: any) => (
                          <IoStar
                            key={index}
                            width={20}
                            height={20}
                            className="text-[#F69B00] text-xl"
                          />
                        ))}
                  </div>
                  <Image
                    src={"/assets/quote.png"}
                    alt={"image"}
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
                <div className="px-6 py-2 h-32">
                  <p className="text-base lg:text-sm text-[#7d7d7d] font-[poppins] line-clamp-5">
                    {data.review}
                  </p>
                </div>
                {/* Text Section */}
                <div className="w-full mt-8 lg:mt-4 lg:text-center bg-[#1262A1] flex items-center gap-4 p-6">
                  <Image
                    src={`${
                      data?.image
                        ? process.env.NEXT_PUBLIC_BASE_URL + data?.image
                        : "/assets/profile.png"
                    }`}
                    alt={"image"}
                    width={50}
                    height={50}
                    className="rounded-full min-h-16 max-h-16 max-w-16 min-w-16 object-contain overflow-hidden border bg-white"
                  />
                  <div>
                    <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-left font-bold font-[poppins] text-gray-50 leading-7 mb-1">
                      {data?.name}
                    </h2>
                    <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-normal text-left font-[cabin]  line-clamp-4 text-gray-50 leading-7 mb-3">
                      {data?.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

// Revalidate every 3 minutes (180 seconds)
export const revalidate = 180; // 3 minutes revalidation time

export default Testimonials2;
