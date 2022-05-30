import React, { useState } from 'react';
import { useAgents } from '../../providers/agents';
import Table from '../../components/Table';
import { NameContainer, StatusContainer, StatusIcon, UserIcon } from './style';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DesktopAgentModal from '../../components/DesktopAgentModal';
import useComponentVisible from '../../hooks';

const AgentsTable = () => {
  const { filteredAgents } = useAgents();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome Completo',
        accessor: 'name',
        Cell: (c) => {
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
        Cell: (c) => {
          const { ref, isComponentVisible, setIsComponentVisible } =
            useComponentVisible(false);

          return (
            <StatusContainer>
              <StatusIcon disabled={c.row.original.status === 'inactive'}>
                {c.row.original.status === 'active' ? 'Ativo' : 'Inativo'}
              </StatusIcon>
              <div onClick={() => setIsComponentVisible(true)} ref={ref}>
                <BsThreeDotsVertical size={'15px'} />
                {isComponentVisible && (
                  <DesktopAgentModal id={c.row.original.agent_id} />
                )}
              </div>
            </StatusContainer>
          );
        },
      },
    ],

    []
  );

  return (
    <div>
      <Table hasPagination columns={columns} data={filteredAgents} />
    </div>
  );
};

export default AgentsTable;
