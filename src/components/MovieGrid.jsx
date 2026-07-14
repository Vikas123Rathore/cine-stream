import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-white mb-8 text-center italic">
        Popular Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
