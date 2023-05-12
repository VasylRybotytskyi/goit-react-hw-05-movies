import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  padding: 0 40px 40px 40px;
`;

export const ReviewHeader = styled.h2`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;

export const ReviewList = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;

export const ReviewListItem = styled.li`
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Review = styled.p`
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const NoReviewsText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;
