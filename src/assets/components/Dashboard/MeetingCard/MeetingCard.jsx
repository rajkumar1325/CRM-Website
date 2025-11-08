import React from "react";

export default function MeetingCard() {
  // ✅ Meeting data with JS Date objects
  const meetings = [
    {
      id: 1,
      title: "Demo Call with Jane Smith",
      date: new Date("2024-03-11T17:00:00"),
    },
    {
      id: 2,
      title: "Review Meeting with ABC Ltd",
      date: new Date("2024-03-12T10:00:00"),
    },
    {
      id: 3,
      title: "Follow-up Call with John Doe",
      date: new Date("2024-03-13T14:00:00"),
    },
    {
      id: 4,
      title: "Client Sync with Tech Solutions",
      date: new Date("2024-03-14T11:00:00"),
    },
    {
      id: 5,
      title: "Team Standup",
      date: new Date("2024-03-14T09:00:00"),
    },
  ];

  // ✅ Format date & time
  const formatDate = (date) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-[#21212D] text-white p-5 rounded-2xl shadow-lg w-full md:w-4/10">
      <h2 className="text-lg font-semibold mb-5">Upcoming Meetings</h2>

      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex justify-between items-start border-b border-gray-800 pb-3 last:border-0"
          >
            {/* Left: Meeting title */}
            <p className="text-sm font-medium text-gray-200">
              {meeting.title}
            </p>

            {/* Right: Date & Time */}
            <div className="text-right text-xs text-gray-400 leading-tight">
              <p>{formatDate(meeting.date)}</p>
              <p>{formatTime(meeting.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
