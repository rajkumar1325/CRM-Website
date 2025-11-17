import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  UsersRound,
  Users,
  Headphones,
  Handshake,
  BarChart3,
  ClipboardList,
} from "lucide-react";

import LogOut from "./log-out.svg?react"; // SVG icon (react component)
import ProfileImg from "./profile.jpg"; // JPG image (NOT ?react)

// ----------------------------------
// ⚡ Helper: Extract initials (e.g., "Rohan Sharma" → "RS")
// ----------------------------------
const getInitials = (name) => {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  return (
    (parts[0]?.[0] || "").toUpperCase() +
    (parts[1]?.[0] || "").toUpperCase()
  );
};

const Sidebar = () => {
  // Simulated logged-in user
  const userName = "Rohan Sharma";

  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // ----------------------------------
  // 📱 Collapse on small screens
  // ----------------------------------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) setIsOpen(false);
      else setIsOpen(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // ----------------------------------
  // 🔗 Nav item component
  // ----------------------------------
  const NavItem = ({ to, label, Icon }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        className={`group relative flex items-center px-6 py-2 rounded-md mx-3 mb-2 transition-colors duration-200
        ${
          isActive
            ? "text-green-500 bg-[#3e412c]"
            : "hover:text-blue-300 text-gray-300"
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

  // ----------------------------------
  // 🧱 MAIN SIDEBAR LAYOUT
  // ----------------------------------
  return (
    <div
      className={`h-auto bg-gradient-to-b from-[#3c6565] via-[#131d1d] to-[#1C2B2B] text-gray-400 flex flex-col justify-between
      transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* ---------------- TOP SECTION ---------------- */}
      <div>
        {/* Sidebar Toggle + Profile */}
        <div
          className="flex items-center justify-between px-6 py-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <div className="flex flex-col items-center w-full">
            {/* Avatar wrapper */}
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 overflow-hidden border border-gray-500 shadow">
              {/* If image exists show it */}
              {ProfileImg ? (
                <img
                  src={ProfileImg}
                  alt="User"
                  className="h-full w-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              ) : null}

              {/* Fallback initials */}
              {!ProfileImg && (
                <span className="text-white font-bold text-lg">
                  {getInitials(userName)}
                </span>
              )}
            </div>

            {/* Show name ONLY when sidebar expanded */}
            {isOpen && (
              <span className="text-white text-sm mt-2 font-semibold tracking-wide">
                {userName}
              </span>
            )}
          </div>
        </div>

        {/* ---------------- NAVIGATION ---------------- */}
        <nav className="mt-4">
          <NavItem to="/" label="Home" Icon={Home} />
          <NavItem to="/leads" label="Leads" Icon={UsersRound} />
          <NavItem to="/customers" label="Customers" Icon={Users} />
          <NavItem to="/support" label="Support" Icon={Headphones} />
          <NavItem to="/deals" label="Deals" Icon={Handshake} />
          <NavItem to="/reports" label="Reports" Icon={BarChart3} />
          <NavItem
            to="/taskAndActivities"
            label="Task & Activities"
            Icon={ClipboardList}
          />
        </nav>

        {/* ---------------- TEAMS SECTION ---------------- */}
        <div className="mt-6 px-6">
          {isOpen && (
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Your Teams
            </h3>
          )}

          {[
            ["H", "Heroicons"],
            ["T", "Tailwind Labs"],
            ["W", "Workcation"],
          ].map(([abbr, name]) => (
            <div
              key={name}
              className="relative group flex items-center space-x-3 hover:bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer transition"
            >
              <div className="h-6 w-6 flex items-center justify-center bg-[#1e293b] rounded-md text-sm font-medium text-gray-400">
                {abbr}
              </div>

              {isOpen && <span>{name}</span>}

              {!isOpen && (
                <span
                  className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
                >
                  {name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- BOTTOM LOGOUT SECTION ---------------- */}
      <div className="flex items-center px-6 py-4 border-t border-[#1e293b] relative">
        {isOpen ? (
          <>
            {/* Profile image or initials */}
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 overflow-hidden border border-gray-500 mr-3">
              {ProfileImg ? (
                <img
                  src={ProfileImg}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {getInitials(userName)}
                </span>
              )}
            </div>

            <div className="cursor-pointer text-red-500 hover:text-red-700 transition">
              <p className="text-sm font-medium">Log Out</p>
            </div>
          </>
        ) : (
          <div className="group cursor-pointer hover:text-red-500 transition">
            <LogOut />
            <span
              className="absolute left-16 bg-gray-800 text-red-900 text-xs px-2 py-1 rounded-md opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"
            >
              Log Out
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
