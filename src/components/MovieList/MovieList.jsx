import { Link } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  return (
    <>
      <h2>Tranding Today</h2>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
