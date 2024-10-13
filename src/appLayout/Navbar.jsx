import { Bars3Icon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react"; // Import from Headless UI
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

const Navbar = ({ onSidebarToggle }) => {
  const userNavigation = [
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Log out", href: "/login" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <button onClick={onSidebarToggle} className="lg:hidden">
            <Bars3Icon className="h-6 w-6" />
          </button>
          <img src={logo} alt="Logo" className="h-8 w-auto ml-4" />
        </div>
        <div className="flex items-center gap-4">
          <button>
            <BellIcon className="h-6 w-6 text-gray-500" />
          </button>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="flex items-center space-x-2">
                <img src={profile} alt="Profile" className="h-8 w-8 rounded-full" />
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      to={item.href}
                      className={`block px-4 py-2 text-gray-700 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
