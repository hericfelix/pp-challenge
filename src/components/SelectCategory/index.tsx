import React from 'react';
import { Container, Content, Menu, Top } from './style';
import { AiOutlineClose } from 'react-icons/ai';

interface SelectCategoryProps {
  closeModal: () => void;
  changeCategory: (str: string) => void;
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
