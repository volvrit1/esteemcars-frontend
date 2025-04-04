"use client";
import { Post } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const ContactSectionLanding = () => {
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
    <div className="max-w-7xl mx-auto  overflow-hidden p-4 lg:p-16 font-[alexandria]">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:gap-10  z-10 rounded-xl border overflow-hidden   ">
        <div className="p-4 lg:p-10 md:col-span-2 py-6  lg:h-screen 2xl:h-auto text-gray-800 ">
          <h2 className="text-2xl font-bold font-[alexandria] text-gray-800 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-800 text-xs tracking-wide font-thin font-[cabin] mb-6">
            We’d love to hear from you! Whether you have a question, need more
            information about our services, or want to discuss how we can work
            together,
          </p>
          <div className="text-gray-800 flex lg:gap-4 mb-16 font-medium font-[alexandria]">
            <Link href={"tel:0210371229"}>
              <div className="flex items-center">
                <FiPhoneCall size={20} className="text-sm m-2" />
                <div className="text-xs">
                  <p className="text-gray-800 text-sm">0210371229</p>
                </div>
              </div>
            </Link>
            <Link href={"mailto:info@esteemfinance.co.nz"}>
              <div className="flex items-center">
                <LiaEnvelopeOpenTextSolid size={20} className="text-sm m-2" />
                <div className="text-xs">
                  <p className="text-gray-800 text-sm">
                    info@esteemfinance.co.nz
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-gray-50 flex items-center justify-start gap-4  mb-6 ">
            <Image
              src={`/assets/contactlanding.svg`}
              alt={"image"}
              width={800}
              height={800}
              className="object-fill w-full h-full scale-110"
            />
          </div>
         
        </div>
        <div className=" pt-10 lg:px-0 lg:py-12 md:col-span-3 h-[70vh] lg:h-auto relative">
          <div className="w-full h-full overflow-hidden pr-6">
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
                <div className="flex flex-col lg:flex-row justify-start lg:justify-start items-start lg:items-center gap-4">
                  <div className="flex item-center  ">
                    <input
                      type="checkbox"
                      id="carLoan"
                      value="carLoan"
                      name="subject"
                      checked={selectedLoan === "carLoan"}
                      onChange={handleCheckboxChange}
                      className="mr-1 rounded-full border-2 border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="carLoan" className="text-[10px] text-[#252525]">
                      Inquire About Car Loan Eligibility
                    </label>
                  </div>

                  <div className="flex item-center  ">
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
                      className="text-[10px] text-[#252525]"
                    >
                      Loan Approval Process Inquiry
                    </label>
                  </div>

                  <div  className="flex item-center  ">
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
                      className="text-[10px] text-[#252525]"
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
                className="w-1/3 ml-auto mr-3 p-3 border bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out text-white font-semibold rounded"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionLanding;
