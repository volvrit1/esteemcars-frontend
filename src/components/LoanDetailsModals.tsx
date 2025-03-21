import dayjs from "dayjs";
import React from "react";

interface LoanDetailModalProps {
  isOpen: boolean;
  toggle: () => void;
  loanData: any;
}

const LoanDetailsModal: React.FC<LoanDetailModalProps> = ({
  isOpen,
  toggle,
  loanData,
}) => {
  return (
    <div
      className={`fixed inset-0 p-4 bg-black text-[#7d7d7d] bg-opacity-50 flex items-center justify-center z-[5000] transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggle}
    >
      <div
        className="bg-white p-2 lg:p-6 rounded-lg h-[80vh] overflow-y-auto some-container shadow-lg w-full sm:w-3/4 lg:w-1/2"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-semibold">Loan Details</h5>
          <button
            className="text-2xl font-semibold text-[#7d7d7d] hover:text-gray-700"
            onClick={toggle}
          >
            &times;
          </button>
        </div>

        {/* Table layout for loan details */}
        <table className="table-auto w-full border-collapse">
          <tbody>
            {/* Loan Query Number */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Loan Query Number:
              </td>
              <td className="py-2 pl-4 border-b">
                {loanData?.loanQueryNumber}
              </td>
            </tr>
            {/* User Type */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">User Type:</td>
              <td className="py-2 pl-4 border-b">{loanData?.userType}</td>
            </tr>
            {/* Loan Applied For */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Loan Applied For:
              </td>
              <td className="py-2 pl-4 border-b">{loanData?.loanAppliedFor}</td>
            </tr>
            {/* Purchase Price */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Purchase Price:
              </td>
              <td className="py-2 pl-4 border-b">{loanData?.purchasePrice}</td>
            </tr>
            {/* Deposit Amount */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Deposit Amount:
              </td>
              <td className="py-2 pl-4 border-b">{loanData?.depositAmount}</td>
            </tr>
            {/* Payment Frequency */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Payment Frequency:
              </td>
              <td className="py-2 pl-4 border-b">
                {loanData?.paymentFrequency}
              </td>
            </tr>
            {/* Vehicle Make */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Vehicle Make:
              </td>
              <td className="py-2 pl-4 border-b">{loanData?.vehicleMake}</td>
            </tr>
            {/* Vehicle Model */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Vehicle Model:
              </td>
              <td className="py-2 pl-4 border-b">{loanData?.vehicleModel}</td>
            </tr>
            {/* Vehicle Year */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Vehicle Year:
              </td>
              <td className="py-2 pl-4 border-b">{loanData?.vehicleYear}</td>
            </tr>
            {/* Application Type */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Application Type:
              </td>
              <td className="py-2 pl-4 border-b">
                {loanData?.applicationType}
              </td>
            </tr>
            {/* Driver License Type */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">
                Driver License Type:
              </td>
              <td className="py-2 pl-4 border-b">
                {loanData?.driverLicenseType}
              </td>
            </tr>
            {/* Status */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">Status:</td>
              <td className="py-2 pl-4 border-b">{loanData?.status}</td>
            </tr>

            {/* Banks Info */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">Banks:</td>
              <td className="py-2 pl-4 border-b">
                {loanData?.approvedBankData?.banks &&
                  loanData?.approvedBankData.banks.map(
                    (bank: any, index: number) => (
                      <div key={index} className="mb-2">
                        <div className="font-semibold">{bank.name}</div>
                        <div className="pl-4 text-sm">
                          Amount: {bank.amount} | Tenure: {bank.tenure} months |
                          Interest Rate: {bank.interestRate}%
                        </div>
                      </div>
                    )
                  )}
              </td>
            </tr>

            {/* Created At */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">Created At:</td>
              <td className="py-2 pl-4 border-b">
                {dayjs(loanData?.createdAt).format("DD-MM-YYYY")}
              </td>
            </tr>
            {/* Updated At */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">Updated At:</td>
              <td className="py-2 pl-4 border-b">
                {dayjs(loanData?.updatedAt).format("DD-MM-YYYY")}
              </td>
            </tr>
            {/* Deleted At */}
            <tr>
              <td className="font-semibold py-2 pr-4  border-b">Deleted At:</td>
              <td className="py-2 pl-4 border-b">
                {loanData?.deletedAt
                  ? new Date(loanData?.deletedAt).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsModal;
