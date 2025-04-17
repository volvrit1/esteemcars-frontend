import { getBanners } from "@/utils/server";
import Image from "next/image";
import React from "react";

const WhyUsHeroSection = async () => {
  const { data } = await getBanners("why");
  const mobileData = data?.filter((item: any) => item.mobile);
  const bannerData = data?.filter((item: any) => !item?.mobile);
  return (
    <div className="mt-[5.7rem] lg:mt-[9rem]">
      <section className="relative w-full h-auto ">
        {bannerData && (
          <Image
            priority
            width={100}
            height={100}
            unoptimized
            alt={data[0]?.title || "why"}
            src={`${
              bannerData?.length !== 0
                ? process.env.NEXT_PUBLIC_BASE_URL + bannerData[0].image
                : "/assets/why.png"
            }`}
            className="object-cover w-full hidden lg:block" // hidden on mobile, shown on larger screens
          />
        )}

        {mobileData && (
          <picture className="lg:hidden">
            <source
              media="(max-width: 639px)"
              srcSet={`${
                mobileData?.length !== 0
                  ? process.env.NEXT_PUBLIC_BASE_URL + mobileData[0].image
                  : "/assets/why.png"
              }`}
            />
            <source
              media="(min-width: 640px)"
              srcSet={`${
                mobileData?.length !== 0
                  ? process.env.NEXT_PUBLIC_BASE_URL + mobileData[0].image
                  : "/assets/why.png"
              }`}
            />
            <Image
              priority
              width={100}
              height={100}
              unoptimized
              alt={mobileData[0]?.title || "why "}
              src={`${
                mobileData?.length !== 0
                  ? process.env.NEXT_PUBLIC_BASE_URL + mobileData[0].image
                  : "/assets/why.png"
              }`}
              className="object-cover w-full "
            />
          </picture>
        )}
      </section>
    </div>
  );
};

export default WhyUsHeroSection;
