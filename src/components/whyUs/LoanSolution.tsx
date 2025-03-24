import Image from "next/image";
import React from "react";

const LoanSolution = () => {
  const datas = [
    {
      title: "Identity Proof",
      description:
        "A identity proof verifies your personal information and assists in authenticating your identity, e.g., passport or driver's license.",
      image: "/images/solution1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Address Proof",
      description:
        "Address proof confirms your address with documents such as utility bills, bank statements, or rental agreements.",
      image: "/images/solution2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Income Proof",
      description:
        "Income proof documents such as pay slips, tax returns, or bank statements authenticate your earning capacity for loan or financial purposes.",
      image: "/images/solution3.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4 lg:pt-20">
      <div className="m-auto   text-center lg:px-24 lg:mb-4">
        <h2 className="lg:w-4/5 m-auto text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-[#252525] leading-7 font-[poppins]">
          {"Required Documents "}
          {"for Loan Approval"}
        </h2>
        <p className=" text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm line-clamp-4 md:line-clamp-none font-[cabin] text-[#252525] py-4  mt-4 leading-8 mb-4">
          We have streamlined the process to ensure quick approvals and easy
          access to funds so you can focus on driving home your dream car.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {datas &&
          datas?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto lg:p-2 flex flex-col lg:flex-col items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="relative h-32 w-32 flex justify-center ">
                <Image
                  src={data?.image ?? "/"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className={` w-full mt-8 lg:mt-4 lg:text-center  `}>
                <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#1262A1] font-[poppins] leading-7 mb-4">
                  {data?.title}
                </h2>
                <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base font-[cabin] font-thin text-gray-700 leading-7 mb-3">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LoanSolution;
