import React from 'react'
import {FaSearch} from 'react-icons/fa'
const SearchBar = () => {
  return (
    <div className='relative'>
      <input
        type="text"
        placeholder="Search movies..."
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-slate-900 border border-slate-800 text-sm rounded-full pl-10 pr-4 py-2 w-48 md:w-64 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all duration-300"
      />
      <FaSearch className="absolute left-3.5 top-3 text-slate-500 text-xs" />
    </div>
  )
}

export default SearchBar
