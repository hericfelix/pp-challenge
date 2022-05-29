import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding-left: 12rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 0.375rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 59.75rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 768px) {
      width: 95%;
    }

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

export const RoleData = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  max-width: 59.75rem;
  width: 100%;
  box-sizing: border-box;
  h3 {
    font-weight: 600;
    color: ${({ theme }) => theme.black};
  }
`;

export const TopData = styled.div`
  border-bottom: ${({ theme }) => `2px solid ${theme.neutral1}`};
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    border-bottom: none;
    padding-bottom: 0;

    > div {
      flex-direction: row;
      justify-content: space-between;
      > * {
        width: 48%;
      }
    }
  }
`;

export const BottomData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 1.5rem;
`;
