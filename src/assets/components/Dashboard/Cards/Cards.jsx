import React from "react";
import { mockData } from "../../../MockData/MockData.jsx";

import Card1 from "./icons/total-lead.svg?react";
import Active from "./icons/active.svg?react";
import Close from "./icons/close.svg?react";
import Converted from "./icons/conversion-rate.svg?react";

export default function Cards({ isDark = "" }) {
  const TotalLeads = Object.keys(mockData).length;

  // checking active or closed leads
  let ActiveLeads = 0;
  let ClosedLeads = 0;

  mockData.forEach((deal) => {
    if (deal.dealStatus == "active") ActiveLeads++;
    else ClosedLeads++;
  });

  // conversion rate
  const ConversionRate = (ClosedLeads / TotalLeads) * 100;

  // individual card, Outer-style .......shared among all 
  const cardStyle = `flex justify-center items-center w-full  md:w-[10.5em] rounded-xl
    ${
    isDark ? "bg-[#171821] text-white" : "bg-white text-gray-900 shadow"
    }
`;

  // inner container Styling------- shared styling
    const individualtemStyle = 'w-[9em] m-5 flex md:flex-col ';




  return (
    <>
      <div
        className={`w-full rounded-2xl p-4 overflow-hidden transition-all duration-300
            ${isDark ? "bg-[#21222D] text-white" : "bg-gray-200 text-gray-900"}`}
      >
        <h1 className="font-semibold text-3xl m-4">Leads Summary</h1>

        {/* items container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">


          {/* individual items */}
          <div className={cardStyle}>
            <div className= {individualtemStyle}>
              <div className="mb-4 mr-4 flex items-center">
                <Card1 />
              </div>

              <div>
                <h1 className="text-xl md:text-2xl font-semibold">
                  {TotalLeads}
                </h1>
                <h2>Total Leads</h2>
                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
              </div>
            </div>
          </div>



          <div className={cardStyle}>
            <div className={individualtemStyle}>
              <div className="mb-4 mr-4 flex items-center">
                <Active />
              </div>

              <div>
                <h1 className="text-2xl font-semibold">{ActiveLeads}</h1>
                <h2>Active Leads</h2>
                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
              </div>
            </div>
          </div>



          <div className={cardStyle}>
            <div className={individualtemStyle}>
              <div className="mb-4 mr-4 flex items-center">
                <Close />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{ClosedLeads}</h1>
                <h2>Closed Leads</h2>
                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
              </div>
            </div>
          </div>




          <div className={cardStyle}>
            <div className={individualtemStyle}>
              <div className="mb-4 mr-4 flex items-center">
                <Converted />
              </div>

              <div>
                {/* rounding off the value */}
                <h1 className="text-2xl font-semibold">
                  {ConversionRate.toFixed(1)} %
                </h1>
                <h2>Conversion Rate</h2>
                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </>
  );
}
