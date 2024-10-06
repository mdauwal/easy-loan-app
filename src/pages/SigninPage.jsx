import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState(""); // State to track password input
  const [errorMessage, setErrorMessage] = useState(""); // State to track error message
  const currentDate = new Date().getFullYear();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setErrorMessage(""); // Clear error if password is valid
    } else {
      setErrorMessage("Password must be at least 8 characters."); // Set error if password is invalid
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on form submission
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
    } else {
      console.log("Form submitted");
      // Example redirect to login page
      // navigate("/login"); // Use the appropriate navigation logic
    }
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
                <div>
                  <div className="mt-2">
                    <input
                      id="uname"
                      name="uname"
                      type="text"
                      required
                      autoComplete="uname"
                      placeholder="Username"
                      className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-[#BFCCC9] placeholder:text-[#BFCCC9] focus:ring-2 focus:ring-inset focus:ring-[#00C795] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

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
                      className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-[#BFCCC9] placeholder:text-[#BFCCC9] focus:ring-2 focus:ring-inset focus:ring-[#00C795] sm:text-sm sm:leading-6"
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-[#000000] h-5 w-5" /> // Properly sized icon
                      ) : (
                        <FaEye className="text-[#000000] h-5 w-5" /> // Properly sized icon
                      )}
                    </span>
                  </div>
                  {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                  )}
                </div>

                <div>
                  <Link to='/dashboard'
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#00C795] hover:bg-[#007970] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007970]"
                  >
                    Sign in
                  </Link>
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

            <div className="mt-20">
              <div className="mt-6 flex justify-center xs:text-xs">
                <p className="text-sm text-[#135D54]">
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
