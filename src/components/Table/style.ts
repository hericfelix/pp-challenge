import styled from '@emotion/styled';

interface StatusProps {
  disabled: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.875rem;
  background: #fffdfa;

  > div:first-child {
    overflow: auto;
    max-height: 75vh;
    box-sizing: border-box;
    width: 100%;
    ::-webkit-scrollbar {
      height: 15px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 14px 14px transparent;
      border: solid 4px transparent;
    }

    ::-webkit-scrollbar-thumb {
      box-shadow: ${({ theme }) => `inset 0 0 14px 14px ${theme.neutral2}`};
      border: solid 4px transparent;
      border-radius: 32px;
    }

    ::-webkit-scrollbar-button {
      display: none;
    }
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
  padding: 1rem 0.5rem;
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
