import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CreditScore() {
  return (
    <div className="max-w-7xl m-auto w-full py-10 lg:py-0 lg:min-h-[85vh] 2xl:min-h-0">
      <div className="lg:w-4/5 m-auto text-center  p-4 lg:p-8 bg-opacity-80">
        <h2 className=" m-auto text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#252525] leading-7 font-[poppins] ">
          {"Best Car Loans Offers On Your"}
          {" Credit Score"}
        </h2>
        <p className="text-base sm:text-base md:text-sm lg:text-sm xl:text-base font-medium font-[cabin] line-clamp-4 md:line-clamp-none text-gray-500 lg:px-10 mt-4 ">
          {
            "With  Esteem Finance Car Loans, you can obtain the most suitable loan quotes that are customized to your credit score. We have a couple of lenders that we utilize in a bid to give you the best deal."
          }
        </p>
      </div>
      <div className=" w-full h-[70vh] 2xl:h-auto  lg:px-20 top-0 inset-0 flex justify-center items-center  bg-[url('/images/creditScore.jpeg')] bg-fill bg-no-repeat lg:bg-cover bg-right lg:bg-center">
        <ul className="lg:w-1/2 mr-auto font-[poppins] p-4 ">
          <li className="mb-4 text-base font-normal flex lg:pr-10">
            <FaCheckCircle className="text-4xl mr-4 font-bold text-white" /> A
            civil score reflects your creditworthiness, helping lenders assess
            your ability to repay loans based on your financial history and
            behavior.
          </li>
          <li className="mb-4 text-base font-normal flex lg:pr-10">
            <FaCheckCircle className="text-4xl mr-4 font-bold text-white" />{" "}
            Regularly paying bills on time, reducing debt, and avoiding defaults
            can significantly improve your civil score, making it easier to
            access loans at better rates.
          </li>
          <li className="mb-4 text-base font-normal flex lg:pr-10">
            <FaCheckCircle className="text-4xl mr-4 font-bold text-white" />{" "}
            Your civil score plays a crucial role in loan approvals. A higher
            score increases your chances of receiving faster approvals and
            favorable terms for loans and credit.
          </li>
        </ul>
      </div>
    </div>
  );
}
