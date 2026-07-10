import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Fav from '../pages/Fav'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<Fav />} />
    </Routes>
  )
}

export default Approutes
