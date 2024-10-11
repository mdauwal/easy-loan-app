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
            <h3>Application Information</h3>
            <p>Application ID: {loanData.Information.applicationId}</p>
            <p>Amount Requested: {loanData.Information.amountRequested}</p>
            <p>Interest: {loanData.Information.interest}</p>
            <p>Total Amount: {loanData.Information.totalAmount}</p>
            <p>Processing Fee: {loanData.Information.processingFee}</p>
            <p>Assigned Loan Officer: {loanData.Information.assignedLoanOfficer}</p>
            <p>Application Date: {loanData.Information.applicationDate}</p>
            <p>Submission Date: {loanData.Information.submissionDate}</p>
          </div>
        );
      case 'CRC Nano Report':
        return (
          <div>
            <h3>CRC Nano Report</h3>
            <p>Application ID: {loanData.CRCNanoReport.applicationID}</p>
            <p>Amount Requested: {loanData.CRCNanoReport.amountRequested}</p>
            <p>Interest: {loanData.CRCNanoReport.interest}</p>
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
            <h3>Bank Statement</h3>
            <p>Bank Name: {loanData.BankStatement.bankName}</p>
            <p>Account Number: {loanData.BankStatement.accountNumber}</p>
            <p>Statement Period: {loanData.BankStatement.statementPeriod}</p>
            <p>Total Deposits: {loanData.BankStatement.totalDeposits}</p>
            <p>Total Withdrawals: {loanData.BankStatement.totalWithdrawals}</p>

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
        <button
          className={`px-4 py-2 ${activeTab === 'Activity' ? 'border-b-2 border-[#00C795]' : ''}`}
          onClick={() => handleTabClick('Activity')}
        >
          Repayment Details
        </button>
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
