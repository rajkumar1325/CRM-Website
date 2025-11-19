import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register line chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample Data
const salesData = {
  today: {
    labels: ["9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    data: [150, 200, 180, 250, 220],
    label: "Today's Sales",
  },
  thisMonth: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [1500, 2000, 1800, 2500],
    label: "Sales This Month",
  },
  thisYear: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    data: [4000, 6000, 5000, 7000, 9000, 8500, 10000],
    label: "Sales This Year",
  },
  previousYear: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    data: [8000, 9500, 9000, 11000],
    label: "Previous Year's Sales",
  },
  last5Years: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    data: [20000, 25000, 28000, 30000, 35000],
    label: "Sales (Previous 5 Years)",
  },
};

export default function SalesChart({ isDarkMode = 'f' }) {

  const [filter, setFilter] = useState("thisMonth");

  const handleChange = (event) => setFilter(event.target.value);

  // Chart Data
  const chartData = {
    labels: salesData[filter].labels,
    datasets: [
      {
        label: salesData[filter].label,
        data: salesData[filter].data,
        tension: 0.4,
        fill: true,
        borderColor: isDarkMode ? "#4ADE80" : "#2563EB",
        backgroundColor: isDarkMode
          ? "rgba(74, 222, 128, 0.2)"
          : "rgba(37, 99, 235, 0.2)",
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDarkMode ? "#D1D5DB" : "#374151",
          font: { size: 11, weight: "bold" },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: isDarkMode ? "#D1D5DB" : "#374151" },
        grid: { color: isDarkMode ? "#333" : "#E5E7EB" },
      },
      y: {
        ticks: { color: isDarkMode ? "#D1D5DB" : "#374151" },
        grid: { color: isDarkMode ? "#333" : "#E5E7EB" },
      },
    },
  };

  return (
    <div
      className={`
        w-full h-auto md:w-[50%] lg:w-[600px]
        p-4 sm:p-5 rounded-xl shadow-lg
        transition-all duration-500
        ${isDarkMode ? "bg-[#21222D] text-gray-100" : "bg-white text-gray-900"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 gap-3">
        <h2 className="text-lg font-semibold sm:text-xl">
          {salesData[filter].label}
        </h2>

        <select
          value={filter}
          onChange={handleChange}
          className={`
            border rounded-md text-sm px-3 py-2 transition
            ${isDarkMode 
              ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500" 
              : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-green-500"
            }
          `}
        >
          <option value="today">Today's Sales</option>
          <option value="thisMonth">This Month</option>
          <option value="thisYear">This Year</option>
          <option value="previousYear">Previous Year</option>
          <option value="last5Years">Last 5 Years</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
