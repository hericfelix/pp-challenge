import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 0.375rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    > div:first-child {
      padding-left: 0.625rem;
      display: flex;
      align-items: center;
      gap: 0.875rem;
      h2 {
        font-weight: 600;

        line-height: 116%;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.black};
      }

      @media (min-width: 768px) {
        padding-left: 0;

        h2 {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const ReturnIcon = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.neutral1};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.black};
  }
`;
