import React from 'react';
import Table from '../../components/Table';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRoles } from '../../providers/roles';
import { StatusContainer } from './style';
import useComponentVisible from '../../hooks';
import DesktopRoleModal from '../../components/DesktopRoleModal';

const RolesTable = () => {
  const { filteredRoles } = useRoles();

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
        Cell: (c: any) => {
          const { ref, isComponentVisible, setIsComponentVisible } =
            useComponentVisible(false);

          return (
            <StatusContainer>
              <p>{c.value}</p>
              <div onClick={() => setIsComponentVisible(true)} ref={ref}>
                <BsThreeDotsVertical size={'15px'} />
                {isComponentVisible && <DesktopRoleModal />}
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
      <Table hasPagination columns={columns} data={filteredRoles} />
    </div>
  );
};

export default RolesTable;
