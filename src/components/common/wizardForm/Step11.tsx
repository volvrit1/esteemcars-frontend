// import Image from "next/image";
// import React from "react";
// import {
//   FaCarSide,
//   FaCreditCard,
//   FaDollarSign,
//   FaFileInvoice,
//   FaRegAddressCard,
//   FaRegFileAlt,
//   FaRegHandshake,
//   FaShuttleVan,
//   FaTruckMonster,
// } from "react-icons/fa";
// import { FaCalendarDays } from "react-icons/fa6";
// import { ImArrowRight } from "react-icons/im";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { MdChair } from "react-icons/md";
// import { TiUser } from "react-icons/ti";

// export default function Step1({
//   nextStep,
//   prevStep,
//   handleChange,
//   formData,
// }: any) {
//   return (
//     <div className="bg-[#1262A1] p-6 rounded-lg min-w-[70vw] mx-auto text-white">
//       <h2 className="text-2xl font-bold mb-6">
//         What Are Your Financial Commitments?
//       </h2>

//       {/* Grid Headers */}
//       <div className="grid grid-cols-3 gap-4 text-sm font-medium mb-2">
//         <span></span>
//         <span className="text-center">Limit</span>
//         <span className="text-center">Monthly Payments</span>
//       </div>

//       {/* Financial Items Grid */}
//       <div className="grid gap-4">
//         {/* Credit Cards */}
//         <div className="grid grid-cols-3 gap-4 items-center border-b border-t border-gray-100 py-8">
//           <div className="flex items-center space-x-3">
//             <span className="text-2xl">
//               <FaCreditCard />
//             </span>
//             <span className="font-medium">Credit Cards</span>
//           </div>
//           <input
//             type="text"
//             className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
//             placeholder="$ 0"
//           />
//           <input
//             type="text"
//             className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
//             placeholder="$ 0"
//           />
//         </div>

//         <div className="grid grid-cols-3 gap-4 text-sm font-medium mb-2">
//           <span></span>
//           <span className="text-center"> Balance</span>
//           <span className="text-center">Monthly Payments</span>
//         </div>
//         {/* Loans */}
//         <div className="grid grid-cols-3 gap-4 items-center border-b border-t border-gray-100 py-8">
//           <div className="flex items-center space-x-3">
//             <span className="text-2xl">
//               <FaRegFileAlt />
//             </span>
//             <span className="font-medium">Loans</span>
//           </div>
//           <input
//             type="text"
//             className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
//             placeholder="$ 0"
//           />
//           <input
//             type="text"
//             className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
//             placeholder="$ 0"
//           />
//         </div>
//       </div>

//       {/* Add New Button */}
//       <div className="mt-4 text-right">
//         <button className="text-white font-medium flex items-center space-x-2 ml-auto">
//           <span>Add New</span>{" "}
//           <span className="text-lg">
//             <IoIosAddCircleOutline />
//           </span>
//         </button>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-6 flex justify-between">
//         <button
//           className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
//           onClick={prevStep}
//         >
//           Back
//         </button>
//         <button
//           className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
//           onClick={nextStep}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }






















import Image from "next/image";
import React, { useState } from "react";
import {
  FaCreditCard,
  FaRegFileAlt,
} from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Step1({ nextStep, prevStep, handleChange, formData }: any) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateInput = (name: string, value: string) => {
    if (!/^[0-9]*\.?[0-9]*$/.test(value)) {
      setErrors((prev) => ({ ...prev, [name]: "Only numeric values are allowed" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateInput(name, value);
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
              type="text"
              name="creditLimit"
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              onChange={handleInputChange}
            />
            {errors.creditLimit && <p className="text-red-500 text-sm">{errors.creditLimit}</p>}
          </div>
          <div>
            <input
              type="text"
              name="creditMonthly"
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              onChange={handleInputChange}
            />
            {errors.creditMonthly && <p className="text-red-500 text-sm">{errors.creditMonthly}</p>}
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
              type="text"
              name="loanBalance"
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              onChange={handleInputChange}
            />
            {errors.loanBalance && <p className="text-red-500 text-sm">{errors.loanBalance}</p>}
          </div>
          <div>
            <input
              type="text"
              name="loanMonthly"
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none w-full"
              placeholder="$ 0"
              onChange={handleInputChange}
            />
            {errors.loanMonthly && <p className="text-red-500 text-sm">{errors.loanMonthly}</p>}
          </div>
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

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button className="bg-white text-[#1262A1] px-6 py-2 rounded-lg" onClick={prevStep}>
          Back
        </button>
        <button className="bg-white text-[#1262A1] px-6 py-2 rounded-lg" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}
