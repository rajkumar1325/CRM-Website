import { useState } from 'react'
import './App.css'

import Topbar from './assets/components/Topbar/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
        <Topbar/>
     </>
  )
}

export default App
