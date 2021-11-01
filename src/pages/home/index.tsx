import React from 'react';
import Styles from './styles';

const Home: React.FC = () => (
  <Styles.Container>
    <Styles.AsideContent>
      <Styles.TitleContainer>
        <Styles.Title>Conheça a Assistente Virtual Mari</Styles.Title>
      </Styles.TitleContainer>
      <Styles.TextContainer>
        <Styles.Text>
          A Mari é uma assistente virtual que visa a integridade física e mental
          das vítimas de abuso sexual. Por meio da Inteligência Artificial da
          API da IBM, Watson Assistant, a Mari proporciona o máximo de conforto
          e confiança para as pessoas que passaram por algum tipo de abuso, seja
          sexual ou doméstico que desejam prestar depoimento, evitando perguntas
          constrangedoras e proporcionando acolhimento.
        </Styles.Text>
      </Styles.TextContainer>
    </Styles.AsideContent>
  </Styles.Container>
);
export default Home;
