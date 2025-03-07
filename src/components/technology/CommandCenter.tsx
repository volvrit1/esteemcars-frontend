"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISection } from "@/utils/server";

const CommandCenter = ({ sectionData }: { sectionData: ISection |undefined}) => {
  const rapidDeployment = [
    { title: "Operational in under 60 seconds", position: "top-left" },
    { title: "Vehicle-agnostic platform", position: "top-right" },
    { title: "Four distinct workstations", position: "left" },
    { title: "Quick-access design", position: "right" },
  ];

  const advancedSystems = [
    { title: "Independent 5kW power solution", position: "bottom" },
    { title: "360° surveillance", position: "top-left" },
    { title: "Satellite communication", position: "top-right" },
    { title: "Climate control", position: "left" },
    { title: "Pneumatic masts", position: "right" },
  ];

  return (
    <div className=" hidden lg:block max-w-7xl mx-auto py-10 px-6 text-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          {sectionData?.title || "Mobile Intelligence Hub"}
        </h2>
        <p className="text-gray-400 mt-2">
          {sectionData?.description ||
            " Our advanced tactical command vehicle combines mobility with cutting-edge command and control capabilities."}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Features Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center w-full max-w-5xl">
          {/* Rapid Deployment */}
          <div className="w-full h-80 lg:w-1/2">
            <h3 className="text-lg font-bold border-b-2 border-l-2 pl-2 border-gray-400 pb-1 mb-4">
              Rapid Deployment
            </h3>
            <ul className="text-gray-300 space-y-2 md:relative">
              {rapidDeployment.map((item) => (
                <li
                  key={item.position}
                  className={`flex absolute items-center w-full space-x-2 border-b-2 pb-2 border-gray-400 pl-2${
                    item.position === "top-left"
                      ? "top-0 left-0"
                      : item.position === "top-right"
                      ? "top-10 left-2"
                      : item.position === "left"
                      ? "left-12 top-44 -translate-y-1/2"
                      : item.position === "right"
                      ? "left-6 top-28 -translate-y-1/2"
                      : "top-36 left-1/3 -translate-x-1/3"
                  }`}
                >
                  {/* <span className="h-px w-10 bg-gray-400"></span> */}
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 md:w-96 h-96 aspect-square rounded-full overflow-hidden"
          >
            <Image
              src="/images/techInteligence.png"
              alt="Command Center"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Advanced Systems */}
          <div className="w-full lg:w-1/2 h-80 text-right">
            <h3 className="text-lg font-bold border-b-2 border-r-2 border-gray-400 pb-1 pr-2 mb-4">
              Advanced Systems
            </h3>
            <ul className="text-gray-300 space-y-2 relative">
              {advancedSystems.map((item) => (
                <li
                  key={item.position}
                  className={`flex absolute items-center  w-full space-x-2 border-b-2 pb-2 border-gray-400 pl-2 ${
                    item.position === "top-left"
                      ? "top-0 right-0"
                      : item.position === "top-right"
                      ? "top-10 right-2"
                      : item.position === "left"
                      ? "right-12 top-44 -translate-y-1/2"
                      : item.position === "right"
                      ? "right-6 top-28 -translate-y-1/2"
                      : item.position === "bottom"
                      ? "right-20 top-60 -translate-y-1/2"
                      : "top-36 left-1/3 -translate-x-1/3"
                  }`}
                >
                  {/* <span className="h-px w-10 bg-gray-400"></span> */}
                  <span className="ml-auto mr-2">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
