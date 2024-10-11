import React from 'react';

const SupportingDocuments = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Upload Document Section */}
      <div className="text-center border rounded-lg p-4">
        <div className="mb-4">
          <i className="fas fa-upload text-4xl text-gray-500"></i>
          <p>Upload Document</p>
        </div>
        <button className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </div>

      {/* Upload Guarantor's Form Section */}
      <div className="text-center border rounded-lg p-4">
        <div className="mb-4">
          <i className="fas fa-upload text-4xl text-gray-500"></i>
          <p>Upload Guarantor's Form</p>
        </div>
        <button className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </div>

      {/* Request for New Document Section */}
      <div className="text-center border rounded-lg p-4">
        <div className="mb-4">
          <i className="fas fa-plus-circle text-4xl text-gray-500"></i>
          <p>Request for New Document</p>
        </div>
        <button className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md">
          Request
        </button>
      </div>
    </div>
  );
};

export default SupportingDocuments;
