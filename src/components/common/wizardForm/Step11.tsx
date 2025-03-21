import React, { useState } from "react";
import { FaCreditCard, FaRegFileAlt } from "react-icons/fa";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: any) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let newErrors: any = {};
    if (!formData.loanBalance)
      newErrors.loanBalance = "Loan balance is required";
    if (!formData.loanMonthlyPayments)
      newErrors.loanMonthlyPayments = "Monthly payment is required";
    if (!formData.creditCardLimit)
      newErrors.creditCardLimit = "Credit card limit is required";
    if (!formData.creditCardMonthlyPayments)
      newErrors.creditCardMonthlyPayments =
        "Credit card monthly payment is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="bg-[#1262A1] p-6 rounded-lg min-w-[70vw] mx-auto text-white">
      <h2 className="text-2xl font-bold mb-6">
        What Are Your Financial Commitments?
      </h2>

      {/* Grid Headers */}
      <div className="grid grid-cols-3 gap-4 text-sm font-medium mb-2">
        <span></span>
        <span className="text-center">Limit</span>
        <span className="text-center">Monthly Payments</span>
      </div>

      {/* Financial Items Grid */}
      <div className="grid gap-4">
        {/* Credit Cards */}
        <div className="grid grid-cols-3 gap-4 items-center border-b border-t border-gray-100 py-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">
              <FaCreditCard />
            </span>
            <span className="font-medium">Credit Cards</span>
          </div>
          <div>
            <input
              type="number"
              name="creditCardLimit"
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              value={formData?.creditCardLimit ?? ""}
              onChange={handleInputChange}
            />
            {errors.creditCardLimit && (
              <p className="text-red-500 text-sm">{errors.creditCardLimit}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="creditCardMonthlyPayments"
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              value={formData?.creditCardMonthlyPayments ?? ""}
              onChange={handleInputChange}
            />
            {errors.creditCardMonthlyPayments && (
              <p className="text-red-500 text-sm">
                {errors.creditCardMonthlyPayments}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm font-medium mb-2">
          <span></span>
          <span className="text-center">Balance</span>
          <span className="text-center">Monthly Payments</span>
        </div>

        {/* Loans */}
        <div className="grid grid-cols-3 gap-4 items-center border-b border-t border-gray-100 py-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">
              <FaRegFileAlt />
            </span>
            <span className="font-medium">Loans</span>
          </div>
          <div>
            <input
              type="number"
              name="loanBalance"
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              value={formData?.loanBalance ?? ""}
              onChange={handleInputChange}
            />
            {errors.loanBalance && (
              <p className="text-red-500 text-sm">{errors.loanBalance}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="loanMonthlyPayments"
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              value={formData?.loanMonthlyPayments ?? ""}
              onChange={handleInputChange}
            />
            {errors.loanMonthlyPayments && (
              <p className="text-red-500 text-sm">
                {errors.loanMonthlyPayments}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white text-[#1262A1] font-medium p-8 rounded-lg flex justify-between">
        <span>Total Monthly Payments</span>
        <span>
          $
          {(
            (Number(formData?.loanMonthlyPayments) || 0) +
            (Number(formData?.creditCardMonthlyPayments) || 0)
          ).toLocaleString()}
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
          onClick={() => {
            if (validateForm()) nextStep(); // Only proceed if the form is valid
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
