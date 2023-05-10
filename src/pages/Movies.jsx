import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesBySearch } from 'services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import Notiflix from 'notiflix';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    const getMovie = async () => {
      try {
        const { results } = await fetchMoviesBySearch(query);
        if (results.length === 0) {
          Notiflix.Notify.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        setMovies([]);
      }
    };
    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchMovies onSubmit={handleSubmit}></SearchMovies>
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
