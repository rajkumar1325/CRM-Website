import React, { useState } from "react";
import { customersData } from "../../MockData/MockData.jsx";

const Customer = ({ darkMode, searchQuery = "" }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleView = (customer) => setSelectedCustomer(customer);
  const closeDialog = () => setSelectedCustomer(null);

  // Filter logix
  const filteredCustomers = customersData.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.product.toLowerCase().includes(q) 
    );
  });

  return (
    <div
      className={`w-full min-h-screen px-4 sm:px-6 md:px-8 py-6 transition-colors duration-300 ${
        darkMode ? "bg-[#171821] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Customer Dashboard</h1>

        {/* SUBTITLE */}
        <p
          className={`mb-6 text-xs sm:text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Showing {filteredCustomers.length} customer
          {filteredCustomers.length !== 1 ? "s" : ""} matching your search.
        </p>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((custom) => (
            <div
              key={custom.id}
              className={`p-4 sm:p-5 rounded-2xl shadow border transition ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  {custom.name}
                </h2>

                <span
                  className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                    custom.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {custom.status}
                </span>
              </div>

              {/* INFO LINES */}
              <p className="text-xs sm:text-sm mb-1">
                <strong>Company:</strong> {custom.company}
              </p>
              <p className="text-xs sm:text-sm mb-1">
                <strong>Email:</strong> {custom.email}
              </p>
              <p className="text-xs sm:text-sm mb-1">
                <strong>Phone:</strong> {custom.phone}
              </p>
              <p className="text-xs sm:text-sm mb-1">
                <strong>Product:</strong> {custom.product}
              </p>
              <p className="text-xs sm:text-sm mb-1">
                <strong>Purchase Date:</strong> {custom.purchaseDate}
              </p>

              {/* FOOTER */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm sm:text-base md:text-lg font-bold text-blue-500">
                  {custom.value}
                </span>

                <button
                  onClick={() => handleView(custom)}
                  className="text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}

          {filteredCustomers.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10 text-sm">
              No customers found for “{searchQuery}”.
            </p>
          )}
        </div>
      </div>

      {/* MODAL */}
      {selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-3">
          <div
            className={`w-full max-w-md rounded-xl p-6 shadow-lg relative ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeDialog}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* IMAGE / INITIALS */}
            <div className="flex flex-col items-center mb-4">
              {selectedCustomer.photo ? (
                <img
                  src={selectedCustomer.photo}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3 border-2"
                />
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3">
                  {selectedCustomer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}

              <h2 className="text-lg sm:text-xl font-semibold">
                {selectedCustomer.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">
                {selectedCustomer.company}
              </p>
            </div>

            {/* DETAILS */}
            <div className="space-y-2 text-xs sm:text-sm">
              <p><strong>Address:</strong> {selectedCustomer.address}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
              <p><strong>Product:</strong> {selectedCustomer.product}</p>
              <p><strong>Purchase Date:</strong> {selectedCustomer.purchaseDate}</p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    selectedCustomer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedCustomer.status}
                </span>
              </p>

              <p>
                <strong>Cost:</strong>{" "}
                <span className="text-blue-500 font-semibold">
                  {selectedCustomer.value}
                </span>
              </p>
            </div>

            <div className="mt-5 text-center">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
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

export default Customer;
