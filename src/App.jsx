
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './assets/Sidebar/Sidebar.jsx';
import Dashboard from './assets/components/Dashboard/Dashboard.jsx';

import Topbar from './assets/Topbar/Topbar.jsx';
import Leads from './assets/components/Leads/Leads.jsx';
import Customer from './assets/components/Customers/Customer.jsx';

function App() {
   return (
      <>
         <Router>
            <div className="flex">
               <Sidebar />

               <main className='p-4 bg-[#171821] w-full'>
                     <Topbar />

                  <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/leads" element={<Leads />} />

                     {/* //path linked to line87(navigation-section) --> sidebar */}
                     <Route path="/customers" element={<Customer />} /> 


                     {/* <Route path="/team" element={<Team />} /> */}

                  </Routes>
               </main>

            </div>
         </Router>
      </>
   )
}

export default App
