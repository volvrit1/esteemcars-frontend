import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurPartners() {
  const datas = [
    {
      title: "CEO Of XYZ Company",
      description: "Sachet Kumar",
    },
    {
      title: "CEO Of XYZ Company",
      description: "Sachet Kumar",
    },
    {
      title: "CEO Of XYZ Company",
      description: "Sachet Kumar",
    },
    {
      title: "CEO Of XYZ Company",
      description: "Sachet Kumar",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4">
      <div className="mr-auto text-left mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
          Our Partners
        </h2>
        <p className="text-base lg:w-4/6 sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-600 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {datas &&
          datas?.map((data, index) => (
            <div
              className="text-left col-span-1 text-gray-800 p-8  flex flex-col justify-center items-center"
              key={index}
            >
              <Image
                src={"/images/partner1.png"}
                width={5000}
                height={5000}
                className="w-44 h-44 rounded-full mb-4"
                alt=""
              />

              <p className="text-sm mb-2">{data?.description}</p>
              <h2 className="text-sm font-semibold mb-2">{data?.title}</h2>
            </div>
          ))}
      </div>
      <div className="w-2/4 m-auto col-span-2 flex justify-start items-center mb-4">
        <Link href={"/contact-us"} className="bg-black text-gray-50 w-full font-semibold border-gray-900 border-[1.3px] flex justify-center items-center text-sm p-4">
          Become a Partner Now
        </Link>
      </div>
    </div>
  );
}
