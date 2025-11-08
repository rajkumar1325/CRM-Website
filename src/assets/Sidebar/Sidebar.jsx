// Import React and useState hook for managing sidebar state
import React, { useEffect, useState } from "react";

// Import some icons from lucide-react (simple lightweight icon pack)
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
  // State to toggle expand/collapse
  const [isOpen, setIsOpen] = useState(true);

  // State to track which menu item is currently active
  const [active, setActive] = useState("Dashboard");

//make the sidebar in collapse mode in small devices 
  useEffect( ()=>{
    if(window.innerWidth<767){
        setIsOpen(false);
    }
  },[] )

  // Function to toggle sidebar open/close
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Define all navigation links in one array (for cleaner mapping)
  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Users, label: "Team" },
    { icon: Folder, label: "Projects" },
    { icon: Calendar, label: "Calendar" },
    { icon: FileText, label: "Documents" },
    { icon: BarChart2, label: "Reports" },
  ];

  // Define team data similarly
  const teams = [
    { name: "Heroicons", initial: "H" },
    { name: "Tailwind Labs", initial: "T" },
    { name: "Workcation", initial: "W" },
  ];

  return (
    // Main sidebar wrapper with transition for smooth width animation
    <div
      className={`h-auto bg-[#2b2b40] text-gray-300 flex flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* ---------- TOP SECTION ---------- */}
      <div>
        {/* Header with logo and toggle icon */}
        
        <div
          className="flex items-center justify-between px-6 py-4 cursor-pointer"
          onClick={toggleSidebar} // Toggle sidebar on click
        >
          {/* Logo circle */}
          <div className="flex items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            {/* Show label only when expanded */}
            {isOpen && (
              <span className="ml-3 text-white text-lg font-semibold">
                Dashboard
              </span>
            )}
          </div>

        </div>

        {/* ---------- NAVIGATION SECTION ---------- */}
        <nav className="mt-4">
          {/* Loop through nav items */}
          {navItems.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              // Conditional classes: highlight if active
              className={`group relative flex items-center px-6 py-2 rounded-md mx-3 mb-2 transition-colors duration-200 ${
                active === label
                  ? " text-green-500" // Active link styling
                  : "hover:bg-[#1b2f51]"
              }`}
              // Set active link when clicked
              onClick={() => setActive(label)}
            >
              {/* Icon always visible */}
              <Icon className="w-5 h-5 min-w-5" />

              {/* Label shown only when sidebar expanded */}
              {isOpen && <span className="ml-3">{label}</span>}





              {/* Tooltip visible when sidebar collapsed */}
              {!isOpen && (
                <span
                  className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300"
                >
                  {label}
                </span>
              )}
            </a>
          ))}

        </nav>









        {/* ---------- TEAMS SECTION ---------- */}
        <div className="mt-6 px-6">
          {/* Show section title only when expanded */}
          {isOpen && (
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Your teams
            </h3>
          )}
          <ul className="space-y-2">
            {teams.map((team) => (
              <li
                key={team.name}
                className="group flex items-center space-x-3 hover:bg-[#1e293b] rounded-md px-3 py-2 cursor-pointer"
              >
                {/* Team initial avatar */}
                <div className="h-6 w-6 flex items-center justify-center bg-[#1e293b] rounded-md text-sm font-medium text-gray-400">
                  {team.initial}
                </div>

                {/* Team name visible only when expanded */}
                {isOpen && <span>{team.name}</span>}

                {/* Tooltip when collapsed */}
                {!isOpen && (
                  <span
                    className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {team.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>





      {/* ---------- BOTTOM USER SECTION ---------- */}
      <div className="flex items-center px-6 py-4 border-t border-[#1e293b]">
        {/* User avatar */}
        <img
          src="https://img2.freejobalert.com/freejobalert/2025/09/lokah-chapter-1-chandra-box-office-collection-day-7-kalyani-priyadarshans-film-collec-68b9339b5fac096083246-1200.webp"
          alt="User avatar"
          className="rounded-full mr-3 object-fit overflow-hidden"
          width={40}
          height={40}
        />
        {/* User name visible only when expanded */}
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
