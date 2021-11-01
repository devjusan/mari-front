import React from 'react';
import BackgroundCircle from '../../components/background-circle';
import Header from '../../components/header';
import About from '../about';
import Home from '../home';
import Styles from './styles';

const Main: React.FC = () => (
  <Styles.Container>
    <Header />
    <Home />
    <About />
    <BackgroundCircle />
  </Styles.Container>
);

export default Main;
