import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Button, Container } from './MoviesDetails.styled';
import LoadingIndicator from 'components/Layout/LoadingIndicator';
import { Suspense } from 'react';

const MoviesItem = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        {/* Повертає назад*/}
        <Link
          to={location?.state?.from ?? '/'}
          style={{ textDecoration: 'none' }}
        >
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </Link>
        <MovieCard movie={selectedMovie} />
        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MoviesItem;
