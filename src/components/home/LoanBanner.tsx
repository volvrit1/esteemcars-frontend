import Link from "next/link";
import React from "react";

export default function LoanBanner() {
  return (
    <div className="max-w-7xl relative m-auto p-4 lg:p-14">
      <div
        className="rounded-2xl w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/loanbanner.svg')", // Replace with your image path
        }}
      >
        <div className="flex flex-col justify-center items-start h-full gap-2 space-y-4 text-[#252525] p-10">
          <h2 className="text-3xl font-bold lg:w-2/6 font-[poppins]">
            Submit Your Car Loan Application Today
          </h2>
          <p className="text-sm lg:w-4/6 font-[cabin]">
            Ready to own your dream car? Get pre-approved for financing with
            flexible, negotiable rates. Our hassle-free approval process ensures
            a quick and convenient experience.
          </p>
          <Link
            href={"/apply-for-car-loan"}
            className="text-gray-50 bg-[#1262A1] rounded-lg text-center text-sm p-3 px-16"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
