import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';
import LoadingIndicator from 'components/Layout/LoadingIndicator'; // Імпорт компонента LoadingIndicator
import MovieList from 'components/MovieList/MovieList'; // Імпорт компонента MovieList

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]); // Ініціалізація стану для списку трендових фільмів
  const [isLoading, setIsLoading] = useState(true); // Ініціалізація стану для відображення індикатора завантаження
  const [error, setError] = useState(false); // Ініціалізація стану для відображення повідомлення про помилку

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results); // Запис результатів отриманих даних в стан trendingMovies
      } catch (error) {
        setError(true); // Встановлення стану помилки при невдалому запиті
      } finally {
        setIsLoading(false); // Встановлення стану завершення завантаження
      }
    };

    fetchTrendingMovies(); // Виклик функції для завантаження трендових фільмів
  }, []);

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {/* Відображення індикатора завантаження, якщо дані ще завантажуються */}
      {error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}
      {/* Відображення списку трендових фільмів */}
    </>
  );
};

export default Home;
