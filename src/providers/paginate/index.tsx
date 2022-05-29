import { createContext, useContext, useEffect, useState } from 'react';
import {
  IAgents,
  IRoles,
  PaginateContextData,
  ProviderProps,
} from '../../ts/interfaces';
import { useAgents } from '../agents';
import { useRoles } from '../roles';

const PaginateContext = createContext<PaginateContextData>(
  {} as PaginateContextData
);

export const PaginateProvider = ({ children }: ProviderProps) => {
  const { filteredAgents } = useAgents();
  const { filteredRoles } = useRoles();

  const [paginatedAgents, setPaginatedAgents] = useState<IAgents[]>(
    [] as IAgents[]
  );

  const [paginatedRoles, setPaginatedRoles] = useState<IRoles[]>(
    [] as IRoles[]
  );

  const [canLoadMoreAgents, setCanLoadMoreAgents] = useState<boolean>(true);
  const [canLoadMoreRoles, setCanLoadMoreRoles] = useState<boolean>(true);

  useEffect(() => {
    const slicedAgents = filteredAgents.slice(0, 5);

    setPaginatedAgents(slicedAgents);
    console.log(slicedAgents.length);
    console.log(filteredAgents.length);
    if (slicedAgents.length === filteredAgents.length) {
      setCanLoadMoreAgents(false);
    } else {
      setCanLoadMoreAgents(true);
    }
  }, [filteredAgents]);

  useEffect(() => {
    const slicedRoles = filteredRoles.slice(0, 5);

    setPaginatedRoles(slicedRoles);
    console.log(slicedRoles.length);
    console.log(filteredRoles.length);
    if (slicedRoles.length === filteredRoles.length) {
      setCanLoadMoreRoles(false);
    } else {
      setCanLoadMoreRoles(true);
    }
  }, [filteredRoles]);

  const handleLoadMoreAgents = () => {
    const slicedAgents = filteredAgents.slice(0, paginatedAgents.length + 5);

    setPaginatedAgents(slicedAgents);
    if (slicedAgents.length === filteredAgents.length) {
      setCanLoadMoreAgents(false);
    }
  };

  const handleLoadMoreRoles = () => {
    const slicedRoles = filteredRoles.slice(0, paginatedRoles.length + 5);

    setPaginatedRoles(slicedRoles);
    if (slicedRoles.length === filteredRoles.length) {
      setCanLoadMoreRoles(false);
    }
  };

  return (
    <PaginateContext.Provider
      value={{
        canLoadMoreAgents,
        handleLoadMoreAgents,
        paginatedAgents,
        canLoadMoreRoles,
        handleLoadMoreRoles,
        paginatedRoles,
      }}
    >
      {children}
    </PaginateContext.Provider>
  );
};

export const usePaginate = () => useContext(PaginateContext);
