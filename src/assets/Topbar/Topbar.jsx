import React, { useState } from "react";

import BellIcon from "../../assets/components/Icons/bell-notification.svg?react";
import Setting from "../../assets/components/Icons/settings.svg?react";
import Sun from "../../assets/components/Icons/sun-light.svg?react";
import Moon from "../../assets/components/Icons/half-moon.svg?react";
import Profile from "../../assets/components/Icons/profile-circle.svg?react";

function Topbar({ setSearch, searchPlaceHolder, isDark, setIsDark }) {
  return (
    <div
      className={`flex items-center justify-between w-full p-2 mb-6 
      ${isDark ? "bg-[#171821]" : "bg-gray-200"}`}
    >
      {/* SEARCH BAR */}
      <div className="flex-1 max-w-[70%]">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder={searchPlaceHolder}
          className={`
            w-full rounded-full border transition-all duration-300
            px-3 py-1 text-xs
            sm:px-4 sm:py-2 sm:text-sm
            md:text-base

            ${
              isDark
                ? "bg-[#21222D] border-gray-700 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
            }
          `}
        />
      </div>










      {/* RIGHT SIDE ICONS */}
      <div className="flex gap-1 sm:gap-2 ml-2">

        {/* Notification */}
        <button
          className="
            p-1 sm:p-2 rounded-full 
            hover:bg-[#1f4024] transition duration-200
          "
        >
          <BellIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="
            p-1 sm:p-2 rounded-full 
            hover:bg-[#1f4024] transition duration-200
          "
        >
          {isDark ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          )}
        </button>

        {/* Settings */}
        <button
          className="
            p-1 sm:p-2 rounded-full 
            hover:bg-[#1f4024] transition duration-200
          "
        >
          <Setting className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Profile */}
        <button
          className="
            p-1 sm:p-2 rounded-full
            hover:bg-[#1f4024] transition duration-200
          "
        >
          <Profile className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
