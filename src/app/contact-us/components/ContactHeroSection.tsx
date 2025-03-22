import { getBanners } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactHeroSection = async () => {
  const { data } = await getBanners("contact");
  console.log(data);
  return (
    <div className="mt-[7rem] lg:mt-[10rem]">
      <section className="relative w-full h-[20vh] md:h-[60vh] lg:h-screen ">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              data?.length !== 0
                ? process.env.NEXT_PUBLIC_BASE_URL + data[0].image
                : "/assets/contact.png"
            })`,
          }}
        ></div>
      </section>
    </div>
  );
};

export default ContactHeroSection;
