
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'; //access current route

import Sidebar from './assets/Sidebar/Sidebar.jsx';
import Dashboard from './assets/components/Dashboard/Dashboard.jsx';

import Topbar from './assets/Topbar/Topbar.jsx';
import Leads from './assets/components/Leads/Leads.jsx';
import Customer from './assets/components/Customers/Customer.jsx';
import { useState } from 'react';
import Support from './assets/components/customerSupport/Support.jsx';
import Deals from './assets/components/Deals/Deals.jsx';
import Reports from './assets/components/Reports/Reports.jsx';


function App() {

   const [search, setSearch] = useState("");
   const [dark, setDark] = useState(true); //global theme toggle


   const location = useLocation();

   // search placeholder
   const getPlaceHolder = () => {
      if(location.pathname === '/leads') return "Search by name and Company";
      if(location.pathname === '/customers') return "Search by customer name and Company";
      if(location.pathname === '/support') return "Search by support tickets";
      if(location.pathname === '/deals') return "Search deals";
      return "Search now..."
   }

   return (
      <>
         
            <div className={`flex ${dark ? 'bg-[#171821]' : 'bg-gray-100'}`}>
               <Sidebar/>

               <main className='flex-grow p-3 bg-[#171821] w-full overflow-x-hidden'>

                     {/* passing prop inside the topbar */}
                     
                           <Topbar 
                           setSearch={setSearch} 
                           searchPlaceHolder = {getPlaceHolder()}
                           isDark = {dark}
                           setIsDark = {setDark}
                              />
                     
                     


                  <Routes >
                     <Route path="/" element={<Dashboard />} />


                     <Route path="/leads" 
                     element={<Leads 
                        darkMode={false} 
                        searchQuery={search}/>} />



                     {/* //path linked to line87(navigation-section) --> sidebar */}
                     <Route path="/customers"
                        element={<Customer 
                           darkMode={false} 
                           searchQuery={search} />}
                     />



                     {/* Support Section */}
                     <Route path = "/support"
                        element= {<Support/>}
                     />


                        {/*Leads Section  */}
                     <Route path = "/deals"
                        element= {<Deals darkMode={"true"} searchQuery={search}/>}
                     />


                     <Route
                        path="/reports"
                        element={<Reports darkMode={true} />}
                     />


                     {/* <Route path="/team" element={<Team />} /> */}

                  </Routes>
               </main>

            </div>
         
      </>
   )
}

export default App
