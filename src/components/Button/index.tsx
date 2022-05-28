import React, { ReactNode } from 'react';
import { Container } from './style';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
