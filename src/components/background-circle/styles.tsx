import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: -8rem;
  right: -20rem;

  z-index: -1;

  svg {
    width: 62.5vw;
  }

  &::after {
    position: relative;
  }
`;

const ImgContainer = styled.div``;

const ImgLogoContainer = styled.div`
  position: absolute;
  top: 12rem;
  right: 5rem;
`;

export default { Container, ImgContainer, ImgLogoContainer };
