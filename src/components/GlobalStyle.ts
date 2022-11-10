import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto';
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
