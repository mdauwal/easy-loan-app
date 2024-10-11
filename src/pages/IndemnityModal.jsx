import React, { useEffect, useState } from 'react';

const IndemnityModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true); // Show the modal when it's opened
    } else {
      setTimeout(() => setShowModal(false), 300); // Wait for animation to finish before removing modal
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-8'}`}
      >
        <h2 className="text-2xl font-bold mb-4">Indemnity</h2>
        <p className="text-sm text-gray-600 mb-4">
          Adroit Loan Application is a Self Service and Self Enrolling Application.
          We will never request your login credentials (User ID/Password/PIN) for any purpose 
          and by any means (e.g., phone/e-mail) as they are strictly confidential. 
          Adroit shall not be liable for any loss or distress suffered by any user because of 
          unauthorized access or compromised credentials via any device.
        </p>
        <button
          onClick={onClose}
          className="w-full py-2 bg-[#00C795] text-white rounded-lg hover:bg-[#007970]"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default IndemnityModal;
