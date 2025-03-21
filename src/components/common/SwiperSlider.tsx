"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full lg:h-screen ">
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
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/banner.svg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/banner1.svg')" }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
