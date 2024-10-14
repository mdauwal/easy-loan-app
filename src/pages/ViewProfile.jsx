import React from 'react';
import { useLocation } from 'react-router-dom';
import profile from "../assets/profile.png";


const ViewProfile = () => {
  // Optional: If you want to pass user data through routing
  const location = useLocation();
  const { user } = location.state || { user: null };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-[#384642] mb-4">User Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Profile Picture */}
        <div className="flex items-center mb-5">
          <img
            src={profile} // Use a default image if none is provided
            alt="Profile"
            className="h-24 w-24 rounded-full bg-gray-200 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-[#384642]">
              Adekunle Adebona
            </h2>
            <p className="text-sm text-gray-600">
              Adekunleadebona@creditwave.com
            </p>
          </div>
        </div>

        {/* Additional Profile Information */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#384642] mb-2">About</h3>
          <p className="text-gray-700">
            Passionate UI/UX Designer
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <button className="bg-[#00C796] text-white font-semibold px-4 py-2 rounded mr-3 hover:bg-[#009a7a]">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
