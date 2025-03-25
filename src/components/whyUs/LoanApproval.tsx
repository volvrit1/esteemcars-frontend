import Image from "next/image";
import React from "react";

const LoanApproval = () => {
  const datas = [
    {
      title: "Submit your documents online",
      description:
        "Upload your documents easily for fast processing, ensuring a smooth and   loan approval experience.",
      image: "/images/la1.png",
      date: "Jan 02 2025",
    },
    {
      title: "Fast Loan Approval & Offer Selection",
      description:
        "Get quick loan approvals with customized offers, helping you make informed choices and secure your dream car.",
      image: "/images/la2.png",
      date: "Jan 02 2025",
    },
    {
      title: "Quick Disbursal & Car Purchase",
      description:
        "Experience fast fund disbursal, enabling you to finalize your car purchase swiftly and drive away with ease.",
      image: "/images/la3.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4 lg:pt-20">
      <div className="m-auto lg:w-w-4/5  text-center lg:px-24 lg:mb-4">
        <h2 className="lg:w-3/5 m-auto text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-[#252525] font-[poppins]">
          {"How Our "}
          {"Loan Solution "}
          {"Works"}
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base line-clamp-4 md:line-clamp-none text-gray-500 py-4 font-[cabin]  mt-4 mb-4">
          We have streamlined the process to ensure quick approvals and easy
          access to funds so you can focus on driving home your dream car.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas &&
          datas?.map((data: any, index: number) => (
            <div
              key={index}
              className="container rounded-3xl mx-auto p-4 lg:p-8 flex flex-col lg:flex-col items-center justify-between bg-[#1262A1]"
            >
              {/* Left Column - Image */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden flex justify-center ">
                <Image
                  src={data?.image ?? "/"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className={` w-full mt-8 lg:mt-6 lg:text-left  `}>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-4 py-[5.5px] font-[poppins] text-xs font-medium text-blue-900 ring-1 ring-gray-500/10 ring-inset mb-3">
                  Step 0{index + 1}
                </span>

                <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  font-[poppins] text-gray-100 mb-3">
                  {data?.title}
                </h2>
                <h2 className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm font-[cabin]  text-gray-100 lg:pr-6 mb-3">
                  {data?.description}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LoanApproval;
