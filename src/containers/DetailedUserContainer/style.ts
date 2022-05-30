import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2.5rem 1.5rem;
  width: 100%;
  gap: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  box-sizing: border-box;
  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 150%;
    color: ${({ theme }) => theme.black};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  > div:first-child {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.neutral1};
    flex-shrink: 0;
    box-sizing: border-box;
  }

  > div:last-child {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    flex-grow: 0;
    box-sizing: border-box;
    max-width: calc(100% - 6.5rem);

    p {
      font-size: 14px;
      line-height: 120%;
      color: ${({ theme }) => theme.neutral5};
      word-wrap: break-word;
    }
  }
`;

export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  width: 100%;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (min-width: 1100px) {
      justify-content: space-between;
    }
  }
`;

export const PersonalInfoCards = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.neutral7};
  border-radius: 0.5rem;
  border: ${({ theme }) => `2px solid ${theme.neutral2}`};
  width: 100%;
  max-width: 18rem;

  > div:first-child {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.neutral2};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${({ theme }) => theme.neutral6};
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
      font-size: 0.75rem;
      line-height: 120%;
      color: ${({ theme }) => theme.neutral5};
    }
    p {
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 100%;
      color: ${({ theme }) => theme.black};
    }
  }
`;

export const OrganizationalData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  border: ${({ theme }) => `2px solid ${theme.neutral1}`};
  border-radius: 0.5rem;

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    @media (min-width: 1024px) {
      justify-content: space-between;
      > * {
        width: 46%;
        cursor: default;
      }
    }
  }
`;
