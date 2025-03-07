import Image from "next/image";
import HeaderSection from "../common/HeaderSection";
import { ISection, SubContent } from "@/utils/server";

// const features = [
//   {
//     title: "Special Forces Support",
//     description:
//       "Providing advanced intelligence, surveillance, and communication solutions.",
//   },
//   {
//     title: "Urban Warfare ",
//     description:
//       "Enabling effective navigation and operation in built-up and complex areas.",
//   },
//   {
//     title: "Border Security",
//     description:
//       " Advanced monitoring and patrol capabilities for border protection.",
//   },
//   {
//     title: "Intelligence Gathering",
//     description: "Real-time data analysis and intelligence production.",
//   },
//   {
//     title: "Training Operations",
//     description: "Use of simulations and advanced training.",
//   },
// ];

const ProductSection = ({
  sectionData,
}: {
  sectionData: ISection | undefined;
}) => {
  if (!sectionData) return null;
  return (
    <div className="max-w-7xl mx-auto p-4 lg:px-20 lg:py-44">
      <HeaderSection
        title={
          sectionData.title ||
          "Operational Excellence in Military Strategy and Tactics"
        }
        subTitle={sectionData.subtitle || " Advanced Drone System"}
        description={
          sectionData.description ||
          "The Skyfield Advanced Drone System combines mother-drone technology with specialized indoor drones for unprecedented operational flexibility:"
        }
        textColor="gray"
      />
      <div className="text-white  flex flex-col lg:flex-row items-start gap-10 ">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 ">
          <Image
            src={"/images/droneAlon.png"}
            alt="Indoor Drone"
            width={500}
            height={500}
            className="object-cover md:h-[80vh] 2xl:h-[28vh] rounded-none w-full lg:w-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 pt-10">
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-2">
            Innovative Indoor Drones
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}

          {/* Feature List */}
          <div className="flex flex-col gap-4">
            {sectionData.subContents &&
              sectionData.subContents.map(
                (feature: SubContent, index: number) => (
                  <div key={index} className="flex flex-col lg:flex-row">
                    <div className="bg-[#FFA7A7] text-black font-thin p-3  lg:w-44 text-left">
                      {feature.title}
                    </div>
                    <div className="border text-gray-700 border-gray-500 p-3 flex-1">
                      {feature.description}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
