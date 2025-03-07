import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OverComes = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800 leading-7">
          {sectionData?.title || "Esteem Overcomes New Zealand Market"}
          <span className="text-[#F75D34]"> {"Challenges (How)"}</span>
        </h2>
      </div>
      <section className="container relative text-gray-900 mx-auto flex flex-col lg:flex-row-reverse items-center justify-center ">
        {/* Left Column - Image */}
        <div className="lg:w-2/5 w-full flex justify-center">
          <Image
            src={"/images/cars.png"}
            alt="Who We Are Image"
            width={800}
            height={630}
            className="rounded-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-3/5 w-full mt-8 lg:mt-0  text-center lg:text-left">
          <ul>
            <li className="flex justify-start items-center relative text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem Finance is a young organization with a customer centric DNA, meant to revolutionize car finance services on a click without obligations and laborious processes"}
              <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px]">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute left-0 top-[-1px] left-0"></span>
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem Finance had invested in state-of-the-art cutting edge technology platform providing one stop solution to customers. "}
              <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] left-0">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem Finance has invested on subject matter experts for customer help."}
              <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px] left-0">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem Finance is affiliated and integrated to every financial institution in NZ and abroad for wide scope creating a  competitive market. "}
              <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] left-0 ">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem Finance is a no obligatory, unbiased solution provider in the genuine interest of customers. "}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OverComes;
