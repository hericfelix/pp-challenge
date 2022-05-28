import { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { AgentsContextData, ProviderProps, IAgents } from '../../ts/interfaces';

const AgentsContext = createContext<AgentsContextData>({} as AgentsContextData);

export const AgentsProvider = ({ children }: ProviderProps) => {
  const [agents, setAgents] = useState<IAgents[]>([]);

  const getAgents = async () => {
    return await api
      .get('agents')
      .then((res) => res.data)
      .then((res) => {
        setAgents(res.items);
        return res.items;
      });
  };

  const getAgentById = async (id: number) => {
    return await api.get(`agent/${id}`).then((res) => res.data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <AgentsContext.Provider value={{ agents, getAgentById, getAgents }}>
      {children}
    </AgentsContext.Provider>
  );
};

export const useAgents = () => useContext(AgentsContext);
