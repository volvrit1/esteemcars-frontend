"use client";
import React from "react";
import HeaderSection from "../common/HeaderSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISection } from "@/utils/server";

export default function Advantages({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) {
  const features = [
    {
      title: "Extended Operational Range",
      description: "Up to 5 km operational range",
      position: "top-left",
    },
    {
      title: "Powerful Payload Capacity",
      description: "Carries up to 3 indoor drones with a total weight of 6 kg",
      position: "top-right",
    },
    {
      title: "Smart Relay Station",
      description: "Real-time video and data transmission",
      position: "left",
    },
    {
      title: "Extended Flight Time",
      description: "Minimum 20 minutes with full payload",
      position: "right",
    },
    {
      title: "Automatic Launch System",
      description: "Smooth deployment and retrieval of indoor drones",
      position: "bottom",
    },
  ];

  return (
    <div className="max-w-7xl p-4 m-auto hidden lg:block">
      <HeaderSection
        title={sectionData?.title || "Advanced Mother Drone"}
        subTitle={sectionData?.subtitle || "Key Advantages"}
        description={
          "Breakthrough Innovation in Integrated Drone Systems Skyfield presents the next generation of operational drone systems. Our advanced system combines an innovative mother drone serving as a launch and communication station, with specialized Indoor drones for missions inside buildings and complex environments. Skyfield, a leader in advanced drone solutions, brings cutting-edge technology to the modern battlefield."
        }
      />

      <div className="w-full lg:p-16 mx-auto">
        <div className="relative flex justify-center items-center bg-transparent py-10 px-5 lg:px-20">
          <div className="relative w-full max-w-4xl ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="w-72 md:w-96 lg:w-[450px] aspect-square rounded-full overflow-hidden">
                <Image
                  src="/images/drone.png"
                  alt="Drone"
                  width={450}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`absolute w-60 text-white text-center p-2 -z-50 ${
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
                  <p className="text-xs text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
