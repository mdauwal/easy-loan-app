import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SuccessModal = ({ isOpen, onClose }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-30%)',
    config: { tension: 200, friction: 20 },
  });

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigate = () => {
    onClose(); // Close the modal
    navigate('/underwriter/review'); // Navigate to the desired route
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <animated.div
        style={animation}
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
      >
        <h2 className="text-lg font-bold mb-4 text-center">Upload Successful!</h2>
        <p className="mb-6 text-gray-700 text-center">
          Your Mono Bank Statement has been uploaded successfully.
        </p>

        {/* Button triggering the navigation */}
        <div className="flex justify-center items-center w-full">
  <button
    onClick={handleNavigate}
    className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded w-full sm:w-2/3 md:w-1/4 lg:w-1/5"
  >
    Okay
  </button>
</div>

      </animated.div>
    </div>
  );
};

export default SuccessModal;
