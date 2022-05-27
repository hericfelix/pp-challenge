import styled from '@emotion/styled';

interface IsOpenProps {
  isOpen: boolean;
}

export const Container = styled.div<IsOpenProps>`
  width: 20rem;
  max-width: 95%;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: ${({ theme, isOpen }) =>
    `2px solid ${isOpen ? theme.lightGreen : theme.neutral1}`};
  margin-bottom: 5px;
  transition: border 0.6s ease-in-out;
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
    transition: transform 0.6s ease-in-out;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
    width: 40%;
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

export const Bottom = styled.div<IsOpenProps>`
  max-height: ${({ isOpen }) => (isOpen ? '180px' : '0px')};
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
