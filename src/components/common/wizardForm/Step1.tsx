// import React from "react";
// import { FaRegHandshake } from "react-icons/fa";
// import { TiUser } from "react-icons/ti";

// export default function Step1({ nextStep, handleChange, formData }: any) {
//   return (
//     <div className="text-center p-10">
//       <h2 className="text-xl font-bold mb-16">How would you like to apply?</h2>
//       <div className="mt-4 flex flex-col lg:flex-row justify-center gap-4">
//         {/* Individual Application */}
//         <label className="bg-white text-gray-700 px-4 h-56 lg:w-60 py-2 rounded-xl flex flex-col items-center cursor-pointer">
//           <div className="bg-[#1262A1] w-24 h-24 overflow-hidden m-auto rounded-full flex justify-center items-center">
//             <TiUser width={50} height={50} className="text-7xl text-gray-50" />
//           </div>
//           <p className="mt-2">As an Individual</p>
//           <input
//             type="radio"
//             name="userType"
//             value="Individual"
//             required
//             checked={formData.userType === "Individual"}
//             onChange={(e) => {
//               handleChange(e);
//               nextStep();
//             }}
//             className="hidden"
//           />
//         </label>

//         {/* Business Application */}
//         <label className="bg-white text-gray-700 h-56 lg:w-60 p-8 rounded-xl flex flex-col items-center cursor-pointer">
//           <div className="bg-[#1262A1] w-24 h-24 overflow-hidden m-auto rounded-full flex justify-center items-center">
//             <FaRegHandshake
//               width={50}
//               height={50}
//               className="text-7xl text-gray-50"
//             />
//           </div>
//           <p className="mt-2">As a Business</p>
//           <input
//             type="radio"
//             name="userType"
//             value="Business"
//             checked={formData.userType === "Business"}
//             required
//             onChange={(e) => {
//               handleChange(e);
//               nextStep();
//             }}
//             className="hidden"
//           />
//         </label>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TiUser } from "react-icons/ti";

export default function Step1({
  nextStep,
  handleChange,
  formData,
  setStep,
}: any) {
  const [error, setError] = useState("");

  const handleNextStep = (e: any) => {
    handleChange(e);
    setStep(2);
  };

  const UserTypeOption = ({ label, value, Icon }: any) => (
    <label className="bg-white text-gray-700 px-6 h-56 lg:w-60 py-4 rounded-xl flex flex-col items-center cursor-pointer">
      <div className="bg-[#1262A1] w-24 h-24 overflow-hidden m-auto rounded-full flex justify-center items-center">
        <Icon className="text-7xl text-gray-50" />
      </div>
      <p className="mt-2 w-full text-center">{label}</p>
      <input
        type="radio"
        name="userType"
        value={value}
        checked={formData.userType === value}
        onChange={(e) => {
          handleNextStep(e);
          setError(""); // Clear error when user selects an option
        }}
        className="hidden"
      />
    </label>
  );

  return (
    // <div className="text-center p-10">
    //   <h2 className="text-xl font-bold mb-16">How would you like to apply?</h2>
    //   <div className="mt-4 flex flex-col lg:flex-row justify-center gap-4">
    //     {/* Individual Application */}
    //     <label className="bg-white text-gray-700 px-4 h-56 lg:w-60 py-2 rounded-xl flex flex-col items-center cursor-pointer">
    //       <div className="bg-[#1262A1] w-24 h-24 overflow-hidden m-auto rounded-full flex justify-center items-center">
    //         <TiUser width={50} height={50} className="text-7xl text-gray-50" />
    //       </div>
    //       <p className="mt-2">As an Individual</p>
    //       <input
    //         type="radio"
    //         name="userType"
    //         value="Individual"
    //         checked={formData.userType === "Individual"}
    //         onChange={(e) => {
    //           handleChange(e);
    //           handleNextStep();
    //           setError(""); // Clear error when user selects an option
    //         }}
    //         className="hidden"
    //       />
    //     </label>

    //     {/* Business Application */}
    //     <label className="bg-white text-gray-700 h-56 lg:w-60 p-8 rounded-xl flex flex-col items-center cursor-pointer">
    //       <div className="bg-[#1262A1] w-24 h-24 overflow-hidden m-auto rounded-full flex justify-center items-center">
    //         <FaRegHandshake
    //           width={50}
    //           height={50}
    //           className="text-7xl text-gray-50"
    //         />
    //       </div>
    //       <p className="mt-2">As a Business</p>
    //       <input
    //         type="radio"
    //         name="userType"
    //         value="Business"
    //         checked={formData.userType === "Business"}
    //         onChange={(e) => {
    //           handleChange(e);
    //           handleNextStep();
    //           setError(""); // Clear error when user selects an option
    //         }}
    //         className="hidden"
    //       />
    //     </label>
    //   </div>

    //   {/* Validation Message */}
    //   {error && <p className="text-red-500 mt-4">{error}</p>}
    // </div>

    <div className="mt-4 flex flex-col lg:flex-row justify-center gap-4">
      <UserTypeOption
        label="As an Individual"
        value="Individual"
        Icon={TiUser}
      />
      <UserTypeOption
        label="As a Business"
        value="Business"
        Icon={FaRegHandshake}
      />
    </div>
  );
}
