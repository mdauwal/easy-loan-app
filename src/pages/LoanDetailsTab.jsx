import React, { useState } from 'react';
import { loanData } from '../pages/data'; // Import your mock data
import { CSVLink } from 'react-csv';
import ActivityTab from "../pages/ActivityTab";
import SupportingDocuments from "../pages/SupportingDocuments"; // Import the SupportingDocuments component

const LoanDetailsTab = () => {
  const [activeTab, setActiveTab] = useState('Information'); // Default to 'Information' tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab when clicked
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Information':
        return (
          <div className="space-y-2">
            {Object.entries(loanData.Information).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        );

      case 'CRC Nano Report':
        return (
          <div className="space-y-2">
            {Object.entries(loanData.CRCNanoReport).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
            <CSVLink
              data={[
                ['Bank Name', 'Account Number', 'Statement Period', 'Total Deposits', 'Total Withdrawals'],
                [
                  loanData.BankStatement.bankName,
                  loanData.BankStatement.accountNumber,
                  loanData.BankStatement.statementPeriod,
                  loanData.BankStatement.totalDeposits,
                  loanData.BankStatement.totalWithdrawals,
                ],
              ]}
              filename="bank_statement.csv"
              className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md"
            >
              Export CSV
            </CSVLink>
          </div>
        );

      case 'Bank Statement':
        return (
          <div className="space-y-2">
            {Object.entries(loanData.BankStatement).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
            <CSVLink
              data={[
                ['Bank Name', 'Account Number', 'Statement Period', 'Total Deposits', 'Total Withdrawals'],
                [
                  loanData.BankStatement.bankName,
                  loanData.BankStatement.accountNumber,
                  loanData.BankStatement.statementPeriod,
                  loanData.BankStatement.totalDeposits,
                  loanData.BankStatement.totalWithdrawals,
                ],
              ]}
              filename="bank_statement.csv"
              className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md"
            >
              View Bank Statement
            </CSVLink>
          </div>
        );

      case 'Activity':
        return <ActivityTab />;

      case 'Supporting Documents':
        return <SupportingDocuments />;

      default:
        return <div>No Matching Records Found</div>;
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 border-b text-[#4A5D58] overflow-x-auto">
        {['Information', 'Bank Statement', 'CRC Nano Report', 'Activity', 'Supporting Documents'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-[#00C795]' : ''}`}
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
