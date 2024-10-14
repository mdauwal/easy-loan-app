import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
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
import LoanDetailsTab from "./LoanDetailsTab";
import { loanData } from "./data";
import DeclineModal from "./DeclineModal";
import UploadModal from "./UploadModal";
import { Link } from "react-router-dom";


const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: home, current: true },
  {
    name: "Loan Application",
    href: "/loan-app/customer",
    icon: loanIcon,
    current: false,
    hasDropdown: true,
    children: [
      { name: "Customer", href: "/loan-app/customer", current: true },
      { name: "Declined", href: "/loan-app/declined" },
      { name: "Adjust", href: "/loan-app/adjust" },
      { name: "Loan Status", href: "/loan-app/status" },
      { name: "Loan Restructuring", href: "/loan-app/restructure" },
      { name: "Loan Top-up", href: "/loan-app/top-up" },
    ],
  },
  {
    name: "Loan Underwriting",
    href: "#",
    icon: underwriterIcon,
    current: false,
    hasDropdown: true,
    children: [
      { name: "Review", href: "#" },
      { name: "Approval", href: "#" },
      { name: "Disbursement", href: "#" },
      { name: "Loan Re-assignment", href: "#" },
    ],
  },
  {
    name: "Collection",
    href: "#",
    icon: collectIcon,
    current: false,
    hasDropdown: true,
    children: [
      { name: "Repayment", href: "#" },
      { name: "Summary", href: "#" },
      { name: "Report", href: "#" },
    ],
  },
  {
    name: "Staff",
    href: "#",
    icon: staffIcon,
    current: false,
    hasDropdown: true,
    children: [{ name: "Loan", href: "#" }],
  },
  {
    name: "CRM",
    href: "#",
    icon: crmIcon,
    current: false,
    hasDropdown: true,
    children: [
      { name: "Add Client", href: "#" },
      { name: "Clients", href: "#" },
      { name: "Notification", href: "#" },
      { name: "Customer Account Tier", href: "#" },
    ],
  },
  {
    name: "Administration",
    href: "#",
    icon: adminIcon,
    current: false,
    hasDropdown: true,
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

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Log out", href: "/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LoanTopup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [isCompleteReviewModalOpen, setIsCompleteReviewModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [activeTab, setActiveTab] = useState("Information"); // Default to 'Information' tab
  const [filteredData, setFilteredData] = useState(loanData); // State for filtered data

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Case-insensitive search
    setSearchTerm(searchTerm);

    // Filter based on Application ID, first name, last name, email, and amount
    const filtered = loanData.filter(
      (loan) =>
        loan.ref.toLowerCase().includes(searchTerm) || // Application ID
        loan.firstName.toLowerCase().includes(searchTerm) || // First name
        loan.lastName.toLowerCase().includes(searchTerm) || // Last name
        loan.email.toLowerCase().includes(searchTerm) || // Email
        loan.amount.toLowerCase().includes(searchTerm) // Amount
    );

    setFilteredData(filtered); // Update the filtered data
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // State for dropdown

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name); // Toggle dropdown
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

   // Modal handling functions
   const handleDeclineLoan = () => {
    setIsDeclineModalOpen(true); // Open Decline modal
  };
  const handleCompleteReview = () => {
    setIsCompleteReviewModalOpen(true); // Open Complete Review modal
  };
  const handleCloseDeclineModal = () => {
    setIsDeclineModalOpen(false); // Close Decline modal
  };
  const handleCloseCompleteReviewModal = () => {
    setIsCompleteReviewModalOpen(false); // Close Complete Review modal
  };


  return (
    <>
      <div>
        {/* Sidebar and Header */}
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
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-[#135D54] px-4 shadow-sm sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-[#ffffff] lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Right-aligned section */}
            <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
              {/* Separator */}
              
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
              {/* Separator */}
              <div
                aria-hidden="true"
                className="hidden lg:block lg:h-6 lg:w-px font-semibold lg:bg-[#ffffff]"
              />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <span className="flex items-center lg:flex lg:items-center">
                  <div 
  aria-hidden="true" 
  className="hidden sm:block mr-4 text-sm leading-6 text-white"
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
                      className="sm:display-block h-8 w-8 rounded-full bg-gray-50"
                    />
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 text-gray-400"
                    />
                  </span>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <Link
                        to={item.href}
                        className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>

          {/* Table Details */}
          <div className="mt-10 z-10 bg-[#ffffff] ml-4 mr-4 lg:ml-10 lg:mr-10 p-5 rounded-md shadow-lg">
            <div className="flex items-center mb-4">
              <div className="relative w-full sm:w-1/2 md:w-1/3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full p-2 pr-10 pl-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Render filtered results */}
            <div>
              {filteredData.length > 0 &&
                filteredData.map((loan) => (
                  <LoanDetailsTab key={loan.id} details={loan} />
                ))}
            </div>

            {/* Conditionally rendered details */}
            <div>
              <LoanDetailsTab details={loanData[activeTab]} />
            </div>

            
          </div>
          {/* Decline Loan and Complete Review Buttons */}
<div className="mt-5 mr-0 sm:mr-10 flex flex-col sm:flex-row justify-end mb-10 p-1 space-y-3 sm:space-y-0 sm:space-x-3">
  <button
    onClick={handleDeclineLoan}
    className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 outline outline-1 outline-offset-0 font-semibold border border-[#FF0000] bg-[#Ffffff] text-[#FF0000] rounded-md"
  >
    Decline Loan
  </button>
  <div>
    <button className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 bg-[#00C795] text-white rounded-md" onClick={() => setIsUploadModalOpen(true)}>Complete Review</button>
    <UploadModal
      isOpen={isUploadModalOpen}
      onClose={() => setIsUploadModalOpen(false)}
    />
  </div>
</div>
{/* Render the modals conditionally */}
<DeclineModal isOpen={isDeclineModalOpen} closeModal={handleCloseDeclineModal} />
      {/* <UploadModal isOpen={isCompleteReviewModalOpen} closeModal={handleCloseCompleteReviewModal} /> */}

          {/* Help Widget Ends */}
        </div>
      </div>
    </>
  );
}
