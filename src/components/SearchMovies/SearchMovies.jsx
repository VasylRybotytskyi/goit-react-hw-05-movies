import Notiflix from 'notiflix';
import { Button, Form, Input } from './SearchMovies.styled';
import PropTypes from 'prop-types';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = async e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query.trim()) {
      Notiflix.Notify.failure('Please enter something');
      return;
    }

    try {
      const results = await onSubmit(query);

      if (results.length === 0) {
        Notiflix.Notify.failure('No movies found'); // Display error for no search results
      }
    } catch (error) {
      Notiflix.Notify.failure('An error occurred. Please try again later.'); // Display error for API failure
    }

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />
      <Button>Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
