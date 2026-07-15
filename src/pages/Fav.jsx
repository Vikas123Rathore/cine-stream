import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FavoriteContext } from '../context/FavoriteContext'
import { FaHeart, FaTrash } from 'react-icons/fa'

const Fav = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext)
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black px-8 py-10 mt-18 max-w-7xl mx-auto">
      <div className="flex justify-between items-center ">
        <h1 className=" text-2xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <FaHeart className="text-red-500" />
          My Favorites
        </h1>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition border border-gray-200 cursor-pointer"
        >
          Back
        </button>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-400 mt-20 ">
          <h2 className="text-3xl font-semibold">No Movies Added ❤️</h2>
          <p className="mt-2">Add your favourite movies from the Home page.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {favorites.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
            >
              {/* Poster */}
              <div className="relative">
                <img
                  src={
                    movie.Poster && movie.Poster !== 'N/A'
                      ? movie.Poster
                      : 'https://via.placeholder.com/500x750?text=No+Poster'
                  }
                  alt={movie.Title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeFavorite(movie.imdbID)}
                  className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 p-2 rounded-full transition"
                >
                  <FaTrash className="text-white cursor-pointer" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-white truncate">
                  {movie.Title}
                </h2>

                <div className="flex justify-between mt-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {movie.Year}
                  </span>

                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {movie.Type}
                  </span>
                </div>

                <Link to={`/movie/${movie.imdbID}`}>
                  <button className="w-full mt-5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Fav
