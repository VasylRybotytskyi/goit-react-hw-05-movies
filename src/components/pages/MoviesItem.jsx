import { Link, Outlet, useParams } from 'react-router-dom';

export const MoviesItem = () => {
  const { ElId } = useParams();
  console.log(ElId);
  return (
    <>
      <h2>{ElId}</h2>
      <ul>
        <li>
          <Link to="gallery">Cast</Link>
        </li>
        <li>
          <Link to="photo">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
