import React from 'react';
import Styles from './styles';

const Header: React.FC = () => (
  <Styles.Header>
    <nav>
      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Aplicação</li>
      </ul>
    </nav>
    <Styles.Title>Mari</Styles.Title>
  </Styles.Header>
);

export default Header;
