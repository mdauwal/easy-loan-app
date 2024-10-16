import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify CSS
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import home from "../assets/home.png"; // Example icon
import loanIcon from "../assets/loanIcon.png"; // Example icon

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: home, current: true },
  { name: "Loan Application", href: "/loan-app/customer", icon: loanIcon, current: false },
  // Add more navigation items here...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ViewProfile() {
  const location = useLocation();
  const { user } = location.state || { user: { name: "Guest User", email: "guest@example.com" } };
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteConfirm = () => {
    toast.success("Account deleted successfully!", { position: "top-right" });
    setIsDeleteModalOpen(false); // Close the modal after confirmation
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true); // Open confirmation modal
  };

  return (
    <>
      <ToastContainer />
      <Dialog open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Are you sure?</h3>
            <p className="text-sm text-gray-600 mt-2">
              Do you really want to delete your account? This action cannot be undone.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <div className="lg:pl-72">
        {/* Sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-white border-r">
          <div className="flex items-center justify-center h-16 border-b">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className={classNames(
                    item.current
                      ? "text-green-600 font-semibold"
                      : "text-gray-600 hover:text-green-600"
                  )}>
                    <div className="flex items-center gap-x-3">
                      <img src={item.icon} alt={item.name} className="h-5 w-5" />
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Profile Details</h1>
            <button
              onClick={handleDeleteClick}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Account
            </button>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center gap-6">
              <img src={profile} alt="Profile" className="h-24 w-24 rounded-full" />
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">About</h3>
              <p className="text-sm text-gray-600 mt-2">
                This section contains personal details and preferences of the user. 
                You can add more descriptive information here to enhance the profile UI.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600">Logged in from Lagos, Nigeria on {new Date().toLocaleDateString()}</li>
                <li className="text-sm text-gray-600">Updated loan application status</li>
                <li className="text-sm text-gray-600">Joined a CRM session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
