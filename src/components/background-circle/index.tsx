import React from 'react';
import Styles from './styles';
import { ReactComponent as Logo } from '../../assets/imgs/logo.svg';

const BackgroundCircle: React.FC = () => (
  <Styles.Container>
    <Styles.ImgContainer>
      <svg
        height="800"
        viewBox="0 0 1019 1017"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M318.635 -57.3058C198.697 43.2166 180.111 233.298 98.8809 373.527C70.6041 422.322 34.0667 465.992 15.0036 520.123C-28.7619 644.026 31.472 784.572 112.093 882.981C150.536 929.927 195.44 972.936 249.77 992.723C291.55 1007.94 336.348 1008.57 380.325 1008.97L1150.79 1016.9C1236.81 1017.77 1332.39 1014.62 1394.24 948.208C1436.87 902.478 1454.18 835.692 1468.88 771.944C1486.93 693.613 1503.3 608.546 1475.2 533.94C1443.11 448.582 1361.96 400.21 1311.55 326.555C1229.74 207.223 1231.62 26.7314 1127.44 -68.5336C1078.8 -112.996 1014.62 -130.432 952.083 -139.15C834.184 -155.609 722.506 -124.541 606.725 -128.873C507.756 -132.572 400.739 -126.126 318.635 -57.3058Z"
          fill="#E7ECFF"
        />
      </svg>
    </Styles.ImgContainer>
    <Styles.ImgLogoContainer>
      <Logo />
    </Styles.ImgLogoContainer>
  </Styles.Container>
);

export default BackgroundCircle;
