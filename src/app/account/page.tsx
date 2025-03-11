"use client";

import { useState, useEffect } from "react";
import { Fetch } from "@/utils/api";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoanDetailsModal from "@/components/LoanDetailsModals";
import { toast } from "react-toastify";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any | null>(null);
  const [applications, setApplications] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedApplication, setSelectedApplication] = useState<any>(null); // To store the selected loan application
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // To manage modal visibility
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
      const id = JSON.parse(storedUserData).id;
      fetchApplications(id);
    }
  }, [router]);

  const fetchApplications = async (id: any) => {
    try {
      const response: any = await Fetch(
        `/api/loan-query?userId=${id}`,
        undefined,
        5000
      );
      const data = await response.data.result;
      setApplications(data);
    } catch (error: any) {
      if (error?.message) toast.error(error?.message);
      console.log("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to open the modal with selected loan data
  const openModal = (application: any) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <div className="text-2xl font-semibold text-gray-900">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 lg:h-screen overscroll-y-auto mt-[7rem] max-w-7xl m-auto pt-28 lg:px-20 lg:py-10">
      {user && (
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col items-start lg:flex-row lg:items-center gap-4 lg:gap-14">
            <div className="flex flex-col">
              <h2 className="font-light text-gray-700">Name:</h2>
              <h3 className="text-lg font-semibold text-gray-900">
                {user.firstName + " " + user.lastName}
              </h3>
            </div>
            <div className="flex flex-col">
              <h2 className="font-light text-gray-700">Email Id:</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-light text-gray-700">Mobile No:</h2>
              <p className="text-gray-500">{user.mobileNo || ""}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-light text-gray-700">Birth Country:</h2>
              <p className="text-gray-500">{user.birthCountry || ""}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-light text-gray-700">Date Of Birth:</h2>
              <p className="text-gray-500">
                {dayjs(user.dob).format("DD-MM-YYYY") || ""}
              </p>
            </div>
            <div>
              <Link
                className="bg-[#1262A1] lg:px-5 p-5 text-white font-semibold rounded-lg hover:bg-gray-400 transition-colors ease-in-out"
                href={"/apply-for-car-loan"}
              >
                Apply Car Loan
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application: any) => (
          <div
            key={application.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            onClick={() => openModal(application)} // Open modal when a card is clicked
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {application.formName}
            </h2>
            <p className="text-gray-600">
              Loan No: {application.loanQueryNumber}
            </p>
            <p className="text-gray-500 text-sm">
              Date: {dayjs(application.createdAt).format("DD-MM-YYYY")}
            </p>
            <div
              className={`mt-4 inline-block py-1 px-4 text-sm rounded-full ${
                application.status === "In Progress"
                  ? "bg-yellow-300 text-yellow-800"
                  : application.status === "Approved"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              }`}
            >
              {application.status}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Loan Details */}
      {selectedApplication && (
        <LoanDetailsModal
          isOpen={isModalOpen}
          toggle={closeModal}
          loanData={selectedApplication} // Pass the selected application data to the modal
        />
      )}
    </div>
  );
};

export default ProfilePage;
