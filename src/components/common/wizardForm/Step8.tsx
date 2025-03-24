import React, { useState } from "react";

export default function EmployerInfo({
  
  prevStep,
  handleChange,
  formData,
  setStep,
}: any) {
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};
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
      setStep(11);
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
              className="border rounded p-3 text-[#252525] focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Employer Name"
            />
            {errors?.employerName && (
              <p className="text-red-500">{errors.employerName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525]"
              placeholder="Company Name"
            />
            {errors?.companyName && (
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
              className="border rounded p-3 text-[#252525]"
              placeholder="Company Address"
            />
            {errors?.companyAddress && (
              <p className="text-red-500">{errors.companyAddress}</p>
            )}
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
              className="border rounded p-3 text-[#252525]"
              placeholder="Enter City"
            />
            {errors?.companyCity && (
              <p className="text-red-500">{errors.companyCity}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company State *</label>
            <input
              type="text"
              name="companyState"
              value={formData.companyState}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525]"
              placeholder="Enter State"
            />
            {errors?.companyState && (
              <p className="text-red-500">{errors.companyState}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company Country *</label>
            <input
              type="text"
              name="companyCountry"
              value={formData.companyCountry}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525]"
              placeholder="Enter Country"
            />
            {errors?.companyCountry && (
              <p className="text-red-500">{errors.companyCountry}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium">Company Phone Number *</label>
            <input
              type="number"
              name="companyPhoneNumber"
              value={formData.companyPhoneNumber}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525]"
              placeholder="Enter Phone Number"
            />
            {errors?.companyPhoneNumber && (
              <p className="text-red-500">{errors.companyPhoneNumber}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company Email *</label>
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525]"
              placeholder="Enter Email Address"
            />
            {errors?.companyEmail && (
              <p className="text-red-500">{errors.companyEmail}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Company Website *</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="border rounded p-3 text-[#252525]"
              placeholder="Enter Company URL"
            />
            {errors?.companyWebsite && (
              <p className="text-red-500">{errors.companyWebsite}</p>
            )}
          </div>
        </div>
      </form>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
