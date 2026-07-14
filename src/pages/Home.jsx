import { useEffect, useState } from "react";
import { searchMovies } from "../services/tmbd";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMovies("batman");

        console.log("Movies:", data);

        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection />

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
        </div>
      ))}
    </>
  );
};

export default Home;
