// import React, { useState } from "react";

// export default function Step9({
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
//     <div className="bg-[#1262A1] p-6 rounded-lg max-w-3xl mx-auto text-white">
//       <h2 className="text-2xl font-bold mb-4">Employee Information</h2>

//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <div className="flex flex-col">
//             <label className="font-medium">Employee Name *</label>
//             <input
//               type="text"
//               name="employeeName"
//               value={formData.employeeName}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="Employee Name"
//               required
//             />
//             {errors.employeeName && (
//               <p className="text-red-500">{errors.employeeName}</p>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="font-medium">Company Name *</label>
//             <input
//               type="text"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="Company Name"
//               required
//             />
//             {errors.companyName && (
//               <p className="text-red-500">{errors.companyName}</p>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="font-medium">Company Address *</label>
//             <input
//               type="text"
//               name="companyAddress"
//               value={formData.companyAddress}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="Company Address"
//               required
//             />
//             {errors.companyAddress && (
//               <p className="text-red-500">{errors.companyAddress}</p>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 mb-4">
//           <label className="font-medium">Type of Employee *</label>
//           <div className="flex  justify-start gap-6">
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="employeeType"
//                 value="Salaried"
//                 checked={formData.employeeType === "Salaried"}
//                 onChange={handleChange}
//                 className="peer "
//                 required
//               />
//               <span className="">Salaried</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="employeeType"
//                 value="Self-Employed"
//                 checked={formData.employeeType === "Self-Employed"}
//                 onChange={handleChange}
//                 className="peer "
//                 required
//               />
//               <span className="">Self-Employed</span>
//             </label>
//           </div>
//           {errors.employeeType && (
//             <span className="text-red-500">{errors.employeeType}</span>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <div className="flex flex-col">
//             <label className="font-medium">Date of Joining *</label>
//             <input
//               type="date"
//               name="dateOfJoining"
//               value={formData.dateOfJoining}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               required
//             />
//             {errors.dataOfJoining && (
//               <span className="text-red-500">{errors.dataOfJoining}</span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="font-medium">Work Experience (Total Years)</label>
//             <input
//               type="number"
//               name="workExperience"
//               value={formData.workExperience}
//               onChange={handleChange}
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="Years"
//               required
//             />
//             {errors.workExperience && (
//               <span className="text-red-500">{errors.workExperience}</span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="font-medium">Monthly/Annual Salary</label>
//             <input
//               type="number"
//               name="salary"
//               value={formData.salary}
//               onChange={handleChange}
//               required
//               className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               placeholder="Salary"
//             />
//             {errors.salary && (
//               <span className="text-red-500">{errors.salary}</span>
//             )}
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="font-medium">Do You Receive Other Income? *</label>
//           <div className="flex space-x-6 mt-2">
//             {/* YES Option */}
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 required
//                 name="otherIncome"
//                 value="true"
//                 checked={formData.otherIncome === true}
//                 onChange={(e) =>
//                   handleChange({
//                     target: {
//                       name: "otherIncome",
//                       value: e.target.value === "true",
//                     },
//                   })
//                 }
//                 className="peer "
//               />
//               <span
//                 className={`px-4 py-2 rounded cursor-pointer ${
//                   formData.otherIncome === true
//                     ? " text-blue-500"
//                     : " text-white"
//                 }`}
//               >
//                 YES
//               </span>
//             </label>

//             {/* NO Option */}
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 required
//                 name="otherIncome"
//                 value="false"
//                 checked={formData.otherIncome === false}
//                 onChange={(e) =>
//                   handleChange({
//                     target: {
//                       name: "otherIncome",
//                       value: e.target.value === "true",
//                     },
//                   })
//                 }
//                 className="peer "
//               />
//               <span
//                 className={`px-4 py-2 rounded cursor-pointer ${
//                   formData.otherIncome === false
//                     ? " text-blue-500"
//                     : " text-white"
//                 }`}
//               >
//                 NO
//               </span>
//             </label>
//           </div>
//           {errors.otherIncome && (
//             <span className="text-red-500">{errors.otherIncome}</span>
//           )}
//         </div>
//       </form>

//       <div className="mt-6 flex justify-between">
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
//           onClick={() => setStep(8)}
//         >
//           Back
//         </button>
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] px-6 py-2 rounded-lg"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }





















import React, { useState } from "react";

export default function Step9({ nextStep, prevStep, handleChange, formData, setStep }: any) {
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    let newErrors: any = {};

    if (!formData.employeeName) newErrors.employeeName = "Employee Name is required";
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.companyAddress) newErrors.companyAddress = "Company Address is required";
    if (!formData.employeeType) newErrors.employeeType = "Type of Employee is required";
    if (!formData.dateOfJoining) newErrors.dateOfJoining = "Date of Joining is required";
    if (!formData.workExperience && formData.workExperience !== 0) newErrors.workExperience = "Work Experience is required";
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (formData.otherIncome === undefined) newErrors.otherIncome = "Please select if you receive other income";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(11);
    }
  };

  return (
    <div className="bg-[#1262A1] p-6 rounded-lg max-w-3xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">Employee Information</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Employee Name *</label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Employee Name"
            />
            {errors.employeeName && <p className="text-red-500">{errors.employeeName}</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Company Name"
            />
            {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Address *</label>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Company Address"
            />
            {errors.companyAddress && <p className="text-red-500">{errors.companyAddress}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <label className="font-medium">Type of Employee *</label>
          <div className="flex justify-start gap-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="employeeType"
                value="Salaried"
                checked={formData.employeeType === "Salaried"}
                onChange={handleChange}
                className="peer"
              />
              <span className="">Salaried</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="employeeType"
                value="Self-Employed"
                checked={formData.employeeType === "Self-Employed"}
                onChange={handleChange}
                className="peer"
              />
              <span className="">Self-Employed</span>
            </label>
          </div>
          {errors.employeeType && <span className="text-red-500">{errors.employeeType}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Date of Joining *</label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
            />
            {errors.dateOfJoining && <span className="text-red-500">{errors.dateOfJoining}</span>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Work Experience (Total Years) *</label>
            <input
              type="number"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Years"
            />
            {errors.workExperience && <span className="text-red-500">{errors.workExperience}</span>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Monthly/Annual Salary *</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Salary"
            />
            {errors.salary && <span className="text-red-500">{errors.salary}</span>}
          </div>
        </div>

        <div className="mt-6">
          <label className="font-medium">Do You Receive Other Income? *</label>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="otherIncome"
                value="true"
                checked={formData.otherIncome === true}
                onChange={() => handleChange({ target: { name: "otherIncome", value: true } })}
                className="peer"
              />
              <span className={`px-4 py-2 rounded cursor-pointer ${formData.otherIncome ? "text-blue-500" : "text-white"}`}>YES</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="otherIncome"
                value="false"
                checked={formData.otherIncome === false}
                onChange={() => handleChange({ target: { name: "otherIncome", value: false } })}
                className="peer"
              />
              <span className={`px-4 py-2 rounded cursor-pointer ${!formData.otherIncome ? "text-blue-500" : "text-white"}`}>NO</span>
            </label>
          </div>
          {errors.otherIncome && <span className="text-red-500">{errors.otherIncome}</span>}
        </div>
      </form>

      <div className="mt-6 flex justify-between">
        <button type="button" className="bg-white text-[#1262A1] px-6 py-2 rounded-lg" onClick={() => setStep(8)}>
          Back
        </button>
        <button type="button" className="bg-white text-[#1262A1] px-6 py-2 rounded-lg" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
