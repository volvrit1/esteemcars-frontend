import React, { useState } from "react";
import {
  FaDollarSign,
  FaFileInvoice,
  FaRegAddressCard,
  FaRegHandshake,
} from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { TiUser } from "react-icons/ti";

export default function Step1({ nextStep, handleChange, formData }: any) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">Before you apply, you will need:</h2>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <button className="bg-white text-gray-700 h-56 lg:w-64 p-8 rounded-xl">
          <div className="text-[#1262A1] w-24 h-24 overflow-hidden mr-auto rounded-full flex justify-center items-center">
            <FaRegAddressCard width={50} height={50} className="text-6xl" />
          </div>
          <p className="h-20 text-sm text-left text-[#1262A1]   pt-2">
            {" "}
            Your Current New Zealand full or restricted Driver License
          </p>{" "}
        </button>
        <button className="bg-white text-gray-700 h-56 lg:w-64 p-8 rounded-xl">
          <div className="text-[#1262A1] w-24 h-24 overflow-hidden mr-auto rounded-full flex justify-center items-center">
            <FaFileInvoice width={50} height={50} className="text-6xl" />
          </div>
          <p className="h-20 text-sm text-left text-[#1262A1]   pt-2">
            Your Employment Details{" "}
          </p>{" "}
        </button>
        <button className="bg-white text-gray-700 h-56 lg:w-64 p-8 rounded-xl">
          <div className="text-[#1262A1] w-24 h-24 overflow-hidden mr-auto rounded-full flex justify-center items-center">
            <FaCalendarDays width={50} height={50} className="text-6xl" />
          </div>
          <p className="h-20 text-sm text-left text-[#1262A1]   pt-2">
            Details of your income, expenses, assets & liabilities
          </p>{" "}
        </button>
      </div>

      <h2 className="text-xl font-bold mt-8">
        In order to procced with this application :
      </h2>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <button className="bg-white text-gray-700 h-56 lg:w-64  p-8 rounded-xl">
          <div className="bg-[#1262A1] w-10 h-10 overflow-hidden mr-auto rounded-full flex justify-center items-center">
            <TiUser width={80} height={80} className="text-3xl text-gray-50" />
          </div>
          <p className="h-20 text-sm text-left text-[#1262A1]   pt-2">
            {" "}
            You must be a New Zealand citizen or have a New Zealand resident
            visa and you must be at least 18 years old
          </p>{" "}
        </button>
        <button className="bg-white text-gray-700 h-56 lg:w-64 p-8 rounded-xl">
          <div className="bg-[#1262A1] w-10 h-10 overflow-hidden mr-auto rounded-full flex justify-center items-center">
            <FaDollarSign
              width={50}
              height={50}
              className="text-2xl text-gray-50"
            />
          </div>
          <p className="h-20 text-sm text-left text-[#1262A1]   pt-2">
            The loan amount you are applying for must be at least $5,000
          </p>{" "}
        </button>
      </div>
      <div className="mt-6  lg:w-2/4">
        {/* <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-gray-500 rounded bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                /> */}
        <label className="flex items-center space-x-2 cursor-pointer mb-3">
          <input
            type="checkbox"
            className="peer hidden"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <div className="w-5 h-5 border border-gray-300 rounded bg-transparent peer-checked:bg-blue-500 peer-checked:border-blue-500 flex items-center justify-center">
            {checked && <IoCheckmark />}
          </div>
          <span className="text-sm font-thin text-gray-300 ">
            By ticking this box, you confirm that :
          </span>
        </label>
        <ul className="text-sm text-gray-300 ml-8 space-y-2 list-disc">
          <li>You meet each of the requirements set out above</li>
          <li>
            You have read UCD’s Privacy Statement and you understand that it
            applies to you loan application
          </li>
          <li>
            You have read UDC’s Financial Advice Statements and you understand
            that any recommendations made by UDC in relation to your loan are
            not regulated financial advice
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-end items-center">
        <input
          type="button"
          className={`mt-4 px-14 py-2 rounded-lg w-auto ml-auto 
    ${
      checked
        ? "bg-white text-blue-700 cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
    }`}
          onClick={nextStep}
          value="Next"
          disabled={!checked} // Disable if not checked
        />
      </div>
    </div>
  );
}
