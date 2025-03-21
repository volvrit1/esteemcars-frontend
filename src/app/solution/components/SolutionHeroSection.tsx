import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SolutionHeroSection() {
  return (
    <div className="mt-[7rem] lg:mt-[10rem]">
      <section className="relative w-full h-[20vh] md:h-[60vh] lg:h-screen ">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/banner1.svg')" }}
        ></div>
      </section>
    </div>
  );
}
