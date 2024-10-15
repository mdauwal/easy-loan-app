import { useEffect, useState } from 'react';

const SeeMorePage = () => {
  const [loanDetailsList, setLoanDetailsList] = useState([]); // Store all loan records
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current loan being viewed

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
        setLoanDetailsList(data); // Store the fetched records
      })
      .catch(error => console.error('Error fetching loan details:', error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < loanDetailsList.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : loanDetailsList.length - 1
    );
  };

  if (loanDetailsList.length === 0) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  const loanDetails = loanDetailsList[currentIndex]; // Get the current loan details

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
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
        <p>{loanDetails.additional_notes || 'No additional notes available.'}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Previous
        </button>
        <span className="text-gray-600">
          {currentIndex + 1} / {loanDetailsList.length}
        </span>
        <button
          onClick={handleNext}
          className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SeeMorePage;
