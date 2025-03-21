"use client";
import React, { useState } from "react";
import HeaderSection from "../common/HeaderSection";
import ContactDetails from "./ContactDetails";

export default function ContactUsForm({ details }: { details?: boolean }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Something went wrong");

      setSuccess("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      }); // Reset form
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl p-4 m-auto lg:block">
      <HeaderSection
        title="Contact Us"
        subTitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        textColor="gray"
      />

      <div className="w-full lg:p-16 lg:px-48 mx-auto">
        <div className="border-[1.5px] border-gray-900 p-10">
          <h2 className="text sm:text-sm md:text-lg lg:text-xl xl:text-xl font-medium  mb-4">
            Send Us Query
          </h2>

          {/* Success/Error Message */}
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-6"
          >
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border col-span-2 md:col-span-1 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              placeholder="Phone"
              required
            />
            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Type your query..."
              className="border col-span-2 border-gray-900 p-3 bg-transparent px-8 w-full mb-2"
              required
            ></textarea>

            <button
              type="submit"
              className="border col-span-2 bg-gray-900 border-gray-900 p-3 text-gray-50 px-4 w-full mb-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {details && <ContactDetails />}
      </div>
    </div>
  );
}
