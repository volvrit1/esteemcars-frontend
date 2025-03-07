import { lexendDeca } from "@/data/font";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
interface InfoCardProps {
  datas: {
    title: string;
    listContent: string[];
  }[];
}
interface data {
  title: string;
  listContent: string[];
}



export default function InfoCard({ datas }: InfoCardProps) {
  return (
    <div
      className={`max-w-7xl m-auto mt-6 sm:mt-0 md:p-4  lg:px-36 ${lexendDeca.className}`}
    >
      <div className="grid grid-cols-1  md:grid-cols-2 md:p-6 gap-6 text-gray-50">
        {datas &&
          datas.map((data: data, index: number) => (
            <div
              className="col-span-2 md:col-span-1 border p-1 md:min-h-[80vh] 2xl:min-h-[25vh]"
              key={index}
            >
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl  font-bold text-center text-gray-800 leading-7 mb-2 p-2 bg-[#FFA7A7]">
                {data.title}
              </h2>
              <ul className="list-inside list-disc p-4 md:px-10  ">
                {data?.listContent &&
                  data?.listContent.map((list: string, index: number) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-gray-50 mb-2"
                    >
                      {list}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <Link
          href="/about-us"
          className="col-span-2 w-full m-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center"
        >
          Learn More About Our Drone Systems{" "}
          <GoArrowUpRight width={20} height={20} className="ml-2" />{" "}
        </Link>
      </div>
    </div>
  );
}
