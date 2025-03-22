"use client";
import { getFaqs } from "@/utils/server";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosAdd, IoIosArrowForward } from "react-icons/io";

const faqs = [
  {
    question: "What types of cars available at Esteem Cars?",
    answer:
      "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online.",
  },
  {
    question: "Do you have financing plans for purchasing cars?",
    answer:
      "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online.",
  },
  {
    question: "Do you have trade-ins on used cars?",
    answer:
      "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online.",
  },
  {
    question: "Do you ship cars nationally?",
    answer:
      "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online.",
  },
  {
    question: "How do I contact Esteem Cars for more information?",
    answer:
      "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online.",
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
    <div className="max-w-7xl lg:p-16  mx-auto font-[poppins] ">
      {/* Content */}
      <div className="m-auto lg:w-full  text-center p-4  lg:mb-4">
        <div className="m-auto lg:w-full text-center  lg:mb-4 ">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-medium text-left font-[poppins] text-[#252525] leading-7">
            {"Frequently Asked Questions "}
          </h2>
        </div>
      </div>
      <div className=" space-y-4 p-4">
        {data &&
          data.map((faq: any, index: any) => (
            <div
              key={index}
              className={`rounded-2xl ${openIndex === index && "bg-[#F9F9FB]"}`}
            >
              <button
                className={`w-full text-left p-6 pb-2 rounded flex justify-between items-center  ${" text-gray-700"}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg ">
                  {faq?.question ||
                    "Do you have financing plans for purchasing cars?"}
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
                className={`transition-all duration-300 overflow-hidden text-[#252525] text-xs ${
                  openIndex === index ? "max-h-40 p-6 pt-0  " : "max-h-0 p-0"
                }`}
              >
                {openIndex === index && (
                  <p className="text-base font-semibold text-[#808080]  ">
                    {faq?.answer ||
                      "Yes, we have flexible and competitive finance arrangements. Our easy application process ensures a quick response, so you can drive away in your new car without delay. View our finance page for details or apply for finance online."}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Faq;
