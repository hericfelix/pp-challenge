import { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { AgentsContextData, ProviderProps, IAgents } from '../../ts/interfaces';

const AgentsContext = createContext<AgentsContextData>({} as AgentsContextData);

export const AgentsProvider = ({ children }: ProviderProps) => {
  const [agents, setAgents] = useState<IAgents[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<IAgents[]>([]);
  const [selectedAgentId, setSelectedAgentId] = useState<number>(0);

  const getAgents = async () => {
    return await api
      .get('agents')
      .then((res) => res.data)
      .then((res) => {
        setAgents(res.items);
        setFilteredAgents(res.items);
        return res.items;
      });
  };

  const getAgentById = async (id: string) => {
    return await api
      .get(`agent/${id}`)
      .then((res) => res.data)
      .then((res) => res.agent);
  };

  const handleAgentsSearch = (str: string) => {
    const result = agents.filter((el) =>
      el.name.toLowerCase().includes(str.toLowerCase())
    );
    setFilteredAgents(result);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <AgentsContext.Provider
      value={{
        selectedAgentId,
        setSelectedAgentId,
        handleAgentsSearch,
        filteredAgents,
        getAgentById,
        getAgents,
      }}
    >
      {children}
    </AgentsContext.Provider>
  );
};

export const useAgents = () => useContext(AgentsContext);
