import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f94141;
    box-shadow: 0 0 5px rgba(13, 87, 170, 0.3);
  }
`;

export const Button = styled.button`
  background-color: #f76c6c;
  border: none;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  outline: none;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #f94141;
  }
`;
