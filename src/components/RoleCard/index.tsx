import React, { Dispatch, SetStateAction, useState } from 'react';
import { IRoles } from '../../ts/interfaces';
import { Bottom, Container, InnerCardContainer, Top } from './style';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../Button';

interface RoleCardProps {
  role: IRoles;
  setRoleOptionsIsOpen: Dispatch<SetStateAction<boolean>>;
}

const RoleCard = ({ role, setRoleOptionsIsOpen }: RoleCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Container isOpen={isOpen}>
      <Top onClick={handleOpen} isOpen={isOpen}>
        <div>
          <h4>Cargo</h4>
          <p>{role.name}</p>
        </div>
        <div>
          <h4>Departamento</h4>
          <p>{role.departament}</p>
        </div>

        <IoIosArrowUp height={7} color="#587169" />
      </Top>
      <Bottom isOpen={isOpen}>
        <div>
          <InnerCardContainer>
            <h4>Colaboradores</h4>
            <p>{role.agents_quantity}</p>
          </InnerCardContainer>
        </div>
        <Button
          onClick={() => {
            setRoleOptionsIsOpen(true);
          }}
        >
          <AiOutlineFileAdd size={22} color="#1DD195" />
          <p>Ações</p>
        </Button>
      </Bottom>
    </Container>
  );
};

export default RoleCard;
