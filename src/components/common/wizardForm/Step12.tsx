import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai"; // You can keep the icon or change it
import { FaCarSide } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
  setStep,
  handelSubmit,
}: any) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation function
  const validateForm = () => {
    let newErrors: any = {};

    // Check if required fields are filled in
    if (
      !formData.utilities ||
      isNaN(Number(formData.utilities)) ||
      Number(formData.utilities) < 0
    ) {
      newErrors.utilities =
        "Utilities payment is required and must be a valid number";
    }

    if (
      !formData.livingExpenses ||
      isNaN(Number(formData.livingExpenses)) ||
      Number(formData.livingExpenses) < 0
    ) {
      newErrors.livingExpenses =
        "Living expenses are required and must be a valid number";
    }

    if (
      !formData.motorVehicle ||
      isNaN(Number(formData.motorVehicle)) ||
      Number(formData.motorVehicle) < 0
    ) {
      newErrors.motorVehicle =
        "Motor vehicle payment is required and must be a valid number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    if (validateForm()) {
      handelSubmit(e);
    }
  };

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
        {/* Utilities */}
        <div className="grid grid-cols-4 gap-4 items-center border-b border-t border-gray-100 py-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-[#1262A1] bg-white rounded-full p-2">
              <AiFillThunderbolt />{" "}
              {/* You can change this icon to something related to utilities */}
            </span>
            <span className="font-medium">Utilities</span>
          </div>
          <span></span>
          <span className="hidden lg:inline"></span>

          <input
            type="number"
            name="utilities"
            value={formData.utilities}
            onChange={(e) => handleChange(e)}
            className={`border rounded p-3 col-span-2 lg:col-span-1 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full ${
              errors.utilities ? "border-red-500" : ""
            }`}
            placeholder="$ 0"
          />
          {errors.utilities && (
            <span className="text-red-500 text-xs">{errors.utilities}</span>
          )}
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
            type="number"
            name="livingExpenses"
            value={formData.livingExpenses}
            onChange={(e) => handleChange(e)}
            className={`border rounded p-3 col-span-2 lg:col-span-1 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full ${
              errors.livingExpenses ? "border-red-500" : ""
            }`}
            placeholder="$ 0"
          />
          {errors.livingExpenses && (
            <span className="text-red-500 text-xs">
              {errors.livingExpenses}
            </span>
          )}
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
            type="number"
            name="motorVehicle"
            value={formData.motorVehicle}
            onChange={(e) => handleChange(e)}
            className={`border rounded p-3 col-span-2 lg:col-span-1 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full ${
              errors.motorVehicle ? "border-red-500" : ""
            }`}
            placeholder="$ 0"
          />
          {errors.motorVehicle && (
            <span className="text-red-500 text-xs">{errors.motorVehicle}</span>
          )}
        </div>
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
        <span>
          $
          {(
            (Number(formData?.loanMonthlyPayments) || 0) +
            (Number(formData?.creditCardMonthlyPayments) || 0) +
            (Number(formData?.motorVehicle) || 0) +
            (Number(formData?.livingExpenses) || 0) +
            (Number(formData?.utilities) || 0)
          ).toLocaleString()}
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          className="bg-white text-[#1262A1] px-8 py-2 rounded-lg"
          onClick={prevStep}
        >
          Prev
        </button>
        <button
          className="bg-white text-[#1262A1] px-8 py-2 rounded-lg"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
