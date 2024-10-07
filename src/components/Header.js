// components/Header.js
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const { setSidebarOpen } = useContext(SidebarContext);

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-[#135D54] px-4 shadow-sm sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-white lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Header;
