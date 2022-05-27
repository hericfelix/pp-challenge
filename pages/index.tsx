import { TextField } from '@mui/material';
import type { NextPage } from 'next';
import RoleCard from '../src/components/RoleCard';
import { useAgents } from '../src/providers/agents';
import { useRoles } from '../src/providers/roles';

const Home: NextPage = () => {
  const { agents } = useAgents();
  const { roles } = useRoles();

  console.log(roles);

  return <div></div>;
};

export default Home;
