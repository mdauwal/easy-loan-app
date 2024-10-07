// components/Sidebar.js
import { Link } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ navigation }) => {
  return (
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
  );
};

export default Sidebar;
