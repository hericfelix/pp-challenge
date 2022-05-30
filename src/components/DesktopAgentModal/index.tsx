import React from 'react';
import { Content } from './style';
import { AiOutlineEye } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';

interface AgentOptionsProps {
  id: number;
}

const DesktopAgentModal = ({ id }: AgentOptionsProps) => {
  return (
    <Content>
      <Link href={`/agent/${id}`}>
        <div>
          <AiOutlineEye size={18} />
          <a>Ver colaborador</a>
        </div>
      </Link>
      <div>
        <FiTrash2 size={18} />
        <p>Excluir</p>
      </div>
    </Content>
  );
};

export default DesktopAgentModal;
