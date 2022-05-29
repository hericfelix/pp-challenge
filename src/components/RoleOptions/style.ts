import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 20rem;
  box-sizing: border-box;
  max-width: 95%;
  background-color: #ffffff;
  border-radius: 0.75rem 0.75rem 0px 0px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.125rem;
  width: 100%;
  box-sizing: border-box;
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    :nth-child(1n + 2) {
      opacity: 0.3;
    }
    a {
      text-decoration: none;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      color: ${({ theme }) => theme.neutral5};
    }
  }
`;
