import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-62 h-100 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 border border-gray-300">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover"
      />

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
          <button className="w-full mt-5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
