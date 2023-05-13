import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import {
  Author,
  NoReviewsText,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  Wrapper,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams(); // Отримання значення параметра movieId з URL
  const [reviews, setReviews] = useState([]); // Ініціалізація стану reviews, що містить відгуки про фільм

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId); // Отримання відгуків про фільм за допомогою функції fetchMovieReviews
        setReviews(results); // Оновлення стану reviews з отриманими відгуками
      } catch (error) {
        console.log(error); // Виведення помилки у випадку невдалого запиту
      }
    };

    fetchReviews(); // Виклик функції для отримання відгуків про фільм при завантаженні компонента або зміні значення movieId
  }, [movieId]);

  return (
    <Wrapper>
      <ReviewHeader>Reviews</ReviewHeader>
      {reviews.length ? (
        <ReviewList className="reviews-container">
          {reviews.map(review => (
            <ReviewListItem className="review-card" key={review.id}>
              <Author>Author: {review.author}</Author>
              <Review>{review.content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsText>
          We don't have any reviews for this movie yet.
        </NoReviewsText>
      )}
    </Wrapper>
  );
};

export default Reviews;
