import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurSimpleProcess() {
  const content = [
    {
      title: "Check Eligibility",
      description:
        "A hassle-free and smooth process designed to help you get the car you want, fast.",
      image: "/assets/pro4.svg",
    },
    {
      title: "Select Your Car",
      description:
        " Get your perfect car that suits your style, needs and requirements.",
      image: "/assets/pro1.svg",
    },
    {
      title: "Documentation",
      description:
        "Ensure all necessary paperwork is completed for smooth car ownership.",
      image: "/assets/pro2.svg",
    },
    {
      title: "Get Your Car",
      description:
        "Receive your car with all features, ready for immediate use.",
      image: "/assets/pro3.svg",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4">
      <div className="w-full lg:w-3/5 m-auto  text-center mb-8">
        <h2 className="text-gray-900  text-2xl font-[alexandria] font-semibold mb-2">
          Cruise Through Our Simple Process
        </h2>
        <p className="text-gray-700 font-[cabin]">
          A hassle free and smooth process designed to help you get the car you
          want
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {content?.map((data, index) => (
          <div
            key={index}
            className="bg-[#E5E5E5]/70 rounded-xl shadow-md p-4 py-12"
          >
            <div className="flex justify-center mb-4">
              <Image
                alt=""
                src={data?.image || "/assets/pro1.svg"}
                width={100}
                height={100}
                className="w-full h-44"
              />
            </div>
            <h3 className="text-gray-900 text-center text-xl font-[alexandria] font-medium relative px-4 mb-4">
              {data?.title}
              {/* <span className="w-8 h-8 rounded-full p-2 bg-blue-300/50 absolute left-5 top-1/2 -translate-y-1/2"></span> */}
            </h3>
            <p className=" font-[cabin] text-base/7 font-thin text-center m-auto text-gray-500">
              {data?.description}
            </p>
          </div>
        ))}
      </div>
      <Link
        href={"/apply-loan"}
        className="bg-[#1262A1] w-1/2 lg:w-1/6 hover:bg-gray-400 transition-colors ease-in-out px-6 lg:px-10 py-3 flex justify-center items-center font-[poppins] h-11 text-base lg:text-sm m-auto rounded-lg"
      >
        Apply Now
      </Link>
    </div>
  );
}
