import React, { useState } from "react";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  handelFileChange,
  formData,
  setStep,
}: any) {
  const [selectedOption, setSelectedOption] = useState(
    formData?.otherIncome || ""
  );
  const [errors, setErrors] = useState<any>({});

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedOption(value);
    handleChange({ target: { name: "homeOwnership", value } });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!selectedOption) newErrors.otherIncome = "This field is required";
    if (selectedOption === "Owned" && !formData.rentAgreement) {
      newErrors.rentAgreement = "Rent Agreement is required";
    }
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
      <h2 className="text-2xl font-bold mb-4">
        Do You Rent Or Own Your Home? *
      </h2>

      {/* Radio Buttons */}
      <div className="mt-6">
        <div className="flex space-x-6 mt-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="otherIncome"
              value="Owned"
              checked={selectedOption === "Owned"}
              onChange={handleRadioChange}
              className="peer "
            />
            <span className="">YES</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="otherIncome"
              value="Rent"
              checked={selectedOption === "Rent"}
              onChange={handleRadioChange}
              className="peer "
            />
            <span className="">NO</span>
          </label>
        </div>
        {errors.otherIncome && (
          <span className="text-red-500">{errors.otherIncome}</span>
        )}
      </div>

      {/* File Upload (only if "YES" is selected) */}
      {selectedOption === "Owned" && (
        <div className="mt-4">
          <label className="block font-medium">Upload Rent Agreement:</label>
          <input
            type="file"
            onChange={handelFileChange}
            name="rentAgreement"
            className="mt-2 border p-2 rounded text-[#252525]"
          />
          {errors.rentAgreement && (
            <span className="text-red-500">{errors.rentAgreement}</span>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={() => {
            formData?.userType === "Business" ? setStep(9) : prevStep;
          }}
        >
          Back
        </button>

        <button
          className="bg-white text-[#1262A1] px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
