import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OverComes = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className=" bg-[#FFF0E64D]">
      <div className="max-w-7xl  m-auto p-4 lg:px-14">
        <section className="container text-gray-900 mx-auto flex flex-col lg:flex-row items-center justify-center ">
          {/* Left Column - Image */}
          <div className="lg:w-2/5 lg:h-[98vh] 2xl:h-auto w-full flex justify-center">
            <Image
              src={"/assets/overcome.png"}
              alt="Who We Are Image"
              width={800}
              height={630}
              className="rounded-xl relative z-[6000] top-[-1rem] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/5 w-full mt-8 lg:mt-0  text-center font-[poppins] lg:text-left">
            <ul>
              <li className="text-2xl font-bold">
                {"How Esteem Overcomes New Zealand Market Challenges"}
              </li>
              <li className="flex justify-start items-center relative text-base sm:text-base md:text-base lg:text-base xl:text-base  text-[#252525] mt-4 py-2 leading-8 mb-8">
                {sectionData?.description ||
                  "Esteem Finance is a young organization with a customer centric DNA, meant to revolutionize car finance services on a click without obligations and laborious processes"}
                <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px] left-0">
                  {" "}
                  <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute left-0 top-[-1px]"></span>
                  <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
                </span>
              </li>
              <li className="flex justify-start items-center relative text-base sm:text-base md:text-base lg:text-base xl:text-base  text-[#252525] mt-4 py-2 leading-8 mb-8">
                {sectionData?.description ||
                  "Esteem Finance had invested in state-of-the-art cutting edge technology platform providing one stop solution to customers. "}
                <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] left-0">
                  {" "}
                  <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute left-0 top-[-1px]"></span>
                  <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
                </span>
              </li>
              <li className="flex justify-start items-center relative  text-base sm:text-base md:text-base lg:text-base xl:text-base  text-[#252525] mt-4 py-2 leading-8 mb-8">
                {sectionData?.description ||
                  "Esteem Finance has invested on subject matter experts for customer help."}
                <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px] left-0">
                  {" "}
                  <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute left-0 top-[-1px]"></span>
                  <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
                </span>
              </li>
              <li className="flex justify-start items-center relative  text-base sm:text-base md:text-base lg:text-base xl:text-base  text-[#252525] mt-4 py-2 leading-8 mb-8">
                {sectionData?.description ||
                  "Esteem Finance is affiliated and integrated to every financial institution in NZ and abroad for wide scope creating a  competitive market. "}
                <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] left-0 ">
                  {" "}
                  <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute left-0 top-[-1px]"></span>
                  <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
                </span>
              </li>
              <li className="flex justify-start items-center relative  text-base sm:text-base md:text-base lg:text-base xl:text-base  text-[#252525] mt-4 py-2 leading-8 mb-8">
                {sectionData?.description ||
                  "Esteem Finance is a no obligatory, unbiased solution provider in the genuine interest of customers. "}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverComes;
