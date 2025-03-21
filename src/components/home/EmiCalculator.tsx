"use client";
import Link from "next/link";
import { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(600000);
  const [tenure, setTenure] = useState(72);
  const [interestRate, setInterestRate] = useState(12);

  const calculateEMI: any = () => {
    const monthlyRate = interestRate / 100 / 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi.toFixed(2);
  };

  const totalInterest = (calculateEMI() * tenure - loanAmount).toFixed(2);
  const totalAmount: any = (parseFloat(totalInterest) + loanAmount).toFixed(2);

  return (
    <div className="max-w-7xl relative font-[poppins]  m-auto p-4 lg:p-14 flex flex-col lg:flex-row justify-center items-center ">
      <div className="m-auto  lg:w-2/5 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl/10 xl:text-3xl/10 font-bold text-[#252525] leading-9 mb-4">
          {"EMI Simplified!"}
          {" Calculate "}
          <br />
          {"Your Monthly Payment"}
        </h2>
        <Link
          href={"/apply-for-car-loan"}
          className="bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out px-14 lg:py-3 font-[poppins] h-11 text-xs rounded"
        >
          Apply Now
        </Link>
      </div>
      <div className="w-full lg:w-2/5 p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-900 font-semibold text-sm w-1/3  mb-2">
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
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="text-sm font-thin outline-none w-full  p-2"
              />
            </div>
          </div>
          <input
            type="range"
            min="70000"
            max="2000000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #ED6A00 ${
                ((loanAmount - 70000) / 1930000) * 100
              }%, #DDE5EB ${((loanAmount - 70000) / 1930000) * 100}%)`,
              WebkitAppearance: "none",
            }}
            className="w-full appearance-none h-[7px] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#ED6A00] [&::-webkit-slider-thumb]:to-[#F69B00] [&::-webkit-slider-thumb]:rounded-full"
          />
          <div className="flex justify-between items-center p-2">
            <span className="text-[#7d7d7d] font-semibold text-sm w-1/3  mb-2 ">
              $ {"70,000"}
            </span>
            <span className="text-[#7d7d7d] font-semibold text-sm w-1/3  mb-2 text-right">
              $ {"20,00,000"}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-900 font-semibold mb-2">
              Tenure
            </label>
            <div className="w-2/4 flex items-center border-[1.5px] text-[#7d7d7d] border-gray-300 rounded-lg px-2">
              <input
                type="number"
                min="12"
                max="72"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="text-sm font-thin outline-none w-full  p-2"
              />
              months
            </div>
          </div>
          <input
            type="range"
            min="12"
            max="72"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #ED6A00 ${
                ((tenure - 12) / 60) * 100
              }%, #DDE5EB ${((tenure - 12) / 60) * 100}%)`,
              WebkitAppearance: "none",
            }}
            className="w-full appearance-none h-[7px] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#ED6A00] [&::-webkit-slider-thumb]:to-[#F69B00] [&::-webkit-slider-thumb]:rounded-full"
          />
          <div className="flex justify-between items-center p-2">
            <span className="text-[#7d7d7d] font-semibold text-sm w-1/3  mb-2 ">
              {"12 months"}
            </span>
            <span className="text-[#7d7d7d] font-semibold text-sm w-1/3  mb-2 text-right">
              {"72 months"}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-900 font-semibold mb-2">
              Interest rate
            </label>
            <div className="w-2/4 flex items-center border-[1.5px] text-[#7d7d7d] border-gray-300 rounded-lg px-2">
              <input
                type="number"
                min="12"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="text-sm font-thin outline-none w-full  p-2"
              />
              %
            </div>
          </div>
          <input
            type="range"
            min="12"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #ED6A00 ${
                ((interestRate - 12) / 8) * 100
              }%, #DDE5EB ${((interestRate - 12) / 8) * 100}%)`,
              WebkitAppearance: "none",
            }}
            className="w-full appearance-none h-[7px] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#ED6A00] [&::-webkit-slider-thumb]:to-[#F69B00] [&::-webkit-slider-thumb]:rounded-full"
          />
          <div className="flex justify-between items-center p-2">
            <span className="text-[#7d7d7d] font-semibold text-sm w-1/3  mb-2 ">
              {"12%"}
            </span>
            <span className="text-[#7d7d7d] font-semibold text-sm w-1/3  mb-2 text-right">
              {"20%"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/12 lg:h-[80vh] 2xl:h-auto bg-[#1262A1] text-white p-4 rounded-lg lg:rounded-r-lg">
        <h3 className="text-xs font-light text-gray-50 text-center">
          Indicative EMI
        </h3>
        <p className="text-2xl text-center font-bold mt-2">
          ${calculateEMI()}/month
        </p>
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
              strokeDasharray="100"
              strokeDashoffset={100 - (1 * calculateEMI()) / 100}
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
        <div className="mt-4 text-sm font-thin border-t border-white/50 pt-4">
          <p className="flex justify-start mb-2">
            <span className="h-4 w-4 bg-gray-50 rounded-sm mr-2"></span>{" "}
            <span>Loan amount</span>{" "}
            <span className="ml-auto">${loanAmount}</span>
          </p>
          <p className="flex justify-start mb-2">
            <span className="h-4 w-4 bg-[#ED6A00] rounded-sm mr-2"></span>{" "}
            <span>Interest @{interestRate}% p.a.</span>{" "}
            <span className="ml-auto">+ ${totalInterest}</span>
          </p>
          <hr />
          <p className="flex justify-between font-semibold mt-2">
            <span>Total amount</span> <span>${totalAmount}</span>
          </p>
        </div>

        <button className="mt-6 bg-gray-100 hover:bg-orange-600 text-[#1262A1] text-xs font-semibold py-4 px-4 w-full rounded">
          Check Eligibility In 2 Min
        </button>
      </div>
    </div>
  );
};

export default EmiCalculator;
