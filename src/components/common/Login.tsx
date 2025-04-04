"use client";
import { Post } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function LoginModal({ isOpen, onClose, setSignUpOpen }: any) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors: any = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      password,
    };
    try {
      if (validate()) {
        const res: any = await Post("api/user/login", data, 5000);
        if (res?.success) {
          if (res.data.token) localStorage.setItem("token", res.data.token);
          localStorage.setItem("userData", JSON.stringify(res.data.userData));
          router.push("/account");
          setEmail("");
          setPassword("");
          onClose();
          if (res?.message) toast.success(res?.message);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5000]">
      <div className="w-auto flex justify-center items-center bg-white rounded-lg overflow-hidden">
        <div className="bg-white h-[80vh] p-6 w-1/2 max-w-md relative">
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
            className="absolute top-6 right-6 text-[#7d7d7d] text-2xl hover:text-[#252525]"
          >
            &times;
          </button>

          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-[#1262A1] mb-2">
              Welcome Back to Esteem Finance Car Loans !
            </h2>
            <p className="text-[#7d7d7d] mb-6 text-sm">
              At Esteem Finance Car Loans, we understand that buying a car is more than
              just a purchase—it’s a milestone.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-4 py-3 w-full mb-4 text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              />
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded px-4 py-3 w-full text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
                />
                <span
                  className="absolute top-1/3 right-4 text-[#7d7d7d] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {/* Checkbox */}
              <div className="flex items-center space-x-2 mb-6">
                <label htmlFor="terms" className="text-blue-900 text-sm">
                  Forget Password ?{" "}
                </label>
              </div>
              {/* Submit Button */}
              <button className="w-full bg-[#1262A1] text-white font-medium py-3 rounded-lg hover:bg-[#0e4e82] transition">
                {loading ? "Processing..." : "Log In"}
              </button>
              <div className="text-sm">
                <span className="text-gray-700">{"Don't have account? "}</span>
                <Link
                  href={""}
                  onClick={() => {
                    setSignUpOpen(true);
                    onClose();
                  }}
                  className="text-[#1262A1] py-2 m-auto inline-block"
                >
                  {"  SignUp"}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
