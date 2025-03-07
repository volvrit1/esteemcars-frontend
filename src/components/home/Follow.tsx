import Image from "next/image";
import React from "react";

export default function Follow() {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-23xl font-bold text-gray-800 leading-7 mb-4 ">
          {"3 Steps"}
          <span className="text-[#F75D34]"> {"To Follow"}</span>
        </h2>
        <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-light mb-8 text-gray-800 leading-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.
        </h3>
      </div>
      <section className="container relative text-gray-100 bg-[#1262A1] mx-auto flex flex-col lg:flex-row lg:items-center justify-around lg:p-16 rounded ">
        <div className="flex justify-start items-center  text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  text-gray-100  p-2 leading-8">
          <Image
            src={"/images/apply.png"}
            width={35}
            height={35}
            alt="icon"
            className="m-1"
          />

          <p>{"Apply For Loan"}</p>
        </div>{" "}
        <div className="flex justify-start items-center text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  text-gray-100  p-2 leading-8">
          <Image
            src={"/images/like.png"}
            width={35}
            height={35}
            alt="icon"
            className="m-1"
          />

          <p>{"Apply For Loan"}</p>
        </div>{" "}
        <div className="flex justify-start items-center text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl  text-gray-100  p-2 leading-8">
          <Image
            src={"/images/money.png"}
            width={35}
            height={35}
            alt="icon"
            className="m-1"
          />

          <p>{"Apply For Loan"}</p>
        </div>{" "}
      </section>
    </div>
  );
}
