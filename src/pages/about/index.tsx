import React from 'react';
import Styles from './styles';
import { ReactComponent as AsideSvg } from '../../assets/imgs/phone.svg';

const About: React.FC = () => (
  <Styles.Container id="use">
    <Styles.AsideContent>
      <Styles.TitleContainer>
        <Styles.Title>Como Utilizar a Assistente Virtual</Styles.Title>
      </Styles.TitleContainer>
      <Styles.TextContainer>
        <Styles.Text>
          No canto inferior direito, de cor roxa, encontra-se o botão para
          iniciar o chat com a assistente virtual Mari. Ao iniciar, deverá ser
          fornecidas as informações sobre o seu caso.
        </Styles.Text>
        <Styles.Text>
          Certifique-se de informar os seus dados de acordo com o padrão
          fornecido pela IA
        </Styles.Text>
      </Styles.TextContainer>
    </Styles.AsideContent>
    <Styles.RightContainer>
      <AsideSvg />
    </Styles.RightContainer>
  </Styles.Container>
);

export default About;
