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
      <div className="m-auto lg:w-full  text-center lg:px-24 lg:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-23xl font-bold text-gray-800 leading-7 mb-4 ">
          {"Frequently Asked"}
          <span className="text-[#F75D34]"> {"Questions"}</span>
        </h2>
        <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-light mb-8 text-gray-800 leading-7">
          Whats happening around the World.
        </h3>
      </div>
      <div className="lg:px-28 space-y-4 p-4">
        {data &&
          data.map((faq: any, index: any) => (
            <div key={index} className="rounded">
              <button
                className={`w-full text-left p-8 rounded flex justify-between items-center   border-gray-800 border hover:bg-[#1262A1] hover:text-gray-50 ${
                  openIndex === index
                    ? "bg-[#1262A1] text-gray-50"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? (
                    <BsDash width={16} height={16} />
                  ) : (
                    <IoIosAdd width={16} height={16} />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden text-gray-600 ${
                  openIndex === index
                    ? "max-h-40 p-4 border-t bg-transparent "
                    : "max-h-0 p-0"
                }`}
              >
                {openIndex === index && <p className="text-lg">{faq.answer}</p>}
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center gap-4 p-4">
        <Link href={"#loanApplication"} className="bg-[#1262A1] lg:px-6 lg:py-3 p-2 lg:h-12 font-light rounded-lg hover:bg-gray-500 transform ease-in-out transition-colors ">
          Get Your Car Finance Today
        </Link>
        <button className="rounded-lg p-2 lg:-2 px-4 lg:h-12 text-gray-900 text-3xl bg-transparent border border-[#ff8e42]">
          <IoIosArrowForward width={16} height={16} />
        </button>
        <button className="text-gray-900 h-12 font-semibold ">
          {"Learn More"}
        </button>
      </div>
    </div>
  );
};

export default Faq;
