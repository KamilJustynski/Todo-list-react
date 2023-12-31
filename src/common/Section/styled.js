import styled from "styled-components";

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin: 20px 0;
`;

export const SectionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.mediumGray};
  padding-left: 20px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const SectionHeader = styled.h2`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 25px
  }
`;
