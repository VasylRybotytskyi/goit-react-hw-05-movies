import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MoviesItem from '../pages/MoviesDetails';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { GlobalStyle } from './GlobalStyled';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<>NotFound</>} />
        </Route>
      </Routes>
    </>
  );
};
