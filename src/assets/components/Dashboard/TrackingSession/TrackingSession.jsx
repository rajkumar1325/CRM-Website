import React from "react";
import { mockData } from "../../../MockData/MockData";

// Icons
import PhoneIcon from "./icons/phone.svg?react";
import MailIcon from "./icons/mail.svg?react";
import UserIcon from "./icons/user.svg?react";
import Employee from "./icons/employee.svg?react";
import CalendarIcon from "./icons/calendar.svg?react";

export default function TrackingSession({ darkMode }) {

  // Extract all call history logs from all leads
  const allCalls = mockData.flatMap(lead =>
    (lead.callHistory || []).map(call => ({
      ...call,
      leadName: lead.name, // Client name
      leadEmail : lead.email
    }))
  );


  
  //   ....................................shared css
  const bgClass = darkMode ? "bg-[#21222D] text-white" : "bg-white text-gray-800";
  const secondaryText = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`w-full max-w-sm h-96 max-h-sm p-5 rounded-2xl shadow-md overflow-y-scroll ${bgClass}`}>
      <h2 className="text-xl font-semibold mb-4">Tracking Sessions</h2>

      {/* ========================== CALL RECORDING SECTION ========================== */}
      <div className="mb-8">
        {/* <h3 className="text-lg font-semibold mb-3">Call Tracking</h3> */}

        {allCalls.length === 0 && (
          <p className={secondaryText}>No calls recorded yet.</p>
        )}

        <div className="space-y-4">
          {allCalls.map((call, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border ${darkMode ? "border-gray-700" : "border-gray-300"}`}
            >
              

                {/* Left side */}
                <div>

                  <div className="flex items-center gap-2 mb-1">

                    {/* call */}
                    {call.contactType === 'Call' && (
                      <>
                        <PhoneIcon className={`w-4 h-4 ${darkMode ? "text-green-300" : "text-green-800"}`} />
                        <p className="font-medium" >{call.callNumber}</p>
                      </>
                    )}

                    {/* email */}
                    {call.contactType === 'Email' &&(
                      <>
                        <MailIcon className= {`w-4 h-4 ${darkMode ? "text-green-300" : "text-green-800"}`} />
                        <p className="font-medium" > {call.email} </p>
                      </>
                    )}

                    {/* offline-visit */}
                    {call.contactType === "Local" && (
                      <>
                        <UserIcon className={`w-4 h-4 ${darkMode ? "text-green-300" : "text-green-800"}`}/>
                        <p className="font-medium" > Visited Office </p>
                      </>
                    )}
                  </div>


                  {/* Client Name */}
                  <p className={`text-sm ${secondaryText}`}>
                    {call.leadName}
                  </p>

                  {/* Date & Time */}
                  <div className="flex items-center gap-2 mt-1">
                    <CalendarIcon className= {`w-4 h-4 ${darkMode ? "text-green-300" : "text-green-800"}`} />
                    <p className={`text-xs ${secondaryText}`}>{call.time}</p>
                  </div>

                  {/* Feedback */}
                  <div className="text-sm mt-2 italic w-full">
                    {call.feedback}
                  </div>

                  

                    {/* converted by */}
                  <div className="flex gap-4 text-sm font-medium justify-between items-center">

                    <div className="flex gap-2">
                        <Employee className={`${darkMode? "text-green-300" : "text-green-800"}`}/>
                        <span className="mt-1" >{call.contactedBy}</span>
                    </div>

                        {/* Rating */}
                    <p className="text-yellow-400 text-sm px-2 ">
                        {"★".repeat(call.rating)}
                        {"☆".repeat(5 - call.rating)}
                    </p>

                  </div>
                </div>

            
              </div>
            
          ))}
        </div>
      </div>

      
    </div>
  );
}
