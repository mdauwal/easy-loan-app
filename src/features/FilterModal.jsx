import React, { useState } from "react";

export const FilterModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-[600px] p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-semibold mb-6">Filter</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Application ID</label>
            <input
              type="text"
              placeholder="ID-123456"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500">
              <option>All</option>
              <option>New Request</option>
              <option>Disbursed</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Declined</option>
              <option>Rejected</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Applicant's Name</label>
            <input
              type="text"
              placeholder="Adekunle Adebona"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Official Email Address
            </label>
            <input
              type="email"
              placeholder="Adekunleadebona@creditwave.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="bg-[#ffffff] hover:bg-[#EAFFFA] text-[#072320] outline outline-2 outline-[#00C795] outline-offset-2 font-semibold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Refresh
          </button>

          <button className="bg-[#00C795] hover:bg-[#135D54] text-white font-semibold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
