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

const Footer = () => {
  return (
    <div className="bg-black text-white relative">
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}></div> */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/images/footer.mp4" type="video/mp4" />
      </video>
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
            <p className="text-gray-400 mt-2">
              It is a long established fact that a reader will be distracted by
              the.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-white cursor-pointer" />
              <FaGoogle className="text-white cursor-pointer" />
              <FaLinkedinIn className="text-white cursor-pointer" />
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-3 text-xs text-gray-300 font-thin">
              <Link href={"/"} className="mb-2 block">
                <li>Home</li>
              </Link>
              <Link href={"/why-us"}  className="mb-2 block">
                <li>Why Us</li>
              </Link>
              <Link href={"/solution"}  className="mb-2 block">
                <li>Solution</li>
              </Link>
              <Link href={"/blogs"}  className="mb-2 block">
                <li>Blogs</li>
              </Link>
              <Link href={"/contact-us"} className="mb-2 block">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-3 text-gray-300 text-xs font-thin">
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
                <FaEnvelope />
                <span>sales@esteemcars.co.nz</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>02254 33333 (Bunny)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>022 1223133 (Faraz)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>027 3221 434 (Rasleen)</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-light">Newsletter</h3>
            <NewsLetter />
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 py-4 text-center flex justify-between text-gray-400">
          <span>Copyright 2025, ESTEEM Cars</span>
          <p>
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
