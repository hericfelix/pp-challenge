import React, { Dispatch, SetStateAction } from 'react';
import { Container, Content, Menu, Top } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { AgentsOrRoles } from '../../ts/types';

interface SelectCategoryProps {
  closeModal: () => void;
  changeCategory: Dispatch<SetStateAction<AgentsOrRoles>>;
}

const SelectCategory = ({
  closeModal,
  changeCategory,
}: SelectCategoryProps) => {
  return (
    <Container onClick={closeModal}>
      <Content>
        <Top>
          <p>Categorias</p>
          <AiOutlineClose onClick={closeModal} />
        </Top>
        <Menu>
          <p onClick={() => changeCategory('agents')}>Colaboradores</p>
          <p onClick={() => changeCategory('roles')}>Cargos</p>
        </Menu>
      </Content>
    </Container>
  );
};

export default SelectCategory;
