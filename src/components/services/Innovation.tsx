import React from "react";
import HeaderSection from "../common/HeaderSection";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { ISection, SubContent } from "@/utils/server";

export default function Innovation({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) {
  // const datas = [
  //   {
  //     title: "Drone Systems",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //     image: "/images/pro1.png",
  //   },
  //   {
  //     title: "Control Software",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //     image: "/images/pro2.png",
  //   },
  //   {
  //     title: "Tactical Trailers",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //     image: "/images/pro3.png",
  //   },
  // ];
  return (
    <div className="max-w-7xl p-4 m-auto">
      <HeaderSection
        title={
          sectionData?.title ||
          "Breakthrough Innovation in Integrated Drone Systems"
        }
        subTitle={sectionData?.subtitle || "Featured pros"}
        description={
          sectionData?.description ||
          "Breakthrough Innovation in Integrated Drone Systems Skyfield presents the next generation of operational drone systems. Our advanced system combines an innovative mother drone serving as a launch and communication station, with specialized Indoor drones for missions inside buildings and complex environments. Skyfield, a leader in advanced drone solutions, brings cutting-edge technology to the modern battlefield."
        }
      />

      <div className="w-full lg:p-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sectionData?.subContents &&
            sectionData?.subContents?.map((data: SubContent, index: number) => (
              <div
                key={index}
                className="container mx-auto flex flex-col lg:flex-col items-center justify-between"
              >
                {/* Left Column - Image */}
                <div className=" h-96  w-full flex justify-center">
                  <Image
                    src={"/images/pro1.png"} // Ensure this image exists in the public folder
                    alt="Explore Image"
                    width={800}
                    height={630}
                    className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                  />
                </div>

                {/* Right Column - Content */}
                <div className={` w-full mt-8 lg:mt-4 lg:text-center  `}>
                  <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl  font-bold text-center text-gray-50 leading-7 mb-2">
                    {data?.title}
                  </h2>

                  <Link
                    href={"/contact-us"}
                    className="mt-6 m-auto px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center"
                  >
                    View products{" "}
                    <GoArrowUpRight width={20} height={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
