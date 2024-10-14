import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { FaEye, FaEyeSlash } from "react-icons/fa";
import IndemnityModal from "./IndemnityModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const currentDate = new Date().getFullYear();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateUsername = (value) => {
    setUsername(value);
    if (value.length < 5) {
      setUsernameError("Username must be at least 5 characters long.");
    } else {
      setUsernameError("");
    }
    checkFormValidity(value, password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
    checkFormValidity(username, value);
  };

  const checkFormValidity = (updatedUsername, updatedPassword) => {
    setFormValid(updatedUsername.length >= 5 && updatedPassword.length >= 8);
  };

  const showToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) {
      showToast("Please fix the errors in the form!", "error");
      return;
    }

    showToast("Sign-in successful!", "success");

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000); // Navigate after the toast disappears
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/signup");
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col lg:flex-row">
        <div className="relative hidden w-full lg:w-1/2 lg:block bg-[#00C795]">
          <div className="absolute inset-0 h-full w-full flex flex-col justify-start mt-20 p-10">
            <h1 className="text-white text-5xl font-bold mb-3">Adroit</h1>
            <p className="text-white mt-4 text-justify">
            We evaluate and monitor the non-performing loan accounts and
              implement a recovery action plan to achieve timely and maximum
              recovery at a minimal cost and appropriate turn-around time
              through acceptable common practices aligned with legal framework
              and standards.
            </p>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 flex-col justify-center px-4 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex justify-center mt-10">
              <img alt="our brand" src={logo} className="h-10 w-auto mt-5" />
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    id="uname"
                    name="uname"
                    type="text"
                    value={username}
                    required
                    autoComplete="uname"
                    placeholder="Username"
                    onChange={(e) => validateUsername(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795] placeholder:text-[#BFCCC9] focus:ring-2 focus:ring-inset focus:ring-[#00C795] sm:text-sm sm:leading-6"
                  />
                  {usernameError && (
                    <p className="text-red-500 text-sm mt-2">{usernameError}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    autoComplete="current-password"
                    placeholder="Password"
                    className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795] placeholder:text-[#BFCCC9] focus:ring-2 focus:ring-inset focus:ring-[#00C795] sm:text-sm sm:leading-6"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full rounded-md bg-[#00C795] hover:bg-[#007970] px-3 py-1.5 text-white ${
                    formValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!formValid}
                >
                  Sign in
                </button>

                <div className="flex items-center justify-center gap-1">
  <p className="text-[#4A5D58]">Forgot password?</p>
  <Link
    to="/verify-login"
    className="font-semibold text-[#00C795] hover:text-[#007970]"
  >
    Click here
  </Link>
</div>

<div className="flex flex-col mb-1 sm:flex-row items-center justify-center gap-1 text-center sm:text-left">
  <p className="text-gray-600 text-sm">Need an Easy Loan Access Account?</p>
  <button
    onClick={handleSignupClick}
    className="font-semibold text-[#00C795] hover:text-[#007970] ml-0 sm:ml-2"
  >
    SIGN UP
  </button>
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

      <IndemnityModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
