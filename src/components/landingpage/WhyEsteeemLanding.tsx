import { data } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyEsteeemLanding() {
  const content = [
    {
      description:
        "Leveraging technology, intellectual resources and partnerships, Esteem can bring most cost-effective car finance solutions to customers.",
    },
    {
      description:
        "Esteem's subject matter experts analyze and recommend unbiased finance solution pertinent to the needs and wants of customers by providing bottom line statistics.",
    },
    {
      description: "Esteem can provide wider vendor options to choose from.",
    },
    {
      description: "Fastest turn around time for finance process.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="w-full m-auto  text-center mb-8">
        <h2 className="text-gray-900 text-2xl font-[alexandria] font-semibold mb-2">
          Why Esteem?
        </h2>
        <p className="text-gray-700 font-[cabin]">
          Browse through a wide range of cars that suit both your budget and
          specific needs. Our easy-to-use platform allows you to easily and
          conveniently browse through different options, making it easy for you
          to find the ideal car that meets your lifestyle and needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <Image
            alt=""
            src={"/assets/whyesteem.svg"}
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="lg:col-span-3">
          {content.map((data, index) => (
            <p
              key={index}
              className="flex items-center justify-start text-gray-800 text-sm gap-2 mb-4 lg:mb-8"
            >
              <Image
                alt=""
                src={"/assets/whycheck.svg"}
                width={100}
                height={100}
                className="w-10 h-10"
              />
              {data?.description}
            </p>
          ))}
          <Link
            href={"/apply-loan"}
            className="bg-[#1262A1] w-1/2 lg:w-3/12 hover:bg-gray-400 transition-colors ease-in-out px-6 lg:px-8 py-3 flex justify-center items-center font-[poppins] h-11 text-base lg:text-sm ml-auto mr-auto lg:ml-0 lg:mr-auto rounded-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
