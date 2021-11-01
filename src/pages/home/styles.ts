import styled from 'styled-components';

const Container = styled.section`
  position: relative;

  display: flex;
  flex-flow: nowrap column;
  gap: 2rem;
  justify-content: center;

  height: 100vh;
`;

const AsideContent = styled.aside`
  display: flex;
  flex-flow: nowrap column;
  gap: 2rem;

  width: 54rem;
  margin-bottom: 15rem;
  @media (max-width: 726px) {
    width: 100%;
  }
`;

const TitleContainer = styled.div``;

const Title = styled.h1``;

const TextContainer = styled.div``;

const Text = styled.p``;

export default {
  Container,
  Title,
  TitleContainer,
  AsideContent,
  Text,
  TextContainer,
};
