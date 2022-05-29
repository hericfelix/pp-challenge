import { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { RolesContextData, ProviderProps, IRoles } from '../../ts/interfaces';

const RolesContext = createContext<RolesContextData>({} as RolesContextData);

export const RolesProvider = ({ children }: ProviderProps) => {
  const [roles, setRoles] = useState<IRoles[]>([]);
  const [filteredRoles, setFilteredRoles] = useState<IRoles[]>([]);

  const getRoles = async () => {
    return await api
      .get('roles')
      .then((res) => res.data)
      .then((res) => {
        setRoles(res.roles);
        setFilteredRoles(res.roles);
        return res.roles;
      });
  };

  const getRoleById = async (id: number) => {
    return await api.get(`role/${id}`).then((res) => res.data);
  };

  const handleRolesSearch = (str: string) => {
    const result = roles.filter((el) =>
      el.name.toLowerCase().includes(str.toLowerCase())
    );
    setFilteredRoles(result);
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <RolesContext.Provider
      value={{ filteredRoles, getRoleById, getRoles, handleRolesSearch }}
    >
      {children}
    </RolesContext.Provider>
  );
};

export const useRoles = () => useContext(RolesContext);
