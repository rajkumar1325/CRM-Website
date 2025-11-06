import { useState } from 'react'
import './App.css'

import Topbar from './assets/components/Topbar/Topbar';
import Cards from './assets/components/Cards/Cards';
import GaugeCard from './assets/components/Progress-card/GaugeCard.jsx';
import PieChart from './assets/components/PieChart/PieChart.jsx';
import SalesChart from './assets/components/SalesChart/SalesChart.jsx';
import CustomerFulfilmentChart from './assets/components/CustomerFullfilment/CustomerFullfillment.jsx';
import TodoList from './assets/components/ToDoList/TodoList.jsx';
import MeetingCard from './assets/components/MeetingCard/MeetingCard.jsx';

function App() {

   return (
      <>

         <div className='bg-[#171821]'>
            <Topbar />

            <div className='flex flex-col md:flex-row gap-2'>

               <Cards />
               <GaugeCard />
            </div>

            <div className="flex flex-col gap-2 flex-start  md:flex-row mt-2">

            </div>
               <PieChart />

            <div className='flex flex-col justify-around gap-2 mt-2 md:flex-row'>
               <CustomerFulfilmentChart />
               <SalesChart />
            </div>


            <div className='flex flex-col md:flex-row gap-2 mt-2'>
               <TodoList />
               <MeetingCard />
            </div>
         </div>
      </>
   )
}

export default App
