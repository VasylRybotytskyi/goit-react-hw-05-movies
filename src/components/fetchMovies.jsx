import axios from 'axios';
import { API_KEY } from './ApiKey';
const fetchMovies = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const url = `trending/movie/day?api_key=${API_KEY}`;

  const response = await axios.get(url);
  return response.data.results;
};

export default fetchMovies;
