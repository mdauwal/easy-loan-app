import React from 'react';
import { loanData } from './loanData'; // Import your loanData
import { CSVLink } from 'react-csv'; // Import CSVLink from react-csv
import { FaFileCsv } from 'react-icons/fa'; // CSV Icon for the button

const LoanDetailsTab = ({ activeTab }) => {
  const { Information, CRCNanoReport, BankStatement, Activity, RepaymentDetails, SupportingDocuments } = loanData;

  // Create CSV Data for Bank Statement
  const csvData = [
    ['Bank Name', 'Account Number', 'Statement Period', 'Total Deposits', 'Total Withdrawals'],
    [
      BankStatement.bankName,
      BankStatement.accountNumber,
      BankStatement.statementPeriod,
      BankStatement.totalDeposits,
      BankStatement.totalWithdrawals,
    ],
  ];

  return (
    <div>
      {activeTab === 'Information' && (
        <div>
          <h3>Loan Information</h3>
          <p>Application ID: {Information.applicationId}</p>
          <p>Amount Requested: {Information.amountRequested}</p>
          <p>Status: {Information.status}</p>
          {/* More details */}
        </div>
      )}
      {activeTab === 'BankStatement' && (
        <div>
          <h3>Bank Statement</h3>
          <p>Bank Name: {BankStatement.bankName}</p>
          <p>Account Number: {BankStatement.accountNumber}</p>
          <p>Statement Period: {BankStatement.statementPeriod}</p>
          <p>Total Deposits: {BankStatement.totalDeposits}</p>
          <p>Total Withdrawals: {BankStatement.totalWithdrawals}</p>
          
          {/* Export CSV Button */}
          <CSVLink data={csvData} filename="bank_statement.csv">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
              <FaFileCsv className="mr-2" /> Export CSV
            </button>
          </CSVLink>
        </div>
      )}
      {/* Add more tabs like Activity, RepaymentDetails, etc. */}
    </div>
  );
};

export default LoanDetailsTab;
