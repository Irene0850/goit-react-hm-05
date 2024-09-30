import axios from "axios";

const API_KEY = "c869582c96f7de93373e80c8235f3ebe";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODY5NTgyYzk2ZjdkZTkzMzczZTgwYzgyMzVmM2ViZSIsIm5iZiI6MTcyNzcyMTU0Ni42NjMzMjMsInN1YiI6IjY2ZmFlZDdlM2EwZjVhMDhjOGYxYTEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpoBeBne8LrrvZhAGsUtOGsSRk4GgKyyNHY7g3okaVg",
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?language=en-US&api_key=${API_KEY}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    throw error;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
      options
    );
    return response.data.cast;
  } catch (error) {
    console.error(`Error fetching credits for movie ID ${movieId}:`, error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching reviews for movie ID ${movieId}:`, error);
    throw error;
  }
};

export const getImageUrl = (path) => `http://image.tmdb.org/t/p/w500${path}`;
