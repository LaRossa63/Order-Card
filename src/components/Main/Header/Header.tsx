import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <Text>Список заказов</Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;

  box-shadow: 0px 1px 5px #fcfcfd;
  background-color: #eeeef7;
  border-radius: 0 0 12px 12px;
`;

const Text = styled.h3`
  font-size: 24px;
`;
