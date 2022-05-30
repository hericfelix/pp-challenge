import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0.625rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `2px solid ${theme.neutral1}`};
  box-sizing: border-box;
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row-reverse;
    align-items: stretch;
    > h1 {
      padding: 0.906rem 2rem;
      border-right: ${({ theme }) => `2px solid ${theme.neutral1}`};
    }
    > div {
      padding: 0.906rem 2rem;
      border-left: ${({ theme }) => `2px solid ${theme.neutral1}`};
      align-items: center;
    }
    > div:last-child {
      display: none;
    }
  }
`;

export const UserLogo = styled.div`
  display: flex;
  gap: 0.625rem;

  > div:first-child {
    border-radius: 5rem;
    font-size: 0.875rem;
    line-height: 100%;
    color: ${({ theme }) => theme.black};
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.lightGreen};
  }

  > div:last-child {
    display: none;

    @media (min-width: 768px) {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > p {
        font-size: 0.75rem;
        line-height: 120%;
        color: ${({ theme }) => theme.neutral5};
      }

      > p:first-child {
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        color: ${({ theme }) => theme.black};
      }
    }
  }
`;
