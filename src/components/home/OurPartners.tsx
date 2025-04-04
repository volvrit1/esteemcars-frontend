"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners = () => {
  const clients = [
    { id: 1, name: "anz", logo: "/assets/client/client1.png" },
    { id: 2, name: "kiwi", logo: "/assets/client/client2.png" },
    { id: 3, name: "tsb", logo: "/assets/client/client3.png" },
    { id: 4, name: "westpac", logo: "/assets/client/client4.png" },
    { id: 5, name: "client5", logo: "/assets/client/client5.png" },
  ];

  // Duplicate the list to create a seamless effect
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative w-full overflow-hidden bg-white py-4">
      <div className="w-full lg:w-3/5 m-auto  text-center lg:p-14 relative">
        <h2 className="text-gray-900 text-2xl font-[alexandria] font-semibold mb-2">
          Proudly Serving Our Partners
        </h2>
        <p className="text-gray-700 font-[cabin]">
          A hassle free and smooth process designed to help you get the car you
          want{" "}
        </p>
        <Image
          priority
          src="/assets/leftspring.png"
          alt="Wave Decoration"
          width={1920} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="w-20 h-auto absolute hidden md:inline-block top-20 left-0 z-10"
        />
        <Image
          priority
          src="/assets/rightspring.png"
          alt="Wave Decoration"
          width={1920} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="w-20 h-auto absolute hidden md:inline-block top-20 right-0 z-10"

        />
      </div>
      <div className="relative flex w-full">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-50%"], // Moves the entire container by 50%
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 15, // Adjust the speed of the scroll here
          }}
        >
          {/* First scrollable row */}
          <div className="flex space-x-6">
            {repeatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-28 w-28 rounded-lg overflow-hidden"
              >
                <Image
                  src={client.logo}
                  width={300}
                  height={100}
                  alt={`Client ${client.name}`}
                  className="object-cover h-28 w-28 scale-125 p-2"
                />
              </div>
            ))}
          </div>

          {/* Second identical row to make the loop seamless */}
          <div className="flex space-x-6">
            {repeatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-28 w-28 rounded-lg overflow-hidden"
              >
                <Image
                  src={client.logo}
                  width={300}
                  height={100}
                  alt={`Client ${client.name}`}
                  className="object-cover h-28 w-28 scale-125 p-2"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
