import { Footer, Header, Map, Orders } from 'components/Main';
import React from 'react';
import styled from 'styled-components';

export const Main = () => {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Content>
          <Orders />
          <Map />
        </Content>
      </Container>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 30px 0;
  padding: 0 15px;
  gap: 15px;
`;
