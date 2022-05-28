import Image from 'next/image';
import React from 'react';
import { Container, UserLogo } from './style';

const Header = () => {
  return (
    <Container>
      <UserLogo>
        <div>LZ</div>
        <div>
          <p>Luiz Zlochevsky</p>
          <p>meus dados</p>
        </div>
      </UserLogo>
      <h1>
        <Image width={42} height={42} alt="Pedido Pago" src={'/brand.png'} />
      </h1>
      <div />
    </Container>
  );
};

export default Header;
