"use client";

import { getBlogData, getBlogSlugData } from "@/utils/server";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import DOMPurify from "dompurify";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  const { slug } = useParams(); // ✅ Get slug from dynamic route
  const [loadingBlogList, setLoadingBlogList] = useState(true);
  const [loading, setLoading] = useState();
  const [blogsData, setBlogsData] = useState<any>();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data }: any = await getBlogData();
      setBlogsData(data);
      if (loading) {
        setLoading(loading);
      }
    };
    fetchBlog();
  }, []);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      const { blogPageSlugData } = await getBlogSlugData(slug);
      try {
        setLoadingBlogList(true);
        setBlog(blogPageSlugData?.[0]);
      } catch (error) {
        console.log("Error fetching blog:", error);
      } finally {
        setLoadingBlogList(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loadingBlogList)
    return (
      <div className="mt-[10rem] p-4 lg:p-16">
        <div className="m-auto max-w-6xl rounded-md border w-full border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (!blog) return <p>No blog found.</p>;

  const cleanHTML = DOMPurify.sanitize(blog?.content); // Sanitize HTML

  return (
    <div className="bg-transparent mt-[5.7rem] lg:mt-[9rem] font-[poppins]">
      <div className="max-w-7xl lg:max-w-6xl m-auto p-4 lg:py-4">
        <div className="text-gray-700 mb-4 ">
          <Link href={"/blogs"} className="text-blue-600">
            <span>Blogs</span>
          </Link>
          {" / "}
          <span>{slug}</span>
        </div>
        <div className="mb-4">
          <Image
            src={`${
              blog?.coverImage
                ? process.env.NEXT_PUBLIC_BASE_URL + blog?.coverImage
                : "/assets/contact.png"
            }`}
            width={5000}
            height={3000}
            alt="Blog Banner"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h1 className="text-xl lg:text-3xl font-bold text-[#252525] mt-6">
            {blog?.title || "Blog Title"}
          </h1>
          <p className="text-[#7d7d7d] text-sm mt-2">
            By{" "}
            <span className="font-semibold">
              {blog?.author || "Author Name"}
            </span>{" "}
            | Published on{" "}
            <span className="font-semibold">
              {dayjs(blog?.date).format("DD/MM/YYYY")}
            </span>
          </p>
        </div>

        <div className="text-gray-700 leading-7">
          <p
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
            className="prose max-w-none font-[cabin]"
          ></p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl mb-4 font-semibold text-[#252525]">
            Latest Blogs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogsData &&
              blogsData?.map((blog: any, index: number) => (
                <Link href={`/blogs/${blog?.slug}`} key={index}>
                  <div className="container mx-auto lg:p-2 flex flex-col lg:flex-col items-center justify-between">
                    <div className="relative h-60 w-full flex justify-center rounded overflow-hidden ">
                      <Image
                        src={`${
                          blog?.coverImage
                            ? process.env.NEXT_PUBLIC_BASE_URL +
                              blog?.coverImage
                            : "/assets/carimg.png"
                        }`}
                        alt="Explore Image"
                        width={800}
                        height={630}
                        className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                      />
                      <div className="absolute top-4 left-4 flex itece justify-start gap-4">
                        <h2 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs font-[alexandria] rounded font-normal  line-clamp-4 leading-7 border bg-blue-900/70 text-white inline-block p-2 uppercase">
                          {blog?.author || "BY JOHN WICK"}
                        </h2>
                      </div>
                    </div>

                    <div className={` w-full mt-8 lg:mt-4 lg:text-left  `}>
                      <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-justify font-semibold text-gray-800 line-clamp-2 leading-7 mb-1">
                        {blog?.title}
                      </h2>
                    </div>
                    <div className="text-gray-900  p-1 flex justify-start w-full ">
                      <div className="flex items-center justify-start text-gray-700 text-sm font-[poppins]">
                        {blog?.date
                          ? dayjs(blog?.date).format("MMMM DD YYYY")
                          : "02 MARCH 2025"}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
