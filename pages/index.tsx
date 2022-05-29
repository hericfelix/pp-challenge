import { InputAdornment, Modal, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiLoader, FiSearch } from 'react-icons/fi';
import AgentCard from '../src/components/AgentCard';
import AgentOptions from '../src/components/AgentOptions';
import Button from '../src/components/Button';
import Header from '../src/components/Header';
import RoleCard from '../src/components/RoleCard';
import RoleOptions from '../src/components/RoleOptions';
import SelectCategory from '../src/components/SelectCategory';
import Sidebar from '../src/components/Sidebar';
import AgentsTable from '../src/containers/AgentsTable';
import RolesTable from '../src/containers/RolesTable';

import { useAgents } from '../src/providers/agents';
import { useModal } from '../src/providers/modal';
import { usePaginate } from '../src/providers/paginate';
import { useRoles } from '../src/providers/roles';
import { AgentsOrRoles } from '../src/ts/types';
import {
  CardsList,
  DesktopCategorySelector,
  DesktopContainer,
  DesktopContent,
  MobileContainer,
  MobileContent,
} from './_styles';

const Home: NextPage = () => {
  const { handleAgentsSearch } = useAgents();
  const { handleRolesSearch } = useRoles();
  const {
    categoryIsOpen,
    agentOptionsIsOpen,
    roleOptionsIsOpen,
    setAgentOptionsIsOpen,
    setCategoryIsOpen,
    setRoleOptionsIsOpen,
  } = useModal();
  const {
    canLoadMoreAgents,
    handleLoadMoreAgents,
    paginatedAgents,
    paginatedRoles,
    canLoadMoreRoles,
    handleLoadMoreRoles,
  } = usePaginate();
  const [category, setCategory] = useState<AgentsOrRoles>('agents');

  return (
    <>
      <Header />
      <Sidebar />
      <MobileContainer>
        {category === 'agents' ? <h2>Colaboradores</h2> : <h2>Cargos</h2>}
        <MobileContent>
          <div>
            <TextField
              value={category === 'agents' ? 'Colaboradores' : 'Cargos'}
              onClick={() => setCategoryIsOpen(true)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <BsThreeDotsVertical size={'15px'} />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
            <TextField
              placeholder="Pesquise por nome"
              onChange={(evt) => {
                handleAgentsSearch(evt.target.value);
                handleRolesSearch(evt.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSearch size={'15px'} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            {category === 'agents' ? (
              <>
                <h3>Listagem de Colaboradores</h3>
                <CardsList>
                  {paginatedAgents.map((el) => (
                    <AgentCard
                      setAgentOptionsIsOpen={setAgentOptionsIsOpen}
                      agent={el}
                      key={el.agent_id}
                    />
                  ))}
                </CardsList>
                {canLoadMoreAgents && (
                  <Button onClick={handleLoadMoreAgents}>
                    <FiLoader />
                    <p>Carregar mais</p>
                  </Button>
                )}
              </>
            ) : (
              <>
                <h3>Listagem de Cargos</h3>
                <CardsList>
                  {paginatedRoles.map((el) => (
                    <RoleCard
                      setRoleOptionsIsOpen={setRoleOptionsIsOpen}
                      role={el}
                      key={el.name + el.departament}
                    />
                  ))}
                </CardsList>
              </>
            )}
          </div>
        </MobileContent>
        <Modal
          open={categoryIsOpen}
          onClose={() => {
            setCategoryIsOpen(false);
          }}
        >
          <SelectCategory
            changeCategory={setCategory}
            closeModal={() => setCategoryIsOpen(false)}
          />
        </Modal>
        <Modal
          open={agentOptionsIsOpen}
          onClose={() => {
            setAgentOptionsIsOpen(false);
          }}
        >
          <AgentOptions closeModal={() => setAgentOptionsIsOpen(false)} />
        </Modal>
        <Modal
          open={roleOptionsIsOpen}
          onClose={() => {
            setRoleOptionsIsOpen(false);
          }}
        >
          <RoleOptions closeModal={() => setRoleOptionsIsOpen(false)} />
        </Modal>
      </MobileContainer>
      <DesktopContainer>
        <DesktopContent>
          <h2>Organização</h2>
          <div>
            <DesktopCategorySelector category={category}>
              <button onClick={() => setCategory('agents')}>
                Colaboradores
              </button>
              <button onClick={() => setCategory('roles')}>Cargos</button>
            </DesktopCategorySelector>
            <TextField
              placeholder="Pesquise por nome"
              onChange={(evt) => {
                handleAgentsSearch(evt.target.value);
                handleRolesSearch(evt.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSearch size={'15px'} />
                  </InputAdornment>
                ),
              }}
            />
            {category === 'agents' ? (
              <>
                <h3>Listagem de colaboradores</h3>
                <AgentsTable />
              </>
            ) : (
              <>
                <h3>Listagem de cargos</h3>
                <RolesTable />
              </>
            )}
          </div>
        </DesktopContent>
      </DesktopContainer>
    </>
  );
};

export default Home;
