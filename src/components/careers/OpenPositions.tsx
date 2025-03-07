import { ISection, SubContent } from "@/utils/server";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function OpenPosition({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) {
  const datas = [
    {
      title: "Aerial Robotics Engineer",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "UAV Systems Developer",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "Flight Operations",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "Drone Pilot",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "Aerial Robotics Engineer",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "UAV Systems Developer",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4 py-24">
      <div className="mr-auto text-left mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
          {sectionData?.title || "Open Positions At Sky Field"}
        </h2>
        <p className="text-base lg:w-4/6 sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-600 mt-4 leading-8">
          {sectionData?.description ||
            "We are always looking for talented individuals to join our team."}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sectionData?.subContents &&
          sectionData?.subContents?.map((data: SubContent, index: number) => (
            <div
              className="border border-gray-900 text-left col-span-1 text-gray-800 p-6  flex flex-col justify-center items-start"
              key={index}
            >
              <div className="w-full flex justify-start items-center mb-4">
                <Link
                  href={"/contact-us"}
                  className="bg-gray-50 text-gray-800 rounded-full border-gray-900 border-[1.3px] flex justify-center items-center text-sm w-10 h-10"
                >
                  <FaUser width={16} height={16} />
                </Link>
              </div>
              <h2 className="text-md font-semibold mb-2">{data?.title}</h2>
              <p className="text-xs mb-6">
                <span className="mx-1">-Onsite</span>
                <span className="mx-1">-Fulltime</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
