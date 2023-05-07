import { Link, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearchTerm } from 'components/fetchMovies';
import { useState } from 'react';

export const Movies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchClick = async () => {
    setIsLoading(true);
    try {
      const movies = await fetchMoviesBySearchTerm(searchTerm);
      setFetchedMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
      <button onClick={handleSearchClick}>Search</button>
      {isLoading && <div>Loading...</div>}
      <ul>
        {visibleMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
