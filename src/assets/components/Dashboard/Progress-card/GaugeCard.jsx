import React from "react";
import { mockData } from "../../../MockData/MockData";
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";



// .................... custom pointer --Needle--- {"https://mui.com/x/react-charts/gauge/"}
function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };




  return (
    <>
      <circle cx={cx} cy={cy} r={5} fill="red" />

      {/* // needle */}
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </>
  );
}

// --- Custom label inside the gauge
// function GaugeLabel() {
//   const { value } = useGaugeState();
//   return (
//     <text
//       x="50%"
//       y="60%"
//       textAnchor="middle"
//       alignmentBaseline="middle"
//       fontSize="clamp(16px, 3vw, 36px)" // responsive text size
//       fontWeight="bold"
//       fill="white"
//     >
//       {Math.round(value)}%
//     </text>
//   );
// }



export default function EarningsCard({darkMode}) {

// defining and calculating totalEarning variable from mockData
  let TotalEarning = 0;

  mockData.forEach( (deal) =>{
    TotalEarning += deal.receivedAmount || 0;
  });

  
  const progressPercentage = 80;

  return (
    <div className={`rounded-2xl p-4 w-full h-full md:w-3/10 shadow-lg  transition-all duration-300
      ${darkMode ? "bg-[#21222D] text-white" : "bg-white text-gray-900"}`}>

    {/* ..............................Heading */}
      <h2 className="text-lg font-semibold mb-2">Earnings</h2>

      {/* Amount with 2 decimal places */}
      <p
        className={`sm:text-lg md:text-xl lg:text-3xl font-bold mt-1 
          ${darkMode ? "text-[#7de0d6]" : "text-green-600"}
        `}
      >
        ₹ {TotalEarning.toFixed(2)}
      </p>



      {/* Profit Info */}
      <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Profit is{" "} 

        <span className={`${darkMode ? "text-[#7de0d6]" : "text-green-700"} font-medium`}
        >
          {progressPercentage}%
        </span>{" "} more than last month
      </p>



      {/* Gauge Chart*/}
      <div className="flex justify-center items-center w-full">
        <div className="w-full min-w-[150px] max-w-[300px]">

          <GaugeContainer
            startAngle={-100}
            endAngle={100}
            value={progressPercentage}

            // over-riding the custom CSS of MUI-material 
            sx={{
              "& .MuiGauge-referenceArc": {fill: darkMode ? "#2e333d" : "#e5e7eb"},
              "& .MuiGauge-valueArc": { fill: darkMode ? "#7de0d6" : "#22c55e",},
            }}
          >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />

            {/* Custom label inside the chart for clear view of percentage */}
            {/* <GaugeLabel /> */}    
          </GaugeContainer>
        </div>
      </div>
    </div>
  );
}
