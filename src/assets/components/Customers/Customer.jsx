import React, { useState } from "react";
import { customersData } from "../../MockData/MockData.jsx";

// Accept `darkMode` and `searchQuery` as props from parent components (like Topbar/App)
const Customer = ({ darkMode, searchQuery }) => {
  // State to track which customer is selected for the details modal
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Function to open modal and show customer details
  const handleView = (customer) => {
    setSelectedCustomer(customer);
  };

  // Function to close modal
  const closeDialog = () => {
    setSelectedCustomer(null);
  };

  // ==============================
  // 🔍 FILTER LOGIC
  // ==============================
  // Convert searchQuery to lowercase for case-insensitive comparison
  const filteredCustomers = customersData.filter((customer) => {
    const query = searchQuery?.toLowerCase() || ""; // handle undefined or empty
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.company.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query) ||
      customer.product.toLowerCase().includes(query)
    );
  });

  return (
    // Outer container — background changes based on theme prop
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#171821] text-white" : "bg-gray-100 text-gray-900"
      } p-8`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>

        {/* Info: How many results are visible */}
        <p className="mb-4 text-sm text-gray-400">
          Showing {filteredCustomers.length} customer
          {filteredCustomers.length !== 1 ? "s" : ""} matching your search.
        </p>

        {/* ==============================
            GRID OF CUSTOMERS (FILTERED)
           ============================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((custom) => (
            <div
              key={custom.id}
              className={`p-5 rounded-2xl shadow hover:shadow-lg transition duration-200 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Customer name and active/inactive badge */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{custom.name}</h2>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    custom.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {custom.status}
                </span>
              </div>

              {/* Basic customer info */}
              <p className="text-sm mb-1">
                <strong>Company:</strong> {custom.company}
              </p>
              <p className="text-sm mb-1">
                <strong>Email:</strong> {custom.email}
              </p>
              <p className="text-sm mb-1">
                <strong>Phone:</strong> {custom.phone}
              </p>
              <p className="text-sm mb-1">
                <strong>Product:</strong> {custom.product}
              </p>
              <p className="text-sm mb-1">
                <strong>Purchase Date:</strong> {custom.purchaseDate}
              </p>

              {/* Price + View button */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-blue-500">
                  {custom.value}
                </span>
                <button
                  onClick={() => handleView(custom)} // Open modal for this customer
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}

          {/* Message if no results match the search */}
          {filteredCustomers.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10">
              No customers found for “{searchQuery}”.
            </p>
          )}
        </div>
      </div>

      {/* ==============================
          MODAL / DIALOG BOX
         ============================== */}
      {selectedCustomer && (
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

            {/* Profile photo or initials */}
            <div className="flex flex-col items-center mb-4">
              {selectedCustomer.photo ? (
                <img
                  src={selectedCustomer.photo}
                  alt={selectedCustomer.name}
                  className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-gray-300"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-3">
                  {selectedCustomer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}

              <h2 className="text-xl font-semibold">{selectedCustomer.name}</h2>
              <p className="text-sm text-gray-400">
                {selectedCustomer.company}
              </p>
            </div>

            {/* Detailed info inside modal */}
            <div className="space-y-2 text-sm">
              <p>
                <strong>Address:</strong>{" "}
                {selectedCustomer.address || "Not provided"}
              </p>
              <p>
                <strong>Email:</strong> {selectedCustomer.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedCustomer.phone}
              </p>
              <p>
                <strong>Product:</strong> {selectedCustomer.product}
              </p>
              <p>
                <strong>Purchase Date:</strong> {selectedCustomer.purchaseDate}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-medium px-2 py-1 rounded ${
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

export default Customer;
