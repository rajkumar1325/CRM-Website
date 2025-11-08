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
import Sidebar from './assets/Sidebar/Sidebar.jsx';

function App() {

   return (
      <>

         <div className="flex">

            <Sidebar />



            <main className='p-4 bg-[#171821]'>

               <div className='bg-[#171821]'>
                  <Topbar />

                  <div className='flex flex-col md:flex-row gap-2'>
                     <Cards />
                     <GaugeCard />
                  </div>

                  <div className='flex flex-col justify-around gap-2 mt-2 md:flex-row'>
                     <PieChart />
                     <SalesChart />
                  </div>

                  <div className='flex flex-col md:flex-row gap-2 mt-2'>
                     <CustomerFulfilmentChart />
                     <TodoList />
                     <MeetingCard />
                  </div>
               </div>


            </main>
         </div>
      </>
   )
}

export default App
