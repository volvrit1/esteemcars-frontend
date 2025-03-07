import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import HeaderSection from "../common/HeaderSection";
import Image from "next/image";
import { ISection, SubContent } from "@/utils/server";

const TechApplication = async ({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) => {
  // const datas = [
  //   {
  //     title: "The Advanced Drone System",
  //     description:
  //       "Enables complex operations in closed locations and hard-to-reach areas, real-time information gathering, and thermal analysis.",
  //     image: "/images/pro1.png",
  //   },
  //   {
  //     title: "The TactiTech Command Center",
  //     description:
  //       "Provides a mobile center for control, command, and information analysis with rapid deployment capabilities and high mobility.",
  //     image: "/images/pro2.png",
  //   },
  //   {
  //     title: "The CommanderAI™ suite",
  //     description:
  //       "Analyzes real-time data, identifies threats and patterns, and provides advanced tools for mission planning and resource management.",
  //     image: "/images/pro3.png",
  //   },
  // ];
  return (
    <div className="max-w-7xl p-4 m-auto">
      <HeaderSection
        title={sectionData?.title || "Advancing Applications with Technology"}
        subTitle={sectionData?.subtitle || " Advanced Drone System"}
        description={
          sectionData?.description ||
          "The Skyfield Advanced Drone System combines mother-drone technology with specialized indoor drones for unprecedented operational flexibility:"
        }
      />

      <div className="w-full lg:p-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sectionData?.subContents &&
            sectionData?.subContents?.map((data: SubContent, index: any) => (
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
                  <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl  font-bold text-center text-gray-50 leading-7 mb-3">
                    {data?.title}
                  </h2>

                  <p className="mt-2 text-sm text-center text-gray-300">
                    {data?.description}
                  </p>

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
};

export default TechApplication;
