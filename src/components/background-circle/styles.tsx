import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: -8rem;
  right: -20rem;

  z-index: -1;

  svg {
    width: 62.5vw;
  }
`;

const ImgContainer = styled.div``;

const ImgLogoContainer = styled.div`
  position: absolute;
  top: 12rem;
  right: -5rem;

  @media (max-width: 1300px) {
    right: 5rem;
  }

  @media (max-width: 970px) {
    right: 10rem;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

export default { Container, ImgContainer, ImgLogoContainer };
