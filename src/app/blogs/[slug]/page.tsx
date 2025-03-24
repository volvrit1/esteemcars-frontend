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
  console.log(slug);
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
    <div className="bg-transparent mt-[7rem] lg:mt-[10rem] font-[poppins]">
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
              blog?.coverImage !== 0
                ? process.env.NEXT_PUBLIC_BASE_URL + blog?.coverImage
                : "/assets/contact.png"
            }`}
            width={5000}
            height={3000}
            alt="Blog Banner"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold text-[#252525] mt-6">
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

        <div className="text-gray-700 leading-8">
          <p
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
            className="prose max-w-none font-[cabin]"
          ></p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#252525]">
            Latest Blogs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {blogsData &&
              blogsData?.map((blog: any, index: number) => (
                <div
                  key={index}
                  className="container mx-auto mb-4 lg:mb-0 lg:p-2 flex flex-col lg:flex-col items-center justify-between"
                >
                  <div className=" h-60 w-full flex justify-center rounded overflow-hidden ">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                        blog?.coverImage ?? "/"
                      }`}
                      alt="Explore Image"
                      width={800}
                      height={630}
                      className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                    />
                  </div>

                  <div className={` w-full mt-8 lg:mt-4 lg:text-left  `}>
                    <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal  text-gray-900 leading-7 mb-3">
                      {"Loan"}
                    </h2>
                    <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold text-gray-900 leading-7 mb-1">
                      {blog?.title}
                    </h2>
                    <Link
                      href={`/blogs/${blog?.slug}`}
                      className="mt-6 w-12 h-12 text-sm sm:text-base md:text-lg bg-transparent text-black rounded  border border-[#F75D34] transition flex justify-center items-center"
                    >
                      <IoIosArrowForward
                        width={18}
                        height={18}
                        className="font-thin"
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
