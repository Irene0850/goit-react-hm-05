import { useEffect, useState } from "react";
import { featchTrendingMovies } from "../../Api/Api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const trendingMovies = await featchTrendingMovies();
      setMovies(trendingMovies);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1 className={css.homeTitle}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
