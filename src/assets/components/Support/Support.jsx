import React, { useState } from "react";
import { supportData } from "../../MockData/MockData.jsx"; // Mock data for support tickets

// Component accepts `darkMode` (theme) and `searchQuery` (search text) as props
const Support = ({ darkMode, searchQuery }) => {
  // Track which support ticket is currently selected for the modal
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Open modal for a specific ticket
  const handleView = (ticket) => {
    setSelectedTicket(ticket);
  };

  // Close the modal
  const closeDialog = () => {
    setSelectedTicket(null);
  };

  // ==============================
  // 🔍 FILTER LOGIC
  // ==============================
  // Filter tickets based on search query
  const filteredTickets = supportData.filter((ticket) => {
    const query = searchQuery?.toLowerCase() || "";
    return (
      ticket.customer.toLowerCase().includes(query) ||
      ticket.issue.toLowerCase().includes(query) ||
      ticket.description.toLowerCase().includes(query) ||
      ticket.status.toLowerCase().includes(query) ||
      ticket.priority.toLowerCase().includes(query)
    );
  });

  return (
    // Main wrapper — theme handled using darkMode prop
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#171821] text-white" : "bg-gray-100 text-gray-900"
      } p-8`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl font-bold mb-6">Support Dashboard</h1>

        {/* Info line showing result count */}
        <p className="mb-4 text-sm text-gray-400">
          Showing {filteredTickets.length} ticket
          {filteredTickets.length !== 1 ? "s" : ""} matching your search.
        </p>

        {/* ==============================
            SUPPORT GRID (FILTERED LIST)
           ============================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`p-5 rounded-2xl shadow hover:shadow-lg transition duration-200 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Header — issue title and priority badge */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">{ticket.issue}</h2>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    ticket.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : ticket.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {ticket.priority}
                </span>
              </div>

              {/* Ticket details (short view) */}
              <p className="text-sm mb-1">
                <strong>Customer:</strong> {ticket.customer}
              </p>
              <p className="text-sm mb-1">
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    ticket.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : ticket.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </p>
              <p className="text-sm mb-1">
                <strong>Assigned To:</strong> {ticket.assignedTo}
              </p>
              <p className="text-sm mb-1">
                <strong>Channel:</strong> {ticket.channel}
              </p>
              <p className="text-sm mb-1">
                <strong>Date Created:</strong> {ticket.dateCreated}
              </p>

              {/* View button */}
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => handleView(ticket)}
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}

          {/* If no results found */}
          {filteredTickets.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10">
              No support tickets found for “{searchQuery}”.
            </p>
          )}
        </div>
      </div>

      {/* ==============================
          MODAL / DIALOG BOX
         ============================== */}
      {selectedTicket && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } rounded-xl p-6 w-[90%] max-w-md shadow-lg relative`}
          >
            {/* Close button (X) */}
            <button
              onClick={closeDialog}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Ticket header */}
            <h2 className="text-2xl font-semibold mb-1">
              {selectedTicket.issue}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Ticket ID: {selectedTicket.id}
            </p>

            {/* Ticket details */}
            <div className="space-y-2 text-sm">
              <p>
                <strong>Customer:</strong> {selectedTicket.customer}
              </p>
              <p>
                <strong>Description:</strong> {selectedTicket.description}
              </p>
              <p>
                <strong>Priority:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    selectedTicket.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : selectedTicket.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {selectedTicket.priority}
                </span>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    selectedTicket.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : selectedTicket.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedTicket.status}
                </span>
              </p>
              <p>
                <strong>Assigned To:</strong> {selectedTicket.assignedTo}
              </p>
              <p>
                <strong>Channel:</strong> {selectedTicket.channel}
              </p>
              <p>
                <strong>Date Created:</strong> {selectedTicket.dateCreated}
              </p>
              <p>
                <strong>Last Updated:</strong> {selectedTicket.lastUpdated}
              </p>
            </div>

            {/* Close button */}
            <div className="mt-5 text-center">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
