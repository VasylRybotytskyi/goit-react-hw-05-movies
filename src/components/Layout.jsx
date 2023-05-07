import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
