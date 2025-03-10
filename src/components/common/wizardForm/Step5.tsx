// import Image from "next/image";
// import React from "react";
// import { FaCarSide, FaShuttleVan, FaTruckMonster } from "react-icons/fa";

// export default function Step1({
//   nextStep,
//   prevStep,
//   handleChange,
//   formData,
//   handleFileChange
// }: any) {
//   return (
//     <div className="min-w-[70vw]">
//       <h2 className="text-xl font-bold">
//         Is this a single or joint application? *
//       </h2>
//       <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200 mx-auto">
//         {/* Account Type Selection */}
//         <div className="flex justify-start items-center lg:col-span-3">
//           {["single", "joint"].map((type) => (
//             <label
//               key={type}
//               className="flex items-center space-x-2 cursor-pointer"
//             >
//               <input
//                 type="radio"
//                 required
//                 name="applicationType"
//                 value={type}
//                 checked={formData.applicationType === type}
//                 onChange={handleChange}
//                 className=" peer"
//               />
//               <div className="text-white font-semibold p-4 uppercase rounded-lg">
//                 {type}
//               </div>
//             </label>
//           ))}
//         </div>

//         {/* Marital Status */}
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-100 font-medium">
//             Marital Status<span className="text-gray-200">*</span>
//           </label>
//           <select
//             required
//             name="maritalStatus"
//             value={formData.maritalStatus}
//             onChange={handleChange}
//             className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//           >
//             <option value="">Select one option</option>
//             <option value="single">Single</option>
//             <option value="married">Married</option>
//           </select>
//         </div>

//         {/* Dependents */}
//         <div className="flex flex-col mb-4 lg:col-span-2">
//           <label className="text-gray-100 font-medium">
//             How Many Dependents Do You Have?
//             <span className="text-gray-200">*</span>
//           </label>
//           <select
//             required
//             name="dependents"
//             value={formData.dependents}
//             onChange={handleChange}
//             className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//           >
//             <option value="">Select one option</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4+">4+</option>
//           </select>
//         </div>

//         {/* Driver License Type */}
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-100 font-medium">
//             Driver License Type<span className="text-gray-200">*</span>
//           </label>
//           <select
//             required
//             name="driverLicenseType"
//             value={formData.driverLicenseType}
//             onChange={handleChange}
//             className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//           >
//             <option value="">Select one option</option>
//             <option value="Type 1">Type 1</option>
//             <option value="Type 2">Type 2</option>
//           </select>
//         </div>

//         {/* Driver License Number */}
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-100 font-medium">
//             Driver License Number<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="text"
//             required
//             name="driverLicenseNumber"
//             value={formData.driverLicenseNumber}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Driver License Number"
//           />
//         </div>

//         {/* Driver License Version */}
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-100 font-medium">
//             Driver License Version<span className="text-gray-200">*</span>
//           </label>
//           <input
//             type="text"
//             required
//             name="driverLicenseVersion"
//             value={formData.driverLicenseVersion}
//             onChange={handleChange}
//             className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             placeholder="Driver License Version"
//           />
//         </div>
//         <div className="mt-4">
//           <label className="block font-medium">Upload Driving license:</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             name="driverLicenseDocument"
//             className="mt-2 border p-2 rounded text-gray-800"
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

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
  handleFileChange,
}: any) {
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!formData.applicationType) {
      newErrors.applicationType = "Application type is required.";
    }
    if (!formData.maritalStatus) {
      newErrors.maritalStatus = "Marital status is required.";
    }
    if (!formData.dependents) {
      newErrors.dependents = "Dependents field is required.";
    }
    if (!formData.driverLicenseType) {
      newErrors.driverLicenseType = "Driver license type is required.";
    }
    if (!formData.driverLicenseNumber) {
      newErrors.driverLicenseNumber = "Driver license number is required.";
    }
    if (!formData.driverLicenseVersion) {
      newErrors.driverLicenseVersion = "Driver license version is required.";
    }
    if (!formData.driverLicenseDocument) {
      newErrors.driverLicenseDocument = "Driver license document is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">
        Is this a single or joint application? *
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200 mx-auto">
        {/* Account Type Selection */}
        <div className="flex justify-start items-center lg:col-span-3">
          {["single", "joint"].map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="applicationType"
                value={type}
                checked={formData.applicationType === type}
                onChange={handleChange}
                className="peer "
              />
              <div className="text-white font-semibold p-4 uppercase rounded-lg">
                {type}
              </div>
            </label>
          ))}
        </div>
        {errors.applicationType && (
          <p className="text-red-500">{errors.applicationType}</p>
        )}

        {/* Marital Status */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">Marital Status *</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500">{errors.maritalStatus}</p>
          )}
        </div>

        {/* Dependents */}
        <div className="flex flex-col mb-4 lg:col-span-2">
          <label className="text-gray-100 font-medium">
            How Many Dependents Do You Have? *
          </label>
          <select
            name="dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          {errors.dependents && (
            <p className="text-red-500">{errors.dependents}</p>
          )}
        </div>

        {/* Dependents */}
        <div className="flex flex-col mb-4 lg:col-span-2">
          <label className="text-gray-100 font-medium">
            How Many Dependents Do You Have?
            <span className="text-gray-200">*</span>
          </label>
          <select
            required
            name="dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          {errors.dependents && (
            <p className="text-red-500">{errors.dependents}</p>
          )}
        </div>

        {/* Driver License Type */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">
            Driver License Type<span className="text-gray-200">*</span>
          </label>
          <select
            required
            name="driverLicenseType"
            value={formData.driverLicenseType}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          </select>
          {errors.driverLicenseType && (
            <p className="text-red-500">{errors.driverLicenseType}</p>
          )}
        </div>

        {/* Driver License Number */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">
            Driver License Number<span className="text-gray-200">*</span>
          </label>
          <input
            type="text"
            required
            name="driverLicenseNumber"
            value={formData.driverLicenseNumber}
            onChange={handleChange}
            className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            placeholder="Driver License Number"
          />
          {errors.driverLicenseNumber && (
            <p className="text-red-500">{errors.driverLicenseNumber}</p>
          )}
        </div>

        {/* Driver License Version */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">
            Driver License Version<span className="text-gray-200">*</span>
          </label>
          <input
            type="text"
            required
            name="driverLicenseVersion"
            value={formData.driverLicenseVersion}
            onChange={handleChange}
            className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            placeholder="Driver License Version"
          />
          {errors.driverLicenseVersion && (
            <p className="text-red-500">{errors.driverLicenseVersion}</p>
          )}
        </div>

        {/* Upload Driving License */}
        <div className="w-fit">
          <label className="block font-medium">Upload Driving License:</label>
          <input
            type="file"
            onChange={handleFileChange}
            name="driverLicenseDocument"
            className="mt-0.5 w-full border p-2 rounded text-gray-800"
          />
          {errors.driverLicenseDocument && (
            <p className="text-red-500">{errors.driverLicenseDocument}</p>
          )}
        </div>
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
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
