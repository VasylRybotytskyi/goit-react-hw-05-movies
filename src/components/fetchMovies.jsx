import axios from 'axios';
const fetchMovies = async () => {
  const apiKey = '84068d2acd9315c3be219a34cf5a6c3a';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const url = `trending/movie/day?api_key=${apiKey}`;

  const response = await axios.get(url);
  return response.data.results;
};
export default fetchMovies;
