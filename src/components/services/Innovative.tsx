"use client";

import { ISection } from "@/utils/server";
import Image from "next/image";

// const features = [
//   {
//     title: "Compact Design",
//     description: "Specially adapted for navigation in confined spaces",
//   },
//   {
//     title: "Perfect Stability",
//     description: "Advanced sensor system for precise control",
//   },
//   {
//     title: "Advanced Imaging System",
//     description:
//       "Integrated thermal camera, LED/IR for perfect visibility in all lighting conditions",
//   },
//   {
//     title: "Silent Operation",
//     description: "Special aerodynamic design for noise reduction",
//   },
//   {
//     title: "Extended Operation Time",
//     description: "Up to 20 minutes of continuous flight",
//   },
// ];

const Innovative = ({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) => {
  return (
    <div className="text-white p-5  lg:p-20 flex flex-col lg:flex-row items-start gap-10 max-w-7xl m-auto  ">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 ">
        <Image
          src="/images/innovative.png"
          alt="Indoor Drone"
          width={500}
          height={500}
          className="object-cover h-[80vh] 2xl:h-[70vh] w-full rounded-none"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-2">
          {sectionData?.title || "Innovative Indoor Drones"}
        </h2>
        <p className="text-gray-300 mb-6">{sectionData?.description}</p>

        {/* Feature List */}
        <div className="flex flex-col gap-4">
          {sectionData?.subContents &&
            sectionData?.subContents.map((feature, index) => (
              <div key={index} className="flex flex-col lg:flex-row">
                <div className="bg-[#FFA7A7] text-black font-thin p-3  lg:w-44 text-left">
                  {feature.title}
                </div>
                <div className="border border-gray-500 p-3 flex-1">
                  {feature.description}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};



export default Innovative;