import React from 'react';
import Table from '../Table';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRoles } from '../../providers/roles';
import { StatusContainer } from './style';

const RolesTable = () => {
  const { roles } = useRoles();

  console.log(roles);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Cargo',
        accessor: 'name',
      },
      {
        Header: 'Departamento',
        accessor: 'departament',
      },
      {
        Header: 'Colaboradores',
        accessor: 'agents_quantity',
        width: 300,
        Cell: ({ value }) => (
          <StatusContainer>
            <p>{value}</p>
            <BsThreeDotsVertical size={'15px'} />
          </StatusContainer>
        ),
      },
    ],

    []
  );

  return (
    <div>
      <Table hasPagination columns={columns} data={roles} />
    </div>
  );
};

export default RolesTable;
