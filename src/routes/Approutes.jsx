import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Fav from '../pages/Fav'
import MovieDetail from '../components/MovieDetail'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/movie/:id" element={<MovieDetail/>} />
    </Routes>
  )
}

export default Approutes
