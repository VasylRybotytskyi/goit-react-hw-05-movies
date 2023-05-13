import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Button, Container } from './MoviesDetails.styled';
import LoadingIndicator from 'components/Layout/LoadingIndicator';
import { Suspense } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';

const MoviesItem = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState(null); // Ініціалізація значення selectedMovie як null

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData); // Оновлення значення selectedMovie після завантаження даних про фільм
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId); // Виклик функції fetchSelectedMovie для завантаження даних про фільм
  }, [movieId]);

  if (!selectedMovie) {
    // Рендерінг індикатора завантаження, поки дані про фільм не завантажено
    return <LoadingIndicator />;
  }

  return (
    <main>
      <Container>
        {/* Кнопка "Назад" */}
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
        {/* Компонент MovieCard для відображення вибраного фільму */}
        <MovieCard movie={selectedMovie} />
        <Suspense fallback={<LoadingIndicator />}>
          <Outlet /> {/* Відображення вкладених маршрутів */}
        </Suspense>
      </Container>
    </main>
  );
};

export default MoviesItem;
