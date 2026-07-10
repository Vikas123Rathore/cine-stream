import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block bg-rose-500/10 text-rose-400 border border-rose-500/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎬 Powered by TMDB API
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Discover Your
            <span className="block text-rose-500">Next Favorite Movie</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Explore trending, top-rated and upcoming movies from around the
            world. Search instantly, save your favorites, and enjoy a fast
            browsing experience powered by React.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Browse Movies
            </button>

            <button className="border border-slate-700 hover:border-rose-500 hover:text-rose-400 text-slate-300 px-8 py-3 rounded-xl font-semibold transition">
              My Favorites
            </button>
          </div>

          <div className="flex flex-wrap gap-8 mt-14">
            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-slate-400">Movies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">Fast</h2>
              <p className="text-slate-400">Debounced Search</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">❤️</h2>
              <p className="text-slate-400">Favorites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
