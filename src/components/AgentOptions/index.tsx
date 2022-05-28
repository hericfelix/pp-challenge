import React from 'react';
import { Container, Content, Menu, Top } from './style';
import { AiOutlineClose, AiOutlineEye } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

interface AgentOptionsProps {
  closeModal: () => void;
}

const AgentOptions = ({ closeModal }: AgentOptionsProps) => {
  return (
    <Container onClick={closeModal}>
      <Content>
        <Top>
          <AiOutlineClose onClick={closeModal} />
        </Top>
        <Menu>
          <div>
            <AiOutlineEye />
            <p onClick={() => {}}>Ver Colaborador</p>
          </div>
          <div>
            <FiTrash2 />
            <p>Excluir</p>
          </div>
        </Menu>
      </Content>
    </Container>
  );
};

export default AgentOptions;
