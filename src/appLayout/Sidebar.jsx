// // Sidebar.jsx
// import { Link } from "react-router-dom";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { navigation } from "../pages/navigationData"; // Externalized navigation data

// const Sidebar = ({ isOpen }) => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <div className={`lg:flex ${isOpen ? "block" : "hidden"} w-72 bg-white`}>
//       <div className="flex flex-col h-screen border-r border-gray-200 px-6">
//         <div className="flex items-center h-16">
//           <img src={logo} alt="Logo" className="h-8 w-auto" />
//         </div>
//         <nav className="flex-1 overflow-y-auto">
//           <ul className="space-y-7">
//             {navigation.map((item) => (
//               <li key={item.name}>
//                 <Link to={item.href} className="flex items-center gap-x-3 p-2 rounded-md hover:bg-gray-100">
//                   <img src={item.icon} alt={item.name} className="h-6 w-6" />
//                   <span>{item.name}</span>
//                   {item.hasDropdown && (
//                     <button onClick={() => toggleDropdown(item.name)}>
//                       {openDropdown === item.name ? (
//                         <ChevronUpIcon className="w-5 h-5" />
//                       ) : (
//                         <ChevronDownIcon className="w-5 h-5" />
//                       )}
//                     </button>
//                   )}
//                 </Link>
//                 {item.hasDropdown && openDropdown === item.name && (
//                   <ul className="ml-8 mt-2 space-y-1">
//                     {item.children.map((subItem) => (
//                       <li key={subItem.name}>
//                         <Link to={subItem.href} className="block p-2 hover:bg-gray-100">
//                           {subItem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
