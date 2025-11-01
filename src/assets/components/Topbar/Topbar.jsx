import React from "react";

// importing icons as a react component.
import BellIcon from "../../Icons/bell-notification.svg?react"; //notification-btn
import Setting from "../../Icons/settings.svg?react"//setting-btn
import Sun from "../../Icons/sun-light.svg?react" //light=-btn
import Moon from "../../Icons/half-moon.svg?react" //dark-btn

function Topbar() {
  const handleNotification = () => {
    console.log("Notification button clicked!");
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 dark:bg-[#171821] bg-gray-50">

      {/* Search Bar */}
      <div className="flex-1 mr-4 max-w-8/10">
        <input
          type="text"
          id="search"
          className="w-full bg-[#171821] border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 placeholder-gray-400"
          placeholder="Search Here"
        />
      </div>


      {/* Notification Button */}
      <button
        onClick={handleNotification}
        className="flex items-center justify-center p-2 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
        aria-label="Notifications"
      >
        <BellIcon className="w-5 h-5 hover:text-blue-100" />
      </button>


      <button
        onClick={handleNotification}
        className="flex items-center justify-center p-2 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
        aria-label="Notifications"
      >
        <Setting className="w-5 h-5 hover:text-blue-100" />
      </button>

      <button
        onClick={handleNotification}
        className="flex items-center justify-center p-2 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
        aria-label="Notifications"
      >
        <Sun className="w-5 h-5 hover:text-blue-100" />
      </button>

      <button
        onClick={handleNotification}
        className="flex items-center justify-center p-2 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
        aria-label="Notifications"
      >
        <Moon className="w-5 h-5 hover:text-blue-100" />
      </button>



    </div>
  );
}

export default Topbar;
