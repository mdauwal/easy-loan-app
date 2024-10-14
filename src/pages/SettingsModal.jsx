import React from "react";
import { useSpring, animated } from "@react-spring/web";

const SettingsModal = ({ isOpen, onClose }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-30%)",
    config: { tension: 200, friction: 20 },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <animated.div
        style={animation}
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button
            className="w-8 h-8 flex items-center justify-center text-gray-700 border border-gray-500 rounded-full hover:bg-gray-700 hover:text-white"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C795] focus:border-[#00C795]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C795] focus:border-[#00C795]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Change Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C795] focus:border-[#00C795]"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded bg-[#00C795] hover:bg-[#135D54] text-white">
            Save Changes
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default SettingsModal;
