import Image from "next/image";
import React from "react";

export default function ContactDetails() {
  const clients = [
    {
      id: 1,
      name: "Office Address",
      desc: "33 Ha’tasiya Ave, Haifa Israel, 3296024",
      logo: "/images/location.png",
    },
    {
      id: 2,
      name: "Contact",
      desc: " (+972) 4834 6078",
      logo: "/images/call.png",
    },
    {
      id: 3,
      name: "Contact",
      desc: " info@skyfield.com",
      logo: "/images/email.png",
    },
  ];
  return (
    <div className="relative z-10 py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center h-64 border-[1.5px] border-gray-900 p-6`}
          >
            <Image
              src={client.logo || "/images/email.png"}
              width={40}
              height={40}
              alt={`Client ${index + 1}`}
              className="w-20 h-20 object-contain p-2"
            />
            <p className="mt-2 text-lg font-semibold text-center text-gray-800">
              {client.name}
            </p>
            <p className="mt-2 text-sm font-semibold text-center text-gray-500">
              {client.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
