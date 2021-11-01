import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  display: flex;
  flex-flow: nowrap column;
  max-width: 100vw;
  min-height: 100vh;

  padding: 0 16rem;

  @media (min-width: 1536px) {
    padding: 0 45rem;
  }

  @media (max-width: 996px) {
    padding: 0 5rem;
  }

  @media (max-width: 626px) {
    padding: 0 1rem;
  }
`;

export default { Container };
