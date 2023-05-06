import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = '84068d2acd9315c3be219a34cf5a6c3a';
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
    axios
      .get(url)
      .then(response => {
        const movies = response.data.results;
        setMovies(movies);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
