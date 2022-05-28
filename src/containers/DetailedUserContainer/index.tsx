import React, { useEffect, useState } from 'react';
import { useAgents } from '../../providers/agents';
import { IAgentsDetailed } from '../../ts/interfaces';
import {
  Container,
  NameContainer,
  OrganizationalData,
  PersonalInfoCards,
  PersonalInformation,
} from './style';
import { IoPersonOutline } from 'react-icons/io5';
import { BiNews, BiPhoneCall } from 'react-icons/bi';
import { FiCalendar } from 'react-icons/fi';
import { InputAdornment, Select, TextField } from '@mui/material';
import { AiOutlineCaretDown } from 'react-icons/ai';

interface DetailedUserContainerProps {
  id: number;
}

const DetailedUserContainer = ({ id }: DetailedUserContainerProps) => {
  const { getAgentById } = useAgents();

  const [selectedAgent, setSelectedAgent] = useState<IAgentsDetailed>(
    {} as IAgentsDetailed
  );

  const fetchRole = async () => {
    setSelectedAgent(await getAgentById(id));
  };

  useEffect(() => {
    fetchRole();
  }, []);

  return (
    <>
      {selectedAgent.name && (
        <Container>
          <NameContainer>
            <div>
              <IoPersonOutline size={30} />
            </div>
            <div>
              <h3>{selectedAgent.name}</h3>
              <p>{selectedAgent.email}</p>
            </div>
          </NameContainer>
          <PersonalInformation>
            <h3>Informações Pessoais</h3>
            <div>
              <PersonalInfoCards>
                <div>
                  <BiNews />
                </div>
                <div>
                  <h4>{selectedAgent.document.type}</h4>
                  <p>{selectedAgent.document.number}</p>
                </div>
              </PersonalInfoCards>
              <PersonalInfoCards>
                <div>
                  <BiPhoneCall />
                </div>
                <div>
                  <h4>Telefone</h4>
                  <p>{`+${selectedAgent.phone.ddi} ${
                    selectedAgent.phone.ddd
                  } ${selectedAgent.phone.number.slice(
                    0,
                    4
                  )} ${selectedAgent.phone.number.slice(4)}`}</p>
                </div>
              </PersonalInfoCards>
              <PersonalInfoCards>
                <div>
                  <FiCalendar />
                </div>
                <div>
                  <h4>Nascimento</h4>
                  <p>
                    {new Date(selectedAgent.birth_date).toLocaleDateString(
                      'pt-BR'
                    )}
                  </p>
                </div>
              </PersonalInfoCards>
            </div>
          </PersonalInformation>
          <OrganizationalData>
            <h3>Dados Organizacionais</h3>
            <div>
              <TextField
                label={'Departamento'}
                value={selectedAgent.department}
                sx={{
                  input: {
                    color: '#587169',
                    borderColor: '#CAD6D1',
                    backgroundColor: '#F5FAF8',
                    fontWeight: 500,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AiOutlineCaretDown />
                    </InputAdornment>
                  ),
                  readOnly: true,
                  unselectable: 'off',
                }}
              />
              <TextField
                label={'Cargo'}
                value={selectedAgent.role}
                disabled
                sx={{
                  input: {
                    color: '#587169',
                    borderColor: '#CAD6D1',
                    backgroundColor: '#F5FAF8',
                    fontWeight: 500,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AiOutlineCaretDown />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                label={'Unidade'}
                value={selectedAgent.branch}
                sx={{
                  input: {
                    color: '#587169',
                    borderColor: '#CAD6D1',
                    backgroundColor: '#F5FAF8',
                    fontWeight: 500,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AiOutlineCaretDown />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                label={'Status'}
                value={selectedAgent.status === 'active' ? 'Ativo' : 'Inativo'}
                sx={{
                  input: {
                    color: '#587169',
                    borderColor: '#CAD6D1',
                    backgroundColor: '#F5FAF8',
                    fontWeight: 500,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AiOutlineCaretDown />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </div>
          </OrganizationalData>
        </Container>
      )}
    </>
  );
};

export default DetailedUserContainer;
