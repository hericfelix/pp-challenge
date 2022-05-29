import styled from '@emotion/styled';

export const StatusContainer = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > :last-child {
    cursor: pointer;
    height: 100%;
    width: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme }) => theme.neutral5};
  }
`;
