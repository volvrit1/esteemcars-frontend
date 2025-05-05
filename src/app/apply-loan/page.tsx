// app/apply/page.tsx

import LoanForm from "@/components/common/LoanForm";
import Image from "next/image";
import React from "react";
import { BiTimer } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";

// ✅ App Router metadata export
export const metadata = {
  title: "Apply for Car Finance | Quick Approval - Esteem",
  description:
    "Start your car loan application with Esteem Finance. Experience a swift, easy process with competitive rates tailored for you.",
  keywords:
    "apply car loan NZ, Esteem Finance application, quick car finance, vehicle loan apply",
  metadataBase: new URL("https://esteemfinance.co.nz"),
};

export default function Page() {
  return (
    <div className="bg-white">
      <div className="w-full mt-[6rem] lg:mt-[9rem]">
        <Image
          src="/assets/applyloan.png"
          alt="Loan Form"
          width={500}
          height={500}
          unoptimized
          className="object-contain h-32 w-full object-cover"
        />
      </div>
      <div className="max-w-7xl m-auto text-center pt-12">
        <h1 className="text-4xl md:text-5xl m-auto font-bold text-gray-900 mb-4">
          Easy Online Loan Application
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Super fast loan approval, get your application reviewed in minutes
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-gray-800 text-lg">
          <div className="flex items-center gap-3">
            <FaRegClock className="w-6 h-6 text-gray-500" />
            <span>Apply online in minutes</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300" />
          <div className="flex items-center gap-3">
            <BiTimer className="w-8 h-8 text-gray-500" />
            <span>Fast Approvals</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300" />
          <div className="flex items-center gap-3">
            <BsCurrencyDollar className="w-6 h-6 text-gray-500" />
            <span>Same Day Funding</span>
          </div>
        </div>
        <p className="text-gray-700 mt-6 lg:w-1/2 m-auto">
          Applying for a loan or just exploring your options? Either way, it
          only takes a few moments to get the ball rolling.
        </p>
      </div>
      <LoanForm />
    </div>
  );
}
