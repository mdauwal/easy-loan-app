import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import SuccessModal from './SuccessModal';

const UploadModal = ({ isOpen, onClose }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  // Spring animation for fade-in/out effect
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-30%)',
    config: { tension: 200, friction: 20 },
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      console.log('Uploading:', file.name);
      setIsSuccessModalOpen(true); // Open success modal
    } else {
      alert('Please select a file to upload.');
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    onClose(); // Close the UploadModal as well
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <animated.div style={animation} className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-bold">Upload Mono Bank Statement</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose} // Ensure onClose is passed correctly
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          <p className="mb-4 text-gray-700">Kindly Upload Mono Bank Statement</p>

          <input
            type="file"
            id="file-upload"
            className="border p-2 w-full rounded mb-4"
            onChange={handleFileChange}
          />

          {file && (
            <div className="mb-4 text-gray-700">
              Selected file: <strong>{file.name}</strong>
            </div>
          )}

          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>

          {/* Render the SuccessModal */}
          <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseSuccessModal} />
        </div>
      </animated.div>
    </div>
  );
};

export default UploadModal;
