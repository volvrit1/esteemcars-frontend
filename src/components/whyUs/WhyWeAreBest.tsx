import { ISection } from "@/utils/server";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const WhyWeAreBest = ({ sectionData }: { sectionData?: ISection }) => {
  const datas = [
    {
      title: "Law - Interest Rates & No Hidden Charges",
      description:
        "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile.",
      image: "/images/why1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Secure & reliable Transaction",
      description:
        "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile.",

      image: "/images/why2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Trusted by Thounsand",
      description:
        "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile.",

      image: "/images/why3.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto text-center lg:p-8 bg-opacity-80">
        <h2 className="lg:w-3/5 m-auto text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-800 leading-7 font-[jost]">
          {"Why We Are Best "}
          <span className="text-[#F75D34] inline-block mt-4">
            {" "}
            {"Car Loan provider"}
          </span>
        </h2>
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl line-clamp-4 md:line-clamp-none text-gray-800 lg:px-24  mt-4 leading-8 mb-4">
          {
            "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile"
          }
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 ">
        {datas &&
          datas?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto p-4 lg:p-2 flex flex-col lg:flex-row items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="relative lg:w-1/2 lg:h-64 shadow-xl rounded-[3rem] overflow-hidden flex justify-center">
                <Image
                  src={data?.image ??"/"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="w-full  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-fill"
                />
              </div>

              {/* Right Column - Content */}
              <div
                className={` w-full lg:w-1/2 mt-8 lg:mt-4 lg:text-left lg:px-14 `}
              >
                <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold font-[jost] text-gray-900 leading-7 mb-2">
                  {data?.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal  text-gray-900 leading-7 mb-3">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyWeAreBest;
