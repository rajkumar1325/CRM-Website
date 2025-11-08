
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Sidebar from './assets/Sidebar/Sidebar.jsx';
import Dashboard from './assets/components/Dashboard/Dashboard.jsx';

function App() {
   return (
      <>
         <Router>
            <div className="flex">
               <Sidebar />
               <main className='p-4 bg-[#171821]'>
                  <Routes>
                     <Route path="/" element={<Dashboard />} />
                     {/* <Route path="/team" element={<Team />} /> */}

                  </Routes>
               </main>

            </div>
         </Router>
      </>
   )
}

export default App
