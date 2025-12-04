import { PieChart, pieArcClasses, pieClasses } from "@mui/x-charts/PieChart";
import { rainbowSurgePalette } from "@mui/x-charts/colorPalettes";
import { useTheme } from "@mui/material/styles";
import { mockData } from "../../../MockData/MockData";
import { useState } from "react";

export default function LeadsPieChart({ darkMode }) {
    const theme = useTheme();
    const palette = rainbowSurgePalette(theme.palette.mode);

    const [filter, setFilter] = useState('all');

    //................................ COUNT LEADS FROM MOCK DATA
    let NewCount = 0;
    let ContactedCount = 0;
    let QualifiedCount = 0;
    let ConvertedCount = 0;
    let LostCount = 0;


    {/* ....................... Applying filter {based on purchase date} */}

    let filteredData = mockData; //copy actual data 
    if(filter === 'thisWeek'){
        filteredData = mockData.filter(lead => thisWeek(lead.purchaseDate))
    }

    else if(filter == 'thisMonth'){
        filteredData = mockData.filter( (lead) => thisMonth(lead.purchaseDate) )
    }

    else if(filter === 'thisYear'){
        filteredData = mockData.filter( (lead) => thisYear(lead.purchaseDate))
    }

    

    filteredData.forEach((stat) => {
        if (stat.status === "new") NewCount++;
        else if (stat.status === "contacted") ContactedCount++;
        else if (stat.status === "qualified") QualifiedCount++;
        else if (stat.status === "converted") ConvertedCount++;
        else if (stat.status === "lost") LostCount++;
    });

    const data = [
        { label: "New", value: NewCount },
        { label: "Contacted", value: ContactedCount },
        { label: "Qualified", value: QualifiedCount },
        { label: "Converted", value: ConvertedCount },
        { label: "Lost", value: LostCount },
    ];



    // ....................... Helper Function {week}
    function thisWeek(dateStr) {
        const date = new Date(dateStr); //current date
        const now = new Date();

        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay()); //sunday

        const end = new Date(start);
        end.setDate(start.getDate()+6); //satuenday

        return date >= start && date <= end;
    }

    //............................. month
    function thisMonth(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();

    return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
    );
    }


    // ....................................year
    function thisYear(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();

    return date.getFullYear() === now.getFullYear();
    }



    
    // ..............................CHART SETTINGS
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
        legend: { hidden: true },
    };

    // .................................... UI THEME CLASSES
    const bgClass = darkMode ? "bg-[#21222D] text-white" : "bg-white text-gray-900";
    const legendTextClass = darkMode ? "text-gray-300" : "text-gray-700";


    return (
        <div
            className={`${bgClass} rounded-2xl p-6 shadow-lg 
                        w-full md:w-5/10  flex flex-col items-center`}
        >
            {/* Title */}
            {/* item-center --> vertically align */}
            <div className="flex gap-2 flex-row justify-between items-center w-full mb-4"> 
                <h2 className="text-sm  md:text-lg font-semibold">Lead Distribution</h2>


                {/* DropDown */}
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={`
                        text-xs sm:text-sm px-2 py-1 rounded-md border
                        ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300 text-gray-800"}
                    `}
                >
                    <option value="all">All</option>
                    <option value="thisWeek">This Week</option>
                    <option value="thisMonth">This Month</option>
                    <option value="thisYear">This Year</option>
                </select>

            </div>
       
            
            {/* Chart */}
            <div className="w-full flex justify-center items-center">
                <PieChart
                    {...settings}
                    sx={{
                        // Hide built-in legend items
                        "& .MuiChartsLegend-label": { display: "none" },
                        "& .MuiChartsLegend-mark": { display: "none" },

                        // Color mode adjustments inside the chart
                        "& text": {
                            fill: darkMode ? "#e5e7eb" : "#374151", // light/dark text for slice labels
                        },

                        "& .MuiChartsArc-root": {
                            stroke: darkMode ? "#1f2937" : "#ffffff", // arc borders
                            strokeWidth: 1,
                        },
                    }}
                />
            </div>

            {/* Custom Legend */}
            <div className={`mt-4 grid grid-cols-2 gap-y-2 text-sm ${legendTextClass}`}>
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span
                            className="inline-block w-3 h-3 rounded-full"
                            style={{
                                backgroundColor: palette[index % palette.length],
                            }}
                        ></span>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
