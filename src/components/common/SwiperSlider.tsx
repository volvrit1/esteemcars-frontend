"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HeroSection = ({ data }: any) => {
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
        {data &&
          data?.map((data: any, index: any) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    data?.length !== 0
                      ? process.env.NEXT_PUBLIC_BASE_URL + data.image
                      : "/assets/banner001.png"
                  })`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        {/* <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/banner02.svg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/banner03.svg')" }}
          ></div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default HeroSection;
