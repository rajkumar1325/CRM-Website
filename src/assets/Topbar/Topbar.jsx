import React from "react";

// importing icons as a react component.
import BellIcon from "../../assets/components/Icons/bell-notification.svg?react"; //notification-btn
import Setting from "../../assets/components/Icons/settings.svg?react"//setting-btn
import Sun from "../../assets/components/Icons/sun-light.svg?react" //light=-btn
import Moon from "../../assets/components/Icons/half-moon.svg?react" //dark-btn
import Profile from "../../assets/components/Icons/profile-circle.svg?react" //dark-btn


function Topbar() {
  const handleNotification = () => {
    console.log("Notification button clicked!");
    alert("Notification Button clicked");
  };

  const handleTheme = () => {
    console.log("Theme button clicked!");
    alert("Theme Button clicked");
  };

  const handleSetting = () => {
    console.log("Setting button clicked!");
    alert("Setting Button clicked");
  };

  const handleProfile = () => {
    console.log("Profile button clicked!");
    alert("Profile Button clicked");
  };




  return (
    <div className="flex items-center justify-between w-full p-1 dark:bg-[#171821] bg-gray-50">

      {/* Search Bar */}
      <div className="flex-1 max-w-7/10 ">
        <input
          type="text"
          id="search"
          className="w-full bg-[#21222D] border border-gray-700 text-gray-100 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 p-2.5 placeholder-gray-400 shadow-2xl-red"
          placeholder="Search Here"
        />
      </div>


      {/* Notification Buttons */}
      <div className="flex gap-1">
        <button
          onClick={handleNotification}
          className="p-1 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100 hover:text-blue-100"
          aria-label="Notifications"
        >
          <BellIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>


        <button
          onClick={handleTheme}
          className="p-1 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100 hover:text-blue-100"
          aria-label="Notifications"
        >
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>


        <button
          onClick={handleSetting}
          className="p-1 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100 hover:text-blue-100"
          aria-label="Notifications"
        >
          <Setting className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>


        <button
          onClick={handleProfile}
          className="p-1 rounded-full hover:bg-[#1f4024] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-100 hover:text-blue-100"
          aria-label="Notifications"
        >
          <Profile className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>




      </div>
    </div>
  );
}

export default Topbar;
