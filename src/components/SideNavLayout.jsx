import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"
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

import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", icon: home, current: true },
  { name: "Loan Application", href: "#", icon: loanIcon, current: false, hasDropdown: true,
    children: [
      { name: "Customer", href: "/loan-app/customer" },
      { name: "Declined", href: "/loan-app/declined" },
      { name: "Adjust", href: "/loan-app/adjust" },
      { name: "Loan Status", href: "/loan-app/status" },
      { name: "Loan Restructuring", href: "/loan-app/restructure" },
      { name: "Loan Top-up", href: "/loan-app/top-up" },
    ],
   },
  { name: "Loan Underwriting", href: "#", icon: underwriterIcon, current: false, hasDropdown: true,
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

export default function SideNavLayout() {
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
  setOpenDropdown(openDropdown === name ? null : name); // Toggle dropdown
};

const handleDateChange = (newDate) => {
  setDate(newDate);
  console.log("Selected date:", newDate);
};

const openProfileModal = () => {
  setProfileModalOpen(true); // Open the ProfileModal when clicked
};

const closeProfileModal = () => {
  setProfileModalOpen(false); // Close the ProfileModal
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

          {/* ProfileModal component */}
          {profileModalOpen && (
            <ProfileModal isOpen={profileModalOpen} onClose={closeProfileModal} />
          )}

          {/* Help Widget Ends */}
        </div>
      </div>
    </>
  );
}
