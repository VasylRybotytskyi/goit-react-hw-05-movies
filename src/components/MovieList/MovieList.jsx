import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSection,
} from './MovieList.styled';

const MovieList = ({ trendingMovies }) => {
  return (
    <StyledSection>
      <SectionTitle>Tranding Today</SectionTitle>
      <List>
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default MovieList;
