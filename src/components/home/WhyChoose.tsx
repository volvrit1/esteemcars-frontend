import Image from "next/image";
import React from "react";


const WhyChoose = () => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="lg:w-4/5 m-auto text-center  lg:p-8 bg-opacity-80">
        <h2 className="lg:w-3/5 m-auto text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-[#252525] leading-7 font-[poppins]">
          {"Why Choose "}
          {" Esteem Car Loans"}
        </h2>
        <p className=" text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm line-clamp-4 md:line-clamp-none font-[cabin] text-[#252525] py-4  mt-4 leading-8 mb-4">
          {
            "Choose  Esteem Car Loans to secure competitive rates, favorable terms, and an easy application process, guaranteeing the finest financing deals."
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto flex flex-col lg:flex-row items-center justify-start ">
        {/* Left Column - Image */}
        <div className="lg:w-1/2 lg:h-[80vh] 2xl:h-auto flex justify-center">
          <Image
            src={"/assets/carimg.svg"}
            alt="Who We Are Image"
            width={300}
            height={430}
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 lg:h-[80vh] 2xl:h-auto w-full mt-8 lg:mt-0 space-y-4 lg:p-8  text-center lg:text-left">
          {[
            {
              title: "Instant Loan Offers",
              desc: " Get Pre-Approved Within Minutes.",
            },
            {
              title: "Minimal Documentation",
              desc: " No unnecessary paperwork, 100% digital process.",
            },
            {
              title: "Low-Interest Rates",
              desc: " Best Rates Based On Your CIBIL Score.",
            },
            {
              title: "Flexible Repayment Plans",
              desc: " EMIs That Fit Your Budget.",
            },
            {
              title: "Secure & Transparent",
              desc: " No Hidden Charges, 100% Safe Transactions.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image
                src={"/images/checkicon.png"}
                width={35}
                height={25}
                alt=""
                className="text-green-500 w-8 h-7 flex-shrink-0"
              />
              <p className="text-[#252525] text-xl font-[poppins]">
                <span className="font-semibold">{item.title}—</span>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
