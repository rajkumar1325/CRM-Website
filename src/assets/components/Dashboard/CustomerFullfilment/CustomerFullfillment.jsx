import { Line } from "react-chartjs-2";
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

export default function CustomerFulfilmentChart({ darkMode }) {

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Last Month",
        data: [4000, 5000, 4200, 3900, 4100, 4300, 4087],
        borderColor: "#7de0d6",
        backgroundColor: "rgba(125, 224, 214, 0.2)",
        fill: true,
        tension: 0.1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "This Month",
        data: [4800, 4500, 4700, 4300, 4400, 4900, 5506],
        borderColor: "#d98cf4",
        backgroundColor: "rgba(217, 140, 244, 0.2)",
        fill: true,
        tension: 0.1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: darkMode ? "#d1d5db" : "#4b5563" }, // light/dark text
      },
      y: {
        grid: {
          color: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        },
        ticks: { color: darkMode ? "#d1d5db" : "#4b5563" },
      },
    },
  };

  return (
    <div
      className={`rounded-2xl p-4 shadow-lg w-full max-w-sm mx-auto transition-all duration-300
        ${darkMode ? "bg-[#1e1f2e] text-white" : "bg-white text-gray-900"}
      `}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-3">Customer Fulfilment</h2>

      {/* Chart Area */}
      <div className="h-52">
        <Line data={data} options={options} />
      </div>

      {/* Divider Section */}
      <div
        className={`border-t mt-4 pt-3 flex justify-around text-center 
        ${darkMode ? "border-gray-700" : "border-gray-300"}`}
      >
        {/* Last Month */}
        <div>
          <div
            className={`flex items-center justify-center gap-2 text-sm 
            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#7de0d6]"></span>
            <span>Last Month</span>
          </div>
          <div className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold mt-1`}>
            $4,087
          </div>
        </div>

        {/* This Month */}
        <div>
          <div
            className={`flex items-center justify-center gap-2 text-sm 
            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#d98cf4]"></span>
            <span>This Month</span>
          </div>
          <div className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold mt-1`}>
            $5,506
          </div>
        </div>
      </div>
    </div>
  );
}
