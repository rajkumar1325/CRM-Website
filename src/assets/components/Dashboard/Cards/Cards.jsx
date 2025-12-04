import React from "react";
import { mockData } from "../../../MockData/MockData.jsx";

import TotalIcon from "./icons/total-lead.svg?react";
import ActiveIcon from "./icons/active.svg?react";
import CloseIcon from "./icons/close.svg?react";
import ConvertedIcon from "./icons/conversion-rate.svg?react";

import UpIcon from "./icons/up-arrow.svg?react";
import DownIcon from "./icons/down-arrow.svg?react";

//...........................................  Check if date is today/yesterday
function isToday(dateStr) {
  const d = new Date(dateStr); // Convert input string --> Date object.
  const now = new Date(); // Create now which is today’s date.
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}

function isYesterday(dateStr) {
  const d = new Date(dateStr);
  const y = new Date();
  y.setDate(y.getDate() - 1);
  return (
    d.getFullYear() === y.getFullYear() &&
    d.getMonth() === y.getMonth() &&
    d.getDate() === y.getDate()
  );
}

//  Calculate percentage change
function getChange(today, yesterday) {
  if (yesterday === 0 && today === 0)
    return { percent: "0%", diff: 0, icon: null, color: "text-gray-400" };

  if (yesterday === 0)
    return { percent: "+100%", diff: today, icon: <UpIcon />, color: "text-green-400" };

  const diff = today - yesterday;
  const percent = ((diff / yesterday) * 100);

  if (diff > 0)
    return { percent: `+${percent}%`, diff, icon: <UpIcon />, color: "text-green-400" };

  if (diff < 0)
    return { percent: `${percent}%`, diff: Math.abs(diff), icon: <DownIcon />, color: "text-red-400" };

  return { percent: "0%", diff: 0, icon: null, color: "text-yellow-400" };
}



export default function Cards({ darkMode }) {
  
  // Today's and Yesterday's Stats count from mockData using for-each
  const today = {
    total: 0,
    active: 0,
    closed: 0,
    converted: 0,
  };

  const yesterday = {
    total: 0,
    active: 0,
    closed: 0,
    converted: 0,
  };

  mockData.forEach((lead) => {
    const trackDate = lead.statusUpdatedAt || lead.createdAt;

    if (isToday(trackDate)) {
      today.total++;
      if (lead.dealStatus === "active") today.active++;
      if (lead.dealStatus === "close") today.closed++;
      if (lead.status === "converted") today.converted++;
    }

    if (isYesterday(trackDate)) {
      yesterday.total++;
      if (lead.dealStatus === "active") yesterday.active++;
      if (lead.dealStatus === "close") yesterday.closed++;
      if (lead.status === "converted") yesterday.converted++;
    }
  });






  
  // Current Total Values (all-time values)
  const TotalLeads = mockData.length;
  const ActiveLeads = mockData.filter((a) => a.dealStatus === "active").length;
  const ClosedLeads = mockData.filter((d) => d.dealStatus === "close").length;
  const ConversionRate = (ClosedLeads / TotalLeads) * 100;

  
  //  Changes calculation
  const totalChange = getChange(today.total, yesterday.total);
  const activeChange = getChange(today.active, yesterday.active);
  const closedChange = getChange(today.closed, yesterday.closed);
  const conversionChange = getChange(today.converted, yesterday.converted);


  // ..........................shared card-styling
  const cardStyle = `flex justify-center items-center w-full md:w-[10.5em] rounded-xl 
    ${darkMode ? "bg-[#171821] text-white" : "bg-white text-gray-900 shadow"} `;

  const innerStyle = "w-[9em] m-5 flex md:flex-col";




  return (
    <div
      className={`w-full rounded-2xl p-4 transition-all duration-300 
      ${darkMode ? "bg-[#21222D] text-white" : "bg-gray-200 text-gray-900"}`}
    >
      <h1 className="font-semibold text-3xl m-4">Leads Summary</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">



        {/* TOTAL LEADS */}
        <div className={cardStyle}>
          <div className={innerStyle}>
            <div className="mb-4 mr-4 flex items-center"><TotalIcon /></div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">{TotalLeads}</h1> {/* value */}
              
              <div className="flex justify-between ">
                <h2 className="inline">Total Leads</h2>
                <div className="flex min-w-[20px]">
                    {totalChange.icon && 
                      <>{totalChange.icon} 
                        {totalChange.diff}
                      </>}
                </div>
              </div>
              
              <h4 className={`text-xs flex items-center gap-1 ${totalChange.color}`}>
                {totalChange.percent}
                <span className="text-gray-400">from Yesterday</span>
              </h4>
            </div>
          </div>
        </div>



        
        {/* Active LEADS */}
        <div className={cardStyle}>
          <div className={innerStyle}>
            <div className="mb-4 mr-4 flex items-center"><ActiveIcon /></div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">{ActiveLeads}</h1>
              
              <div className="flex justify-between ">
                <h2 className="inline">Active Leads</h2>
                <div className="flex min-w-[20px]">
                    {activeChange.icon && 
                      <>{activeChange.icon} 
                        {activeChange.diff}
                      </>}
                </div>
              </div>
              
              <h4 className={`text-xs flex items-center gap-1 ${activeChange.color}`}>
                {activeChange.percent}
                <span className="text-gray-400">from Yesterday</span>
              </h4>
            </div>
          </div>
        </div>





        {/* Closed LEADS */}
        <div className={cardStyle}>
          <div className={innerStyle}>
            <div className="mb-4 mr-4 flex items-center"><CloseIcon /></div>

            <div>
              <h1 className="text-2xl md:text-2xl font-semibold">{ClosedLeads}</h1>
              <div className="flex justify-between ">
                <h2 className="inline">closed Leads</h2>

                <div className="flex min-w-[20px] text-red-500 font-bold">
                    {totalChange.icon && 
                      <>{closedChange.icon} 
                        {closedChange.diff}
                      </>}
                </div>
              </div>
              
              <h4 className={`text-xs flex items-center gap-1 text-red-500 ${closedChange.color}`}>
                {closedChange.percent}
                <span className="text-gray-400">from Yesterday</span>
              </h4>
            </div>
          </div>
        </div>

        

        

        {/* CONVERSION RATE */}
        <div className={cardStyle}>
          <div className={innerStyle}>
            <div className="mb-4 mr-4 flex items-center"><ConvertedIcon /></div>
            <div>
              <h1 className="text-2xl font-semibold">{ConversionRate.toFixed(1)}%</h1>
              <h2>Conversion Rate</h2>
              <h4 className={`text-xs flex items-center gap-1 ${conversionChange.color}`}>
                {conversionChange.percent}
                <span className="text-gray-400">from Yesterday</span>
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
