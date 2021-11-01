import React from 'react';
import Styles from './styles';
import { ReactComponent as AsideSvg } from '../../assets/imgs/about.svg';

const About: React.FC = () => (
  <Styles.Container>
    <Styles.AsideContent>
      <Styles.TitleContainer>
        <Styles.Title>Light, Fast & Powerful</Styles.Title>
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
    <Styles.LeftContainer>
      <AsideSvg />
    </Styles.LeftContainer>
  </Styles.Container>
);

export default About;
