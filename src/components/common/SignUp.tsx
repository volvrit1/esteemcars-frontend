// "use client"
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100 mt-[7rem]">
//       {/* Left Side: Car Image */}
//       <div className="w-1/2 hidden lg:block">
//         <img
//           src="/images/signup.png"
//           alt="Car"
//           className="w-full h-full object-cover object-left"
//         />
//       </div>

//       {/* Right Side: Signup Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative">
//         {/* Close Button */}
//         <button className="absolute top-6 right-6 text-gray-500 text-2xl hover:text-gray-800">
//           &times;
//         </button>

//         <div className="w-full max-w-md">
//           <h2 className="text-2xl font-semibold text-[#1262A1] mb-2">
//             Signup to Esteem Car Loans
//           </h2>
//           <p className="text-gray-500 mb-6 text-sm">
//             At Esteem Car Loans, we understand that buying a car is more than just a purchase—it’s a milestone.
//           </p>

//           {/* Form */}
//   <form>
//     {/* Name Fields */}
//     <div className="grid grid-cols-2 gap-4 mb-4">
//       <input
//         type="text"
//         placeholder="First Name"
//         className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//       />
//     </div>

//     {/* Email */}
//     <input
//       type="email"
//       placeholder="Enter Your Email Address"
//       className="border rounded px-4 py-3 w-full mb-4 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//     />

//     {/* Password Fields */}
//     <div className="relative mb-4">
//       <input
//         type={showPassword ? "text" : "password"}
//         placeholder="Create Password"
//         className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//       />
//       <span
//         className="absolute top-3 right-4 text-gray-500 cursor-pointer"
//         onClick={() => setShowPassword(!showPassword)}
//       >
//         {showPassword ? <FaEyeSlash /> : <FaEye />}
//       </span>
//     </div>

//     <div className="relative mb-4">
//       <input
//         type={showConfirmPassword ? "text" : "password"}
//         placeholder="Confirm Password"
//         className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//       />
//       <span
//         className="absolute top-1/3 right-4 text-gray-500 cursor-pointer"
//         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//       >
//         {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//       </span>
//     </div>

//     {/* Checkbox */}
//     <div className="flex items-center space-x-2 mb-6">
//       <input type="checkbox" id="terms" className="h-5 w-5 text-[#1262A1] focus:ring-[#1262A1]"/>
//       <label htmlFor="terms" className="text-gray-900 text-sm">
//         Agree to All Terms & Conditions
//       </label>
//     </div>

//     {/* Submit Button */}
//     <button className="w-full bg-[#1262A1] text-white font-medium py-3 rounded-lg hover:bg-[#0e4e82] transition">
//       SIGN UP
//     </button>
//   </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Post } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUpModal({ isOpen, onClose, setLoginOpen }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors: any = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    try {
      const res: any = await Post("api/user", data, 5000);
      if (res?.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        onClose()
        console.log("Login successful", res);
      } else {
        console.error("Login failed", res);
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    password === "" || confirmPassword === "" || password !== confirmPassword;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
      <div className="w-auto flex justify-center items-center bg-white h-[98vh] rounded-lg py-6 overflow-hidden">
        <div className="bg-white h-[80vh] p-8 w-1/2 max-w-md relative">
          <img
            src="/images/signup.png"
            alt="Car"
            className="w-full h-full object-cover object-left"
          />
        </div>

        <div className="w-full lg:w-1/2 h-[80vh] flex items-center justify-center p-8 bg-white relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-2 text-gray-500 text-2xl hover:text-gray-800"
          >
            &times;
          </button>

          <div className="w-full max-w-md">
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border rounded p-3 bg-white text-gray-800 focus:ring-2 focus:ring-[#1262A1] outline-none"
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Name Fields */}
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-4 py-3 w-full mb-4 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              />

              {/* Password Fields */}
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                />
                <span
                  className="absolute top-3 right-4 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="relative mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                />
                <span
                  className="absolute top-1/3 right-4 text-gray-500 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 w-5 text-[#1262A1] focus:ring-[#1262A1]"
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
                <span className="text-gray-700">{"Already have account? "}</span>
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
