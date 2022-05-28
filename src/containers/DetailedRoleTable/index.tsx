import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { useRoles } from '../../providers/roles';
import { ReadWriteDelete } from '../../ts/types';
import { Checkbox } from '@mui/material';
import useWindowDimensions from '../../hooks';

interface DetailedRoleTableProps {
  id: number;
}

const DetailedRoleTable = ({ id }: DetailedRoleTableProps) => {
  const { width } = useWindowDimensions();
  const { getRoleById } = useRoles();

  const [selectedRolePermissions, setSelectedRolePermission] = useState<
    ReadWriteDelete[]
  >([] as ReadWriteDelete[]);

  const fetchRole = async () => {
    const selectedRole = await getRoleById(id);

    setSelectedRolePermission(selectedRole.role.grouprules);
  };

  useEffect(() => {
    fetchRole();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Cargo',
        accessor: 'role',
        height: 50,
        width: width > 768 ? 120 : 60,
      },
      {
        Header: 'Ler',
        width: 40,
        Cell: (c) => (
          <Checkbox
            style={{ paddingLeft: 0, cursor: 'default' }}
            checked={c.row.original.permissions.includes('read')}
            readOnly
          />
        ),
      },
      {
        Header: 'Editar',
        width: 40,
        Cell: (c) => (
          <Checkbox
            style={{ paddingLeft: 0, cursor: 'default' }}
            checked={c.row.original.permissions.includes('write')}
            readOnly
          />
        ),
      },
      {
        Header: 'Excluir',
        width: 40,
        Cell: (c) => (
          <Checkbox
            style={{
              paddingLeft: 0,
              cursor: 'default',
            }}
            checked={c.row.original.permissions.includes('delete')}
            readOnly
          />
        ),
      },
    ],

    [width]
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
