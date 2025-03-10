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

// React Server Component (No need for async/await here)
const Testimonials = () => {
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
      title: "Elizabeth Thomas",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/image1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Chris William",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/image2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Catherine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/image3.png",
      date: "Jan 02 2025",
    },
  ];

  // If data is still loading or API fails, fallback to static data
  const testimonialsData = data || fallbackData;

  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto lg:w-full text-center lg:px-24 lg:mb-4">
        <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-23xl font-bold text-gray-800 leading-7 mb-4 ">
          {"Our Happy"}
          <span className="text-[#F75D34]"> {"Clients"}</span>
        </h2>
        <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-light mb-8 text-gray-800 leading-7">
          Experience our service through the eyes of our clients
        </h3>
      </div>

      {/* <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={5}
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full mx-auto rounded-xl h-full"
      >
        {testimonialsData.map((data: any, index: number) => (
          <SwiperSlide key={index} className="h-full px-2">
            <div
              key={index}
              className="container mx-auto lg:p-2 flex flex-col lg:flex-col items-center justify-between mb-8 lg:mb-0"
            >
              <div className="relative h-60 w-60 flex justify-center rounded-full border  border-green-200">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
                <span className="absolute left-[-2rem] top-0 shadow-lg rounded w-2/5 mb-1  px-1 py-4 text-center bg-white  flex flex-col justify-center items-center">
                  <FaStar
                    width={24}
                    height={24}
                    className="bg-yellow-400 text-xl rounded p-1"
                  />
                  <span className="text-gray-600 text-xs">
                    {" "}
                    {`${(parseFloat(data?.rating) || 0).toFixed(1)}/5`}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {"Good Service"}
                  </span>
                </span>
              </div>

              <div className=" w-full mt-8 lg:mt-4 lg:text-center">
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-900 leading-7 mb-1">
                  {data?.name}
                </h2>
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal tracking-widest line-clamp-4 text-gray-900 leading-7 mb-3">
                  {data?.review}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // Increased spacing between slides for better aesthetics
        slidesPerView={2} // Default to 3 slides per view
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide per view on small screens
          },
          768: {
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
        pagination={{ clickable: true }}
        className="w-full mx-auto rounded-xl h-full"
      >
        {testimonialsData.map((data: any, index: number) => (
          <SwiperSlide key={index} className="h-full px-2">
            <div className="container mx-auto lg:p-2 flex flex-col lg:flex-col items-center justify-between mb-8 lg:mb-0">
              {/* Image container */}
              <div className="relative h-60 w-60 flex justify-center rounded-full border border-green-200">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
                <span className="absolute left-[-2rem] top-0 shadow-lg rounded w-2/5 mb-1 px-1 py-4 text-center bg-white flex flex-col justify-center items-center">
                  <FaStar
                    width={24}
                    height={24}
                    className="bg-yellow-400 text-xl rounded p-1"
                  />
                  <span className="text-gray-600 text-xs">
                    {`${(parseFloat(data?.rating) || 0).toFixed(1)}/5`}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {"Good Service"}
                  </span>
                </span>
              </div>

              {/* Text Section */}
              <div className="w-full mt-8 lg:mt-4 lg:text-center">
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-900 leading-7 mb-1">
                  {data?.name}
                </h2>
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal tracking-widest line-clamp-4 text-gray-900 leading-7 mb-3">
                  {data?.review}
                </h2>
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

export default Testimonials;
