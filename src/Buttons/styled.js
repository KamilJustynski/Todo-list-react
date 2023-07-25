import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const Key = styled.button`
  border: none;
  background-color: white;
  color: teal;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #ccc;
      transition: 0.2s;
      cursor: auto;
    `}

  &:hover {
    color: hsl(180, 100%, 35%);
    transition: 0.2s;
  }
`;
