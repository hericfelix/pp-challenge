import React from 'react';
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
import { InputAdornment, TextField } from '@mui/material';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { cpfFormatter, phoneFormatter } from '../../utils';

interface DetailedUserContainerProps {
  agent: IAgentsDetailed;
}

const DetailedUserContainer = ({ agent }: DetailedUserContainerProps) => {
  return (
    <Container>
      <NameContainer>
        <div>
          <IoPersonOutline size={30} />
        </div>
        <div>
          <h3>{agent.name}</h3>
          <p>{agent.email}</p>
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
              <h4>{agent.document.type}</h4>
              <p>{cpfFormatter(agent.document.number)}</p>
            </div>
          </PersonalInfoCards>
          <PersonalInfoCards>
            <div>
              <BiPhoneCall />
            </div>
            <div>
              <h4>Telefone</h4>
              <p>{phoneFormatter(agent.phone)}</p>
            </div>
          </PersonalInfoCards>
          <PersonalInfoCards>
            <div>
              <FiCalendar />
            </div>
            <div>
              <h4>Nascimento</h4>
              <p>{new Date(agent.birth_date).toLocaleDateString('pt-BR')}</p>
            </div>
          </PersonalInfoCards>
        </div>
      </PersonalInformation>
      <OrganizationalData>
        <h3>Dados Organizacionais</h3>
        <div>
          <TextField
            label={'Departamento'}
            value={agent.department}
            sx={{
              backgroundColor: '#F5FAF8',
              input: {
                color: '#587169',
                borderColor: '#CAD6D1',
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
            label={'Cargo'}
            value={agent.role}
            sx={{
              backgroundColor: '#F5FAF8',
              input: {
                color: '#587169',
                borderColor: '#CAD6D1',
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
            value={agent.branch}
            sx={{
              backgroundColor: '#F5FAF8',
              input: {
                color: '#587169',
                borderColor: '#CAD6D1',
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
            value={agent.status === 'active' ? 'Ativo' : 'Inativo'}
            sx={{
              backgroundColor: '#F5FAF8',
              input: {
                color: '#587169',
                borderColor: '#CAD6D1',
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
  );
};

export default DetailedUserContainer;
