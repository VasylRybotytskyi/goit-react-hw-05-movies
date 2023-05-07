import axios from 'axios';
import { API_KEY } from './ApiKey';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return data;
};

export const fetchMoviesBySearchTerm = async searchTerm => {
  const url = `/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
  const response = await axios.get(url);
  return response.data.results;
};
