import Image from "next/image";
import React from "react";

const WhyWeAreBest = () => {
  const datas = [
    {
      title: "Law - Interest Rates & No Hidden Charges",
      description:
        "We provide you with competitive low-interest rates and open terms. No surprise fees mean you receive the best value in your car loan with no additional surprise fees.",
      image: "/images/why1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Secure & reliable Transaction",
      description:
        "Safety is paramount at Esteem Car Loans for us. Leading levels of encryptions cover your personal as well as monetary details, thereby enabling secure as well as sound transactions whenever you borrow a loan.",

      image: "/images/why2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Trusted by Thousand",
      description:
        "With thousands of happy customers, Esteem Car Loans has established itself as a reliable and trustworthy source for car loans. Become one of the many individuals who have enjoyed our great service and easy loan process.",

      image: "/images/why3.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="m-auto text-center lg:p-8 bg-opacity-80">
        <h2 className=" m-auto text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#252525] leading-7 font-[poppins] ">
          {"Why We Are Best "}

          {"Car Loan Provider"}
        </h2>
        <p className="lg:w-5/6 m-auto text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium font-[cabin] line-clamp-4 md:line-clamp-none text-[#252525] lg:px-10 mt-4 leading-8 mb-4">
          {
            "Esteem Car Loans is unique in that we offer world-class customer service, easy loan terms, quick approval times, and a solid reputation for offering solid, transparent financing solutions that serve all your purposes."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 ">
        {datas &&
          datas?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto p-4 lg:p-2 flex flex-col lg:flex-row items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="relative lg:w-1/2 lg:h-64 shadow-[0_5px_5px_rgba(0,0,0,0.25)] indent-0 rounded-[3rem] overflow-hidden flex justify-center">
                <Image
                  src={data?.image ?? "/"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="w-full  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-fill"
                />
              </div>

              {/* Right Column - Content */}
              <div
                className={` w-full lg:w-1/2 mt-8 lg:mt-4 lg:text-left lg:px-14  `}
              >
                <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold font-[poppins] text-gray-900 leading-7 mb-2">
                  {data?.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base font-medium  font-[cabin] line-clamp-4 md:line-clamp-none text-gray-900 mt-4 leading-8 mb-4">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyWeAreBest;
