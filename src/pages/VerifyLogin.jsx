import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import toast notification
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
import logo from "../assets/logo.png";
import lockIcon from "../assets/lockIcon.png";
import { useSpring, animated } from '@react-spring/web';

export default function VerifyLogin() {
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const [codeExpired, setCodeExpired] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Modal is open initially
  const navigate = useNavigate(); // For navigation redirection

  // Modal animation
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.95)',
    config: { duration: 300 },
  });

  // Timer countdown
  useEffect(() => {
    if (timer > 0 && !codeExpired) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      setCodeExpired(true);
      setErrorMessage("Code Expired");
    }
  }, [timer, codeExpired]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!verificationCode) {
      setErrorMessage("Code is required.");
    } else if (!/^\d{6}$/.test(verificationCode)) {
      setErrorMessage("Code must be 6 digits.");
    } else if (codeExpired) {
      setErrorMessage("Code expired. Please request a new one.");
    } else {
      // All validations are met: Show success toast and redirect
      toast.success("Verification successful!");
      setTimeout(() => navigate("/login"), 2000); // Redirect after a short delay
    }
  };

  // Reset timer when "Resend Verification Code" is clicked
  const handleResendCode = () => {
    setTimer(10);
    setCodeExpired(false);
    setVerificationCode("");
    setErrorMessage("");
  };

  // Close modal function (if you want to provide a close button or logic)
  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3F4F6]">
      {/* Backdrop */}
      <div className="absolute inset-0 flex justify-center">
        <img alt="Logo" src={logo} className="h-12 w-auto mt-10" />
      </div>

      {/* Modal */}
      <animated.div style={modalAnimation} className="relative z-10 bg-[#ffffff] p-8 rounded-md shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-5">
          <img
            src={lockIcon}
            alt="lock"
            className=" justify-center bg-[#C1FFF0] border rounded-lg px-4 py-3"
          />
        </div>

        <h1 className="text-center text-2xl font-bold text-[#135D54] mb-4">
          Verify Login
        </h1>
        <p className="text-center text-sm mb-6">
          Enter the six (6) digit verification code sent to
          <br />
          <strong>+234913****01</strong> and{" "}
          <strong>A****@creditwave.ng</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex items-center border rounded-md p-2">
            {/* Input field (with placeholder aligned to the left) */}
            <input
              type="text"
              name="verification-code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Verification code"
              disabled={codeExpired}
              className={`w-full border-0 focus:outline-none focus:ring-0 text-black placeholder:text-gray-400 ${
                codeExpired ? "text-red-500 opacity-100 " : "opacity-100"
              }`}
              
            />
            {/* Timer or "Code Expired" (aligned to the right of the placeholder) */}
            <span className="ml-4 flex flex-shrink-0 items-center text-[#00C795] text-sm transition-opacity duration-500">
              {codeExpired ? "Code Expired" : `${timer}:00`}
            </span>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#00C795] text-white py-2 rounded-md hover:scale-105 transition-all duration-300 transform"
            disabled={codeExpired}
          >
            Submit
          </button>
        </form>

        {/* Resend Verification Code after expiration */}
        {codeExpired && (
          <div className="mt-4 text-center">
            <Link
              to="#"
              className="text-sm text-[#00C795] hover:underline"
              onClick={handleResendCode}
            >
              Resend Verification Code
            </Link>
          </div>
        )}
      </animated.div>

      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
}
