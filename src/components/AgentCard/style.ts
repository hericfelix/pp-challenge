import styled from '@emotion/styled';
import Image from 'next/image';

interface IsOpenProps {
  isOpen: boolean;
}

interface ContainerProps {
  isOpen: boolean;
  disabled: boolean;
}

interface StatusProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 20rem;
  max-width: 95%;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: ${({ theme, disabled }) =>
    disabled ? `2px solid ${theme.neutral1}` : `2px solid ${theme.lightGreen}`};
  margin-bottom: 5px;
`;

export const Top = styled.div<IsOpenProps>`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  align-items: center;
  > :last-child {
    font-weight: 600;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const NameContainer = styled.div`
  width: 12.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;

  h4 {
    width: 100%;
    line-height: 140%;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.neutral5};
  }

  p {
    width: calc(100% - 42px);
    line-height: 140%;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.neutral5};
  }
`;

export const UserIcon = styled(Image)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.lightGreen}`};
`;

export const Bottom = styled.div<IsOpenProps>`
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
  width: 100%;
  transition: max-height ease-in-out 0.8s;
  overflow-y: hidden;

  > :last-child {
    margin-bottom: 1.5rem;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;

export const InnerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  width: 45%;
  > h4 {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.neutral5};
    font-weight: 600;
    line-height: 140%;
  }
  > p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.neutral5};
    line-height: 140%;
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
