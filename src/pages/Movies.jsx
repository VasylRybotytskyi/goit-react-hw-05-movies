import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const [isLoading, setIsLoading] = useState(false);

  // const handleSearchClick = async () => {
  //   setIsLoading(true);
  //   try {
  //     const movies = await fetchMoviesBySearchTerm(searchTerm);
  //     setFetchedMovies(movies);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const visibleMovies = fetchedMovies.filter(movie =>
  //   movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleSearchTermChange = event => {
  //   const searchTerm = event.target.value;
  //   setSearchTerm(searchTerm);
  //   const nextParams = searchTerm ? { name: searchTerm } : {};
  //   setSearchParams(nextParams);
  // };
  useEffect(() => {
    const query = useSearchParams.length('query') ?? '';
    if (query) {
      return;
    }

    const getMovie = async () => {
      try {
      } catch (error) {}
    };
  });
  return <></>;
};
