"use client";
import { Post } from "@/utils/api";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignUpModal({ isOpen, onClose, setLoginOpen }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState<any>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [checkbox, setCheckbox] = useState<any>(false);

  const validate = () => {
    let tempErrors: any = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    if (!firstName) tempErrors.firstName = "First Name is required";
    if (!lastName) tempErrors.lastName = "Last Name is required";
    if (!dob) tempErrors.dob = "Dob is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // useEffect(() => {
  //   validate();
  // }, [title, firstName, lastName, dob, email, password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title,
      firstName,
      lastName,
      middleName,
      dob,
      email,
      password,
      confirmPassword,
    };
    try {
      if (validate()) {
        const res: any = await Post("api/user", data, 5000);

        if (res?.success) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setDob("");
          setMiddleName("");
          setTitle("");
          onClose();
          if (res?.message) toast.success(res.message);
        } else {
          console.log("Login failed", res);
        }
      }
    } catch (error: any) {
      if (error?.message) toast.error(error?.message);
      console.log("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    password === "" || confirmPassword === "" || password !== confirmPassword;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-[5000]">
      <div className="w-auto flex justify-center items-center bg-white h-[98vh] rounded-lg py-6 overflow-hidden">
        <div className="bg-white h-[80vh] p-2 w-1/2 max-w-md relative">
          <Image
            width={800}
            height={800}
            src="/images/signup.png"
            alt="Car"
            className="w-full h-full object-cover object-left rounded"
          />
        </div>

        <div className="w-full lg:w-1/2 h-[80vh] flex items-center justify-center p-8 bg-white relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-2 text-gray-500 text-2xl hover:text-gray-800"
          >
            &times;
          </button>

          <div className="w-full max-w-md overflow-auto h-[80vh] some-container">
            <h2 className="text-2xl font-semibold text-[#1262A1] mb-2">
              Welcome Back to Esteem Car Loans !
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              At Esteem Car Loans, we understand that buying a car is more than
              just a purchase—it’s a milestone.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <select
                  name="title"
                  value={title || ""}
                  onChange={(e) =>{ setTitle(e.target.value)}}
                  className="border rounded p-3 bg-white text-gray-800   outline-none"
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </select>
                {errors.title && (
                  <p className="text-red-400 mb-2 text-xs">{errors.title}</p>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Name Fields */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName || ""}
                    onChange={(e) => {setFirstName(e.target.value)}}
                    className="border rounded px-4 py-3 w-full text-gray-700   outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 mb-2 text-xs">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={middleName || ""}
                    placeholder="middle Name"
                    onChange={(e) => {setMiddleName(e.target.value)}}
                    className="border rounded px-4 py-3 w-full text-gray-700   outline-none"
                  />
                  {errors.middleName && (
                    <p className="text-red-400 mb-2 text-xs">
                      {errors.middleName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName || ""}
                    onChange={(e) => {setLastName(e.target.value)}}
                    className="border rounded px-4 py-3 w-full text-gray-700   outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 mb-2 text-xs">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <input
                type="do"
                placeholder="Enter Your Email Address"
                value={email || ""}
                onChange={(e) => {setEmail(e.target.value)}}
                className="border rounded px-4 py-3 w-full mb-4 text-gray-700   outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-400 mb-2">{errors.email}</p>
              )}

              {/* Email */}
              <input
                type="date"
                placeholder="Enter Your date of birth"
                value={dob || ""}
                onChange={(e) => {setDob(e.target.value)}}
                className="border rounded px-4 py-3 w-full mb-4 text-gray-700   outline-none"
              />

              {errors.dob && (
                <p className="text-xs text-red-400 mb-2 ">{errors.dob}</p>
              )}
              {/* Password Fields */}
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  value={password ||""}
                  onChange={(e) => {setPassword(e.target.value)}}
                  className="border rounded px-4 py-3 w-full text-gray-700   outline-none"
                />
                <span
                  className="absolute top-3 right-4 text-gray-500 cursor-pointer"
                  onClick={() => {setShowPassword(!showPassword)}}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="relative mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword || ""}
                  onChange={(e) => {setConfirmPassword(e.target.value)}}
                  className="border rounded px-4 py-3 w-full text-gray-700   outline-none"
                />
                <span
                  className="absolute top-1/3 right-4 text-gray-500 cursor-pointer"
                  onClick={() => {setShowConfirmPassword(!showConfirmPassword)}}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 w-5 text-[#1262A1] "
                  value={checkbox || ""}
                  onChange={(e) => {
                    checkbox ? setCheckbox(false) : setCheckbox(true);
                  }}
                />
                <label htmlFor="terms" className="text-gray-900 text-sm">
                  Agree to All Terms & Conditions
                </label>
              </div>

              <button
                className={`w-full text-white font-medium py-3 rounded-lg transition ${
                  isDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1262A1] hover:bg-[#0e4e82]"
                }`}
                disabled={isDisabled}
              >
                SIGN UP
              </button>
              <div className="text-sm">
                <span className="text-gray-700">
                  {"Already have account? "}
                </span>
                <Link
                  href={""}
                  onClick={() => {
                    setLoginOpen(true);
                    onClose();
                  }}
                  className="text-[#1262A1] py-2 m-auto inline-block"
                >
                  {"  Login"}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
