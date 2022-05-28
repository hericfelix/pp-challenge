import styled from '@emotion/styled';

export const CheckInput = styled.input`
  :checked {
    accent-color: ${({ theme }) => theme.darkGreen};
    color: #fff;
  }
`;

export const PaddingRemover = styled.div`
  span {
    padding-left: 0;
  }
`;
