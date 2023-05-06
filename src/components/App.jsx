import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { MoviesItem } from './pages/MoviesItem';
import { Layout } from './Layout';
import { Cast } from './Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:ElId" element={<MoviesItem />}>
          <Route path="gallery" element={<Cast />} />
          <Route path="number" element={<div>number</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
