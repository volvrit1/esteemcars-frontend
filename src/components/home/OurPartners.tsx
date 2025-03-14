"use client";

// components/TrustedClientsGridCarousel.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISection } from "@/utils/server";

const OurPartners = ({ sectionData }: { sectionData?: ISection }) => {
  let clients = [
    { id: 1, name: "Android", coverImage: "", logo: "/images/client1.png" },
    { id: 2, name: "Kotlin", coverImage: "", logo: "/images/client2.png" },
    { id: 3, name: "FireStore", coverImage: "", logo: "/images/client3.png" },
    { id: 4, name: "Java", coverImage: "", logo: "/images/client4.png" },
  ];

  return (
    <section className="py-12 relative max-w-7xl m-auto p-4 lg:p-14 lg:py-8 bg-white text-gray-800">
      <div className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:py-4 lg:w-full  m-auto border border-gray-600">
        <div className="p-4">
          <h2 className="font-semibold">
            Trusted by over 100+ <br /> businesses worldwide!
          </h2>
        </div>
        <div className="relative flex overflow-hidden max-w-screen-xl ml-auto lg:w-3/5">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...clients, ...clients, ...clients, ...clients].map(
              (client, index) => (
                <div key={index} className="flex-shrink-0 w-16 h-16 rounded-lg">
                  <Image
                    src={client?.logo}
                    width={300}
                    height={100}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
