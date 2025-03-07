import { ISection, SubContent } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const   LoanSolution = ({ sectionData }: { sectionData?: ISection }) => {
  const datas = [
    {
      title: "Identity Proof",
      description:
        "We have streamlined the process to ensure quick approvals and easy access to funds so you can focus on driving home your dream car.",
      image: "/images/solution1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Address Proof",
      description:
        "We have streamlined the process to ensure quick approvals and easy access to funds so you can focus on driving home your dream car.",
      image: "/images/solution2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Income Proof",
      description: "We have streamlined the process to ensure quick approvals and easy access to funds so you can focus on driving home your dream car.",
      image: "/images/solution3.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4 lg:pt-20">
      <div className="m-auto lg:w-w-4/5  text-center lg:px-24 lg:mb-4">
        <h2  className="lg:w-3/5 m-auto text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-800 leading-7 font-[jost]">
          
          <span className="text-[#F75D34]"> {"Required Documents "}</span>
          {"for Loan Approval"}
        </h2>
        <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl line-clamp-4 md:line-clamp-none text-gray-800 lg:px-24  mt-4 leading-8 mb-4">

          We have streamlined the process to ensure quick approvals and easy
          access to funds so you can focus on driving home your dream car.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {datas &&
          datas?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto lg:p-2 flex flex-col lg:flex-col items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="relative h-32 w-32 flex justify-center ">
                <Image
                  src={data?.image} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className={` w-full mt-8 lg:mt-4 lg:text-center  `}>
                <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold text-gray-900 leading-7 mb-1">
                  {data?.title}
                </h2>
                <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-thin text-gray-900 leading-7 lg:px-2 mb-3">
                  {data?.description}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LoanSolution;
