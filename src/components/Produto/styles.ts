import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 8px;
  }

  p {
    color: #555;
    margin-bottom: 12px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;
