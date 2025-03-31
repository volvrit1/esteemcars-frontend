
"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const HeroSection = ({ data }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (data.length > 0) setIsLoaded(true);
  }, [data]);

  const mobileData = data.filter((item: any) => item.mobile);
  const bannerData = data.filter((item: any) => !item?.mobile);

  return (
    <section className="relative w-full lg:h-screen">
      {/* Static First Image to Prevent Flickering */}
      {!isLoaded && bannerData.length > 0 && (
        <div className="mx-auto w-full h-full flex items-center justify-center rounded-md p-4">
          <button type="button" className="text-gray-800" disabled>
            <svg
              className="mr-3 size-5 animate-spin ..."
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </button>
        </div>
      )}

      {/* Desktop Swiper */}
      {isLoaded && (
        <div className="hidden md:block">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            initialSlide={0}
            modules={[Autoplay, EffectFade]}
            className="h-screen"
          >
            {bannerData.map((data: any) => (
              <SwiperSlide
                key={data?.image}
                className="transition-opacity duration-1000"
              >
                <Image
                  priority
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  alt={data?.title || "Banner"}
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                    data?.image || "/assets/banner002.png"
                  }`}
                  className="w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Mobile Swiper */}
      {isLoaded && (
        <div className="md:hidden">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            initialSlide={0}
            modules={[Autoplay, EffectFade]}
            className="h-auto"
          >
            {mobileData.map((data: any) => (
              <SwiperSlide
                key={data?.image}
                className="transition-opacity duration-1000"
              >
                <Image
                  priority
                  width={720}
                  height={1280}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  alt={data?.title || "Mobile Banner"}
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                    data?.image || "/assets/banner002.png"
                  }`}
                  className="w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
