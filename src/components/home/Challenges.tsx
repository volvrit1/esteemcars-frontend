import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../../../public/assets/simple.png";
import image2 from "../../../public/assets/eye.png";
import image3 from "../../../public/assets/secure.png";
import image4 from "../../../public/assets/time.png";
import image5 from "../../../public/assets/icon1.png";
import image6 from "../../../public/images/challengeIcon5.png";

const Challenges = () => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center font-[poppins] mb-4 text-gray-800 leading-7">
          {
            "How Esteem Can Help You Overcome with Your Car Financing Challenges"
          }
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base line-clamp-4 text-center md:line-clamp-none text-gray-800 font-[cabin] leading-8">
          {
            "Unlike other providers, Esteem offers personalized service to help you navigate the complexities of car financing. Our team of experts provides clear advice, ensuring you feel confident in your loan decisions. We focus on quick, hassle-free solutions, offering a smooth path to secure your car loan with ease and efficiency."
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto lg:p-4 flex flex-col lg:flex-row items-center justify-between">
        {[
          { image: "", title: "Car finance is very expensive in New Zealand." },
          { image: "", title: "Not many options are provided." },
          { image: "", title: "New Zealand  car finance is still not a buyers market." },
          { image: "", title: "Lacks transparent, unbiased, true business consulting." },
          { image: "", title: "Car finance lacks a comprehensive customer solution system" },
        ].map((data, index) => (
          <div key={index} className="text-center w-full  lg:w-4/5">
            <Image
              src={image1}
              alt=""
              width={100}
              height={100}
              className="w-full lg:w-36 lg:h-36 lg:mx-auto lg:my-auto lg:rounded-full lg:bg-white lg:border lg:border-orange-500 lg:p-4 lg:text-center lg:mb-4"
            />
            <h2 className="m-auto my-4 lg:my-0 font-semibold text-gray-700 text-sm text-center w-4/5">
              {data?.title}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Challenges;
