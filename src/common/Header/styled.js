import styled from "styled-components";

export const MainHeader = styled.header`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderTitle = styled.h1`
  justify-content: flex-start;
`;
