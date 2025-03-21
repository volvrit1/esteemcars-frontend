import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurSuccessStory() {
  const datas = [
    {
      title: "Aerial Robotics Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "UAV Systems Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "Flight Operations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4 py-24">
      <div className="mr-auto text-left mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-7">
          Our Success Story
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
              className="text-left col-span-1 text-[#252525]  flex flex-col justify-center items-start"
              key={index}
            >
              <div className="w-full mb-4">
                <Image
                  src={"/images/clientimg1.png"}
                  width={5000}
                  height={5000}
                  className="w-full h-36"
                  alt=""
                />
              </div>
              <p className="text-md text-black pr-6 font-medium mb-6">
                {data?.description}
              </p>
              <div className="w-4/5 flex justify-start items-center mb-4">
                <Link
                  href={"/contact-us"}
                  className="bg-gray-50 text-[#252525] w-full border-gray-900 border-[1.3px] flex justify-center items-center text-sm   h-10"
                >
                  View Story
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
