import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DeclineModal = ({ isOpen, closeModal }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg w-64 lg:w-1/3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-lg font-bold mb-4 lg:mt-0 md:mt-0 mt-5">Review Application</h3>
            <p className="mb-4">Are you sure you want to decline this loan?</p>
            <p className="mb-4">Application ID Number: CUS-122283R3838RR33433</p>
            <form>
              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Please select one or more reasons for decline:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    State of residence not supported
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Outstanding unpaid loan
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Debt-service ratio exceeded
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Salary not sufficient
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Unverified Documents
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Others
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Comments</label>
                <textarea
                  className="w-full p-2 border text-sm border-gray-300 rounded resize-none"
                  placeholder="Add your comments here"
                  rows="3"
                ></textarea>
              </div>

              {/* Modal Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="bg-[#ffffff] border-solid text-[#072320] border-2 border-gray-500 px-6 py-2 rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-[#FF6060] hover:bg-red-500 text-white px-6 py-2 rounded-md"
                >
                  Decline
                </button>
              </div>
              

            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeclineModal;
