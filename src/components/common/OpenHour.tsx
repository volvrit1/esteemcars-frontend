import React from "react";

export default function OpenHour() {
  return (
    <div className="bg-gray-950">
      <div className="border-b-2 bg-gray-950 border-r-gray-50 m-auto">
        <div className="max-w-7xl m-auto flex flex-col lg:flex-row justify-between items-center py-6 lg:px-16">
          <div className="text-center text-lg lg:text-base font-semibold font-[poppins] mb-4 lg:mb-0">
            Opening Hours
          </div>
          <div className="text-center text-base lg:text-xs font-thin text-gray-50 font-[poppins]  ">
            <p className="font-[poppins] tracking-widest">
              <span className="lg:mr-5">{"Monday "}</span>
              <span className="lg:mr-5">{"to "}</span>
              <span className="lg:mr-5">{"Friday "}</span>
              <span className="lg:mr-5">{"- "}</span>
              <span className="lg:mr-5">{"09:30 AM - 06:00 PM "}</span>
              <span className="lg:mr-5">{"| "}</span>
              <span className="lg:mr-5">{"Saturday "}</span>
              <span className="lg:mr-5">{"& "}</span>
              <span className="lg:mr-5">{"Sunday "}</span>
              <span className="lg:mr-5">{"- "}</span>
              <span className="lg:mr-5">{"10:30 AM - 03:30 PM "}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
