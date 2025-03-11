import dayjs from "dayjs";
import Image from "next/image";
import React, { useState } from "react";
import { ImArrowRight } from "react-icons/im";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
  setStep,
  handleCallRequest = () => {},
}: any) {
  const [errors, setErrors] = useState<any>({});
  const [isValidated, setIsValidated] = useState(false);
  const validateForm = () => {
    let newErrors: any = {};
    const requiredFields = [
      "title",
      "firstName",
      "lastName",
      "email",
      "mobileNo",
      "dob",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    console.log(errors);
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
      <h2 className="text-xl font-bold">Your Personal Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200 mx-auto">
        {[
          {
            label: "Title",
            name: "title",
            type: "select",
            options: ["Mr", "Ms", "Mrs", "Dr"],
          },
          { label: "First Name", name: "firstName", type: "text" },
          { label: "Middle Name", name: "middleName", type: "text" },
          { label: "Last Name", name: "lastName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          {
            label: "Phone",
            name: "mobileNo",
            type: "number",
            maxlength: 10,
            editable: true,
          },
          {
            label: "Date of Birth",
            name: "dob",
            type: "date",
            isDate: true,
            editable: true,
          },
        ].map(
          ({
            label,
            name,
            type,
            options,
            editable,
            maxlength,
            isDate,
          }: any) => (
            <div className="flex flex-col" key={name}>
              <label className="text-gray-100 font-medium">
                {label}
                <span className="text-gray-200">*</span>
              </label>
              {type === "select" ? (
                <select
                  required
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  disabled={formData[name]}
                  className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
                >
                  <option value="">Select</option>
                  {options.map((option: any) => (
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
                  value={
                    isDate
                      ? dayjs(formData[name]).format("YYYY-MM-DD")
                      : formData[name]
                  }
                  onChange={handleChange}
                  maxLength={maxlength ?? 255}
                  disabled={formData[name] && !editable}
                  className={`border rounded p-3 text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none ${
                    errors[name] ? "border-red-500" : ""
                  }`}
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              )}
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          )
        )}
      </form>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="bg-white text-[#1262A1] px-4 py-4 rounded-lg w-full flex justify-center items-center border border-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={(e) => {
            console.log(validateForm());

            if (validateForm()) {
              handleCallRequest(e);
            }
          }}
        >
          <Image
            src="/images/customer.png"
            width={20}
            height={20}
            className="m-1"
            alt="Customer Service"
          />
          Request a call back
        </button>

        <button
          onClick={handleNextStep}
          className="bg-white text-[#1262A1] px-4 py-4 rounded-lg w-full flex justify-center items-center hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
        >
          <ImArrowRight className="text-2xl m-1" /> Continue Application Online
        </button>
      </div>
    </div>
  );
}
