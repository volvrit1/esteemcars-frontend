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
              <div key={index} className="flex-shrink-0 h-28 w-28 rounded-lg overflow-hidden">
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
              <div key={index} className="flex-shrink-0 h-28 w-28 rounded-lg overflow-hidden">
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
