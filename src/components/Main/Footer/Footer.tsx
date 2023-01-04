import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <Text>
        Тестовое задание выполнил для
        <Link href="https://intelogis.ru/"> Intelogis</Link>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;

  box-shadow: 0px 1px 5px #fcfcfd;
  background-color: #eeeef7;
  border-radius: 12px 12px 0 0;
`;

const Text = styled.h3``;

const Link = styled.a``;
