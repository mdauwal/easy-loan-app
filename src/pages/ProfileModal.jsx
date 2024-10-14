import React, { useState } from "react";
import profile from "../assets/profile.png"

const ProfileModal = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState("Adekunle Adebona");
  const [email, setEmail] = useState("Adekunleadebona@creditwave.com");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [message, setMessage] = useState("");

  // Handle image upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };

  // Handle submit
  const handleSubmit = () => {
    setMessage("Profile updated successfully!");

    // Simulate closing modal after successful update
    setTimeout(() => {
      setMessage("");
      closeModal(); // Close modal after the message is shown
    }, 2000);
  };

  // Close modal when clicking outside the modal content (on the backdrop)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal if clicking outside the modal content
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleBackdropClick} // Close modal when clicking on backdrop
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[95%] max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

            {/* Profile photo section */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
                <label className="absolute bottom-0 right-0 bg-[#00C795] text-white rounded-full p-2 cursor-pointer hover:bg-[#007970]">
                  <input type="file" className="hidden" onChange={handlePhotoUpload} />
                  📷
                </label>
              </div>
              <p className="text-gray-600 text-sm">Click on the icon to upload a new photo</p>
            </div>

            {/* Username field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#00C795]"
              />
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-[#00C795]"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={closeModal} // Close the modal on clicking "Cancel"
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-[#00C795] text-white rounded-md hover:bg-[#007970]"
              >
                Update Profile
              </button>
            </div>

            {/* Success message */}
            {message && (
              <p className="text-green-600 mt-4 text-center font-semibold">{message}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
