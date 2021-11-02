import styled from 'styled-components';

const Container = styled.main`
  position: relative;

  overflow: hidden;

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
