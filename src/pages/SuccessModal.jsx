import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SuccessModal = ({ isOpen, onClose }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-50px)',
    config: { tension: 220, friction: 15 },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <animated.div
        style={animation} // Apply animation here
        className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center"
      >
        <h2 className="text-lg font-bold text-green-600">Upload Successful!</h2>
        <p className="text-gray-700 mt-2">
          Your Mono Bank Statement has been uploaded successfully.
        </p>
        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </animated.div>
    </div>
  );
};

export default SuccessModal;
