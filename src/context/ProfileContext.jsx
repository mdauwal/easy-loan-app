import React, { createContext, useContext, useState } from "react";

// Create ProfileContext
const ProfileContext = createContext();

// Create custom hook to use ProfileContext
export const useProfile = () => {
  return useContext(ProfileContext);
};

// ProfileProvider component to wrap around components that need profile data
export const ProfileProvider = ({ children }) => {
  // Global state for profile photo
  const [profilePhoto, setProfilePhoto] = useState(null); // default could be a placeholder image

  // Function to handle photo upload and update the global profile photo
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result); // Update the global profile photo with the base64 image string
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  return (
    <ProfileContext.Provider value={{ profilePhoto, handlePhotoUpload }}>
      {children}
    </ProfileContext.Provider>
  );
};
