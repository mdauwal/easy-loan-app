import React, { useState } from "react";
import { useSpring, animated } from '@react-spring/web';

export const FilterModal = ({ isOpen, closeModal }) => {
    const modalAnimation = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'scale(1)' : 'scale(0.95)',
        config: { duration: 300 },
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-0">
            <animated.div style={modalAnimation}>
                <div className="bg-white rounded-lg shadow-xl w-full sm:w-[600px] p-4 sm:p-8 relative">
                    <div className="rounded full">
                    <button
    className="absolute top-4 right-4 text-[#111111] text-sm border border-[#111111] hover:bg-[#135D54] hover:text-[#ffffff] bg-white rounded-full px-1"
    onClick={closeModal}
>
    &#x2715;
</button>

                    </div>
                    <h2 className="text-xl font-semibold mt-5 mb-6">Filter</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Application ID</label>
                            <input
                                type="text"
                                placeholder="ID-123456"
                                className="mt-1 block w-full focus:outline-none focus:ring-2 focus:ring-[#00C795] rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
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
                                className="mt-1 block w-full focus:outline-none focus:ring-2 focus:ring-[#00C795] rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Official Email Address</label>
                            <input
                                type="email"
                                placeholder="Adekunleadebona@creditwave.com"
                                className="mt-1 block w-full focus:outline-none focus:ring-2 focus:ring-[#00C795] rounded-md border-gray-300 shadow-sm p-2 focus:border-green-500 focus:ring-green-500"
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
                    <div className="flex justify-end mb-5 mt-6 space-x-4">
                        <button
                            className="bg-[#ffffff] hover:bg-[#EAFFFA] text-[#072320] outline outline-2 outline-[#00C795] outline-offset-2 text-sm py-2 px-4 rounded"
                            onClick={closeModal}
                        >
                            Refresh
                        </button>

                        <button className="bg-[#00C795] hover:bg-[#135D54] text-white text-sm py-2 px-4 rounded">
                            Search
                        </button>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};
