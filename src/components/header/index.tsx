import React from 'react';
import Styles from './styles';

const Header: React.FC = () => (
  <Styles.Header>
    {' '}
    <nav>
      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  </Styles.Header>
);

export default Header;
