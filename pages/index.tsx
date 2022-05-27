import type { NextPage } from 'next';
import AgentCard from '../src/components/AgentCard';
import { useAgents } from '../src/providers/agents';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { agents } = useAgents();

  return <div></div>;
};

export default Home;
