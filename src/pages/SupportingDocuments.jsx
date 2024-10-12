import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const SupportingDocuments = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* Upload Document Section */}
      <div className="">
        <div className="text-center border rounded-lg p-4">
          <FontAwesomeIcon icon={faUpload} className="text-4xl text-gray-500" />
          <p className="mt-2">Upload Document</p>
        </div>
        <button className="mt-4 w-full bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </div>

      {/* Upload Guarantor's Form Section */}
      <div className="">
        <div className="text-center border rounded-lg p-4 ">
          <FontAwesomeIcon icon={faUpload} className="text-4xl text-gray-500" />
          <p className="mt-2">Upload Guarantor's Form</p>
        </div>
        <button className="mt-4 w-full bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </div>

      {/* Request for New Document Section */}
      <div className="">
        <div className="text-center border rounded-lg p-4">
          <FontAwesomeIcon icon={faPlusCircle} className="text-4xl text-gray-500" />
          <p className="mt-2">Request for New Document</p>
        </div>
      </div>
    </div>
  );
};

export default SupportingDocuments;
