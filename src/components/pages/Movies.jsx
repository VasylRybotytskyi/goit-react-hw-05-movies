import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const Movies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '84068d2acd9315c3be219a34cf5a6c3a';
      axios.defaults.baseURL = 'https://api.themoviedb.org/3';
      const url = `/search/search-movies?api_key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setFetchedMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

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
