"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(70000);
  const [tenure, setTenure] = useState(12);
  const [interestRate, setInterestRate] = useState(9.9);
  const [tenureType, setTenureType] = useState("monthly");

  // EMI Calculation Function
  const calculateEMI = () => {
    const monthlyRate = interestRate / 100 / 12; // Monthly interest rate
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi.toFixed(2); // Returns EMI rounded to 2 decimal places
  };

  const totalInterest = (
    parseFloat(calculateEMI()) * tenure -
    loanAmount
  ).toFixed(2);
  const totalAmount = (parseFloat(totalInterest) + loanAmount).toFixed(2);

  // Gradient Calculation for Loan Amount Range
  const loanRangeGradient = ((loanAmount - 70000) / (2000000 - 70000)) * 100;

  // Gradient Calculation for Tenure Range
  const tenureRangeGradient =
    ((tenure - (tenureType === "monthly" ? 12 : 52)) /
      (tenureType === "monthly" ? 72 - 12 : 312 - 52)) *
    100;

  // Update tenure value when switching between "monthly" and "weekly"
  const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTenure = Number(e.target.value);
    if (
      (tenureType === "monthly" && newTenure >= 12 && newTenure <= 72) ||
      (tenureType === "weekly" && newTenure >= 52 && newTenure <= 312)
    ) {
      setTenure(newTenure);
    }
  };

  // Handle Loan Amount Change
  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLoanAmount = Number(e.target.value);
    if (newLoanAmount >= 70000 && newLoanAmount <= 2000000) {
      setLoanAmount(newLoanAmount);
    }
  };

  // Handle Interest Rate Change
  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInterestRate = Number(e.target.value);
    if (newInterestRate >= 9.9 && newInterestRate <= 20) {
      setInterestRate(newInterestRate);
    }
  };

  const calculateStrokeDashoffset = () => {
    // Define min and max values for loan amount or tenure (weeks)
    const loanMin = 6151;
    const loanMax = 47906;
    const tenureMin = 6151;
    const tenureMax = 33526.38;

    // Calculate the range's percentage (between 0 and 100)
    const rangeMin = tenureType === "monthly" ? loanMin : tenureMin;
    const rangeMax = tenureType === "monthly" ? loanMax : tenureMax;
    const rangeValue = tenureType === "monthly" ? loanAmount : tenure;

    // Calculate the percentage progress within the range
    const percentage = ((rangeValue - rangeMin) / (rangeMax - rangeMin)) * 100;

    // Calculate the strokeDashoffset based on the percentage
    const maxDashoffset = 283; // Full circle circumference (2πr where r = 45)
    return maxDashoffset - (percentage / 100) * maxDashoffset;
  };

  return (
    <div className="max-w-7xl relative font-[poppins] m-auto p-4 lg:p-16">
      <div className="w-full m-auto  text-center mb-8">
        <h2 className="text-gray-900 text-2xl font-[alexandria] font-semibold mb-2">
          Calculate Your EMI
        </h2>
        <p className="text-gray-700 font-[cabin]">
          Unlike other providers, Esteem offers personalized service to help you
          navigate the complexities of car financing. Our team of experts
          provides clear advice, ensuring you feel confident in your loan
          decisions. We focus on quick, hassle-free solutions, offering a smooth
          path to secure your car loan with ease.
        </p>
      </div>{" "}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="m-auto  text-left flex flex-col justify-center items-center lg:item-start pt-6 lg:pt-0 mb-8 lg:mb-auto">
          <Image
            alt=""
            src={"/assets/emi.svg"}
            width={100}
            height={100}
            className="w-full "
          />
          <p className="text-gray-700 text-sm mb-8">Calculate your EMI and Apply for Loan today</p>
          <Link
            href={"/apply-loan"}
            className="bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out px-6 lg:px-16 py-3 flex justify-center items-center font-[poppins] h-11 text-base lg:text-sm m-auto rounded"
          >
            Apply Now
          </Link>
        </div>
        <div className="w-full  p-4">
          {/* Loan Amount Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-gray-900 font-semibold text-sm w-1/3 mb-2">
                Loan amount
              </label>
              <div className="w-2/4 flex items-center border-[1.5px] text-[#7d7d7d] border-gray-300 rounded-lg px-2">
                $
                <input
                  type="number"
                  min="70000"
                  max="2000000"
                  step="1000"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                  className="text-sm font-thin outline-none w-full p-2"
                />
              </div>
            </div>
            <input
              type="range"
              min="70000"
              max="2000000"
              step="1000"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              style={{
                background: `linear-gradient(to right, #ED6A00 ${loanRangeGradient}%, #DDE5EB ${loanRangeGradient}%)`,
                WebkitAppearance: "none",
              }}
              className="w-full appearance-none h-[7px] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#ED6A00] [&::-webkit-slider-thumb]:to-[#F69B00] [&::-webkit-slider-thumb]:rounded-full"
            />
            <div className="flex justify-between items-center p-2">
              <span className="text-[#7d7d7d] font-semibold text-sm w-1/3 mb-2">
                $70,000
              </span>
              <span className="text-[#7d7d7d] font-semibold text-sm w-1/3 mb-2 text-right">
                $2,000,000
              </span>
            </div>
          </div>

          {/* Tenure Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-gray-900 font-semibold mb-2">
                Tenure
              </label>
              <div className="w-2/4 flex items-center border-[1.5px] text-[#7d7d7d] border-gray-300 rounded-lg px-2">
                <input
                  type="number"
                  min={tenureType === "monthly" ? "12" : "52"}
                  max={tenureType === "monthly" ? "72" : "312"}
                  step="1"
                  value={tenure}
                  onChange={handleTenureChange}
                  className="text-sm  w-2/5 font-thin outline-none p-2"
                />
                <select
                  value={tenureType}
                  onChange={(e) => setTenureType(e.target.value)}
                  className="text-sm w-3/5 font-thin outline-none rounded-none p-2"
                >
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>
            <input
              type="range"
              min={tenureType === "monthly" ? 12 : 52}
              max={tenureType === "monthly" ? 72 : 312}
              step={1}
              value={tenure}
              onChange={handleTenureChange}
              style={{
                background: `linear-gradient(to right, #ED6A00 ${tenureRangeGradient}%, #DDE5EB ${tenureRangeGradient}%)`,
                WebkitAppearance: "none",
              }}
              className="w-full appearance-none h-[7px] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#ED6A00] [&::-webkit-slider-thumb]:to-[#F69B00] [&::-webkit-slider-thumb]:rounded-full"
            />
            <div className="flex justify-between items-center p-2">
              <span className="text-[#7d7d7d] font-semibold text-sm w-1/3 mb-2">
                {tenureType === "monthly" ? "12 months" : "52 weeks"}
              </span>
              <span className="text-[#7d7d7d] font-semibold text-sm w-1/3 mb-2 text-right">
                {tenureType === "monthly" ? "72 months" : "312 weeks"}
              </span>
            </div>
          </div>

          {/* Interest Rate Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-gray-900 font-semibold mb-2">
                Interest rate
              </label>
              <div className="w-2/4 flex items-center border-[1.5px] text-[#7d7d7d] border-gray-300 rounded-lg px-2">
                <input
                  type="number"
                  min="9.9"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="text-sm font-thin outline-none w-full p-2"
                />
                %
              </div>
            </div>
            <input
              type="range"
              min="9.9"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={handleInterestRateChange}
              style={{
                background: `linear-gradient(to right, #ED6A00 ${
                  ((interestRate - 9.9) / 10.1) * 100
                }%, #DDE5EB ${(interestRate / 200) * 100}%)`,
                WebkitAppearance: "none",
              }}
              className="w-full appearance-none h-[7px] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#ED6A00] [&::-webkit-slider-thumb]:to-[#F69B00] [&::-webkit-slider-thumb]:rounded-full"
            />
            <div className="flex justify-between items-center p-2">
              <span className="text-[#7d7d7d] font-semibold text-sm w-1/3 mb-2">
                9.9%
              </span>
              <span className="text-[#7d7d7d] font-semibold text-sm w-1/3 mb-2 text-right">
                20%
              </span>
            </div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="w-full  2xl:h-auto bg-[#1262A1] text-white p-4 rounded-lg lg:rounded-r-lg">
          <h3 className="text-xs font-light text-gray-50 text-center">
            Indicative EMI
          </h3>
          <p className="text-2xl text-center font-bold mt-2">
            ${calculateEMI()}/{tenureType}
          </p>

          {/* SVG Progress Circle */}
          <div className="relative flex items-center justify-center w-40 h-40 mx-auto mt-4">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#DDE5EB"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283" // The full circumference of the circle
                strokeDashoffset={calculateStrokeDashoffset()} // Dynamically calculated dashoffset
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ED6A00" />
                  <stop offset="100%" stopColor="#F69B00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Summary Information */}
          <div className="mt-4 text-base lg:text-sm font-thin border-t border-white/50 pt-4">
            <p className="flex justify-start mb-4">
              <span className="h-4 w-4 bg-gray-50 rounded-sm mr-2"></span>
              <span>Loan amount</span>
              <span className="ml-auto">${loanAmount}</span>
            </p>
            <p className="flex justify-start mb-4">
              <span className="h-4 w-4 bg-[#ED6A00] rounded-sm mr-2"></span>
              <span>Interest @{interestRate}% p.a.</span>
              <span className="ml-auto"> ${totalInterest}</span>
            </p>
            <hr />
            <p className="flex justify-between font-semibold mt-2">
              <span>Total amount</span> <span>${totalAmount}</span>
            </p>
          </div>

          <button className="mt-6 bg-gray-100 hover:bg-orange-400 text-[#1262A1] hover:text-white font-sem text-base lg:text-sm font-semibold py-4 px-4 w-full rounded">
            Check Eligibility In 2 Min
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
