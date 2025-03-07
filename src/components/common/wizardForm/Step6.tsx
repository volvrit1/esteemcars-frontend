// import { countries } from "@/data/data";
// import Image from "next/image";
// import React from "react";
// import {
//   FaCarSide,
//   FaDollarSign,
//   FaFileInvoice,
//   FaRegAddressCard,
//   FaRegHandshake,
//   FaShuttleVan,
//   FaTruckMonster,
// } from "react-icons/fa";
// import { FaCalendarDays } from "react-icons/fa6";
// import { ImArrowRight } from "react-icons/im";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { TiUser } from "react-icons/ti";

// export default function Step1({
//   nextStep,
//   prevStep,
//   handleChange,
//   formData,
// }: any) {
//   return (
//     <div className="min-w-[70vw]">
//       <h2 className="text-xl font-bold">
//         Are you a New Zealand citizen or resident?
//       </h2>

//       <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 px-0 text-gray-200 mx-auto">
//         {/* Radio Buttons */}
//         <div className="flex justify-start items-center lg:col-span-3">
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               name="nzCitizenOrResident"
//               value="Yes"
//               required
//               checked={formData.nzCitizenOrResident === "Yes"}
//               onChange={handleChange}
//             />

//             <div className="text-white font-semibold p-8 uppercase">Yes</div>
//           </label>

//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               name="nzCitizenOrResident"
//               value="No"
//               required
//               checked={formData.nzCitizenOrResident === "No"}
//               onChange={handleChange}
//             />
//             <div className="text-white font-semibold p-8 uppercase">No</div>
//           </label>
//         </div>

//         {formData?.nzCitizenOrResident === "No" && (
//           <>
//             <div className="flex flex-col">
//               <label className="text-gray-100 font-medium">
//                 Country of Birth<span className="text-gray-200">*</span>
//               </label>
//               <select
//                 name="birthCountry"
//                 value={formData?.birthCountry}
//                 onChange={handleChange}
//                 required
//                 className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               >
//                 <option value="">Select a country</option>
//                 {countries &&
//                   countries.map((country: any,index:any) => (
//                     <option key={index} value={country?.name}>{country?.name}</option>
//                   ))}
//               </select>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-gray-100 font-medium">
//                 Country of Citizenship<span className="text-gray-200">*</span>
//               </label>
//               <select
//                 name="citizenshipDetails"
//                 value={formData?.citizenshipDetails || []}
//                 onChange={handleChange}
//                 required
//                 multiple
//                 className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
//               >
//                 <option value="India">India</option>
//                 {countries &&
//                   countries.map((country: any,index:any) => (
//                     <option key={index} value={country?.name}>{country?.name}</option>
//                   ))}
//               </select>
//             </div>
//           </>
//         )}
//       </form>

//       {/* Navigation Buttons */}
//       <div className="mt-4 flex gap-2 justify-between">
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center"
//           onClick={prevStep}
//         >
//           Back
//         </button>
//         <button
//           type="button"
//           className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center"
//           onClick={nextStep}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }























import { countries } from "@/data/data";
import Image from "next/image";
import React from "react";
import { FaCarSide, FaDollarSign, FaFileInvoice, FaRegAddressCard, FaRegHandshake, FaShuttleVan, FaTruckMonster } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { ImArrowRight } from "react-icons/im";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiUser } from "react-icons/ti";

export default function Step1({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: any) {
  return (
    <div className="min-w-[70vw]">
      <h2 className="text-xl font-bold">
        Are you a New Zealand citizen or resident?
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 px-0 text-gray-200 mx-auto">
        {/* Radio Buttons */}
        <div className="flex justify-start items-center lg:col-span-3">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="nzCitizenOrResident"
              value="Yes"
              required
              checked={formData.nzCitizenOrResident === "Yes"}
              onChange={handleChange}
            />
            <div className="text-white font-semibold p-8 uppercase">Yes</div>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="nzCitizenOrResident"
              value="No"
              required
              checked={formData.nzCitizenOrResident === "No"}
              onChange={handleChange}
            />
            <div className="text-white font-semibold p-8 uppercase">No</div>
          </label>
        </div>

        {formData?.nzCitizenOrResident === "No" && (
          <>
            <div className="flex flex-col">
              <label className="text-gray-100 font-medium">
                Country of Birth<span className="text-gray-200">*</span>
              </label>
              <select
                name="birthCountry"
                value={formData?.birthCountry}
                onChange={handleChange}
                required
                className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              >
                <option value="">Select a country</option>
                {countries &&
                  countries.map((country: any,index:any) => (
                    <option key={index} value={country?.name}>{country?.name}</option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-100 font-medium">
                Country of Citizenship<span className="text-gray-200">*</span>
              </label>
              <select
                name="citizenshipDetails"
                value={formData?.citizenshipDetails || []}
                onChange={handleChange}
                required
                multiple
                className="border rounded p-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#1262A1] outline-none"
              >
                <option value="India">India</option>
                {countries &&
                  countries.map((country: any,index:any) => (
                    <option key={index} value={country?.name}>{country?.name}</option>
                  ))}
              </select>
            </div>
          </>
        )}
      </form>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-2 justify-between">
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-white text-[#1262A1] p-2 rounded-lg w-44 flex justify-center items-center"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
