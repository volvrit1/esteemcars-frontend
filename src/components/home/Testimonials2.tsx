"use client";
import { getTestimonials, ISection, SubContent } from "@/utils/server";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
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
      const { loading, data } = await getTestimonials();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  // Static data fallback for development or in case API fails
  const fallbackData = [
    {
      star: 5,
      name: "John Smith",
      position: "Behavioral Science",
      review:
        "Esteem Cars offers excellent customer service and a wide variety of vehicles. I got a great deal, and the entire experience was seamless. Highly recommend!",
      image: "/images/image3.png",
      date: "Jan 02 2025",
    },
    {
      star: 5,
      name: "Lina Cruz",
      position: "Behavioral Science",
      review:
        "Esteem Cars offers excellent customer service and a wide variety of vehicles. I got a great deal, and the entire experience was seamless. Highly recommend!",
      image: "/images/image3.png",
      date: "Jan 02 2025",
    },
    {
      star: 5,
      name: "Catherine",
      position: "Behavioral Science",
      review:
        "Esteem Cars offers excellent customer service and a wide variety of vehicles. I got a great deal, and the entire experience was seamless. Highly recommend!",
      image: "/images/image3.png",
      date: "Jan 02 2025",
    },
    {
      star: 5,
      name: "Catherine",
      position: "Behavioral Science",
      review:
        "Esteem Cars offers excellent customer service and a wide variety of vehicles. I got a great deal, and the entire experience was seamless. Highly recommend!",
      image: "/images/image3.png",
      date: "Jan 02 2025",
    },
    {
      star: 5,
      name: "Catherine",
      position: "Behavioral Science",
      review:
        "Esteem Cars offers excellent customer service and a wide variety of vehicles. I got a great deal, and the entire experience was seamless. Highly recommend!",
      image: "/images/image3.png",
      date: "Jan 02 2025",
    },
  ];

  // If data is still loading or API fails, fallback to static data
  const testimonialsData = data || fallbackData;

  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto lg:w-full text-center lg:px-24 lg:mb-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center font-[poppins] text-gray-800 leading-7">
          {"See what our clients say"}
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
        {fallbackData.map((data: any, index: number) => (
          <SwiperSlide key={index} className="h-full px-2">
            <div className="container border border-gray-100 shadow-lg rounded-lg overflow-hidden">
              <div className="text-gray-900 p-6 flex justify-between w-full ">
                <div className="flex items-center justify-start">
                  {data?.star &&
                   Array(data?.star).fill(null).map((data: any, index: any) => (
                      <IoStar
                        key={index}
                        width={16}
                        height={16}
                        className="text-[#F69B00]"
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
              <div className="px-6 py-2">
                <p className="text-sm text-gray-600">
                  {data.review}
                </p>
              </div>
              {/* Text Section */}
              <div className="w-full mt-8 lg:mt-4 lg:text-center bg-[#1262A1] flex items-center gap-4 p-6">
                <Image
                  src={"/assets/profile.png"}
                  alt={"image"}
                  width={50}
                  height={50}
                  className=""
                />
                <div>
                  <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-bold text-gray-50 leading-7 mb-1">
                    {data?.name}
                  </h2>
                  <h2 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-normal tracking-widest line-clamp-4 text-gray-50 leading-7 mb-3">
                    {data?.posiotion}
                  </h2>
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
