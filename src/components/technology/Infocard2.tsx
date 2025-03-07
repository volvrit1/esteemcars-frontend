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
export default function InfoCard2({ datas }: InfoCardProps) {
  return (
    <div
      className={`max-w-7xl m-auto mt-6 md:mt-0 md:p-4  ${
        datas.length === 2 ? "lg:px-36" : "lg:px-[2.5rem]"
      } ${lexendDeca.className}`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-3 md:p-6 md:gap-6 text-gray-50`}
      >
        {datas &&
          datas.map((data: data, index: number) => (
            <div
              className="col-span-2 md:col-span-1 mb-4 md:mb-0 border p-1 md:min-h-[60vh] 2xl:min-h-[20vh]"
              key={index}
            >
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl  font-bold text-center text-gray-800 leading-7 mb-2 p-2 bg-[#FFA7A7]">
                {data.title}
              </h2>
              <ul className="list-inside list-disc p-2 md:p-4 md:px-10  ">
                {data?.listContent &&
                  data?.listContent.map((list: string, index: number) => (
                    <li
                      key={index}
                      className={`text-sm sm:text-base md:text-base ${
                        datas.length === 2
                          ? "lg:text-lg xl:text-lg"
                          : "lg:text-sm xl:text-sm"
                      }  text-gray-50 mb-3`}
                    >
                      {list}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <Link
          href="/about-us"
          className={` col-span-2 ${
            datas.length === 2 ? "col-span-2" : "col-span-3"
          } w-full m-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center`}
        >
          Explore TectiTech Command{" "}
          <GoArrowUpRight width={20} height={20} className="ml-2" />{" "}
        </Link>
      </div>
    </div>
  );
}
