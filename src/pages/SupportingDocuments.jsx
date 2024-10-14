import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import RequestDocumentModal from './RequestDocumentModal';

const SupportingDocuments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedGuarantorForm, setSelectedGuarantorForm] = useState(null);

  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    setSelectedDocument(file);
    // Handle file upload logic, such as sending it to the backend
  };

  const handleGuarantorFormUpload = (event) => {
    const file = event.target.files[0];
    setSelectedGuarantorForm(file);
    // Handle file upload logic
  };

  const triggerFileInput = (id) => {
    document.getElementById(id).click();
  };

  const handleAddIconClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
      {/* Upload Document Section */}
      <div className="">
        <div className="text-center bg-[#f3f3f3] border rounded-lg p-4">
          <FontAwesomeIcon icon={faUpload} className="text-4xl text-[#4A5D58]" />
          <p className="mt-2 text-[#4A5D58]">Upload Document</p>
        </div>
        <input
          type="file"
          id="document-upload"
          className="hidden"
          onChange={handleDocumentUpload}
        />
        <button
          onClick={() => triggerFileInput("document-upload")}
          className="mt-4 w-full bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md"
        >
          {selectedDocument ? selectedDocument.name : 'Upload'}
        </button>
      </div>

      {/* Upload Guarantor's Form Section */}
      <div className="">
        <div className="text-center bg-[#f3f3f3] border rounded-lg p-4">
          <FontAwesomeIcon icon={faUpload} className="text-4xl text-[#4A5D58]" />
          <p className="mt-2 text-[#4A5D58]">Upload Guarantor's Form</p>
        </div>
        <input
          type="file"
          id="guarantor-upload"
          className="hidden"
          onChange={handleGuarantorFormUpload}
        />
        <button
          onClick={() => triggerFileInput("guarantor-upload")}
          className="mt-4 w-full bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md"
        >
          {selectedGuarantorForm ? selectedGuarantorForm.name : 'Upload'}
        </button>
      </div>

      {/* Request for New Document Section */}
      <div className="">
        <div className="text-center bg-[#f3f3f3] border rounded-lg p-4">
          <FontAwesomeIcon icon={faPlusCircle} className="text-4xl text-[#4A5D58] rounded-full outline-dashed outline-2 outline-offset-2 " onClick={handleAddIconClick} />
          <p className="mt-2 text-[#4A5D58]">Request for New Document</p>
        </div> 
        {/* Modal Component */}
      <RequestDocumentModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)} // Close the modal
      />

      </div>
    </div>
  );
};

export default SupportingDocuments;
