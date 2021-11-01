import styled from 'styled-components';

const Container = styled.main`
  position: relative;

  display: flex;
  flex-flow: nowrap column;

  padding: 0 16rem;

  @media (min-width: 1536px) {
    padding: 0 45rem;
  }

  @media (max-width: 996px) {
    padding: 0 5rem;
  }
`;

export default { Container };
