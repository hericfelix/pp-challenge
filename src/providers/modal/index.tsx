import { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { ModalContextData, ProviderProps } from '../../ts/interfaces';

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [categoryIsOpen, setCategoryIsOpen] = useState<boolean>(false);
  const [agentOptionsIsOpen, setAgentOptionsIsOpen] = useState<boolean>(false);
  const [roleOptionsIsOpen, setRoleOptionsIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        categoryIsOpen,
        agentOptionsIsOpen,
        roleOptionsIsOpen,
        setAgentOptionsIsOpen,
        setCategoryIsOpen,
        setRoleOptionsIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
