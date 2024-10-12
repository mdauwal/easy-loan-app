import React, { useState } from "react";
import { loanData } from "../pages/data"; // Import your mock data
import { CSVLink } from "react-csv";
import ActivityTab from "../pages/ActivityTab";
import RepaymentDetails from "./RepaymentDetails";
import SupportingDocuments from "../pages/SupportingDocuments"; // Import the SupportingDocuments component

const LoanDetailsTab = () => {
  const [activeTab, setActiveTab] = useState("Information"); // Default to 'Information' tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab when clicked
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Information":
        return (
          <div className="space-y-2">
            {Object.entries(loanData.Information).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:{" "}
                </span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        );

      case "CRC Nano Report":
        return (
          <div className="space-y-2">
            <div className="flex justify-end">
              <CSVLink
                data={[
                  [
                    "Bank Name",
                    "Account Number",
                    "Statement Period",
                    "Total Deposits",
                    "Total Withdrawals",
                  ],
                  [
                    loanData.BankStatement.bankName,
                    loanData.BankStatement.accountNumber,
                    loanData.BankStatement.statementPeriod,
                    loanData.BankStatement.totalDeposits,
                    loanData.BankStatement.totalWithdrawals,
                  ],
                ]}
                filename="bank_statement.csv"
                className="bg-white hover:bg-[#135D54] hover:text-white text-[#4A5D58] border-solid border-2 border-[#4A5D58] px-4 py-2 rounded-md flex items-center space-x-2"
              >
                <span>Export CSV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 112 0v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 10.586V2z"
                    clipRule="evenodd"
                  />
                  <path d="M3 16a1 1 0 100 2h14a1 1 0 100-2H3z" />
                </svg>
              </CSVLink>
            </div>

            {Object.entries(loanData.CRCNanoReport).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:{" "}
                </span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        );

      case "Bank Statement":
        return (
          <div className="space-y-2">
            <div className="flex justify-end">
            <CSVLink
              data={[
                [
                  "Bank Name",
                  "Account Number",
                  "Statement Period",
                  "Total Deposits",
                  "Total Withdrawals",
                ],
                [
                  loanData.BankStatement.bankName,
                  loanData.BankStatement.accountNumber,
                  loanData.BankStatement.statementPeriod,
                  loanData.BankStatement.totalDeposits,
                  loanData.BankStatement.totalWithdrawals,
                ],
              ]}
              filename="bank_statement.csv"
              className="hover:bg-[#135D54] border-solid border-2 border-[#4A5D58] text-[[#4A5D58]] px-4 py-2 rounded-md"
            >
              View Bank Statement
            </CSVLink>
            </div>
            {Object.entries(loanData.BankStatement).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:{" "}
                </span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        );

      case "Activity":
        return <ActivityTab />;
        case "Repayment Details":
          return <RepaymentDetails />;
  

      case "Supporting Documents":
        return <SupportingDocuments />;

      default:
        return <div>No Matching Records Found</div>;
    }
  };

  return (
    <div className="p-4">
  {/* Tab Container */}
  <div className="flex flex-wrap md:justify-center lg:justify-between border-b text-[#4A5D58] overflow-x-auto">
    {[
      "Information",
      "Bank Statement",
      "CRC Nano Report",
      "Activity",
      "Supporting Documents",
      "Repayment Details",
    ].map((tab) => (
      <button
        key={tab}
        className={`px-2 py-2 md:px-2 lg:px-4 whitespace-nowrap ${
          activeTab === tab ? "border-b-2 border-[#00C795]" : ""
        }`}
        onClick={() => handleTabClick(tab)}
      >
        {tab}
      </button>
    ))}
  </div>

  <div className="mt-4">{renderTabContent()}</div>
</div>

  );
};

export default LoanDetailsTab;
