import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchMoviesBySearchTerm from 'components/fetchMoviesBySearchTerm';

export const Movies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      fetchMoviesBySearchTerm(searchTerm)
        .then(movies => {
          setFetchedMovies(movies);
        })
        .catch(error => console.log(error));
    }
  }, [searchTerm]);

  const visibleMovies = fetchedMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = event => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const nextParams = searchTerm ? { name: searchTerm } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search movies..."
      />
      <ul>
        {visibleMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
