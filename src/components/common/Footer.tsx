"use client";

declare global {
  interface Window {
    CreateWhatsappChatWidget?: (options: any) => void;
  }
}
import Image from "next/image";
import React, { useEffect } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import NewsLetter from "./NewsLetter";
import Link from "next/link";
import { FaLocationPin, FaX } from "react-icons/fa6";
import { IoCallOutline, IoLocateOutline, IoMailOutline } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?8546";

    script.onload = () => {
      const options = {
        enabled: true,
        chatButtonSetting: {
          backgroundColor: "#00e785",
          ctaText: "Chat with us",
          borderRadius: "25",
          marginLeft: "0",
          marginRight: "20",
          marginBottom: "20",
          ctaIconWATI: false,
          position: "right",
        },
        brandSetting: {
          brandName: "Esteem Finance",
          brandSubTitle: "undefined",
          brandImg: "https://esteemfinance.co.nz/assets/esteemfinallogo.pngg",
          welcomeText: "Hi there!\nHow can I help you?",
          messageText: "Hello",
          backgroundColor: "#00e785",
          ctaText: "Chat with us",
          borderRadius: "25",
          autoShow: false,
          phoneNumber: "64210339373",
        },
      };
      // Make sure CreateWhatsappChatWidget is available before calling
      if (typeof window.CreateWhatsappChatWidget === "function") {
        window.CreateWhatsappChatWidget(options);
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-black text-white relative font-[poppins]">
      <div className="container mx-auto p-4 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-6 py-6">
          {/* Logo & description */}
          <div className="col-span-2">
            <div className="mb-4">
              <Image
                src="/assets/esteemfinallogo.png"
                width={200}
                height={90}
                alt="Sky Field"
              />
            </div>
            <p className="text-gray-300 mt-2 mb-4 text-base lg:text-sm">
              Esteem Finance offers reliable, affordable vehicles with flexible
              financing options and nationwide delivery services.
            </p>
            <h2>Follow Us</h2>
            <div className="flex space-x-4 mt-4">
              <div className="rounded-full border border-gray-50 p-2">
                <FaFacebookF className="text-white cursor-pointer" />
              </div>
              <div className="rounded-full border border-gray-50 p-2">
                <FaX className="text-white cursor-pointer" />
              </div>
              <div className="rounded-full border border-gray-50 p-2">
                <FaGoogle className="text-white cursor-pointer" />
              </div>
              <div className="rounded-full border border-gray-50 p-2">
                <FaLinkedinIn className="text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-2 lg:pl-24">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="mt-2 space-y-5 text-base lg:text-sm text-gray-300 font-thin font-[cabin]">
              <Link href="/" className="mb-2 block">
                <li>Home</li>
              </Link>
              <Link href="/why-us" className="mb-2 block">
                <li>Why Us</li>
              </Link>
              <Link href="/solution" className="mb-2 block">
                <li>Solution</li>
              </Link>
              <Link href="/blogs" className="mb-2 block">
                <li>Blogs</li>
              </Link>
              <Link href="/contact-us" className="mb-2 block">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1 hidden">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="mt-2 space-y-5 text-gray-300 text-base lg:text-sm font-thin font-[cabin]">
              <li>Getting Started</li>
              <li>Help Center</li>
              <li>Track Update</li>
              <li>Chat Support</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="mt-2 space-y-2 text-xs font-thin font-[cabin] text-gray-300">
              <div className="flex items-center space-x-2">
                <IoMailOutline className="text-xl" />
                <Link href="mailto:info@esteemfinance.co.nz">
                  <span className="text-base">info@esteemfinance.co.nz</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <IoCallOutline className="text-xl" />
                <Link href="tel:0210371229">
                  <span className="text-base">0210371229</span>
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                <TiLocationOutline className="text-2xl" />
                <Link href="tel:0210371229">
                  <span className="text-base">
                    {" "}
                    13 Binsted Road, New Lynn, Auckland 0600
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2">
            <h3 className="text-xl lg:text-lg font-light">Newsletter</h3>
            <NewsLetter />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-700 py-4 text-center flex flex-col lg:flex-row justify-between text-gray-100">
          <span className="text-sm mb-2 lg:mb-0">
            Copyright 2025, ESTEEM FINANCE
          </span>
          <p className="text-sm">
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
