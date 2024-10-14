// UploadModal.jsx
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import SuccessModal from "./SuccessModal";

const UploadModal = ({ isOpen, onClose }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-30%)",
    config: { tension: 200, friction: 20 },
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading:", file.name);
      setIsSuccessModalOpen(true); // Open SuccessModal
    } else {
      alert("Please select a file to upload.");
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false); // Close SuccessModal
    onClose(); // Close UploadModal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <animated.div
        style={animation}
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-sm sm:max-w-lg"
      >
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-bold">Upload Mono Bank Statement</h2>
          <button
            className="absolute right-3 w-5 h-5 flex items-center justify-center text-[#111111] border 
             border-[#111111] hover:bg-[#135D54] hover:text-white bg-white rounded-full"
            onClick={onClose} // Close UploadModal
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          <p className="mb-4 text-gray-700">
            Kindly Upload Mono Bank Statement
          </p>

          <input
            type="file"
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

          {/* SuccessModal Rendering */}
          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={handleCloseSuccessModal}
          />
        </div>
      </animated.div>
    </div>
  );
};

export default UploadModal;
