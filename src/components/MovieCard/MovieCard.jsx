import { Loading } from 'notiflix';
import { useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <img src={posterUrl} alt={`${title} poster`} />

        <div>
          <p>
            {title ?? 'Unknown'} ({releaseYear})
          </p>
          <p>User Score: {userScore}</p>
          <div>
            <p>Overview:</p>
            {overview}
          </div>
          {genres && genres.length > 0 && (
            <div>
              <p>Genres:</p>
              {genres.map(genre => genre.name).join(', ')}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MovieCard;
