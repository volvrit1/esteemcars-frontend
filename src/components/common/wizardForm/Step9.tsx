import React, { useState } from "react";

export default function Step9({ handleChange, formData, setStep }: any) {
  const [errors, setErrors] = useState<any>({});

  // Form validation
  const validateForm = () => {
    const newErrors: any = {};

    // Validate employee details
    // if (!formData.employeeName) newErrors.employeeName = "Employee Name is required";
    // if (!formData.companyName) newErrors.companyName = "Company Name is required";
    // if (!formData.companyAddress) newErrors.companyAddress = "Company Address is required";
    // if (!formData.employeeType) newErrors.employeeType = "Type of Employee is required";
    // if (!formData.dateOfJoining) newErrors.dateOfJoining = "Date of Joining is required";
    // if (formData.workExperience === undefined || formData.workExperience === null)
    //   newErrors.workExperience = "Work Experience is required";
    // if (!formData.salary) newErrors.salary = "Salary is required";
    // if (formData.otherIncome === undefined) newErrors.otherIncome = "Please select if you receive other income";

    // Validate employment and income related fields
    if (!formData.employmentType)
      newErrors.employmentType = "Employment Type is required";
    if (!formData.incomeType) newErrors.incomeType = "Income Type is required";
    if (!formData.incomeAfterTax)
      newErrors.incomeAfterTax = "Income After Tax is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(11); // Move to the next step
    }
  };

  return (
    <div className="bg-[#1262A1] p-6 rounded-lg max-w-3xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">Employee Information</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Employment Type */}
          <div className="flex flex-col">
            <label className="font-medium">Employment Type *</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select Employment Type</option>
              <option value="Full-Time">Full Time</option>
              <option value="Part-Time">Part Time</option>
              <option value="Casual">Casual</option>
              <option value="Beneficiary">Beneficiary</option>
              <option value="Super-Annuation">Super Annuation</option>
            </select>
            {errors.employmentType && (
              <p className="text-red-500">{errors.employmentType}</p>
            )}
          </div>

          {/* Income Type */}
          <div className="flex flex-col">
            <label className="font-medium">Income Type *</label>
            <select
              name="incomeType"
              value={formData.incomeType}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select Income Type</option>
              <option value="Weekly">Weekly</option>
              <option value="Fourth Night">Fourth Night</option>
              <option value="Monthly">Monthly</option>
            </select>
            {errors.incomeType && (
              <p className="text-red-500">{errors.incomeType}</p>
            )}
          </div>

          {/* Income After Tax */}
          <div className="flex flex-col">
            <label className="font-medium">Income After Tax *</label>
            <input
              type="number"
              name="incomeAfterTax"
              value={formData.incomeAfterTax ?? ""}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Income After Tax"
            />
            {errors.incomeAfterTax && (
              <p className="text-red-500">{errors.incomeAfterTax}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="bg-white text-[#1262A1] px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
            onClick={() => setStep(8)} // Go back to the previous step
          >
            Back
          </button>
          <button
            type="button"
            className="bg-white text-[#1262A1] px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
            onClick={handleNext} // Go to the next step
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <div className="flex flex-col">
            <label className="font-medium">Employee Name *</label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Employee Name"
            />
            {errors.employeeName && (
              <p className="text-red-500">{errors.employeeName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Company Name"
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Address *</label>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Company Address"
            />
            {errors.companyAddress && (
              <p className="text-red-500">{errors.companyAddress}</p>
            )}
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
          {errors.employeeType && (
            <span className="text-red-500">{errors.employeeType}</span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Date of Joining *</label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
            />
            {errors.dateOfJoining && (
              <span className="text-red-500">{errors.dateOfJoining}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">
              Work Experience (Total Years) *
            </label>
            <input
              type="number"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Years"
            />
            {errors.workExperience && (
              <span className="text-red-500">{errors.workExperience}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Monthly/Annual Salary *</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Salary"
            />
            {errors.salary && (
              <span className="text-red-500">{errors.salary}</span>
            )}
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
                onChange={() =>
                  handleChange({ target: { name: "otherIncome", value: true } })
                }
                className="peer"
              />
              <span
                className={`px-4 py-2 rounded cursor-pointer ${
                  formData.otherIncome ? "text-blue-500" : "text-white"
                }`}
              >
                YES
              </span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="otherIncome"
                value="false"
                checked={formData.otherIncome === false}
                onChange={() =>
                  handleChange({
                    target: { name: "otherIncome", value: false },
                  })
                }
                className="peer"
              />
              <span
                className={`px-4 py-2 rounded cursor-pointer ${
                  !formData.otherIncome ? "text-blue-500" : "text-white"
                }`}
              >
                NO
              </span>
            </label>
          </div>
          {errors.otherIncome && (
            <span className="text-red-500">{errors.otherIncome}</span>
          )}
        </div> */
}
