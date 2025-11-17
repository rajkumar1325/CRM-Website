import React, { useState } from "react";

// importing icons as a react component.
import BellIcon from "../../assets/components/Icons/bell-notification.svg?react"; //notification-btn
import Setting from "../../assets/components/Icons/settings.svg?react"//setting-btn
import Sun from "../../assets/components/Icons/sun-light.svg?react" //light=-btn
import Moon from "../../assets/components/Icons/half-moon.svg?react" //dark-btn
import Profile from "../../assets/components/Icons/profile-circle.svg?react" //dark-btn


function Topbar({setSearch, searchPlaceHolder, isDark, setIsDark}) {
      
    const handleNotification = () => {
    console.log("Notification button clicked!");
    alert("Notification Button clicked");
  };

  const handleTheme = () => {
   setIsDark(!isDark);
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
<div className={`flex items-center justify-between w-full p-2   ${isDark ? "bg-[#171821]" : "bg-gray-200"}`}>

  
      {/* Search Bar */}
      <div className="flex-1 max-w-7/10 ">
        <input
          type="text"
          id="search Here..."
          onChange={(e)=> setSearch(e.target.value)}
          className={`w-full px-4 py-2 rounded-full border text-sm focus:ring-2 focus:ring-blue-500 
          transition-all duration-300
          ${
            isDark
              ? "bg-[#21222D] border-gray-700 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
          }`}
          placeholder= {searchPlaceHolder}


          
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
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}

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
