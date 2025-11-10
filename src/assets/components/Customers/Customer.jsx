import React from "react";
import { customersData } from "../../MockData/MockData.jsx"; // Import the mock data above

function Customer () {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Customer Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {customersData.map((custom) => (
            <div
              key={custom.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-200 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-700">
                  {custom.name}
                </h2>
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

              <p className="text-gray-600 text-sm mb-1">
                <strong>Company:</strong> {custom.company}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Email:</strong> {custom.email}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Phone:</strong> {custom.phone}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Product:</strong> {custom.product}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Purchase Date:</strong> {custom.purchaseDate}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  {custom.value}
                </span>
                <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
