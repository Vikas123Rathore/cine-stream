import { useEffect, useRef, useState } from 'react'
import { searchMovies } from '../services/tmbd'
import HeroSection from '../components/HeroSection'
import MovieGrid from '../components/MovieGrid'

const Home = () => {
  // Step 1: States
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const sentinelRef = useRef(null)

  const hasMore = movies.length < totalResults

  const fetchMovies = async () => {
    try {
      setLoading(true)

      const data = await searchMovies('batman', page)
      const nextMovies = data.Search ?? []

      setMovies((prev) => (page === 1 ? nextMovies : [...prev, ...nextMovies]))
      setTotalResults(Number(data.totalResults ?? 0))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  useEffect(() => {
    if (!sentinelRef.current || loading || !hasMore) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((currentPage) => currentPage + 1)
        }
      },
      { rootMargin: '300px' },
    )

    observer.observe(sentinelRef.current)

    return () => observer.disconnect()
  }, [hasMore, loading])

  return (
    <>
      <HeroSection />
      <MovieGrid movies={movies} />
      <div ref={sentinelRef} className="h-10" />
      {loading && (
        <p className="pb-10 text-center text-gray-300">
          Loading more movies...
        </p>
      )}
    </>
  )
}

export default Home
