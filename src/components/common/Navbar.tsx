"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { TbArrowRightToArc } from "react-icons/tb";
import { inter } from "@/data/font";
import LoginModal from "./Login";
import SignUpModal from "./SignUp";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Why Us", path: "/why-us" },
    { name: "Solution", path: "/solution" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav
      className={`bg-black flex justify-between px-4 lg:px-0 lg:justify-evenly items-center h-28 absolute top-0 z-[1000] w-full ${inter.variable}`}
    >
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={150}
            height={70}
            alt="sky field"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-between items-center w-3/5 text-gray-50">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="border-none outline-none"
          >
            <li
              className={`mr-10 text-sm font-['inter'] ${
                pathname === item.path
                  ? "border-b-2 border-gray-50 text-gray-100 font-bold"
                  : "text-gray-300 hover:text-gray-100 transition duration-200"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="text-right">
        <MobileMenu />
        <Link
          href={""}
          onClick={() => setLoginOpen(true)}
          className="hidden lg:flex justify-center items-center border rounded-lg text-sm  border-gray-50 px-5 py-2 text-gray-50"
        >
          Signup/Login
          <TbArrowRightToArc width={16} height={16} className="" />
        </Link>
      </div>
      <LoginModal
        isOpen={loginOpen}
        setSignUpOpen={setSignUpOpen}
        onClose={() => setLoginOpen(false)}
      />
      <SignUpModal
        isOpen={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        setLoginOpen={setLoginOpen}
      />
    </nav>
  );
};

export default Navbar;
