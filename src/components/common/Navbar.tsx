"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { TbArrowRightToArc } from "react-icons/tb";
import { inter } from "@/data/font";
import LoginModal from "./Login";
import SignUpModal from "./SignUp";
import Modal from "./Modal";
import HeaderInfo from "./HeaderInfo";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState<any>("");
  const tokenExist =
    typeof window !== "undefined" && localStorage.getItem("token");
  const handelLogout = () => {
    setIsLogin(false);
    setLoginOpen(false);
    setSignUpOpen(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token);
    }
  }, [tokenExist]);

  // Define the menuItems array
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Why Us", path: "/why-us" },
    { name: "Solution", path: "/solution" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Conditionally add "Account" as an object to the menuItems array if the token exists
  // if (token) {
  //   menuItems.push({ name: "Account", path: "/account" });
  // }

  return (
    <div className=" w-full h-auto font-[poppins] fixed top-0 z-[10000]">
      <HeaderInfo />
      <nav
        className={`bg-[#EDEDED] shado flex justify-between pr-4 lg:px-0 lg:justify-evenly items-center h-24 lg:h-[95px] w-full ${inter.variable} `}
      >
        <div >
          <Link href={"/"} >
            <Image
              src={"/assets/logo.png"}
              width={1600}
              height={1600}
              alt="sky field"
              className="w-40 h-32"
            />
          </Link>
        </div>
        <span className="h-3/5 w-[1px] bg-gray-500 hidden lg:block "></span>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-evenly items-center  w-3/5 text-gray-500">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="border-none outline-none"
            >
              <li
                className={`text-lg font-['inter'] flex-justify-center items-center ${
                  pathname === item.path
                    ? "border-b-2 border-[#1262A1] text-[#1262A1] font-bold"
                    : "text-gray-900 hover:text-[#1262A1] transition duration-200"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <span className="h-3/5 w-[1px] bg-gray-500 hidden lg:block "></span>
        <div className="text-right">
          <MobileMenu />

          <Link
            href={"/apply-loan"}
            className="hidden lg:flex justify-center items-center rounded-lg text-sm  bg-[#1262A1] px-16 py-3 text-gray-50"
          >
            {"Apply Now"}
          </Link>

          <Link
            href={""}
            onClick={() => {
              token ? setIsLogin(true) : setSignUpOpen(true);
            }}
            className="hidden justify-center items-center border rounded-lg text-sm  border-gray-50 px-5 py-2 text-gray-50"
          >
            {token ? "Log Out" : "Signup/Log In"}
            <TbArrowRightToArc width={16} height={16} className="ml-2" />
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

        {isLogin && (
          <Modal
            isVisible={isLogin}
            width="w-[90%] md:w-1/2 lg:w-1/3"
            onClose={() => setIsLogin(false)}
          >
            <div className="text-black">
              <h2 className="text-2xl mb-4 text-center">
                Are you sure want to log out?
              </h2>
              <div className="flex justify-between items-center gap-4  border-b border-gray-50 h-20">
                <button
                  className="p-2 px-5 w-1/2 bg-gray-400 rounded btn text-gray-50 outline-none hover:bg-gray-300"
                  onClick={() => setIsLogin(false)}
                >
                  No
                </button>
                <button
                  className="p-2 px-5 w-1/2 bg-blue-500 rounded btn text-gray-50 outline-none hover:bg-blue-400"
                  onClick={handelLogout}
                >
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
