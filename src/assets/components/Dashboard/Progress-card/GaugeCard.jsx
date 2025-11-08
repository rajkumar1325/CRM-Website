import React from "react";
import { mockData } from "../../../MockData/MockData";
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

// --- Custom pointer {"https://mui.com/x/react-charts/gauge/"}
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

    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />

      {/* // needle */}
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
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





// MAIN CARD

export default function EarningsCard() {

// defining totalEarning variable from mockData
  let TotalEarning = 0;

  mockData.forEach( (deal) =>{
    TotalEarning += deal.receivedAmount || 0;
  });

  
  const progressPercentage = 80;

  return (
    <div className="bg-[#21222D] text-white rounded-2xl p-6 w-full h-full md:w-3/10 shadow-lg mt-4">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-2">Earnings</h2>
      <p className="text-gray-400 text-sm">Total Earning</p>

      {/* Amount (with explicit conversion upto 2 decimal pnts)*/}
      <p className="text-3xl font-bold text-[#7de0d6] mt-1">$ {TotalEarning.toFixed(2)}</p>

      {/* Profit Info */}
      <p className="text-gray-400 text-sm mt-1">
        Profit is{" "}
        <span className="text-[#7de0d6] font-medium">{progressPercentage}%</span> more than last
        month
      </p>

      {/* Gauge */}
      <div className="flex justify-center items-center mt-6 w-full">
        <div className="w-7/10 min-w-[150px] max-w-[300px]">
          <GaugeContainer
            startAngle={-90}
            endAngle={90}
            value={progressPercentage}
            sx={{
              "& .MuiGauge-referenceArc": { fill: "#2e333d" },
              "& .MuiGauge-valueArc": { fill: "#7de0d6" },
            }}
          >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />
            {/* <GaugeLabel /> */}
          </GaugeContainer>
        </div>
      </div>
    </div>
  );
}
