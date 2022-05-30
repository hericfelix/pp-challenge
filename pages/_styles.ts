import styled from '@emotion/styled';
import { AgentsOrRoles } from '../src/ts/types';

interface CategoryProps {
  category: AgentsOrRoles;
}

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 0.375rem;
  box-sizing: border-box;
  h2 {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.black};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileContent = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 2.5rem 1rem;
    border-bottom: ${({ theme }) => `2px solid ${theme.neutral1}`};
  }
  > div:last-child {
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const CardsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 12rem;
  }
`;

export const DesktopContent = styled.div`
  box-sizing: border-box;
  margin-top: 3.125rem;
  height: calc(100% - 3.125rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.black};
  }

  > div {
    display: flex;
    flex-direction: column;
    max-width: 60vw;
    width: 59.75rem;
    padding: 2.5rem 1.5rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    min-height: 34.5rem;
    gap: 2.5rem;
    position: relative;
  }
  h3 {
    font-weight: 600;
    color: ${({ theme }) => theme.black};
  }
`;

export const DesktopCategorySelector = styled.div<CategoryProps>`
  width: 100%;
  border-bottom: ${({ theme }) => `2px solid ${theme.neutral1}`};
  button {
    position: relative;
    display: inline-block;
    width: 12.25rem;
    text-align: center;
    font-weight: 600;
    font-size: 0.875rem;
    padding-bottom: 1rem;
    cursor: pointer;
    border: none;
    background-color: transparent;

    :first-child {
      color: ${({ theme, category }) =>
        category === 'agents' ? theme.black : theme.neutral3};
      ::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ theme, category }) =>
          category === 'agents' ? theme.green : 'transparent'};
      }
    }

    :last-child {
      color: ${({ theme, category }) =>
        category === 'agents' ? theme.neutral3 : theme.black};
      ::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ theme, category }) =>
          category === 'agents' ? 'transparent' : theme.green};
      }
    }
  }
`;
