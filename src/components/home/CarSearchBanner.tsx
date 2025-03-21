import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CarSearchBanner = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className=" bg-[#FFF0E64D] ">
      <div className="flex justify-center items-center relative w-full py-10 lg:py-0 min-h-[65vh] lg:h-[90vh] max-w-7xl m-auto">
        <div className="w-full absolute top-0 h-[60vh]  lg:h-[70vh] text-center   p-4 lg:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-semibold font-[poppins] text-[#252525] leading-7">
            {"Start your car search today"}
          </h2>
          <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-2xl line-clamp-4 md:line-clamp-none text-[#252525] mt-4 font-[cabin] leading-8 mb-4">
            {
              "Browse through a wide range of cars that suit both your budget and specific needs. Our easy-to-use platform allows you to easily and conveniently browse through different options, making it easy for you to find the ideal car that meets your lifestyle and needs."
            }
          </p>
        </div>
        <div className="absolute top-52 lg:top-12   h-fit inset-0 flex justify-center items-center">
          <Image
            src={"/assets/applybanner.png"}
            width={1000}
            height={1000}
            alt=""
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="flex justify-center items-center gap-4 absolute bottom-10 2xl:bottom-0 z-[5000]">
          <Link
            href={"/apply-for-car-loan"}
            className="bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out flex items-center font-[poppins] px-4 lg:px-12 lg:py-4 p-0 h-14 font-light rounded-lg"
          >
            Get Your Finance Today
          </Link>
          <button className="rounded-lg p-2 px-4 h-14 text-gray-900 text-3xl bg-transparent border border-[#ff8e42]">
            <IoIosArrowForward width={16} height={16} />
          </button>
          <button className="text-gray-900 h-14 font-semibold font-[poppins] ">
            {"Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSearchBanner;
