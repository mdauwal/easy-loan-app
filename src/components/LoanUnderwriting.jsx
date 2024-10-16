import React, { useState, useEffect } from "react";
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
import { FilterModal } from "../features/FilterModal";
import Pagination from "./Pagination";
import loanData from "../pages/LoanData";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: home, current: true },
  { name: "Loan Application", href: "/loan-app/customer", icon: loanIcon, current: false, hasDropdown: true,
    children: [
      { name: "Customer", href: "/loan-app/customer" },
      { name: "Declined", href: "/loan-app/declined" },
      { name: "Adjust", href: "/loan-app/adjust" },
      { name: "Loan Status", href: "/loan-app/status" },
      { name: "Loan Restructuring", href: "/loan-app/restructure" },
      { name: "Loan Top-up", href: "/loan-app/top-up" },
    ],
   },
  { name: "Loan Underwriting", href: "/underwriter/review", icon: underwriterIcon, current: false, hasDropdown: true,
    children: [
      { name: "Review", href: "/underwriter/review" },
      { name: "Approval", href: "/underwriter/approval" },
      { name: "Disbursement", href: "/underwriter/disbursement" },
      { name: "Loan Re-assignment", href: "/underwriter/re-assignment" },
    ],
   },
  { name: "Collection", href: "#", icon: collectIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Repayment", href: "/collection/monthly" },
      { name: "Summary", href: "/collection/annual" },
      { name: "Report", href: "/collection/report" },
    ],
   },
  { name: "Staff", href: "#", icon: staffIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Loan", href: "/staff/loan" },
    ],
   },
  { name: "CRM", href: "#", icon: crmIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Add Client", href: "/crm/add-client" },
      { name: "Clients", href: "/crm/add-client" },
      { name: "Notification", href: "/crm/notification" },
      { name: "Customer Account Tier", href: "/crm/account-tier" },
    ],
   },
  { name: "Administration", href: "#", icon: adminIcon, current: false, hasDropdown: true, 
    children: [
      { name: "Product", href: "/admin/product" },
      { name: "Underwriter", href: "/admin/underwriter" },
      { name: "Staff", href: "/admin/staff" },
      { name: "Loan Tenor", href: "/admin/loan-tenor" },
      { name: "Report", href: "/admin/report" },
    ],
   },
  { name: "Debt Management", href: "debt", icon: debtIcon, current: false },
  { name: "Bridge Loan", href: "bridge-loan", icon: bridgeIcon, current: false },
  { name: "Customer Centric", href: "customer", icon: centricIcon, current: false },
  { name: "General Setup", href: "setup", icon: setupIcon, current: false },

  // Example of dropdown with nested menu items (e.g., for "Report")
  {
    name: "Report",
    icon: reportIcon,
    href: "#",
    current: false,
    hasDropdown: true,
    children: [
      { name: "Monthly Report", href: "/report/monthly" },
      { name: "Annual Report", href: "/report/annual" },
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

const currentTime = new Date().toLocaleString();

export default function LoanUnderwriting() {
    const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reassignedCount, setReassignedCount] = useState(2); // This is for the notification badge
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 10; // Number of items to display per page

  // Generate 100 items for the table
  const generateData = () => {
    const items = [];
    for (let i = 1; i <= 100; i++) {
      items.push({
        id: i,
        ref: `Ref12345${i}`,
        amount: `N${(Math.random() * 500000).toFixed(0)}`, // Random loan amounts up to N500,000
        email: `adebona${i}@credit.com`,
        firstName: "Adekunle",
        middleName: "Samuel",
        lastName: "Adebona",
        date: `2023-${Math.floor(Math.random() * 12 + 1)
          .toString()
          .padStart(2, "0")}-${Math.floor(Math.random() * 28 + 1)
          .toString()
          .padStart(2, "0")}`, // Random date in 2023
      });
    }
    return items;
  };

  const [currentItems, setCurrentItems] = useState(generateData());

  // Store paginated items for the current page
  const [paginatedItems, setPaginatedItems] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Update paginatedItems whenever the page changes or the items are modified
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsForCurrentPage = currentItems.slice(indexOfFirstItem, indexOfLastItem);
    
    setPaginatedItems(itemsForCurrentPage); // Update paginated items based on the current page
  }, [currentPage, currentItems]); // Re-run whenever currentPage or currentItems changes

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update the current page
  };

    
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null); // State for dropdown

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name); // Toggle dropdown
  };



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
              {/* Separator */}
              <div
                aria-hidden="true"
                className="hidden lg:block lg:h-6 lg:w-px font-semibold lg:bg-[#ffffff]"
              />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <span className="hidden lg:flex lg:items-center">
                    <div
                      aria-hidden="true"
                      className="mr-4 text-sm leading-6 text-white"
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

          <div className="flex gap-2 items-center mt-10 ml-5">
                <p className="text-[#4A5D58]">Loan Underwiting</p>
                <ArrowRightIcon className="h-5 w-5 text-[#00C796] font-semibold" />
                <Link to="#" className="text-[#4A5D58] hover:underline">
                  Review
                </Link>
              </div>

          <div className="p-6 bg-white">
  {/* Search and Filter Section */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
    {/* Search Input Section */}
    <div className="w-full md:w-1/3 relative">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
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
      </div>
    </div>

    {/* Buttons Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* View Re-assigned Loan Button */}
      <button className="relative bg-[#FF0909] text-sm hover:bg-red-600 text-[#ffffff] px-6 py-2 rounded-md w-full sm:w-auto text-center">
        View Re-assigned Loan
        {reassignedCount > 0 && (
          <span className="absolute top-0 right-0 inline-block w-5 h-5 bg-[#ffffff] text-black text-xs font-bold rounded-full">
            {reassignedCount}
          </span>
        )}
      </button>

      {/* Filter Button */}
      <button
        onClick={openModal}
        className="bg-[#00C795] hover:bg-[#135D54] text-white px-6 py-2 rounded-md w-full sm:w-auto"
      >
        Filter
      </button>

      {/* Filter Modal */}
      <FilterModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  </div>

  {/* Table Section */}
  <div className="overflow-x-auto text-xs mb-5 rounded-md shadow-lg flex-grow p-4">
    <table className="w-full">
      <thead className="bg-[#FFFFFF] text-[#4A5D58]">
        <tr>
          <th className="px-4 py-2 border text-left">S/N</th>
          <th className="px-4 py-2 border text-left">Customer Ref.</th>
          <th className="px-4 py-2 border text-left">Loan Amount</th>
          <th className="px-4 py-2 border text-left">Email Address</th>
          <th className="px-4 py-2 border text-left">First Name</th>
          <th className="px-4 py-2 border text-left">Middle Name</th>
          <th className="px-4 py-2 border text-left">Last Name</th>
          <th className="px-4 py-2 border text-left">Application Date</th>
          <th className="px-4 py-2 border text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {paginatedItems.map((row, index) => (
          <tr key={row.id} className="hover:bg-gray-100">
            <td className="px-4 py-2 border border-gray-200">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
            <td className="px-4 py-2 border border-gray-200">{row.ref}</td>
            <td className="px-4 py-2 border border-gray-200">{row.amount}</td>
            <td className="px-4 py-2 border border-gray-200">{row.email}</td>
            <td className="px-4 py-2 border border-gray-200">{row.firstName}</td>
            <td className="px-4 py-2 border border-gray-200">{row.middleName}</td>
            <td className="px-4 py-2 border border-gray-200">{row.lastName}</td>
            <td className="px-4 py-2 border border-gray-200">{row.date}</td>
            <td className="px-4 py-2 border border-gray-200">
              <Link to={`/customer-details/${row.id}`}>
                <button className="text-[#007BEC] hover:underline">View</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <Pagination
    currentPage={currentPage}
    totalItems={loanData.length}
    itemsPerPage={itemsPerPage}
    onPageChange={handlePageChange}
  />
</div>


          {/* Help Widget Ends */}
        </div>
      </div>
    </>
  );
}
