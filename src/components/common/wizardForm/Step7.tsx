import { countries } from "@/data/data";
import React, { useState } from "react";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
  setStep,
}: any) {
  const [errors, setErrors] = useState<any>({});

  // Validation function to check if required fields are filled
  const validateForm = () => {
    let newErrors: any = {};

    // Address related validations
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.timeAtCurrentAddressMonths)
      newErrors.timeAtCurrentAddressMonths = "Months at address is required";
    if (!formData.timeAtCurrentAddressYears)
      newErrors.timeAtCurrentAddressYears = "Years at address is required";
    if (!formData.residentType)
      newErrors.residentType = "Resident type is required";

    // If time at current address is less than 1 year, validate the previous address fields
    if (
      formData.timeAtCurrentAddressYears < 1 ||
      (formData.timeAtCurrentAddressYears === 0 &&
        formData.timeAtCurrentAddressMonths < 12)
    ) {
      if (!formData.previousAddress)
        newErrors.previousAddress = "Previous address is required";
      if (!formData.previousCity)
        newErrors.previousCity = "Previous city is required";
      if (!formData.previousCountry)
        newErrors.previousCountry = "Previous country is required";
      if (!formData.timeAtPreviousAddress)
        newErrors.timeAtPreviousAddress =
          "Previous time at previous address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleNext = () => {
    if (validateForm()) {
      if (formData?.userType === "Individual") {
        setStep(10);
      } else {
       setStep(9)
      }
    }
  };

  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">Your Address Details</h2>

      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 px-0 text-gray-200 mx-auto">
        {/* Address */}
        <div className="flex flex-col lg:col-span-2">
          <label className="text-gray-100 font-medium">Address*</label>
          <input
            type="text"
            required
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            placeholder="Enter address"
          />
          {errors.address && (
            <span className="text-red-500">{errors.address}</span>
          )}
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-medium">City*</label>
          <input
            type="text"
            required
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          />
          {errors.city && <span className="text-red-500">{errors.city}</span>}
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-medium">Country*</label>
          <select
            required
            name="country"
            value={formData.country}
            onChange={handleChange}
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
          {errors.country && (
            <span className="text-red-500">{errors.country}</span>
          )}
        </div>

        {/* Time at Current - Months */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-medium">
            Time at Current - Month*
          </label>
          <select
            required
            name="timeAtCurrentAddressMonths"
            value={formData.timeAtCurrentAddressMonths}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select time</option>
            {[...Array(11)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          {errors.timeAtCurrentAddressMonths && (
            <span className="text-red-500">
              {errors.timeAtCurrentAddressMonths}
            </span>
          )}
        </div>

        {/* Time at Current - Years */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-medium">Years*</label>
          <select
            required
            name="timeAtCurrentAddressYears"
            value={formData.timeAtCurrentAddressYears}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select time</option>
            {[...Array(50)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.timeAtCurrentAddressYears && (
            <span className="text-red-500">
              {errors.timeAtCurrentAddressYears}
            </span>
          )}
        </div>

        {/* Resident Type */}
        <div className="flex flex-col">
          <label className="text-gray-100 font-medium">Resident Type*</label>
          <select
            required
            name="residentType"
            value={formData.residentType}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select Boarding</option>
            <option value="Boarding">Boarding</option>
            <option value="Renting">Renting</option>
            <option value="Owning">Owning</option>
          </select>
          {errors.residentType && (
            <span className="text-red-500">{errors.residentType}</span>
          )}
        </div>

        {/* Conditionally Render Previous Address Fields if Time at Current Address is less than 1 year */}
        {(formData.timeAtCurrentAddressYears === "0") && (
          <>
            <div className="flex flex-col lg:col-span-1">
              <label className="text-gray-100 font-medium">
                Time At Previous Address*
              </label>
              <select
                name="timeAtPreviousAddress"
                value={formData.timeAtPreviousAddress}
                onChange={handleChange}
                className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              >
                {" "}
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}{" Year"}
                  </option>
                ))}
              </select>
              {errors.timeAtPreviousAddress && (
                <span className="text-red-500">
                  {errors.timeAtPreviousAddress}
                </span>
              )}
            </div>
            <div className="flex flex-col lg:col-span-1">
              <label className="text-gray-100 font-medium">
                Previous Address*
              </label>
              <input
                type="text"
                name="previousAddress"
                value={formData.previousAddress}
                onChange={handleChange}
                className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                placeholder="Enter previous address"
              />
              {errors.previousAddress && (
                <span className="text-red-500">{errors.previousAddress}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-100 font-medium">
                Previous City*
              </label>
              <input
                type="text"
                name="previousCity"
                value={formData.previousCity}
                onChange={handleChange}
                className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                placeholder="Enter previous city"
              />
              {errors.previousCity && (
                <span className="text-red-500">{errors.previousCity}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-100 font-medium">
                Previous Country*
              </label>
              <select
                name="previousCountry"
                value={formData.previousCountry}
                onChange={handleChange}
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
              {errors.previousCountry && (
                <span className="text-red-500">{errors.previousCountry}</span>
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
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
  