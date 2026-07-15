import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
export const FavoriteContext = createContext()

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    const storedFavorites = window.localStorage.getItem('cine-stream-favorites')

    return storedFavorites ? JSON.parse(storedFavorites) : []
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(
      'cine-stream-favorites',
      JSON.stringify(favorites),
    )
  }, [favorites])

  const addToFavorite = (movie) => {
    const exists = favorites.find((item) => item.imdbID === movie.imdbID)

    if (exists) {
      toast.warning('Movie already in wishlist ❤️')
      return
    }

    setFavorites((prev) => [...prev, movie])

    toast.success('Added to Wishlist ❤️')
  }

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id))

    toast.error('Removed from Wishlist ❌')
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
