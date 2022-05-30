import styled from '@emotion/styled';

export const Content = styled.div`
  position: absolute;
  z-index: 1;
  right: 40px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  width: 21.25rem;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  > div {
    display: flex;
    gap: 1rem;
    align-items: center;

    :nth-child(1n + 2) {
      cursor: default;
      opacity: 0.3;
    }

    a,
    p {
      text-decoration: none;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      color: ${({ theme }) => theme.neutral5};
    }
    :first-child:hover {
      > * {
        color: ${({ theme }) => theme.darkGreen};
      }
    }
  }
`;
