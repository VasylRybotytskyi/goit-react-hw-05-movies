import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding: 0 50px;
`;

export const SectionTitle = styled.h2`
  margin: 30px 0;
  padding-left: 5px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const List = styled.ul`
  list-style: disc;
  color: #0d57aa;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0d57aa;
  transition: color 0.2s ease-in-out;
  &:hover,
  &:focus {
    color: #1c85ff;
  }
`;
