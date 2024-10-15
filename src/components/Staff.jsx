import { useEffect, useState } from 'react';

const SeeMorePage = () => {
  const [loanDetails, setLoanDetails] = useState(null);

  useEffect(() => {
    // Fetch loan details from the Mockaroo API
    fetch('https://my.api.mockaroo.com/loan_data1.json?key=a4e044f0&format=json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const loanData = data[0]; // Assuming the API returns an array
        setLoanDetails(loanData);
      })
      .catch(error => console.error("Error fetching loan details:", error));
  }, []);

  if (!loanDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{loanDetails.loan_name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Loan Details</h3>
          <p><strong>Amount:</strong> ${loanDetails.amount}</p>
          <p><strong>Status:</strong> {loanDetails.status}</p>
          <p><strong>Type:</strong> {loanDetails.loan_type}</p>
          <p><strong>Application Date:</strong> {loanDetails.application_date}</p>
          <p><strong>Due Date:</strong> {loanDetails.due_date}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Applicant Information</h3>
          <p><strong>Name:</strong> {loanDetails.applicant_name}</p>
          <p><strong>Email:</strong> {loanDetails.applicant_email}</p>
        </div>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
        <p>{loanDetails.additional_notes || "No additional notes available."}</p>
      </div>
    </div>
  );
};

export default SeeMorePage;
