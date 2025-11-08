import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Folder,
  Calendar,
  FileText,
  BarChart2,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Collapse sidebar on small screens
  useEffect(() => {
    if (window.innerWidth < 767) setIsOpen(false);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Function to render each link (to avoid repetition)
  const NavItem = ({ to, label, Icon }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`group relative flex items-center px-6 py-2 rounded-md mx-3 mb-2 transition-colors duration-200 ${
          isActive ? "text-green-500 bg-[#1e293b]" : "hover:text-blue-300"
        }`}
      >
        <Icon className="w-5 h-5 min-w-5" />
        {isOpen && <span className="ml-3">{label}</span>}

        {!isOpen && (
          <span
            className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300"
          >
            {label}
          </span>
        )}
      </Link>
    );
  };

  return (
    <div
      className={`h-auto bg-[#313148] text-gray-300 flex flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* ---------- TOP SECTION ---------- */}
      <div>
        {/* Logo and toggle button */}
        <div
          className="flex items-center justify-between px-6 py-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <div className="flex items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            {isOpen && (
              <span className="ml-3 text-white text-lg font-semibold">
                React App
              </span>
            )}
          </div>
        </div>

        {/* ---------- NAVIGATION SECTION ---------- */}
        <nav className="mt-4">
          {/* Each item individually */}
          <NavItem to="/" label="Home" Icon={Home} />
          <NavItem to="/team" label="Team" Icon={Users} />
          <NavItem to="/projects" label="Projects" Icon={Folder} />
          <NavItem to="/calendar" label="Calendar" Icon={Calendar} />
          <NavItem to="/documents" label="Documents" Icon={FileText} />
          <NavItem to="/reports" label="Reports" Icon={BarChart2} />
        </nav>

        {/* ---------- TEAMS SECTION ---------- */}
        <div className="mt-6 px-6">
          {isOpen && (
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Your Teams
            </h3>
          )}

          {/* Each team written individually */}
          <div className="group flex items-center space-x-3 hover:bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer">
            <div className="h-6 w-6 flex items-center justify-center bg-[#1e293b] rounded-md text-sm font-medium text-gray-400">
              H
            </div>
            {isOpen && <span>Heroicons</span>}
            {!isOpen && (
              <span
                className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
              >
                Heroicons
              </span>
            )}
          </div>

          <div className="group flex items-center space-x-3 hover:bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer">
            <div className="h-6 w-6 flex items-center justify-center bg-[#1e293b] rounded-md text-sm font-medium text-gray-400">
              T
            </div>
            {isOpen && <span>Tailwind Labs</span>}
            {!isOpen && (
              <span
                className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
              >
                Tailwind Labs
              </span>
            )}
          </div>

          <div className="group flex items-center space-x-3 hover:bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer">
            <div className="h-6 w-6 flex items-center justify-center bg-[#1e293b] rounded-md text-sm font-medium text-gray-400">
              W
            </div>
            {isOpen && <span>Workcation</span>}
            {!isOpen && (
              <span
                className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
              >
                Workcation
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM USER SECTION ---------- */}
      <div className="flex items-center px-6 py-4 border-t border-[#1e293b]">
        <img
          src="https://img2.freejobalert.com/freejobalert/2025/09/lokah-chapter-1-chandra-box-office-collection-day-7-kalyani-priyadarshans-film-collec-68b9339b5fac096083246-1200.webp"
          alt="User avatar"
          className="rounded-full mr-3 object-fit overflow-hidden"
          width={40}
          height={40}
        />
        {isOpen && (
          <div>
            <p className="text-sm font-medium text-white">Chan Cook</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
