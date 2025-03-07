// import Image from "next/image";
// import React from "react";
// import { FaCarSide, FaShuttleVan, FaTruckMonster } from "react-icons/fa";

// export default function Step1({
//   nextStep,
//   prevStep,
//   handleChange,
//   formData,
// }: any) {
//   return (
//     <div className="min-w-[70vw]">
//       <h2 className="text-xl font-bold">Apply Loan For </h2>

//       <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200 mx-auto">
//         {/* Loan Type Selection */}
//         {["Car", "Van", "Others"].map((loanType, index) => (
//           <div key={index} className="flex flex-col">
//             <label className="flex items-center cursor-pointer mb-3">
//               <input
//                 type="radio"
//                 required
//                 name="loanAppliedFor"
//                 value={loanType}
//                 checked={formData.loanAppliedFor === loanType}
//                 onChange={handleChange}
//                 className="peer hidden"
//               />
//               <div className="w-full h-14 border text-[#1262A1] font-semibold border-gray-300 rounded bg-gray-50 peer-checked:bg-gray-300 peer-checked:border-blue-500 flex items-center justify-center">
//                 {loanType === "Car" && (
//                   <FaCarSide className="text-3xl text-[#1262A1]" />
//                 )}
//                 {loanType === "Van" && (
//                   <FaShuttleVan className="text-3xl text-[#1262A1]" />
//                 )}
//                 {loanType === "Others" && (
//                   <FaTruckMonster className="text-3xl text-[#1262A1]" />
//                 )}
//                 {loanType.toUpperCase()}
//               </div>
//             </label>
//           </div>
//         ))}

//         {/* Purchase Price */}
//         <div className="flex flex-col">
//           <label className="text-gray-100 font-medium">
//             Purchase Price<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="number"
//             required
//             name="purchasePrice"
//             value={formData.purchasePrice}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Enter purchase price"
//           />
//         </div>

//         {/* Loan Term */}
//         <div className="flex flex-col">
//           <label className="text-gray-300 font-medium">
//             Loan Term<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="text"
//             required
//             name="longTerm"
//             value={formData.longTerm}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Enter loan term"
//           />
//         </div>

//         {/* Payment Frequency */}
//         <div className="flex flex-col">
//           <label className="text-gray-300 font-medium">
//             Payment Frequency<span className="text-gray-200">*</span>
//           </label>
//           <select
//             required
//             name="paymentFrequency"
//             value={formData.paymentFrequency}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//           >
//             <option value="">Select Frequency</option>
//             <option value="Weekly">Weekly</option>
//             <option value="Bi-Weekly">Bi-Weekly</option>
//             <option value="Monthly">Monthly</option>
//           </select>
//         </div>

//         {/* Deposit Amount */}
//         <div className="flex flex-col">
//           <label className="text-gray-300 font-medium">
//             Deposit Amount<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="number"
//             required
//             name="depositAmount"
//             value={formData.depositAmount}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Enter deposit amount"
//           />
//         </div>

//         {/* Make */}
//         <div className="flex flex-col">
//           <label className="text-gray-300 font-medium">
//             Make<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="text"
//             required
//             name="make"
//             value={formData.make}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Enter make"
//           />
//         </div>

//         {/* Model */}
//         <div className="flex flex-col">
//           <label className="text-gray-300 font-medium">
//             Model<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="text"
//             required
//             name="model"
//             value={formData.model}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Enter model"
//           />
//         </div>

//         {/* Model Year */}
//         <div className="flex flex-col">
//           <label className="text-gray-300 font-medium">
//             Model Year<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="number"
//             required
//             name="modelYear"
//             value={formData.modelYear}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Enter model year"
//           />
//         </div>
//       </form>

//       {/* Navigation Buttons */}
//       <div className="mt-4 flex gap-2 justify-between">
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center border border-[#1262A1] hover:bg-[#1262A1] hover:text-white transition"
//           onClick={prevStep}
//         >
//           Back
//         </button>
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center border border-[#1262A1] hover:bg-[#1262A1] hover:text-white transition"
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
import { FaCarSide, FaShuttleVan, FaTruckMonster } from "react-icons/fa";

export default function Step1({ nextStep, prevStep, handleChange, formData }: any) {
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    let newErrors: any = {};
    const requiredFields = [
      "loanAppliedFor",
      "purchasePrice",
      "longTerm",
      "paymentFrequency",
      "depositAmount",
      "make",
      "model",
      "modelYear",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">Apply Loan For</h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200 mx-auto">
        {/* Loan Type Selection */}
        {["Car", "Van", "Others"].map((loanType, index) => (
          <div key={index} className="flex flex-col">
            <label className="flex items-center cursor-pointer mb-3">
              <input
                type="radio"
                required
                name="loanAppliedFor"
                value={loanType}
                checked={formData.loanAppliedFor === loanType}
                onChange={handleChange}
                className="peer hidden"
              />
              <div
                className={`w-full h-14 border text-[#1262A1] font-semibold border-gray-300 rounded bg-gray-50 peer-checked:bg-gray-300 peer-checked:border-blue-500 flex items-center justify-center ${
                  errors.loanAppliedFor ? "border-red-500" : ""
                }`}
              >
                {loanType === "Car" && <FaCarSide className="text-3xl text-[#1262A1]" />}
                {loanType === "Van" && <FaShuttleVan className="text-3xl text-[#1262A1]" />}
                {loanType === "Others" && <FaTruckMonster className="text-3xl text-[#1262A1]" />}
                {loanType.toUpperCase()}
              </div>
            </label>
          </div>
        ))}
        {errors.loanAppliedFor && <p className="text-red-500 text-sm">{errors.loanAppliedFor}</p>}

        {/* Input Fields */}
        {[
          { label: "Purchase Price", name: "purchasePrice", type: "number" },
          { label: "Loan Term", name: "longTerm", type: "text" },
          {
            label: "Payment Frequency",
            name: "paymentFrequency",
            type: "select",
            options: ["Weekly", "Bi-Weekly", "Monthly"],
          },
          { label: "Deposit Amount", name: "depositAmount", type: "number" },
          { label: "Make", name: "make", type: "text" },
          { label: "Model", name: "model", type: "text" },
          { label: "Model Year", name: "modelYear", type: "number" },
        ].map(({ label, name, type, options }: any) => (
          <div key={name} className="flex flex-col">
            <label className="text-gray-100 font-medium">
              {label} <span className="text-gray-200">*</span>
            </label>
            {type === "select" ? (
              <select
                required
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                className={`border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none ${
                  errors[name] ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Frequency</option>
                {options.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                required
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                className={`border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none ${
                  errors[name] ? "border-red-500" : ""
                }`}
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            )}
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
          </div>
        ))}
      </form>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-2 justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center border border-[#1262A1] hover:bg-[#1262A1] hover:text-white transition"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center border border-[#1262A1] hover:bg-[#1262A1] hover:text-white transition"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
