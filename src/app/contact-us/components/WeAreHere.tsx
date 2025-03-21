import Link from "next/link";
import React, { JSX } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

type ContactItem = {
  unit: string;
  value: string;
  icon: JSX.Element;
  link: string;
};

export default function WeAreHere() {
  const contactData: ContactItem[] = [
    {
      unit: "Phone Number",
      value: "0210371229",
      icon: <IoCallOutline />,
      link: "tel:0210371229",
    },
    {
      unit: "Email",
      value: "info@esteemfinance.co.nz",
      icon: <IoMailOutline />,
      link: "mailto:info@esteemfinance.co.nz",
    },
    {
      unit: "Location",
      value: "42 Rosebank Road, Avondale, Auckland, 1026",
      icon: <CiLocationOn />,
      link: "#",
    },
    {
      unit: "Location",
      value: "31 Tironui Road, Takanini, Takanini, 2112",
      icon: <CiLocationOn />,
      link: "#",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto  relative overflow-hidden p-4 lg:p-16 lg:pb-0">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="lg:w-3/5 m-auto text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-center text-[#252525] leading-7 font-[poppins]">
          {"We Are Here For You"}
        </h2>
        <p className=" text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm line-clamp-4 md:line-clamp-none text-[#7d7d7d] py-4  text-center  leading-8 mb-4">
          {
            "We are here for you! If you have any questions or need assistance, don’t hesitate to reach out to us. We’re always ready to help!"
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4">
        {contactData.map((data, index) => (
          <Link href={data?.link} key={index}>
            <div
              key={index}
              className="text-gray-900 flex flex-col justify-start items-center gap-y-4 "
            >
              <div className="rounded-2xl border border-[#1262A1] text-[#1262A1] w-20 h-20 flex justify-center items-center p-4 text-3xl">
                {data.icon}
              </div>
              <h2 className="text-[#7d7d7d]">{data.unit}</h2>
              <h3 className="text-center">{data.value}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
