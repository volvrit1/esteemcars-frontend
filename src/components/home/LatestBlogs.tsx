import { getBlogData } from "@/utils/server";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const LatestBlogs = async () => {
  const { data } = await getBlogData();
  console.log(data);
  const fallbackData = [
    {
      name: "BY JOHN DOE",
      title: "Secured vs. Unsecured Car Loans: Which is Right for You?",
      description: "Explains the difference between these types of loan...",
      image: "/assets/profile1.png",
      date: "01 MARCH 2025",
    },
    {
      name: "BY JOHN WICK",
      title: "Car Loans for Bad Credit: Options and Strategies?",
      description:
        "Lists required documents and provides tips for organizing them...",
      image: "/assets/profile2.png",
      date: "02 MARCH 2025",
    },
    {
      name: "BY MARISSA CHOU",
      title: "What Documents Do I Need for a Car Loan Application?",
      description:
        "Lists required documents and provides tips for organizing them...",
      image: "/assets/profile3.png",
      date: "02 MARCH 2025",
    },
    {
      name: "BY ROBERT WILLIAM",
      title: "Car Loan Pre-Approval: What It Is and Why You Need It?",
      description: "Explain the benefits of pre-approval...",
      image: "/assets/profile4.png",
      date: "10 MARCH 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4 lg:pt-16">
      <div className="m-auto lg:w-full text-center lg:px-24 py-10 lg:mb-4 ">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold text-center font-[poppins] text-[#252525] leading-7">
          {"Latest Blogs "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data &&
          data?.map((data: any, index: number) => (
            <Link key={index} href={`/blogs/${data?.slug}`}>
              <div key={index} className="container overflow-hidden">
                <div className="text-gray-900  py-4 flex justify-start w-full ">
                  <div className="flex items-center justify-start text-gray-400 text-xs font-[poppins]">
                    {data?.date
                      ? dayjs(data?.date).format("DD MMMM YYYY")
                      : "02 MARCH 2025"}
                  </div>
                </div>
                <div className="">
                  <h2 className="text-lg sm:text-lg md:text-lg lg:text-base xl:text-base font-[poppins] font-bold text-[#252525] leading-7 mb-4">
                    {data?.title ||
                      "Car Loans for Bad Credit: Options and Strategies?"}
                  </h2>
                  <p className="text-sm font-[cabin] text-[#7d7d7d]">
                    {data?.description ||
                      "Addresses the challenges of bad credit and explores available loan options..."}
                  </p>
                </div>
                {/* Text Section */}

                <div className="w-full mt-8 lg:mt-4 lg:text-center border-t-2 flex items-center gap-4 py-4">
                  <Image
                    src={`${
                      data?.coverImage
                        ? process.env.NEXT_PUBLIC_BASE_URL + data?.coverImage
                        : "/assets/profile.png"
                    }`}
                    alt={"image"}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-[poppins] font-normal  line-clamp-4 text-[#252525]  leading-7 uppercase">
                      {data?.author || "BY JOHN WICK"}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

// Revalidate every 3 minutes (180 seconds)
export const revalidate = 180; // 3 minutes revalidation time

export default LatestBlogs;
