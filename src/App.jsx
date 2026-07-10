import React from 'react'
import Navbar from './components/Navbar'
import Approutes from './routes/Approutes'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Approutes />
    </div>
  )
}

export default App
