import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function CreditScore() {
  return (
    <div className="w-full py-10 lg:py-0 lg:min-h-[85vh]">
      <div className="lg:w-4/5 m-auto text-center  p-4 lg:p-8 bg-opacity-80">
        <h2 className="lg:w-3/5 m-auto text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-800 leading-7">
          {"Best Car Loans Offers On your"} <br />
          <span className="text-[#F75D34] inline-block mt-4"> {"Credit Score"}</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl line-clamp-4 md:line-clamp-none text-gray-800 lg:px-10 mt-4 leading-8 mb-4">
          {
            "At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone. That’s why we are committed to providing the most hassle-free, transparent, and affordable car loan solutions tailored to your credit profile"
          }
        </p>
      </div>
      <div className=" w-full h-[70vh] lg:px-20 top-0 inset-0 flex justify-center items-center  bg-[url('/images/creditScore.jpeg')] bg-cover bg-center">
        <ul className="lg:w-1/2 mr-auto font-[jost] p-4 ">
          <li className="mb-4 text-lg font-normal flex lg:pr-10">
            <FaCheckCircle className="text-4xl mr-4 font-bold text-white" />{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li className="mb-4 text-lg font-normal flex lg:pr-10">
            <FaCheckCircle className="text-4xl mr-4 font-bold text-white" />{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li className="mb-4 text-lg font-normal flex lg:pr-10">
            <FaCheckCircle className="text-4xl mr-4 font-bold text-white" />{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
        </ul>
      </div>
    </div>
  );
}
