import { useContext, useState } from 'react'
import { FaFilm, FaHeart, FaSearch, FaTimes } from 'react-icons/fa'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { FavoriteContext } from '../context/FavoriteContext'

const Navbar = ({ searchQuery, onSearchChange }) => {
  const { favorites } = useContext(FavoriteContext)
  const [showSearch, setShowSearch] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-900/60 px-6 py-4 shadow-lg backdrop-blur-xl">
      {/* logo for the navbar */}
      <div
        className="flex items-center  cursor-pointer"
        onClick={() => navigate('/')}
      >
        <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-rose-500 to-violet-600 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
          <FaFilm className="text-white text-lg" />
        </div>

        <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-slate-100 to-slate-400 tracking-tight">
          CINE<span className="text-rose-500">STREAM</span>
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Desktop Search */}
        <div className="hidden sm:block w-72">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            inputClassName="w-full bg-slate-900/80 text-white"
          />
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden">
          {showSearch ? (
            <div className="flex items-center rounded-full border border-slate-800 bg-slate-900/90 px-3 py-2">
              <SearchBar
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search..."
                wrapperClassName="w-40"
                inputClassName="w-full border-slate-700 bg-transparent pr-8 text-white"
                iconClassName="top-3"
              />
              <FaTimes
                className="ml-2 cursor-pointer text-white"
                onClick={() => setShowSearch(false)}
              />
            </div>
          ) : (
            <FaSearch
              size={22}
              className="text-white cursor-pointer"
              onClick={() => {
                setShowSearch(true)
              }}
            />
          )}
        </div>
        {/* Wsihlist */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate('/favorites')}
        >
          <FaHeart size={24} className="text-red-500" />

          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
