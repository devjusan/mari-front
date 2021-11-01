import styled from 'styled-components';
import variables from '../../utils/variables';

const Header = styled.header`
  padding: 1.8rem 0;

  nav ul {
    display: flex;
    gap: 6rem;

    list-style: none;
  }

  nav ul li {
    cursor: pointer;
    font-size: 1.4rem;
    color: ${variables.colorSecondary};
    line-height: 24px;

    transition: color 0.3s ease;
  }

  nav ul li:hover {
    color: black;
  }
`;

export default { Header };