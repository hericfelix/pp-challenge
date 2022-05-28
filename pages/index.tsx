import { Modal, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import AgentOptions from '../src/components/AgentOptions';
import RoleCard from '../src/components/RoleCard';
import SelectCategory from '../src/components/SelectCategory';
import { useAgents } from '../src/providers/agents';
import { useRoles } from '../src/providers/roles';

const Home: NextPage = () => {
  const { agents } = useAgents();
  const { roles } = useRoles();

  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir modal</button>
      <Modal open={open} onClose={closeModal}>
        <AgentOptions closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Home;
