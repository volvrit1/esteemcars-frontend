import { ISection } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../../../public/assets/simple.png";
import image2 from "../../../public/assets/icon3.svg";
import image3 from "../../../public/assets/icon2.svg";
import image4 from "../../../public/assets/icon4.svg";
import image5 from "../../../public/assets/icon1.svg";
import image6 from "../../../public/images/challengeIcon5.png";

const OurSimple = () => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-center font-[poppins] text-gray-900 leading-7 mb-3  ">
          {"Our Simple Car Loan Process"}
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-2xl line-clamp-4 text-center md:line-clamp-none text-gray-900 font-[cabin] leading-8">
          {
            "A hassle free and smooth process designed to help you get the car you want "
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Column - Image */}
        <div className="lg:w-6/12 lg:h-[90vh] 2xl:h-auto px-6 w-full flex justify-center">
          <Image
            src={image1}
            alt="Who We Are Image"
            width={800}
            height={630}
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-6/12 w-full mt-8 lg:mt-0 text-left">
          <ul className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-2">
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525]  leading-8">
              <Image
                src={image5}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-[poppins] font-semibold mb-4">
                {"Check Your Eligibility Instantly"}
              </h2>
              <p className="text-sm/6 lg:w-5/6 line-clamp-4 font-[cabin] text-center h-28">
                A hassle-free and smooth process designed to help you get the
                car you want, fast.
              </p>
            </li>
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525]  leading-8">
              <Image
                src={image2}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-[poppins] font-semibold mb-4">
                {"Transparent  "}
              </h2>
              <p className="text-sm/6  text-center font-[cabin] line-clamp-4 h-28">
                Assess your eligibility for a car loan quickly with our advanced
                automated system, making sure you know your options right away
              </p>
            </li>
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525]  leading-8">
              <Image
                src={image3}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-[poppins] font-semibold mb-4">
                {"Trusted"}
              </h2>
              <p className="text-sm/6  text-center font-[cabin] line-clamp-4 h-28">
                Esteem Finance is trusted by over 100+ businesses and customers
                nationwide for providing reliable, fast, and efficient car
                financing solutions.
              </p>
            </li>
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525]  leading-8">
              <Image
                src={image4}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-[poppins] font-semibold mb-4">
                {"Get a Fast Decision"}
              </h2>
              <p className="text-sm/6 lg:p-1 font-[cabin] text-center line-clamp-4 h-28">
                Our smooth process ensures you get a quick decision on your loan
                application, allowing you to secure your vehicle without delays.
              </p>
            </li>
            <Link
              href={"/apply-for-car-loan"}
              className="inline-block text-center lg:col-span-2 lg:w-2/5 mt-4 p-3 px-10 rounded text-sm text-gray-50 bg-[#1262A1]"
            >
              Apply Now
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurSimple;
