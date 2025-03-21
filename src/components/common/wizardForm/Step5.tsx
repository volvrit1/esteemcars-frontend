import { div } from "framer-motion/client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCarSide, FaShuttleVan, FaTruckMonster } from "react-icons/fa";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
  handleFileChange,
}: any) {
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!formData.applicationType) {
      newErrors.applicationType = "Application type is required.";
    }
    if (!formData.maritalStatus) {
      newErrors.maritalStatus = "Marital status is required.";
    }
    if (!formData.dependents) {
      newErrors.dependents = "Dependents field is required.";
    }
    if (!formData.driverLicenseType) {
      newErrors.driverLicenseType = "Driver license type is required.";
    }
    if (!formData.driverLicenseNumber) {
      newErrors.driverLicenseNumber = "Driver license number is required.";
    }
    if (!formData.driverLicenseVersion) {
      newErrors.driverLicenseVersion = "Driver license version is required.";
    }
    if (!formData.driverLicenseDocument) {
      newErrors.driverLicenseDocument = "Driver license document is required.";
    }

    if (formData.applicationType === "joint") {
      if (!formData.partnerMaritalStatus) {
        newErrors.partnerMaritalStatus = "Partner marital status is required.";
      }
      if (!formData.partnerDependents) {
        newErrors.partnerDependents = "Partner dependents field is required.";
      }
      if (!formData.partnerDriverLicenseType) {
        newErrors.partnerDriverLicenseType =
          "Partner driver license type is required.";
      }
      if (!formData.partnerDriverLicenseNumber) {
        newErrors.partnerDriverLicenseNumber =
          "Partner driver license number is required.";
      }
      if (!formData.partnerDriverLicenseVersion) {
        newErrors.partnerDriverLicenseVersion =
          "Partner driver license version is required.";
      }
      if (!formData.partnerDriverLicenseDocument) {
        newErrors.partnerDriverLicenseDocument =
          "Partner driver license document is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">
        Is this a single or joint application? *
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200 mx-auto">
        {/* Account Type Selection */}
        <div className="flex justify-start items-center lg:col-span-3">
          {["single", "joint"].map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="applicationType"
                value={type}
                checked={formData.applicationType === type}
                onChange={handleChange}
                className="peer "
              />
              <div className="text-white font-semibold p-4 uppercase rounded-lg">
                {type}
              </div>
            </label>
          ))}
          {errors.applicationType && (
            <p className="text-red-500">{errors.applicationType}</p>
          )}
        </div>

        {/* Marital Status */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">Marital Status *</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500">{errors.maritalStatus}</p>
          )}
        </div>

        {/* Dependents */}
        <div className="flex flex-col mb-4 lg:col-span-2">
          <label className="text-gray-100 font-medium">
            How Many Dependents Do You Have? *
          </label>
          <select
            name="dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          {errors.dependents && (
            <p className="text-red-500">{errors.dependents}</p>
          )}
        </div>

        {/* Dependents */}
        <div className="flex flex-col mb-4 lg:col-span-2">
          <label className="text-gray-100 font-medium">
            How Many Dependents Do You Have?
            <span className="text-gray-200">*</span>
          </label>
          <select
            required
            name="dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          {errors.dependents && (
            <p className="text-red-500">{errors.dependents}</p>
          )}
        </div>

        {/* Driver License Type */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">
            Driver License Type<span className="text-gray-200">*</span>
          </label>
          <select
            required
            name="driverLicenseType"
            value={formData.driverLicenseType}
            onChange={handleChange}
            className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
          >
            <option value="">Select one option</option>
            <option value="Learner">Learner</option>
            <option value="Restricted">Restricted</option>
            <option value="Full">Full</option>
            <option value="Overseas">Overseas</option>
          </select>
          {errors.driverLicenseType && (
            <p className="text-red-500">{errors.driverLicenseType}</p>
          )}
        </div>

        {/* Driver License Number */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">
            Driver License Number<span className="text-gray-200">*</span>
          </label>
          <input
            type="text"
            required
            name="driverLicenseNumber"
            value={formData.driverLicenseNumber}
            onChange={handleChange}
            className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            placeholder="Driver License Number"
          />
          {errors.driverLicenseNumber && (
            <p className="text-red-500">{errors.driverLicenseNumber}</p>
          )}
        </div>

        {/* Driver License Version */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-100 font-medium">
            Driver License Version<span className="text-gray-200">*</span>
          </label>
          <input
            type="text"
            required
            name="driverLicenseVersion"
            value={formData.driverLicenseVersion}
            onChange={handleChange}
            className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            placeholder="Driver License Version"
          />
          {errors.driverLicenseVersion && (
            <p className="text-red-500">{errors.driverLicenseVersion}</p>
          )}
        </div>

        {/* Upload Driving License */}
        <div className="w-fit">
          <label className="block font-medium">Upload Driving License:</label>
          <input
            type="file"
            onChange={handleFileChange}
            name="driverLicenseDocument"
            className="mt-0.5 w-full border p-2 rounded text-[#252525]"
          />
          {errors.driverLicenseDocument && (
            <p className="text-red-500">{errors.driverLicenseDocument}</p>
          )}
        </div>

        {formData?.applicationType === "joint" && (
          <div className="col-span-3 text-2xl font-bold ">
            Your Partner Details
          </div>
        )}
        {formData?.applicationType === "joint" && (
          <div className="flex flex-col mb-4">
            <label className="text-gray-100 font-medium">
              Marital Status *
            </label>
            <select
              name="partnerMaritalStatus"
              value={formData.partnerMaritalStatus}
              onChange={handleChange}
              className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select one option</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            {errors.partnerMaritalStatus && (
              <p className="text-red-500">{errors.partnerMaritalStatus}</p>
            )}
          </div>
        )}
        {formData?.applicationType === "joint" && (
          <div className="flex flex-col mb-4 lg:col-span-2">
            <label className="text-gray-100 font-medium">
              How Many Dependents Do You Have? *
            </label>
            <select
              name="partnerDependents"
              value={formData.partnerDependents}
              onChange={handleChange}
              className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select one option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            {errors.partnerDependents && (
              <p className="text-red-500">{errors.partnerDependents}</p>
            )}
          </div>
        )}
        {formData?.applicationType === "joint" && (
          <div className="flex flex-col mb-4 lg:col-span-2">
            <label className="text-gray-100 font-medium">
              How Many Dependents Do You Have?
              <span className="text-gray-200">*</span>
            </label>
            <select
              required
              name="partnerDependents"
              value={formData.partnerDependents}
              onChange={handleChange}
              className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select one option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
            {errors.partnerDependents && (
              <p className="text-red-500">{errors.partnerDependents}</p>
            )}
          </div>
        )}

        {formData?.applicationType === "joint" && (
          <div className="flex flex-col mb-4">
            <label className="text-gray-100 font-medium">
              Driver License Type<span className="text-gray-200">*</span>
            </label>
            <select
              required
              name="partnerDriverLicenseType"
              value={formData.partnerDriverLicenseType}
              onChange={handleChange}
              className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
            >
              <option value="">Select one option</option>
              <option value="Learner">Learner</option>
              <option value="Restricted">Restricted</option>
              <option value="Full">Full</option>
              <option value="Overseas">Overseas</option>
            </select>
            {errors.partnerDriverLicenseType && (
              <p className="text-red-500">{errors.partnerDriverLicenseType}</p>
            )}
          </div>
        )}
        {formData?.applicationType === "joint" && (
          <div className="flex flex-col mb-4">
            <label className="text-gray-100 font-medium">
              Driver License Number<span className="text-gray-200">*</span>
            </label>
            <input
              type="text"
              required
              name="partnerDriverLicenseNumber"
              value={formData.partnerDriverLicenseNumber}
              onChange={handleChange}
              className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Driver License Number"
            />
            {errors.partnerDriverLicenseNumber && (
              <p className="text-red-500">
                {errors.partnerDriverLicenseNumber}
              </p>
            )}
          </div>
        )}

        {formData?.applicationType === "joint" && (
          <div className="flex flex-col mb-4">
            <label className="text-gray-100 font-medium">
              Driver License Version<span className="text-gray-200">*</span>
            </label>
            <input
              type="text"
              required
              name="partnerDriverLicenseVersion"
              value={formData.partnerDriverLicenseVersion}
              onChange={handleChange}
              className="border rounded p-3 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              placeholder="Driver License Version"
            />
            {errors.partnerDriverLicenseVersion && (
              <p className="text-red-500">
                {errors.partnerDriverLicenseVersion}
              </p>
            )}
          </div>
        )}
        {formData?.applicationType === "joint" && (
          <div className="w-fit">
            <label className="block font-medium">Upload Driving License:</label>
            <input
              type="file"
              onChange={handleFileChange}
              name="partnerDriverLicenseDocument"
              className="mt-0.5 w-full border p-2 rounded text-[#252525]"
            />
            {errors.partnerDriverLicenseDocument && (
              <p className="text-red-500">
                {errors.partnerDriverLicenseDocument}
              </p>
            )}
          </div>
        )}
      </form>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-2 justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center border border-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center border border-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out hover:text-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
