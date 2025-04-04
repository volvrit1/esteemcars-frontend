import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OverComesLanding() {
  const content = [
    {
      title: "Check Eligibility",
      description:
        "Esteem Finance is associated and linked to all the financial institutions of NZ and overseas for extensive scope making a competitive market.",
      image: "/assets/over1.svg",
    },
    {
      title: "Select Your Car",
      description:
        "Esteem Finance had invested in state-of-the-art cutting edge technology platform overviding one stop solution to customers.",
      image: "/assets/over2.svg",
    },
    {
      title: "Documentation",
      description:
        "Esteem Finance has made an investment on subject matter specialists for customer assistance.",
      image: "/assets/over3.svg",
    },
    {
      title: "Get Your Car",
      description:
        "Esteem Finance is a young organization with a customer centric DNA, meant to revolutionize car finance services on a click without obligations and laborious overcesses",
      image: "/assets/over4.svg",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="w-full m-auto  text-center mb-8">
        <h2 className="text-gray-900 text-2xl font-[alexandria] font-semibold mb-2">
          How Esteem overcomes New Zealand market challenges
        </h2>
        <p className="text-gray-700 font-[cabin]">
          Browse through a wide range of cars that suit both your budget and
          specific needs. Our easy-to-use platform allows you to easily and
          conveniently browse through different options, making it easy for you
          to find the ideal car that meets your lifestyle and needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full lg:w-4/5 m-auto">
        {content?.map((data, index) => (
          <div key={index} className="lg:p-4">
            <div className="flex justify-center mb-4">
              <Image
                alt=""
                src={data?.image || "/assets/over1.svg"}
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt=""
                src={"/assets/check.svg"}
                width={100}
                height={100}
                className="w-8 h-8"
              />
              <p className=" font-[cabin] text-sm  font-medium text-left m-auto text-gray-800">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
