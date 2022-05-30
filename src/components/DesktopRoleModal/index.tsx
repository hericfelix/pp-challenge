import React from 'react';
import { Content } from './style';
import { AiOutlineEye } from 'react-icons/ai';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';
import { BiCopy } from 'react-icons/bi';

const DesktopRoleModal = () => {
  return (
    <Content>
      <Link href={`/role/1`}>
        <div>
          <AiOutlineEye size={18} />
          <a>Ver cargo</a>
        </div>
      </Link>
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
    </Content>
  );
};

export default DesktopRoleModal;
