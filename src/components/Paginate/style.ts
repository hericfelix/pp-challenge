import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectPageSizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.469rem;
  p {
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.neutral5};
  }
  select {
    background: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.neutral5};
    border: ${({ theme }) => `2px solid ${theme.neutral2}`};
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding: 0.375rem 0.5rem;
  }
`;

export const ArrowContainer = styled.div`
  border-radius: 0.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 150%;
    color: ${({ theme }) => theme.neutral5};
  }
  button {
    background: none;
  }
`;

export const ArrowButton = styled.button`
  border: ${({ theme }) => `2px solid ${theme.neutral4}`};
  height: 2.25rem;
  width: 3rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.neutral4};
  border-radius: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  :disabled {
    border: ${({ theme }) => `2px solid ${theme.neutral2}`};
    color: ${({ theme }) => theme.neutral2};
    cursor: default;

    svg {
      color: ${({ theme }) => theme.neutral2};
    }
  }

  :last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  :hover:enabled {
    transition: 0.2s;
    background: ${({ theme }) => theme.neutral5};
  }

  svg {
    color: ${({ theme }) => theme.neutral5};
  }
`;
