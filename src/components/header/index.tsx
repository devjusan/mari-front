import React from 'react';
import Styles from './styles';

const Header: React.FC = () => (
  <Styles.Header>
    <nav>
      <ul>
        <li>
          <a href="/#">Início</a>
        </li>
        <li>
          <a href="#use">Como usar</a>
        </li>
      </ul>
    </nav>
    <Styles.Title>Mari</Styles.Title>
  </Styles.Header>
);

export default Header;
