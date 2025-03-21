"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import LoginModal from "../common/Login";
import SignUpModal from "../common/SignUp";

export default function LoanApplication() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const handelAuthForLoan = () => {
    const auth = localStorage.getItem("token");
    if (auth) {
      router.push("/apply-for-car-loan");
    } else {
      setLoginOpen(true);
    }
  };

  return (
    <div
      id="loanApplication"
      className="max-w-7xl relative  m-auto p-4 lg:p-14 mb-8"
    >
      <div className="m-auto lg:w-full  text-center lg:px-24 lg:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-23xl font-bold text-[#252525] leading-7 mb-4 ">
          {"Submit Your"}
          <span className="text-[#F75D34]"> {"Car Loan Application"}</span>
          {"Today"}
        </h2>
        <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl line-clamp-4 lg:line-clamp-none font-light mb-10 text-[#252525] leading-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.
        </h3>
        <button
          onClick={handelAuthForLoan}
          className="bg-[#1262A1]  lg:px-12 p-5 text-2xl  font-semibold rounded-lg w-2/4 hover:bg-gray-400 transition-colors ease-in-out"
        >
          Apply Car Loan Now
        </button>
      </div>

      <LoginModal
        isOpen={loginOpen}
        setSignUpOpen={setSignUpOpen}
        onClose={() => setLoginOpen(false)}
      />
      <SignUpModal
        isOpen={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        setLoginOpen={setLoginOpen}
      />
    </div>
  );
}
