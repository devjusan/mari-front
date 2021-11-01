import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;

  align-items: center;
  gap: 2rem;

  width: 100%;

  height: 50vh;
`;

const AsideContent = styled.aside`
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  gap: 2rem;

  width: 54rem;
  height: 100%;
  margin-bottom: 20rem;
`;

const TitleContainer = styled.div``;

const Title = styled.h1``;

const TextContainer = styled.div`
  display: flex;
  flex-flow: nowrap column;
  gap: 2rem;
`;

const Text = styled.p``;

const LeftContainer = styled.div`
  position: absolute;
  right: 0;

  z-index: -1;

  @media (max-width: 1160px) {
    position: relative;
    right: 0;
  }
`;

export default {
  Container,
  Title,
  TitleContainer,
  AsideContent,
  Text,
  TextContainer,
  LeftContainer,
};
