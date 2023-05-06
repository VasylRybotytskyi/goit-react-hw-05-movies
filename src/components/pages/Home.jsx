import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchMovies from 'components/fetchMovies';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies()
      .then(movies => {
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
