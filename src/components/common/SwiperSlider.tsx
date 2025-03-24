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
    <section className="relative w-full lg:h-screen">
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
        className="h-52 lg:h-screen"
      >
        {data &&
          data?.map((data: any, index: any) => (
            <SwiperSlide key={index}>
              <Image
                priority
                width={100}
                height={100}
                unoptimized
                alt={data?.title}
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                  data?.image || "/assets/banner002.png"
                }`}
                className="object-contain h-[50vh]h-auto w-full sm:block"
                onLoad={handleImageLoad}  // Set the image load handler
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
