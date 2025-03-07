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
              <li>Home</li>
              <li>About Us</li>
              <li>Vehicles</li>
              <li>Finance</li>
              <li>Contact Us</li>
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
            <div className="mt-2">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-2 text-black text-xs rounded-2xl bg-transparent border"
              />
              <button className="w-full mt-2 p-2 bg-[#1262A1] text-white font-light rounded-lg">
                Submit
              </button>
            </div>
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
