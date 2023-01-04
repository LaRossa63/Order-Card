import { Footer, Header, Map, Orders } from 'components/Main';
import React from 'react';
import styled from 'styled-components';

export const Main = () => {
  return (
    <>
      <Header />

      <ContainerWrapper>
        <Container>
          <Orders />
          <Map />
        </Container>
      </ContainerWrapper>

      <Footer />
    </>
  );
};

const ContainerWrapper = styled.div`
  padding: 0 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 15px;
`;
