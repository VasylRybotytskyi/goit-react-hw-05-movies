import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'; // Імпорт хуків useLocation і useSearchParams
import { fetchMoviesBySearch } from 'services/api'; // Імпорт функції fetchMoviesBySearch для отримання фільмів пошуком
import SearchMovies from 'components/SearchMovies/SearchMovies'; // Імпорт компонента SearchMovies для пошуку фільмів
import Notiflix from 'notiflix'; // Імпорт пакету Notiflix для відображення повідомлень
import {
  SectionTitle,
  StyledSection,
  List,
  ListItem,
  StyledLink,
} from 'components/MovieList/MovieList.styled'; // Імпорт стилів для розмітки компонентів

const Movies = () => {
  const [movies, setMovies] = useState([]); // Ініціалізація стану для списку фільмів
  const [searchParams, setSearchParams] = useSearchParams(); // Отримання параметрів пошуку з URL
  const location = useLocation(); // Отримання поточного розташування

  useEffect(() => {
    const query = searchParams.get('query') ?? ''; // Отримання значення параметра пошуку з URL
    if (!query) {
      return;
    }

    const getMovies = async () => {
      try {
        const { results } = await fetchMoviesBySearch(query); // Отримання фільмів з використанням функції fetchMoviesBySearch
        if (results.length === 0) {
          Notiflix.Notify.error('No movies found'); // Відображення повідомлення про відсутність фільмів
          setMovies([]); // Оновлення стану списку фільмів
        } else {
          setMovies(results); // Оновлення стану списку фільмів з отриманими результатами
        }
      } catch (error) {
        setMovies([]); // Оновлення стану списку фільмів при виникненні помилки
      }
    };

    getMovies(); // Виклик функції для отримання фільмів пошуком
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query }); // Оновлення параметрів пошуку з введеним запитом користувача
  };

  return (
    <main>
      <StyledSection>
        <SectionTitle>Movies Page</SectionTitle>
        <SearchMovies onSubmit={handleSubmit} />{' '}
        {/* додаємо компонент для пошуку фільму */}
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              {/* додаємо посилання на сторінку фільму */}
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSection>
    </main>
  );
};

export default Movies;
