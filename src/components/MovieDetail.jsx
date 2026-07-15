import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/ombd'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id)
      setMovie(data)
    }

    fetchMovie()
  }, [id])

  if (!movie) {
    return <h1 className="text-center text-white text-2xl mt-10">Loading...</h1>
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10 mt-18">
      {/* button for moving back to home */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 mb-8 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition border border-gray-200"
      >
        ← Back
      </button>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* poster image */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-xl shadow-xl w-full border border-green-200"
        />

        <div>
          {/* movie title */}
          <h1 className="text-5xl font-bold mb-4">{movie.Title}</h1>

          <p className="text-gray-300 mb-3">
            {movie.Year} • {movie.Runtime}
          </p>

          <p className="text-yellow-400 mb-3">⭐ IMDb: {movie.imdbRating}</p>

          <p className="mb-3">
            <strong>Genre:</strong> {movie.Genre}
          </p>

          <p className="mb-3">
            <strong>Director:</strong> {movie.Director}
          </p>

          <p className="mb-3">
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p className="leading-8 text-gray-300">{movie.Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
