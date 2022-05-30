import React from 'react';
import { Container, Content, Menu, Top } from './style';
import { AiOutlineClose, AiOutlineEye } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';
import { useAgents } from '../../providers/agents';

interface AgentOptionsProps {
  closeModal: () => void;
}

const AgentOptions = ({ closeModal }: AgentOptionsProps) => {
  const { selectedAgentId } = useAgents();

  return (
    <Container onClick={closeModal}>
      <Content>
        <Top>
          <AiOutlineClose onClick={closeModal} />
        </Top>
        <Menu>
          <Link href={`/agent/${selectedAgentId}`}>
            <div>
              <AiOutlineEye size={18} />
              <a>Ver Colaborador</a>
            </div>
          </Link>
          <div>
            <FiTrash2 size={18} />
            <p>Excluir</p>
          </div>
        </Menu>
      </Content>
    </Container>
  );
};

export default AgentOptions;
