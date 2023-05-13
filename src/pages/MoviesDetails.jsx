import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import { BsArrowLeftShort } from 'react-icons/bs';
// import { Loading } from 'notiflix';
// import { Suspense } from 'react';

const MoviesItem = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <div>
        {/* Повертає назад*/}
        <Link to={location?.state?.from ?? '/'}>
          <button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </button>
        </Link>
        <MovieCard movie={selectedMovie} />
        {/* <Suspense fallback={<Loading />}> */}
        <Outlet />
        {/* </Suspense> */}
      </div>
    </main>
  );
};

export default MoviesItem;
