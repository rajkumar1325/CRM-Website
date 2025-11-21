import React from "react";

import Topbar from "../../Topbar/Topbar.jsx";
import Cards from "./Cards/Cards.jsx";
import GaugeCard from "./Progress-card/GaugeCard.jsx";
import PieChart from "./PieChart/PieChart.jsx";
import SalesChart from "./SalesChart/SalesChart.jsx";
import CustomerFulfilmentChart from "./CustomerFullfilment/CustomerFullfillment.jsx";
import TodoList from "./ToDoList/TodoList.jsx";
import MeetingCard from "./MeetingCard/MeetingCard.jsx";

export default function Dashboard({ isDark }) {
  return (
    <>
            <div className="flex flex-col md:flex-row justify-around gap-2">
                  <div className="sm:w-7/10">
                     <Cards darkMode={isDark} />
                  </div>
                  <GaugeCard darkMode={isDark} />
            </div>


            <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
               <PieChart darkMode={isDark} />
               <SalesChart darkMode={isDark} />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
               <CustomerFulfilmentChart darkMode={isDark} />
               <TodoList darkMode={isDark} />
               <MeetingCard darkMode={isDark} />
            </div>
    </>
  );
}
