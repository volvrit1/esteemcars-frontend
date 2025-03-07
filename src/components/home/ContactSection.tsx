// "use client";
// import { Post } from "@/utils/api";
// import { useState } from "react";
// import { FaFax, FaPhone } from "react-icons/fa";
// import { FiMail, FiPhoneCall } from "react-icons/fi";

// const ContactSection = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     findUs: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res: any = await Post("api/contact", formData, 5000);
//       if (res.success) {
//       }
//     } catch (error) {
//       console.error("Submission failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto relative overflow-hidden p-4 lg:p-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 relative z-10 rounded-3xl border">
//         <div className="absolute top-0 right-0 w-1/4 h-full bg-[#1262A1] -z-10 rounded-r-3xl"></div>
//         <div className="p-4 lg:p-10">
//           <div className="text-gray-600 flex items-center lg:gap-8 mb-6">
//             <div className="flex items-center ">
//               <FiPhoneCall width={25} height={25} className="text-xl m-2" />{" "}
//               <div className="text-xs">
//                 <h2>Phone</h2>
//                 <p className="text-[#F75D34]">123-456-7890</p>
//               </div>
//             </div>
//             <div className="flex items-center ">
//               <FaFax width={25} height={25} className="text-xl m-2" />{" "}
//               <div className="text-xs">
//                 <h2>Fax</h2>
//                 <p className="text-[#F75D34]">123-456-7890</p>
//               </div>
//             </div>
//             <div className="flex items-center ">
//               <FiMail width={25} height={25} className="text-xl m-2" />{" "}
//               <div className="text-xs">
//                 <h2>Email</h2>
//                 <p className="text-[#F75D34]">example@gmail.com</p>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Get in <span className="text-orange-500">Touch</span>
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
//             molestie vel, ornare non id blandit netus.
//           </p>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               onChange={handleChange}
//               value={formData?.name}
//               className="w-full p-3 border rounded-2xl outline-none text-gray-600"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={handleChange}
//               value={formData?.email}
//               className="w-full p-3 border rounded-2xl outline-none text-gray-600"
//             />
//             <input
//               type="text"
//               placeholder="Phone number"
//               onChange={handleChange}
//               value={formData?.phone}
//               className="w-full p-3 border rounded-2xl outline-none text-gray-600"
//             />
//             <select
//               className="w-full p-3 px-5 border rounded-2xl text-gray-600 outline-none "
//               onChange={handleChange}
//               value={formData?.findUs}
//             >
//               <option>How did you find us?</option>
//             </select>
//             <button className="w-full p-3 border bg-[#1262A1] text-white font-semibold rounded">
//               {loading ? "Loading..." : "Submit"}
//             </button>
//           </form>
//         </div>
//         <div className="p-4 lg:p-10 lg:py-12 relative">
//           <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
//             <iframe
//               title="map"
//               className="w-full h-full rounded-lg"
//               src="https://maps.google.com/maps?q=Kebon%20Kacang&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

"use client";
import { Post } from "@/utils/api";
import { useState } from "react";
import { FaFax, FaPhone } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res: any = await Post("api/contact", formData, 5000);
        if (res?.success) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            source: "",
          });
          toast.success("Submission successful");
          console.log("Submission successful", res);
        } else {
          console.error("Submission failed", res);
        }
      } catch (error) {
        console.error("Submission failed", error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-7xl mx-auto relative overflow-hidden p-4 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 relative z-10 rounded-3xl border">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#1262A1] -z-10 rounded-r-3xl"></div>
        <div className="p-4 lg:p-10">
          <div className="text-gray-600 flex flex-wrap lg:gap-8 mb-6">
            <div className="flex items-center gap-2">
              <FiPhoneCall size={25} className="text-xl m-2" />
              <div className="text-xs">
                <h2>Phone</h2>
                <p className="text-[#F75D34]">123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaFax size={25} className="text-xl m-2" />
              <div className="text-xs">
                <h2>Fax</h2>
                <p className="text-[#F75D34]">123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiMail size={25} className="text-xl m-2" />
              <div className="text-xs">
                <h2>Email</h2>
                <p className="text-[#F75D34]">example@gmail.com</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 border rounded-2xl outline-none text-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 border rounded-2xl outline-none text-gray-600"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              value={formData.phone}
              className="w-full p-3 border rounded-2xl outline-none text-gray-600"
              required
            />
            <select
              name="source"
              className="w-full p-3 px-5 border rounded-2xl text-gray-600 outline-none"
              onChange={handleChange}
              value={formData.source}
              required
            >
              <option value="">How did you find us?</option>
              <option value="google">Google</option>
              <option value="social_media">Social Media</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="w-full p-3 border bg-[#1262A1] text-white font-semibold rounded"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="p-4 lg:p-10 lg:py-12 relative">
          <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="map"
              className="w-full h-full rounded-lg"
              src="https://maps.google.com/maps?q=Kebon%20Kacang&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
