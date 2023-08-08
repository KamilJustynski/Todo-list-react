import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.mediumGray};
`;

export const FormButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.mediumTeal};
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;
