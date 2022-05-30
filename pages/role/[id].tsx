import { InputAdornment, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineCaretDown } from 'react-icons/ai';
import Header from '../../src/components/Header';
import Sidebar from '../../src/components/Sidebar';
import DetailedRoleTable from '../../src/containers/DetailedRoleTable';
import { IRolesDetailed } from '../../src/ts/interfaces';
import {
  BottomData,
  Container,
  Content,
  ReturnIcon,
  RoleData,
  TopData,
} from '../../styles/rolePage.style';

interface RoleProps {
  selectedRole: IRolesDetailed;
}

const Role = ({ selectedRole }: RoleProps) => {
  return (
    <>
      <Header />
      <Sidebar />

      <Container>
        <Content>
          <div>
            <div>
              <Link href="/">
                <ReturnIcon>
                  <AiOutlineArrowLeft />
                </ReturnIcon>
              </Link>
              <h2>Cargos e Permissões</h2>
            </div>
            <RoleData>
              <TopData>
                <h3>Dados do cargo</h3>
                <div>
                  <TextField
                    label={'Departamento'}
                    value={selectedRole.role.department}
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
                    value={selectedRole.role.name}
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
              </TopData>
              <BottomData>
                <h3>Listagem de permissões</h3>
                <DetailedRoleTable role={selectedRole} />
              </BottomData>
            </RoleData>
          </div>
        </Content>
      </Container>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const res = await fetch(`https://pp-api-desafio.herokuapp.com/role/${id}`)
    .then((res) => res.json())
    .catch((err) => undefined);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: { selectedRole: res },
  };
}

export default Role;
