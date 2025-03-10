import { getBlogData } from "@/utils/server";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {
  const [blogs, setBlogs] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const { data }: any = await getBlogData(); // ✅ Fetch latest blogs
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // ✅ Runs only once

  const datas = [
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/roadtree.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/trees.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/ocean.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/roadtree.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/trees.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/ocean.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 ">
        {blogs &&
          blogs?.map((data: any, index: number) => (
            <div
              key={index}
              className="container mx-auto  lg:p-4 mb-6 flex flex-col lg:flex-col items-center justify-between"
            >
              <div className=" h-80  w-full flex justify-center">
                <Image
                  src={data?.image || "/images/pro1.png"} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              <div className={` w-full mt-8 lg:mt-4 lg:text-left  `}>
                <h2 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-normal tracking-widest text-gray-800 leading-7 mb-3">
                  {"Popular"}
                </h2>
                <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-gray-800 leading-7 mb-2">
                  {data?.title}
                </h2>
                <p className="text-gray-800 text-xs mb-4">
                  {dayjs(data?.date).format("DD/MM/YYYY")}
                </p>
                <Link
                  href={`/blogs/${data?.slug}`}
                  className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-gray-800 border-gray-900 rounded-none shadow-md border transition flex justify-center items-center hover:text-blue-700"
                >
                  Read More{" "}
                  <GoArrowUpRight width={20} height={20} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
