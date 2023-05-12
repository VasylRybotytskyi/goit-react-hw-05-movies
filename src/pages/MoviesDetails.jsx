import MovieCard from 'components/MovieCard/MovieCard';
import { Link, Outlet, useParams } from 'react-router-dom';

const MoviesItem = () => {
  const { movieId } = useParams();
  // id of one movie
  console.log(movieId);

  return (
    <>
      <h2>{movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <MovieCard movie={selectedMovie} />
      <Outlet />
    </>
  );
};
export default MoviesItem;
