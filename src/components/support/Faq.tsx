"use client";
import { getFaqs } from "@/utils/server";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosAdd, IoIosArrowForward } from "react-icons/io";

const faqs = [
  {
    question: "What is a drone system, and how does it function?",
    answer:
      "A drone system consists of an unmanned aerial vehicle (UAV), remote controller, and onboard systems. It functions by receiving commands from a pilot or following pre-programmed flight paths.",
  },
  {
    question: "What are the main industries or applications that use drones?",
    answer:
      "Drones are widely used in agriculture, filmmaking, surveillance, logistics, construction, and environmental monitoring.",
  },
  {
    question: "What regulations must be followed when operating a drone?",
    answer:
      "Drone operators must follow regulations such as maintaining visual line of sight, avoiding restricted areas, and obtaining necessary licenses.",
  },
  {
    question: "What is the typical battery life and range of a drone?",
    answer:
      "Battery life varies from 15 minutes to several hours, depending on the drone type. Consumer drones typically have a range of 5-10 km.",
  },
  {
    question: "What safety precautions should be taken while flying a drone?",
    answer:
      "Ensure clear weather, avoid crowded areas, maintain line of sight, and follow local aviation laws to ensure safe operation.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getFaqsData = async () => {
      const { data } = await getFaqs();
      setData(data);
    };
    getFaqsData();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="max-w-7xl lg:p-16  mx-auto ">
      {/* Content */}
      <div className="m-auto lg:w-full  text-center p-4  lg:mb-4">
        <div className="m-auto lg:w-full text-center  py-10 lg:mb-4 ">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium text-left font-[poppins] text-gray-800 leading-7">
            {"Frequently Asked Questions "}
          </h2>
        </div>
      </div>
      <div className=" space-y-4 p-4">
        {data &&
          Array(4)
            .fill(null)
            .map((faq: any, index: any) => (
              <div
                key={index}
                className={`rounded-2xl ${
                  openIndex === index && "bg-[#F9F9FB]"
                }`}
              >
                <button
                  className={`w-full text-left p-6 pb-2 rounded flex justify-between items-center  ${" text-gray-700"}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg ">
                    {faq?.question || "Do you have financing plans for purchasing cars?"}
                  </span>
                  <span className="text-3xl">
                    {openIndex === index ? (
                      <BsDash width={16} height={16} />
                    ) : (
                      <IoIosAdd width={20} height={20} />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden text-gray-800 text-xs ${
                    openIndex === index ? "max-h-40 p-6 pt-0  " : "max-h-0 p-0"
                  }`}
                >
                  {openIndex === index && (
                    <p className="text-base font-semibold text-[#808080] tracking-wider ">{faq?.answer || "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online."}</p>
                  )}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Faq;
