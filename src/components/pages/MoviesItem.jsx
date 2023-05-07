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
      <Outlet />
    </>
  );
};
export default MoviesItem;
