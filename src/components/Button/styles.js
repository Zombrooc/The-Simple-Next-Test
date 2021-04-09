import styled from 'styled-components';

export const CustomButton = styled.button`
  display: block;
  background: #111;
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #000;
  }
`;
