import LoanForm from "@/components/common/LoanForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-white">
      <div className="w-full h-auto lg:h-auto mt-[6rem] lg:mt-[7rem]">
        <Image
          src="/assets/applyloan.png"
          alt="Loan Form"
          width={500}
          height={500}
          className="object-conteian h-full w-full object-center"
        />
      </div>
      <LoanForm />
    </div>
  );
}
