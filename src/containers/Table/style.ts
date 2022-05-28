import styled from '@emotion/styled';

interface StatusProps {
  disabled: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 1.313rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.875rem;
  background: #fffdfa;

  > div:first-child {
    overflow-x: auto;
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  border-radius: 0.25rem;
  border-spacing: 0;
  text-align: left;
  margin: 0 auto;
  width: 100%;
`;

export const THead = styled.thead`
  tr {
    border-radius: 0.5rem 0.5rem 0 0;
    border: ${(props) => `2px solid ${props.theme.neutral2}`};
  }
`;

export const TBody = styled.tbody``;

export const TFoot = styled.tfoot``;

export const TR = styled.tr`
  :last-child {
    td {
      border-bottom: ${({ theme }) => `2px solid  ${theme.neutral1}`};
    }
  }
`;

export const TH = styled.th`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 140%;
  padding: 1rem;
  color: ${(props) => props.theme.neutral5};
`;

export const TD = styled.td`
  margin: 0;
  padding: 0.5rem;
  border-bottom: ${({ theme }) => `2px solid  ${theme.neutral1}`};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 140%;
  color: ${({ children, theme }) =>
    children?.props?.row.original.status === 'inactive'
      ? theme.neutral3
      : theme.neutral5};
  display: flex;
  align-items: center;
`;
