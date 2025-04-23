import React from "react";

export default function Map() {
  return (
    <div className="relative w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5005899008834!2d174.68015737481164!3d-36.9022938824968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4149a65ff2d1%3A0x4767465e96c27a59!2s13%20Binsted%20Road%2C%20New%20Lynn%2C%20Auckland%200600%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1745389374989!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border:"0"}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
}
