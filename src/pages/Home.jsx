import { useEffect, useRef, useState } from 'react'
import { searchMovies } from '../services/tmbd'
import HeroSection from '../components/HeroSection'
import MovieGrid from '../components/MovieGrid'
import useDebounce from '../hooks/useDebounce'

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const sentinelRef = useRef(null)
  const debouncedQuery = useDebounce(searchQuery, 500)

  const activeQuery = debouncedQuery.trim() || 'batman'

  const hasMore = movies.length < totalResults

  useEffect(() => {
    setPage(1)
    setMovies([])
    setTotalResults(0)
  }, [debouncedQuery])

  useEffect(() => {
    let isActive = true

    const fetchMovies = async () => {
      try {
        setLoading(true)

        const data = await searchMovies(activeQuery, page)
        const nextMovies = data.Search ?? []

        if (!isActive) {
          return
        }

        setMovies((prev) =>
          page === 1 ? nextMovies : [...prev, ...nextMovies],
        )
        setTotalResults(Number(data.totalResults ?? 0))
      } catch (error) {
        console.error(error)
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    fetchMovies()

    return () => {
      isActive = false
    }
  }, [page, activeQuery])
// for infinity scrolling
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
      <div className="mt-18">
        <HeroSection />
        <MovieGrid
          movies={movies}
          heading={
            activeQuery === 'batman'
              ? 'Popular Movies'
              : `Search Results for "${activeQuery}"`
          }
        />
      </div>{' '}
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
