"use client";
import { Post } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function NewsLetter() {
  const [email, setEmail] = useState("");

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await Post(
        "/api/news-letter-email",
        { email, active: true },
        5000
      );
      if (res.success)
        toast.success("Subscribed successfully", { autoClose: 5000 });
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handelSubmit} className="mt-2">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className="w-full p-3 text-gray-100 text-xs rounded-xl bg-transparent border"
      />
      <button
        type="submit"
        className="w-full mt-2 p-2 bg-[#1262A1] text-white font-light rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
