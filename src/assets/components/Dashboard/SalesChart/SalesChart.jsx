import React, { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { mockData } from "../../../MockData/MockData"; 

// Chart.js modules
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// ---- Helper: Format date → weekday name
const getWeekday = (dateStr) => {
  return new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" });
};

// ---- Helper: get week number of a month
const getWeekNumber = (dateStr) => {
  const date = new Date(dateStr);
  return Math.ceil(date.getDate() / 7);
};

// ---- Helper: group total sales per year
const sumByYear = (year) => {
  return mockData
    .filter((x) => new Date(x.purchaseDate).getFullYear() === year)
    .reduce((acc, cur) => acc + (cur.receivedAmount || 0), 0);
};

export default function SalesChart({ darkMode }) {
  const [filter, setFilter] = useState("thisMonth");

  // ------------------------
  // 🔵 DATA PREPARATION
  // ------------------------
  const computedData = useMemo(() => {
    switch (filter) {
      case "today": {
        // group by weekday
        const dayTotals = {};
        mockData.forEach((sale) => {
          const day = getWeekday(sale.purchaseDate);
          dayTotals[day] = (dayTotals[day] || 0) + (sale.receivedAmount || 0);
        });

        const labels = Object.keys(dayTotals);
        const values = Object.values(dayTotals);

        return {
          labels,
          data: values,
          tooltipLabel: (label, value) => `${label}: $${value.toLocaleString()}`,
        };
      }

      case "thisMonth": {
        const weeks = [0, 0, 0, 0];
        mockData.forEach((sale) => {
          const week = getWeekNumber(sale.purchaseDate);
          if (week <= 4) weeks[week - 1] += sale.receivedAmount || 0;
        });

        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          data: weeks,
          tooltipLabel: (label, value) => `${label}: $${value.toLocaleString()}`,
        };
      }

      case "thisYear": {
        const months = new Array(12).fill(0);

        mockData.forEach((sale) => {
          const m = new Date(sale.purchaseDate).getMonth();
          months[m] += sale.receivedAmount || 0;
        });

        return {
          labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          data: months,
          tooltipLabel: (label, value) => `${label}: $${value.toLocaleString()}`,
        };
      }

      case "previousYear": {
        const year = new Date().getFullYear() - 1;

        const q = [0, 0, 0, 0]; // Q1-Q4

        mockData.forEach((sale) => {
          const d = new Date(sale.purchaseDate);
          if (d.getFullYear() !== year) return;

          const month = d.getMonth();
          const quarter = Math.floor(month / 3);
          q[quarter] += sale.receivedAmount || 0;
        });

        return {
          labels: ["Q1", "Q2", "Q3", "Q4"],
          data: q,
          tooltipLabel: (label, value) => `${label}: $${value.toLocaleString()}`,
        };
      }

      case "last5Years": {
        const currentYear = new Date().getFullYear();
        const labels = [];
        const values = [];

        for (let y = currentYear; y >= currentYear - 4; y--) {
          labels.unshift(`${y}`);
          values.unshift(sumByYear(y));
        }

        return {
          labels,
          data: values,
          tooltipLabel: (label, value) => `Sales in ${label}: $${value.toLocaleString()}`,
        };
      }

      default:
        return { labels: [], data: [] };
    }
  }, [filter]);

  // ------------------------
  // 🎨 CHART CONFIG
  // ------------------------
  const chartData = {
    labels: computedData.labels,
    datasets: [
      {
        label: "Sales",
        data: computedData.data,
        borderWidth: 2,
        tension: 0.35,
        fill: true,
        borderColor: darkMode ? "#4ADE80" : "#2563EB",
        backgroundColor: darkMode
          ? "rgba(74, 222, 128, 0.25)"
          : "rgba(37, 99, 235, 0.25)",
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // allows responsive height
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "#D1D5DB" : "#374151",
          font: { size: 10 },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            computedData.tooltipLabel(ctx.label, ctx.parsed.y || 0),
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "#D1D5DB" : "#374151",
          font: { size: 10 }, // responsive text
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: darkMode ? "#D1D5DB" : "#374151",
          font: { size: 10 },
        },
        grid: {
          color: darkMode ? "rgba(255,255,255,0.1)" : "#e5e7eb",
        },
      },
    },
  };

  return (
    <div
      className={`
        w-full max-w-7/10 
        p-3 sm:p-4 
        rounded-xl shadow-lg
        transition-all duration-300
        ${darkMode ? "bg-[#21222D] text-gray-200" : "bg-white text-gray-900"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold">
          Sales Overview
        </h2>

        <select
          className={`
            text-xs sm:text-sm px-2 py-1 rounded-md border
            ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"}
          `}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="thisMonth">This Month</option>
          <option value="thisYear">This Year</option>
          <option value="previousYear">Previous Year</option>
          <option value="last5Years">Last 5 Years</option>
        </select>
      </div>

      {/* Chart Container */}
      <div
        className="w-full"
        style={{
          height: "220px",          // mobile
        }}
      >
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
