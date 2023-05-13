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
  const { movieId } = useParams(); // Отримуємо параметри шляху з URL
  const [castList, setCastList] = useState([]); // Стан для збереження списку акторів

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId); // Виклик функції для отримання списку акторів
        setCastList(cast); // Збереження списку акторів у стані
      } catch (error) {
        console.log(error); // Обробка помилок
      }
    };
    fetchCast(); // Виклик функції отримання списку акторів при завантаженні компонента та зміні movieId
  }, [movieId]);

  return (
    <Wrapper>
      <CastHeader>Cast</CastHeader> {/* Заголовок компонента */}
      <CastList>
        {castList.map(actor => (
          <CastListItem key={actor.id}>
            {actor.profile_path ? ( // Перевірка наявності постера актора
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} // URL постера актора
                alt={`${actor.name} profile`}
              />
            ) : (
              <img
                src={`https://via.placeholder.com/200x300?text=No+Image`} // Замінний URL постера
                alt={`${actor.name} profile`}
              />
            )}
            <CastInfo>
              <CastName>{actor.name}</CastName> {/* Виведення імені актора */}
              <p>Character: {actor.character}</p>{' '}
              {/* Виведення персонажа актора */}
            </CastInfo>
          </CastListItem>
        ))}
      </CastList>
    </Wrapper>
  );
};

export default Cast;
