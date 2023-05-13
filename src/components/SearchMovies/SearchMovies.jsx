import Notiflix from 'notiflix'; // Імпорт бібліотеки Notiflix, яка використовується для виведення повідомлень

import { Button, Form, Input } from './SearchMovies.styled';

import PropTypes from 'prop-types';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = async e => {
    e.preventDefault(); // Заборона стандартної поведінки форми

    const query = e.target.elements.query.value; // Отримання значення з поле пошукового запиту

    if (!query.trim()) {
      Notiflix.Notify.failure('Please enter something'); // Виведення повідомлення про помилку, якщо пошуковий запит порожній
      return;
    }

    try {
      const results = await onSubmit(query); // Виклик функції onSubmit з переданим пошуковим запитом

      if (results.length === 0) {
        Notiflix.Notify.failure('No movies found'); // Виведення повідомлення про помилку, якщо немає результатів пошуку
      }
    } catch (error) {
      Notiflix.Notify.failure('An error occurred. Please try again later.'); // Виведення повідомлення про помилку при невдачі в API
    }

    e.target.reset(); // Очищення значень полів форми
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />{' '}
      {/* Поле вводу пошукового запиту */}
      <Button>Search</Button> {/* Кнопка пошуку */}
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
