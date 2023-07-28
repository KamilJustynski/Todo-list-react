import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 50px auto;
  max-width: 1000px;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 20px;
  }
`;
