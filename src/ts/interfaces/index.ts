import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ActiveOrInactive, CPF, ReadWriteDelete } from '../types';

export interface ProviderProps {
  children: ReactNode;
}

export interface AgentsContextData {
  filteredAgents: IAgents[];
  getAgents: () => void;
  getAgentById: (id: string) => Promise<IAgentsDetailed>;
  handleAgentsSearch: (str: string) => void;
  selectedAgentId: number;
  setSelectedAgentId: Dispatch<SetStateAction<number>>;
}

export interface RolesContextData {
  filteredRoles: IRoles[];
  getRoles: () => void;
  getRoleById: (id: number) => Promise<IRolesDetailed>;
  handleRolesSearch: (str: string) => void;
}

export interface ModalContextData {
  categoryIsOpen: boolean;
  setCategoryIsOpen: Dispatch<SetStateAction<boolean>>;
  agentOptionsIsOpen: boolean;
  setAgentOptionsIsOpen: Dispatch<SetStateAction<boolean>>;
  roleOptionsIsOpen: boolean;
  setRoleOptionsIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface PaginateContextData {
  paginatedAgents: IAgents[];
  handleLoadMoreAgents: () => void;
  canLoadMoreAgents: boolean;
  paginatedRoles: IRoles[];
  handleLoadMoreRoles: () => void;
  canLoadMoreRoles: boolean;
}

export interface IAgents {
  agent_id: string;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: ActiveOrInactive;
}

export interface IAgentsDetailed {
  id: string;
  name: string;
  email: string;
  phone: IPhone;
  document: IDocument;
  birth_date: Date;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: ActiveOrInactive;
}

export interface IRoles {
  name: string;
  departament: string;
  agents_quantity: number;
}

export interface IRolesDetailed {
  role: {
    name: string;
    department: string;
    grouprules: ReadWriteDelete[];
  };
}

export interface IPhone {
  ddd: string;
  ddi: string;
  number: string;
}

export interface IDocument {
  type: CPF;
  number: string;
}
