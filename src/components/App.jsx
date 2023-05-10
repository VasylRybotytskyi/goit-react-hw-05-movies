import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import MoviesItem from '../pages/MoviesDetails';
import { Layout } from './Layout/Layout';
import { Cast } from './Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
        <Route path="*" element={<>NotFound</>} />
      </Route>
    </Routes>
  );
};
