import { countries } from "@/data/data";
import React, { useState } from "react";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: any) {
  const [errors, setErrors] = useState<any>({}); // To track validation errors

  // Validation function to check if all required fields are filled
  const validate = () => {
    const newErrors: any = {};

    // Validation for NZ Citizen or Resident radio button
    if (!formData.nzWorkStatus) {
      newErrors.nzWorkStatus =
        "Please select your citizenship/residence status.";
    }

    // Validation for NZ Resident Type if NZ Citizen or Resident is Yes
    if (formData.nzWorkStatus === "Yes" && !formData.nzResidentType) {
      newErrors.nzResidentType = "Please select your resident type.";
    }

    // Validation for Country of Birth if NZ Citizen or Resident is No
    if (formData.nzWorkStatus === "No" && !formData.birthCountry) {
      newErrors.birthCountry = "Please select your country of birth.";
    }

    // Validation for Country of Citizenship if NZ Citizen or Resident is No
    if (
      formData.nzWorkStatus === "No" &&
      formData.citizenshipDetails.length === 0
    ) {
      newErrors.citizenshipDetails =
        "Please select at least one country of citizenship.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Modified nextStep to include validation
  const handleNextStep = () => {
    if (validate()) {
      nextStep(); // Proceed to next step if valid
    }
  };

  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">
        Are you legally allowed to work in New Zealand?
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 px-0 text-gray-200 mx-auto">
        {/* Radio Buttons */}
        <div className="flex justify-start items-center lg:col-span-3">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="nzWorkStatus"
              value="Yes"
              required
              checked={formData.nzWorkStatus === "Yes"}
              onChange={handleChange}
            />
            <div className="text-white text-xl font-semibold p-4 uppercase">Yes</div>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="nzWorkStatus"
              value="No"
              required
              checked={formData.nzWorkStatus === "No"}
              onChange={handleChange}
            />
            <div className="text-white text-xl font-semibold p-4 uppercase">No</div>
          </label>
        </div>
        {formData?.nzWorkStatus === "Yes" && (
          <div className="flex flex-col">
            <label className="text-gray-100 font-medium">
              Select Resident Type<span className="text-gray-200">*</span>
            </label>
            <select
              name="nzResidentType"
              value={formData?.nzResidentType}
              onChange={handleChange}
              required
              className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select a country</option>
              <option value="NZ Citizen">New Zealand Citizen</option>
              <option value="NZ Resident">New Zealand Resident</option>
              <option value="World Wide Visa">World Wide Visa</option>
              <option value="Australia">Australia</option>
            </select>
            {errors.nzResidentType && (
              <p className="text-red-500">{errors.nzResidentType}</p>
            )}
          </div>
        )}
        {formData?.nzWorkStatus === "No" && (
          <>
            <div className="flex flex-col">
              <label className="text-gray-100 font-medium">
                Country of Birth<span className="text-gray-200">*</span>
              </label>
              <select
                name="birthCountry"
                value={formData?.birthCountry}
                onChange={handleChange}
                required
                className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              >
                <option value="">Select a country</option>
                {countries &&
                  countries.map((country: any, index: any) => (
                    <option key={index} value={country?.name}>
                      {country?.name}
                    </option>
                  ))}
              </select>
              {errors.birthCountry && (
                <p className="text-red-500">{errors.birthCountry}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-100 font-medium">
                Country of Citizenship<span className="text-gray-200">*</span>
              </label>
              <select
                name="citizenshipDetails"
                value={formData?.citizenshipDetails || []}
                onChange={handleChange}
                required
                multiple
                className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              >
                <option value="India">India</option>
                {countries &&
                  countries.map((country: any, index: any) => (
                    <option key={index} value={country?.name}>
                      {country?.name}
                    </option>
                  ))}
              </select>
              {errors.citizenshipDetails && (
                <p className="text-red-500">{errors.citizenshipDetails}</p>
              )}
            </div>
          </>
        )}
      </form>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-2 justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
