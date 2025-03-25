"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const HeroSection = ({ data }: any) => {
  const [loading, setLoading] = useState(true);

  // Handle image loading state
  const handleImageLoad = () => {
    setLoading(false);
  };

  // If data is not available, we should set the loading to false immediately
  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <section className="relative w-full">
      {/* Show loader (blue background screen) while loading */}
      {loading && (
        <div className="absolute inset-0 bg-blue-500 flex justify-center items-center">
          <span className="text-white">Loading...</span>
        </div>
      )}

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation={false}
        pagination={false}
        modules={[Autoplay, Navigation, Pagination]}
        className=""
      >
        <div className="hidden lg:block">
          {data &&
            data
              .filter((item: any) => item?.mobile === false) // Filter for mobile items
              .map((data: any) => (
                <SwiperSlide key={data?.image}>
                  <Image
                    priority
                    width={100}
                    height={100}
                    unoptimized
                    alt={data?.title}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                      data?.image || "/assets/banner002.png"
                    }`}
                    className="object-contain w-full" // hidden on mobile, shown on larger screens
                    onLoad={handleImageLoad} // Set the image load handler
                  />
                </SwiperSlide>
              ))}
        </div>

        <div className="lg:hidden">
          {data &&
            data
              .filter((item: any) => item?.mobile === true) // Filter for mobile items
              .map((data: any) => (
                <SwiperSlide key={data?.image}>
                  <picture>
                    <source
                      media="(max-width: 639px)"
                      srcSet={`${process.env.NEXT_PUBLIC_BASE_URL}${
                        data?.image || "/assets/banner002.png"
                      }`}
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={`${process.env.NEXT_PUBLIC_BASE_URL}${
                        data?.image || "/assets/banner002.png"
                      }`}
                    />
                    <Image
                      priority
                      width={100}
                      height={100}
                      unoptimized
                      alt={data?.title}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                        data?.image || "/assets/banner002.png"
                      }`}
                      className="object-contain w-full "
                      onLoad={handleImageLoad} // Set the image load handler
                    />
                  </picture>
                </SwiperSlide>
              ))}
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
