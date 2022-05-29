import React from 'react';
import { Container, Content, Menu, Top } from './style';
import { AiOutlineClose, AiOutlineEye } from 'react-icons/ai';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import Link from 'next/link';

interface RoleOptions {
  closeModal: () => void;
}

const RoleOptions = ({ closeModal }: RoleOptions) => {
  return (
    <Container onClick={closeModal}>
      <Content>
        <Top>
          <AiOutlineClose onClick={closeModal} />
        </Top>
        <Menu>
          <div>
            <AiOutlineEye size={18} />
            <Link href={'role/1'}>
              <a>Ver Cargo</a>
            </Link>
          </div>
          <div>
            <FiEdit size={18} />
            <p>Editar</p>
          </div>
          <div>
            <BiCopy size={18} />
            <p>Duplicar</p>
          </div>
          <div>
            <FiTrash2 size={18} />
            <p>Excluir</p>
          </div>
        </Menu>
      </Content>
    </Container>
  );
};

export default RoleOptions;
