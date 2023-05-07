import { useEffect, useState } from 'react';
import fetchMovies from 'components/fetchMovies';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    fetchMovies()
      .then(movies => {
        setFetchedMovies(movies);
      })
      .catch(error => console.log(error));
  }, []);

  const visibleMovies = fetchedMovies.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <input value={movieName} onChange={updateQueryString} />
      <ul>
        {visibleMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
