import styled from '@emotion/styled';

export const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 12rem;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  }
`;
