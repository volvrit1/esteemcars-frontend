import Image from "next/image";
import React from "react";


const HowWeWork = () => {
  const datas = [
    {
      title: "Quick & Easy Approval Process",
      description:
        "Our easy and quick approval process gives smooth and  easy access to your loan.",
      image: "/images/work1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Minimum Documentation, Maximum Convenience",
      description:
        "Have a stress- free loan experience with fewer documents  and benefit from a smooth experience.",

      image: "/images/work2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Get Your car loan in Minutes",
      description:
        "With our quick approval process, you can get your car loan within minutes, allowing you to drive off with your dream car without the long wait.",

      image: "/images/work3.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto text-center lg:p-8 bg-opacity-80">
        <h2 className=" m-auto text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#252525] leading-7 font-[poppins] ">
          {"How We "} {"Works"}
        </h2>
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium font-[cabin] line-clamp-4 md:line-clamp-none text-[#252525] lg:px-10 mt-4 leading-8 mb-4">
          {
            "We simplify car loans with an easy-to-use platform. Apply online, receive customized quotes, and get approved in minutes. We are with you at every step, and it is hassle-free."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {datas &&
          datas?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto lg:p-2 flex flex-col lg:flex-col items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="relative h-48 w-48 flex justify-center">
                <Image
                  src={data?.image ?? "/"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div
                className={` w-full  m-auto mt-8 lg:mt-4 lg:text-center lg:px-2 `}
              >
                <h2 className="lg:w-4/5 m-auto text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-[poppins] font-semibold text-[#252525] leading-7 mb-1">
                  {data?.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  font-[cabin] line-clamp-4 md:line-clamp-none text-gray-900 mt-4 leading-8 mb-4">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HowWeWork;
