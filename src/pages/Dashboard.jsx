import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon, BellIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import pana from "../assets/pana.png";
import help from "../assets/help.png";
import recoverIcon from "../assets/recoverIcon.png";
import signIcon from "../assets/signIcon.png";
import loanIcon from "../assets/loanIcon.png";
import home from "../assets/home.png";
import underwriterIcon from "../assets/underwriterIcon.png";
import collectIcon from "../assets/collectIcon.png";
import staffIcon from "../assets/staffIcon.png";
import crmIcon from "../assets/crmIcon.png";
import adminIcon from "../assets/adminIcon.png";
import bridgeIcon from "../assets/bridgeIcon.png";
import centricIcon from "../assets/centricIcon.png";
import debtIcon from "../assets/debtIcon.png";
import reportIcon from "../assets/reportIcon.png";
import setupIcon from "../assets/setupIcon.png";
import ProfileModal from "./ProfileModal";

import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: home, current: true },
  { name: "Loan Application", href: "/loan-app/customer", icon: loanIcon, current: false, hasDropdown: true,
    children: [
      { name: "Customer", href: "/loan-app/customer", current: true },
      { name: "Declined", href: "/loan-app/declined" },
      { name: "Adjust", href: "/loan-app/adjust" },
      { name: "Loan Status", href: "/loan-app/status" },
      { name: "Loan Restructuring", href: "/loan-app/restructure" },
      { name: "Loan Top-up", href: "/loan-app/top-up" },
    ],
   },
  { name: "Loan Underwriting", href: "#", icon: underwriterIcon, current: false, hasDropdown: true,
    children: [
      { name: "Review", href: "#" },
      { name: "Approval", href: "#" },
      { name: "Disbursement", href: "#" },
      { name: "Loan Re-assignment", href: "#" },
    ],
   },
  { name: "Collection", href: "#", icon: collectIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Repayment", href: "#" },
      { name: "Summary", href: "#" },
      { name: "Report", href: "#" },
    ],
   },
  { name: "Staff", href: "#", icon: staffIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Loan", href: "#" },
    ],
   },
  { name: "CRM", href: "#", icon: crmIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Add Client", href: "#" },
      { name: "Clients", href: "#" },
      { name: "Notification", href: "#" },
      { name: "Customer Account Tier", href: "#" },
    ],
   },
  { name: "Administration", href: "#", icon: adminIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Product", href: "#" },
      { name: "Underwriter", href: "#" },
      { name: "Staff", href: "#" },
      { name: "Loan Tenor", href: "#" },
      { name: "Report", href: "#" },
    ],
   },
  { name: "Debt Management", href: "#", icon: debtIcon, current: false },
  { name: "Bridge Loan", href: "#", icon: bridgeIcon, current: false },
  { name: "Customer Centric", href: "#", icon: centricIcon, current: false },
  { name: "General Setup", href: "#", icon: setupIcon, current: false },

  // Example of dropdown with nested menu items (e.g., for "Report")
  {
    name: "Report",
    icon: reportIcon,
    href: "#",
    current: false,
    hasDropdown: true,
    children: [
      { name: "Monthly Report", href: "#" },
      { name: "Annual Report", href: "#" },
    ],
  },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const currentTime = new Date().toLocaleString();

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date()); // State for interactive calendar
  const [openDropdown, setOpenDropdown] = useState(null); // State for dropdown
  

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name); // Toggle dropdown
  };


  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true); // Open profile modal when clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle dropdown menu visibility
  };
  
  const userNavigation = [
    { name: "Profile", onClick: handleProfileClick },
    { name: "Settings", href: "#" },
    { name: "Log out", href: "/login" },
  ];

  return (
    <>
      <div>
      <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img alt="our brand" src={logo} className="h-8 w-auto" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-[#EAFFFA] text-[#072320]"
                                  : "text-[#072320] hover:bg-[#EAFFFA] hover:text-[#135D54]",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              <img
                                src={item.icon}
                                alt={item.name} // Optional: For accessibility
                                className="h-6 w-6 shrink-0" // Adjust the size of the icon if needed
                              />
                              {item.name}
                              {item.hasDropdown && (
                                <button
                                  type="button"
                                  onClick={() => toggleDropdown(item.name)}
                                >
                                  {openDropdown === item.name ? (
                                    <ChevronUpIcon className="w-5 h-5" />
                                  ) : (
                                    <ChevronDownIcon className="w-5 h-5" />
                                  )}
                                </button>
                              )}
                            </Link>
                            {/* Render dropdown if it's open */}
                            {item.hasDropdown && openDropdown === item.name && (
                              <ul className="pl-8 mt-2 space-y-1">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.href}
                                      className="flex items-center p-2 space-x-3 rounded-md text-gray-600 hover:bg-gray-100"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
          
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-[#ffffff] px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img alt="logo" src={logo} className="h-8 w-auto" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#EAFFFA] text-[#072320]"
                              : "text-[#072320] hover:bg-[#EAFFFA] hover:text-[#135D54]",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <img
                            src={item.icon}
                            alt={item.name} // Optional: For accessibility
                            className="h-6 w-6 shrink-0" // Adjust the size of the icon if needed
                          />
                          {item.name}
                          {item.hasDropdown && (
                            <button
                              type="button"
                              onClick={() => toggleDropdown(item.name)}
                            >
                              {openDropdown === item.name ? (
                                <ChevronUpIcon className="w-5 h-5" />
                              ) : (
                                <ChevronDownIcon className="w-5 h-5" />
                              )}
                            </button>
                          )}
                        </Link>
                        {item.hasDropdown && openDropdown === item.name && (
                          <ul className="pl-8 mt-2 space-y-1">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.href}
                                  className="flex items-center p-2 space-x-3 rounded-md text-gray-600 hover:bg-gray-100"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>


              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72 h-auto">
        <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-[#135D54] px-4 shadow-sm sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-[#ffffff] lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>

      <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
        <div
          aria-hidden="true"
          className="hidden lg:block lg:h-6 lg:w-px font-semibold lg:bg-[#ffffff]"
        />
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <div className="relative">
            <BellIcon aria-hidden="true" className="h-6 w-6 text-white" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
          </div>
        </button>

        <div
          aria-hidden="true"
          className="hidden lg:block lg:h-6 lg:w-px font-semibold lg:bg-[#ffffff]"
        />

<Menu as="div" className="relative">
  <MenuButton 
    onClick={toggleMenu}
    className="-m-1.5 flex items-center p-1.5">
    <span className="sr-only">Open user menu</span>
    <span className="flex items-center">
      <div 
        aria-hidden="true" 
        className="hidden sm:block mr-2 text-sm leading-6 text-white"
      >
        <p className="text-sm font-medium font-semibold text-right">
          Adekunle Adebona
        </p>
        <p className="text-xs">
          Adekunle.adebona@creditwaveng.com
        </p>
      </div>

      <img
        alt="Profile"
        src={profile}
        className="h-8 w-8 rounded-full bg-gray-50"
      />
      {/* Toggle between ChevronUp and ChevronDown */}
      {isMenuOpen ? (
        <ChevronUpIcon className="ml-2 h-5 w-5 text-gray-400" />
      ) : (
        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
      )}
    </span>
  </MenuButton>

  <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5">
    {userNavigation.map((item) => (
      <MenuItem key={item.name}>
        {item.onClick ? (
          <button
            onClick={item.onClick}
            className="block w-full px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </button>
        ) : (
          <Link
            to={item.href}
            className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </Link>
        )}
      </MenuItem>
    ))}
  </MenuItems>
</Menu>

      </div>

      {/* Render the ProfileModal */}
      <ProfileModal isOpen={isProfileModalOpen} closeModal={() => setIsProfileModalOpen(false)} />
    </div>

          <div className="grid grid-cols-3 gap-5 bg-[#F3F4F6]">
            {/* Welcome Back Card */}
            <div className="flex gap-12 col-span-3 sm:col-span-2 text-white p-5 mt-10 ml-7 rounded-md bg-[#00C795]">
              <div>
                <h1 className="mr-5 font-bold text-lg">Welcome back Kenny!</h1>
                <p>Your last login was {currentTime} </p>
              </div>
              <div className="ml-10">
                <img src={pana} alt="user" />
              </div>
            </div>

            {/* Profile Card */}
<div className="hidden sm:flex flex-col items-center justify-center mt-10 z-10 mr-10 text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
  <img className="rounded-full mb-4 w-24 h-24 border-4 border-[#00C796] p-1" src={profile} alt="user" />
  <h2 className="text-xl font-semibold text-[#384642]">
    Adekunle Adebona
  </h2>
  <p className="text-sm text-[#6b6b6b]">UI/UX Designer</p>
  <Link to="/view-profile" className="mt-3 bg-[#00C796] text-white font-semibold py-2 px-4 rounded hover:bg-[#009a7a] transition-colors">
    View Profile
  </Link>
</div>

          </div>
          <div className="grid mb-auto grid-cols-3 gap-5 bg-[#F3F4F6]">
            {/* Application Card */}
<div className="col-span-3 sm:col-span-2 text-[#384642] p-5 mt-5 ml-7 rounded-md bg-[#ffffff] h-auto mb-5 shadow-lg">
<div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
  <h1 className="font-bold text-xl text-[#384642]">
    Application
  </h1>
  <Link to="#" className="text-[#00C796] font-semibold hover:underline">
    See more
  </Link>
</div>


  {/* Inner Cards */}
  <div className="flex flex-col gap-5 mt-5 sm:flex-row">
    {/* Recovery Card */}
    <div className="w-full p-4 bg-[#DDFFF7] rounded-md">
      <img src={recoverIcon} alt="Recovery Icon" className="mx-auto object-contain" />
      <h1 className="font-semibold text-lg mt-2 text-center">Recovery</h1>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs sm:text-sm">15/10/2024</p>
        <button className="bg-[#135D54] text-white px-3 py-1 rounded text-xs sm:text-sm">
          Active
        </button>
      </div>
    </div>

    {/* Single Sign-on Card */}
    <div className="w-full p-4 bg-[#DDFFF7] rounded-md">
      <img src={signIcon} alt="Sign-on Icon" className="mx-auto object-contain" />
      <h1 className="font-semibold text-lg mt-2 text-center">Single Sign-on</h1>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs sm:text-sm">15/10/2024</p>
        <button className="bg-[#135D54] text-white px-3 py-1 rounded text-xs sm:text-sm">
          Active
        </button>
      </div>
    </div>
  </div>
</div>


            {/* Calendar and Help Widgets */}
<div className="hidden sm:flex md:flex flex-col space-y-5 mb-5 mr-10">
  {/* Interactive Calendar Widget */}
  <div className="bg-white mt-5 rounded-lg shadow-lg overflow-hidden">
    <Calendar
      onChange={handleDateChange}
      value={date}
      className="react-calendar custom-calendar"
    />
  </div>

  {/* Help Widget */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
    <img className="rounded-full mb-4 w-16 h-16 border-2 border-[#00C796] p-1" src={help} alt="Help" />
    <h2 className="text-xl font-semibold text-[#384642]">
      Need help?
    </h2>
    <p className="text-sm text-[#6b6b6b]">
      Having trouble with the system? Reach out for assistance.
    </p>
    <button className="mt-3 bg-[#00C796] text-white font-semibold py-2 px-4 rounded hover:bg-[#009a7a] transition-colors">
      Contact Support
    </button>
  </div>
</div>

          </div>

          {/* Help Widget Ends */}
        </div>
      </div>
    </>
  );
}
