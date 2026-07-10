import React from 'react'
import { FaFilm, FaHeart } from 'react-icons/fa'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-8 px-4 py-4">
      <div className="flex items-center  cursor-pointer">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-violet-600 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
          <FaFilm className="text-white text-lg" />
        </div>

        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 tracking-tight">
          CINE<span className="text-rose-500">STREAM</span>
        </span>
      </div>
      <div className='flex gap-2 justify-center items-center '>
        <SearchBar/>
        <FaHeart size={24} className=' text-red-500 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
