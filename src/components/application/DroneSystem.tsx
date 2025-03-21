"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderSection from "../common/HeaderSection";
import { ISection } from "@/utils/server";

const DroneSystem = ({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) => {
  const features = [
    {
      title: "Emergency Response",
      description:
        "Rapid deployment and effective response to emergency events.",
      position: "top-left",
    },
    {
      title: "Surveillance Operations",
      description: "Gathering information and monitoring suspects.",
      position: "top-right",
    },
    {
      title: "Evidence Collection",
      description: "Documentation and collection of evidence in the field.",
      position: "left",
    },
    {
      title: "Tactical Support",
      description:
        "Providing advanced technological equipment to tactical units.",
      position: "right",
    },
    {
      title: "Command Coordination",
      description:
        "Management and coordination of operations among law enforcement agencies.",
      position: "bottom",
    },
  ];

  return (
    <div className="max-w-7xl p-4 m-auto hidden lg:block">
      <HeaderSection
        title={
          sectionData?.title ||
          "Advanced Drone System combines mother-drone technology"
        }
        subTitle={sectionData?.subtitle || " Advanced Drone System"}
        description={
          sectionData?.description ||
          "Breakthrough Innovation in Integrated Drone Systems Skyfield presents the next generation of operational drone systems. Our advanced system combines an innovative mother drone serving as a launch and communication station, with specialized Indoor drones for missions inside buildings and complex environments. Skyfield, a leader in advanced drone solutions, brings cutting-edge technology to the modern battlefield."
        }
        textColor="gray"
      />

      <div className="w-full lg:p-16 mx-auto">
        <div className="relative flex justify-center items-center bg-transparent py-10 px-5 lg:px-20">
          <div className="relative w-full max-w-4xl ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center z-50"
            >
              {
                <div className="w-72 md:w-96 lg:w-[450px] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={"/images/drone.png"}
                    alt="Drone"
                    width={450}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
              }
            </motion.div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`absolute w-60 text-[#7d7d7d] text-center p-2 z-40 ${
                  feature.position === "top-left"
                    ? "top-0 left-0"
                    : feature.position === "top-right"
                    ? "top-0 right-20"
                    : feature.position === "left"
                    ? "left-[-7rem] top-1/2 -translate-y-1/2"
                    : feature.position === "right"
                    ? "right-0 top-1/2 -translate-y-1/2"
                    : "bottom-[-5rem] left-1/3 -translate-x-1/3"
                }`}
              >
                <div
                  className={` border-gray-400 pl-2 w-80 text-left px-4 ${
                    feature.position === "top-left"
                      ? "border-b-2 border-l-2"
                      : feature.position === "top-right"
                      ? "border-b-2 border-r-2"
                      : feature.position === "left"
                      ? "border-b-2 border-l-2"
                      : feature.position === "right"
                      ? "border-b-2 pl-7 border-r-2"
                      : "border-t-2"
                  }`}
                >
                  <h3 className="font-bold text-sm">{feature.title}</h3>
                  <p className="text-xs text-[#7d7d7d]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneSystem;
