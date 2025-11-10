
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

   return (
      <>
         <Router>
            <div className="flex">
               <Sidebar />

               <main className='p-4 bg-[#171821] w-full'>

                  {/* passing prop inside the topbar */}
                  <Topbar setSearch={setSearch} />

                  <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/leads" element={<Leads />} />



                     {/* //path linked to line87(navigation-section) --> sidebar */}
                     <Route path="/customers"
                        element={<Customer darkMode={true} searchQuery={search} />}
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
         </Router>
      </>
   )
}

export default App
