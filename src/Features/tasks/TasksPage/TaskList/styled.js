import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  padding: 30px 10px;
  margin: 0px;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.mediumGray};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.color.white};
  border: none;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.green};

      &:hover {
        background-color: ${({ theme }) => theme.color.mediumGreen};
        transition: 0.2s;
        cursor: pointer;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};

      &:hover {
        background-color: ${({ theme }) => theme.color.mediumRed};
        transition: 0.2s;
        cursor: pointer;
      }
    `}
`;

export const ListLink = styled(Link)`
  text-decoration: none;
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
