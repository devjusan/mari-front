import React from 'react';
import Styles from './styles';

const Home: React.FC = () => (
  <Styles.Container>
    <Styles.AsideContent>
      <Styles.TitleContainer>
        <Styles.Title>
          Introduce Your Product Quickly & Effectively
        </Styles.Title>
      </Styles.TitleContainer>
      <Styles.TextContainer>
        <Styles.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </Styles.Text>
      </Styles.TextContainer>
    </Styles.AsideContent>
  </Styles.Container>
);
export default Home;
