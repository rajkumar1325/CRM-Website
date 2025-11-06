import * as React from "react";
import { PieChart, pieArcClasses, pieClasses } from "@mui/x-charts/PieChart";
import { rainbowSurgePalette } from "@mui/x-charts/colorPalettes";
import { useTheme } from "@mui/material/styles";

import { mockData } from "../../MockData/MockData";

export default function LeadsPieChart() {
    const theme = useTheme();
    const palette = rainbowSurgePalette(theme.palette.mode);


// #region mockData counting

// mockDATA
    let NewCount = 0;
    let ContactedCount =0;
    let QualifiedCount =0;
    let ConvertedCount =0;
    let LostCount =0;

    mockData.forEach((stat) =>{
        if(stat.status==='new' ) NewCount++;
        else if(stat.status ==='contacted' ) ContactedCount++;
        else if(stat.status ==='qualified' ) QualifiedCount++;
        else if(stat.status ==='converted') ConvertedCount++;
        else if(stat.status ==='lost') LostCount++;
    })

    const data = [
        { label: "New", value: NewCount},
        { label: "Contacted", value: ContactedCount},
        { label: "Qualified", value: QualifiedCount},
        { label: "Converted", value: ConvertedCount},
        { label: "Lost", value: LostCount},
    ];
// #endregion


    //   defining spread operator
    const settings = {
        series: [
            {
                innerRadius: 0,
                outerRadius: 90,
                data,
                highlightScope: { fade: "global", highlight: "item" },
            },
        ],
        height: 220,
        legend: { hidden: false },
    };

    return (
        <div className="bg-[#21222D] text-white rounded-2xl p-6 shadow-lg w-full md:w-5/10 max-w-[400px] flex flex-col items-center">
            {/* Header */}
            <h2 className="text-lg font-semibold mb-4">Lead Distribution</h2>


            {/* Chart */}
            <div className="w-full flex justify-center items-center">
                <PieChart
                    {...settings}  //using spread operator
                    sx={{

                        // overriding css of legends/label
                        "& .MuiChartsLegend-label": {
                            color: "#9ca3af", // or any Tailwind-compatible hex, like '#9ca3af' for gray-400
                        },



                        [`.${pieClasses.series}[data-series="outer"] .${pieArcClasses.root}`]:
                        {
                            opacity: 0.9,
                        },
                    }}
                />
            </div>



            {/* {/* Legend (custom optional, or use MUI's built-in legend) */}

            {/* <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-gray-400">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: palette[index % palette.length] }}
            ></span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>  */}
        </div>
    );
}
