import React from "react";
import HeaderSection from "../common/HeaderSection";
import Image from "next/image";
import InfoCard2 from "./Infocard2";
import { ISection } from "@/utils/server";

export default function Next({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) {
  const datas = [
    {
      title: "Real-Time Analysis",
      listContent: [
        " Multi-source data fusion",
        "Advanced threat detection",
        "Pattern recognition",
        "Predictive analytics",
      ],
    },
    {
      title: "AI-Powered Features",
      listContent: [
        "Automated target recognition",
        "Behavioral analysis",
        "Multi-camera tracking",
        "Real-time mission mapping",
      ],
    },
    {
      title: "Command Interface",
      listContent: [
        "Intuitive dashboard",
        "Behavioral analysis",
        "3D terrain visualization",
        "Resource management",
        "Mission planning tools",
      ],
    },
  ];
  return (
    <div className="max-w-7xl p-4 m-auto">
      <HeaderSection
        title={sectionData?.title || "Revolutionizing Aerial Operations"}
        subTitle={sectionData?.subtitle || " Advanced Drone System"}
        description={
          sectionData?.description ||
          "The Skyfield Advanced Drone System combines mother-drone technology with specialized indoor drones for unprecedented operational flexibility:"
        }
      />

      <div className="w-full lg:p-16 mx-auto">
        <Image
          src="/images/techNext.png"
          width={1200}
          height={300}
          alt="Image 1"
          className="object-cover h-[90vh] 2xl:h-[30vh] "
        />
      </div>
      <InfoCard2 datas={datas} />
    </div>
  );
}
