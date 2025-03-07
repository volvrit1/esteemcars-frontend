// import { occupation } from "@/data/data";
// import React, { useState } from "react";

// export default function Step8({
//   nextStep,
//   prevStep,
//   handleChange,
//   formData,
//   setStep,
// }: any) {
//   const [errors, setErrors] = useState<any>({});

//   const validateForm = () => {
//     let newErrors: any = {};
//     if (!formData.employerName)
//       newErrors.employerName = "Employer Name is required";
//     if (!formData.occupation) newErrors.occupation = "Occupation is required";
//     if (!formData.employmentType)
//       newErrors.employmentType = "Employment Type is required";
//     if (!formData.timeInJob) newErrors.timeInJob = "Time in Job is required";
//     if (!formData.payFrequency)
//       newErrors.payFrequency = "Pay Frequency is required";
//     if (!formData.income) newErrors.income = "Income is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateForm()) {
//       setStep(11);
//     }
//   };
//   return (
//     <div className="bg-[#1262A1] lg:p-6 rounded-lg min-w-[70vw] mx-auto text-white">
//       <h2 className="text-2xl font-bold mb-4">Employer Information</h2>

//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           {/* Employer Name */}
//           <div className="flex flex-col">
//             <label className="font-medium">Employer Name *</label>
//             <input
//               type="text"
//               required
//               name="employerName"
//               value={formData.employerName}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="Employer Name"
//             />
//             {errors.employerName && (
//               <p className="text-red-500">{errors.employerName}</p>
//             )}
//           </div>

//           {/* Occupation */}
//           <div className="flex flex-col">
//             <label className="font-medium">Occupation *</label>
//             <select
//               required
//               name="occupation"
//               value={formData.occupation}
//               onChange={handleChange}
//               className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             >
//               <option value="">Select one option</option>
//               {occupation &&
//                 occupation?.map((country: any) => (
//                   <option value={country?.name}>{country?.name}</option>
//                 ))}
//             </select>
//             {errors.occupation && (
//               <span className="text-red-500">{errors.occupation}</span>
//             )}
//           </div>

//           {/* Employment Type */}
//           <div className="flex flex-col">
//             <label className="font-medium">Employment Type *</label>
//             <select
//               required
//               name="employmentType"
//               value={formData.employmentType}
//               onChange={handleChange}
//               className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             >
//               <option value="">Select one option</option>
//               <option value="Full-Time">Full-time</option>
//               <option value="Part-Time">Part-time</option>
//               <option value="Contract">Contract</option>
//             </select>
//             {errors.employmentType && (
//               <span className="text-red-500">{errors.employmentType}</span>
//             )}
//           </div>

//           {/* Time in This Job */}
//           <div className="flex flex-col">
//             <label className="font-medium">Time in This Job *</label>
//             <select
//               required
//               name="timeInJob"
//               value={formData.timeInJob}
//               onChange={handleChange}
//               className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             >
//               <option value="">Select one option</option>
//               {[...Array(30)].map((_, i) => (
//                 <option key={i} value={i + 1}>
//                   {i + 1} years
//                 </option>
//               ))}
//             </select>
//             {errors.timeInJob && (
//               <span className="text-red-500">{errors.timeInJob}</span>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* How Often Do You Get Paid */}
//           <div className="flex flex-col">
//             <label className="font-medium">How Often Do You Get Paid *</label>
//             <select
//               required
//               name="payFrequency"
//               value={formData.payFrequency}
//               onChange={handleChange}
//               className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             >
//               <option value="">Select</option>
//               <option value="weekly">Weekly</option>
//               <option value="biweekly">Bi-weekly</option>
//               <option value="monthly">Monthly</option>
//             </select>
//             {errors.payFrequency && (
//               <span className="text-red-500">{errors.payFrequency}</span>
//             )}
//           </div>

//           {/* Income (Take Home Pay) */}
//           <div className="flex flex-col">
//             <label className="font-medium">Income (Take Home Pay) *</label>
//             <input
//               type="text"
//               required
//               name="income"
//               value={formData.income}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="$ 0"
//             />
//             {errors.income && (
//               <span className="text-red-500">{errors.income}</span>
//             )}
//           </div>

//           {/* How Often Does Your Partner Get Paid */}
//           <div className="flex flex-col">
//             <label className="font-medium">
//               How Often Does Your Partner Get Paid?
//             </label>
//             <select
//               required
//               name="partnerPayFrequency"
//               value={formData.partnerPayFrequency}
//               onChange={handleChange}
//               className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//             >
//               <option value="">Select</option>
//               <option value="weekly">Weekly</option>
//               <option value="biweekly">Bi-weekly</option>
//               <option value="monthly">Monthly</option>
//             </select>
//             {errors.partnerPayFrequency && (
//               <span className="text-red-500">{errors.partnerPayFrequency}</span>
//             )}
//           </div>

//           {/* Spouse/Partner Income */}
//           <div className="flex flex-col">
//             <label className="font-medium">
//               Your Spouse/Partner Income (Take Home Pay)
//             </label>
//             <input
//               type="text"
//               required
//               name="partnerIncome"
//               value={formData.partnerIncome}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="$ 0"
//             />
//             {errors.partnerIncome && (
//               <span className="text-red-500">{errors.partnerIncome}</span>
//             )}
//           </div>
//         </div>
//       </form>

//       {/* Do You Receive Other Income? */}
//       {/* <div className="mt-6">
//         <label className="font-medium">Do You Receive Other Income? *</label>
//         <div className="flex space-x-6 mt-2">
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               required name="otherIncome"
//               value={"on"}
//               checked={formData.otherIncome}
//               onChange={handleChange}
//               className="peer "
//             />
//             <span className={`px-4 py-2  rounded cursor-pointer text-gray-100`}>
//               YES
//             </span>
//           </label>
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               required name="otherIncome"
//               checked={formData.otherIncome}
//               onChange={handleChange}
//               className="peer"
//             />
//             <span
//               className={`px-4 py-2 rounded cursor-pointer

//                    text-gray-100
//               `}
//             >
//               NO
//             </span>
//           </label>
//         </div>
//       </div> */}
//       <div className="mt-6">
//         <label className="font-medium">Do You Receive Other Income? *</label>
//         <div className="flex space-x-6 mt-2">
//           {/* YES Option */}
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               required
//               name="otherIncome"
//               value="true"
//               checked={formData.otherIncome === true}
//               onChange={(e) =>
//                 handleChange({
//                   target: {
//                     name: "otherIncome",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="peer "
//             />
//             <span
//               className={`px-4 py-2 rounded cursor-pointer ${
//                 formData.otherIncome === true ? " text-blue-500" : " text-white"
//               }`}
//             >
//               YES
//             </span>
//           </label>

//           {/* NO Option */}
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               required
//               name="otherIncome"
//               value="false"
//               checked={formData.otherIncome === false}
//               onChange={(e) =>
//                 handleChange({
//                   target: {
//                     name: "otherIncome",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="peer "
//             />
//             <span
//               className={`px-4 py-2 rounded cursor-pointer ${
//                 formData.otherIncome === false
//                   ? " text-blue-500"
//                   : " text-white"
//               }`}
//             >
//               NO
//             </span>
//           </label>
//         </div>
//         {errors.otherIncome && (
//           <p className="text-red-500">{errors.otherIncome}</p>
//         )}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-6 flex justify-between">
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
//           onClick={prevStep}
//         >
//           Back
//         </button>
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
//           onClick={() => setStep(11)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function EmployerInfo({
  nextStep,
  prevStep,
  handleChange,
  formData,
  setStep,
}: any) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors: any = {};
    if (!formData.employerName)
      newErrors.employerName = "Employer Name is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.companyAddress)
      newErrors.companyAddress = "Company Address is required";
    if (!formData.companyCity)
      newErrors.companyCity = "Company City is required";
    if (!formData.companyState)
      newErrors.companyState = "Company State is required";
    if (!formData.companyCountry)
      newErrors.companyCountry = "Company Country is required";
    if (!formData.companyPhoneNumber)
      newErrors.companyPhoneNumber = "Company Phone Number is required";
    if (!formData.companyEmail)
      newErrors.companyEmail = "Company Email is required";
    if (!formData.companyWebsite)
      newErrors.companyWebsite = "Company Website is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="bg-[#1262A1] lg:p-6 rounded-lg min-w-[70vw] mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">Employer Information</h2>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Employer Name *</label>
            <input
              type="text"
              name="employerName"
              value={formData.employerName}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Employer Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Company Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Address *</label>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Company Address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Company City *</label>
            <input
              type="text"
              name="companyCity"
              value={formData.companyCity}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Enter City"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company State *</label>
            <input
              type="text"
              name="companyState"
              value={formData.companyState}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Enter State"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company Country *</label>
            <input
              type="text"
              name="companyCountry"
              value={formData.companyCountry}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Enter Country"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Company Phone Number *</label>
            <input
              type="tel"
              name="companyPhoneNumber"
              value={formData.companyPhoneNumber}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company Email *</label>
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company Website *</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800"
              placeholder="Enter Company URL"
            />
          </div>
        </div>
      </form>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
