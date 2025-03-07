import { ISection } from "@/utils/server";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CarSearchBanner = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className="flex justify-center items-center relative w-full py-10 lg:py-0 min-h-[50vh] lg:min-h-[85vh] ">
      <div className="w-full absolute top-0 h-full lg:h-[70vh] text-center bg-[#FFF0E6] p-4 lg:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800 leading-7">
          {sectionData?.title || "Begin Your Car"}
          <span className="text-[#F75D34]"> {"Search Today"}</span>
        </h2>
        <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg line-clamp-4 md:line-clamp-none text-gray-800 mt-4 leading-8 mb-4">
          {sectionData?.description ||
            "Use our car comparison tool to help you decide which vehicle best meets your needs and purchase it"}
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-[#1262A1]   lg:px-12 p-0 h-14 font-light rounded-lg">
            Get Your Finance Today
          </button>
          <button className="rounded-lg p-2 px-4 h-14 text-gray-900 text-3xl bg-transparent border border-[#ff8e42]">
            <IoIosArrowForward width={16} height={16} />
          </button>
          <button className="text-gray-900 h-14 font-semibold ">
            {"Learn More"}
          </button>
        </div>
      </div>
      <div className="absolute top-72 lg:top-56  h-fit inset-0 flex justify-center items-center">
        <Image
          src={"/images/beingAcar.png"}
          width={1000}
          height={1000}
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default CarSearchBanner;
