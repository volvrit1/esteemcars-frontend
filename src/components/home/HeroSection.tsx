import { getBanners } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = async ({
  title,
  description,
  textShow,
  image,
  slug,
}: {
  title: string;
  description: string;
  link?: string;
  image: string;
  textShow?: boolean;
  slug?: string;
}) => {
  const { data } = await getBanners(slug);
  const mobileData = data.filter((item: any) => item.mobile);
  const bannerData = data.filter((item: any) => !item?.mobile);
  return (
    <div className="mt-[5.7rem] lg:mt-[8.5rem]">
      <section className="relative w-full h-auto ">
        {bannerData && (
          <Image
            priority
            width={100}
            height={100}
            unoptimized
            alt={bannerData[0]?.title || "blog"}
            src={`${
              bannerData?.length !== 0
                ? process.env.NEXT_PUBLIC_BASE_URL + bannerData[0].image
                : "/assets/blog.png"
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
                  : "/assets/blog.png"
              }`}
            />
            <source
              media="(min-width: 640px)"
              srcSet={`${
                mobileData?.length !== 0
                  ? process.env.NEXT_PUBLIC_BASE_URL + mobileData[0].image
                  : "/assets/blog.png"
              }`}
            />
            <Image
              priority
              width={100}
              height={100}
              unoptimized
              alt={mobileData[0]?.title || "blog "}
              src={`${
                mobileData?.length !== 0
                  ? process.env.NEXT_PUBLIC_BASE_URL + mobileData[0].image
                  : "/assets/blog.png"
              }`}
              className="object-cover w-full "
            />
          </picture>
        )}
      </section>
    </div>
  );
};

export default HeroSection;
