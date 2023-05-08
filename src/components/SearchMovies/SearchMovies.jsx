import { Notify } from 'notiflix';

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
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" placeholder="Search movies"></input>
      <button>Search</button>
    </form>
  );
};
export default SearchMovies;
