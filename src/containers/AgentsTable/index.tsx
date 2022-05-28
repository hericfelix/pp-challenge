import React from 'react';
import { useAgents } from '../../providers/agents';
import Table from '../Table';
import { NameContainer, StatusContainer, StatusIcon, UserIcon } from './style';
import { BsThreeDotsVertical } from 'react-icons/bs';

const AgentsTable = () => {
  const { agents } = useAgents();

  console.log(agents);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome Completo',
        accessor: 'name',
        Cell: (c) => {
          console.log(c.row.original.status === 'inactive');
          return (
            <NameContainer>
              <UserIcon
                disabled={c.row.original.status === 'inactive'}
                width={32}
                height={32}
                alt={c.row.original.name}
                src={c.row.original.image}
              />
              <p>{c.row.original.name}</p>
            </NameContainer>
          );
        },
      },
      {
        Header: 'Departamento',
        accessor: 'department',
      },
      {
        Header: 'Cargo',
        accessor: 'role',
      },
      {
        Header: 'Unidade',
        accessor: 'branch',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (c) => (
          <StatusContainer>
            <StatusIcon disabled={c.row.original.status === 'inactive'}>
              {c.row.original.status === 'active' ? 'Ativo' : 'Inativo'}
            </StatusIcon>
            <BsThreeDotsVertical size={'15px'} />
          </StatusContainer>
        ),
      },
    ],

    []
  );

  return (
    <div>
      <Table hasPagination columns={columns} data={agents} />
    </div>
  );
};

export default AgentsTable;
