import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

export default function ClientSay() {
  const datas = [
    {
      title: "Shubham Singh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "Shubham Singh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "Shubham Singh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4">
      <div className="mr-auto text-left mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
          What Are Clients Say
        </h2>
        <p className="text-base lg:w-4/6 sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-[#7d7d7d] mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas &&
          datas?.map((data, index) => (
            <div
              className="border border-gray-900 text-left col-span-1 text-[#252525] p-8  flex flex-col justify-center items-center"
              key={index}
            >
              <Image
                src={"/images/partner1.png"}
                width={5000}
                height={5000}
                className="w-28 h-28 rounded-full"
                alt=""
              />

              <h2 className="text-sm font-normal mb-2">{data?.title}</h2>
              <p className="text-sm text-[#7d7d7d] flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar
                    key={i}
                    width={16}
                    height={16}
                    className="text-yellow-500"
                  />
                ))}
              </p>
              <p className="text-sm text-center font-medium mb-6">
                {data?.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
