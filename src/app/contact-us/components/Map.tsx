import React from "react";

export default function Map() {
  return (
    <div className="relative w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12763.271644964827!2d174.67997127552943!3d-36.89470411218473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d46cf3105d35f%3A0x78390d6b31f5df1b!2s42%20Rosebank%20Road%2C%20Avondale%2C%20Auckland%201026%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1742550462728!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
}
