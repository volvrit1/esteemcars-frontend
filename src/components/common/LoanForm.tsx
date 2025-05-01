"use client";
import { Post } from "@/utils/api";
import Image from "next/image";
import React, { useState } from "react";
import { FaDollarSign, FaRegAddressCard } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { IoCallOutline, IoMailOutline, IoManOutline } from "react-icons/io5";
import { PiCaretDownThin, PiLineVerticalThin } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";
import OtpVerification from "./OtpVerification";
import Link from "next/link";
import { countries } from "@/data/data";

interface FormData {
  loanAmount: string;
  weeklyPayment: string;
  termYears: string;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  maritalStatus: string;
  noOfDependents: string;
  drivingLicenceType: string;
  countryCode: string;
  mobile: string;
  email: string;
  preferredContact: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  propertyStatus: string;
  timeAtPropertyMonths: string;
  timeAtPropertyYears: string;
  timeAtProperty?: string;
  monthlyCost: string;
  region: string;
  residentialStatus: string;
  employmentStatus: string;
  jobTitle: string;
  timeAtEmployerMonths: string;
  timeAtEmployerYears: string;
  timeAtEmployer: string;
}

const MyForm = () => {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [id, setId] = useState("");
  const [otpMail, setOtpMail] = useState("");
  const [setOtpLocal, setSetOtpLocal] = useState("");
  const [formData, setFormData] = useState<any>({
    loanAmount: 5000,
    weeklyPayment: 1000,
    termYears: 1,
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    maritalStatus: "",
    noOfDependents: "",
    drivingLicenceType: "",
    countryCode: "+64",
    mobile: "",
    email: "",
    preferredContact: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    propertyStatus: "",
    timeAtPropertyMonths: "",
    timeAtPropertyYears: "",
    timeAtProperty: "",
    monthlyCost: "",
    region: "",
    residentialStatus: "",
    employmentStatus: "",
    jobTitle: "",
    timeAtEmployerMonths: "",
    timeAtEmployerYears: "",
    timeAtEmployer: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>(
    {}
  );

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate1 = (formData: FormData): boolean => {
    const newErrors: { [key in keyof FormData]?: string } = {};

    // Basic validation for demonstration
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    // if (!formData.countryCode)
    //   newErrors.countryCode = "CountryCode is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    // If there are errors, return false and log errors
    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors); // Log the errors to the console or display them to the user
      return false;
    }

    // If no errors, return true (form is valid)
    return true;
  };

  const validate2 = (formData: FormData) => {
    const newErrors: { [key in keyof FormData]?: string } = {};

    if (!formData.streetAddress)
      newErrors.streetAddress = "Street Address is required";
    if (!formData.addressLine2)
      newErrors.addressLine2 = "Address Line 2 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal Code is required";
    if (!formData.propertyStatus)
      newErrors.propertyStatus = "Property Status is required";
    if (!formData.timeAtPropertyMonths || !formData.timeAtPropertyYears)
      newErrors.timeAtProperty = "Time at Property is required";

    if (!formData.monthlyCost)
      newErrors.monthlyCost = "Monthly Cost is required";
    if (!formData.region) newErrors.region = "Region is required";
    if (!formData.residentialStatus)
      newErrors.residentialStatus = "Residential Status is required";
    if (!formData.employmentStatus)
      newErrors.employmentStatus = "Employment Status is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required";
    if (!formData.timeAtEmployerYears || !formData.timeAtEmployerMonths)
      newErrors.timeAtEmployer = "Time at Employer is required";

    setErrors(newErrors);

    // If there are errors, return false and log errors
    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors, formData); // Log the errors to the console or display them to the user
      return false;
    }
    return true;
  };

  const resetFormData = (formData: any) => {
    const data: any = { loanAmount: 5000, weeklyPayment: 1000, termYears: 1 };
    setFormData(
      Object.fromEntries(
        Object.keys(formData).map((key) =>
          ["loanAmount", "weeklyPayment", "termYears"].includes(key)
            ? [key, data[key]]
            : [key, ""]
        )
      )
    );
  };

  const sendMessage = async () => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNGM4OTU5NS1jNGZlLTQwZWUtYWYwNy05ODVmYTVkMDUyODIiLCJ1bmlxdWVfbmFtZSI6ImVzdGVlbWZpbmFuY2U3QGdtYWlsLmNvbSIsIm5hbWVpZCI6ImVzdGVlbWZpbmFuY2U3QGdtYWlsLmNvbSIsImVtYWlsIjoiZXN0ZWVtZmluYW5jZTdAZ21haWwuY29tIiwiYXV0aF90aW1lIjoiMDQvMDMvMjAyNSAwNzo0NToxOSIsInRlbmFudF9pZCI6IjQyNTMyMiIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.sfPB9WoIoxjNoqE5ku1TVmHgSSDnCn31xlFT5Vakvvc";
      const apiUrl = `https://live-mt-server.wati.io/425322/api/v1/sendTemplateMessage?whatsappNumber=64${formData.mobile}`;

      const data = {
        template_name: "thankyou",
        broadcast_name: "thankyou_050420251219",
      };
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Send message: ", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const isValid = validate1(formData);
      const isValid2 = validate2(formData);
      if (isValid && isValid2) {
        const res: any = await Post("/api/loan-application", formData, 5000);
        if (res.success) {
          await sendMessage();
          setId(res?.data?.id);
          setOtpMail(res?.data?.email);
          setAgreed(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
          });
          setStep(3);
          toast.success(res?.message);
          resetFormData(formData);
        }
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      // toast.error(error?.message);
      toast.error(error?.details);
    }
  };

  const handelForm = (e: React.FormEvent<Element>) => {
    if (step == 1) {
      console.log(validate1(formData));
      if (validate1(formData)) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validate2(formData)) {
        handleSubmit(e);
      }
    }
  };

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 font-[poppins]">
      {" "}
      <div className="flex items-center justify-evenly mb-12">
        {" "}
        <span
          className={`rounded-full p-2 flex items-center justify-center w-10 h-10 ${step === 1 ? "bg-[#1262A1]" : "bg-[#1262A1]/50"
            }`}
        >
          {" "}
          1{" "}
        </span>{" "}
        <span className="w-5/6 h-2 bg-gray-300 rounded-full relative">
          {" "}
          <span
            className={`h-2 bg-[#1262A1] rounded-full absolute ${step === 1 ? "w-1/2" : "w-full"
              }`}
          ></span>{" "}
        </span>{" "}
        <span
          className={`rounded-full p-2 flex items-center justify-center w-10 h-10 ${step === 2 ? "bg-[#1262A1]" : "bg-[#1262A1]/50"
            }`}
        >
          {" "}
          2{" "}
        </span>{" "}
      </div>
      <div className=" mb-16">
        {step === 1 && (
          <div className="">
            <label
              htmlFor=""
              className="text-2xl text-gray-800 font-semibold mb-4 inline-block"
            >
              Looking for...
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-10">
              {/* Borrow Slider */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-gray-800 font-medium">
                    I want to borrow
                  </label>
                  <span className="rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30 p-[1.3px] px-3">
                    ${formData?.loanAmount}
                  </span>
                </div>
                <input
                  type="range"
                  name="loanAmount"
                  min="1000"
                  max="10000"
                  step="500"
                  value={formData?.loanAmount}
                  onChange={handleChange}
                  className="w-full rounded-full h-2 bg-[#DDE5EB] appearance-none [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:w-4 
             [&::-webkit-slider-thumb]:h-4 
             [&::-webkit-slider-thumb]:bg-[#1262A1] 
             [&::-webkit-slider-thumb]:rounded-full 
             [&::-webkit-slider-thumb]:cursor-pointer 
             [&::-moz-range-thumb]:w-4 
             [&::-moz-range-thumb]:h-4 
             [&::-moz-range-thumb]:bg-[#1262A1] 
             [&::-moz-range-thumb]:rounded-full 
             [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #1262A1 ${((formData?.loanAmount - 1000) / (10000 - 1000)) * 100
                      }%, #DDE5EB 0%)`,
                  }}
                />
              </div>

              {/* Pay Slider */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-gray-800 font-medium">
                    I want to pay
                  </label>
                  <span className="rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30 p-[1.3px] px-3">
                    ${formData?.weeklyPayment} / week
                  </span>
                </div>
                <input
                  type="range"
                  name="weeklyPayment"
                  min="500"
                  max={Math.min(formData?.loanAmount, 5000)} // Max is either loanAmount or 5000
                  step="100"
                  value={Math.min(
                    formData?.weeklyPayment,
                    formData?.loanAmount
                  )} // Ensure it doesn't exceed loanAmount
                  onChange={handleChange}
                  className="w-full rounded-full h-2 bg-[#DDE5EB] appearance-none  [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:w-4 
             [&::-webkit-slider-thumb]:h-4 
             [&::-webkit-slider-thumb]:bg-[#1262A1] 
             [&::-webkit-slider-thumb]:rounded-full 
             [&::-webkit-slider-thumb]:cursor-pointer 
             [&::-moz-range-thumb]:w-4 
             [&::-moz-range-thumb]:h-4 
             [&::-moz-range-thumb]:bg-[#1262A1] 
             [&::-moz-range-thumb]:rounded-full 
             [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #1262A1 ${((formData?.weeklyPayment - 500) /
                      (Math.min(formData?.loanAmount, 5000) - 500)) *
                      100
                      }%, #DDE5EB 0%)`,
                  }}
                />
              </div>

              {/* Term Slider */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-gray-800 font-medium">Term</label>
                  <span className="rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30 p-[1.3px] px-3">
                    {formData?.termYears} years
                  </span>
                </div>
                <input
                  type="range"
                  name="termYears"
                  min="1"
                  max="10"
                  step="1"
                  value={formData?.termYears}
                  onChange={handleChange}
                  className="w-full rounded-full h-2 bg-[#DDE5EB] appearance-none  [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:w-4 
             [&::-webkit-slider-thumb]:h-4 
             [&::-webkit-slider-thumb]:bg-[#1262A1] 
             [&::-webkit-slider-thumb]:rounded-full 
             [&::-webkit-slider-thumb]:cursor-pointer 
             [&::-moz-range-thumb]:w-4 
             [&::-moz-range-thumb]:h-4 
             [&::-moz-range-thumb]:bg-[#1262A1] 
             [&::-moz-range-thumb]:rounded-full 
             [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #1262A1 ${((formData?.termYears - 1) / (10 - 1)) * 100
                      }%, #DDE5EB 0%)`,
                  }}
                />
              </div>
            </div>

            <label
              htmlFor=""
              className="text-2xl inline-block text-gray-800 font-semibold mb-4"
            >
              My Details
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-10">
              {/* Title */}
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">Title:</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  style={{
                    height: "3.1rem",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                  className="p-3 w-full rounded-full outline-none px-4 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                >
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                </select>

                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title}</p>
                )}
              </div>

              {/* First Name */}
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter your first name"
                  className="p-3 w-full rounded-full placeholder:text-[#1262A1] outline-none px-4 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                  style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter your last name"
                  className="p-3 w-full rounded-full outline-none placeholder:text-[#1262A1] px-4 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                  style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-10">
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Date of Birth:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    style={{
                      height: "3.1rem",
                    }}
                    className="p-3 w-full rounded-full outline-none pl-16 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                  />

                  <Image
                    src={"/assets/date.png"}
                    alt=""
                    className="absolute left-4 text-xl top-1/2 transform -translate-y-1/2 border text-[#1262A1]"
                    width="20"
                    height="20"
                  />

                  <PiLineVerticalThin className="absolute text-[3.6rem] opacity-40 font-thin border-0 left-4 top-1/2 transform -translate-y-1/2 text-[#1262A1]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Marital Status:
                </label>
                <div className="relative rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30">
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="p-3 w-full rounded-full outline-none px-16 text-[#1262A1] bg-transparent appearance-none"
                    style={{
                      height: "3rem",
                      WebkitAppearance: "none", // Safari fix
                      MozAppearance: "none", // Firefox fix
                      appearance: "none", // General fix
                    }}
                  >
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </select>

                  <Image
                    src="/assets/users.png"
                    alt="user icon"
                    width={24}
                    height={24}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1262A1]"
                  />

                  <PiLineVerticalThin className="absolute text-[3.6rem] opacity-40 font-thin left-5 top-1/2 transform -translate-y-1/2 text-[#1262A1]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">Dependents:</label>
                <div className="relative">
                  <input
                    type="number"
                    name="noOfDependents"
                    value={formData.noOfDependents}
                    onChange={handleChange}
                    placeholder="Enter dependencies"
                    className="p-3 w-full rounded-full placeholder:text-[#1262A1] outline-none px-16 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30 appearance-none"
                    style={{
                      MozAppearance: "textfield", // Firefox: removes spinner
                    }}
                    // For Safari & Chrome: removes spinner arrows
                    onWheel={(e) => e.currentTarget.blur()}
                  />

                  <Image
                    src="/assets/human.png"
                    alt="dependents icon"
                    width={16}
                    height={16}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1262A1]"
                  />

                  <PiLineVerticalThin className="absolute text-[3.6rem] opacity-40 font-thin left-5 top-1/2 transform -translate-y-1/2 text-[#1262A1]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-10">
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Driving License Type:
                </label>
                <div className="relative rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30">
                  <select
                    name="drivingLicenceType"
                    value={formData.drivingLicenceType}
                    onChange={handleChange}
                    style={{
                      height: "3rem",
                      WebkitAppearance: "none", // for Safari
                      MozAppearance: "none", // for Firefox
                      appearance: "none", // general
                    }}
                    className="p-3 w-full rounded-full outline-none px-16 bg-transparent text-[#1262A1] cursor-pointer"
                  >
                    <option value="">Select DL Type</option>
                    <option value="Restricted">Restricted</option>
                    <option value="Full Licence">Full Licence</option>
                    <option value="Learner">Learner</option>
                    <option value="No Licence">No Licence</option>
                    <option value="International">International</option>
                    <option value="Other">Other</option>
                  </select>
                  <Image
                    src={"/assets/dl.png"}
                    alt=""
                    className="absolute text-2xl left-4 top-1/2 transform -translate-y-1/2 text-[#1262A1]"
                    width="20"
                    height="20"
                  />
                  <PiLineVerticalThin className="absolute text-[3.6rem] opacity-40 font-thin border-0 left-5 top-1/2 transform -translate-y-1/2 text-[#1262A1]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Mobile Number:
                </label>

                <div className="relative flex items-center bg-[#1262A11A] border border-[#1262A1]/30 rounded-full overflow-hidden px-4">
                  {/* Country code select */}
                  <select
                    name="countryCode"
                    defaultValue={"+64"}
                    onChange={handleChange}
                    className="bg-transparent w-12 text-[#1262A1] border-r border-[#1262A1]/30 outline-none py-3 pr-3 appearance-none"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="+64">+64</option>
                    {/* {countries.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.code}
                      </option>
                    ))} */}
                  </select>


                  {/* Mobile input */}
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="flex-1 py-3 pl-4 pr-2 placeholder:text-[#1262A1] bg-transparent text-[#1262A1] outline-none"
                  />
                </div>

                {/* Validation Errors */}
                {errors.countryCode && (
                  <p className="text-red-500 text-sm">{errors.countryCode}</p>
                )}
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">Email:</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="py-3 w-full placeholder:text-[#1262A1] rounded-full outline-none pl-16 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                  />
                  <Image
                    src={"/assets/email.png"}
                    alt=""
                    className="absolute text-2xl left-4 top-1/2 transform -translate-y-1/2 border text-[#1262A1]"
                    width="20"
                    height="20"
                  />

                  <PiLineVerticalThin className="absolute text-[3.6rem] opacity-40 font-thin border-0 left-5 top-1/2 transform -translate-y-1/2 text-[#1262A1]" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Preferred Contact Method:
                </label>

                <div className="relative overflow-hidden rounded-full bg-[#1262A11A] border border-[#1262A1]/30 text-[#1262A1]">
                  {/* Icon */}
                  <Image
                    src="/assets/contacti.png"
                    alt="contact"
                    width={20}
                    height={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                  />

                  {/* Vertical line */}
                  <PiLineVerticalThin className="absolute text-[3.6rem] opacity-40 font-thin border-0 left-5 top-1/2 transform -translate-y-1/2 text-[#1262A1]" />

                  {/* Select field */}
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="appearance-none w-full py-3 pl-16 pr-8 bg-transparent text-[#1262A1] outline-none rounded-full cursor-pointer"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="">Select Preferred Contact</option>
                    <option value="Phone">Phone</option>
                    <option value="SMS">SMS</option>
                    <option value="Email">Email</option>
                  </select>

                  {/* Optional custom dropdown arrow */}
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1262A1]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M1.5 5.5l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <label
              htmlFor=""
              className="text-2xl mb-6 inline-block text-gray-800 font-semibold"
            >
              Address...
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-10 w-full mb-10">
              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Enter street address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="p-3 w-full rounded-full placeholder:text-[#1262A1] outline-none px-2 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                />
                {errors.streetAddress && (
                  <p className="text-red-500 text-sm">{errors.streetAddress}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  placeholder="Apartment, suite, etc."
                  value={formData.addressLine2}
                  onChange={handleChange}
                  className="p-3 w-full rounded-full placeholder:text-[#1262A1] outline-none px-2 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                />
                {errors.addressLine2 && (
                  <p className="text-red-500 text-sm">{errors.addressLine2}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-full placeholder:text-[#1262A1] outline-none p-3 px-2 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Enter postal code"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="p-3 w-full rounded-full placeholder:text-[#1262A1] outline-none px-2 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm">{errors.postalCode}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Property Status
                </label>
                <div className="relative rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30">
                  <select
                    name="propertyStatus"
                    value={formData.propertyStatus}
                    onChange={handleChange}
                    className="p-3 w-full rounded-full outline-none bg-[#1263a100] text-[#1262A1]"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="">Select Property Status</option>
                    <option value="Owned">Owned</option>
                    <option value="Rented">Rented</option>
                    <option value="Leased">Leased</option>
                  </select>
                </div>
                {errors.propertyStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.propertyStatus}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Time at Property
                </label>
                <div className="flex overflow-hidden rounded-full bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30">
                  <select
                    name="timeAtPropertyMonths"
                    value={formData.timeAtPropertyMonths}
                    onChange={handleChange}
                    className="w-1/2 rounded-l-full outline-none p-3 bg-[#1263a100] text-[#1262A1] border-r border-[#1262A1]/30"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="">Month</option>
                    {[...Array(12).keys()].map((i) => (
                      <option key={i} value={i + 1}>
                        {new Date(0, i).toLocaleString("default", {
                          month: "long",
                        })}
                      </option>
                    ))}
                  </select>

                  <select
                    name="timeAtPropertyYears"
                    value={formData.timeAtPropertyYears}
                    onChange={handleChange}
                    className="w-1/2 rounded-r-full outline-none p-3 bg-[#1263a100] text-[#1262A1]"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="">Year</option>
                    {[...Array(20).keys()].map((i) => (
                      <option key={i} value={2020 + i}>
                        {2020 + i}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.timeAtProperty && (
                  <p className="text-red-500 text-sm">
                    {errors.timeAtProperty}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Monthly Cost
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="monthlyCost"
                    value={formData.monthlyCost}
                    onChange={handleChange}
                    placeholder="Enter a monthly cost"
                    className="w-full h-12 rounded-full outline-none placeholder:text-[#1262A1] pl-16 pr-4 bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                  />
                  <FaDollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-[#1262A1] text-lg" />
                  <PiLineVerticalThin className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1262A1] text-[3rem] opacity-40" />
                </div>
                {errors.monthlyCost && (
                  <p className="text-red-500 text-sm">{errors.monthlyCost}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">Region</label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder="Enter region"
                  className="w-full p-3 rounded-full outline-none bg-[#1262A11A] text-[#1262A1] placeholder:text-[#1262A1] border border-[#1262A1]/30"
                />
                {errors.region && (
                  <p className="text-red-500 text-sm">{errors.region}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-medium">
                  Residential Status
                </label>
                <div className="relative">
                  <select
                    name="residentialStatus"
                    value={formData.residentialStatus}
                    onChange={handleChange}
                    className="w-full p-3 pr-10 rounded-full outline-none appearance-none bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                  >
                    <option value="">Select Residential Status</option>
                    <option value="NZ Citizen">NZ Citizen</option>
                    <option value="NZ Resident">NZ Resident</option>
                    <option value="Non NZ Resident">Non NZ Resident</option>
                    <option value="Work Visa">Work Visa</option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1262A1] w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {errors.residentialStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.residentialStatus}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-2xl mb-6 inline-block lg:col-span-3 text-gray-800 font-semibold"
              >
                Employment
              </label>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-10 w-full">
                {/* Employment Status */}
                <div className="space-y-2">
                  <label className="text-gray-800 font-medium">
                    Employment Status
                  </label>
                  <div className="relative">
                    <select
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      className="w-full p-3 pr-10 rounded-full appearance-none outline-none bg-[#1262A11A] text-[#1262A1] border border-[#1262A1]/30"
                    >
                      <option value="">Select Employment Status</option>
                      <option value="Employed Full-Time">
                        Employed Full-Time
                      </option>
                      <option value="Employed Part-Time">
                        Employed Part-Time
                      </option>
                      <option value="Contractor">Contractor</option>
                      <option value="Self Employed">Self Employed</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Disabled">Disabled</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Retired">Retired</option>
                      <option value="WINZ">WINZ</option>
                      <option value="ACC">ACC</option>
                      <option value="WINZ & ACC">WINZ & ACC</option>
                      <option value="Studylink">Studylink</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1262A1] w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {errors.employmentStatus && (
                    <p className="text-red-500 text-sm">
                      {errors.employmentStatus}
                    </p>
                  )}
                </div>

                {/* Job Title */}
                <div className="space-y-2">
                  <label className="text-gray-800 font-medium">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Please provide a job title"
                    className="w-full p-3 rounded-full outline-none bg-[#1262A11A] text-[#1262A1] placeholder:text-[#1262A1] border border-[#1262A1]/30"
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                  )}
                </div>

                {/* Time at Employment */}
                <div className="space-y-2">
                  <label className="text-gray-800 font-medium">
                    Time at Employment
                  </label>
                  <div className="flex rounded-full overflow-hidden border border-[#1262A1]/30 text-[#1262A1] bg-[#1262A11A]">
                    <div className="relative w-1/2">
                      <select
                        name="timeAtEmployerMonths"
                        value={formData.timeAtEmployerMonths}
                        onChange={handleChange}
                        className="w-full p-3 pr-10 appearance-none outline-none bg-transparent text-[#1262A1] border-r border-[#1262A1]/30"
                      >
                        <option value="">Month</option>
                        {[...Array(12).keys()].map((i) => (
                          <option key={i} value={i + 1}>
                            {new Date(0, i).toLocaleString("default", {
                              month: "long",
                            })}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1262A1] w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <div className="relative w-1/2">
                      <select
                        name="timeAtEmployerYears"
                        value={formData.timeAtEmployerYears}
                        onChange={handleChange}
                        className="w-full p-3 pr-10 appearance-none outline-none bg-transparent text-[#1262A1]"
                      >
                        <option value="">Year</option>
                        {[...Array(20).keys()].map((i) => (
                          <option key={i} value={2020 + i}>
                            {2020 + i}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1262A1] w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.timeAtProperty && (
                    <p className="text-red-500 text-sm">
                      {errors.timeAtProperty}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {step == 3 && (
          <div className="fixed inset-0 flex items-center justify-center z-[5000] bg-black bg-opacity-50">
            <div className="bg-white text-[#1262A1] p-6 rounded-lg text-center">
              <OtpVerification
                id={id}
                email={otpMail}
                setOtpLocal={setOtpLocal}
                setIsModalVisible={setStep}
                handleGoBack={() => setStep(1)}
              />
            </div>
          </div>
        )}
        {step == 4 && (
          <div className="fixed inset-0 flex items-center justify-center z-[5000] bg-black bg-opacity-50">
            <div className="bg-white text-[#1262A1] p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">Submission Successful!</h2>
              <p>Our team will contact you shortly.</p>
              <button
                className="mt-4 bg-[#1262A1] text-white p-2 rounded-lg w-24 hover:bg-[#0f4a7a] transition"
                onClick={() => setStep(1)}
              >
                OK
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="agree"
              className="mr-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="agree" className="text-sm text-gray-800">
              I agree to the{" "}
              <Link
                target="blank"
                href="/terms-and-conditions"
                className="text-blue-600 underline"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                target="blank"
                href="/privacy-policy"
                className="text-blue-600 underline"
              >
                Privacy Policy
              </Link>
            </label>
          </div>
        )}
      </div>
      <div className="w-full text-center space-x-10 lg:space-x-4  ">
        <button
          type="button"
          onClick={() => setStep(1)}
          disabled={step === 1}
          className={`bg-gray-50 border w-1/3 lg:w-1/5 m-auto text-gray-500 p-3 rounded-full hover:bg-gray-100 ${step === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={handelForm}
          disabled={step === 2 && !agreed}
          className={`bg-[#1262A1] w-1/3 lg:w-1/5 m-auto text-white p-3 rounded-full hover:bg-[#1262A1]/90 ${step === 2 && !agreed ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {step === 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default MyForm;
