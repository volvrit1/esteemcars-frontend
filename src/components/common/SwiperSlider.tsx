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
  const handleImageLoad = () => {
    setLoading(false);
  };

  const mobileData = data.filter((item: any) => item.mobile);
  const bannerData = data.filter((item: any) => !item?.mobile);

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

      <div className="hidden md:block">
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
          className="h-auto lg:h-screen hidden lg:block"
        >
          {bannerData &&
            bannerData.map((data: any) => (
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
                  className="object-cover w-full" // hidden on mobile, shown on larger screens
                  onLoad={handleImageLoad} // Set the image load handler
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="md:hidden">
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
          className="h-auto lg:h-screen lg:hidden"
        >
          {mobileData &&
            mobileData.map((data: any) => (
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
                    className="object-cover w-full "
                    onLoad={handleImageLoad} // Set the image load handler
                  />
                </picture>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
