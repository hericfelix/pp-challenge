import React, { useState } from 'react';
import { IAgents } from '../../ts/interfaces';
import {
  Bottom,
  Container,
  InnerCardContainer,
  NameContainer,
  StatusIcon,
  Top,
  UserIcon,
} from './style';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../Button';

interface AgentCardProps {
  agent: IAgents;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Container isOpen={isOpen} disabled={true}>
      <Top onClick={handleOpen} isOpen={isOpen}>
        <NameContainer>
          <h4>Nome Completo</h4>
          <UserIcon width={34} height={34} src={agent.image} alt={agent.name} />
          <p>{agent.name}</p>
        </NameContainer>
        <IoIosArrowUp height={7} color="#587169" />
      </Top>
      <Bottom isOpen={isOpen}>
        <div>
          <InnerCardContainer>
            <h4>Departamento</h4>
            <p>{agent.department}</p>
          </InnerCardContainer>
          <InnerCardContainer>
            <h4>Cargo</h4>
            <p>{agent.role}</p>
          </InnerCardContainer>
        </div>
        <div>
          <InnerCardContainer>
            <h4>Unidade</h4>
            <p>123456789</p>
          </InnerCardContainer>

          <InnerCardContainer>
            <h4>Unidade</h4>
            <p>{agent.branch}</p>
          </InnerCardContainer>
        </div>
        <div>
          <InnerCardContainer>
            <h4>Status</h4>
            <StatusIcon disabled={true}>
              {agent.status === 'active' ? 'Ativo' : 'Inativo'}
            </StatusIcon>
          </InnerCardContainer>
        </div>
        <Button onClick={() => {}}>
          <AiOutlineFileAdd size={22} color="#1DD195" />
          <p>Ações</p>
        </Button>
      </Bottom>
    </Container>
  );
};

export default AgentCard;
