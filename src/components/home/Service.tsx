import { ISection, SubContent } from "@/utils/server";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Service = ({ sectionData }: { sectionData: ISection }) => {
  if (!sectionData) return null;
  // const datas = [
  //   {
  //     title: "Drone Operations Extension",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  //   {
  //     title: "Real-Time Situational Awareness",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  //   {
  //     title: "Multi-Mission Capabilities",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  //   {
  //     title: "Robust Command and Control    ",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  // ];
  return (
    <div className="max-w-7xl lg:max-w-6xl m-auto p-4">
      <div className="m-auto lg:w-3/5 text-center mb-16">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          What We Are
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "Service That We Offer"}
        </h2>
        <p className="text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 leading-8">
          {sectionData?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectionData?.subContents &&
          sectionData.subContents.map((data: SubContent, index: number) => (
            <div
              className="border text-left col-span-1 text-gray-50 p-8 h-64 flex flex-col justify-end items-start"
              key={index}
            >
              <h2 className="text-sm font-semibold mb-2">{data?.title}</h2>
              <p className="text-sm md:text-xs mb-6">{data?.description}</p>
              <div className="w-full flex justify-end items-center">
                <Link
                  href={"/contact-us"}
                  className="bg-gray-50 text-gray-800 rounded-full text-2xl p-1.5 w-10 h-10"
                >
                  <GoArrowUpRight width={30} height={30} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Service;
