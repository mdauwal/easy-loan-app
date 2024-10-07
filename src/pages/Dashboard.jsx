import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, BellIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import pana from "../assets/pana.png";
import help from "../assets/help.png";
import recoverIcon from "../assets/recoverIcon.png";
import signIcon from "../assets/signIcon.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  {
    name: "Loan Application",
    href: "/loan-app",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Loan Underwriting",
    href: "/underwriter",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Collection",
    href: "/collection",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Staff",
    href: "/staff",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "CRM", href: "crm", icon: ChartPieIcon, current: false },
  { name: "Administration", href: "admin", icon: UsersIcon, current: false },
  { name: "Debt Management", href: "debt", icon: FolderIcon, current: false },
  {
    name: "Bridge Loan",
    href: "bridge-loan",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Customer Centric",
    href: "customer",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "General Setup", href: "setup", icon: ChartPieIcon, current: false },
  { name: "Report", href: "report", icon: ChartPieIcon, current: false },
];

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Log out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const currentTime = new Date().toLocaleString();

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());  // State for interactive calendar

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
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
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? "text-[#072320]"
                                    : "text-[#072320] group-hover:text-[#072320]",
                                  "h-6 w-6 shrink-0"
                                )}
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li></li>
                    <li className="mt-auto">
                      <Link
                        to="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[#072320] hover:bg-[#EAFFFA] hover:text-[#072320]"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-[#072320] group-hover:text-[#072320]"
                        />
                        Settings
                      </Link>
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
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#EAFFFA] text-[#072320]"
                              : "text-[#072320] hover:bg-[#EAFFFA] hover:text-[#072320]",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? "text-[#072320]"
                                : "text-[#072320] group-hover:text-[#072320]",
                              "h-6 w-6 shrink-0"
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <Link
                    to="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-[#072320] group-hover:text-[#072320]"
                    />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72 ">
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
  <div className="hidden sm:flex flex-col items-center justify-center mt-10 z-10 mr-10 text-center bg-[#ffffff] p-5 rounded-md shadow-lg">
    <img className="rounded-full mb-4" src={profile} alt="user" />
    <h2 className="text-lg font-semibold text-[#343434]">
      Adekunle Adebona
    </h2>
    <p className="text-sm text-[#343434]">UI/UX Designer</p>
  </div>
</div>
<div className="grid grid-cols-3 gap-5">
  {/* Application Card */}
<div className="col-span-3 sm:col-span-2 text-[#384642] p-5 mt-5 ml-7 rounded-md bg-[#ffffff] h-full shadow-lg">
  <div className="flex justify-between">
    <h1 className="mr-5 font-bold text-lg">Application</h1>
    <Link to="#" className="text-right text-[#135D54]">See more</Link>
  </div>

  {/* Inner Cards */}
  <div className="flex flex-col sm:flex-row gap-5 mt-5">
    {/* Recovery Card */}
    <div className="w-full sm:w-1/3 p-4 bg-[#DDFFF7] rounded-md">
      <img src={recoverIcon} alt="Recovery Icon" className="" />
      <h1 className="font-semibold text-lg mt-2">Recovery</h1>
      <div className="flex justify-between items-center mt-4">
        <p>15/10/2024</p>
        <button className="bg-[#00C795] text-white px-4 py-1 rounded">Active</button>
      </div>
    </div>

    {/* Single Sign-on Card */}
    <div className="w-full sm:w-1/3 p-4 bg-[#DDFFF7] rounded-md">
      <img src={signIcon} alt="Sign-on Icon" className="" />
      <h1 className="font-semibold text-lg mt-2">Single Sign-on</h1>
      <div className="flex justify-between items-center mt-4">
        <p>15/10/2024</p>
        <button className="bg-[#00C795] text-white px-4 py-1 rounded">Active</button>
      </div>
    </div>
  </div>
</div>


  {/* Calendar and Help Widgets */}
  <div className="hidden sm:flex col-span-1 row-span-2 flex-col space-y-5">
    {/* Interactive Calendar Widget */}
    <div className="bg-white p-6 rounded-md shadow-lg">
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="react-calendar"
      />
    </div>

    {/* Help Widget */}
    <div className="bg-white p-5 rounded-md shadow-lg flex flex-col items-center text-center">
      <img className="rounded-full mb-4" src={help} alt="Help" />
      <h2 className="text-lg font-semibold text-[#343434]">Need help?</h2>
      <p className="text-sm text-[#343434]">Having trouble with the system? Reach out for assistance.</p>
    </div>
  </div>
</div>

{/* Help Widget Ends */}
        </div>
      </div>
    </>
  );
}
