import React from "react";
import { IoStar } from "react-icons/io5";

export default function OurClientSay() {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <h2 className="text-center text-2xl text-gray-800">
        See what our clients say
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mt-10">
        {[1, 2, 3].map((data, index) => (
          <div key={index} className="w-full">
            <div>
              <span>
                <IoStar width={16} height={16} />{" "}
                <IoStar width={16} height={16} />{" "}
                <IoStar width={16} height={16} />{" "}
                <IoStar width={16} height={16} />{" "}
                <IoStar width={16} height={16} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
