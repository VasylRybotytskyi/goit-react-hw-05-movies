import { Notify } from 'notiflix';
import { Button, Form, Input } from './SearchMovies.styled';
import PropTypes from 'prop-types';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      Notify.error('Please enter something');
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies"></Input>
      <Button>Search</Button>
    </Form>
  );
};

export default SearchMovies;

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };
