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

const OurSimple = () => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center font-[poppins] text-gray-800 leading-7">
          {"Our Simple Car Loan Process"}
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base line-clamp-4 text-center md:line-clamp-none text-gray-800 font-[cabin] leading-8">
          {
            "A hassle free and smooth process designed to help you get the car you want "
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto lg:p-4 flex flex-col lg:flex-row items-center justify-center">
        {/* Left Column - Image */}
        <div className="lg:w-2/5 lg:h-[85vh] w-full flex justify-center">
          <Image
            src={image1}
            alt="Who We Are Image"
            width={800}
            height={630}
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-3/5 w-full mt-8 lg:mt-0 text-left">
          <ul className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 p-2 leading-8">
              <Image
                src={image5}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-bold">
                {"Check Your Eligibility Instantly"}
              </h2>
              <p className="text-sm/6 w-4/5 text-center">
                A hassle-free and smooth process designed to help you get the
                car you want, fast.
              </p>
            </li>
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 p-2 leading-8">
              <Image
                src={image2}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-bold">
                {"Transparent  "}
              </h2>
              <p className="text-sm/6 w-4/5 text-center">
                Assess your eligibility for a car loan quickly with our advanced
                automated system, making sure you know your options right away
              </p>
            </li>
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 p-2 leading-8">
              <Image
                src={image3}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-bold">{"Trusted"}</h2>
              <p className="text-sm/6 w-4/5 text-center">
                Esteem Finance is trusted by over 100+ businesses and customers
                nationwide for providing reliable, fast, and efficient car
                financing solutions.
              </p>
            </li>
            <li className="flex flex-col justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-gray-800 p-2 leading-8">
              <Image
                src={image4}
                width={35}
                height={35}
                alt="icon"
                className="m-1 mb-6"
              />

              <h2 className="pl-2 lg:pl-0 text-lg font-bold">
                {"Get a Fast Decision"}
              </h2>
              <p className="text-sm/6 w-4/5 text-center">
                Our smooth process ensures you get a quick decision on your loan
                application, allowing you to secure your vehicle without delays.
              </p>
            </li>
            <button className="lg:col-span-2 lg:w-1/3 mt-4 p-3 px-10 rounded text-gray-50 bg-[#1262A1]">Let's Start</button>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurSimple;
