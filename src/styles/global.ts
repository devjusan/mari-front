import { createGlobalStyle } from 'styled-components';
import variables from '../utils/variables';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 10px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    main {
        overflow-x: hidden;
    }
    
    h1 {
        font-weight: 500;
        font-size: 5rem;
        line-height: 6.6rem;
        letter-spacing: 1px;
        color: ${variables.colorPrimary};
    }     

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 3rem;
        color: ${variables.colorSecondary};

    }

    @media (max-width: 736px) {
        h1 {
            font-size: 3.5rem;
            line-height: 4.5rem;
        }

        p {
            font-size: 1.5rem;
        line-height: 2.5rem;
        }
    }    
`;

export default Global;
