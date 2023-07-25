import styled, { css } from "styled-components";

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
  border-bottom: 1px solid #ddd;

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
  color: white;
  border: none;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;

      &:hover {
        background-color: hsl(120, 100%, 30%);
        transition: 0.2s;
        cursor: pointer;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;

      &:hover {
        background-color: hsl(0, 100%, 65%);
        transition: 0.2s;
        cursor: pointer;
      }
    `}
`;
