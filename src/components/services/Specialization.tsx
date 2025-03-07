import { ISection, SubContent } from "@/utils/server";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Specialization({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) {
  // const datas = [
  //   {
  //     title: "Surveillance",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  //   {
  //     title: "Search and Rescue",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  //   {
  //     title: "Advanced Security ",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  //   {
  //     title: "Advanced Security",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //   },
  // ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4 py-24">
      <div className="m-auto lg:w-3/5 text-center mb-16">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData?.subtitle || "Key Applications"}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "Our Specializations"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 leading-8">
          {sectionData?.description ||
            " Our team of experts will help you to extend your drone operations to new heights."}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectionData?.subContents &&
          sectionData?.subContents?.map((data: SubContent, index: number) => (
            <div
              className="border text-left col-span-1 text-gray-50 p-8 h-64 flex flex-col justify-end items-startw"
              key={index}
            >
              <h2 className="text-sm font-semibold mb-2">{data?.title}</h2>
              <p className="text-xs mb-6">{data?.description}</p>
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
}
