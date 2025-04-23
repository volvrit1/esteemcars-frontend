"use client";
import { Post } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleCheckboxChange = (event: any) => {
    const { value } = event.target;
    // If the checkbox is already selected, set the selectedLoan to null (deselect it)
    if (selectedLoan === value) {
      setSelectedLoan(null);
    } else {
      setSelectedLoan(value);
    }
  };

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
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: selectedLoan,
          message: "",
        });
        setSelectedLoan(null);
        toast.success("Submission successful");
        console.log("Submission successful", res);
      } else {
        console.log("Submission failed", res);
      }
    } catch (error) {
      console.log("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto  relative overflow-hidden p-4 lg:p-16 font-[poppins]">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:gap-10 relative p-3 z-10 rounded-xl border overflow-hidden   ">
        <div className="p-4 lg:p-10 md:col-span-2 py-6 bg-[#1262A1] lg:h-screen 2xl:h-auto rounded-xl relative">
          <h2 className="text-2xl font-bold font-[poppins] text-gray-50 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-50 text-base tracking-wide font-thin font-[cabin] mb-6">
            We’d love to hear from you! Whether you have a question, need more
            information about our services, or want to discuss how we can work
            together,
          </p>
          <div className="text-gray-50 flex flex-col lg:gap-4 mb-24 font-[poppins]">
            <Link href={"tel:0210371229"}>
              <div className="flex items-center gap-2">
                <FiPhoneCall size={25} className="text-xl m-2" />
                <div className="text-xs">
                  <p className="text-gray-50 text-sm">0210371229</p>
                </div>
              </div>
            </Link>
            <Link href={"mailto:info@esteemfinance.co.nz"}>
              <div className="flex items-center gap-2">
                <FiMail size={25} className="text-xl m-2" />
                <div className="text-xs">
                  <p className="text-gray-50 text-sm">info@esteemfinance.co.nz</p>
                </div>
              </div>
            </Link>
            <Link href={"mailto:example@gmail.com"}>
              <div className="flex items-center gap-2">
                <IoLocationOutline size={25} className="text-xl m-2" />
                <div className="text-xs">
                  <p className="text-gray-50 text-sm">
                  13 Binsted Road, New Lynn, Auckland 0600
                  </p>
                </div>
              </div>
            </Link>
           
          </div>
          <div className="text-gray-50 flex items-center justify-start gap-4  mb-6 ">
            <Link href={"tel:123-456-7890"}>
              <div className="flex items-center gap-2 rounded-full bg-white">
                <BsTwitter size={13} className="text-lg m-2 text-[#1262A1]" />
              </div>
            </Link>
            <Link href={"tel:123-456-7890"}>
              <div className="flex items-center gap-2 rounded-full bg-white">
                <BsInstagram size={13} className="text-xl m-2 text-[#1262A1]" />
              </div>
            </Link>
            <Link href={"mailto:example@gmail.com"}>
              <div className="flex items-center gap-2 rounded-full bg-white">
                <BsDiscord size={13} className="text-xl m-2 text-[#1262A1]" />
              </div>
            </Link>
          </div>
          <span className="inline-block w-28 h-28 rounded-full bg-[#FFF9F921] absolute right-20 bottom-20"></span>
          <span className="inline-block w-56 h-56 rounded-full bg-[#FFF9F921] absolute right-[-3.5rem] bottom-[-3.5rem]"></span>
        </div>
        <div className=" pt-10 lg:px-0 lg:py-12 md:col-span-3 h-[70vh] lg:h-auto relative">
          <div className="w-full h-full overflow-hidden">
            <form className="space-y-4 grid " onSubmit={handleSubmit}>
              <div className="flex gap-4 px-4">
                <div className="w-full mb-4">
                  <label
                    className="text-[#252525] inline-block text-sm font-semibold mb-4"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="w-full border-b-[1.5px] border-gray-400  outline-none text-[#7d7d7d]"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    className="text-[#252525] inline-block text-sm font-semibold mb-4"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="w-full border-b-[1.5px] border-gray-400  outline-none text-[#7d7d7d]"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 px-4">
                <div className="w-full mb-4">
                  <label
                    className="text-[#252525] inline-block text-sm font-semibold mb-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full border-b-[1.5px] border-gray-400  outline-none text-[#7d7d7d]"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    className="text-[#252525] inline-block text-sm font-semibold mb-4"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full border-b-[1.5px] border-gray-400  outline-none text-[#7d7d7d]"
                    required
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-[#252525] font-semibold mb-4">
                  Select Subject?
                </h3>
                <div className="flex flex-col lg:flex-row justify-start lg:justify-start items-start lg:items-center gap-1">
                  <div>
                    <input
                      type="checkbox"
                      id="carLoan"
                      value="carLoan"
                      name="subject"
                      checked={selectedLoan === "carLoan"}
                      onChange={handleCheckboxChange}
                      className="mr-1 rounded-full border-2 border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="carLoan" className="text-xs text-[#252525]">
                      Inquire About Car Loan Eligibility
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="bikeLoan"
                      value="bikeLoan"
                      name="subject"
                      checked={selectedLoan === "bikeLoan"}
                      onChange={handleCheckboxChange}
                      className="mr-1 rounded-full border-2 border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="bikeLoan"
                      className="text-xs text-[#252525]"
                    >
                      Loan Approval Process Inquiry
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="otherLoan"
                      value="otherLoan"
                      name="subject"
                      checked={selectedLoan === "otherLoan"}
                      onChange={handleCheckboxChange}
                      className="mr-1 rounded-full border-2 border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="otherLoan"
                      className="text-xs text-[#252525]"
                    >
                      Query About Used Car Financing
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full mb-4 px-4">
                <label
                  className="text-[#252525] inline-block text-sm font-semibold mb-4"
                  htmlFor="phone"
                >
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full border-b-[1.5px] border-gray-400  outline-none text-[#7d7d7d]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-1/3 ml-auto p-3 border bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out text-white font-semibold rounded"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
          <Image
            src={"/assets/contacticon.png"}
            width={230}
            height={400}
            alt=""
            className="absolute bottom-[-3.5rem] object-contain -z-10 right-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
