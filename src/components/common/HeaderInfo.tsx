import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function HeaderInfo() {
  return (
    <div className="w-full hidden lg:flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-2 lg:gap-y-0 p-3 lg:px-10 border-b-2 text-[#252525] bg-[#EDEDED] font-[poppins] ">
      <div className="flex flex-col lg:flex-row items-center justify-start w-1/3">
        <Link href={"mailto:infor@esteemfinance.co.nz"}>
          <div className="flex items-center space-x-2 lg:border-r-[1.5px] border-[#D8D8D8] pr-7">
            <IoMailOutline className="text-xl" />
            <span>Info@esteemfinance.co.nz</span>
          </div>
        </Link>
        <Link href={"tel:0210371229"}>
        <div className="flex items-center space-x-2 pl-7">
          <IoCallOutline className={"text-xl"} />
          <span>0210371229</span>
        </div>
        </Link>
      </div>
      <div className="text-center text-xs font-thin text-gray-900 font-[poppins]  ">
        <div className="flex space-x-4">
          <div className=" rounded-full border border-gray-900 p-2">
            <FaFacebookF className="text-gray-900 cursor-pointer" />
          </div>
          <div className=" rounded-full border border-gray-900 p-2">
            <FaX className="text-gray-900 cursor-pointer" />
          </div>
          <div className=" rounded-full border border-gray-900 p-2">
            <FaGoogle className="text-gray-900 cursor-pointer" />
          </div>
          <div className=" rounded-full border border-gray-900 p-2">
            <FaLinkedinIn className="text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
