import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/h1.png";
import image2 from "../../../public/assets/h2.png";
import image3 from "../../../public/assets/h3.png";
import image4 from "../../../public/assets/h4.png";
import image5 from "../../../public/assets/h5.png";

const Challenges = () => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text- 2xl:text-4xl font-bold text-center font-[poppins] mb-4 text-[#252525] leading-7">
          {
            "How Esteem Can Help You Overcome with Your Car Financing Challenges"
          }
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-2xl line-clamp-4 text-center md:line-clamp-none text-[#7d7d7d] font-[cabin]  mb-4">
          {
            "Unlike other providers, Esteem offers personalized service to help you navigate the complexities of car financing. Our team of experts provides clear advice, ensuring you feel confident in your loan decisions. We focus on quick, hassle-free solutions, offering a smooth path to secure your car loan with ease and efficiency."
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto lg:p-4 flex flex-col lg:flex-row items-center justify-between">
        {[
          {
            image: image1,
            title: "Car finance is very expensive in New Zealand.",
          },
          { image: image2, title: "Not many options are provided." },
          {
            image: image3,
            title: "New Zealand  car finance is still not a buyers market.",
          },
          {
            image: image4,
            title: "Lacks transparent, unbiased, true business consulting.",
          },
          {
            image: image5,
            title: "Car finance lacks a comprehensive customer solution system",
          },
        ].map((data, index) => (
          <div key={index} className="text-center w-full  lg:w-4/5">
            <div className="w-36 h-36 mx-auto my-auto rounded-full lg:bg-white border border-orange-500 lg:p-4 lg:text-center lg:mb-4 flex justify-center items-center">
              <Image
                src={data?.image}
                alt=""
                width={100}
                height={100}
                className="w-16 h-16 m-auto"
              />
            </div>
            <h2 className="m-auto my-4 lg:my-0 font-[poppins] font-medium text-base lg:text-sm text-gray-500 text-center lg:w-4/5">
              {data?.title}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Challenges;
