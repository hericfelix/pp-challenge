import { createContext, useContext, useState } from 'react';
import api from '../../services/api';
import { RolesContextData, ProviderProps, IRoles } from '../../ts/interfaces';

const RolesContext = createContext<RolesContextData>({} as RolesContextData);

export const RolesProvider = ({ children }: ProviderProps) => {
  const [roles, setRoles] = useState<IRoles[]>([]);

  const getRoles = async () => {
    return await api
      .get('roles')
      .then((res) => res.data)
      .then((res) => {
        setRoles(res.items);
        return res.items;
      });
  };

  const getRoleById = async (id: number) => {
    return await api.get(`role/${id}`).then((res) => res.data);
  };

  return (
    <RolesContext.Provider value={{ roles, getRoleById, getRoles }}>
      {children}
    </RolesContext.Provider>
  );
};

export const useRoles = () => useContext(RolesContext);