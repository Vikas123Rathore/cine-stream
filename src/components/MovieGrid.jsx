import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = ({ movies, heading = 'Popular Movies' }) => {
  return (
    <div className="max-w-8xl mx-auto py-10">
      <h1 className="mb-8 text-center text-4xl font-bold italic text-white">
        {heading}
      </h1>
{/* grid system for responsive */}
      <div className="grid grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieGrid
