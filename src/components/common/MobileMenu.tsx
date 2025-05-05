// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { IoClose, IoMenu } from "react-icons/io5";

// export default function MobileMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname(); // Get current route

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Why Us", path: "/why-us" },
//     { name: "Solution", path: "/solution" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   // if (token) {
//   //   menuItems.push({ name: "Account", path: "/account" });
//   // }
//   return (
//     <nav className="relative">
//       {/* Hamburger Button */}
//       <button
//         className="lg:hidden text-gray-50 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
//       </button>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: isOpen ? 0 : "100%" }}
//         transition={{ type: "tween", duration: 0.3 }}
//         className="fixed top-0 right-0 h-screen w-2/3 bg-gray-900 text-gray-50 shadow-lg z-50 lg:hidden flex flex-col items-start justify-start p-8 gap-6"
//       >
   
//         {/* Close Button */}
//         <button
//           className="absolute top-5 right-5 text-gray-50"
//           onClick={() => setIsOpen(false)}
//         >
//           <IoClose size={32} />
//         </button>

//         {/* Menu Items */}
//         <ul className="flex flex-col items-start gap-6 text-lg">
//           {menuItems.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               onClick={() => setIsOpen(false)}
//             >
//               <li
//                 className={`${
//                   pathname === item.path
//                     ? "border-b-2 border-white text-white font-bold"
//                     : "text-gray-300"
//                 }`}
//               >
//                 {item.name}
//               </li>
//             </Link>
//           ))}
//           {/* <Link href={""} onClick={() => setIsOpen(false)}>
//             <li className={`${"text-gray-300"}`}>{token ? "Log Out" : "Signup/Log In"}</li>
//           </Link> */}
//         </ul>
//       </motion.div>
//     </nav>
//   );
// }




















"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Why Us", path: "/why-us" },
    { name: "Solution", path: "/solution" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      {/* Hamburger Button */}
      <button
        className="lg:hidden text-[#1262A1] focus:outline-none flex justify-center items-center"
        onClick={toggleMenu}
      >
        {isOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </button>

      {/* Outer Backdrop (Blur layer) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)} // Close menu when clicked outside
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-2/3 bg-gray-900 text-gray-50 shadow-lg z-50 lg:hidden flex flex-col items-start justify-start p-8 gap-6"
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={32} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col items-start gap-6 text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
            >
              <li
                className={`${
                  pathname === item.path
                    ? "border-b-2 border-white text-white font-bold"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
