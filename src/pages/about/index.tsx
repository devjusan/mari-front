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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </Styles.Text>
        <Styles.Text>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </Styles.Text>
      </Styles.TextContainer>
    </Styles.AsideContent>
    <Styles.RightContainer>
      <AsideSvg />
    </Styles.RightContainer>
  </Styles.Container>
);

export default About;
