"use client";

// components/TrustedClientsGridCarousel.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners = () => {
  const clients = [
    { id: 1, name: "Android", coverImage: "", logo: "/images/client1.png" },
    { id: 2, name: "Kotlin", coverImage: "", logo: "/images/client2.png" },
    { id: 3, name: "FireStore", coverImage: "", logo: "/images/client3.png" },
    { id: 4, name: "Java", coverImage: "", logo: "/images/client4.png" },
  ];

  return (
    <section className="relative  w-full m-auto  bg-gray-50 text-[#252525]">
      <div className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:py-4 w-full  m-auto border-gray-600">
        <div className="relative flex overflow-hidden  m-auto">
          <motion.div
            className="flex space-x-6 gap-10"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...clients, ...clients, ...clients, ...clients, ...clients].map(
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
