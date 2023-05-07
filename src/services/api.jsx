import axios from 'axios';
import { API_KEY } from './ApiKey';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return data;
};

export const fetchMoviesBySearch = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);

  return data;
};
