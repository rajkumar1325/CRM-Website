import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from "chart.js";

// Register the required Chart.js components for a line chart.
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


// Sample data for the sales chart
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

export default function SalesChart() {
  const [filter, setFilter] = useState("thisMonth");
  const [isDarkMode, setIsDarkMode] = useState(true); // false--> light , true-->dark

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const chartData = {
    labels: salesData[filter].labels,
    datasets: [
      {
        label: salesData[filter].label,
        data: salesData[filter].data,
        // borderColor: isDarkMode ? "#3b82f6" : "#19b26e",
        // backgroundColor: isDarkMode ? "#21222D" : "#F9FAFC",
        tension: 0.4, //smooth curve
        fill: true,
        borderColor: "#A9DFD8", 
        backgroundColor: "rgba(36, 236, 45, 0.2)", // translucent bg color

      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: { top: 10, right: 20, left: 20, bottom: 10 },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRot",
          font: { size: 11, weight: "bold" },
        },
      },
    },
    scales: {
      x: {
        grid: { display: true },
        ticks: { color: isDarkMode ? "#A1A1AA" : "#4B5563" },
      },
      y: {
        grid: { display: true, color: isDarkMode ? "#374151" : "#E5E7EB" },
        ticks: { color: isDarkMode ? "#A1A1AA" : "#4B5563" },
      },
    },
  };

  return (
    <div
      className={`w-full h-auto md:w-[50%] lg:w-[600px] p-4 sm:p-5 rounded-xl shadow-lg transition-colors duration-500 relative
 ${
        isDarkMode ? "bg-[#21222D] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center mb-4 gap-3 overflow-x-hidden">
        <h2 className="sm:text-sm md:text-xl font-semibold">{salesData[filter].label}</h2>

        {/* Dropdown */}
        <select
          value={filter}
          onChange={handleChange}
          className={`border rounded-md text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 
            transition-all duration-300 w-full sm:w-auto max-w-[200px]
            ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500"
                : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-green-500"
          }`}
        >
          <option value="today">Today's Sales</option>
          <option value="thisMonth">Sales This Month</option>
          <option value="thisYear">Sales This Year</option>
          <option value="previousYear">Sales Previous Year</option>
          <option value="last5Years">Previous 5 Years Sales</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
