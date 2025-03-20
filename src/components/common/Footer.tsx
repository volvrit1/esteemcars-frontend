import { Post } from "@/utils/api";
import Image from "next/image";
import React from "react";
import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import NewsLetter from "./NewsLetter";
import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TiPhoneOutline } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-black text-white relative">
      <div className="container mx-auto p-4 lg:px-16  relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 py-6">
          <div className="col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                width={170}
                height={80}
                alt="Sky Field"
              />
            </div>
            <p className="text-gray-400 mt-2 mb-4">
              Esteem Cars offers reliable, affordable vehicles with flexible
              financing options and nationwide delivery services.
            </p>
            <h2>Follow Us</h2>
            <div className="flex space-x-4 mt-4">
              <div className=" rounded-full border border-gray-50 p-2">
                <FaFacebookF className="text-white cursor-pointer" />
              </div>
              <div className=" rounded-full border border-gray-50 p-2">
                <FaX className="text-white cursor-pointer" />
              </div>
              <div className=" rounded-full border border-gray-50 p-2">
                <FaGoogle className="text-white cursor-pointer" />
              </div>
              <div className=" rounded-full border border-gray-50 p-2">
                <FaLinkedinIn className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="mt-2 space-y-5 text-xs text-gray-300 font-thin">
              <Link href={"/"} className="mb-2 block">
                <li>Home</li>
              </Link>
              <Link href={"/why-us"} className="mb-2 block">
                <li>Why Us</li>
              </Link>
              <Link href={"/solution"} className="mb-2 block">
                <li>Solution</li>
              </Link>
              <Link href={"/blogs"} className="mb-2 block">
                <li>Blogs</li>
              </Link>
              <Link href={"/contact-us"} className="mb-2 block">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="mt-2 space-y-5 text-gray-300 text-xs font-thin">
              <li>Getting Started</li>
              <li>Help Center</li>
              <li>Track Update</li>
              <li>Chat Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="mt-2 space-y-2 text-xs font-thin text-gray-300">
              <div className="flex items-center space-x-2">
                <IoMailOutline className="text-xl" />
                <span>Infor@esteemfinance.co.nz</span>
              </div>
              <div className="flex items-center space-x-2">
                <TiPhoneOutline  className={'text-xl rotate-90'} />
                <span>0210371229</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-light">Newsletter</h3>
            <NewsLetter />
          </div>
        </div>
        <div className="border-t border-gray-700 py-4 text-center flex justify-between text-gray-400">
          <span className="text-xs">Copyright 2025, ESTEEM Cars</span>
          <p className="text-xs">
            All Rights Reserved |{" "}
            <a href="#" className="text-orange-500">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="text-orange-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
