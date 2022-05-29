import React from 'react';
import Table from '../../components/Table';
import { Checkbox } from '@mui/material';
import useWindowDimensions from '../../hooks';
import { IRolesDetailed } from '../../ts/interfaces';

interface DetailedRoleTableProps {
  role: IRolesDetailed;
}

const DetailedRoleTable = ({ role }: DetailedRoleTableProps) => {
  const { width } = useWindowDimensions();

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
        data={role.role.grouprules}
        columns={columns}
      />
    </div>
  );
};

export default DetailedRoleTable;
