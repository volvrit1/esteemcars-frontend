import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const WhyChoose = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="lg:w-4/5 m-auto text-center  lg:p-8 bg-opacity-80">
        <h2 className=" m-auto text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-800 leading-7">
          {"Why Choose "}
          <span className="text-[#F75D34] inline-block mt-4">
            {" Esteem Car Loans"}
          </span>
        </h2>
        <p className="text-lg sm:text-lg md:text-xl lg:text-[15px] xl:text-[15px] line-clamp-4 md:line-clamp-none text-gray-800 lg:px-10 mt-4 leading-8 mb-4">
          {
            "We have streamlined the process to ensure quick approvals and easy access to funds so you can focus on driving home your dream car."
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto flex flex-col lg:flex-row items-center justify-start ">
        {/* Left Column - Image */}
        <div className="lg:w-1/2 lg:h-[80vh] flex justify-center">
          <Image
            src={"/images/whyChoose.png"}
            alt="Who We Are Image"
            width={300}
            height={430}
            className="rounded-2xl w-full object-fill"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 lg:h-[80vh] w-full mt-8 lg:mt-0 space-y-4 lg:p-8  text-center lg:text-left">
          {/* <ul>
            <li className="flex justify-start items-center relative text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Leveraging technology, intellectual resources and partnerships, Esteem can bring most cost-effective car finance solutions to customers."}
              <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px]">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Fastest turn around time for finance process."}
              <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] ">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem can provide wider vendor options to choose from."}
              <span className="border-b-[1.5px] border-[#F75D34] w-full absolute bottom-[-15px]">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#F75D34] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem's subject matter experts analyze and recommend unbiased finance solution pertinent to the needs and wants of customers by providing bottom line statistics."}
              <span className="border-b-[1.5px] border-[#1262A1] w-full absolute bottom-[-15px] ">
                {" "}
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px]"></span>
                <span className="w-1 h-1 rounded-full bg-[#1262A1] absolute top-[-1px] right-0"></span>
              </span>
            </li>
            <li className="flex justify-start items-center relative text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 mt-4 p-2 leading-8 mb-8">
              {sectionData?.description ||
                "Esteem's services are unconditionally, in the benefit of customers making a customer centric market. "}
            </li>
          </ul> */}
          {[
            {
              title: "Instant Loan Offers",
              desc: " Get Pre-Approved Within Minutes.",
            },
            {
              title: "Minimal Documentation",
              desc: " No unnecessary paperwork, 100% digital process.",
            },
            {
              title: "Low-Interest Rates",
              desc: " Best Rates Based On Your CIBIL Score.",
            },
            {
              title: "Flexible Repayment Plans",
              desc: " EMIs That Fit Your Budget.",
            },
            {
              title: "Secure & Transparent",
              desc: " No Hidden Charges, 100% Safe Transactions.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image
                src={"/images/checkicon.png"}
                width={25}
                height={25}
                alt=""
                className="text-green-500 w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 text-xl font-[jost]">
                <strong>{item.title}—</strong>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
