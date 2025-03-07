import React from "react";

export default function OpenHour() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-2 border-b-2 b bg-gray-950 border-r-gray-50">
      <div className="text-center text-lg font-semibold ">Opening Hours</div>
      <div className="text-center text-sm text-gray-100 ">
        Monday to Friday - 09:30 AM - 06:00 PM | Saturday & Sunday - 10:30 AM -
        03:30 PM
      </div>
    </div>
  );
}
