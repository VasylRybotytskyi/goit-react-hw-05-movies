import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/api';
import {
  CastHeader,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  Wrapper,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCastList(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <Wrapper>
      <CastHeader>Cast</CastHeader>
      <CastList>
        {castList.map(actor => (
          <CastListItem key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={`${actor.name} profile`}
              />
            ) : (
              <img
                src={`https://via.placeholder.com/200x300?text=No+Image`}
                alt={`${actor.name} profile`}
              />
            )}
            <CastInfo>
              <CastName>{actor.name}</CastName>
              <p>Character: {actor.character}</p>
            </CastInfo>
          </CastListItem>
        ))}
      </CastList>
    </Wrapper>
  );
};

export default Cast;
