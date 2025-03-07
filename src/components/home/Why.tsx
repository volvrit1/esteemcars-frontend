import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Why = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14 bg-[#FFF0E6]">
      <section className="container relative text-gray-900 mx-auto flex flex-col lg:flex-row items-center justify-start ">
        {/* Left Column - Image */}
        <div className="lg:w-2/6 w-full flex justify-center">
          <Image
            src={"/images/whyBulb.png"}
            alt="Who We Are Image"
            width={300}
            height={430}
            className="rounded-xl  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-4/6 w-full mt-8 lg:mt-0  text-center lg:text-left">
          <ul>
            <li className="flex justify-start items-center relative  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-lx  text-gray-800 mt-4  leading-8 mb-8">
              {sectionData?.description ||
                "Leveraging technology, intellectual resources and partnerships, Esteem can bring most cost-effective car finance solutions to customers."}
              <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px] left-0">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  text-gray-800 mt-4  leading-8 mb-8">
              {sectionData?.description ||
                "Fastest turn around time for finance process."}
              <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] left-0 ">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  text-gray-800 mt-4  leading-8 mb-8">
              {sectionData?.description ||
                "Esteem can provide wider vendor options to choose from."}
              <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px] left-0">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xl:text-[16px]  text-gray-800 mt-4  leading-8 mb-8">
              {sectionData?.description ||
                "Esteem's subject matter experts analyze and recommend unbiased finance solution pertinent to the needs and wants of customers by providing bottom line statistics."}
              <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] left-0 ">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute left-0 top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  text-gray-800 mt-4  leading-8 mb-8">
              {sectionData?.description ||
                "Esteem's services are unconditionally, in the benefit of customers making a customer centric market. "}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Why;
