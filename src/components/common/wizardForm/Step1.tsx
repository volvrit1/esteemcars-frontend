import React, { useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TiUser } from "react-icons/ti";

export default function Step1({
  nextStep,
  handleChange,
  formData,
  setStep,
}: any) {
  const [error, setError] = useState("");

  const handleNextStep = (e: any) => {
    handleChange(e);
    setStep(2);
  };

  const UserTypeOption = ({ label, value, Icon }: any) => (
    <label className="bg-white text-gray-700 px-6 h-56 lg:w-60 py-4 rounded-xl flex flex-col items-center cursor-pointer">
      <div className="bg-[#1262A1] w-24 h-24 overflow-hidden m-auto rounded-full flex justify-center items-center hover:bg-gray-400 transition-colors ease-in-out">
        <Icon className="text-7xl text-gray-50" />
      </div>
      <p className="mt-2 w-full text-center">{label}</p>
      <input
        type="radio"
        name="userType"
        value={value}
        checked={formData.userType === value}
        onChange={(e) => {
          handleNextStep(e);
          setError(""); // Clear error when user selects an option
        }}
        className="hidden"
      />
    </label>
  );

  return (
    <div className="mt-4 flex flex-col lg:flex-row justify-center gap-4">
      <UserTypeOption
        label="As an Individual"
        value="Individual"
        Icon={TiUser}
      />
      <UserTypeOption
        label="As a Business"
        value="Business"
        Icon={FaRegHandshake}
      />
    </div>
  );
}
