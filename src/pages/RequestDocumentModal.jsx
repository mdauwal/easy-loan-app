import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the toast CSS

const RequestDocumentModal = ({ isOpen, closeModal }) => {
  const [documentName, setDocumentName] = useState("Birth Certificate");

  // Close the modal if the user clicks outside the modal content (on the backdrop)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle the 'Send' button click and show the toast notification
  const handleSendClick = () => {
    // Display toast notification
    toast.success(`Document request for ${documentName} has been sent!`);

    // You can also add more actions here, like sending data to a server
    closeModal(); // Close modal after sending
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleBackdropClick} // Close modal when clicking on backdrop
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[95%] max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Request a Document</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Close</span>
                &#x2715; {/* Unicode for close icon (X) */}
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Document Name
              </label>
              <input
                type="text"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-[#00C795]"
              />
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
              <button
                onClick={handleSendClick}
                className="px-4 py-2 bg-[#00C795] text-white rounded-md hover:bg-[#007970]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
};

export default RequestDocumentModal;
