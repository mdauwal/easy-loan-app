import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState hook
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function Signin() {
  const [username, setUsername] = useState(""); // to track input value
  const [usernameError, setUsernameError] = useState(""); // to track username validation error
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState(""); // State to track password input
  const [passwordError, setPasswordError] = useState(""); // State to track password error
  const [formValid, setFormValid] = useState(false); // State to track form validity
  const navigate = useNavigate(); // Hook for navigation after login
  const currentDate = new Date().getFullYear();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Validate username input
  const validateUsername = (value) => {
    setUsername(value);
    if (value.length < 5) {
      setUsernameError("Username must be at least 5 characters long.");
    } else {
      setUsernameError(""); // Clear error if username is valid
    }
    checkFormValidity(value, password); // Pass the updated username and current password
  };

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError(""); // Clear error if password is valid
    }
    checkFormValidity(username, value); // Pass the current username and updated password
  };

  // Check if the form is valid
  const checkFormValidity = (updatedUsername, updatedPassword) => {
    if (updatedUsername.length >= 5 && updatedPassword.length >= 8) {
      setFormValid(true); // Form is valid
    } else {
      setFormValid(false); // Form is invalid
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) {
      console.log("Form is not valid");
      return;
    }

    console.log("Form submitted");

    // Navigate to the dashboard after successful form submission
    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col lg:flex-row">
        {/* Left Section (hidden on small screens) */}
        <div className="relative hidden w-full lg:w-1/2 lg:block bg-[#00C795]">
          <div className="absolute inset-0 h-full w-full flex flex-col justify-start mt-20 p-10">
            <h1 className="text-white text-5xl font-bold mb-3">Adroit</h1>
            <p className="text-white text-sm mt-4 text-justify">
              We evaluate and monitor the non-performing loan accounts and
              implement a recovery action plan to achieve timely and maximum
              recovery at a minimal cost and appropriate turn-around time
              through acceptable common practices aligned with legal framework
              and standards.
            </p>
          </div>
        </div>

        {/* Form Section (responsive on all screens) */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center px-4 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex justify-center mt-10">
              <img alt="our brand" src={logo} className="h-10 w-auto mt-5" />
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Input */}
                <div>
                  <div className="mt-2">
                    <input
                      id="uname"
                      name="uname"
                      type="text"
                      value={username}
                      required
                      autoComplete="uname"
                      placeholder="Username"
                      onChange={(e) => validateUsername(e.target.value)} // Validate on change
                      className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795] placeholder:text-[#BFCCC9] focus:ring-2 focus:ring-inset focus:ring-[#00C795] sm:text-sm sm:leading-6"
                    />
                  </div>
                  {usernameError && (
                    <p className="text-red-500 text-sm mt-2">{usernameError}</p>
                  )}
                </div>

                {/* Password Input */}
                <div className="relative">
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle password type
                      value={password} // Controlled input for password
                      onChange={handlePasswordChange} // Handle password change
                      required
                      autoComplete="current-password"
                      placeholder="Password"
                      className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795] placeholder:text-[#BFCCC9] focus:ring-2 focus:ring-inset focus:ring-[#00C795] sm:text-sm sm:leading-6"
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-[#000000] h-5 w-5" />
                      ) : (
                        <FaEye className="text-[#000000] h-5 w-5" />
                      )}
                    </span>
                  </div>
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className={`flex w-full justify-center rounded-md bg-[#00C795] hover:bg-[#007970] hover:scale-105 transition-all duration-300 transform px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007970] ${
                      formValid ? "" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!formValid} // Disable button if form is invalid
                  >
                    Sign in
                  </button>
                  <div className="flex items-center justify-center p-10 gap-2">
                    <p className="text-#4A5D58">Forgot password?</p>
                    <Link
                      to="/verify-login"
                      className="font-semibold text-[#00C795] hover:text-[#007970]"
                    >
                      Click here
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-20 ">
              <div className="mt-6 flex justify-center">
                <p className="text-xs text-[#135D54]">
                  &copy; {currentDate} CreditWave Finance Limited | All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
