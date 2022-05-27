import styled from '@emotion/styled';

export const Container = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  border: ${({ theme }) => `2px solid ${theme.lightGreen}`};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  p {
    color: ${({ theme }) => theme.black};
    font-size: 1rem;
    font-weight: 600;
    line-height: 150%;
  }
`;
