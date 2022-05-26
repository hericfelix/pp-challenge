import { ReactNode } from 'react';
import { ActiveOrInactive, CPF, ReadWriteDelete } from '../types';

export interface ProviderProps {
  children: ReactNode;
}

export interface AgentsContextData {
  agents: IAgents[];
  getAgents: () => void;
  getAgentById: (id: number) => void;
}

export interface RolesContextData {
  roles: IRoles[];
  getRoles: () => void;
  getRoleById: (id: number) => void;
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
  department: string;
  agents_quantity: number;
}

export interface IRolesDetailed {
  name: string;
  department: string;
  grouprules: ReadWriteDelete[];
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
