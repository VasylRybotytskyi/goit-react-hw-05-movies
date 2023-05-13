import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 5px;
  padding: 5px 15px;
  border: none;
  border-radius: 30px;
  background-color: #f76c6c;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #f94141;
  }
`;
