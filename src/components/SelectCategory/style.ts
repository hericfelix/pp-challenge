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
  gap: 0.625rem;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 150%;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.black};
  }
`;

export const Menu = styled.div`
  padding: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.125rem;
  width: 100%;
  box-sizing: border-box;
  p {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    color: ${({ theme }) => theme.black};
  }
`;
