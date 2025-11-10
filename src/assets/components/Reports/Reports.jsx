import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Briefcase,
  CheckCircle,
  XCircle,
  PieChart,
  BarChart3,
  Info,
} from "lucide-react"; // ✅ Lucide icons for a modern look
import { reportsData } from "../../MockData/MockData.jsx"; // ✅ Mock report data

const Reports = ({ darkMode }) => {
  // ==============================
  //  STATE VARIABLES
  // ==============================

  // State for selected metric (which card was clicked)
  const [selectedReport, setSelectedReport] = useState(null);

  // Function to open the modal with detailed info
  const openModal = (metric) => {
    setSelectedReport(metric);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedReport(null);
  };

  // Extract summary data from mock dataset
  const { summary } = reportsData;

  // Define a consistent container background for cards
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    // ==============================
    // 🌙 OUTER CONTAINER (handles theme)
    // ==============================
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#171821] text-white" : "bg-gray-100 text-gray-900"
      } p-8`}
    >
      {/* Wrapper to center all report content */}
      <div className="max-w-7xl mx-auto">
        {/* ==============================
            HEADER SECTION
        ============================== */}
        <div className="flex items-center gap-3 mb-8">
          {/* Dashboard icon */}
          <BarChart3 size={30} className="text-blue-500" />
          <h1 className="text-3xl font-bold">Reports Dashboard</h1>
        </div>

        {/* ==============================
            SUMMARY CARDS GRID
        ============================== */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {/* Each card opens a modal with more detail on click */}

          {/* 1️⃣ Total Leads */}
          <div
            onClick={() => openModal("Total Leads")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-5 rounded-2xl shadow flex items-center gap-4`}
          >
            <Users size={30} className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-400">Total Leads</p>
              <h2 className="text-2xl font-bold">{summary.totalLeads}</h2>
            </div>
          </div>

          {/* 2️⃣ Total Customers */}
          <div
            onClick={() => openModal("Total Customers")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-5 rounded-2xl shadow flex items-center gap-4`}
          >
            <CheckCircle size={30} className="text-green-500" />
            <div>
              <p className="text-sm text-gray-400">Total Customers</p>
              <h2 className="text-2xl font-bold">{summary.totalCustomers}</h2>
            </div>
          </div>

          {/* 3️⃣ Deals Won */}
          <div
            onClick={() => openModal("Deals Won")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-5 rounded-2xl shadow flex items-center gap-4`}
          >
            <TrendingUp size={30} className="text-emerald-500" />
            <div>
              <p className="text-sm text-gray-400">Deals Won</p>
              <h2 className="text-2xl font-bold">{summary.dealsWon}</h2>
            </div>
          </div>

          {/* 4️⃣ Deals Lost */}
          <div
            onClick={() => openModal("Deals Lost")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-5 rounded-2xl shadow flex items-center gap-4`}
          >
            <TrendingDown size={30} className="text-red-500" />
            <div>
              <p className="text-sm text-gray-400">Deals Lost</p>
              <h2 className="text-2xl font-bold">{summary.dealsLost}</h2>
            </div>
          </div>
        </div>

        {/* ==============================
            SECOND ROW - REVENUE + CONVERSION
        ============================== */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* 5️⃣ Total Revenue */}
          <div
            onClick={() => openModal("Total Revenue")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-6 rounded-2xl shadow flex items-center justify-between`}
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">Total Revenue</h2>
              <p className="text-3xl font-bold text-blue-500">
                ${summary.totalRevenue.toLocaleString()}
              </p>
            </div>
            <DollarSign size={40} className="text-blue-500 opacity-80" />
          </div>

          {/* 6️⃣ Conversion Rate */}
          <div
            onClick={() => openModal("Conversion Rate")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-6 rounded-2xl shadow flex items-center justify-between`}
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">Conversion Rate</h2>
              <p className="text-3xl font-bold text-green-500">
                {summary.conversionRate}%
              </p>
            </div>
            <PieChart size={40} className="text-green-500 opacity-80" />
          </div>
        </div>

        {/* ==============================
            THIRD ROW - AVG DEAL + ACTIVE DEALS
        ============================== */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 7️⃣ Average Deal Value */}
          <div
            onClick={() => openModal("Average Deal Value")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-6 rounded-2xl shadow flex items-center justify-between`}
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">Average Deal Value</h2>
              <p className="text-3xl font-bold text-purple-500">
                ${summary.avgDealValue.toLocaleString()}
              </p>
            </div>
            <Briefcase size={40} className="text-purple-500 opacity-80" />
          </div>

          {/* 8️⃣ Active Deals */}
          <div
            onClick={() => openModal("Active Deals")}
            className={`${cardBg} cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-6 rounded-2xl shadow flex items-center justify-between`}
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">Active Deals</h2>
              <p className="text-3xl font-bold text-yellow-500">40</p>
            </div>
            <BarChart3 size={40} className="text-yellow-500 opacity-80" />
          </div>
        </div>

        {/* ==============================
            FOOTER INFO
        ============================== */}
        <div className="mt-10 text-sm text-gray-400 text-center">
          <p>📅 Report last updated: November 2025</p>
          <p>Click any card for a detailed report view.</p>
        </div>
      </div>

      {/* ==============================
          MODAL (DETAILED REPORT VIEW)
      ============================== */}
      {selectedReport && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal Box */}
          <div
            className={`${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } p-6 rounded-2xl shadow-xl w-[90%] max-w-lg relative`}
          >
            {/* Close button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <Info size={24} className="text-blue-500" />
              <h2 className="text-2xl font-semibold">{selectedReport}</h2>
            </div>

            {/* Example detailed report text */}
            <p className="text-sm text-gray-400 mb-4">
              Detailed analytics and breakdown for <strong>{selectedReport}</strong>.
            </p>

            {/* Example breakdown — can be customized later */}
            <div className="space-y-2 text-sm">
              {selectedReport === "Total Leads" && (
                <>
                  <p>📈 Generated this month: 32 new leads</p>
                  <p>👥 Top source: Website Signups (60%)</p>
                  <p>🌎 Region: North America (45%)</p>
                </>
              )}
              {selectedReport === "Total Revenue" && (
                <>
                  <p>💰 This Month’s Revenue: $12,000</p>
                  <p>📅 Last Month’s Revenue: $9,000</p>
                  <p>📊 Growth Rate: +33%</p>
                </>
              )}
              {selectedReport === "Deals Won" && (
                <>
                  <p>🏆 Closed deals this month: 5</p>
                  <p>💼 Avg Value per deal: $2,400</p>
                  <p>🧑‍💼 Top closer: Sarah Kim</p>
                </>
              )}
              {/* Add similar cases for other cards */}
            </div>

            {/* Close button at bottom */}
            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
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

export default Reports;
