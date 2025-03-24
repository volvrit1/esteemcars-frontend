"use client";
import { Post } from "@/utils/api";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactSection2 = () => {
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
        toast.success("Submission successful");
        setSelectedLoan(null)
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
    <div className="max-w-7xl mx-auto  relative overflow-hidden p-4 lg:p-16">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="lg:w-3/5 m-auto text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-center text-[#252525] leading-7 font-[poppins]">
          {"Get a Free Consultation"}
        </h2>
        <p className=" text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm line-clamp-4 md:line-clamp-none text-[#7d7d7d] py-4  text-center  leading-8 mb-4">
          {
            "We’d love to hear from you! Whether you have a question, need more information about our services, or want to discuss how we can work together,"
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-10 relative z-10 rounded-xl overflow-hidden   ">
        <div className="md:col-span-5 rounded-xl overflow-hidden h-[75vh] relative flex justify-center items-center">
          <Image
            src="/assets/contact2.png"
            alt="Hero Image"
            width={800}
            height={600}
            className="object-cover object-center"
          />
        </div>
        <div className=" pt-10 lg:px-0 md:col-span-7 h-[70vh] lg:h-auto relative">
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
                <div className="flex justify-between items-center gap-1">
                  <div>
                    <input
                      type="checkbox"
                      id="carLoan"
                      value="carLoan"
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
                      checked={selectedLoan === "bikeLoan"}
                      onChange={handleCheckboxChange}
                      className="mr-2 rounded-full border-2 border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
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
                      checked={selectedLoan === "otherLoan"}
                      onChange={handleCheckboxChange}
                      className="mr-2 rounded-full border-2 border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
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
                  value={formData.phone}
                  className="w-full border-b-[1.5px] border-gray-400  outline-none text-[#7d7d7d]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-1/3 m-auto p-3 border bg-[#1262A1] hover:bg-gray-400 transition-colors ease-in-out text-white font-semibold rounded"
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

export default ContactSection2;
