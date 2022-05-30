import styled from '@emotion/styled';

export const Container = styled.button`
  margin: 0 auto;
  width: 100%;
  max-width: 20rem;
  border-radius: 0.5rem;
  border: ${({ theme }) => `2px solid ${theme.lightGreen}`};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  > :first-child {
    color: ${({ theme }) => theme.darkGreen};
    font-size: 1.5rem;
  }
  p {
    color: ${({ theme }) => theme.black};
    font-size: 1rem;
    font-weight: 600;
    line-height: 150%;
  }
`;
