import LoanForm from "@/components/common/LoanForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-white">
      <div className="w-full mt-[6rem] lg:mt-[7rem]">
        <Image
          src="/assets/applyloan.png"
          alt="Loan Form"
          width={500}
          height={500}
          unoptimized
          className="object-conteian h-32 w-full object-cover"
        />
      </div>
      <LoanForm />
    </div>
  );
}
