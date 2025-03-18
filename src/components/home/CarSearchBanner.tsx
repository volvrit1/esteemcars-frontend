import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CarSearchBanner = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className="flex justify-center items-center relative w-full py-10 lg:py-0 min-h-[50vh] lg:min-h-[90vh] -z-10 ">
      <div className="w-full absolute top-0 h-full lg:h-[70vh] text-center bg-[#FFF0E64D] p-4 lg:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800 leading-7">
          {"Start your car search today"}
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8 mb-4">
          {
            "Browse through a wide range of cars that suit both your budget and specific needs. Our easy-to-use platform allows you to easily and conveniently browse through different options, making it easy for you to find the ideal car that meets your lifestyle and needs."
          }
        </p>
        
      </div>
      <div className="absolute top-72 lg:top-44  h-fit inset-0 flex justify-center items-center">
        <Image
          src={"/images/beingAcar.png"}
          width={1000}
          height={1000}
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex justify-center items-center gap-4 absolute bottom-10 z-[5000]">
          <Link
            href={"#loanApplication"}
            className="bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out  lg:px-12 lg:py-4 p-0 h-14 font-light rounded-lg"
          >
            Get Your Finance Today
          </Link>
          <button className="rounded-lg p-2 px-4 h-14 text-gray-900 text-3xl bg-transparent border border-[#ff8e42]">
            <IoIosArrowForward width={16} height={16} />
          </button>
          <button className="text-gray-900 h-14 font-semibold ">
            {"Learn More"}
          </button>
        </div>
    </div>
  );
};

export default CarSearchBanner;
