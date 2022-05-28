import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRoles } from '../../providers/roles';
import { CheckInput, PaddingRemover, StatusContainer } from './style';
import { IRolesDetailed } from '../../ts/interfaces';
import { ReadWriteDelete } from '../../ts/types';
import { Checkbox } from '@mui/material';

interface DetailedRoleTableProps {
  id: number;
}

const DetailedRoleTable = ({ id }: DetailedRoleTableProps) => {
  const { getRoleById } = useRoles();

  const [selectedRolePermissions, setSelectedRole] = useState<
    ReadWriteDelete[]
  >([] as ReadWriteDelete[]);

  const fetchRole = async () => {
    const selectedRole = await getRoleById(id);

    setSelectedRole(selectedRole.role.grouprules);
  };

  useEffect(() => {
    fetchRole();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Cargo',
        accessor: 'role',
        width: 300,
        height: 50,
      },
      {
        Header: 'Ler',
        Cell: (c) => (
          <Checkbox
            style={{ paddingLeft: 0 }}
            checked={c.row.original.permissions.includes('read')}
            readOnly
          />
        ),
      },
      {
        Header: 'Editar',
        Cell: (c) => (
          <Checkbox
            style={{ paddingLeft: 0 }}
            checked={c.row.original.permissions.includes('write')}
            readOnly
          />
        ),
      },
      {
        Header: 'Excluir',
        Cell: (c) => (
          <Checkbox
            style={{ paddingLeft: 0 }}
            checked={c.row.original.permissions.includes('delete')}
            readOnly
          />
        ),
      },
    ],

    []
  );

  return (
    <div>
      <Table
        hasPagination={false}
        data={selectedRolePermissions}
        columns={columns}
      />
    </div>
  );
};

export default DetailedRoleTable;
