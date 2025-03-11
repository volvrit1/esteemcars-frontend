import React, { useEffect, useState } from "react";

export default function Step13({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: any) {
  const [errors, setErrors] = useState<any>({});
  const [chekTrade, setChekTrade] = useState<any>("");

  const validateForm = () => {
    let newErrors: any = {};
    if (formData.tradeCar  !== "false") {
      const requiredFields = [
        "vehicleVariant",
        "kmDriven",
      ];
console.log("dklfkdsjk",formData?.tradeCar)
      requiredFields.forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "This field is required";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNextStep = () => {
    if (!chekTrade && chekTrade !== "No") {
      setChekTrade("No");
    }
    console.log(chekTrade,chekTrade === "Yes",formData.tradeCar ,(validateForm()),errors)
    if (validateForm() && chekTrade === "Yes") {
      nextStep();
    }
  };

  return (
    <div className="min-w-[70vw] bg-[#1262A1] text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Do You Want to Trade Your Car?</h2>

      {/* Radio Buttons */}
      <div className="flex gap-4 mb-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="tradeCar"
            value="true"
            checked={formData.tradeCar === "true"}
            onChange={(e) => {
              handleChange(e);
              setChekTrade("Yes");
              setErrors({}); // Clear errors when selection changes
            }}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="tradeCar"
            value="false"
            checked={formData.tradeCar === "false"}
            onChange={(e) => {
              handleChange(e);
              setChekTrade("Yes");

              setErrors({}); // Clear errors when selection changes
            }}
            className="mr-2"
          />
          No
        </label>

        {chekTrade === "No" && (
          <p className="text-red-400">{"This is a required field"}</p>
        )}
      </div>

      {formData?.tradeCar === "true" && (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Vehicle Make", name: "vehicleMake", },
            { label: "Vehicle Model", name: "vehicleModel" },
            { label: "Vehicle Year", name: "vehicleYear", type: "number" },
            { label: "Vehicle Variant", name: "vehicleVariant",isRequired:true },
            { label: "KM Driven", name: "kmDriven", type: "number",isRequired:true },
          ].map(({ label, name, type = "text",isRequired }) => (
            <div key={name} className="flex flex-col">
              <label className="font-medium">{label} {isRequired?"*":""}</label>
              <input
                type={type}
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                className={`border rounded p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors[name] ? "border-red-500" : ""
                }`}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}
        </form>
      )}

      {/* Navigation Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-24 border border-[#1262A1] hover:bg-[#1262A1] hover:text-white transition"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-24 border border-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
