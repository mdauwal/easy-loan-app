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
          <div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Application ID:</span>
                <span className="text-gray-800">{loanData.Information.applicationId}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Amount Requested:</span>
                <span className="text-gray-800">{loanData.Information.amountRequested}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Interest:</span>
                <span className="text-gray-800">{loanData.Information.interest}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Total Amount:</span>
                <span className="text-gray-800">{loanData.Information.totalAmount}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Processing Fee:</span>
                <span className="text-gray-800">{loanData.Information.processingFee}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Assigned Loan Officer:</span>
                <span className="text-gray-800">{loanData.Information.assignedLoanOfficer}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Application Date:</span>
                <span className="text-gray-800">{loanData.Information.applicationDate}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Submission Date:</span>
                <span className="text-gray-800">{loanData.Information.submissionDate}</span>
              </div>
            </div>
          </div>
        );
      case 'CRC Nano Report':
        return (
          <div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Application ID:</span>
                <span className="text-gray-800">{loanData.CRCNanoReport.applicationID}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Amount Requested:</span>
                <span className="text-gray-800">{loanData.CRCNanoReport.amountRequested}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Interest:</span>
                <span className="text-gray-800">{loanData.CRCNanoReport.interest}</span>
              </div>
            </div>
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
          <div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Bank Name:</span>
                <span className="text-gray-800">{loanData.BankStatement.bankName}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Account Number:</span>
                <span className="text-gray-800">{loanData.BankStatement.accountNumber}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Statement Period:</span>
                <span className="text-gray-800">{loanData.BankStatement.statementPeriod}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Total Deposits:</span>
                <span className="text-gray-800">{loanData.BankStatement.totalDeposits}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Total Withdrawals:</span>
                <span className="text-gray-800">{loanData.BankStatement.totalWithdrawals}</span>
              </div>
            </div>
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
      
      // Supporting Documents Case
      case 'Supporting Documents':
        return <SupportingDocuments />;

      default:
        return <div>No Matching Records Found</div>;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 border-b text-[#4A5D58]">
        <button
          className={`px-4 py-2 ${activeTab === 'Information' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('Information')}
        >
          Information
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Bank Statement' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('Bank Statement')}
        >
          Bank Statement
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'CRC Nano Report' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('CRC Nano Report')}
        >
          CRC Nano Report
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Activity' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('Activity')}
        >
          Activity
        </button>
        {/* <button
          className={`px-4 py-2 ${activeTab === 'Activity' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('Activity')}
        >
          Repayment Details
        </button> */}
        <button
          className={`px-4 py-2 ${activeTab === 'Supporting Documents' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('Supporting Documents')}
        >
          Supporting Documents
        </button>
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default LoanDetailsTab;
