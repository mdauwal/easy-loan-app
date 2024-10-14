// SuccessModal.jsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SuccessModal = ({ isOpen, onClose }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-30%)',
    config: { tension: 200, friction: 20 },
  });

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
    <button
      className="bg-[#00C795] hover:bg-[#135D54] text-white px-4 py-2 rounded mx-auto block"
      onClick={onClose}
    >
      Okay
    </button>
  </animated.div>
</div>

  );
};

export default SuccessModal;
