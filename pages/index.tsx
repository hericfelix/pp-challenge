import { Modal, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import AgentOptions from '../src/components/AgentOptions';
import Paginate from '../src/components/Paginate';
import RoleOptions from '../src/components/RoleOptions';

import { useAgents } from '../src/providers/agents';
import { useRoles } from '../src/providers/roles';

const Home: NextPage = () => {
  const { agents } = useAgents();
  const { roles } = useRoles();

  const [open, setOpen] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(5);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paginate
        goToPage={(num) => {}}
        canNextPage={true}
        canPreviousPage={false}
        pageIndex={3}
        pageCount={15}
        data={agents}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default Home;
