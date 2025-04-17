import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function HeaderInfo() {
  return (
    <div className="w-full bg-gray-700 hidden lg:flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-2 lg:gap-y-0 p-2 lg:px-10 border-b-2 text-[#252525]  font-[poppins] ">
      <div className="flex flex-col lg:flex-row items-center justify-start w-1/3 text-gray-50">
        <Link href={"mailto:info@esteemfinance.co.nz"}>
          <div className="flex items-center space-x-2 lg:border-r-[1.5px] border-[#D8D8D8] pr-7">
            <IoMailOutline className="text-xl" />
            <span>info@esteemfinance.co.nz</span>
          </div>
        </Link>
        <Link href={"tel:0210371229"}>
          <div className="flex items-center space-x-2 pl-7">
            <IoCallOutline className={"text-xl"} />
            <span>0210371229</span>
          </div>
        </Link>
      </div>
      <div className="text-center text-xs font-thin text-gray-50 font-[poppins]  ">
        <div className="flex space-x-4">
          <Link target="blank" href={"https://www.facebook.com/esteemfinance.co.nz"}>
            <div className=" rounded-full border border-gray-50 p-2">
              <FaFacebookF className="text-gray-50 cursor-pointer" />
            </div>
          </Link>
          <Link target="blank" href={"https://www.instagram.com/esteemfinance/"}>
            <div className=" rounded-full border border-gray-50 p-2">
              <FaInstagram className="text-gray-50 cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
