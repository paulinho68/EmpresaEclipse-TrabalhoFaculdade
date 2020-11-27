import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #FFF;
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-family: 'Roboto', serif;
        font-size:16px;
    }

    p{
        font-family: 'Roboto', serif;
        font-weight: 400;
        font-size: 18px;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight:700;
    }

    button{
        cursor: pointer;
    }
`;