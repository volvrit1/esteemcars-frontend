"use client";

import { useEffect, useState } from "react";
import Step1 from "./wizardForm/Step1";
import Step2 from "./wizardForm/Step2";
import Step3 from "./wizardForm/Step3";
import Step4 from "./wizardForm/Step4";
import Step5 from "./wizardForm/Step5";
import Step6 from "./wizardForm/Step6";
import Step10 from "./wizardForm/Step10";
import Step11 from "./wizardForm/Step11";
import Step12 from "./wizardForm/Step12";
import Step7 from "./wizardForm/Step7";
import Step9 from "./wizardForm/Step9";
import { Post } from "@/utils/api";
import { toast } from "react-toastify";
import Step13 from "./wizardForm/Step13";
import Step8 from "./wizardForm/Step8";

const CarLoanWizard = ({ id }: any) => {
  const [step, setStep] = useState(1);
  const [userLocalData, setUserLocalData] = useState<any>();
  const [, setIsSubmited] = useState(false);
  const [formData, setFormData] = useState<any>({
    loanApplicationId: id ?? "",
    userType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleVariant: "",
    kmDriven: "",
    tradeCar: "",
    title: userLocalData?.title ?? "",
    firstName: userLocalData?.firstName ?? "",
    middleName: userLocalData?.middleName ?? "",
    lastName: userLocalData?.lastName ?? "",
    email: userLocalData?.email ?? "",
    mobileNo: userLocalData?.mobileNo ?? "",
    dob: userLocalData?.dob ?? "",
    employerName: "",
    companyName: "",
    companyAddress: "",
    companyCity: "",
    companyState: "",
    companyCountry: "",
    companyPhoneNumber: "",
    companyEmail: "",
    companyWebsite: "",
    loanAppliedFor: "",
    purchasePrice: "",
    longTerm: "",
    paymentFrequency: "",
    depositAmount: "",
    make: "",
    model: "",
    modelYear: "",
    applicationType: "",
    maritalStatus: "",
    dependents: "",
    driverLicenseType: "",
    driverLicenseNumber: "",
    driverLicenseVersion: "",
    driverLicenseDocument: "",
    partnerMaritalStatus: "",
    partnerDependents: "",
    partnerDriverLicenseType: "",
    partnerDriverLicenseNumber: "",
    partnerDriverLicenseVersion: "",
    partnerDriverLicenseDocument: "",
    previousAddress: "",
    previousCity: "",
    previousCountry: "",
    nzResidentType: "",
    nzWorkStatus: true,
    birthCountry: "",
    citizenshipDetails: [],
    address: "",
    city: "",
    postalCode: "",
    country: "",
    timeAtCurrentAddressYears: "",
    timeAtCurrentAddressMonths: "",
    sameAsPostalAddress: false,
    residentType: "",
    occupation: "",
    employmentType: "",
    timeInJob: "",
    income: "",
    partnerPaymentFrequency: "",
    partnerIncome: "",
    otherIncome: false,
    homeOwnership: "Rent",
    rentAgreement: null, // File Upload
    vehiclesValue: "",
    furnitureValue: "",
    creditCardLimit: "",
    creditCardMonthlyPayments: "",
    loanBalance: "",
    loanMonthlyPayments: "",
    livingExpenses: "",
    utilities: "",
    motorVehicle: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserLocalData(parsedUserData);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevFormData: any) => {
      let newValue;

      if (type === "checkbox") {
        newValue = checked;
      }
      if (type === "radio") {
        newValue = value === "on" ? true : value === "off" ? false : value;
      } else if (e.target.multiple) {
        // Handle multi-select dropdowns
        newValue = Array.from(
          (e.target as HTMLSelectElement).selectedOptions,
          (option) => option.value
        );
      } else {
        newValue = value;
      }

      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        return {
          ...prevFormData,
          [parent]: {
            ...prevFormData[parent],
            [child]: newValue,
          },
        };
      }
      console.log(formData);
      return {
        ...prevFormData,
        [name]: newValue,
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [name]: files[0], // Dynamically updates based on the input's name attribute
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]: any) => {
        if (value !== null && value !== undefined) {
          if (typeof value === "object" && !(value instanceof File)) {
            // Handle nested objects (e.g., citizenshipDetails)
            Object.entries(value).forEach(([subKey, subValue]: any) => {
              formDataToSend.append(`${key}[${subKey}]`, subValue);
            });
          } else {
            formDataToSend.append(key, value);
          }
        }
      });

      formDataToSend.append("userId", userLocalData?.id);
      formDataToSend.append(
        "totalMonthlyPayment",
        (
          (Number(formData?.loanMonthlyPayments) || 0) +
          (Number(formData?.creditCardMonthlyPayments) || 0) +
          (Number(formData?.motorVehicle) || 0) +
          (Number(formData?.livingExpenses) || 0) +
          (Number(formData?.utilities) || 0)
        ).toFixed(2)
      );

      const response: any = await Post("api/loan-query", formDataToSend);

      if (response?.success) {
        toast.success("Application submitted successfully!");
        setFormData({
          userType: "",
          vehicleMake: "",
          vehicleModel: "",
          vehicleYear: "",
          vehicleVariant: "",
          kmDriven: "",
          tradeCar: "",
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          dob: "",
          employerName: "",
          companyName: "",
          companyAddress: "",
          companyCity: "",
          companyState: "",
          companyCountry: "",
          companyPhoneNumber: "",
          companyEmail: "",
          companyWebsite: "",
          loanAppliedFor: "",
          purchasePrice: "",
          longTerm: "",
          paymentFrequency: "",
          depositAmount: "",
          make: "",
          model: "",
          modelYear: "",
          applicationType: "",
          maritalStatus: "",
          dependents: "",
          driverLicenseType: "",
          driverLicenseNumber: "",
          driverLicenseVersion: "",
          driverLicenseDocument: "",
          partnerMaritalStatus: "",
          partnerDependents: "",
          partnerDriverLicenseType: "",
          partnerDriverLicenseNumber: "",
          partnerDriverLicenseVersion: "",
          partnerDriverLicenseDocument: "",
          previousAddress: "",
          previousCity: "",
          previousCountry: "",
          nzResidentType: "",
          nzWorkStatus: true,
          birthCountry: "",
          citizenshipDetails: [],
          address: "",
          city: "",
          postalCode: "",
          country: "",
          timeAtCurrentAddressYears: "",
          timeAtCurrentAddressMonths: "",
          sameAsPostalAddress: false,
          residentType: "",
          occupation: "",
          employmentType: "",
          timeInJob: "",
          income: "",
          partnerPaymentFrequency: "",
          partnerIncome: "",
          otherIncome: false,
          homeOwnership: "Rent",
          rentAgreement: null, // File Upload
          vehiclesValue: "",
          furnitureValue: "",
          creditCardLimit: "",
          creditCardMonthlyPayments: "",
          loanBalance: "",
          loanMonthlyPayments: "",
          livingExpenses: "",
          utilities: "",
          motorVehicle: "",
        });
        setStep(14);
      }
    } catch (error: any) {
      console.log(error);
      if (error?.message) toast.info(error?.message);
    } finally {
      setIsSubmited(true);
    }
  };

  const handleCallRequest = async (e: any) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]: any) => {
        if (value !== null && value !== undefined) {
          if (typeof value === "object" && !(value instanceof File)) {
            // Handle nested objects (e.g., citizenshipDetails)
            Object.entries(value).forEach(([subKey, subValue]: any) => {
              formDataToSend.append(`${key}[${subKey}]`, subValue);
            });
          } else {
            formDataToSend.append(key, value);
          }
        }
      });

      formDataToSend.append("callbackRequested", "true");
      formDataToSend.append("userId", userLocalData?.id);

      const response: any = await Post("api/lead", formDataToSend);

      if (response.success) {
        toast.success("Application submitted successfully!");
        setFormData({
          userType: "",
          vehicleMake: "",
          vehicleModel: "",
          vehicleYear: "",
          vehicleVariant: "",
          kmDriven: "",
          tradeCar: "",
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          dob: "",
          employerName: "",
          companyName: "",
          companyAddress: "",
          companyCity: "",
          companyState: "",
          companyCountry: "",
          companyPhoneNumber: "",
          companyEmail: "",
          companyWebsite: "",
          loanAppliedFor: "",
          purchasePrice: "",
          longTerm: "",
          paymentFrequency: "",
          depositAmount: "",
          make: "",
          model: "",
          modelYear: "",
          applicationType: "",
          maritalStatus: "",
          dependents: "",
          driverLicenseType: "",
          driverLicenseNumber: "",
          driverLicenseVersion: "",
          driverLicenseDocument: "",
          partnerMaritalStatus: "",
          partnerDependents: "",
          partnerDriverLicenseType: "",
          partnerDriverLicenseNumber: "",
          partnerDriverLicenseVersion: "",
          partnerDriverLicenseDocument: "",
          previousAddress: "",
          previousCity: "",
          previousCountry: "",
          nzResidentType: "",
          nzWorkStatus: true,
          birthCountry: "",
          citizenshipDetails: [],
          address: "",
          city: "",
          postalCode: "",
          country: "",
          timeAtCurrentAddressYears: "",
          timeAtCurrentAddressMonths: "",
          sameAsPostalAddress: false,
          residentType: "",
          occupation: "",
          employmentType: "",
          timeInJob: "",
          income: "",
          partnerPaymentFrequency: "",
          partnerIncome: "",
          otherIncome: false,
          homeOwnership: "Rent",
          rentAgreement: null, // File Upload
          vehiclesValue: "",
          furnitureValue: "",
          creditCardLimit: "",
          creditCardMonthlyPayments: "",
          loanBalance: "",
          loanMonthlyPayments: "",
          livingExpenses: "",
          utilities: "",
          motorVehicle: "",
        });
        setStep(14);
      }
    } catch (error) {
      console.log(error);
      toast.info("Failed to submit application.");
    } finally {
      setIsSubmited(true);
    }
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
    scrollToTop();
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-[5.7rem] lg:mt-[9rem] p-4 lg:p-16 bg-gray-100 font-[poppins]">
      <div className="bg-[#1262A1] text-white rounded-2xl shadow-lg  w-full lg:w-auto p-4 lg:p-16">
        {step === 1 && (
          <Step1
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 3 && (
          <Step13
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 4 && (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setStep={setStep}
            handleCallRequest={handleCallRequest} // Fixed typo
          />
        )}

        {step === 5 && (
          <Step4
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 6 && (
          <Step5
            nextStep={nextStep}
            prevStep={prevStep}
            setStep={setStep}
            handleChange={handleChange}
            formData={formData}
            handleFileChange={handleFileChange}
          />
        )}
        {step === 7 && (
          <Step6
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 8 && (
          <Step7
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setStep={setStep}
          />
        )}
        {step === 9 && (
          <Step8
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setStep={setStep}
          />
        )}
        {step === 10 && (
          <Step9
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setStep={setStep}
          />
        )}
        {step === 11 && (
          <Step10
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            handelFileChange={handleFileChange}
            setStep={setStep}
          />
        )}
        {step === 12 && (
          <Step11
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        )}
        {step === 13 && (
          <Step12
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handelSubmit={handleSubmit}
            formData={formData}
          />
        )}

        {step == 14 && (
          <div className="fixed inset-0 flex items-center justify-center z-[5000] bg-black bg-opacity-50">
            <div className="bg-white text-[#1262A1] p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">Submission Successful!</h2>
              <p>Your car loan details have been submitted successfully.</p>
              <button
                className="mt-4 bg-[#1262A1] text-white p-2 rounded-lg w-24 hover:bg-[#0f4a7a] transition"
                onClick={() => setStep(1)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarLoanWizard;
