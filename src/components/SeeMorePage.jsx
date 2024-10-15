import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SeeMorePage = () => {
  const [loanApplications, setLoanApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch loan application data from Mockaroo API
  useEffect(() => {
    fetch('https://my.api.mockaroo.com/YOUR_SCHEMA_NAME.json?key=YOUR_API_KEY&format=json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLoanApplications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching loan details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-[#384642] mb-8">Loan Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanApplications.map((loan) => (
          <div key={loan.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#384642] mb-2">{loan.loan_name}</h2>
            <p className="text-gray-700 mb-4">Amount: {loan.amount}</p>
            <p className="text-gray-700 mb-4">Status: {loan.status}</p>
            <div className="flex justify-between items-center">
              <Link
                to="#"
                className="text-[#00C796] font-semibold hover:underline"
              >
                View Details
              </Link>
              <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

