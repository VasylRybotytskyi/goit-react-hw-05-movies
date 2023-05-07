import axios from 'axios';
import { API_KEY } from './ApiKey';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return data;
};

export const fetchMoviesBySearch = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );

  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
