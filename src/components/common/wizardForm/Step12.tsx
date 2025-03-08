import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  FaCarSide,
} from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
  setStep,
}: any) {
  return (
    <div className="bg-[#1262A1] lg:p-6 rounded-lg min-w-[70vw] mx-auto text-white">
      <h2 className="text-2xl font-bold mb-10">
        What Are Your Financial Commitments?
      </h2>

      {/* Grid Headers */}
      <div className="grid grid-cols-4 gap-4 text-sm font-medium mb-2">
        <span></span>
        <span></span>
        <span></span>
        <span className="text-center">Monthly Payments</span>
      </div>

      {/* Financial Items Grid */}
      <div className="grid gap-4">
        {/* Credit Cards */}
        <div className="grid grid-cols-4 gap-4 items-center border-b border-t border-gray-100 py-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-[#1262A1] bg-white rounded-full p-2">
              <AiFillThunderbolt />
            </span>
            <span className="font-medium">Credit Cards</span>
          </div>
          <span></span>
          <span className="hidden lg:inline"></span>

          <input
            type="text"
            className="border rounded p-3 col-span-2 lg:col-span-1 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
            placeholder="$ 0"
          />
        </div>

        {/* Living Expenses */}
        <div className="grid grid-cols-4 gap-4 items-center border-b border-gray-100 py-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-[#1262A1] bg-white rounded-full p-2">
              <TbMoneybag />
            </span>
            <span className="font-medium">Living Expenses</span>
          </div>
          <span></span>
          <span className="hidden lg:inline"></span>

          <input
            type="text"
            className="border rounded p-3 col-span-2 lg:col-span-1 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
            placeholder="$ 0"
          />
        </div>

        {/* Motor Vehicle */}
        <div className="grid grid-cols-4 gap-4 items-center border-b border-gray-100 py-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-[#1262A1] bg-white rounded-full p-2">
              <FaCarSide />
            </span>
            <span className="font-medium">Motor Vehicle</span>
          </div>
          <span></span>
          <span className="hidden lg:inline"></span>
          <input
            type="text"
            className="border rounded p-3 col-span-2 lg:col-span-1 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
            placeholder="$ 0"
          />
        </div>
      </div>

      {/* Add New Button */}
      <div className="mt-4 text-right">
        <button className="text-white font-medium flex items-center space-x-2 ml-auto">
          <span>Add New</span>
          <span className="text-lg">
            <IoIosAddCircleOutline />
          </span>
        </button>
      </div>

      {/* Additional Expenses Info */}
      <p className="mt-4 text-sm lg:w-3/5 text-gray-200">
        Tell us about any other recurring expenses you have that you cannot give
        up (e.g. child support, child care, dependent education, other
        insurances, thinking)
      </p>

      {/* Total Monthly Payments */}
      <div className="mt-6 bg-white text-[#1262A1] font-medium p-8 rounded-lg flex justify-between">
        <span>Total Monthly Payments</span>
        <span>$ 0,000</span>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-end">
        <button
          className="bg-white text-[#1262A1] px-8 py-2 rounded-lg"
          onClick={() => prevStep()}
        >
          prev
        </button>
      </div>
    </div>
  );
}
