import React from 'react'

import Topbar from '../../Topbar/Topbar.jsx';
import Cards from './Cards/Cards.jsx';
import GaugeCard from './Progress-card/GaugeCard.jsx';
import PieChart from './PieChart/PieChart.jsx';
import SalesChart from './SalesChart/SalesChart.jsx';
import CustomerFulfilmentChart from './CustomerFullfilment/CustomerFullfillment.jsx';
import TodoList from './ToDoList/TodoList.jsx';
import MeetingCard from './MeetingCard/MeetingCard.jsx';



export default function Dashboard() {
  return (
    <>
                  <div className='flex flex-col justify-around gap-2 mt-4'>
                     <div>
                        <Cards darkMode={true}/>
                     </div>

                     <GaugeCard darkMode={false}/>
                  </div>

                  <div className='flex flex-col justify-between gap-2 mt-2'>
                     <PieChart darkMode={false}/>
                     <SalesChart darkMode={false}/>
                  </div>

                  <div className='flex flex-col justify-between gap-2 mt-2'>
                     <CustomerFulfilmentChart  darkMode={true}/>
                     <TodoList />
                     <MeetingCard />
                  </div>
               
    </>
  )
}
