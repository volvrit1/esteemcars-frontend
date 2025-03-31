"use client";

// components/TrustedClientsGridCarousel.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners = () => {
  const clients = [
    { id: 1, name: "anz", coverImage: "", logo: "/assets/client/client1.png" },
    { id: 2, name: "kiwi", coverImage: "", logo: "/assets/client/client2.png" },
    { id: 3, name: "tsb", coverImage: "", logo: "/assets/client/client3.png" },
    { id: 4, name: "westpac", coverImage: "", logo: "/assets/client/client4.png" },
    { id: 4, name: "", coverImage: "", logo: "/assets/client/client5.png" },

  ];

  return (
    <section className="relative  w-full m-auto text-[#252525]">
      <div className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:py-4 w-full  m-auto border-gray-600">
        <div className="relative flex overflow-hidden  m-auto">
          <motion.div
            className="flex space-x-0 lg:space-x-6 gap-0"
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
                <div key={index} className="flex-shrink-0 h-28 w-28 rounded-lg overflow-hidden">
                  <Image
                    src={client?.logo}
                    width={300}
                    height={100}
                    alt={`Client ${index + 1}`}
                    className="object-cover h-28 w-28 scale-125 p-2"
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
