import { Link, Outlet, useParams } from 'react-router-dom';

const MoviesItem = () => {
  const { ElId } = useParams();
  console.log(ElId);
  return (
    <>
      <h2>{ElId}</h2>
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
