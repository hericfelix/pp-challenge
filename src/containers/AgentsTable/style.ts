import styled from '@emotion/styled';
import Image from 'next/image';

interface StatusProps {
  disabled: boolean;
}

export const NameContainer = styled.div`
  width: 12.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  box-sizing: border-box;

  h4 {
    width: 100%;
    line-height: 140%;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.neutral5};
  }

  p {
    width: calc(100% - 2.625rem);
    line-height: 140%;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.neutral5};
  }
`;

export const StatusIcon = styled.div<StatusProps>`
  width: 4.5rem;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.neutral1 : theme.lightGreen};
  padding: 0.25rem 0;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 116%;
  color: ${({ theme }) => theme.black};
`;

export const UserIcon = styled(Image)<StatusProps>`
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.lightGreen}`};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

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
