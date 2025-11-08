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

// Register Chart.js modules for line charts
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function CustomerFulfilmentChart() {
  // x-axis labels
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  //  Chart data — two datasets for "Last Month" and "This Month"
  const data = {
    labels,
    datasets: [
      {
        label: "Last Month",
        data: [4000, 5000, 4200, 3900, 4100, 4300, 4087],
        borderColor: "#A9DFD8", // teal line
        backgroundColor: "rgba(125, 224, 114, 0.2)", // translucent bg color
        fill: true, // enable area fill below line
        tension: 0.1, // straight curve
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "This Month",
        data: [4800, 4500, 4700, 4300, 4400, 4900, 5506],
        borderColor: "#d98cf4", // purple line
        backgroundColor: "rgba(217, 140, 244, 0.2)", // translucent purple bg
        fill: true,
        tension: 0.1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // we'll make our own custom legend
      tooltip: { enabled: true },
    },
    scales: {
      x: { //x-axis legend
        grid: { display: false },
        ticks: { color: "#9ca3af" }, // gray-400
      },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "#9ca3af" },
      },
    },
  };

  return (
    // 🔲 Main Card Container
    <div className="bg-[#1e1f2e] text-white rounded-2xl p-4 shadow-lg w-full max-w-sm mx-auto">
      
      {/* 🏷️ Title */}
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Customer Fulfilment</h2>
      </div>

      {/* 📈 Line Chart Area */}
      <div className="h-52">
        <Line data={data} options={options} />
      </div>



      {/* Divider Lower line */}
      <div className="border-t border-gray-700 mt-4 pt-3 flex justify-around text-center">
        {/* Left Block */}
        <div>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#7de0d6]"></span>
            <span>Last Month</span>
          </div>
          <div className="font-semibold mt-1">$4,087</div>
        </div>

        {/* Right Block */}
        <div>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#d98cf4]"></span>
            <span>This Month</span>
          </div>
          <div className="font-semibold mt-1">$5,506</div>
        </div>
      </div>
    </div>
  );
}
