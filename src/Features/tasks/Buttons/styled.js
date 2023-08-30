import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-items: center;
    justify-content: center;
    padding-right: 25px;
  
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.teal};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray};
      transition: 0.2s;
      cursor: auto;
    `}

  &:hover {
    color: ${({ theme }) => theme.color.lightTeal};
    transition: 0.2s;
  }
`;
