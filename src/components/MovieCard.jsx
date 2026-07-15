import React, { useContext, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../context/FavoriteContext'

const MovieCard = ({ movie }) => {
  const { addToFavorite } = useContext(FavoriteContext)
  const [imageFailed, setImageFailed] = useState(false)
  const posterSrc =
    movie.Poster && movie.Poster !== 'N/A' && !imageFailed
      ? movie.Poster
      : 'https://via.placeholder.com/500x750?text=No+Poster'

  return (
    <div className="w-70 md:w-62 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 border border-gray-300">
      {/* Poster */}
      <div className="relative">
        <img
          src={posterSrc}
          alt={movie.Title}
          className="w-full h-60 object-cover"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />

        <button
          onClick={() => addToFavorite(movie)}
          className="absolute top-3 right-3  rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaHeart size={24} className="text-red-500 text-xl cursor-pointer" />
        </button>
      </div>
{/* title or year details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white truncate">{movie.Title}</h2>

        <div className="flex justify-between items-center mt-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {movie.Year}
          </span>

          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm capitalize">
            {movie.Type}
          </span>
        </div>

        <Link to={`/movie/${movie.imdbID}`}>
          <button className="w-full mt-5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
