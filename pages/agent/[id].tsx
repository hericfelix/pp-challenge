import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Header from '../../src/components/Header';
import Sidebar from '../../src/components/Sidebar';
import DetailedUserContainer from '../../src/containers/DetailedUserContainer';
import { IAgentsDetailed } from '../../src/ts/interfaces';
import { Container, ReturnIcon } from './_style';

interface AgentProps {
  selectedAgent: IAgentsDetailed;
}

const Agent = ({ selectedAgent }: AgentProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Container>
        <div>
          <div>
            <Link href="/">
              <ReturnIcon>
                <AiOutlineArrowLeft />
              </ReturnIcon>
            </Link>
            <h2>Detalhes do colaborador</h2>
          </div>
          <DetailedUserContainer agent={selectedAgent} />
        </div>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://pp-api-desafio.herokuapp.com/agent/${id}`)
    .then((res) => res.json())
    .catch((err) => undefined);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: { selectedAgent: res.agent },
  };
}

export default Agent;
