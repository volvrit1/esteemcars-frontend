import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function LandingHeroSection() {
  return (
    <div className="relative w-full h-[50vh] lg:h-[120vh] 2xl:h-[h-110vh] text-3xl:h-screen mt-[5.7rem] lg:mt-[7rem] p-4 lg:p-16">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1262A1] via-[#1262A1]/80 to-[#1262A1]/30 z-10"></div>

      {/* Background Image */}
      <Image
        priority
        src="/assets/esteemlandingtopbg.png"
        alt="Landing Background"
        fill
        className="object-cover -z-10"
      />

      <div className="absolute z-40 w-full p-4 lg:w-3/5 m-auto text-center left-1/2 -translate-x-1/2">
        <h1 className="font-[alexandria] text-white text-3xl lg:text-5xl font-bold mb-4">
          Drive Your Dream <br /> Car with Esteem Finance
        </h1>
        <p className="font-[cabin] text-white text-base mb-8">
          A hassle free and smooth process designed to help you get the car you
          want{" "}
        </p>
        <div className="flex justify-center items-center gap-2 lg:gap-4 ">
          <Link
            href={"/apply-loan"}
            className="bg-white text-[#1262A1] font-semibold hover:bg-gray-200/80 transition-colors ease-in-out flex items-center font-[poppins] px-2 lg:px-6 text-xs lg:text-sm  lg:py-4 p-0 h-12 lg:h-14  rounded-lg"
          >
            Get Your Car Finance Today
          </Link>
          <button className="rounded-lg p-2 px-4 h-12 lg:h-14 text-2xl bg-transparent border bg-white text-[#1262A1]">
            <IoIosArrowForward width={16} height={16} />
          </button>
          <button className=" text-white text-xs lg:text-base h-12 lg:h-14 font-semibold font-[poppins] ">
            {"Learn More"}
          </button>
        </div>
      </div>
      {/* Wave Image at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Image
          priority
          src="/assets/esteemwave.png"
          alt="Wave Decoration"
          width={1920} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-30">
        <Image
          priority
          src="/assets/esteemlandingtop.png"
          alt="Wave Decoration"
          width={1920} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="w-3/5 m-auto h-auto"
        />
      </div>
    </div>
  );
}
