import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg2MDk1OWI0OWQ0NTlhNWMxNWIwZWQ3OGRhNTM5MSIsIm5iZiI6MTcyNzY4OTAxNC42MjA2NzEsInN1YiI6IjY2ZmE1OWE4OWExNDA1N2VjNTU1NDBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1ACkYcmzVjTOaAQXx8TSD1XfvTi9EZTPsnpre9JP3M";

const BASE_URL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const featchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const featchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const featchMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data.cast;
};

export const featchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const getImageUrl = (path) => `http://image.tmdb.org/t/p/w500${path}`;
